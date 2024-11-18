// Adventure stages with unique choices and endings
const storyStages = {
    start: {
        text: "You enter a mystical forest. Do you follow the river or explore the ancient ruins?",
        choices: [
            { text: "Follow the River", nextStage: "riverPath" },
            { text: "Explore the Ruins", nextStage: "ruinsPath" }
        ],
        image: "images/forest.jpg"
    },
    riverPath: {
        text: "You follow the river and encounter a talking frog. Do you help it or ignore it?",
        choices: [
            { text: "Help the Frog", nextStage: "frogHelp" },
            { text: "Ignore the Frog", nextStage: "ignoreFrog" }
        ],
        image: "images/river.jpg"
    },
    ruinsPath: {
        text: "You enter the ruins and find a treasure chest. Open it or leave it?",
        choices: [
            { text: "Open the Chest", nextStage: "openChest" },
            { text: "Leave the Chest", nextStage: "leaveChest" }
        ],
        image: "images/ruins.jpg"
    },
    frogHelp: {
        text: "The frog rewards you with a magic gem. You are safe. The End.",
        choices: [],
        image: "images/gem.jpg"
    },
    ignoreFrog: {
        text: "You ignore the frog and fall into a hidden trap. The End.",
        choices: [],
        image: "images/trap.jpg"
    },
    openChest: {
        text: "The chest is cursed! You are trapped forever. The End.",
        choices: [],
        image: "images/curse.png"
    },
    leaveChest: {
        text: "You wisely leave the chest, but find a magical sword outside. The End.",
        choices: [],
        image: "images/sword.jpg"
    }
};

// Function to initialize the game
function startGame() {
    updateStage("start");
}

// Function to update the current stage of the story
function updateStage(stageKey) {
    const stage = storyStages[stageKey];
    document.getElementById("storyText").textContent = stage.text;
    const storyImage = document.getElementById("storyImage");
    storyImage.src = stage.image;
    storyImage.style.display = "block";

    const choicesSection = document.getElementById("choicesSection");
    choicesSection.innerHTML = ""; // Clear previous choices

    stage.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = () => updateStage(choice.nextStage);
        choicesSection.appendChild(button);
    });
}

// Initialize game on load
window.onload = startGame;
