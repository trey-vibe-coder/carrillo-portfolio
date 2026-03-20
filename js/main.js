// === VIEW SWITCHING (no inline handlers) ===
function hideAllViews() {
    ['home-view', 'portfolio-view', 'fun-view', 'about-view', 'fun-list-view'].forEach(id => {
        var el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
}

var homeNudgeTimers = [];
function clearHomeNudges() { homeNudgeTimers.forEach(function(t) { clearTimeout(t); }); homeNudgeTimers = []; }
function startHomeNudges() {
    clearHomeNudges();
    var btns = document.querySelectorAll('.home-nav-btn');
    var homeClicked = false;
    var homeView = document.getElementById('home-view');
    function onHomeClick() { homeClicked = true; clearHomeNudges(); }
    homeView.addEventListener('click', onHomeClick, { once: true });
    function doNudge(idx) {
        if (homeClicked) return;
        btns.forEach(function(b) { b.classList.add('nudge'); });
        setTimeout(function() { btns.forEach(function(b) { b.classList.remove('nudge'); }); }, 500);
    }
    homeNudgeTimers.push(setTimeout(function() { doNudge(0); }, 4000));
    homeNudgeTimers.push(setTimeout(function() { doNudge(1); }, 8000));
    homeNudgeTimers.push(setTimeout(function() { doNudge(2); }, 13000));
}

function showHome() {
    hideAllViews();
    document.getElementById('home-view').style.display = 'flex';
    document.addEventListener('click', function(e) {
    var linkEl = e.target.closest('[data-href]');
    if (linkEl) { window.open(linkEl.getAttribute('data-href'), '_blank'); }
});
startHomeNudges();
}

function showPortfolio() {
    hideAllViews();
    document.getElementById('portfolio-view').style.display = 'block';
    var icons = document.querySelectorAll('.desktop-icon, .desktop-title, .desktop-subtitle');
    icons.forEach(function(icon) {
        icon.style.animation = 'none';
        icon.offsetHeight;
        icon.style.animation = null;
    });
}

var rickrollTimer = null;
var funClicked = false;

function showFun() {
    hideAllViews();
    document.getElementById('fun-view').style.display = 'block';
    var popup = document.getElementById('funPopup');
    if (popup) popup.style.display = 'flex';
    funClicked = false;
    var rp = document.getElementById('rickrollPopup');
    if (rp) rp.style.display = 'none';
    if (rickrollTimer) clearTimeout(rickrollTimer);
    rickrollTimer = setTimeout(function() {
        if (!funClicked) {
            var rp = document.getElementById('rickrollPopup');
            if (rp) rp.style.display = 'flex';
        }
    }, 6000);
    document.getElementById('fun-view').addEventListener('click', function handler(e) {
        if (e.target.closest('.win95-rickroll') || e.target.closest('.win95-popup') || e.target.closest('.win95-close-btn') || e.target.closest('.win95-btn')) return;
        funClicked = true;
    });
}

function showFunList() {
    hideAllViews();
    document.getElementById('fun-list-view').style.display = 'flex';
}

function closeFunPopup() {
    var popup = document.getElementById('funPopup');
    if (popup) popup.style.display = 'none';
}

function showAbout() {
    hideAllViews();
    var about = document.getElementById('about-view');
    if (about) about.style.display = 'block';
    window.scrollTo(0, 0);
}

// === DELEGATED EVENT LISTENERS ===
document.addEventListener('click', function(e) {
    // Navigation buttons
    var navEl = e.target.closest('[data-nav]');
    if (navEl) {
        e.preventDefault();
        var dest = navEl.getAttribute('data-nav');
        if (dest === 'home') showHome();
        else if (dest === 'portfolio') showPortfolio();
        else if (dest === 'fun') showFun();
        else if (dest === 'funlist') showFunList();
        else if (dest === 'about') showAbout();
        return;
    }

    // Actions
    var actionEl = e.target.closest('[data-action]');
    if (actionEl) {
        var action = actionEl.getAttribute('data-action');
        if (action === 'closeFolder') closeFolder();
        else if (action === 'goBack') goBack();
        else if (action === 'closePopup') closeFunPopup();
        else if (action === 'openSummary') { var so = document.getElementById('summaryOverlay'); if (so) so.classList.add('show'); }
        else if (action === 'closeSummary') { var so = document.getElementById('summaryOverlay'); if (so) so.classList.remove('show'); }
        else if (action === 'closeRickroll') { var rp = document.getElementById('rickrollPopup'); if (rp) rp.style.display = 'none'; }
        return;
    }

    // File items (dynamically created)
    var fileEl = e.target.closest('[data-project]');
    if (fileEl) {
        var key = fileEl.getAttribute('data-project');
        var idx = parseInt(fileEl.getAttribute('data-idx'));
        openProject(key, idx);
        return;
    }
});

// Folder double-click
document.addEventListener('dblclick', function(e) {
    var folderEl = e.target.closest('[data-folder]');
    if (folderEl) {
        openFolder(folderEl.getAttribute('data-folder'));
    }
});

// === FINDER LOGIC ===
var projects = {
    analytics: {
        label: 'Analytics Projects',
        items: [
            { name: 'Data Analysis Project', desc: 'Classifying news headlines by subject using Naive Bayes, Logistic Regression, Forest Trees \u2014 over 240,000 rows.', links: [{ label: 'Part 1 \u2014 Thought Process', url: 'https://www.canva.com/design/DAHDGq1BdUA/R2cbKXQsYDcNIXEIaNK6gw/view' }, { label: 'Part 2 \u2014 Presentation', url: 'https://www.canva.com/design/DAHDGqZlyP0/iEK_cAzM_hD_TNZTBwdepQ/view' }] },
            { name: 'Marketing Analytics', desc: 'Predicting bowl game winners using logistic regression on historical data. AUC of 0.68.', links: [{ label: 'View Presentation', url: 'https://www.canva.com/design/DAG380yF7TE/E_UcGQhxm3L49vdWpwGzKQ/view' }] },
            { name: 'Data Viz in Tableau', desc: '5 interactive Tableau dashboards \u2014 segmentation, business performance, and marketing analytics.', links: [{ label: 'View Tableau Portfolio', url: 'https://public.tableau.com/app/profile/angel.carrillo7640/vizzes' }] },
            { name: 'Consumer Preferences', desc: 'Logistic regression and multinomial choice models to estimate purchase probabilities for product attributes.', links: [{ label: 'View Worksheets', url: 'https://www.canva.com/design/DAG26h1uywI/ynQCZwnGlB3ez_DiKw0xFg/view' }] },
            { name: 'Predictive Modeling', desc: 'Logistic regression with probability scoring and profit calculation for targeting decisions.', links: [{ label: 'View Worksheets', url: 'https://www.canva.com/design/DAG26h1uywI/ynQCZwnGlB3ez_DiKw0xFg/view' }] },
            { name: 'Conjoint Analysis', desc: 'Night club attributes survey \u2014 cover charge, music genre, wait time, and bottle service preferences.', links: [{ label: 'View Worksheets', url: 'https://www.canva.com/design/DAG26h1uywI/ynQCZwnGlB3ez_DiKw0xFg/view' }] }
        ]
    },
    strategy: {
        label: 'Strategy Projects',
        items: [
            { name: 'Warby Parker Growth', desc: 'Data-informed market penetration growth strategy analyzing consumer behavior, segmentation, and financial projections.', links: [{ label: 'View Presentation', url: 'https://www.canva.com/design/DAG6ZGB8r2g/wp1OsvwKKspSzTR_Tgf_VA/view' }] },
            { name: 'Texas Athletics', desc: 'Full-funnel marketing strategies: targeted advertising, smart nudges, SEO/SEM, and the Texas 100% Club.', links: [{ label: 'View Presentation', url: 'https://www.canva.com/design/DAG26dSA03w/ENMMFXouzmGlV137ANkJLw/view' }] },
            { name: 'Round Rock Honey', desc: "Media strategy for Round Rock Honey's retail expansion into Asheville, NC \u2014 leave-behind version.", links: [{ label: 'View Presentation', url: 'https://www.canva.com/design/DAG26R9ycnE/iP5EkhDBRQSN4JM0P2PXqQ/view' }] },
            { name: 'McCombs Case Challenge', desc: 'Marketing proposal addressing loneliness through community-driven strategies for ACL.', links: [{ label: 'View Presentation', url: 'https://www.canva.com/design/DAG26E7uVtw/vwln42CIUKP1UjyNBo-wPw/view' }] },
            { name: 'Salvation Army', desc: 'Multi-channel campaign to expand donor engagement and volunteer recruitment among millennials and Gen Z.', links: [{ label: 'View Presentation', url: 'https://www.canva.com/design/DAG26NW0JHE/Etgw7ZH_PVK3WRVKTFC1BA/view' }] },
            { name: 'Ocean Spray', desc: 'Redefining Ocean Spray as relevant year-round \u2014 814M impressions target, boosting household penetration.', links: [{ label: 'View Presentation', url: 'https://www.canva.com/design/DAG26XHrZeI/rlxyWpTwCBjutnjrkl_RpA/view' }] }
        ]
    },
    extra: {
        label: 'Extra Work',
        items: [
            { name: 'GDPR Lightning Talk', desc: '5-minute talk on GDPR compliance, key regulations, data privacy principles.', links: [{ label: 'View Presentation', url: 'https://www.canva.com/design/DAG26V6nA3I/Cz8I1yS62pwOqwaPVn64Yw/view' }] },
            { name: 'Startup Exec Summary', desc: 'AI-powered meal planning app \u2014 freemium/premium tiers, break-even within five months.', links: [{ label: 'View Doc', url: 'https://www.canva.com/design/DAG26klH_Vs/QTAvpRCh40N1Dc4A8orYBQ/view' }] },
            { name: 'Pacnet Investment', desc: 'Evaluating market potential and acquisition viability \u2014 recommends a $6M investment.', links: [{ label: 'View Doc', url: 'https://www.canva.com/design/DAG26kA13Is/Ij-22_Fp09LrdGGQH1t8Ng/view' }] },
            { name: 'Pharma Advertising', desc: 'Impact of US DTC pharmaceutical advertising on consumer behavior and public health.', links: [{ label: 'View Doc', url: 'https://www.canva.com/design/DAG26gBlN4Q/fw-c5lSmOeKuNm4KDAq7lg/view' }] },
            { name: 'Trademark Law', desc: 'Foundations of trademark law \u2014 common law vs registered trademarks, distinctiveness categories.', links: [{ label: 'View Doc', url: 'https://www.canva.com/design/DAG26rCsrgU/aTuYyAFk2TnsgBLETKIgxw/view' }] },
            { name: 'MSM Essays', desc: 'Essay #1: Lifelong learning & cohort experience. Essay #2: "Generation Flux" and adaptability.', links: [{ label: 'Essay #1', url: 'https://www.canva.com/design/DAG26p0R-JE/iisP0ue3NcOkr9SmjmARow/view' }, { label: 'Essay #2', url: 'https://www.canva.com/design/DAG26iurk5M/569snAESeN-DmMdQzTybxg/view' }] },
            { name: "Hook'd Magazine", desc: 'Original editorial content \u2014 "Twisting Tradition" and "Mr. UT Austin" features.', links: [{ label: 'Twisting Tradition', url: 'https://www.canva.com/design/DAG26vtrXIc/dhpK2j3QckbZ6XkD6BSekw/view' }, { label: 'Mr. UT Austin', url: 'https://www.canva.com/design/DAG26n6V178/s_sWO9zJ-BcJ1wHHTKIA8w/view' }, { label: "Hook'd Mag \u2197", url: 'https://www.hookdmag.com/' }] }
        ]
    },
    resources: {
        label: 'Resources',
        items: [
            { name: 'LinkedIn', desc: 'Connect with me on LinkedIn.', links: [{ label: 'Open LinkedIn', url: 'https://www.linkedin.com/in/angeltreycarrillo/' }] },
            { name: 'Resume', desc: 'View my current resume.', links: [{ label: 'Open Resume', url: 'https://drive.google.com/file/d/1dmrzjU0j6ehQBAICJ50X3NJXDC3_Fza5/view?usp=sharing' }] }
        ]
    }
};

function fileIconSVG(color1, color2) {
    return '<svg viewBox="0 0 56 66"><path d="M4 2h32l16 16v44a4 4 0 01-4 4H4a4 4 0 01-4-4V6a4 4 0 014-4z" fill="' + color1 + '"/><path d="M36 2l16 16H40a4 4 0 01-4-4V2z" fill="' + color2 + '" opacity="0.6"/></svg>';
}

var fileColors = { analytics: ['#3b82f6', '#60a5fa'], strategy: ['#8b5cf6', '#a78bfa'], extra: ['#f59e0b', '#fbbf24'], resources: ['#10b981', '#34d399'] };
var currentFolder = null;
var currentView = 'folder';

function openFolder(key) {
    currentFolder = key;
    currentView = 'folder';
    var data = projects[key];
    document.getElementById('finderTitle').textContent = data.label;
    document.getElementById('crumbActive').textContent = data.label;
    document.getElementById('backBtn').style.opacity = '0.4';
    var colors = fileColors[key];
    var html = '<div class="file-grid">';
    data.items.forEach(function(item, i) {
        html += '<div class="file-item" data-project="' + key + '" data-idx="' + i + '"><div class="file-icon">' + fileIconSVG(colors[0], colors[1]) + '<span class="file-ext">' + (key === 'analytics' ? 'DATA' : key === 'strategy' ? 'DECK' : key === 'resources' ? 'LINK' : 'DOC') + '</span></div><div class="file-label">' + item.name + '</div></div>';
    });
    html += '</div>';
    document.getElementById('finderContent').innerHTML = html;
    document.getElementById('finderOverlay').classList.add('show');
    document.getElementById('finderWindow').classList.add('show');
}

function openProject(key, idx) {
    currentView = 'project';
    var data = projects[key];
    var item = data.items[idx];
    var colors = fileColors[key];
    document.getElementById('finderTitle').textContent = item.name;
    document.getElementById('crumbActive').textContent = item.name;
    document.getElementById('backBtn').style.opacity = '1';
    var html = '<div style="padding:8px 6px 20px;"><div style="display:flex;align-items:flex-start;gap:18px;margin-bottom:22px;"><div style="width:56px;height:66px;flex-shrink:0;filter:drop-shadow(0 2px 8px rgba(0,0,0,0.3));">' + fileIconSVG(colors[0], colors[1]) + '</div><div><div style="font-weight:700;font-size:18px;margin-bottom:6px;letter-spacing:0.3px;">' + item.name + '</div><div style="font-size:13px;color:var(--text-dim);line-height:1.6;">' + item.desc + '</div></div></div><div style="border-top:1px solid var(--finder-border);padding-top:16px;"><div style="font-size:11px;text-transform:uppercase;letter-spacing:2px;color:var(--text-dim);margin-bottom:12px;font-weight:600;">Open With \u2197</div>';
    item.links.forEach(function(link) {
        html += '<a href="' + link.url + '" target="_blank" style="display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:8px;text-decoration:none;color:var(--text);margin-bottom:4px;border:1px solid var(--finder-border);"><div style="width:32px;height:32px;border-radius:8px;background:linear-gradient(135deg,' + colors[0] + ',' + colors[1] + ');display:flex;align-items:center;justify-content:center;font-size:14px;color:white;font-weight:700;">\u2197</div><div><div style="font-weight:600;font-size:13px;">' + link.label + '</div><div style="font-size:10px;color:var(--text-dim);margin-top:2px;">Opens in new tab</div></div></a>';
    });
    html += '</div></div>';
    document.getElementById('finderContent').innerHTML = html;
}

function goBack() {
    if (currentView === 'project' && currentFolder) { openFolder(currentFolder); }
    else { closeFolder(); }
}

function closeFolder() {
    document.getElementById('finderOverlay').classList.remove('show');
    document.getElementById('finderWindow').classList.remove('show');
    currentFolder = null;
    currentView = 'folder';
}

function updateClock() {
    var now = new Date();
    var opts = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' };
    var timeEl = document.getElementById('menuTime');
    if (timeEl) timeEl.textContent = now.toLocaleDateString('en-US', opts);
}
updateClock();
setInterval(updateClock, 30000);

startHomeNudges();
document.addEventListener('keydown', function(e) { 
    if (e.key === 'Escape') { 
        closeFolder(); 
        var so = document.getElementById('summaryOverlay'); 
        if (so) so.classList.remove('show'); 
    } 
});
document.getElementById('summaryOverlay').addEventListener('click', function(e) {
    if (e.target === this) this.classList.remove('show');
});
