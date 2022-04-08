import React from "react";
import { Outlet } from 'react-router-dom';
import { CustomLink } from '../components/CustomLink'

function Nvigation () {
    return (
        <>
        <div className='navigation'>
            <CustomLink className='navigation__link' to="/">Home</CustomLink>
            <CustomLink className='navigation__link' to="/music">Music</CustomLink>
            <a className='navigation__link' href=''>IT-profile</a>
            <a className='navigation__link' href=''>Link</a>
        </div>

        <main className="container">
            <Outlet />
        </main>
        </>
    )
}

export  {Nvigation};