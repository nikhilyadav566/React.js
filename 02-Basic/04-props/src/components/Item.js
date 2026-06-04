import './Item.css';

function Item(props){
    const ItemName = props.name;
    return(
        <div className = "fruits">
        {ItemName}
        </div>
    )
    
}

export default Item

//  props is not a React keyword. It is simply the variable that receives the object containing the component's properties. 
// Using props is recommended because it follows common React practice.

// Instead of it we can take any variable like as data , user , abc, 123 etc.