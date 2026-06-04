import './App.css';
import Item from './components/Item';
import ItemDetails from './components/ItemDetails';


function App() {
  const itemFourthName = "Wheat";  // we can also type like this . Store the value in a variable
  return(
    <div>
      <Item name = "Apple"></Item>
      <ItemDetails price="120/kg" color="Red" brand="Kashmiri"></ItemDetails>
      <Item name = "Orange"></Item>
      <ItemDetails price="100/kg" color="Yellow" brand="Rajsthani"></ItemDetails>
      <Item name = "Rice"></Item>
      <ItemDetails price="80/kg" color="White" brand="Tinku"></ItemDetails>
      <Item name = {itemFourthName}></Item>    {/*Passing the value stored in itemFourthName*/}
      <ItemDetails price="45/kg" color="White" brand="Aashirwad"></ItemDetails>
     
    </div>
    );
}

export default App;


// Props (Properties) are read-only values passed from a parent component to a child component. 
// They help make components reusable, dynamic, and maintainable by allowing data to flow from parent to child.
