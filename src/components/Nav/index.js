//import React, { useState } from "react";
import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    //useEffect to change the title of the page
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    // const [categories] = useState([
    //     {
    //         name: "Commercial",
    //         description: "Photos of grocery stores, food trucks, and other commercial projects",
    //     },
    //     {
    //         name: "Portraits",
    //         description: "Portraits of people in my life"
    //     },
    //     {
    //         name: "Food",
    //         description: "Delicious delicacies"
    //     },
    //     {
    //         name: "Landscape",
    //         description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    //     },
    // ]);

    // const [currentCategory, setCurrentCategory] = useState(categories[0]);

    // function categorySelected(name) {
    //     console.log(`${name} clicked`)


    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && `navActive`}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li className={`mx-1 ${currentCategory.name === category.name && !contactSelected && "navActive"}`} key={category.name}>
                            <span onClick={() => {
                                setCurrentCategory(category);
                                setContactSelected(false);
                            }}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;


