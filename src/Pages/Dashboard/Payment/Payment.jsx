import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData} from "react-router-dom";
import CheckoutForm from "./CheckoutFrom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const itemData = useLoaderData();

  return (
    <div>
      <h2 className="text-3xl text-center my-5">Make Payment</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm itemData={itemData}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;