import { useState, useEffect, useRef } from "react";

const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hello! I'm Eventos, your guide to finding the perfect vendors and events for your special occasion. How can I help you today?",
    },
  ]);

  const [isChatOpen, setIsChatOpen] = useState(false); // State to manage chat visibility
  const messagesEndRef = useRef(null);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (message.trim() === "") return;

    // Add user message to chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", text: message },
    ]);

    // Send message to API
    try {
      const response = await fetch("http://localhost:8080/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message), // Send message directly as a string
      });

      setMessage("");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.text(); // Use .text() for plain text response

      // Add AI response to chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "ai", text: data },
      ]);

      // Clear input field after sending
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen); // Toggle chat visibility
  };

  useEffect(() => {
    // Scroll to the bottom of the messages container
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div>
      {/* Floating Chat Button */}
      <button
        className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-pink-700 hover:bg-pink-800 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isChatOpen ? "true" : "false"}
        onClick={toggleChat} // Toggle chat container on button click
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white block border-gray-200 align-middle"
        >
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
        </svg>
      </button>

      {/* Chat Container */}
      {isChatOpen && (
        <div
          style={{
            boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)",
          }}
          className="fixed bottom-[calc(4rem+1.5rem)] right-0 mr-0 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[400px] h-[634px] flex flex-col"
        >
          {/* Heading */}
          <div className="flex flex-col space-y-1.5 pb-6">
            <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
            <p className="text-sm text-[#6b7280] leading-3">
              Powered by Mendable and Vercel
            </p>
          </div>

          {/* Chat Messages */}
          <div
            className="overflow-y-auto flex-1 pr-4"
            style={{
              minWidth: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-3 my-4 text-gray-600 text-sm ${
                  msg.type === "user" ? "justify-end" : ""
                }`}
              >
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                  <div className="rounded-full bg-gray-100 border p-1">
                    <svg
                      stroke="none"
                      fill="black"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      />
                    </svg>
                  </div>
                </span>
                <p className="leading-relaxed">
                  <span className={`block font-bold text-gray-700`}>
                    {msg.type === "ai" ? "AI " : "You "}
                  </span>
                  {msg.text}
                </p>
              </div>
            ))}
            <div ref={messagesEndRef} /> {/* Scroll to this element */}
          </div>

          {/* Input Box */}
          <div className="pt-4 border-t border-gray-200">
            <form
              className="flex items-center justify-center w-full space-x-2"
              onSubmit={handleSubmit}
            >
              <input
                className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
                placeholder="Type your message"
                value={message}
                onChange={handleInputChange}
              />
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-pink-700 hover:bg-pink-800 h-10 px-4 py-2"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
