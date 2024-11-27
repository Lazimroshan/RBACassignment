import { Newcontext } from "@/App";
import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../ui/button";

function Viewandedit() {
  const [data, setData] = useContext(Newcontext);
  const { user } = useParams();
  const navigate = useNavigate();
  const NewData = data[user];
  console.log(NewData);


  const [update, setupdate] = useState({
    name: NewData.name,
    email: NewData.email,
    role: NewData.role,
    permissions: NewData.permissions || [],
    status: NewData.status,
  });

  const handleupdate = (event) => {
    const { name, value, checked } = event.target;

   
    if (name === "permissions") {
      setupdate((prev) => {
        let updatedPermissions = [...prev.permissions];
        if (checked) {
          updatedPermissions.push(value); 
        } else {
          updatedPermissions = updatedPermissions.filter((perm) => perm !== value);
        }
        return { ...prev, permissions: updatedPermissions };
      });
    } else {
      setupdate({ ...update, [name]: value });
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const newData = [...data];
    newData[user] = update;
    setData(newData);
    navigate(-1)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 lg:ml-96 px-10 ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Edit User</h2>
        <form onSubmit={handlesubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              defaultValue={NewData.name}
              name="name"
              onChange={handleupdate}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="text"
              defaultValue={NewData.email}
              name="email"
              onChange={handleupdate}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="role" className="text-sm font-semibold text-gray-700">
              Role
            </label>
            <input
              type="text"
              defaultValue={NewData.role}
              name="role"
              onChange={handleupdate}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700">
              Permissions
            </label>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="read"
                  name="permissions"
                  value="Read"
                  checked={update.permissions.includes("Read")}
                  onChange={handleupdate}
                  className="mr-2"
  
                />
                <label htmlFor="read" className="text-sm">Read</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="write"
                  name="permissions"
                  value="Write"
                  checked={update.permissions.includes("Write")}
                  onChange={handleupdate}
                  className="mr-2"
                />
                <label htmlFor="write" className="text-sm">Write</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="update"
                  name="permissions"
                  value="Update"
                  checked={update.permissions.includes("Update")}
                  onChange={handleupdate}
                  className="mr-2"
                />
                <label htmlFor="update" className="text-sm">Update</label>
              </div>
            </div>
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
                  checked={update.status === "Active"}
                  onChange={handleupdate}
                  className="mr-2"
                />
                <label htmlFor="active" className="text-sm">Active</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="inactive"
                  name="status"
                  value="Inactive"
                  checked={update.status === "Inactive"}
                  onChange={handleupdate}
                  className="mr-2"
                />
                <label htmlFor="inactive" className="text-sm">Inactive</label>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <Button type="submit" className="bg-green-500 text-white hover:bg-green-600 w-1/2 p-3 rounded-md">
              Save Changes
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

export default Viewandedit;
