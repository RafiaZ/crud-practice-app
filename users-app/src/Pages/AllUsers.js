import React, { useEffect, useRef, useState } from 'react';

const AllUsers = () => {
    // Changes HERE - Initialize as empty array
    const [printUsers, setPrintUsers] = useState([]);

    const getData = useRef();
    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2')
            .then((results) => results.json())
            .then((data) => {
                console.log(data, 'data');
                getData.current = data;
                console.log(getData, 'data through use ref');
                setPrintUsers(data.data);  
                console.log(data);
            });
    }, []);


    const dta = printUsers.map((value) => {
        return <>
        <div >
        <div style={{display:'flex'}} key={value.id}>{value.email}</div><div style={{display:'flex'}} key={value.id}>{value.first_name}{""}{value.last_name}</div>
            <div style={{display:'flex'}} key={value.id}><img src={value.avatar}/></div>
        </div>
            </>;
    });

    return (
        <div style={{color: 'black' }}>
            <h1>Data</h1>
           
            {dta}
        </div>
    );
};

export default AllUsers;