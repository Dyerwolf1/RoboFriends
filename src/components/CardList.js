import React from 'react';
import Card from '../components/Card';


const CardList = ({ robots }) => {
    
    const cardArray = robots.map((user, i) => {
        return (<Card 
        key={i} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email}
        />
        );
    })
    return(
        <div>
             {cardArray}  
             </div> 
                
            );
}

export default CardList;



                // When you do a loop you have to give it an unique Key. In case the cards get deleted 
                // react wont know which comes next so giving it a key allows react to just skip that one 
                // and remove it from the list of cards