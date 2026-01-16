import './App.css'
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {

  const username = "John";
  const products_data = [
    {
      "p_id": 101,
      "p_name": "SmartBuy Cover",
      "p_img": "https://rukminim2.flixcart.com/image/612/612/xif0q/cases-covers/back-cover/j/e/6/smart-17-black-mag-flipkart-smartbuy-original-imahh6d9g59wvxsk.jpeg?q=70",
      "p_price": "191 Rs",
      "p_rating": 4
    },
    {
      "p_id": 102,
      "p_name": "COVJ Back Cover",
      "p_img": "https://rukminim2.flixcart.com/image/612/612/xif0q/cases-covers/back-cover/9/9/b/flip-cover-21-covj-original-imahgwdyjgsqxjdg.jpeg?q=70",
      "p_price": "196 Rs",
      "p_rating": 4.5
    },
    {
      "p_id": 103,
      "p_name": "Enflamo Cover",
      "p_img": "https://rukminim2.flixcart.com/image/612/612/xif0q/cases-covers/back-cover/u/m/o/clear-mgsafe-ip-17-celltech-original-imahg2bhcvxzqc28.jpeg?q=70",
      "p_price": "288 Rs",
      "p_rating": 4.7
    }
  ]

  return (
    <>
      <Header username={username}/>
      <Main data={products_data}/>
    </>
  )
}

export default App
