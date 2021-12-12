import React from 'react';
//import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(props) {
    const {
        setCurrentPage, currentPage
    } = props;
    return (
        <header className="flex-row px-1 md:sticky">
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a className={currentPage === "About" ? "mx-2 navActive" :""} data-testid="about" href="#about" onClick={() => setCurrentPage("About")} >
                            About Me</a>
                    </li>
                    <li>
                    <a className={currentPage === "Projects" ? "mx-2 navActive" :""}  href="#projects" onClick={() => setCurrentPage("Projects")}>Projects</a>
                    </li>
                    <li className={`mx-2 ${'navActive'}`}>
                    <a className={currentPage === "Contact" ? "mx-2 navActive" :""}  href="#contact" onClick={() => setCurrentPage("Contact")}>Contact</a>
                    </li>


                </ul>
            </nav>
        </header>
    )
}

export default Nav;