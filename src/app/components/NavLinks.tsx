'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import React from 'react';



const NavLinks = () => {
    const pathname = usePathname();
    return (
    <>
    <li className={`${pathname === '/' ? 'text-[#C2F800] bg-[#1A2312]' : 'text-[#9CA3AF] bg-transparent'} navlink-style `}>
    <Link href='/'>Workouts</Link></li>
    <li className={`${pathname === '/my-plan' ? 'text-[#C2F800] bg-[#1A2312]' : 'text-[#9CA3AF] bg-transparent'} navlink-style `}>
    <Link href='/my-plan'>My Plan</Link></li>
</>
    );
};

export default NavLinks;