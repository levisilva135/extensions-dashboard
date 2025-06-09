import './Extension.css'
import ReactSwitch from 'react-switch'
import { useState } from 'react'

interface ExtensionProps {
    imgUrl: string
    description: string
    title: string
    activeButton: any
}

const Extension = ({ imgUrl, description, title, activeButton }: ExtensionProps) => {

    const [checked, setChecked] = useState<boolean>(true)
    const [display, setDisplay] = useState<boolean>(true)
    const [isHidding, setIsHidding] = useState<boolean>(false)

    const handleChecked = (): void => {
        if (checked === true) setChecked(false)
        else setChecked(true)
    }

    const handleRemove = (): void => {
        setIsHidding(true)
        setTimeout(() => setDisplay(false), 300)
    }

    let displayExtension: boolean = true

    if (activeButton == 'All') {
        displayExtension = true
    } else if (activeButton == 'Active') {
        if (!checked) {
            displayExtension = false
        }
    } else if (activeButton == 'Inactive') {
        if (checked) {
            displayExtension = false
        }
    }

    return display && displayExtension ? (
        <div className={`extensions ${isHidding ? 'fade-out' : ''}`}>

            <div className='extension-main'>
                <img src={imgUrl} alt="img" />
                <div className='container-infos'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>

            <footer>
                <button className='btn-remove' onClick={handleRemove}>Remove</button>
                <ReactSwitch checked={checked} onChange={handleChecked} onColor="#f25c58" offColor="#ccc" />
            </footer>

        </div>
    ) : false
}

export default Extension