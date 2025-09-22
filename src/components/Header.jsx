// Copyright 2025 Haridev
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]

import logoimg from '../assets/logo1.png';
import Navbar from "./Navbar";
import { useState } from "react";

const Header = () => {
    const [navOpen , setNavOpen]=useState(false);
    return (
        <header className="fixed w-full top-0 left-0 h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0 ">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex  justify-between items-center ">
                
                <h1>
                    <a href="/" className="logo">
                    <img
                        src={logoimg}
                        width={60}
                        height={60}
                        alt="logo"
                    />
                    </a>
                </h1>
                <div className=" relative md:justify-self-center">
                    <button
                        className="menu_btn md:hidden"
                        onClick={()=> setNavOpen((prev)=>!prev)}
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <Navbar navOpen={navOpen}/>
                    
                </div>
                <a 
                    href="#contacts"
                    className="btn btn-secondary max-md:hidden md:justify-self-end"
                >
                    contacts 
                </a>
            </div>
        </header>
    )
}

export default Header;