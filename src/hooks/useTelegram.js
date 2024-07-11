const tg = window.Telegram.WebApp

export function useTelegram(){

    const CloseTG = ()=>{
        tg.close()
    }

    const onToggleBotton = ()=>{
        
        if(tg.MainButton.isVisible()){
            alert('yee')
            tg.MainButton.hide()
        }else{
            alert('nooo')
            tg.MainButton.show()
        }
    }

    return{
        CloseTG,
        onToggleBotton,
        tg,
        user:tg.initDataUnsafe?.user

    }
}