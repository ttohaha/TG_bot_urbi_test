const tg = window.Telegram.WebApp

export function useTelegram(){

    const CloseTG = ()=>{
        tg.close()
    }

    const onToggleBotton = ()=>{
        
        if(tg.MainButton.isVisible()){
            tg.MainButton.hide()
            alert('yee')
        }else{
            tg.MainButton.show()
            alert('nooo')
        }
    }

    return{
        CloseTG,
        onToggleBotton,
        tg,
        user:tg.initDataUnsafe?.user

    }
}