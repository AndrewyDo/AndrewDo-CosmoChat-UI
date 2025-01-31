import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@chatscope/chat-ui-kit-react-styles/dist/default/styles.min.css'
import {MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from "@chatscope/chat-ui-kit-react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div style = {{position: "relative,", height: "700px", width: "650px"}}>
        <MainContainer>
          <ChatContainer>
            
          </ChatContainer>
        </MainContainer>

      </div>
    </div>
  )
}

export default App
