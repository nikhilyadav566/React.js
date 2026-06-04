import './App.css';
import Item from './components/Item'
import ItemDetails from './components/ItemDetails'


function App() {
  const data = [
    {
      itemName:"Ramayan Book",
      itemPrice:"280",
      itemDiscount:"30%"
    },
    {
      itemName:"Mahabhart Book",
      itemPrice:600,
      itemDiscount:"35%"
    }
  ];
  return (
    <div >
      <Item name={data[0].itemName}>Hello This Side Nikhi Yadav</Item>   
      <Item name={data[1].itemName}></Item>
      <ItemDetails price={data[1].itemPrice} discount={data[1].itemDiscount}></ItemDetails>
    </div>
  );
}

export default App;


// Note:->

//  Anything written between a component's opening and closing tags becomes the special children prop. 
// It will appear on the screen only if the component renders children.*/}
