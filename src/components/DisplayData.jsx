import React, { useEffect, useMemo, useState } from 'react'
import { getData } from '../axios/getUsers';

const DisplayData = () => {

    const [users, setUsers] = useState([]);

    const [searchName, setSearchName] = useState('');

    const getUserData = async () => {
        const data = await getData();
        setUsers(data);
    }

    useEffect(() => {
        getUserData();
    }, [])
    
    const searchedNames = useMemo(() => {
        console.log("filter executed...");
        return users.filter((user) =>
            user.name.toLowerCase().includes(searchName.toLowerCase())
        );
    }, [searchName]);
    
    console.log(searchedNames);

    //  console.log(users);
    return (
        <>
            <div>  -------- Users List -----   </div>

            <label>Search user by name : </label>
            <input type='text' onChange={(e) => setSearchName(e.target.value)}></input>


            {searchName ? <ul>
                {searchedNames.map((user) => {
                    return <li key={user.id}>{user.name}</li>
                })}
            </ul> :  
            <ul>
                {users.map((user) => {
                    return <li key={user.id}>{user.name}</li>
                })}
            </ul>}
        </>
    )
}

export default DisplayData