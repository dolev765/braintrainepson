@echo off
REM Quick Gemini CLI Authentication Setup for Windows
REM This batch file provides a simple way to set up Gemini CLI authentication

echo Gemini CLI Authentication Setup
echo ================================
echo.

echo Choose your authentication method:
echo 1. Gemini API Key (Recommended for simple setup)
echo 2. Google Cloud Project + Vertex AI
echo 3. Vertex AI with Service Account
echo 4. Interactive Google Login
echo.

set /p choice="Enter your choice (1-4): "

if "%choice%"=="1" (
    echo.
    echo Setting up Gemini API Key authentication...
    set /p api_key="Enter your Gemini API key from Google AI Studio: "
    if not "%api_key%"=="" (
        setx GEMINI_API_KEY "%api_key%"
        echo export GEMINI_API_KEY="%api_key%" > .env
        echo.
        echo ✓ Gemini API Key authentication configured!
        echo You can now use Gemini CLI with: gemini --help
    ) else (
        echo ✗ No API key provided. Setup cancelled.
    )
) else if "%choice%"=="2" (
    echo.
    echo Setting up Google Cloud Project + Vertex AI...
    set /p project_id="Enter your Google Cloud Project ID: "
    set /p location="Enter your preferred location (e.g., us-central1): "
    if not "%project_id%"=="" if not "%location%"=="" (
        setx GOOGLE_CLOUD_PROJECT "%project_id%"
        setx GOOGLE_CLOUD_LOCATION "%location%"
        setx GOOGLE_GENAI_USE_VERTEXAI "true"
        echo GOOGLE_CLOUD_PROJECT="%project_id%" > .env
        echo GOOGLE_CLOUD_LOCATION="%location%" >> .env
        echo GOOGLE_GENAI_USE_VERTEXAI=true >> .env
        echo.
        echo ✓ Google Cloud Project + Vertex AI configured!
        echo Next steps:
        echo 1. Run: gcloud auth application-default login
        echo 2. Ensure Vertex AI API is enabled in your project
        echo 3. Use Gemini CLI with: gemini --help
    ) else (
        echo ✗ Missing required information. Setup cancelled.
    )
) else if "%choice%"=="3" (
    echo.
    echo Setting up Vertex AI with Service Account...
    set /p project_id="Enter your Google Cloud Project ID: "
    set /p location="Enter your preferred location (e.g., us-central1): "
    set /p service_account="Enter the full path to your service account JSON file: "
    if not "%project_id%"=="" if not "%location%"=="" if not "%service_account%"=="" (
        setx GOOGLE_CLOUD_PROJECT "%project_id%"
        setx GOOGLE_CLOUD_LOCATION "%location%"
        setx GOOGLE_APPLICATION_CREDENTIALS "%service_account%"
        setx GOOGLE_GENAI_USE_VERTEXAI "true"
        echo GOOGLE_CLOUD_PROJECT="%project_id%" > .env
        echo GOOGLE_CLOUD_LOCATION="%location%" >> .env
        echo GOOGLE_APPLICATION_CREDENTIALS="%service_account%" >> .env
        echo GOOGLE_GENAI_USE_VERTEXAI=true >> .env
        echo.
        echo ✓ Vertex AI with Service Account configured!
        echo Make sure your service account has the 'Vertex AI User' role.
    ) else (
        echo ✗ Missing required information. Setup cancelled.
    )
) else if "%choice%"=="4" (
    echo.
    echo For interactive Google login:
    echo 1. Run: gemini auth
    echo 2. Follow the interactive prompts
    echo 3. Login with your Google account
) else (
    echo Invalid choice. Please run the script again and select 1-4.
)

echo.
echo Setup complete! You may need to restart your terminal for changes to take effect.
echo For more information, see: https://ai.google.dev/gemini-api/docs/cli
pause
