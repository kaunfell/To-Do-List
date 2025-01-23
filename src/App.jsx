import Header from "./Header.jsx";
import Chores from "./Chores.jsx";
import StopWatch from "./StopWatch.jsx";
import Progress from "./Progress.jsx";




import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Theme from "./Theme.jsx";
import './Theme.css';

import { useState } from "react";

import {DndContext} from '@dnd-kit/core';

import {Droppable} from './Droppable';
import {Draggable} from './Draggable';

//  <Chores />
// <StopWatch />


// <Progress />
function App(props){

//test end

    return(
        <>
        <div >
        

        <Header />
        <div className={`${styles.main} container d-flex flex-row justify-content-around   mt-4 p-5 rounded`}>
        



        <Chores />
       
        
      
     
        
       
        
        
    </div>

    </div>         
    </>
        
    )

}

export default App;