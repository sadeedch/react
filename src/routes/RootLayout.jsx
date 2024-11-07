import { Outlet } from "react-router-dom";
import MainHeader from "../Components/MainHeader";

function RootLayout () {
return (
    <>
    <MainHeader/>
    <Outlet></Outlet>  
    </>
);

}

export default RootLayout;

///NOTES:
// outlet is for the child components so that react knows which are the nested routes