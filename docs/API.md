# API Documentation

## Game State API

### GameState Class

The main state management class that handles all game variables and persistence.

#### Methods

##### `reset()`
Resets all game state to initial values.

##### `loadFromStorage()`
Loads saved data from localStorage.

##### `saveToStorage()`
Saves current state to localStorage.

##### `advanceLevel()`
Advances to the next difficulty level. Returns `true` if successful.

##### `decreaseLevel()`
Decreases to the previous difficulty level. Returns `true` if successful.

##### `generateTrialTypes()`
Generates a shuffled array of trial types (same/different).

##### `nextTrial()`
Increments trial count and resets waiting flag.

##### `recordCorrectResponse()`
Records a correct response and resets consecutive failures.

##### `recordIncorrectResponse()`
Records an incorrect response and increments error counts.

##### `recordTimeout()`
Records a timeout response.

##### `shouldDecreaseLevel()`
Returns `true` if level should decrease due to consecutive failures.

##### `shouldAdvanceLevel()`
Returns `true` if level should advance due to good performance.

##### `setMode(modeType)`
Sets the game mode ('classic', 'multi', 'manual').

##### `setProgressiveMode(isProgressive)`
Sets whether to use progressive difficulty.

##### `setManualLevel(level)`
Sets the manual difficulty level.

##### `startNewSession()`
Initializes a new training session.

##### `completeSession()`
Handles session completion and level progression.

##### `getAccuracy()`
Returns accuracy percentage.

##### `getProgressPercentage()`
Returns progress percentage through current session.

## Stimulus Generator API

### StimulusGenerator Class

Handles generation of number and semantic stimuli.

#### Methods

##### `resetFormatUsage()`
Resets format usage tracking for balanced distribution.

##### `generateSemanticStimulus()`
Generates a semantic stimulus pair.

##### `generateNumberStimulus()`
Generates a number stimulus pair.

##### `selectRandomRule()`
Selects a random rule for the next trial.

##### `generateStimulus()`
Generates the next stimulus based on current settings.

##### `getRuleDisplay()`
Returns rule display information (title and description).

## Game Logic API

### GameLogic Class

Core game mechanics and flow control.

#### Methods

##### `setUIController(uiController)`
Sets the UI controller reference.

##### `startNewTest()`
Starts a new test session.

##### `resetTest()`
Resets test state.

##### `resetLevel()`
Resets difficulty level to 1.

##### `returnToMenu()`
Returns to main menu.

##### `startNewSession()`
Starts a new training session.

##### `showNextRule()`
Shows the next rule screen.

##### `showFixationCross()`
Shows fixation cross.

##### `generateStimulus()`
Generates and displays stimulus.

##### `handleResponse(response)`
Handles user response (true/false/null).

##### `proceedToNextTrial(isCorrect)`
Proceeds to next trial or completes session.

##### `completedSession()`
Handles session completion.

##### `addHistory(pair, isCorrect, response)`
Adds trial to history.

##### `selectMode(modeType)`
Selects game mode.

##### `selectManualMode()`
Selects manual mode.

##### `updateShowErrorCounts(show)`
Updates error count display setting.

##### `updateNumberRange(range)`
Updates number range setting.

##### `startTask()`
Starts the training task.

## UI Controller API

### UIController Class

Handles all UI updates and interactions.

#### Methods

##### `showScreen(screenId)`
Shows the specified screen.

##### `hideScreen(screenId)`
Hides the specified screen.

##### `hideAllScreens()`
Hides all screens.

##### `updateGameHeader()`
Updates game header information.

##### `updateRuleDisplay(ruleInfo)`
Updates rule display with title and description.

##### `updateErrorCounts()`
Updates error count displays.

##### `updateErrorCountsDisplay()`
Updates error count display visibility.

##### `updateStimulusDisplay(pair)`
Updates stimulus display.

##### `clearStimulusDisplay()`
Clears stimulus display.

##### `updateProgress()`
Updates progress bar.

##### `showFeedback(isCorrect, message)`
Shows feedback message.

##### `hideFeedback()`
Hides feedback message.

##### `showLevelChangeMessage(message)`
Shows level change message.

##### `updateSessionResults()`
Updates session results display.

##### `updateLastCompletedLevel()`
Updates last completed level display.

##### `updateModeDescription(modeType)`
Updates mode description.

##### `showManualControls()`
Shows manual mode controls.

##### `hideManualControls()`
Hides manual mode controls.

##### `addHistoryItem(historyItem)`
Adds item to history display.

##### `clearHistory()`
Clears history display.

##### `updateScoreStats()`
Updates score screen statistics.

##### `showProgressScreen()`
Shows progress screen.

## Progress Tracker API

### ProgressTracker Class

Handles progress tracking and visualization.

#### Methods

##### `initCanvas()`
Initializes canvas for progress chart.

##### `getTodayKey()`
Returns today's date key for storage.

##### `readProgress()`
Reads progress data from localStorage.

##### `writeProgress(progressObj)`
Writes progress data to localStorage.

##### `recordProgressForToday(entry)`
Records progress entry for today.

##### `aggregateDaily(progress)`
Aggregates daily progress data.

##### `renderProgressChart()`
Renders the progress chart.

##### `drawLine(color, data, accessor)`
Draws a data line on the chart.

##### `showProgressScreen()`
Shows progress screen.

##### `bindProgressFilter()`
Binds progress filter event listener.

##### `setUIController(uiController)`
Sets UI controller reference.

## Configuration API

### Constants

#### `numberData`
Object containing number arrays for different formats:
- `arabic`: Arabic numerals
- `word`: Written number words
- `roman`: Roman numerals

#### `semanticData`
Object containing semantic relationship data:
- `categorical`: Category relationships
- `partWhole`: Part-whole relationships
- `functional`: Functional relationships
- `colorProperty`: Color property relationships
- `antonyms`: Opposite relationships
- `actionObject`: Action-object relationships

#### `formatCombinations`
Array of format combinations for number trials.

#### `levelTimes`
Object mapping difficulty levels to presentation times.

#### `GAME_CONFIG`
Main game configuration object:
- `TOTAL_TRIALS`: Number of trials per session
- `MAX_ERRORS_PER_LEVEL`: Maximum errors before level decrease
- `MAX_CONSECUTIVE_FAILURES`: Maximum consecutive failures
- `MIN_LEVEL`: Minimum difficulty level
- `MAX_LEVEL`: Maximum difficulty level
- `FIXATION_DURATION`: Fixation cross display duration
- `FEEDBACK_DURATION`: Feedback message duration
- `LEVEL_CHANGE_MESSAGE_DURATION`: Level change message duration
- `STORAGE_KEYS`: LocalStorage keys

#### `SEMANTIC_RULES`
Object containing semantic rule configurations.

#### `DEFAULT_SETTINGS`
Default application settings.

## Event System

### Keyboard Events
- `Spacebar`: Continue from rule screen
- `F`: Different response
- `J`: Same response

### Mouse Events
- Button clicks for all interactive elements
- Mode selection
- Level selection
- Settings toggles

### Storage Events
- Automatic saving on state changes
- Loading on application initialization
- Progress tracking persistence

