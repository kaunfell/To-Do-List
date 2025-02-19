import React from 'react';
import {useDraggable} from '@dnd-kit/core';

import {CSS} from '@dnd-kit/utilities';


//check the style thing, is it this or previous

export function Draggable(props) {


    
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: 'draggable',
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  }

  
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}

export default Draggable