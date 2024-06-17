import React, { useEffect, useState } from "react";
import Card from "./Card";

const Table = () => {
  const [tasks, settasks] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/data/getdata", {
      method:"GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    // console.log(json)
    if (!json.success) {
      alert("Unable to fetch data");
    } else {
      settasks(json.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <table className="border-2 border-gray-500/75 w-full">
      <thead className="py-4 bg-gray-200">
        <tr className="h-12">
          <th>Name</th>
          <th>ID</th>
          <th>Email</th>
          <th>Task Update</th>
          <th>Action</th>
        </tr>
      </thead>
      {tasks.length !== 0 ? (
        <tbody>
          {tasks.map((item, index) => {
            return <Card item={item} index={index} key={index} />
          })}
        </tbody>
      ) : (
        <tbody className="text-center"><tr><td>No user found</td></tr></tbody>
      )}
    </table>
  );
};

export default Table;

// {tableData.map((item, index) => {
//   if (index % 2 === 0) {
//     return (
// <tr key={index} className="hover:bg-blue-200 border border-b-2">
//   <td className="text-center w-1/4 px-12">{item.name}</td>
//   <td className="text-center w-28 px-8">{item.id}</td>
//   <td className="text-center w-1/4 px-10">{item.email}</td>
//   <td className="text-center w-1/4 px-8">{item.update}</td>
//   <td className="ml-[2.6rem] flex text-sm  gap-2 py-2">
//     <button
//       onClick={() => handleClick(item)}
//       className="bg-blue-500 p-2 rounded-md object-contain decoration-none flex gap-2 text-white hover:bg-blue-600"
//     >
//       Update
//       <img src={updateicon} className="w-5 h-5" alt="update icon" />
//     </button>
//     <UpdateEmployee
//       tableData={tableData}
//       setTableData={setTableData}
//       isModalVisible={isModalVisible}
//       setIsModalVisible={setIsModalVisible}
//       toUpdateValues={passDataToUpdate}
//       setPassDataToUpdate={setPassDataToUpdate}
//     />
//     <button
//       onClick={handleDelete}
//       className="bg-red-500 p-2 rounded-md object-contain decoration-none flex gap-2 text-white hover:bg-red-600"
//     >
//       Delete
//       <img src={deleteicon} className="w-5 h-5" alt="delete icon" />
//     </button>
//     {/* <DeleteEmployee tableData={tableData} setTableData={setTableData} setIsDeleteModalVisible={setIsDeleteModalVisible} isDeleteModalVisible={isDeleteModalVisible}/> */}
//   </td>
// </tr>
//     );
//   } else {
//     return (
//       <tr
//         key={index}
//         className="hover:bg-blue-200 bg-gray-200 border border-b-2"
//       >
//         <td className="text-center w-1/4 px-12">{item.name}</td>
//         <td className="text-center w-28 px-8">{item.id}</td>
//         <td className="text-center w-1/4 px-10">{item.email}</td>
//         <td className="text-center w-1/4 px-8">{item.update}</td>
//         <td className="ml-[2.6rem] flex text-sm gap-2 py-2">
//           <button
//             onClick={() => handleClick(item)}
//             className="bg-blue-500 p-2 rounded-md flex decoration-none gap-2 text-white  hover:bg-blue-600"
//           >
//             Update

//             <img src={updateicon} className="w-5 h-5" alt="update icon" />
//           </button>
//           <UpdateEmployee
//             tableData={tableData}
//             setTableData={setTableData}
//             isModalVisible={isModalVisible}
//             setIsModalVisible={setIsModalVisible}
//             toUpdateValues={passDataToUpdate}
//             setPassDataToUpdate={setPassDataToUpdate}
//           />
//           <button
//             onClick={handleDelete}
//             className="bg-red-500 p-2 rounded-md decoration-none flex gap-2 text-white hover:bg-red-600"
//           >
//             Delete
//             <img src={deleteicon} className="w-5 h-5" alt="delete icon" />
//             {/* <DeleteEmployee tableData={tableData} setTableData={setTableData} setIsDeleteModalVisible={setIsDeleteModalVisible} isDeleteModalVisible={isDeleteModalVisible}/> */}
//           </button>
//         </td>
//       </tr>
//     );
//   }
// })}
