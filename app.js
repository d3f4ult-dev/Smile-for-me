// Love notes collection
const loveNotes = [
    "Every time I see you smile, my heart skips a beat.",
    "You make my world brighter just by being in it.",
    "Your laugh is my favorite melody.",
    "In your eyes, I found my home.",
    "You're the reason I believe in love.",
    "Every moment with you is a treasure.",
    "Your kindness makes my heart overflow.",
    "You're my favorite hello and my hardest goodbye.",
    "With you, every day feels like a beautiful adventure.",
    "Your love is the greatest gift I've ever received.",
    "When I'm with you, time stands still.",
    "Your smile is my favorite sight in the world.",
    "You make my heart dance with joy.",
    "Every day with you is a blessing.",
    "Your love makes me a better person.",
    "You're the missing piece to my puzzle.",
    "My heart beats only for you.",
    "You're my favorite person in the whole world.",
    "Your love is my greatest treasure.",
    "With you, I'm home.",
    "You make my life complete.",
    "Your love is my favorite story.",
    "Every moment with you is magical.",
    "You're my dream come true.",
    "Your love is my favorite adventure.",
    "You make my heart sing.",
    "With you, I'm the happiest version of myself.",
    "Your love is my greatest joy.",
    "You're my favorite part of every day.",
    "Your smile brightens my darkest days.",
    "You make my heart skip a beat.",
    "Your love is my favorite feeling.",
    "With you, I'm complete.",
    "You're my favorite person to love.",
    "Your love makes my life beautiful.",
    "You're my favorite hello and my hardest goodbye.",
    "Your love is my greatest blessing.",
    "You make my heart full.",
    "With you, I'm home.",
    "Your love is my favorite journey.",
    "You're my favorite person to wake up to.",
    "Your love makes my life worth living.",
    "You're my favorite part of every day.",
    "Your love is my greatest treasure.",
    "You make my heart happy.",
    "With you, I'm the best version of myself.",
    "Your love is my favorite story.",
    "You're my favorite person to love.",
    "Your love makes my life complete.",
    "You're my favorite part of every moment."
];

// Mood responses
const moodResponses = {
    happy: [
        "Your happiness is contagious! Keep shining!",
        "Your smile lights up my world!",
        "Seeing you happy makes my heart dance!"
    ],
    sad: [
        "I'm here for you, always. Let me give you a virtual hug.",
        "Remember, this too shall pass. I believe in you!",
        "Your strength amazes me. You'll get through this!"
    ],
    stressed: [
        "Take a deep breath. You're doing great!",
        "Let's take a moment to relax together.",
        "Remember to take care of yourself. You're important!"
    ],
    angry: [
        "I understand your frustration. Let's talk about it.",
        "Take your time. I'm here to listen.",
        "Your feelings are valid. Let's work through this together."
    ]
};

// Memory timeline data
const memories = [
    {
        date: "2023-09-29",
        title: "The Day We Met",
        image: "https://instagram.fcai19-8.fna.fbcdn.net/v/t1.15752-9/484586882_1666202600662047_2363148198471331676_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=sVOydfnRtWUQ7kNvwHDRgdI&_nc_oc=Adl8uUhlddKaabvU7zo7_VfzV0ex3cqLX6ZsWUTYciYqjsPUGML-3QBMDxkQSLsYx00&_nc_zt=23&_nc_ht=instagram.fcai19-8.fna&oh=03_Q7cD2QGHmI-EO1pZLhJha8BicLnILTkzoriMCFQikFv_6yvbxg&oe=68587E34",
        caption: "When our Instagram stories matched and our journey began",
        fullNote: "Remember when i posted that one story on my account? That's when I first noticed you. Little did I know that simple moment would lead to something so beautiful. Your profile picture caught my eye, and I couldn't help but smile. That day marked the beginning of our story, and I'm so grateful for every moment since then. 💖"
    },
    {
        date: "2024-01-01",
        title: "New Year's Together",
        image: "https://example.com/newyear.jpg",
        caption: "Starting the year with you was the best decision ever!",
        fullNote: "Remember how we stayed up late watching movies and texting each other? That was a fun night! I'll never forget it."
    },
    {
        date: "2024-02-14",
        title: "Valentine's Day",
        image: "https://example.com/valentine.jpg",
        caption: "Our first Valentine's Day together",
        fullNote: "The way you looked at me when we video call was so cute. I love you so much! 💖"
    }
];

