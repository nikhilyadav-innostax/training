import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../actions/action";
import * as yup from "yup";

const AddEmployee = ({ isModalVisible, setIsModalVisible, employeeID }) => {
  const data = useSelector((state) => {
    // console.log("This is the task", state.tasks)
    if (employeeID) {
      const emplu = state.tasks.find((item) => item.id === employeeID.id);
      return emplu ? [emplu] : [];
    } else {
      // console.log("nothing is there")
      return [];
    }
  });
  const dispatch = useDispatch();

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

  if (data.length > 0) {
    // console.log(data)
    initials.name = data[0].name;
    initials.email = data[0].email;
    initials.id = data[0].id;
    initials.update = data[0].update;
  }

  if (!isModalVisible) {
    return null;
  }

  const handleSubmit = (employ) => {
    if (!employeeID) {
      dispatch(addTodo(employ));
    } else {
      // console.log(toUpdateValues)
      console.log("daalne wala dat", employ);
      dispatch(updateTodo(employ));
    }
  };

  const checkData = () => {
    console.log(data);
  };

  const handlecloseClick = () => {
    // console.log(data)
    setIsModalVisible(false);
  };

  return (
    <div className="bg-[#415a7090] fixed top-0 left-0 w-full h-full flex flex-col px-[30%] justify-center">
      <div className="p-4 bg-white rounded-xl">
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