import React, { useContext, useState } from "react";
import "../styles/Tablestyles.css";
import { Newcontext } from "@/App";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function Users() {
  const [Data, setData] = useContext(Newcontext);

  const navigate = useNavigate();

  const handleDeleteClick = (ind) => {
    const confirmation = window.confirm('Are you sure you want to delete this task?');

    if (confirmation) {
      
      const updatedData = Data.filter((_, i) => i !== ind);
      setData(updatedData);
    }
  };


  return (
    <div className="p-6">
      <div>
        <nav className="w-full bg-slate-50 rounded-xl">
          <h1 className="p-5 text-xl font-bold ">Users</h1>
        </nav>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {Data.map((demo, ind) => (
            <div className="mx-8 mt-3 " key={demo.id || ind}>
              {" "}

              <Card className="w-[350px]  md:w-[300px]">
                <CardHeader>
                  <div className="flex items-center space-x-9 ">
                    {" "}
                    <Avatar>
                      <AvatarImage src="" alt="@shadcn" />
                      <AvatarFallback>{demo.name}</AvatarFallback>
                    </Avatar>
                    <CardTitle>{demo.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <h1 className="font-bold">Email: {demo.email}</h1>
                  <h1 className="font-bold">Role: {demo.role}</h1>
                  <h1 className="font-bold"> Permissions: {demo.permissions}</h1>
                 {demo.status=='Active'?
                 <h1 className="text-green-500 font-bold">Status: {demo.status}</h1> :<h1 className="text-red-600 font-bold">Status: {demo.status}</h1>
          }
                 
                </CardContent>
                <CardFooter>
                    <Link to={`/Edit/${ind}`}><Button>Edit</Button></Link>
                    <Button className='ml-2'  variant="destructive" onClick={ () => handleDeleteClick(ind) } >Delete</Button> 
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Users;
