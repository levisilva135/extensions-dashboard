//utils
import { useState } from 'react'

//css
import './App.css'

//types
import Extensions from './types/Extensions'

//components
import Header from './components/header/Header'
import Buttons from './components/buttons/Buttons'
import Extension from './components/extensions/Extension'

//modals
import AddExtension from './modals/AddExtension/AddExtension'

function App() {

  const [activeButton, setActiveButton] = useState<string>('All')
  const [darkMode, setDarkMode] = useState<boolean>(true)
  const [displayModal, setDisplayModal] = useState<boolean>(false)

  const [extensions, setExtensions] = useState<Extensions[]>([
    { urlImg: '/images/logo-devlens.svg', description: 'Quickly inspect page layouts and visualize element boundaries.', title: 'DevLens' },
    { urlImg: '/images/logo-style-spy.svg', description: 'Instantly analyze and copy CSS from any webpage element.', title: 'StyleSpy' },
    { urlImg: '/images/logo-speed-boost.svg', description: 'Optimizes Browser resource usage to accelerate page loading', title: 'SpeedBost' },
    { urlImg: '/images/logo-json-wizard.svg', description: 'Formats, validates, and prettifies JSON responses in-browser.', title: 'JSONWizard' },
    { urlImg: '/images/logo-tab-master-pro.svg', description: 'Organizes browser tabs into groups and sessions.', title: 'TabMaster Pro' },
    { urlImg: '/images/logo-viewport-buddy.svg', description: 'Simulates various screen resolutions directly within the browser.', title: 'ViewportBuddy' },
    { urlImg: '/images/logo-markup-notes.svg', description: 'Enables annotation and notes directly onto webpages for collaborative debugging.', title: 'Markup Notes' },
    { urlImg: '/images/logo-grid-guides.svg', description: 'Overlay customizable grids and alignment guides on any webpage.', title: 'GridGuides' },
    { urlImg: '/images/logo-palette-picker.svg', description: 'Instanly extracts color palettes from any webpage.', title: 'Palette Picker' },
    { urlImg: '/images/logo-link-checker.svg', description: 'Scans and highlights broken links on any page.', title: 'LinkChecker' },
    { urlImg: '/images/logo-dom-snapshot.svg', description: 'Capture and export DOM structures quickly.', title: 'DOM Snapshot' },
    { urlImg: '/images/logo-console-plus.svg', description: 'Enchanced developer console with advanced filtering and logging.', title: 'ConsolePlus' },
  ])

  const body = document.querySelector('body')

  if (darkMode) {
    body?.classList.remove('dark-theme')
  } else {
    body?.classList.add('dark-theme')
  }

  return (
    <div className='App'>
      {displayModal && <AddExtension setDisplayModal={setDisplayModal} extensions={extensions} setExtensions={setExtensions} />}
      <Header setDarkMode={setDarkMode} />

      <div className='container-options'>
        <h2>Extensions List</h2>
        <Buttons activeButton={activeButton} setActiveButton={setActiveButton} setDisplayModal={setDisplayModal} />
      </div>

      <section className="extensions-list">
        {extensions.map((item, i) => (
          <Extension key={i} imgUrl={item.urlImg} description={item.description} title={item.title} activeButton={activeButton} />
        ))}
      </section>
    </div>
  )
}

export default App
