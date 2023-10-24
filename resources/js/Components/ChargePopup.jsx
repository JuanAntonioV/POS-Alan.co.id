import React, { useEffect, useState, useMemo } from 'react';

const ChargePopup = ({ setIsPopupOpen, total })  => {
  const [totalCharge, setTotalCharge] = useState(0);
  const [payment, setPayment] = useState(0);
  const [change, setChange] = useState(0);


  useEffect(() => {
    setTotalCharge(total); 
    console.log(total);
    }, [total]);

    useEffect(() => {
        setChange(payment - totalCharge);
        console.log(change);
        }
        , [payment, totalCharge]);
    

  const onChangePayment = (e) => {
    if (Number(e.target.value) < 0) {
      setPayment(0);
    }
    else if (Number(e.target.value) > totalCharge) {
      setPayment(totalCharge);
    }
    else if (isNaN(Number(e.target.value))) {
      setPayment(0);
    }
    else {
      setPayment(Number(e.target.value));
    }
  }

  return (
    <div className="z-50 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-xl font-semibold mb-2">Charge</h2>
        <div className="mb-4">
          <p>
            Total Bill {total < 0 ? 0 : total}
          </p>
        </div>
        <div className="mb-4">
          <label htmlFor="payment" className="block text-gray-700">Payment:</label>
          <input
            type="text"
            id="payment"
            value={payment}
            onChange={onChangePayment}

            className="w-full border rounded py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <p>Total change: {change}</p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => setIsPopupOpen(false)}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md mr-2"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChargePopup;
