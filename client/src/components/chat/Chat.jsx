import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from "react-chat-engine-advanced"
import CustomHeader from '../customHeaders/CustomHeader'
const Chat = () => {
    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "Test",
        "1234"
    )
  return (
    <div style={{flexBasis:"100%"}}>
      <MultiChatSocket {...chatProps}/>
      <MultiChatWindow {...chatProps} style ={{height:"100vh"}}
      renderChatHeader = {(chat)=> <CustomHeader chat={chat}/>}
      />
    </div>
  )
}

export default Chat
