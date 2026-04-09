import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="not-found-view">
      <div className="not-found-window">
        <div className="not-found-titlebar">
          <span>&#9888; error_404.exe</span>
        </div>
        <div className="not-found-body">
          <div className="not-found-code">404</div>
          <div className="not-found-msg">this page doesn&rsquo;t exist</div>
          <button className="win95-btn" onClick={() => navigate('/')}>&#8592; Go Home</button>
        </div>
      </div>
    </div>
  );
}
