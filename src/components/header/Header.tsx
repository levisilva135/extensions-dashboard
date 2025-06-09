import './Header.css'
import { useState } from 'react'

interface HeaderProps {
    setDarkMode: (value: boolean) => void
}

const Header = ({ setDarkMode }: HeaderProps) => {

    const [imgSrc, setImgSrc] = useState<string>('/images/icon-sun.svg')

    const handleImage = (): void => {
       
        if (imgSrc === '/images/icon-sun.svg') {
            setImgSrc('/images/icon-moon.svg')
            setDarkMode(false)
        }
        else {
            setImgSrc('/images/icon-sun.svg')
            setDarkMode(true)
        }
    }

    return (
        <div className='header-container'>
            <div className='container-logo'>
                <img src="/images/logo3.svg" alt="img-logo" className='logo-img' />
                <img src="/images/logo2.svg" alt="img-logo" className='logo-text' />
            </div>
            <div className='container-img' onClick={handleImage}>
                <img src={imgSrc} alt="img" className='' />
            </div>
        </div >
    )
}

export default Header