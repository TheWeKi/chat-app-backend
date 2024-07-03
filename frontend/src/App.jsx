import { useState } from "react";
import { useEffect } from "react";
import io from "socket.io-client";
function App() {
  
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:8080");
    setSocket(newSocket);
    if(newSocket){
      console.log("Connected",newSocket);
    }
    return () => newSocket.close();
  });

  return (
    <>
    APP
    </>
  )
}

export default App
