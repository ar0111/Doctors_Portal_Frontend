import React from 'react';
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast';

const AllUser = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await fetch('https://final-server-rho.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin=(id)=> {
        // console.log(id);
        fetch(`https://final-server-rho.vercel.app/users/admin/${id}`, {
            method:'PUT'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success("Make Admin Successfully")
                refetch();
            }
        })
        
    }

    const handleDelete = (user)=>{
        console.log(user);
        const aggree = window.confirm(`Are you want to delete ${user.name}`);
        if(aggree){
            // console.log("Yes Aggree");
            fetch(`https://final-server-rho.vercel.app/users/admin/${user._id}`, {
                method: "DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
                    toast.success("Delete User Successfully")
                    refetch();
                }
            })
        }
    }

    return (
        <div>
            <h1 className='text-2xl mb-6'>All User {users.length}</h1>
            <div className="overflow-x-auto rounded-lg bg-base-100">
                <table className="table w-full">
                    {/* head */}
                    <thead className='bg-base-200'>
                        <tr>
                            <th>SERIAL</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ADMIN</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        users.map((user, i) =>  <tr key = {i}>
                            <th>{i+1}</th>
                            {/* <th>{user._id}</th> */}
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user?.role !== 'admin' && <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-neutral'>Make Admin</button>}</td>
                            <td><button onClick={()=>handleDelete(user)} className='btn btn-neutral'>Remove User</button></td>
                        </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;