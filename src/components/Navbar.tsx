import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    

    const toggleBtnHandler = () => setToggle(
        (prevState) => !prevState
    )

    return (
        <React.Fragment>
            <header className="fixed top-0 left-0 w-full bg-gray-50 px-4 z-10">
                <div className="flex items-center justify-between h-16">
                    <NavLink to="/" className="text-lg font-medium text-purple-500 md:ml-20">Trivia Fort</NavLink>
                    <div className="text-2xl cursor-pointer md:hidden" onClick={() => toggleBtnHandler()}>
                        <i className={toggle ? `bx bx-x` : `bx bx-menu-alt-right`}></i>
                    </div>
                </div>
            </header>

            <div className={toggle ? `${navStyle} left-0` : `${navStyle} -left-full md:left-0 w-20 pt-5 px-6`}>
                <nav className="flex justify-between flex-col h-full pb-12 overflow-auto">
                    <div>
                        <NavLink to="/" className="mb-10 text-purple-500 flex items-center">
                            <i className="bx bxs-disc text-2xl"></i>
                            <span className="text-lg whitespace-nowrap font-medium ml-4">Trivia Fort</span>
                        </NavLink>

                        <div className="grid gap-y-10">
                            <div className="grid gap-y-6">
                                <NavLink to="/" className="flex items-center">
                                    <i className="bx bx-home text-xl"></i>
                                    <span className="text-lg whitespace-nowrap font-medium ml-4">Home</span>
                                </NavLink>
                                <NavLink to="/" className="flex items-center">
                                    <i className="bx bxs-dashboard text-xl"></i>
                                    <span className="text-lg whitespace-nowrap font-medium ml-4">Dashboard</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <NavLink to="/" className="flex items-center">
                        <i className="bx bx-log-out text-lg"></i>
                        <span className="text-lg whitespace-nowrap font-medium ml-4">Log Out</span>
                    </NavLink>
                </nav>
            </div>
        </React.Fragment>
    )
}
//left-0 show
//-left-full hide
const navStyle = "fixed top-0 h-full pt-4 px-4 pb-0 bg-gray-50 z-10 transition duration-400 ease-in-out hover:w-20"
