import React from "react"
import { Route, Redirect } from "express"

const PrivateRoute = () => {
   if(!localStorage.getItem("token")) {
       return <Redirect to='/login'/>
   }
}

export default PrivateRoute;