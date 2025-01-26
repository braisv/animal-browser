import React from 'react'
import { ReactComponent as Logo } from '../../assets/svg/googleLogo.svg'
import { isHome } from '#/helpers/utils'

const GoogleLogo = () => {
    const className = `logo ${isHome() ? '' : 'logo--small'}`;
    const viewBox = isHome() ? '' : '0 0 285 75';
    const height = isHome() ? 92 : 32;
    const width = isHome() ? 272 : 92;

    const props = { className, viewBox, height, width }

    return (
        <Logo {...props} />
    )
}

export default GoogleLogo