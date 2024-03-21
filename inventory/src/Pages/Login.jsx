import React from "react";
import NavLogin from "../Components/NavLogin";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
export default function Login(){
    return(
        <>
            <div className="px-[.5em] md:px-[1em] pb-[.5em]  md:pb-[1.5em] ">
                <NavLogin/>
                <div className="h-[100vh] w-full">
                    <span className="text-center">Log in to Y-Inventory</span>
                </div>
                <Footer/>
            </div>
        </>
    )
}