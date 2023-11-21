import { useContext } from "react";
import { Navigate, redirect } from "react-router-dom";
import { Context } from "../storage/Context";

const AdminPage = ({children}) => {
    const {user} = useContext(Context)

    if(user.user.role === 'ADMIN'){
        return children;
    }else{
        console.log(user.user.role);
        return <Navigate to = '/'/>
    }
}

export default AdminPage;