import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {  
    const data = useLoaderData();
    const {price} = data;

    return (
        <div>
            <h2 className="text-3xl text-center"> Make Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm data={data} price={price}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;