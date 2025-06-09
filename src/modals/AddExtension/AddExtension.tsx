import './AddExtension.css'
import { IoIosClose } from "react-icons/io";
import React, { useState } from 'react';
import urlImgs from '../../types/UrlImgs';
import Extensions from '../../types/Extensions';


interface AddExtensionProps {
    setDisplayModal: (value: boolean) => void
    setExtensions: any
    extensions: any
}

const AddExtension = ({ setDisplayModal, setExtensions, extensions }: AddExtensionProps) => {

    const basePath = import.meta.env.BASE_URL;
    
    const [imgSelected, setImgSelected] = useState<string>(`${basePath}images/logo-devlens.svg`)
    const [extensionName, setExtensionName] = useState<string>('')
    const [extensionDescription, setExtensionDescription] = useState<string>('')

    const urlImgs: urlImgs[] = [
        { imgUrl: `${basePath}images/logo-devlens.svg` },
        { imgUrl: `${basePath}images/logo-style-spy.svg` },
        { imgUrl: `${basePath}images/logo-speed-boost.svg` },
        { imgUrl: `${basePath}images/logo-json-wizard.svg` },
        { imgUrl: `${basePath}images/logo-tab-master-pro.svg` },
        { imgUrl: `${basePath}images/logo-viewport-buddy.svg` },
        { imgUrl: `${basePath}images/logo-markup-notes.svg` },
        { imgUrl: `${basePath}images/logo-grid-guides.svg` },
        { imgUrl: `${basePath}images/logo-palette-picker.svg` },
        { imgUrl: `${basePath}images/logo-link-checker.svg` },
        { imgUrl: `${basePath}images/logo-dom-snapshot.svg` },
        { imgUrl: `${basePath}images/logo-console-plus.svg` },
    ]

    const [lengthName, setLengthName] = useState<number>(0)
    const [lengthDescription, setLengthDescription] = useState<number>(0)

    const handleLengthName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value
        setLengthName(value.length)
        setExtensionName(value)
    }

    const handleLengthDescription = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value
        setLengthDescription(value.length)
        setExtensionDescription(value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newButton: Extensions = {
            urlImg: imgSelected,
            description: extensionDescription,
            title: extensionName
        }
        const newArray = [...extensions, newButton]
        setExtensions(newArray)
        setDisplayModal(false)
    }


    return (
        <form className='modal-add-extension' onSubmit={handleSubmit} >
            <IoIosClose className='icon-close' onClick={() => setDisplayModal(false)} />
            <h3>New Extension</h3>

            <label className='container-inputs container-name'>
                <span>Name: </span>
                <input type="text" onChange={handleLengthName} maxLength={20} />
                <p className='length-count'>{lengthName}/20</p>
            </label>

            <label className='container-inputs container-description'>
                <span>Description: </span>
                <input type="text" onChange={handleLengthDescription} maxLength={70} />
                <p className='length-count'>{lengthDescription}/70</p>
            </label>
            <span>Icon:</span>
            <section className="container-images">
                {urlImgs.map((item, i) => (
                    <img src={item.imgUrl} alt="img" key={i} onClick={() => setImgSelected(item.imgUrl)} className={`${item.imgUrl === imgSelected ? 'active-img' : ''}`} />
                ))}
            </section>

            <button className='btn-create-extension'>Add</button>

        </form>
    )
}

export default AddExtension