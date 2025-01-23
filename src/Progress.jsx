import React, {useEffect, useState, useRef} from "react";
import styles from './Progress.module.css'


//<h3>You have worked: {props.time}</h3>
// either { time } or props and to the split props.time
import 'bootstrap/dist/css/bootstrap.min.css';


function Progress(props){

    //const [hours, minutes, seconds] = props.time.split(':');
    const [color, setColor] = useState(`zeroStep`);
    
    const total = props.total
    const numberOfChores = props.numberOfChores;
    const many = props.many;
    
    const goalHoursTest = props.goalHoursTest;
    const goalMinutesTest = props.goalMinutesTest ;

    function formatTime1(total) {
        let hours = Math.floor(total/ (1000 * 60 * 60));
        let minutes = Math.floor(total / (1000 * 60)) % 60;
        let seconds = Math.floor(total / 1000) % 60;
    
        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');
        
    
        return {hours, minutes, seconds};
        // `${hours}:${minutes}:${seconds}`
    }

    const { hours, minutes, seconds } = formatTime1(total); 
      
    //testing
   const HoursTest = goalHoursTest * 3600000;
   const  MinutesTest = goalMinutesTest * 60000;
    const finalMinutes = HoursTest + MinutesTest;
    


    
/*
   
useEffect(() => {
    if(seconds == 2){
        setColor('zeroStep') //this red is just name, the color is in css
    }else if(seconds == 3){
        setColor('firstStep') 
    }else if(seconds == 4){
        setColor('middleStep') 
    }else if(seconds == 5){
    setColor('thirdStep') 
}else if(seconds == 6){
    setColor('fullSteps') 
}

}, [seconds]); */




// className={`${styles.progressB} border rounded w-100`}    style={{backgroundColor: color}} 
    return(<>
    <div>
    <h2 className={`${styles.head} rounded text-center`}>Progress</h2>
        <div className={`${styles.progressContainer} rounded p-2`}>
            <h3>You have worked: </h3>

            <div className="d-flex flex-column ">

                <div  className=" text-start">  
                    <span> {hours} hours</span><br />
                    <span> {minutes} minutes</span><br />
                    <span> {seconds} seconds</span>
                </div>


                <div className="d-flex flex-row justify-content-around  mt-3">
                    <div className="text-start ">
                        <p className={`${styles.smallHeads} rounded`}>Goal time:</p>
                        <p> {goalHoursTest} h <br></br>{goalMinutesTest} mins</p>
                        {/*<progress className={`${styles.progressB} border rounded w-25 ${styles[color]}`}    value={seconds}  max={finalMinutes} /> */}
                    </div>

                    

                    <div className="text-center w-25">
                        <p className={`${styles.smallHeads} text-start rounded`}>Completed <br></br>tasks:</p>
                        <span>  {many}/{numberOfChores} </span>
                        <progress className={`${styles.progressB} border rounded w-100 ${styles[color]}`}    value={many} max={numberOfChores} /> 
                    </div>
            
                </div>
            

            </div>

            
            

        </div>{/*progress container*/}
        
    </div>    
    </>)
}

export default Progress;
// <progress className={`${styles.progressB} border rounded w-100 mt-2 ${styles[color]}`}    value={} max={7} /> 