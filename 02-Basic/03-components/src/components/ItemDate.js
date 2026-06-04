import './ItemDate.css';

function ItemDate (){
    return(<div className='date'>
        <span>07</span>
        <span>April</span>
        <span>2004</span>
    </div>);
}

export default ItemDate 

// Writes the date values directly inside the JSX (07, April, 2004).
// Less flexible because we must edit the JSX whenever you want to change the date.
// Suitable only for fixed/static content.
// So in next component has given