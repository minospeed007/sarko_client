import { useParams } from "react-router-dom";
import ChatBox from "./chat";

const ChatPage = ({ currentUserId }) => {
  const { userId } = useParams(); 
  return <ChatBox currentUserId={currentUserId} selectedUserId={userId} />;
};

export default ChatPage;
