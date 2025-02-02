import React from "react";
import {Navigate, Outlet} from "react-router-dom";


function PublicRoutes({auth}){
    return auth? <Outlet/> : <Navigate to={"/login"}/>
}

export default PublicRoutes;