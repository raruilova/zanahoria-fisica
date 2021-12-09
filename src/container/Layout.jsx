import React from 'react'
import SideBar from '../components/SideBar';


const Layout = ({children}) => {
    return (
        <div>
            <div class="container-fluid" style={{alignItems: "center", backgroundColor: "#F29422", color: "black"}}>
                <div class="row">
                    <h1 style={{textAlign: "center"}}>
                        <b>ZANAHORIA FÍSICA</b>
                    </h1>
                </div>
            </div>

            {children} </div>
    )
};

export default Layout;