// Secret messages collection
const secretMessages = {
    "2023-09-29": "The day our beautiful journey began. Every moment with you since then has been a blessing. 💝",
    "2024-09-29": "Two year of loving you, and I fall in love with you more each day. You're my everything! 💕",
    "2025-09-29": "Three years of beautiful memories, and I can't wait for many more years of loving you. Forever yours! 💖",

};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initializeHearts();
    initializeDailyNote();
    initializeMoodPicker();
    initializeMemoryTimeline();
    initializeSecretVault();
    initializeSmileButton();
    handleMissMeButton();
});

// Create floating hearts animation
function initializeHearts() {
    const container = document.querySelector('body');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }, 1000);
}

// Initialize daily love note
function initializeDailyNote() {
    const noteContainer = document.getElementById('daily-note-text');
    const saveButton = document.getElementById('save-note');
    const newNoteButton = document.getElementById('new-note');
    
    if (!noteContainer || !saveButton || !newNoteButton) return;

    function displayNewNote() {
        // Clear previous content and animations
        noteContainer.textContent = '';
        noteContainer.classList.remove('typing-effect');
        
        // Add sparkle effect
        for (let i = 0; i < 5; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.innerHTML = '✨';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            noteContainer.parentElement.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 1500);
        }
        
        // Display new note with typing effect
        setTimeout(() => {
            const randomNote = loveNotes[Math.floor(Math.random() * loveNotes.length)];
            noteContainer.textContent = randomNote;
            noteContainer.classList.add('typing-effect');
        }, 500);
    }

    // Display initial note
    displayNewNote();

    // Add click handler to the save button
    saveButton.addEventListener('click', () => {
        // Save to local storage
        const savedNotes = JSON.parse(localStorage.getItem('savedNotes') || '[]');
        savedNotes.push({
            note: noteContainer.textContent,
            date: new Date().toISOString()
        });
        localStorage.setItem('savedNotes', JSON.stringify(savedNotes));

        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg';
        successMessage.textContent = 'Note saved! 💝';
        document.body.appendChild(successMessage);
        setTimeout(() => successMessage.remove(), 3000);
    });

    // Add click handler to the new note button
    newNoteButton.addEventListener('click', displayNewNote);
}

// Initialize mood picker
function initializeMoodPicker() {
    const moodButtons = document.querySelectorAll('.mood-button');
    moodButtons.forEach(button => {
        button.addEventListener('click', () => {
            const mood = button.dataset.mood;
            const responses = moodResponses[mood];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            
            const responseContainer = document.getElementById('mood-response');
            if (responseContainer) {
                responseContainer.textContent = randomResponse;
                responseContainer.classList.add('typing-effect');
            }
        });
    });
}

// Initialize memory timeline
function initializeMemoryTimeline() {
    const timeline = document.getElementById('memory-timeline');
    if (!timeline) return;

    memories.forEach(memory => {
        const memoryItem = document.createElement('div');
        memoryItem.className = 'timeline-item bg-white p-4 rounded-lg shadow-md mb-6';
        memoryItem.innerHTML = `
            <div class="flex items-start gap-4">
                <div class="flex-1">
                    <h3 class="text-xl font-bold text-pink-600 mb-2">${memory.title}</h3>
                    <p class="text-gray-600 mb-2">${memory.date}</p>
                    <p class="text-gray-700 mb-4">${memory.caption}</p>
                    <div class="full-note hidden text-gray-600 italic"></div>
                </div>
                <div class="w-32 h-32 flex-shrink-0">
                    <img src="${memory.image}" alt="${memory.title}" class="w-full h-full object-cover rounded-lg">
                </div>
            </div>
        `;
        memoryItem.dataset.fullNote = memory.fullNote;
        timeline.appendChild(memoryItem);
    });

    // Add click handlers for memory items
    const memoryItems = document.querySelectorAll('.timeline-item');
    memoryItems.forEach(item => {
        item.addEventListener('click', () => {
            const fullNote = item.dataset.fullNote;
            if (fullNote) {
                const noteContainer = item.querySelector('.full-note');
                if (noteContainer) {
                    noteContainer.textContent = fullNote;
                    noteContainer.classList.remove('hidden');
                    noteContainer.classList.add('typing-effect');
                }
            }
        });
    });
}

