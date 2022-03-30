import React from "react";
// import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import axiosWithAuth from "./axiosWithAuth";

const Logout = ()=> {
    const { push } = useHistory()
    const token = localStorage.getItem("token");
    useEffect(()=> {
        axiosWithAuth.post('http://localhost:9000/api/logout', {},{
            headers: {authorization: token}
        })
            .then(resp => {
                localStorage.removeItem("token")
                push('/login')
            })
    }, [])
    return(
        <div></div>
    )
}
export default Logout