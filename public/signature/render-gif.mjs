import puppeteer from 'puppeteer';
import { mkdir, rm, readdir } from 'fs/promises';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FRAMES_DIR = path.join(__dirname, 'frames');
const OUT_GIF = path.join(__dirname, 'sig.gif');
const URL = 'file://' + path.join(__dirname, 'preview.html');

const WIDTH = 600;
const HEIGHT = 220;
const LOOP_MS = 12000;
const FPS = 15;
const TOTAL_FRAMES = (LOOP_MS / 1000) * FPS;

await rm(FRAMES_DIR, { recursive: true, force: true });
await mkdir(FRAMES_DIR, { recursive: true });

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-web-security'],
});
const page = await browser.newPage();
await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 1 });
await page.goto(URL, { waitUntil: 'networkidle0' });

await page.evaluate(() => {
  document.body.style.cssText = 'margin:0;padding:0;overflow:hidden;background:#fff;';
  document.querySelectorAll('body > *').forEach(el => { el.style.display = 'none'; });
  const card = document.querySelector('.sig-card');
  card.style.display = 'block';
  card.style.position = 'fixed';
  card.style.left = '0';
  card.style.top = '0';
  card.style.margin = '0';
});

await page.evaluateHandle('document.fonts.ready');
await new Promise(r => setTimeout(r, 1500));

console.log(`Capturing ${TOTAL_FRAMES} frames at ${FPS}fps...`);
const startTime = Date.now();
for (let i = 0; i < TOTAL_FRAMES; i++) {
  const targetTime = startTime + (i * 1000 / FPS);
  const wait = targetTime - Date.now();
  if (wait > 0) await new Promise(r => setTimeout(r, wait));
  await page.screenshot({
    path: path.join(FRAMES_DIR, `frame_${String(i).padStart(4, '0')}.png`),
    clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT },
    omitBackground: false,
  });
}
await browser.close();

console.log('Encoding GIF with ffmpeg (palettegen for quality)...');
const palettePath = path.join(FRAMES_DIR, 'palette.png');
execSync(
  `ffmpeg -y -framerate ${FPS} -i "${FRAMES_DIR}/frame_%04d.png" -vf "fps=${FPS},scale=${WIDTH}:${HEIGHT}:flags=lanczos,palettegen=stats_mode=diff" "${palettePath}"`,
  { stdio: 'pipe' }
);
execSync(
  `ffmpeg -y -framerate ${FPS} -i "${FRAMES_DIR}/frame_%04d.png" -i "${palettePath}" -lavfi "fps=${FPS},scale=${WIDTH}:${HEIGHT}:flags=lanczos [x]; [x][1:v] paletteuse=dither=bayer:bayer_scale=4:diff_mode=rectangle" "${OUT_GIF}"`,
  { stdio: 'pipe' }
);

const stats = (await import('fs')).statSync(OUT_GIF);
console.log(`Done. ${OUT_GIF} (${(stats.size / 1024).toFixed(0)} KB)`);
