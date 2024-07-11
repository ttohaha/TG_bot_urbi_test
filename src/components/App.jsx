import {useEffect} from 'react'
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
