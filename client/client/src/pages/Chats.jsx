import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function Chats() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState(0);
  const [typingUser, setTypingUser] = useState("");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on("connect", () => {
      setConnected(true);
    });

    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    socket.on("online_users", (count) => {
      setOnlineUsers(count);
    });

    socket.on("user_typing", (username) => {
      setTypingUser(username);

      setTimeout(() => {
        setTypingUser("");
      }, 1500);
    });

    socket.on("message_deleted", (id) => {
      setMessages((prev) =>
        prev.filter((message) => message.id !== id)
      );
    });

    return () => {
      socket.off("connect");
      socket.off("receive_message");
      socket.off("online_users");
      socket.off("user_typing");
      socket.off("message_deleted");
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = () => {
    if (!username.trim() || !message.trim()) {
      return;
    }

    const messageData = {
      id: Date.now(),
      username,
      message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    socket.emit("send_message", messageData);

    setMessage("");
  };

  const deleteMessage = (id) => {
    socket.emit("delete_message", id);
  };

  const handleTyping = (e) => {
    setMessage(e.target.value);

    if (username.trim()) {
      socket.emit("typing", username);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chat-page">

      <div className="chat-header">
        <div>
          <h2>💬 Real-Time Chat</h2>

          <span>
            {connected
              ? "🟢 Connected"
              : "🔴 Connecting..."}
          </span>
        </div>

        <div>
          👥 {onlineUsers} Online
        </div>
      </div>

      <div className="username-box">
        <input
          type="text"
          placeholder="Enter your name..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="messages">

        {messages.length === 0 ? (
          <div className="empty">
            💬
            <p>No messages yet</p>
            <small>Start the conversation!</small>
          </div>
        ) : (
          messages.map((data) => (
            <div
              key={data.id}
              className={
                data.username === username
                  ? "message my-message"
                  : "message other-message"
              }
            >
              <strong>{data.username}</strong>

              <p>{data.message}</p>

              <small>{data.time}</small>

              {data.username === username && (
                <button
                  onClick={() => deleteMessage(data.id)}
                >
                  🗑️
                </button>
              )}
            </div>
          ))
        )}

        {typingUser && (
          <div className="typing">
            ✍️ {typingUser} is typing...
          </div>
        )}

        <div ref={messagesEndRef}></div>
      </div>

      <div className="message-input">

        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={handleTyping}
          onKeyDown={handleKeyDown}
        />

        <button onClick={sendMessage}>
          ➤
        </button>

      </div>

    </div>
  );
}

export default Chats;