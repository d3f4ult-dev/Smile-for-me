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
    "You're my favorite part of every moment.",

    // Additional notes (generating 9,950 more unique notes)
    ...Array.from({ length: 9950 }, (_, i) => {
        const templates = [
            "Your love makes my heart {verb} with {emotion}.",
            "Every {time} with you is filled with {feeling}.",
            "You're the {adjective} person I've ever known.",
            "My love for you grows {adverb} every day.",
            "You make my world {adjective} in ways I never imagined.",
            "Your {feature} is the most beautiful thing I've ever seen.",
            "I fall in love with you {adverb} more each day.",
            "Your love is my favorite {noun}.",
            "With you, I feel {adjective} and {adjective}.",
            "You're my {adjective} {noun} in this world.",
            "Your love {verb} my heart in ways I can't explain.",
            "Every moment with you is {adjective} and {adjective}.",
            "You make my life {adjective} just by being you.",
            "Your {feature} {verb} my heart every time.",
            "I love how you {verb} my world.",
            "Your love is the {adjective} gift I've ever received.",
            "With you, I feel {adjective} and {adjective}.",
            "You're my {adjective} {noun} in life.",
            "Your love makes me feel {adjective}.",
            "Every day with you is {adjective} and {adjective}."
        ];

        const words = {
            verb: ['dance', 'sing', 'soar', 'flutter', 'glow', 'shine', 'sparkle', 'twinkle', 'dance', 'float', 'rise', 'bloom', 'grow', 'thrive', 'flourish', 'radiate', 'beam', 'spark', 'ignite', 'blossom'],
            emotion: ['joy', 'happiness', 'love', 'delight', 'ecstasy', 'bliss', 'wonder', 'amazement', 'awe', 'passion', 'tenderness', 'affection', 'adoration', 'devotion', 'fondness', 'warmth', 'excitement', 'elation', 'euphoria', 'rapture'],
            time: ['morning', 'afternoon', 'evening', 'night', 'day', 'moment', 'second', 'minute', 'hour', 'dawn', 'dusk', 'sunrise', 'sunset', 'twilight', 'midnight', 'noon', 'daybreak', 'nightfall', 'lifetime', 'forever'],
            feeling: ['love', 'joy', 'happiness', 'peace', 'contentment', 'bliss', 'warmth', 'tenderness', 'affection', 'passion', 'devotion', 'adoration', 'fondness', 'delight', 'ecstasy', 'rapture', 'euphoria', 'elation', 'wonder', 'amazement'],
            adjective: ['beautiful', 'amazing', 'wonderful', 'incredible', 'magical', 'perfect', 'precious', 'special', 'unique', 'extraordinary', 'remarkable', 'magnificent', 'gorgeous', 'stunning', 'breathtaking', 'mesmerizing', 'enchanting', 'captivating', 'alluring', 'irresistible'],
            adverb: ['deeper', 'stronger', 'more', 'endlessly', 'infinitely', 'eternally', 'forever', 'constantly', 'continuously', 'perpetually', 'always', 'never-endingly', 'boundlessly', 'limitlessly', 'immeasurably', 'incomparably', 'uniquely', 'specially', 'particularly', 'especially'],
            feature: ['smile', 'eyes', 'laugh', 'voice', 'touch', 'presence', 'spirit', 'soul', 'heart', 'mind', 'personality', 'character', 'essence', 'being', 'existence', 'nature', 'essence', 'core', 'spirit', 'soul'],
            noun: ['treasure', 'gift', 'blessing', 'joy', 'happiness', 'love', 'dream', 'wish', 'hope', 'desire', 'passion', 'devotion', 'adoration', 'affection', 'fondness', 'tenderness', 'warmth', 'delight', 'pleasure', 'ecstasy']
        };

        const template = templates[i % templates.length];
        return template.replace(/\{(\w+)\}/g, (_, key) => {
            const options = words[key];
            return options[Math.floor(Math.random() * options.length)];
        });
    })
];

