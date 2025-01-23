import React, {useState, useEffect} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Chores.module.css';
import Progress from './Progress'
import StopWatch from "./StopWatch";



import {DndContext, useDraggable} from '@dnd-kit/core';

import {Droppable} from './Droppable';
import {Draggable} from './Draggable';


function Chores(){
    const [chores, setChores] = useState([{task: "Eat food", done: "false"}, {task: "Relax", done: "false"}  ]);
    const [many, setMany] = useState(0)
    const [placeholder, setPlaceHolder] = useState("Enter a chore")

    //test



    const numberOfChores = chores.length;


  



// test end
    function handleAddChores(){
        const newChore = document.getElementById("choresInput").value;
        document.getElementById("choresInput").value = "";


        if (newChore === "" || newChore == null){
            setPlaceHolder("Write something...")


            setTimeout(() => {
                setPlaceHolder(placeholder)
            }, 3000)
        }else{

            setChores(c => [...c, {task: newChore, done: "false"}])
        }


    }
/*
    useEffect(() => {
        setTimeout(() => {
            setPlaceHolder("Write something...")
        }, 2000)
    }, [])
*/





    function handleRemoveChore(index){
        setChores(chores.filter((_, i) => i !== index));
    }

    //this seems to work 'backwards' ? and the numberofdones as well
    function handleDone(index){
        const updatedChores = chores.map((chore, i) => 
            i === index ? { ...chore, done: !chore.done} : chore
        
          );
  
    const numberOfDones = updatedChores.filter(chore => !chore.done).length;


    setChores(updatedChores);
    setMany(numberOfDones);


    
               
    }

   //const showComponent = true    !chore.done



// {weekLetters.map((item, index) => <li key={index} className={index === dayNum ? styles.theDay : ""} style={{margin: "3px"}}>{item}</li>)}</span>
   // style={{ textDecoration: line }}
return(
    <>
    <div>
    <h2 className={`${styles.head} rounded px-3 pb-1 `}>Things to do</h2>
    <div className={`${styles.toDo} rounded p-1 mb-sm-5`}  >
        
        <ul className="d-flex flex-column">
        
            {chores.map((chore, index)  => <li key={index} className={` d-flex justify-content-between align-items-center`}><span className={`${styles.test} ${chore.done ? ""  : styles.done}`}>{chore.task}</span>

                {/*buttons */}
             <div className=" d-flex align-items-center">
             <button onClick={() => handleRemoveChore(index)} className={`${styles.btn1} rounded  p-0 m-1`} >x</button> {/* for delete*/} 
            
             <button  onClick={() => handleDone(index)}   className={`${styles.btn1} rounded  p-1 mx-0`} >done</button> {/* done*/} 
             </div>
             
            </li>)}
            
           
        </ul>


        <input type="text" id="choresInput" placeholder={placeholder} className={` rounded mx-1`}/> <br />
        <button onClick={handleAddChores} className={` ${styles.btn1} mt-2 rounded`}>Add a chore </button>

        <div className="container mt-4 text-start">
        <p>Chores done: {many}/{numberOfChores}</p>
        <progress className={`border rounded w-100`}    value={many} max={numberOfChores} /> 
        </div>
        


    </div>

    </div>


    <StopWatch numberOfChores={numberOfChores}  many={many}/>
    
    </>

    
)

}

export default Chores;