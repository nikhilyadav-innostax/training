import React, {useState} from "react";
import UpdateEmployee from "./AddEmployee";
import deleteicon from "/delete.svg"
import updateicon from "/update-arrow.svg"
import DeleteEmployee from "./DeleteEmployee";

const Card = ({ item, index }) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const handleClick = (item) => {
    // console.log(item)
    if (isModalVisible) {
      setIsModalVisible(false);
    } else {
      setIsModalVisible(true);
    }
  };

  const handleDelete = (item) => {
    console.log(isDeleteModalVisible)
    if (isDeleteModalVisible) {
      setIsDeleteModalVisible(false);
    } else {
      console.log(item)
      setIsDeleteModalVisible(true);
    }
  }

  return (
    <tr key={index} className="hover:bg-blue-50 border border-b-2">
      <td className="text-center w-1/4 px-12">{item.name}</td>
      <td className="text-center w-28 px-8">{item.id}</td>
      <td className="text-center w-1/4 px-10">{item.email}</td>
      <td className="text-center w-1/4 px-8">{item.update}</td>
      <td className="ml-[2.6rem] flex text-sm  gap-2 py-2">
        <button
          onClick={() => handleClick(item)}
          className="bg-blue-500 p-2 rounded-md object-contain decoration-none flex gap-2 text-white hover:bg-blue-600"
        >
          Update
          <img src={updateicon} className="w-5 h-5" alt="update icon" />
        </button>
        <UpdateEmployee
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          employeeID={item}
        />
        <button
          onClick={() => handleDelete(item)}
          className="bg-red-500 p-2 rounded-md object-contain decoration-none flex gap-2 text-white hover:bg-red-600"
        >
          Delete
          <img src={deleteicon} className="w-5 h-5" alt="delete icon" />
        </button>
        <DeleteEmployee
          employeeID={item.id}
          isDeleteModalVisible={isDeleteModalVisible}
          setIsDeleteModalVisible={setIsDeleteModalVisible}
        />
      </td>
    </tr>
  );
};

export default Card;
