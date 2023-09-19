import { useState } from "react";
import SideBar from "./sidebar";
useState
function Layout(props)
{
    return(
        <div className="flex">
            <SideBar />
            
            <div className=" ">
                {props.children}
            </div>
          
            </div>
        
    );
}
export default Layout;