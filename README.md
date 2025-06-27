# 🎮 The Simon Game

A classic memory game built with HTML, CSS, and JavaScript! Test your memory skills by following the sequence of colors and sounds.

## 🎯 About

Simon is a memory game where players must repeat a sequence of colors in the correct order. The sequence gets longer with each level, making it increasingly challenging. This digital version recreates the classic electronic game with colorful buttons, sound effects and smooth animations.

## ✨ Features

- **Progressive Difficulty**: Each level adds one more step to the sequence
- **Audio Feedback**: Unique sounds for each color button
- **Visual Animations**: Smooth button press effects and game over animations
- **Responsive Design**: Clean, retro-styled interface
- **Keyboard Controls**: Press any key to start the game
- **Game Over Detection**: Immediate feedback when you make a mistake

## 🎨 Game Preview

The game features four colorful buttons:
- 🔴 **Red** - Top right
- 🟢 **Green** - Top left  
- 🟡 **Yellow** - Bottom left
- 🔵 **Blue** - Bottom right

## 🚀 How to Play

1. **Start**: Press any key to begin
2. **Watch**: Pay attention to the sequence of colors that light up
3. **Repeat**: Click the buttons in the same order
4. **Progress**: Successfully complete the sequence to advance to the next level
5. **Challenge**: Each level adds one more color to remember!

## 🛠️ Technologies Used

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white): Structure and layout
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white): Styling, animations, and responsive design
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black): Game logic and interactivity
- ![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white): DOM manipulation and event handling
- ![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat&logo=google-fonts&logoColor=white): Retro "Press Start 2P" font for authentic gaming feel
  
## 📁 File Structure

```
simon-game/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and animations
├── game.js            # JavaScript game logic
└── sounds/            # Audio files directory
    ├── blue.mp3       # Blue button sound
    ├── green.mp3      # Green button sound
    ├── red.mp3        # Red button sound
    ├── yellow.mp3     # Yellow button sound
    └── wrong.mp3      # Game over sound
```

## 🎵 Audio Files Required

Make sure to include these audio files in a `sounds/` directory:
- `blue.mp3`
- `green.mp3` 
- `red.mp3`
- `yellow.mp3`
- `wrong.mp3`

## 🏃‍♂️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/simon-game.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd simon-game
   ```

3. **Add audio files**
   - Create a `sounds/` folder
   - Add the required MP3 files

4. **Open in browser**
   - Simply open `index.html` in your web browser or use a local server for best performance

## 🎯 Game Logic

The game implements several key functions:

- **`nextSequence()`** - Generates the next color in the sequence
- **`checkAnswer()`** - Validates user input against the pattern
- **`playSound()`** - Handles audio feedback
- **`animatePress()`** - Creates visual button press effects
- **`startOver()`** - Resets the game state

## 🎨 Styling Features

- **Retro Gaming Font**: Authentic arcade feel
- **Color-coded Buttons**: Distinct colors for easy identification
- **Smooth Animations**: Fade effects and pressed button states
- **Game Over Effect**: Red overlay when player makes a mistake
- **Responsive Layout**: Works on different screen sizes

## 🔧 Customization

You can easily customize:
- **Colors**: Modify button colors in `styles.css`
- **Sounds**: Replace audio files with your own
- **Timing**: Adjust animation and sequence timing in `game.js`
- **Difficulty**: Change the sequence generation logic

## 🎮 Controls

- **Any Key**: Start the game / Restart after game over
- **Mouse Click**: Select colored buttons during gameplay

## 🏆 Challenge Yourself

- How many levels can you complete?
- Can you beat your high score?
- Try playing with friends and see who lasts the longest!

## 📱 Browser Compatibility

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅

## 🤝 Contributing

Feel free to fork this project and submit pull requests for:
- Bug fixes
- New features
- Performance improvements
- Better styling
## 🎉 Have Fun!

Enjoy testing your memory skills with this classic game! Share your high scores and challenge your friends.

---

*Built with ❤️ and lots of colorful buttons!*
