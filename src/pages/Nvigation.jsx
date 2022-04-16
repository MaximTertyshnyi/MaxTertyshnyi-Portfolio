import React from "react";
import { Outlet } from 'react-router-dom';
import { CustomLink } from '../components/CustomLink'

function Nvigation () {
    return (
        <>
        <div className='navigation'>
            <CustomLink className='navigation__link' to="/">Home</CustomLink>
            <CustomLink className='navigation__link' to="/music">Music</CustomLink>
            <CustomLink className='navigation__link' to="/it-profile">IT-profile</CustomLink>
            <CustomLink className='navigation__link' to="/about">About</CustomLink>
        </div>

        <main className="container">
            <Outlet />
        </main>
        </>
    )
}

export  {Nvigation};