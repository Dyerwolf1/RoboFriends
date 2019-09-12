import React from 'react';




// So we have learned about PROPS and STATE so far  
// There is also children, so scroll is wrapping the cardlist component and that is its children 
    


const Scroll = (props) => {
  return (
    <div style= {{ overflowY:'scroll', border: '2px solid teal', height: '500px'}} >
                {props.children}
    </div> );
    

};

export default Scroll;