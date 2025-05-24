# Smile For Me 💝

A heartwarming website created with love to bring smiles and comfort to someone special.

## Features

- 🌟 Daily Love Notes with random sweet messages
- 📸 Memory Timeline with photos and captions
- 😊 Mood Picker with personalized responses
- 🎮 Interactive "Click for a Smile" feature
- 💌 Secret Messages Vault
- 💝 "Press This When You Miss Me" button

## Setup

1. Clone this repository
2. Open `index.html` in your web browser
3. Customize the content in `app.js`:
   - Add your own love notes in the `loveNotes` array
   - Add your memories in the `memoryTimeline` array
   - Add your secret messages in the `secretMessages` object
   - Update the webhook URL in the `handleMissMeButton` function

## Customization

### Adding Love Notes
Edit the `loveNotes` array in `app.js` to add your own sweet messages.

### Adding Memories
Add your memories to the timeline by creating new timeline items in the HTML or dynamically through JavaScript.

### Secret Messages
Add your secret messages by updating the `secretMessages` object in `app.js`. Each message should be associated with a specific date.

### Notification Setup
To enable the "Press This When You Miss Me" feature:
1. Set up a webhook service (e.g., using IFTTT, Zapier, or a custom server)
2. Update the webhook URL in the `handleMissMeButton` function
3. Add a notification sound file named `notification.mp3` to the project directory

## Technologies Used

- HTML5
- CSS3 (with Tailwind CSS)
- JavaScript (Vanilla)
- Web APIs (Local Storage, Fetch API)

## Contributing

Feel free to fork this project and customize it for your own special someone!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Made with ❤️

Created with love to bring smiles and comfort to someone special in your life. 