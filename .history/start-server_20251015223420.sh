#!/bin/bash

echo "Starting Adaptive Posner Task Development Server..."
echo

# Check if Python is available
if ! command -v python3 &> /dev/null; then
    if ! command -v python &> /dev/null; then
        echo "Error: Python is not installed or not in PATH"
        echo "Please install Python 3.6+ and try again"
        exit 1
    else
        PYTHON_CMD="python"
    fi
else
    PYTHON_CMD="python3"
fi

echo "Using Python command: $PYTHON_CMD"
echo

# Make the serve.py script executable
chmod +x serve.py

# Start the server
$PYTHON_CMD serve.py
