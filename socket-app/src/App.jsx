import React, { useEffect, useState } from "react";

import { io } from "socket.io-client"; // Import the socket.io-client library
function App() {
  const [name, setName] = useState("");
  useEffect(() => {
    const socketInstance = io("http://localhost:3000/");
  }, []);
  return <div>Vote is going to {name}</div>;
}

export default App;
