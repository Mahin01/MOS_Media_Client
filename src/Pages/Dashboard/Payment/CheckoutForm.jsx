import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const CheckOutForm = (data, price) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user}   = useAuth();
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
      if (price > 0) {
        axiosSecure.post('/create-payment-intent', { price })
          .then(res => {
              console.log(res.data.clientSecret)
              setClientSecret(res.data.clientSecret);
          })
        }
      }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });
    
        if (error) {
          setCardError(error.message);
          console.log('[error]', error);
        } else {
          setCardError('');
          console.log('[PaymentMethod]', paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
          clientSecret,
          {
              payment_method: {
                  card: card,
                  billing_details: {
                      email: user?.email || 'unknown',
                      name: user?.displayName || 'anonymous'
                  },
              },
          },
      );

      if (confirmError) {
          console.log(confirmError);
      }

      console.log('payment intent', paymentIntent)
    }
    return (
    <>
      <form className='w-full' onSubmit={handleSubmit}>
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
        <button className="btn btn-sm btn-primary my-5 px-10" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {cardError && <p className='text-red-600'>{cardError}</p>}
    </>
    );
};

export default CheckOutForm;