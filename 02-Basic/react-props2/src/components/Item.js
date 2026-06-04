import './Item.css'

function Item (props) {
    const ItemName = props.name;
    return(
        <div className="surfName">
            {ItemName}
        </div>
        
    )
}

//  instead of upper codes we  can type like this in short way

// function Item({name}){
//     return(
//      <>
//         {name}
//      <>
//     )
// }

export default Item;