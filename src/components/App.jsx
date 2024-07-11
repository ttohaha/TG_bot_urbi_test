import {useEffect} from 'react'
import Header from './Header/Header';
import Form from './Form/Form';
//https://tg-bot-urbi-test.vercel.app/
import { useTelegram } from '../hooks/useTelegram'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'
import ProductList from './ProductList/ProductList';

const tg = window.Telegram.WebApp

function App() {
  const {tg,onToggleBotton} = useTelegram()

  useEffect(()=>{
    tg.ready()
  },[])  

  return (
    <BrowserRouter>
      <div className="App">
          <Header/>
          <Routes>
            <Route path='/' element={<ProductList/>}/>
            <Route path='/form' element={<Form/>}/>
          </Routes>
          {/* <button onClick={onToggleBotton}>toggle</button> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
