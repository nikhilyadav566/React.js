import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  const response =[
    {
        itemName:"Nirma",
        itemDate: "20",
        itemMonth: "June", 
        itemyear:"1998"     
    },
    {
        itemName:"Surf",
        itemDate: "5",
        itemMonth: "December", 
        itemyear:"2008"     
    },
    {
        itemName:"Surf-Excel",
        itemDate: "20",
        itemMonth: "August", 
        itemyear:"2000"     
    }

  ];

  return (
    <div>
      <Item name={response[0].itemName}></Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemyear}></ItemDate>

      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemyear}></ItemDate>

      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemyear}></ItemDate>
    </div>
  );
}

export default App;
