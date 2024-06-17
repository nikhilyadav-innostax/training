import React, {useState} from "react";
import Table from "./Table.jsx";
import AddEmployee from "./AddEmployee.jsx";
import addEmployeelogo from "/add-account.svg"

const Home = () => {

  const [isModalVisible, setIsModalVisible] = useState(false)
  const handleClick = () => {
    if(isModalVisible){
      setIsModalVisible(false)
    }else{
      setIsModalVisible(true)
    }
  }

  return (
    <div className="flex flex-col h-60vh bg gap-4 px-10">
      <h2 className="text-xl text-center mt-4">Employees List </h2>
        <button onClick={handleClick} className="bg-blue-500 w-fit text-white py-2 px-2 flex gap-2 rounded-md text-sm hover:bg-blue-800 decoration-none">
          Add Employees
          <img src={addEmployeelogo} className="h-5 w-5" alt="employee add logo" />
        </button>
        <AddEmployee isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
      <div className="flex">
        <div className="w-full">
          <Table />
        </div>
      </div>

      
    </div>
  );
};

export default Home;
