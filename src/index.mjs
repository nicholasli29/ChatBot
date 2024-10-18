import { HarmBlockThreshold, HarmCategory, GoogleGenerativeAI } from '@google/generative-ai';
import './css/style.css';

const PingBot = {
    chatBoxName: "PingBot",
    prompt: PING_PROMPT,
    initialText: "DOOMED",
    chatId: "pingChat",
    headerId: "pingHeader"
}

const FrodBot = {
    chatBoxName: "FrodBot",
    prompt: FROD_PROMPT,
    initialText: "HAI WA",
    chatId: "frodChat",
    headerId: "frodHeader"
}

const botList = [PingBot, FrodBot];

const keysPressed = {};

const pingBotBtn = document.querySelector('.breadIcon');
const frodBotBtn = document.querySelector('.frogIcon');

let chatIdElement;
let chatBotChats;
let chatBotHeaders;
let chatBotNames;
let initialTexts;
let sendBTNs;

let chatInput;
let chatBox;

let userMessage;
let activeBot;
let initializedEnterKey = false;

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

const startChat = (botClass) => {
    botClass.chat = model.startChat({
        history: [
        {
            role: "user",
            parts: [{ text: botClass.prompt }],
        },
        {
            role: "model",
            parts: [{ text: "Great to meet you. What would you like to know?" }],
        },
        ],
    });
};

const initializeChatBots = () => {
    let chatBot = document.querySelector('.chatBot');
    for (let i = 0; i < botList.length - 1; i++) {
        let clone = chatBot.cloneNode(true);
        document.body.appendChild(clone);
    }

    chatBotChats = document.querySelectorAll('.chatBot');
    chatBotHeaders = document.querySelectorAll('.chatBoxHeader');
    chatBotNames = document.querySelectorAll('.chatBoxName');
    initialTexts = document.querySelectorAll('.initialText');
    sendBTNs = document.querySelectorAll('.sendBTN');
    for (let j = 0; j < botList.length; j++) {
        let bot = botList[j];
        startChat(bot);
        chatBotChats.item(j).classList.add(bot.chatId);
        chatBotHeaders.item(j).classList.add(bot.headerId);
        chatBotNames.item(j).innerHTML = bot.chatBoxName;
        initialTexts.item(j).innerHTML = bot.initialText;
        sendBTNs.item(j).classList.add(bot.headerId);
        sendBTNs.item(j).addEventListener("click", () => handleChatAsync());
    }
};

const switchChatBot = (botClass) => {
    activeBot = botClass;

    chatIdElement = document.querySelector(`.${botClass.chatId}`);
    chatBox = chatIdElement.querySelector('.chatbox');
    chatInput = chatIdElement.querySelector('.chat-input textarea');

    chatBotChats.forEach(function(chatBotChat) {
        chatBotChat.classList.add('hidden');
    });
    chatIdElement.classList.remove('hidden');

    if (!initializedEnterKey) {
        initializedEnterKey = true;
        setEnterChat();
    }
}

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = 
        className === "chat-outgoing" ? `<p>${message}</p>` : `<p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
};

const generateResponseAsync = async (incomingChatLi) => {
    const messageElement = incomingChatLi
    .querySelector("p");

    let response;
    try {
        response = (await activeBot.chat.sendMessage(userMessage)).response.text();
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
    chatBox
    .appendChild(createChatLi(userMessage, "chat-outgoing"));
    chatBox
    .scrollTo(0, chatBox.scrollHeight);

    const incomingChatLi = createChatLi("Thinking...", "chat-incoming");
    setTimeout(() => {
        chatBox.appendChild(incomingChatLi);
        chatBox.scrollTo(0, chatBox.scrollHeight);
    }, 600);

    new Promise(resolve => setTimeout(resolve, 600));
    await generateResponseAsync(incomingChatLi);

    setTimeout(() => {
        chatInput.value = "";
      }, "20");
};

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

pingBotBtn.addEventListener("click", () => switchChatBot(PingBot));
frodBotBtn.addEventListener("click", () => switchChatBot(FrodBot));
initializeChatBots();