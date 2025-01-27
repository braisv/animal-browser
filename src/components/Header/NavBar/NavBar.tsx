import React from 'react';
import { ReactComponent as AppsIcon } from '../../../assets/svg/apps.svg';
import Title from '@/components/Header/NavBar/Title';
import SearchForm from '@/components/SearchForm/SearchForm';
import { isHome } from '@/helpers/utils';
import { faker } from '@faker-js/faker';

const randomAvatar = faker.image.avatar();

const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar--left'>{isHome() ? <Title /> : <SearchForm />}</div>
            <div className='navbar--right'>
                <AppsIcon className='icon' height='24px' width='24px' />
                <img src={randomAvatar} alt='Avatar' className='avatar' />
            </div>
        </nav>
    );
};

export default NavBar;
