import React, { useState } from 'react';

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props)=>{

    const[title, setTitle]= useState(props.title);   // here title means (props.title)  (Or current state value)
                                                      // And setTitle is used to change the value of title . (Or function to update the state)
    function clickHandler(){
        // title = "popcorn";
        setTitle("Popcorn");     // Step 1: -> React does not immediately change title. (Instead, React says) :> "Okay, I need to update title to 'Popcorn'. I'll schedule a re-render."
        console.log(title);     // Step 2: -> At this moment, title is still the old value.
    }
    // Step 3: ->  After the event handler finishes, React re-renders the component.
    //     Now React executes: const [title, setTitle] = useState(props.title);   again, but React remembers the state value is now , state value means current value
    // then <h2>{title}becomes <h2>{Popcorn} and UI updates


    return(
        <Card className='product-item'>
            <ProductDate date={props.date} />
            <div className='product-item_description'>
                <h2>{title}</h2>  
            </div>
            <button onClick={clickHandler}>Add to Cart</button>
        </Card>
    );
}

export default ProductItem


// useState(prop.title) -> initialise value inside paranthesis.
//  And it's provide output in two ways
// 1. Value of the variable 2. A function for updating the value 
// it may be assue like setter and getter in javascript




// title      = current value
// setTitle() = request React to change title

// setTitle("Popcorn")
//         ↓
// React schedules update
//         ↓
// Component runs again
//         ↓
// title becomes "Popcorn"
//         ↓
// UI updates

// per component-instance basis change 