import React from 'react'
import './Obsidian.css'

const Obsidian = () => {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar">

                <div className="navbar__right">
                    NavbarLeft
                </div>
                <div className="navbar__right">
                    NavbarCenter
                </div>
                <div className="navbar__right">
                    NavbarRight
                </div>

            </nav>
            {/* Sidebar */}
            <nav className="sidebar">
                Sidebar
            </nav>
            {/* Main */}
            <main className="main">Main</main>

        </div>
    )
}

export default Obsidian