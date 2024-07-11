import {useEffect} from 'react'
import Button from '../Button/Button'

const tg = window.Telegram.WebApp


function Header() {

    useEffect(()=>{
        tg.ready()
      },[])
    
    const CloseTG = ()=>{
        alert('hjj;lag')
        tg.close()
    }


  return (
    <div className="header">
        <Button onClick={CloseTG}>Закрыть</Button>
        <span className="username">
            {tg.initDataUnsafe?.user.username}
            {tg.initDataUnsafe}
        </span>
    </div>
  )
}

export default Header