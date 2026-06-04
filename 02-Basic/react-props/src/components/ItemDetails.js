import './ItemDetails.css'

function ItemDetails(props){
    const price = props.price;
    const color = props.color;
    const brand = props.brand;

    return(
        <>
        <span>price:{price}</span>
        <span>color:{color}</span>
        <span>brand:{brand}</span>
        </>
    )
}

export default ItemDetails


// Instead of it we can type like this also 

// function ItemDetails({ price, color, brand }) {
//     return (
//         <>
//             <span>price: {price}</span>
//             <span>color: {color}</span>
//             <span>brand: {brand}</span>
//         </>
//     );
// }

// export default ItemDetails;