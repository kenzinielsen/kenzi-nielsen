import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected,
      } = props;
    return (
        <header className="flex-row px-1 md:sticky">
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                    <a data-testid="about" href="#about" >
                        About Me</a>
                    </li>
                    <a className="mx-2" href="#projects">Projects</a>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        Contact
                    </li>  

                    {categories.map((category) => (
  <li
    className={`mx-1 ${
      currentCategory.name === category.name && !contactSelected && 'navActive'
      }`}
    key={category.name}
  >
    <span
      onClick={() => {
        setCurrentCategory(category);
        setContactSelected(false);
      }}
    >
      {capitalizeFirstLetter(category.name)}
    </span>
  </li>
                    ))}

                </ul>
            </nav>
        </header>
    )
}

export default Nav;