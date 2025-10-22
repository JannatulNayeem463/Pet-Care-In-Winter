import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router";
import Footer from "daisyui/components/footer";

const AuthLayout = () => {
    return(
        <div className="bg-base-200 min-h-screen">
         <header>
            <Header></Header>
         </header>
         <main className="w-11/12 mx-auto py-5">
         <Outlet></Outlet>
         </main>
         
        </div>
    );
};

export default AuthLayout;