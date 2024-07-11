import {useEffect} from 'react'
import Header from './Header/Header';
//https://tg-bot-urbi-test.vercel.app/
import { useTelegram } from '../hooks/useTelegram'

const tg = window.Telegram.WebApp

function App() {
  const {tg,onToggleBotton} = useTelegram()

  useEffect(()=>{
    tg.ready()
  },[])  

  return (
    <div className="App">
        <Header/>
        <button onClick={onToggleBotton}>toggle</button>
    </div>
  );
}

export default App;
