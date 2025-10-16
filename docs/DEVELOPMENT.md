# Development Guide

## Local Development Setup

### Option 1: Python HTTP Server
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### Option 2: Node.js Live Server
```bash
# Install live-server globally
npm install -g live-server

# Start development server
live-server --port=8000 --open=/index.html
```

### Option 3: VS Code Live Server Extension
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Project Structure

### CSS Architecture
- `main.css`: Base styles, layout, typography
- `components.css`: Reusable components (buttons, forms)
- `responsive.css`: Mobile-first responsive design

### JavaScript Architecture
- **Modular Design**: Each file has a specific responsibility
- **ES6 Modules**: Uses import/export for clean dependencies
- **State Management**: Centralized game state in `game-state.js`
- **Separation of Concerns**: UI, logic, and data are separated

### Key Classes
- `GameState`: Manages all game state and persistence
- `GameLogic`: Handles core game mechanics
- `UIController`: Manages all UI updates
- `StimulusGenerator`: Creates number and semantic stimuli
- `ProgressTracker`: Handles progress visualization

## Adding New Features

### Adding a New Semantic Category
1. Add data to `semanticData` in `config.js`
2. Add rule configuration to `SEMANTIC_RULES` in `config.js`
3. Update `getRuleDisplay()` in `stimulus-generator.js`

### Adding a New Game Mode
1. Add mode configuration to `config.js`
2. Update mode selection logic in `main.js`
3. Add UI elements in `index.html`
4. Update `selectMode()` method in `main.js`

### Customizing Styling
- Use CSS custom properties for consistent theming
- Follow mobile-first responsive design principles
- Maintain accessibility standards (WCAG 2.1)

## Testing

### Manual Testing Checklist
- [ ] All game modes work correctly
- [ ] Progress tracking functions properly
- [ ] Responsive design works on mobile/tablet
- [ ] Keyboard navigation works
- [ ] LocalStorage persistence works
- [ ] Error handling works gracefully

### Browser Testing
Test in multiple browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Considerations

- **Lazy Loading**: Consider lazy loading for large datasets
- **Memory Management**: Clear timers and event listeners
- **Storage Limits**: Monitor localStorage usage
- **Rendering**: Use CSS transforms for animations

## Accessibility

- **Keyboard Navigation**: All functions accessible via keyboard
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Color Contrast**: Meets WCAG 2.1 AA standards
- **Focus Management**: Clear focus indicators

## Deployment

### Static Hosting
The application is a static web app and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any static hosting service

### Build Process
No build process required - just upload all files to your hosting service.

## Troubleshooting

### Common Issues
1. **ES6 Modules**: Ensure serving over HTTP/HTTPS, not file://
2. **LocalStorage**: Check browser privacy settings
3. **Fonts**: Ensure Google Fonts are accessible
4. **Canvas**: Check browser support for HTML5 Canvas

### Debug Mode
Add `?debug=true` to URL for additional console logging (if implemented).

