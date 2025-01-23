import React, {useState, useEffect, useRef} from 'react'
import styles from './StopWatch.module.css'

import Progress from './Progress'

function StopWatch(props){

    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime ] = useState(0)
    const [totalTime, setTotalTime] = useState(0);
    const intervalIdRef = useRef(null)
    const startTimeRef = useRef(0)


    const initialvalues = {
        fname: "",
        lname: ""
      };
      const [data, setData] = useState(initialvalues);
      const [timeGoal, setTimeGoal] = useState(0);

    const numberOfChores = props.numberOfChores;
    const many = props.many;

    useEffect(() => {

        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10)
        }


        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]);





    function start(){
        setIsRunning(true)
        startTimeRef.current = Date.now() - elapsedTime;
    }


    function stop(){
        setIsRunning(false)
       // setTotalTime((prevTime) => prevTime + elapsedTime)
       
    }

    function reset(){

        setTotalTime((prevTime) => prevTime + elapsedTime)
        setElapsedTime(0);
        setIsRunning(false);
        
        
    }


    function formatTime(){

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60 ) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor(elapsedTime % 1000 / 10);

        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');

        return `${hours}:${minutes}:${seconds}`;
    }


    function setGoal(){


        const goalHours = document.getElementById("fname").value;
        document.getElementById("fname").value = " ";
        
        
        const goalMinutes = document.getElementById("lname").value;
        document.getElementById("lname").value = "";



       
        setTimeGoal([[goalHours], [goalMinutes]])
        setTimeout(() => {
            document.getElementById("fname").value = "";
            document.getElementById("lname").value = "";
         }, 1000);

       
    }




    const handleChange = (e) => {

        
       if( e.target.value <= e.target.max && e.target.value.length <= 2){
          setData({ ...data, [e.target.name]: e.target.value });   



        }

      };

      //not sure if this is best approach but it works :D
      const goalHoursTest = timeGoal[0];
      const goalMinutesTest = timeGoal[1];

// id="goalHours"

//onClick={handleChange}   <button onClick={setGoal} className={`${styles.btn1} rounded mt-1`}>Set</button>
    return(
        <>
        <div>
        <h2 className={`${styles.head} rounded  px-3 text-center `}>Timer</h2>
        <div className={`${styles.stopWatchContainer} container  d-flex align-items-center flex-column  rounded`} >
            
            {/*<input type="text" id="sessionTime" placeholder='Session time' className='rounded'/>
            <button className={`${styles.btn1} rounded mt-1`}>Set</button>*/}

            <div className={`${styles.timeField} position-absolute  rounded `}>
            <p>Todays goal time:</p>

            <div className='d-flex justify-content-around'>
            <input type="text"  placeholder="hours" className="rounded"
                    value={data.fname}
                    name="fname"
                    id="fname"
                    min="0"
                    max="16"
                    onChange={handleChange}
                    
                    
            
            />
            
            <input type="text" placeholder="mins" className="rounded"
                    value={data.lname}
                    name="lname"
                    id="lname"
                    min="0"
                    max="59"
                    onChange={handleChange}/>



        <button onClick={setGoal} className={`${styles.btn1} rounded  `}>Set</button>
            <p></p>
            </div>{/**  input and buttons*/}
            </div>{/**  set time container*/}


            <p className={`${styles.smallHeads} mt-5 rounded`}>Session time</p>
            <div className={styles.display}>{formatTime()}</div>
            <div className={`${styles.controls}  m-4`}>
                <button onClick={start} className='startBtn'>Start</button>
                <button onClick={stop} className='stopBtn'>Stop</button>
                <button onClick={reset} className='resetBtn' data-toggle="tooltip" title="Won't reset the progress">Reset</button>
                {/*<p>{totalTime + elapsedTime}</p> */}
            </div>


            
        </div>

        
        </div>

        <Progress  total={totalTime + elapsedTime } elapsedTime={elapsedTime} numberOfChores={numberOfChores} many={many}  goalHoursTest={goalHoursTest} goalMinutesTest={goalMinutesTest}/>
        
        </>
    );// goalHours={goalHours}
}

export default StopWatch
// time={formatTime(totalTime + elapsedTime)}
//  <Progress  total={totalTime + elapsedTime } elapsedTime={elapsedTime}/>