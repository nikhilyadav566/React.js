import './ItemDetails.css'

function ItemDetails(props){
    const price = props.price;
    const color = props.color;
    const brand = props.brand;

    return(
        <>
        <span>"price: "{price}</span>
        <span>color:{color}</span>
        <span>brand:{brand}</span>
        </>
    )
}

export default ItemDetails