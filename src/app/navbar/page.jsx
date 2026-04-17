"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { ImStatsDots } from "react-icons/im";
import { RiTimeLine } from "react-icons/ri";


const NavBarPage = () => {
    const pathname = usePathname()
    const links = 
    <>
      <li>
         <Link 
         className={` ${ pathname === "/" ? "bg-[#244D3F] text-white" : ""}`}
         href="/"><AiOutlineHome /> Home</Link>
        </li>

      <li>
        <Link 
        className={` ${ pathname === "/timeline" ? "bg-[#244D3F] text-white" : ""}`}
        href="/timeline"><RiTimeLine />Timeline</Link></li>
       <li>
        <Link 
        className={` ${ pathname === "/stats" ? "bg-[#244D3F] text-white" : ""}`}
        href="/stats"><ImStatsDots /> Stats</Link></li>
    </>
    
    return (
            <div className="navbar shadow-sm px-10">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {links}
                </ul>
                </div>
                <a className=" text-2xl font-bold">Keen<span className="text-[#244D3F] font-semibold">Keeper</span></a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1">
                    {links}
                </ul>
            </div>
            
            </div>
    );
};

export default NavBarPage;