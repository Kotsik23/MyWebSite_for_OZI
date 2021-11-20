import {axiosInstance} from "../util/requsets";
import {Redirect} from "react-router-dom";

export const Quit = () => {
    axiosInstance.get('/quit', {headers: {
            Authentication: `Bearer ${localStorage.removeItem('_token')}`
        }}).then((res) => {
        console.log("Successfully removed")
    });

    return(
        <Redirect to='/auth'/>
    );
}