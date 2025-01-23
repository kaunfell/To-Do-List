import React, { useState, useEffect } from "react";
import styles from "./Theme.css"


function Theme({theme}){
const [currentTheme, setCurrentTheme] = useState("normal");

    useEffect(() => {
        document.body.setAttribute('data-theme', currentTheme);
      }, [currentTheme]); 

      const themes = ["normal","dark", "blue"]

      function toggleTheme(){
        const themeNow = themes.indexOf(currentTheme);
        const themeNext = (themeNow + 1 ) % themes.length 

        setCurrentTheme(themes[themeNext])
      }

    return(
        <button onClick={toggleTheme} className="themeOption rounded " id={`theme-${theme}`}>
           Set theme
        </button>

    )

}
export default Theme