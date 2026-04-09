import { useNavigate } from 'react-router-dom';

export default function BackButton({ to = '/', label = '‹ Back', extraClass = '' }) {
  const navigate = useNavigate();
  return (
    <button className={`back-btn${extraClass ? ` ${extraClass}` : ''}`} onClick={() => navigate(to)}>
      {label}
    </button>
  );
}
