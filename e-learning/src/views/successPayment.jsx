import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAxios from '../utils/useAxios';

function SuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const api = useAxios();
  const { state } = location;

  useEffect(() => {
    const finalizeSubscription = async () => {
    //   if (state && state.subscriptionType && state.durationMonths) {
        try {
        //   const endpoint = state.subscriptionType === 'subscribe' ? '/subscribe/' : '/extend_subscription/';
        //   await api.post(endpoint, { duration_months: state.durationMonths });
          toast.success('Subscription updated successfully', { autoClose: 3000 });
          navigate('/courses');
        } catch (error) {
          toast.error('Failed to update subscription. Please try again.', { autoClose: 3000 });
        }
    //   } else {
    //     toast.error('Invalid state. Please try again.', { autoClose: 3000 });
    //     navigate('/');
    //   }
    };

    finalizeSubscription();
  }, [api, navigate, state]);

  return (
    <div>
      <h2>Payment Successful</h2>
      <p>Your subscription has been updated. Redirecting to your courses...</p>
    </div>
  );
}

export default SuccessPage;