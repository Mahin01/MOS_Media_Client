import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const PaymentHistory = () => {
    const {user} = useAuth();
    const [paymentHistory, setPaymentHistory] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/payment-history")
        .then((res) => res.json())
        .then((data) => setPaymentHistory(data))
        .catch((error) => console.log(error));
    },[]);
  
    const studentPaymentHistory = paymentHistory.filter(payment => payment.email === user?.email);
    console.log(studentPaymentHistory);
    return (
      <div className="w-full px-10">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Payment Id</th>
                <th>Course Name</th>
                <th>Instructor Name</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {studentPaymentHistory.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <th>{item.date}</th>
                  <td>{item.transactionId}</td>
                  <td>{item.className}</td>
                  <td>{item.instructor}</td>
                  <td>${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default PaymentHistory;