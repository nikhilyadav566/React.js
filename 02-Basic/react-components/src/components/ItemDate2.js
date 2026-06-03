import './ItemDate2.css'

function ItemDate2 (){
    const day = 25;
    const month = "June";
    const year = 2022;

    return(
        <div className = "assume">
            <span> {day} </span>
            <span> {month} </span>
            <span> {year} </span>
        </div>
    );
}

export default ItemDate2



// Stores the date values in variables (day, month, year).
// Uses JSX expressions ({day}, {month}, {year}) to display the values.
// More flexible because you can change the variable values in one place and the UI updates automatically.
// Suitable for dynamic data, props, state, or API responses.


// Note:-> ItemDate2 displays data stored in variables, while ItemDate displays hard-coded (fixed) values directly in the JSX.

//      So, ItemDate2 is the better approach in React because real applications usually work with dynamic data rather than fixed values.

// But we can't say both are reusable ItemDate and ItemDate2.