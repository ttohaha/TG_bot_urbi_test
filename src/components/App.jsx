const tg = window.Telegram.WebApp

function App() {

  useEffect(()=>{
    tg.ready()
  },[])

  cnost CloseTG = ()=>{
    tg.close()
  }

  return (
    <div className="App">
        work
        <button onClick={CloseTG}>Закрыть</button>
    </div>
  );
}

export default App;
