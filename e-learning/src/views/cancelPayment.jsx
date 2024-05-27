import React from 'react';
import { useNavigate } from 'react-router-dom';

function CancelPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Payment Canceled</h2>
      <p>Your payment was canceled. Please try again.</p>
      <button onClick={() => navigate('/pricing')}>Go Back to Pricing</button>
    </div>
  );
}

export default CancelPage;