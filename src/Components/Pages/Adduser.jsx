import { Newcontext } from "@/App";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

function Adduser() {
  const [data, setData] = useContext(Newcontext);
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    email: "",
    role: "",
    permissions: [],
    status: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    const { name, value, checked, type } = event.target;

    if (type === "checkbox") {
      setInput((prevInput) => {
        const updatedPermissions = checked
          ? [...prevInput.permissions, value]
          : prevInput.permissions.filter((permission) => permission !== value);
        return { ...prevInput, permissions: updatedPermissions };
      });

      setErrors((prevErrors) => ({
        ...prevErrors,
        permissions: updatedPermissions.length === 0 ? "At least one permission must be selected." : "",
      }));
    } else {
      setInput((prevInput) => {
        const updatedInput = { ...prevInput, [name]: value };
        validateField(name, value); 
        return updatedInput;
      });
    }
  };

  const validateField = (name, value) => {
    let error = "";

    if (!value.trim()) {
      error = `${name[0].toUpperCase() + name.slice(1)} is required.`;
    } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      error = "Invalid email format.";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!input.name.trim()) newErrors.name = "Name is required.";
    if (!input.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(input.email)) newErrors.email = "Invalid email format.";
    if (!input.role.trim()) newErrors.role = "Role is required.";
    if (input.permissions.length === 0) newErrors.permissions = "At least one permission must be selected.";
    if (!input.status) newErrors.status = "Status is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleData = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const newData = [...data, input];
      setData(newData);
      navigate(-1);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 lg:ml-96 px-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Add User</h2>
        <form onSubmit={handleData} className="space-y-4">

          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleInput}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>


          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={input.email}
              onChange={handleInput}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>


          <div className="flex flex-col">
            <label htmlFor="role" className="text-sm font-semibold text-gray-700">
              Role
            </label>
            <input
              type="text"
              name="role"
              value={input.role}
              onChange={handleInput}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
          </div>


          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700">Permissions</label>
            <div className="flex flex-col space-y-2">
              {["Read", "Write", "Update"].map((perm) => (
                <div key={perm} className="flex items-center">
                  <input
                    type="checkbox"
                    id={perm}
                    name="permissions"
                    value={perm}
                    checked={input.permissions.includes(perm)}
                    onChange={handleInput}
                    className="mr-2"
                  />
                  <label htmlFor={perm} className="text-sm">
                    {perm}
                  </label>
                </div>
              ))}
            </div>
            {errors.permissions && <p className="text-red-500 text-sm mt-1">{errors.permissions}</p>}
          </div>


          <div className="flex flex-col">
            <label htmlFor="status" className="text-sm font-semibold text-gray-700">
              Status
            </label>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="active"
                  name="status"
                  value="Active"
                  checked={input.status === "Active"}
                  onChange={handleInput}
                  className="mr-2"
                />
                <label htmlFor="active" className="text-sm">
                  Active
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="inactive"
                  name="status"
                  value="Inactive"
                  checked={input.status === "Inactive"}
                  onChange={handleInput}
                  className="mr-2"
                />
                <label htmlFor="inactive" className="text-sm">
                  Inactive
                </label>
              </div>
            </div>
            {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status}</p>}
          </div>

          <div className="flex justify-between mt-6">
            <Button
              type="submit"
              className="bg-green-500 text-white hover:bg-green-600 w-1/2 p-3 rounded-md"
            >
              Save User
            </Button>
            <Button
              type="button"
              onClick={() => navigate("/")}
              className="bg-red-500 text-white hover:bg-red-600 w-1/2 p-3 rounded-md"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Adduser;
