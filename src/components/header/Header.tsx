import './Header.css'
import { useState } from 'react'

interface HeaderProps {
    setDarkMode: (value: boolean) => void
}

const Header = ({ setDarkMode }: HeaderProps) => {

    const basePath = import.meta.env.BASE_URL;
    const [imgSrc, setImgSrc] = useState<string>(`${basePath}/images/icon-sun.svg`)
    const handleImage = (): void => {

        if (imgSrc === `${basePath}/images/icon-sun.svg`) {
            setImgSrc(`${basePath}/images/icon-moon.svg`)
            setDarkMode(false)
        }
        else {
            setImgSrc(`${basePath}/images/icon-sun.svg`)
            setDarkMode(true)
        }
    }

    return (
        <div className='header-container'>
            <div className='container-logo'>
                <img src={`${basePath}/images/logo3.svg`} alt="img-logo" className='logo-img' />
                <img src={`${basePath}/images/logo2.svg`} alt="img-logo" className='logo-text' />
            </div>
            <div className='container-img' onClick={handleImage}>
                <img src={imgSrc} alt="img" className='' />
            </div>
        </div >
    )
}

export default Header