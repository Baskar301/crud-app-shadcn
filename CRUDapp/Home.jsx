import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {User} from "lucide-react"

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {

    try{
      const result = await axios.get("http://localhost:8080/api/users");
      setUsers(result.data);
      console.log(result.data);
    }
    catch(err){
      toast.error("An error occured while fetching data.")
    }
   
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/api/users/delete/${id}`);
    loadUsers();
    <AlertDialog/>
    toast.success("User deleted successfully")

  };

  return (
    <>
      <Card className="max-w-4xl mx-auto mt-10 shadow-xl rounded-2xl bg-white dark:bg-gray-800">
        <CardContent className="p-6">
          <h2 className="text-2xl font-thin mb-4 text-black dark:text-white">User List</h2>


          {
            users.length==0 ? (
              <div className="text-center text-2xl text-gray-500 dark:text-gray-300 flex flex-col items-center">
                  <h1 className="py-5 font-thin underline underline-offset-8">
                  No User Found
                  </h1>
                  <Button variant="outline" asChild>
                    <Link to="/adduser">Add User</Link>
                  </Button>
              </div>
            ) : 
            
            (
              <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-black dark:text-white font-normal">ID</TableHead>
                  <TableHead className="text-black dark:text-white font-normal">Username</TableHead>
                  <TableHead className="text-black dark:text-white font-normal">Email</TableHead>
                  <TableHead className="text-black dark:text-white font-normal">Phonenumber</TableHead>
                  <TableHead className="text-center text-black dark:text-white font-normal">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id} className="bg-white dark:bg-gray-700">
                    <TableCell className="text-black dark:text-white font-normal">{user.id}</TableCell>
                    <TableCell className="text-black dark:text-white font-normal">{user.username}</TableCell>
                    <TableCell className="text-black dark:text-white font-normal">{user.email}</TableCell>
                    <TableCell className="text-black dark:text-white font-normal">{user.phonenumber}</TableCell>


                    <TableCell className="text-center flex justify-evenly items-center">
                        <Sheet>
                        <SheetTrigger asChild>
                          <Button variant="secondary" className="cursor-pointer">View</Button>
                        </SheetTrigger>
                        <SheetContent className="bg-white dark:bg-gray-700">
                          <SheetHeader>
                            <SheetTitle className="text-2xl">User Details</SheetTitle>
                            <SheetDescription>User details are present here.</SheetDescription>
                          </SheetHeader>
                          <div className="flex flex-col justify-center items-center">
                            <div className="w-50 h-50 rounded-full p-3 flex justify-center items-center bg-gray-300 dark:bg-gray-800">
                              <User className="stroke-none fill-stone-300  w-full h-full"/>
                            </div> 
                            <p className="pt-5">Profile picture</p>
                          </div>
                          <div className="p-5 space-y-2 text-sm md:text-md">
                            <p><strong>Username :</strong>{user.username}</p>
                            <hr/>
                            <p><strong>E-mail :</strong>{user.email}</p>
                            <hr/>
                            <p><strong>Phonenumber :</strong>{user.phonenumber}</p>
                            <hr/>
                          </div>
                        </SheetContent>
                      </Sheet>
                      <Button variant="default" className="mx-5" asChild>
                        <Link to={`/updateuser/${user.id}`}>Update</Link>
                      </Button>

                      <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive" className="cursor-pointer">Delete</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="bg-white dark:bg-gray-700">
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This will permanently delete the user.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => deleteUser(user.id)}>
                            Confirm Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            )
          }
        </CardContent>
      </Card>
    </>
  );
}

export default Home;
