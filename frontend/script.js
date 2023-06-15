import chatbot from './assets/chatbot.png';
import user from './assets/user.png';

//to target html elements manually using the query selector
const  form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');

let loadInterval;

//typing functionality
function typeText(element, text) {
  let index = 0;

  let interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 15)
} 

//implementing the response loading functionality
function loader(element) {
  element.textContent = "";

  loadInterval = setInterval(() => { 
    element.textContent += ".";
  
    if (element.textContent === "....") {
      element.textContent = "";
    }
  }, 250)
}

//generating a unique ID for every single message (in order to map over them and render the AI response letter by letter)
function generateUniqueId() {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
}


//creating the chat stripe and it's functionality
function chatStripe(isAi, value, uniqueId) {
  return ( 
    `
      <div class="wrapper ${isAi && 'ai'}">
        <div class="chat">
          <div class="profile">
            <img
              src="${isAi ? chatbot : user}"
              alt="${isAi ? 'chatbot' : 'user'}"
            />
          </div>
          <div class="message" id=${uniqueId}>${value}</div>
        </div>
      </div>
    `
  )
} 


//submit event
const handleSubmit = async (e) => {
  e.preventDefault(); //prevents the normal browser behavior of refreshing a page after making a submission.

  const data = new FormData(form);

  //user's chatstripe
  chatContainer.innerHTML += chatStripe(false, data.get('prompt'));
  form.reset();

  //chatbot's chatstripe
  const uniqueId = generateUniqueId();
  chatContainer.innerHTML += chatStripe(true, " ", uniqueId);
  
  chatContainer.scrollTop = chatContainer.scrollHeight; //adds the scroll functionality to the ai content.

  const messageDiv = document.getElementById(uniqueId);

  loader(messageDiv);

  //to get api response
  const response = await fetch('https://5000-raim-devtasks-ous4rqluvau.ws-eu99.gitpod.io/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prompt: data.get('prompt')
    })
  })

  clearInterval(loadInterval);
  messageDiv.innerHTML = " ";

  if(response.ok) {
    const data = await response.json();
    const parseData = data.bot.trim();

    console.log({parseData});
    typeText(messageDiv, parseData);
  } else {
    const err = await response.text();
    messageDiv.innerHTML = "oops, an error occured while generating response...";
    alert(err);
  }
}

form.addEventListener('submit', handleSubmit);
//to submit by pressing the 'enter' key
form.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    handleSubmit(e);
  }
})
