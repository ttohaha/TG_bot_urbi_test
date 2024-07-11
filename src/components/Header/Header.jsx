import {useEffect} from 'react'
import Button from '../Button/Button'
import { useTelegram } from '../../hooks/useTelegram'



function Header() {
    const {user, CloseTG} = useTelegram()
    
  return (
    <div className="header">
        <Button onClick={CloseTG}>Закрыть</Button>
        <span className="username">
            {user?.username}
            {/* {tg.initDataUnsafe?.user?.username} */}
        </span>
    </div>
  )
}

export default Header