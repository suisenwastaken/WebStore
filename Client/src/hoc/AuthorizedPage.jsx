import { useContext } from "react";
import { Navigate, redirect } from "react-router-dom";
import { Context } from "../storage/Context";

const AuthorizedPage = ({children}) => {
    const {user} = useContext(Context)

    if(user.isAuth){
        return children;
    }else{
        console.log(user);
        return <Navigate to = '/auth'/>
    }
}

export default AuthorizedPage;