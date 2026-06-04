import './Item.css'

// In React, a component receives one object parameter called props
function Item({name,children:child}){
    return(
        <div>
       <p>{name}</p>  {/*here name is a props  */}
        {child}          {/* children is also a prop . It is a special prop that React automatically provides for the content placed between a component's opening and closing tags.*/}
        </div>              
    );
}

export default Item


//  here we can't change chidren if i want 
//  then firstly rename it children:child inside function item  and use {child} in return