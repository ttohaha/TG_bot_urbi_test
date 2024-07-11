import {useEffect} from 'react'
import Button from '../Button/Button'

const tg = window.Telegram.WebApp


function Header() {

    useEffect(()=>{
        tg.ready()
      },[])
    
    const CloseTG = ()=>{
        console.log(tg.initDataUnsafe);
        tg.close()
    }


  return (
    <div className="header">
        <Button onClick={CloseTG}>Закрыть</Button>
        <span className="username">
            {/* {tg.initDataUnsafe?.user.username} */}
        </span>
    </div>
  )
}

export default Header