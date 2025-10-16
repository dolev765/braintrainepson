# Gemini CLI Authentication Setup Script for Windows PowerShell
# This script helps you configure environment variables for Gemini CLI

Write-Host "Gemini CLI Authentication Setup" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green
Write-Host ""

# Function to set environment variable
function Set-EnvVar {
    param(
        [string]$Name,
        [string]$Value,
        [string]$Description
    )
    
    Write-Host "Setting $Name..." -ForegroundColor Yellow
    [Environment]::SetEnvironmentVariable($Name, $Value, "User")
    Write-Host "✓ $Description" -ForegroundColor Green
}

# Function to create .env file
function Create-EnvFile {
    param(
        [string]$FilePath,
        [string]$Content
    )
    
    try {
        New-Item -Path $FilePath -ItemType File -Force | Out-Null
        Set-Content -Path $FilePath -Value $Content
        Write-Host "✓ Created $FilePath" -ForegroundColor Green
    }
    catch {
        Write-Host "✗ Failed to create $FilePath : $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "Choose your authentication method:" -ForegroundColor Cyan
Write-Host "1. Gemini API Key (Recommended for simple setup)"
Write-Host "2. Google Cloud Project + Vertex AI"
Write-Host "3. Vertex AI with Service Account"
Write-Host "4. Interactive Google Login (run 'gemini auth' command)"
Write-Host ""

$choice = Read-Host "Enter your choice (1-4)"

switch ($choice) {
    "1" {
        Write-Host "Setting up Gemini API Key authentication..." -ForegroundColor Yellow
        $apiKey = Read-Host "Enter your Gemini API key from Google AI Studio"
        
        if ($apiKey) {
            Set-EnvVar -Name "GEMINI_API_KEY" -Value $apiKey -Description "Gemini API Key set"
            
            # Create .env file
            $envContent = @"
# Gemini CLI Environment Variables
GEMINI_API_KEY="$apiKey"
"@
            Create-EnvFile -FilePath ".env" -Content $envContent
            
            Write-Host ""
            Write-Host "✓ Gemini API Key authentication configured!" -ForegroundColor Green
            Write-Host "You can now use Gemini CLI with: gemini --help" -ForegroundColor Cyan
        } else {
            Write-Host "✗ No API key provided. Setup cancelled." -ForegroundColor Red
        }
    }
    
    "2" {
        Write-Host "Setting up Google Cloud Project + Vertex AI..." -ForegroundColor Yellow
        $projectId = Read-Host "Enter your Google Cloud Project ID"
        $location = Read-Host "Enter your preferred location (e.g., us-central1)"
        
        if ($projectId -and $location) {
            Set-EnvVar -Name "GOOGLE_CLOUD_PROJECT" -Value $projectId -Description "Google Cloud Project set"
            Set-EnvVar -Name "GOOGLE_CLOUD_LOCATION" -Value $location -Description "Google Cloud Location set"
            Set-EnvVar -Name "GOOGLE_GENAI_USE_VERTEXAI" -Value "true" -Description "Vertex AI enabled"
            
            # Create .env file
            $envContent = @"
# Gemini CLI Environment Variables - Vertex AI
GOOGLE_CLOUD_PROJECT="$projectId"
GOOGLE_CLOUD_LOCATION="$location"
GOOGLE_GENAI_USE_VERTEXAI=true
"@
            Create-EnvFile -FilePath ".env" -Content $envContent
            
            Write-Host ""
            Write-Host "✓ Google Cloud Project + Vertex AI configured!" -ForegroundColor Green
            Write-Host "Next steps:" -ForegroundColor Cyan
            Write-Host "1. Run: gcloud auth application-default login"
            Write-Host "2. Ensure Vertex AI API is enabled in your project"
            Write-Host "3. Use Gemini CLI with: gemini --help"
        } else {
            Write-Host "✗ Missing required information. Setup cancelled." -ForegroundColor Red
        }
    }
    
    "3" {
        Write-Host "Setting up Vertex AI with Service Account..." -ForegroundColor Yellow
        $projectId = Read-Host "Enter your Google Cloud Project ID"
        $location = Read-Host "Enter your preferred location (e.g., us-central1)"
        $serviceAccountPath = Read-Host "Enter the full path to your service account JSON file"
        
        if ($projectId -and $location -and $serviceAccountPath) {
            Set-EnvVar -Name "GOOGLE_CLOUD_PROJECT" -Value $projectId -Description "Google Cloud Project set"
            Set-EnvVar -Name "GOOGLE_CLOUD_LOCATION" -Value $location -Description "Google Cloud Location set"
            Set-EnvVar -Name "GOOGLE_APPLICATION_CREDENTIALS" -Value $serviceAccountPath -Description "Service Account credentials set"
            Set-EnvVar -Name "GOOGLE_GENAI_USE_VERTEXAI" -Value "true" -Description "Vertex AI enabled"
            
            # Create .env file
            $envContent = @"
# Gemini CLI Environment Variables - Vertex AI with Service Account
GOOGLE_CLOUD_PROJECT="$projectId"
GOOGLE_CLOUD_LOCATION="$location"
GOOGLE_APPLICATION_CREDENTIALS="$serviceAccountPath"
GOOGLE_GENAI_USE_VERTEXAI=true
"@
            Create-EnvFile -FilePath ".env" -Content $envContent
            
            Write-Host ""
            Write-Host "✓ Vertex AI with Service Account configured!" -ForegroundColor Green
            Write-Host "Make sure your service account has the 'Vertex AI User' role." -ForegroundColor Cyan
        } else {
            Write-Host "✗ Missing required information. Setup cancelled." -ForegroundColor Red
        }
    }
    
    "4" {
        Write-Host "For interactive Google login:" -ForegroundColor Yellow
        Write-Host "1. Run: gemini auth" -ForegroundColor Cyan
        Write-Host "2. Follow the interactive prompts" -ForegroundColor Cyan
        Write-Host "3. Login with your Google account" -ForegroundColor Cyan
    }
    
    default {
        Write-Host "Invalid choice. Please run the script again and select 1-4." -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Setup complete! You may need to restart your terminal for changes to take effect." -ForegroundColor Green
Write-Host "For more information, see: https://ai.google.dev/gemini-api/docs/cli" -ForegroundColor Cyan
