import './ItemDate.css'

function ItemDate ({day, month, year}){   //here {day, month , year } these are values coming from props
    return(
        <div className="details">
           <span>{day}</span>  
           <span>{month}</span>  
           <span>{year}</span> 
           {/*intead of it we can use in one line {day} {month} {year} without using span*/}
        
        </div>
    );
}

export default ItemDate