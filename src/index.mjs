import { GoogleGenerativeAI } from '@google/generative-ai';
import './css/style.css';

const chatInput = 
    document.querySelector('.chat-input textarea');
const sendChatBtn = 
    document.querySelector('.chat-input button');
const chatbox = document.querySelector(".chatbox");

let userMessage;

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: PROMPT }],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      },
    ],
  });

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = 
        className === "chat-outgoing" ? `<p>${message}</p>` : `<p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const generateResponseAsync = async (incomingChatLi) => {
    const messageElement = incomingChatLi
    .querySelector("p");

    let response;
    try {
        response = (await chat.sendMessage(userMessage)).response.text();
    } catch (e) {
        response = e.toString();
    }

    messageElement.textContent = response;
};


const handleChatAsync = async () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) {
        return;
    }
    chatbox
    .appendChild(createChatLi(userMessage, "chat-outgoing"));
    chatbox
    .scrollTo(0, chatbox.scrollHeight);

    const incomingChatLi = createChatLi("Thinking...", "chat-incoming");
    setTimeout(() => {
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }, 600);

    new Promise(resolve => setTimeout(resolve, 600));
    await generateResponseAsync(incomingChatLi);
}

sendChatBtn.addEventListener("click", () => handleChatAsync());

function cancel() {
    let chatbotcomplete = document.querySelector(".chatBot");
    if (chatbotcomplete.style.display != 'none') {
        chatbotcomplete.style.display = "none";
        let lastMsg = document.createElement("p");
        lastMsg.textContent = 'Thanks for using our Chatbot!';
        lastMsg.classList.add('lastMessage');
        document.body.appendChild(lastMsg)
    }
}