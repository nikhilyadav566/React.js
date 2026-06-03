import './Item.css';

function Item(props){
    const ItemName = props.name;
    return(
        <div>
        {ItemName}
        </div>
    )
    
}

export default Item