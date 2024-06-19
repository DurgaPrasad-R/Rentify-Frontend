import Detail from "../components/Detail"
import List from "../components/list/List"
import Chat from "../components/Chat"
const ChatApp = () => {
  return (
    <div className="chatApp">
    <div className='container'>
    <List/>
    <Chat/>
    <Detail/>
    </div>
    </div>
    
  )
}

export default ChatApp