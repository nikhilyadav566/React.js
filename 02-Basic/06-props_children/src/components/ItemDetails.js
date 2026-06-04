import  './ItemDetails.css'

function ItemDetails ({price, discount}){
    return(
     <>
       <p className="details">Price =  {price} Discount = {discount}</p> 
     </>
    )
}

export default ItemDetails