// Initialize secret vault
function initializeSecretVault() {
    const calendar = document.querySelector('.vault-calendar input[type="date"]');
    const messageContainer = document.getElementById('secret-message');
    
    if (!calendar || !messageContainer) return;

    // Set min and max dates to include 2023-2025
    calendar.min = "2023-09-29";
    calendar.max = "2025-12-31";

    calendar.addEventListener('change', () => {
        const selectedDate = calendar.value;
        const message = secretMessages[selectedDate];
        
        if (message) {
            // Clear previous message
            messageContainer.textContent = '';
            messageContainer.classList.remove('typing-effect');
            
            // Add sparkle effect
            for (let i = 0; i < 3; i++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.innerHTML = '✨';
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                messageContainer.parentElement.appendChild(sparkle);
                
                setTimeout(() => sparkle.remove(), 1500);
            }
            
            // Display new message with typing effect
            setTimeout(() => {
                messageContainer.textContent = message;
                messageContainer.classList.add('typing-effect');
                messageContainer.classList.add('romantic-text');
            }, 500);
        } else {
            messageContainer.textContent = "No secret message for this date... yet! 💝";
            messageContainer.classList.remove('typing-effect');
            messageContainer.classList.remove('romantic-text');
        }
    });
}

// "Press This When You Miss Me" functionality
function handleMissMeButton() {
    const button = document.getElementById('miss-me-button');
    if (!button) return;

    button.addEventListener('click', () => {
        // Add animation
        button.classList.add('animate-pulse');
        
        // Play sound
        const audio = new Audio('notification.mp3');
        audio.play().catch(() => {
            console.log('Audio playback prevented');
        });

        // Open Instagram profile in a new tab
        window.open('https://instagram.com/iblameravix', '_blank');

        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg';
        successMessage.textContent = 'Opening Instagram... 💝';
        document.body.appendChild(successMessage);
        setTimeout(() => successMessage.remove(), 3000);

        // Remove animation after 1 second
        setTimeout(() => {
            button.classList.remove('animate-pulse');
        }, 1000);
    });
}

// Initialize "Click for a Smile" feature
function initializeSmileButton() {
    const button = document.getElementById('smile-button');
    if (!button) return;

    const smileOptions = [
        {
            type: 'gif',
            content: 'https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif'
        },
        {
            type: 'joke',
            content: 'Why do programmers prefer dark mode? Because light attracts bugs!'
        },
        {
            type: 'animation',
            content: 'flower'
        },
        {
            type: 'game',
            content: 'heart-clicker'
        }
    ];

    button.addEventListener('click', () => {
        const randomOption = smileOptions[Math.floor(Math.random() * smileOptions.length)];
        const container = document.getElementById('smile-content');
        
        if (container) {
            container.innerHTML = '';
            
            switch (randomOption.type) {
                case 'gif':
                    const img = document.createElement('img');
                    img.src = randomOption.content;
                    img.className = 'w-full h-auto rounded-lg';
                    container.appendChild(img);
                    break;
                    
                case 'joke':
                    const joke = document.createElement('p');
                    joke.textContent = randomOption.content;
                    joke.className = 'text-lg font-medium text-center';
                    container.appendChild(joke);
                    break;
                    
                case 'animation':
                    createFlowerAnimation(container);
                    break;
                    
                case 'game':
                    createHeartClickerGame(container);
                    break;
            }
        }
    });
}

// Create flower animation
function createFlowerAnimation(container) {
    const flower = document.createElement('div');
    flower.className = 'flower-animation';
    flower.innerHTML = '🌸';
    flower.style.fontSize = '50px';
    container.appendChild(flower);
    
    // Add floating animation
    flower.style.animation = 'float 3s ease-in-out infinite';
}

// Create heart clicker game
function createHeartClickerGame(container) {
    let score = 0;
    const scoreDisplay = document.createElement('div');
    scoreDisplay.textContent = `Score: ${score}`;
    scoreDisplay.className = 'text-xl font-bold mb-4';
    container.appendChild(scoreDisplay);
    
    const gameArea = document.createElement('div');
    gameArea.className = 'relative h-64 w-full border-2 border-pink-300 rounded-lg';
    container.appendChild(gameArea);
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'absolute cursor-pointer';
        heart.style.left = Math.random() * 80 + 10 + '%';
        heart.style.top = Math.random() * 80 + 10 + '%';
        heart.style.fontSize = '30px';
        
        heart.addEventListener('click', () => {
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
            heart.remove();
        });
        
        gameArea.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
    
    setInterval(createHeart, 1000);
} 