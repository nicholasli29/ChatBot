import { HarmBlockThreshold, HarmCategory, GoogleGenerativeAI } from '@google/generative-ai';
import './css/style.css';

const PingBot = {
    chatBoxName: "PingBot",
    prompt: PING_PROMPT,
    initialText: "DOOMED"
}

const FrodBot = {
    chatBoxName: "FrodBot",
    prompt: FROD_PROMPT,
    initialText: "HAI WA"
}

const keysPressed = {};

const chatInput = 
    document.querySelector('.chat-input textarea');
const sendChatBtn = 
    document.querySelector('.chat-input button');
const pingBotBtn = 
    document.querySelector('.breadIcon');
const frodBotBtn = 
    document.querySelector('.frogIcon');
const chatbox = document.querySelector(".chatbox");

let userMessage;
let chat;

const genAI = new GoogleGenerativeAI(API_KEY);
const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_NONE
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_NONE
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_NONE
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_NONE
    }
];
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", safetySettings: safetySettings });

const startChat = (prompt) => {
    chat = model.startChat({
        history: [
        {
            role: "user",
            parts: [{ text: prompt }],
        },
        {
            role: "model",
            parts: [{ text: "Great to meet you. What would you like to know?" }],
        },
        ],
    });
}

const initializeChatBot = (botClass) => {
    setEnterChat();

    startChat(botClass.prompt);
    const chatBoxName = document.querySelector('.chatBoxName');
    chatBoxName.innerHTML = botClass.chatBoxName;
    const initialText = document.querySelector('.initialText');
    initialText.innerHTML = botClass.initialText;
}


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

    setTimeout(() => {
        document.getElementById("chatInput").value = "";
      }, "20");
}

const setEnterChat = () => {
    document.addEventListener('keydown', async (event) => {
        if (!event.repeat) {
            keysPressed[event.key] = true;
        }

        switch (true) {
          case event.key === 'Shift' && keysPressed['Enter']:
          case event.key === 'Enter' && keysPressed['Shift']:
            return;
          default:
            break;
        }

        if (event.repeat) {
            return;
        }

        if (event.key === 'Enter') {
            await handleChatAsync();
        }

    });
      
    document.addEventListener('keyup', (event) => {
        if (!event.repeat) {
            delete keysPressed[event.key];
        }
    });
}

sendChatBtn.addEventListener("click", () => handleChatAsync());
pingBotBtn.addEventListener("click", () => initializeChatBot(PingBot));
frodBotBtn.addEventListener("click", () => initializeChatBot(FrodBot));