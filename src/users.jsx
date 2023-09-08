import { useEffect, useState } from "react"
import './users.css'
import SoloUser from "./soloUser";

export default function Users() {
    let [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    return (
        <div className="box-of-users">
            <h1>Total Users: {users.length}</h1>
            {users.map((user) => 
                <SoloUser name={user.name} email={user.email}></SoloUser>
              )}
        </div>
    )
}