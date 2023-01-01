import { useEffect, useRef, useState } from 'react';
import Reader from '../imgs/reader-1.jpg';
import '../App.css'

const AllUsers = () => {
    const [printUsers, setPrintUsers] = useState('')

    const getData = useRef()
    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2').then(results => results.json()).then(data => {
            getData.current = data;
            console.log(getData, 'data through use ref')
            setPrintUsers(data)
            console.log(data)

        })
    }, [])


    // const mappedUsers = printUsers.map(item=>{
    //     return <div>{item.email}</div>
    // })

    // const mapUsers = arrUsers.map(item => {
    //     return <div><div>{item.name}</div>
    //         <div>{item.mail}</div></div>



    // })
   const dta = getData.current.map(item => {
        return <div>{item.email}</div>



    })

    return (

        <div style={{ marginTop: '200px', color: 'black' }}>
            <h1 >Data</h1>

{dta}
        </div>
    )



}


export default AllUsers;