import React from "react";
import DtiHead from "../compo/DtiHead";
import { useState, useEffect } from "react";

const DTIPages01 = () => {
  const [money, setMoney] = useState("");
  const [people, setPeople] = useState("");
  const [moneyShare, setMoneyShare] = useState("1.0");

  const inputMoney = (e) => {
    setMoney(e.target.value);
  };

  const inputPeople = (e) => {
    setPeople(e.target.value);
  };


  useEffect(() => {
    if (money !== '' && people !== '') {
      const moneyInput = parseFloat(money);
      const peopleInput = parseFloat(people);
      if (!Number.isNaN(moneyInput) && !Number.isNaN(peopleInput) && peopleInput > 0) {
        const result = moneyInput / peopleInput;
        setMoneyShare(result.toFixed(2));
      }
    }
  }, [money, people]);

  const sumShareClick = () => {
     if (money === '' || people === '') {
      alert('ใส่จำนวนก่อน');
      return;
     }
     const moneyInput = parseFloat(money);
     const peopleInput = parseFloat(people);
     if (Number.isNaN(moneyInput) || Number.isNaN(peopleInput)) {
      alert('กรุณากรอกตัวเลขให้ถูกต้อง');
      return;
     }
     if (peopleInput <= 0) {
      alert('ใส่จำนวนคนมากกว่า 0');
      return;
     }
     const result = moneyInput / peopleInput;
     setMoneyShare(result.toFixed(2));
  };



  return (
    <div>
      <DtiHead title="Dti A" detall="Heoll" />
      
      <div className="mt-10 text-center text-green-600 text-2xl font-bold">
        Monet Sara
      </div>

      <div className="mt-10 w-8/12 shadow-lg mx-auto border-2 border-green-200 rounded-lg flex flex-col p-6 bg-linear-to-br from-green-50 to-emerald-50">
        <div className="mb-4">
          <label className="block text-green-800 text-sm font-bold mb-2">
            ป้อนเงิน
          </label>
          <input
            type="number"
            value={money}
            onChange={inputMoney}
            className="border border-green-300 rounded w-full p-2 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 bg-white"
            placeholder="กรุณาป้อนจำนวนเงิน"
          />
        </div>

        <div className="mb-4">
          <label className="block text-green-800 text-sm font-bold mb-2">
            ป้อนคน
          </label>
          <input
            type="number" 
            value={people}
            onChange={inputPeople}
            className="border border-green-300 rounded w-full p-2 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 bg-white"
            placeholder="กรุณาป้อนจำนวนคน"
          />
        </div>

        <button onClick={sumShareClick} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
          คำนวณ
        </button>

        <div className="text-center mt-5">
          หารกันคนละ
          <span className="mx-5 text-2xl text-green-600 font-bold">{moneyShare}</span> 

           
        </div>
      </div>
    </div>
  );
};

export default DTIPages01;
