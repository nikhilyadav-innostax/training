import React from "react";

const DeleteEmployee = ({
  employeeID,
  isDeleteModalVisible,
  setIsDeleteModalVisible,
}) => {

  const handleDelete = () => {
    console.log(employeeID);
    deleteapi();
  }

  const deleteapi= async() => {
    const response = await fetch(`http://localhost:8080/data/deletedata/${employeeID}`, {
      method:"DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    console.log(json)
    if (!json.success) {
      alert("Unable to fetch data");
    } else {
      // settasks(json.data);
      console.log("data updated")
    }
  }

  const handlecloseClick = () => {
    setIsDeleteModalVisible(false);
  };

  if (!isDeleteModalVisible) {
    return null;
  }

  return (
    <div
      onClick={handlecloseClick}
      className="bg-[#415a7095] fixed top-0 left-0 w-full h-full flex flex-col px-[30%] justify-center"
    >
      <div className="p-4 bg-white rounded-xl">
        <div className="flex flex-col justify-center px-8 w-full border-b-2">
          <div className="h-10 w-10 flex justify-center text-5xl border-2 border-red-600 rounded-full font-semi-bold items-center cursor-pointer text-red-600">
            x
          </div>
          <h1 className="text-black text-xl font-semibold p-4">
            Are you sure?
          </h1>

          <div
            onClick={handleDelete}
            type="submit"
            className="bg-blue-500 p-3 rounded-md decoration-none text-white"
          >
            Delete
          </div>
          <button
            type="cancel"
            onClick={handlecloseClick}
            className="bg-white p-3 rounded-md decoration-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteEmployee;
