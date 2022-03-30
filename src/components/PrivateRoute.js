import React from "react"
import { Route, Redirect } from "express"

const PrivateRoute = () => {
   if(!localStorage("token")) {
       return (<Redirect to='/'/>)
   }
}

export default PrivateRoute;