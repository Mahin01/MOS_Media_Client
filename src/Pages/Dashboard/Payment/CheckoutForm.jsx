import { CardElement } from '@stripe/react-stripe-js';
import React from 'react';

const CheckOutForm = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
    }
    return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    );
};

export default CheckOutForm;