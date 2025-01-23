import React from 'react'
import { ReactComponent as AppsIcon } from '../../../assets/svg/apps.svg';
import { useLocation } from 'react-router-dom';
import GoogleLogo from '#/components/Logo/GoogleLogo';
import Title from '#/components/Header/NavBar/Title';

const NavBar = () => {
    const { pathname } = useLocation()
    const isHome = pathname === '/'
    console.log({ isHome })
    return (
        <nav className='navbar'>
            <div className='navbar--left'>
                {isHome ? <Title /> : <GoogleLogo />}
            </div>
            <div className='navbar--right'>
                <AppsIcon
                    className='icon'
                    height='24px'
                    width='24px'
                />
                <div className="avatar">
                </div>
            </div>
        </nav>
    )
}

export default NavBar