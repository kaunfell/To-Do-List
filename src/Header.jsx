import { useState } from 'react';
import styles from './Header.module.css'
import Theme from './Theme';
//import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    const [bgColor, setBgColor ] = useState('green');
    //isnt there one func for all these?
    let newDate = new Date();
    let dayNum = newDate.getDay();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();


    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const dayName = daysOfWeek[dayNum -1];

    const weekLetters = [ "M", "T", "W", "T", "F", "S", "S"];
    const listItems = weekLetters.join(" ")
    //const dayLetter = weekLetters[dayNum];
    const test = weekLetters[dayNum ];

    function handleBg(index){
        const newColor = bgColor === "green" ? "purple" : "red";
        setBgColor(newColor)
    }

//<span className={` d-flex flex-row list-unstyled text-end  justify-content-center`} style={{backgroundColor: bgColor}}>{ listItems}  </span>
// style={{backgroundColor: "red"}}

// is working    style={{ color: index === dayNum - 1? "red" : "" }}
    return(
        <div className='container  rounded text-center mt-3 ' >
        <header className={`${styles.header} rounded position-relative`}>
                <h1 className='display-3 mt-4'>To do list</h1>

                <p>Add chores, complete them and track your time</p>
                
                
                <div className=''>    
                <p className='d-flex flex-column '><span>Today is:</span> {dayName} {date}.{month}.{year}
                <span className={` d-flex flex-row list-unstyled text-end  justify-content-center`}>{weekLetters.map((item, index) => <li key={index} className={index === dayNum - 1 ? styles.theDay : ""} style={{margin: "3px"}}>{item}</li>)}</span>
                </p>
                
               
                </div>

                <div className={`${styles.themeOption}`}><Theme theme="normal"/></div>
                

        </header>

        
        
        

        </div>
    )
}

export default Header