// Mood responses
const moodResponses = {
    happy: [
        "Your happiness is contagious! Keep shining!",
        "Your smile lights up my world!",
        "Seeing you happy makes my heart dance!",
        "Your joy is the most beautiful thing to witness!",
        "Your positive energy is absolutely radiant!",
        "Your happiness makes my day complete!",
        "Your cheerful spirit is so inspiring!",
        "Your joy is like sunshine on a cloudy day!",
        "Your happiness is the melody of my heart!",
        "Your smile is the highlight of my day!"
    ],
    sad: [
        "I'm here for you, always. Let me give you a virtual hug.",
        "Remember, this too shall pass. I believe in you!",
        "Your strength amazes me. You'll get through this!",
        "I'm wrapping you in love and positive thoughts.",
        "Your feelings matter, and I'm here to listen.",
        "Take all the time you need, I'm not going anywhere.",
        "You're stronger than you know, and I believe in you.",
        "Let's talk about what's on your mind, I'm here.",
        "Your sadness won't last forever, brighter days are coming.",
        "I'm sending you all my love and support."
    ],
    stressed: [
        "Take a deep breath. You're doing great!",
        "Let's take a moment to relax together.",
        "Remember to take care of yourself. You're important!",
        "You're handling this better than you think.",
        "Let's break this down into smaller steps.",
        "Your well-being comes first, always.",
        "Take a moment to breathe and recenter yourself.",
        "You've overcome challenges before, you'll overcome this too.",
        "Let's find a way to make this easier for you.",
        "Remember to take breaks and be kind to yourself."
    ],
    angry: [
        "I understand your frustration. Let's talk about it.",
        "Take your time. I'm here to listen.",
        "Your feelings are valid. Let's work through this together.",
        "It's okay to feel angry, let's channel it positively.",
        "I'm here to support you through this.",
        "Let's find a way to address what's bothering you.",
        "Your emotions matter, and I'm here to help.",
        "Take a moment to breathe, then we can talk.",
        "I'm on your side, let's figure this out together.",
        "Your feelings are important, and I'm here to listen."
    ],
    excited: [
        "Your excitement is so contagious!",
        "I love seeing you this happy and excited!",
        "Your enthusiasm brightens up everything!",
        "Your excitement makes my heart skip a beat!",
        "I'm so happy to see you this excited!",
        "Your energy is absolutely amazing!",
        "Your excitement is the best thing ever!",
        "I love how your eyes light up with excitement!",
        "Your enthusiasm is so inspiring!",
        "Your excitement makes everything better!"
    ],
    tired: [
        "Take a rest, you deserve it.",
        "Remember to take care of yourself.",
        "Your well-being is important, get some rest.",
        "Take a break and recharge your energy.",
        "You've been working hard, take a moment to rest.",
        "Listen to your body, it's okay to rest.",
        "Take a nap, I'll be here when you wake up.",
        "Your health comes first, get some rest.",
        "Take it easy, you've earned it.",
        "Rest well, I'm thinking of you."
    ],
    anxious: [
        "Take deep breaths, I'm here with you.",
        "You're safe, and I'm here to support you.",
        "Let's take this one step at a time.",
        "Your feelings are valid, and I'm here to help.",
        "You're stronger than your anxiety.",
        "Let's find a way to calm your mind together.",
        "I'm here to help you through this.",
        "Take your time, there's no rush.",
        "You're not alone in this, I'm here.",
        "Let's work through this together, one breath at a time."
    ],
    proud: [
        "You should be proud of yourself!",
        "Your achievements are amazing!",
        "You've worked so hard for this!",
        "Your success is well-deserved!",
        "I'm so proud of everything you've accomplished!",
        "You've come so far, and I'm so proud!",
        "Your hard work is paying off!",
        "You're absolutely incredible!",
        "Your achievements inspire me!",
        "You're making amazing progress!"
    ],
    nostalgic: [
        "Those memories are precious treasures.",
        "Our journey together has been beautiful.",
        "Every moment with you is a gift.",
        "Our memories make my heart full.",
        "Looking back at our journey fills me with joy.",
        "Our shared memories are my favorite stories.",
        "Every memory with you is special.",
        "Our past moments are golden treasures.",
        "Our history together is beautiful.",
        "Our memories are the best part of my life."
    ],
    hopeful: [
        "Your hope inspires me!",
        "Brighter days are coming!",
        "Your optimism is beautiful!",
        "Your hope lights up the future!",
        "Your positive outlook is amazing!",
        "Your hope makes everything possible!",
        "Your optimism is contagious!",
        "Your hope brightens my day!",
        "Your positive energy is inspiring!",
        "Your hope makes the future brighter!"
    ]
};

// Memory timeline data
const memories = [
    {
        date: "2023-09-29",
        title: "The Day We Met",
        caption: "When our Instagram stories matched and our journey began",
        fullNote: "Remember when i posted that one story on my account? That's when I first noticed you. Little did I know that simple moment would lead to something so beautiful. Your profile picture caught my eye, and I couldn't help but smile. That day marked the beginning of our story, and I'm so grateful for every moment since then. 💖"
    },
    {
        date: "2024-01-01",
        title: "New Year's Together",
        caption: "Starting the year with you was the best decision ever!",
        fullNote: "Remember how we stayed up late watching movies and texting each other? That was a fun night! I'll never forget it."
    },
    {
        date: "2024-02-14",
        title: "Valentine's Day",
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
    try {
        initializeNameInput();
        initializeHearts();
        initializeDailyNote();
        initializeMoodPicker();
        initializeMemoryTimeline();
        initializeSecretVault();
        initializeSmileButton();
        handleMissMeButton();
        initializeDarkMode();
        initializeBackToTop();
        initializeLoadingStates();
        initializeCountdown();
        initializeNoteExport();
    } catch (error) {
        console.error('Error initializing app:', error);
        showError('Something went wrong. Please refresh the page.');
    }
});

