import React from 'react'
import { ReactComponent as AppsIcon } from '../../../assets/icons/apps.svg';
import Text from '#/components/Typography/Text';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar--left'>
                <Text text='Agile Content' bold />
                <Text text='Frontend Test' />
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