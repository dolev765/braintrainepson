#!/bin/bash
# Gemini CLI Authentication Setup Script for Linux/macOS
# This script helps you configure environment variables for Gemini CLI

echo "Gemini CLI Authentication Setup"
echo "================================"
echo ""

# Function to set environment variable
set_env_var() {
    local name=$1
    local value=$2
    local description=$3
    
    echo "Setting $name..."
    export $name="$value"
    echo "export $name=\"$value\"" >> ~/.bashrc
    echo "✓ $description"
}

# Function to create .env file
create_env_file() {
    local file_path=$1
    local content=$2
    
    echo "$content" > "$file_path"
    echo "✓ Created $file_path"
}

# Function to create .gemini/.env file
create_gemini_env() {
    local content=$1
    mkdir -p ~/.gemini
    echo "$content" > ~/.gemini/.env
    echo "✓ Created ~/.gemini/.env"
}

echo "Choose your authentication method:"
echo "1. Gemini API Key (Recommended for simple setup)"
echo "2. Google Cloud Project + Vertex AI"
echo "3. Vertex AI with Service Account"
echo "4. Interactive Google Login (run 'gemini auth' command)"
echo ""

read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo "Setting up Gemini API Key authentication..."
        read -p "Enter your Gemini API key from Google AI Studio: " api_key
        
        if [ -n "$api_key" ]; then
            set_env_var "GEMINI_API_KEY" "$api_key" "Gemini API Key set"
            
            # Create .env file
            env_content="# Gemini CLI Environment Variables
GEMINI_API_KEY=\"$api_key\""
            create_env_file ".env" "$env_content"
            create_gemini_env "$env_content"
            
            echo ""
            echo "✓ Gemini API Key authentication configured!"
            echo "You can now use Gemini CLI with: gemini --help"
        else
            echo "✗ No API key provided. Setup cancelled."
        fi
        ;;
        
    2)
        echo "Setting up Google Cloud Project + Vertex AI..."
        read -p "Enter your Google Cloud Project ID: " project_id
        read -p "Enter your preferred location (e.g., us-central1): " location
        
        if [ -n "$project_id" ] && [ -n "$location" ]; then
            set_env_var "GOOGLE_CLOUD_PROJECT" "$project_id" "Google Cloud Project set"
            set_env_var "GOOGLE_CLOUD_LOCATION" "$location" "Google Cloud Location set"
            set_env_var "GOOGLE_GENAI_USE_VERTEXAI" "true" "Vertex AI enabled"
            
            # Create .env file
            env_content="# Gemini CLI Environment Variables - Vertex AI
GOOGLE_CLOUD_PROJECT=\"$project_id\"
GOOGLE_CLOUD_LOCATION=\"$location\"
GOOGLE_GENAI_USE_VERTEXAI=true"
            create_env_file ".env" "$env_content"
            create_gemini_env "$env_content"
            
            echo ""
            echo "✓ Google Cloud Project + Vertex AI configured!"
            echo "Next steps:"
            echo "1. Run: gcloud auth application-default login"
            echo "2. Ensure Vertex AI API is enabled in your project"
            echo "3. Use Gemini CLI with: gemini --help"
        else
            echo "✗ Missing required information. Setup cancelled."
        fi
        ;;
        
    3)
        echo "Setting up Vertex AI with Service Account..."
        read -p "Enter your Google Cloud Project ID: " project_id
        read -p "Enter your preferred location (e.g., us-central1): " location
        read -p "Enter the full path to your service account JSON file: " service_account_path
        
        if [ -n "$project_id" ] && [ -n "$location" ] && [ -n "$service_account_path" ]; then
            set_env_var "GOOGLE_CLOUD_PROJECT" "$project_id" "Google Cloud Project set"
            set_env_var "GOOGLE_CLOUD_LOCATION" "$location" "Google Cloud Location set"
            set_env_var "GOOGLE_APPLICATION_CREDENTIALS" "$service_account_path" "Service Account credentials set"
            set_env_var "GOOGLE_GENAI_USE_VERTEXAI" "true" "Vertex AI enabled"
            
            # Create .env file
            env_content="# Gemini CLI Environment Variables - Vertex AI with Service Account
GOOGLE_CLOUD_PROJECT=\"$project_id\"
GOOGLE_CLOUD_LOCATION=\"$location\"
GOOGLE_APPLICATION_CREDENTIALS=\"$service_account_path\"
GOOGLE_GENAI_USE_VERTEXAI=true"
            create_env_file ".env" "$env_content"
            create_gemini_env "$env_content"
            
            echo ""
            echo "✓ Vertex AI with Service Account configured!"
            echo "Make sure your service account has the 'Vertex AI User' role."
        else
            echo "✗ Missing required information. Setup cancelled."
        fi
        ;;
        
    4)
        echo "For interactive Google login:"
        echo "1. Run: gemini auth"
        echo "2. Follow the interactive prompts"
        echo "3. Login with your Google account"
        ;;
        
    *)
        echo "Invalid choice. Please run the script again and select 1-4."
        ;;
esac

echo ""
echo "Setup complete! You may need to restart your terminal or run 'source ~/.bashrc' for changes to take effect."
echo "For more information, see: https://ai.google.dev/gemini-api/docs/cli"
