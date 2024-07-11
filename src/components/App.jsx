import {useEffect} from 'react'
//https://tg-bot-urbi-test.vercel.app/
const tg = window.Telegram.WebApp

function App() {

  useEffect(()=>{
    tg.ready()
  },[])

  const CloseTG = ()=>{
    tg.close()
  }

  return (
    <div className="App">
        привет как дела
        <button onClick={CloseTG}>Закрыть</button>
    </div>
  );
}

export default App;
