// import axios from "axios";
import React, { useEffect, useState } from "react";
import axiosWithAuth from "./axiosWithAuth";

const FriendsList = () => {
    const [ friends, setFriends ] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        axiosWithAuth.get('http://localhost:9000/api/friends', {
            headers: {authorization: token}
        })
            .then(resp => {
                console.log(resp)
                setFriends(resp.data)
            })
            .catch(err => {
                console.log({err})
            })
    }, [])
    
    return(
        <div>
            <h2>FriendsList</h2> 
            <ul>
                {
                    friends.map(friend =>{
                    return <li>{friend.name} - {friend.age} - {friend.email}</li>  // eslint-disable-line 
                    })
                }
            </ul>            
        </div>
    );
} 

export default FriendsList;