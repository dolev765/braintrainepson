# Adaptive Posner Task

A web-based cognitive training application for semantic long-term memory retrieval.

## Overview

The Adaptive Posner Task is designed to train semantic long-term memory retrieval through a series of trials involving number pairs in various formats and semantic relationships. The task adapts its difficulty based on user performance, providing progressive training.

## Features

- **Multiple Training Modes**:
  - Classic Mode: Numbers only with Physical Property vs Meaning rules
  - Multi Mode: Includes both numbers and semantic relationships
  - Manual Mode: Fixed difficulty level practice

- **Adaptive Difficulty**: Automatically adjusts based on performance
- **Progress Tracking**: Visual progress charts and session history
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Accessibility**: Keyboard navigation and screen reader support

## File Structure

```
├── index.html              # Main HTML file
├── css/                    # Stylesheets
│   ├── main.css           # Base styles and layout
│   ├── components.css     # Button and component styles
│   └── responsive.css     # Mobile and responsive styles
├── js/                     # JavaScript modules
│   ├── config.js          # Game configuration and constants
│   ├── game-state.js      # Game state management
│   ├── stimulus-generator.js # Stimulus generation logic
│   ├── game-logic.js      # Core game mechanics
│   ├── progress-tracker.js # Progress tracking and visualization
│   ├── ui-controller.js   # UI updates and interactions
│   └── main.js           # Main application initialization
├── assets/                 # Static assets
├── images/                 # Image files
└── docs/                   # Documentation
```

## Getting Started

1. Open `index.html` in a web browser
2. Select your preferred training mode
3. Configure settings (number range, error display)
4. Click "Start Training" to begin

## Training Rules

### Physical Property Rule
Judge whether items share the same physical format:
- Press "J" if both items have the same format (e.g., 7-9 are both Arabic numerals)
- Press "F" if items have different formats (e.g., 7-"seven" are different formats)

### Meaning Rule
Judge whether items share the same meaning:
- Press "J" if both items represent the same number (e.g., 4-IV both mean four)
- Press "F" if items represent different numbers (e.g., 4-V mean four and five)

### Semantic Categories (Multi Mode)
- **Categorical**: Judge specific-category relationships
- **Part-Whole**: Judge part-whole relationships
- **Functional**: Judge functional pairings
- **Color Property**: Judge shared color properties
- **Antonyms**: Judge opposite relationships
- **Action-Object**: Judge action-object fit

## Technical Details

- **Framework**: Vanilla JavaScript with ES6 modules
- **Styling**: CSS3 with Flexbox and Grid
- **Storage**: LocalStorage for progress persistence
- **Browser Support**: Modern browsers with ES6 module support

## Browser Requirements

- Chrome 61+
- Firefox 60+
- Safari 10.1+
- Edge 16+

## License

This project is open source and available under the MIT License.

