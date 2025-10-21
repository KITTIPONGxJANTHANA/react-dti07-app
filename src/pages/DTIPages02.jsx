import React from "react";
import DtiHead from "../compo/DtiHead";
import { useState } from "react";
const DTIPages02 = () => {


  const [titl, settitl] = useState("");
  const [fullName, setfullName] = useState("");
  const [faculty, setfaculty] = useState("-");
  

  const showxxx = () => {
    if (titl === "" || fullName === "" || faculty === "-") {
      return "";
    }
    return `สวัสดีคุณ ${titl}${fullName} จากคณะ ${faculty}`;
  };

  const headerWelcom = () => {
    if (titl === "" || fullName === "" || faculty === "-") {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }
    return `สวัสดีคุณ ${titl}${fullName} จากคณะ ${faculty}`;
  };
  
  return (
    <div>
      {}
      <DtiHead title="DTI PAGE B" detall="Hey... ^o^" />

      {}
      <div className="mt-10 text-center text-blue-600 text-2xl font-bold">
        P2
      </div>

      {}
      <div className="mt-10 w-8/12 border-2 border-gray-200 mx-auto p-8 shadow-lg rounded-xl flex flex-col">
        
        {}
        <label>คำนำหน้าชื่อ</label>
        <div className="flex gap-2 mt-2 mb-5">
          <input onChange={(e)=> settitl(e.target.value)} name="title" type="radio" value="นาย" /> นาย
          <input onChange={(e)=> settitl(e.target.value)} name="title" type="radio" value="นาง" /> นาง
          <input onChange={(e)=> settitl(e.target.value)} name="title" type="radio" value="นางสาว" /> นางสาว
        </div>

        {}
        <label>ป้อนชื่อ</label>
        <input 
          type="text" 
          value={fullName} onChange={(e)=> setfullName(e.target.value)}
          className="border border-gray-400 p-2 mt-2 mb-5 rounded" 
          placeholder="กรุณาป้อนชื่อ"
        />

        {}
        <label>คณะ</label>
        <select  value={faculty} onChange={(e)=> setfaculty(e.target.value)}
        className="border border-gray-400 p-2 mt-2 mb-5 rounded">
          <option value="-">กรุณน่าเลือกคณะ</option>
          <option value="ศิลปศาสตร์และวิทยาศาสตร์">ศิลปศาสตร์และวิทยาศาสตร์</option>
          <option value="บริหารธุรกิจ">บริหารธุรกิจ</option>
          <option value="วิศวกรรมศาสตร์">วิศวกรรมศาสตร์</option>
          <option value="นิเทศศาสตร์">นิเทศศาสตร์</option>
        </select>

        {}
        <button onClick={headerWelcom}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          WELCOME
        </button>

        {}
        <h1 className="text-center font-bold text-3xl text-red-500 mt-10">
          {showxxx()}
    
        </h1>
      </div>
    </div>
  );
}
export default DTIPages02;