// Error handling utility
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
    setTimeout(() => errorDiv.remove(), 5000);
}

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
        try {
            const memoryItem = document.createElement('div');
            memoryItem.className = 'timeline-item bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6 transform transition-all duration-300 hover:scale-105';
            memoryItem.innerHTML = `
                <div class="flex-1">
                    <h3 class="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">${memory.title}</h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-2">${memory.date}</p>
                    <p class="text-gray-700 dark:text-gray-200 mb-4">${memory.caption}</p>
                    <div class="full-note hidden text-gray-600 dark:text-gray-300 italic"></div>
                </div>
            `;
            memoryItem.dataset.fullNote = memory.fullNote;
            timeline.appendChild(memoryItem);
        } catch (error) {
            console.error('Error creating memory item:', error);
            showError('Error displaying memory');
        }
    });

    // Add click handlers for memory items
    const memoryItems = document.querySelectorAll('.timeline-item');
    memoryItems.forEach(item => {
        item.addEventListener('click', () => {
            try {
                const fullNote = item.dataset.fullNote;
                if (fullNote) {
                    const noteContainer = item.querySelector('.full-note');
                    if (noteContainer) {
                        if (noteContainer.classList.contains('hidden')) {
                            noteContainer.textContent = fullNote;
                            noteContainer.classList.remove('hidden');
                            noteContainer.classList.add('typing-effect');
                        } else {
                            noteContainer.classList.add('hidden');
                            noteContainer.classList.remove('typing-effect');
                        }
                    }
                }
            } catch (error) {
                console.error('Error showing full note:', error);
                showError('Error displaying note');
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

// Dark mode functionality
function initializeDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (!darkModeToggle) return;
    
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.documentElement.classList.add('dark');
    }
    
    darkModeToggle.addEventListener('click', () => {
        try {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        } catch (error) {
            console.error('Error toggling dark mode:', error);
            showError('Error changing theme');
        }
    });
}

// Back to top button functionality
function initializeBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Loading states functionality
function initializeLoadingStates() {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (!loadingOverlay) return;
    
    // Hide loading overlay when page is fully loaded
    window.addEventListener('load', () => {
        loadingOverlay.classList.add('hidden');
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 300);
    });
    
    // Add loading state to interactive elements
    document.querySelectorAll('button, a').forEach(element => {
        if (element.id === 'dark-mode-toggle') return; // Skip dark mode toggle
        
        element.addEventListener('click', (e) => {
            if (!element.classList.contains('no-loading')) {
                element.classList.add('loading');
                setTimeout(() => {
                    element.classList.remove('loading');
                }, 1000);
            }
        });
    });
}

// Name input functionality
function initializeNameInput() {
    const nameModal = document.getElementById('name-modal');
    const nameInput = document.getElementById('name-input');
    const saveNameButton = document.getElementById('save-name');
    const greetingElement = document.getElementById('personalized-greeting');
    
    // Check if name is already stored
    const storedName = localStorage.getItem('userName');
    if (storedName) {
        nameModal.style.display = 'none';
        updateGreeting(storedName);
    }
    
    saveNameButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name) {
            localStorage.setItem('userName', name);
            nameModal.style.display = 'none';
            updateGreeting(name);
        }
    });
    
    function updateGreeting(name) {
        const greetings = [
            `Welcome back, ${name}! 💝`,
            `Hello beautiful ${name}! 💖`,
            `Hey ${name}, you're looking lovely today! 💕`,
            `Good to see you again, ${name}! 💗`
        ];
        greetingElement.textContent = greetings[Math.floor(Math.random() * greetings.length)];
    }
}

// Countdown timer functionality
function initializeCountdown() {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    // Set the date to 10 years from now
    const now = new Date();
    const specialDate = new Date(now.getFullYear() + 10, now.getMonth(), now.getDate(), 0, 0);
    
    function updateCountdown() {
        const now = new Date();
        const difference = specialDate - now;
        
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            daysElement.textContent = String(days).padStart(2, '0');
            hoursElement.textContent = String(hours).padStart(2, '0');
            minutesElement.textContent = String(minutes).padStart(2, '0');
            secondsElement.textContent = String(seconds).padStart(2, '0');
        } else {
            daysElement.textContent = '00';
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Note export functionality
function initializeNoteExport() {
    const exportButton = document.getElementById('export-notes');
    
    exportButton.addEventListener('click', () => {
        try {
            const savedNotes = JSON.parse(localStorage.getItem('savedNotes') || '[]');
            if (savedNotes.length === 0) {
                showError('No notes to export!');
                return;
            }
            
            // Create a formatted text content
            let content = 'Our Love Notes Collection\n\n';
            savedNotes.forEach(note => {
                const date = new Date(note.date).toLocaleDateString();
                content += `Date: ${date}\n`;
                content += `Note: ${note.note}\n\n`;
            });
            
            // Create and download the file
            const blob = new Blob([content], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'our-love-notes.txt';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
            
            showSuccess('Notes exported successfully! 💝');
        } catch (error) {
            console.error('Error exporting notes:', error);
            showError('Failed to export notes. Please try again.');
        }
    });
}

// Success message utility
function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
    successDiv.textContent = message;
    document.body.appendChild(successDiv);
    setTimeout(() => successDiv.remove(), 3000);
} 