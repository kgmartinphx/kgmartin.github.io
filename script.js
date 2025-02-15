const popup = document.getElementById("popup");
const finalMessage = document.getElementById("finalMessage");
const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");

const messages = [
    "Are you sure?",
    "Really? Think again!",
    "Come on, give me a chance!",
    "You're breaking my heart!",
    "Please? Pretty please?",
    "I'll keep asking forever!",
    "Just click yes already!",
    "You're too cute to say no",
    "I made this popup just for you",
    "I won't stop until you say yes",
	"Ima just make this loop forever until you say yes"
];

let messageIndex = 0;

noButton.addEventListener("click", () => {
    noButton.textContent = messages[messageIndex % messages.length];
    messageIndex++;
});

yesButton.addEventListener("click", () => {
    popup.style.display = "none";
    finalMessage.style.display = "block";
});
