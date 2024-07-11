const tg = window.Telegram.WebApp

export function useTelegram(){

    const CloseTG = ()=>{
        tg.close()
    }

    const onToggleBotton = ()=>{
        alert()
        if(tg.MainButton.isVisible()){
            tg.MainButton.hide()
        }else{
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