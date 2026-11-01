import React from 'react';
import Planbtn from './Planbtn';
import Savebtn from './Savebtn';
import Image from 'next/image';
import Link from 'next/link';
import NavLinks from './NavLinks';



const Navbar = () => {
    return (
        <div className='bg-black border-b-2 px-5 border-b-gray-800 shadow-sm font-sans'>
            <div className="container mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLinks></NavLinks>
                        </ul>
                    </div>
                    <Link href='/' className='flex items-center gap-2 font-heading font-black text-lg'>
                        <Image width={28} height={28} src='/assets/logo.png' alt='Logo'></Image>FITLOG
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        <NavLinks></NavLinks>
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <Planbtn></Planbtn>
                    <Savebtn></Savebtn>
                </div>
            </div>
        </div>
    );
};

export default Navbar;