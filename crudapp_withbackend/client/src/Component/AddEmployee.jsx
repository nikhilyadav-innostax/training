import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";

const AddEmployee = ({ isModalVisible, setIsModalVisible, employeeID }) => {


  const handleValidation = yup.object().shape({
    name: yup
      .string()
      .trim()
      .min(4, "very short")
      .max(20, "too long")
      .required("Mandatory"),
    email: yup.string().trim().email().required("Mandatory"),
    id: yup.number().max(999, "Your id doesn't match").required("Mandatory"),
  });

  const initials = {
    name: "",
    email: "",
    id: "",
    update: "ToDo",
  };

  if (employeeID) {
    // console.log(data)
    initials.name = employeeID.name;
    initials.email = employeeID.email;
    initials.id = employeeID.id;
    initials.update = employeeID.update;
  }

  if (!isModalVisible) {
    return null;
  }

  const handleSubmit = (employ) => {
    if (!employeeID) {
      addEmployeeapi(employ);
    } else {
      // console.log(toUpdateValues)
      updateEmployeeapi(employ)
      // dispatch(updateTodo(employ));
    }
  };

  const addEmployeeapi = async(employee) => {
    const response = await fetch(`http://localhost:8080/data/adddata`, {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:employee.name,
        email:employee.email,
        id:employee.id,
        update:employee.update,
      })
    });

    const json = await response.json();
    // console.log(json)
    if (!json.success) {
      alert("Unable to fetch data");
    } else {
      settasks(json.data);
    }
  }

  const updateEmployeeapi = async(employee) => {
    const response = await fetch(`http://localhost:8080/data/updatedata/${employeeID.id}`, {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        employeeData: employee
      })
      
    });

    const json = await response.json();
    // console.log(json)
    if (!json.success) {
      alert("Unable to fetch data");
    } else {
      settasks(json.data);
    }
  }

  const handlecloseClick = () => {
    // console.log(data)
    setIsModalVisible(false);
  };

  return (
    <div onClick={handlecloseClick} className="bg-[#415a7090] fixed top-0 left-0 w-full h-full flex flex-col z-10 px-[30%] justify-center">
      <div className="p-4 bg-white rounded-xl z-20">
        <div className="flex pr-8 rounded-md w-full justify-between border-b-2">
          {!employeeID ? (
            <h1 className="text-black text-xl font-semibold p-4">
              Add Employee
            </h1>
          ) : (
            <h1 className="text-black text-xl font-semibold p-4">
              Update Employee
            </h1>
          )}
          <div
            onClick={handlecloseClick}
            className="flex justify-center text-2xl font-semi-bold items-center cursor-pointer text-purple-900"
          >
            x
          </div>
        </div>
        <Formik
          initialValues={initials}
          validationSchema={handleValidation}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="pt-12">
              <div className="flex flex-col gap-4  pb-8">
                <div className="flex justify-between">
                  <span className="pr-3 justify-end text-gray-500">Name: </span>
                  <div>
                    {!employeeID ? (
                      <Field
                        className="p-2 border-2 outline-none rounded-lg"
                        type="text"
                        name="name"
                        placeholder="enter your name"
                      />
                    ) : (
                      <Field
                        className="p-2 border-2 outline-none rounded-lg"
                        type="text"
                        name="name"
                        // value={data[0].name}
                        placeholder="enter your name"
                      />
                    )}
                    <ErrorMessage
                      name="name"
                      className="text-red-500"
                      component="div"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="pr-3 justify-end text-gray-500">
                    Email:{" "}
                  </span>
                  <div>
                    {!employeeID ? (
                      <Field
                        className="p-2 border-2 outline-none rounded-lg"
                        type="email"
                        name="email"
                        placeholder="enter your email"
                      />
                    ) : (
                      <Field
                        className="p-2 border-2 outline-none rounded-lg"
                        type="email"
                        name="email"
                        // value={data[0].email}
                        placeholder="enter your email"
                      />
                    )}
                    <ErrorMessage
                      name="email"
                      className="text-red-500"
                      component="div"
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <span className="pr-3 justify-end text-gray-500">Id: </span>
                  <div>
                    {!employeeID ? (
                      <Field
                        className="p-2 border-2 outline-none rounded-lg"
                        type="number"
                        name="id"
                        placeholder="enter your id"
                      />
                    ) : (
                      <Field
                        className="p-2 border-2 outline-none cursor-not-allowed rounded-lg"
                        type="number"
                        name="id"
                        // value={data[0].id}
                        placeholder="enter your id"
                      />
                    )}
                    <ErrorMessage
                      name="id"
                      className="text-red-500"
                      component="div"
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <span className="pr-3 justify-end text-gray-500">
                    Task Updates
                  </span>
                  <div>
                    {!employeeID ? (
                      <Field
                        className="p-2 border-2 w-52 outline-none rounded-lg"
                        component="select"
                        id="location"
                        name="update"
                      >
                        <option value="ToDo">ToDo</option>
                        <option value="InProgress">InProgress</option>
                        <option value="Testing">Testing</option>
                        <option value="Done">Done</option>
                      </Field>
                    ) : (
                      <Field
                        className="p-2 border-2 w-52 outline-none rounded-lg"
                        component="select"
                        id="location"
                        name="update"
                      >
                        <option value="ToDo">ToDo</option>
                        <option value="InProgress">InProgress</option>
                        <option value="Testing">Testing</option>
                        <option value="Done">Done</option>
                      </Field>
                    )}
                    <ErrorMessage
                      name="update"
                      className="text-red-500"
                      component="div"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-2 justify-end pt-6 pr-10">
                <button
                  type="cancel"
                  onClick={handlecloseClick}
                  className="bg-red-500 p-3 rounded-md decoration-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 p-3 rounded-md decoration-none text-white"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddEmployee;