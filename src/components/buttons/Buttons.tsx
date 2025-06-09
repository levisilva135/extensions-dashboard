import './Buttons.css'
import { useEffect } from 'react';

interface ButtonProps {
    activeButton: string
    setActiveButton: (value: string) => void
    setDisplayModal: (value: boolean) => void
}

const Buttons = ({ activeButton, setActiveButton, setDisplayModal }: ButtonProps) => {

    const handleClick = (label: string) => {
        setActiveButton(label);
    }

    useEffect(() => {
        if (setActiveButton) {
            setActiveButton(activeButton);
        }
    }, [activeButton, setActiveButton]);

    return (
        <div className='container-buttons'>
            <button className={`btn-options ${activeButton === 'All' ? 'active' : ''}`} onClick={() => handleClick('All')}>All</button>
            <button className={`btn-options ${activeButton === 'Active' ? 'active' : ''}`} onClick={() => handleClick('Active')}>Active</button>
            <button className={`btn-options ${activeButton === 'Inactive' ? 'active' : ''}`} onClick={() => handleClick('Inactive')}>Inactive</button>
            <button className={`btn-options new-extension`} onClick={() => setDisplayModal(true)}>NEW</button>
        </div>
    )
}

export default Buttons