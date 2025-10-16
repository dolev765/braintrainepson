# Gemini CLI Authentication Setup Guide

This guide helps you configure environment variables for Gemini CLI authentication on your system.

## Quick Start

### Windows (PowerShell)
```powershell
.\setup-gemini-auth.ps1
```

### Linux/macOS (Bash)
```bash
./setup-gemini-auth.sh
```

## Authentication Methods

### 1. Gemini API Key (Recommended for simple setup)

**Best for**: Individual developers, simple projects, testing

**Steps**:
1. Get your API key from [Google AI Studio](https://aistudio.google.com/)
2. Run the setup script and choose option 1
3. Enter your API key when prompted

**Environment Variables**:
```bash
export GEMINI_API_KEY="your-gemini-api-key-here"
```

### 2. Google Cloud Project + Vertex AI

**Best for**: Production applications, Google Cloud users, enterprise

**Prerequisites**:
- Google Cloud Project
- Vertex AI API enabled
- Google Cloud CLI installed

**Steps**:
1. Run the setup script and choose option 2
2. Enter your Google Cloud Project ID and location
3. Run: `gcloud auth application-default login`
4. Ensure Vertex AI API is enabled in your project

**Environment Variables**:
```bash
export GOOGLE_CLOUD_PROJECT="your-project-id"
export GOOGLE_CLOUD_LOCATION="us-central1"
export GOOGLE_GENAI_USE_VERTEXAI=true
```

### 3. Vertex AI with Service Account

**Best for**: CI/CD pipelines, production servers, automated systems

**Prerequisites**:
- Google Cloud Project
- Service Account with "Vertex AI User" role
- Service Account JSON key file

**Steps**:
1. Create a service account in Google Cloud Console
2. Download the JSON key file
3. Run the setup script and choose option 3
4. Enter your project details and key file path

**Environment Variables**:
```bash
export GOOGLE_CLOUD_PROJECT="your-project-id"
export GOOGLE_CLOUD_LOCATION="us-central1"
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/service-account-key.json"
export GOOGLE_GENAI_USE_VERTEXAI=true
```

### 4. Interactive Google Login

**Best for**: Development, one-time setup

**Steps**:
1. Run: `gemini auth`
2. Follow the interactive prompts
3. Login with your Google account

## Manual Setup

If you prefer to set up environment variables manually:

### Windows (PowerShell)
```powershell
# Set for current session
$env:GEMINI_API_KEY="your-api-key"

# Set permanently for user
[Environment]::SetEnvironmentVariable("GEMINI_API_KEY", "your-api-key", "User")
```

### Linux/macOS (Bash)
```bash
# Set for current session
export GEMINI_API_KEY="your-api-key"

# Set permanently (add to ~/.bashrc)
echo 'export GEMINI_API_KEY="your-api-key"' >> ~/.bashrc
source ~/.bashrc
```

### Using .env Files

Create a `.env` file in your project directory or use the template:

```bash
# Copy the template
cp gemini-env-template.env .env

# Edit with your values
# Uncomment and configure the method you want to use
```

## Environment Variable Reference

| Variable | Description | Required For |
|----------|-------------|--------------|
| `GEMINI_API_KEY` | API key from Google AI Studio | Gemini API Key auth |
| `GOOGLE_CLOUD_PROJECT` | Google Cloud Project ID | Vertex AI |
| `GOOGLE_CLOUD_PROJECT_ID` | Alternative to GOOGLE_CLOUD_PROJECT | Vertex AI |
| `GOOGLE_CLOUD_LOCATION` | Google Cloud region | Vertex AI |
| `GOOGLE_API_KEY` | Google Cloud API key | Vertex AI with API key |
| `GOOGLE_APPLICATION_CREDENTIALS` | Path to service account JSON | Vertex AI with service account |
| `GOOGLE_GENAI_USE_VERTEXAI` | Enable Vertex AI mode | Vertex AI |

## Troubleshooting

### Common Issues

1. **"API keys are not supported by this API"**
   - Your organization may restrict API key usage
   - Try using Service Account or ADC authentication instead

2. **"Authentication failed"**
   - Check that your API key is correct
   - Ensure your Google Cloud Project has the necessary APIs enabled
   - Verify your service account has the correct permissions

3. **"Project not found"**
   - Verify your Google Cloud Project ID is correct
   - Ensure you have access to the project

### Verification

Test your authentication:
```bash
# Test Gemini CLI
gemini --help

# Test with a simple request
gemini "Hello, how are you?"
```

## Security Best Practices

1. **Never commit API keys to version control**
2. **Use environment variables or secure credential storage**
3. **Rotate API keys regularly**
4. **Use service accounts for production applications**
5. **Restrict service account permissions to minimum required**

## Files Created

- `gemini-env-template.env` - Template for environment variables
- `setup-gemini-auth.ps1` - Windows PowerShell setup script
- `setup-gemini-auth.sh` - Linux/macOS Bash setup script
- `GEMINI_AUTH_SETUP.md` - This documentation

## Next Steps

1. Choose your authentication method
2. Run the appropriate setup script
3. Test your configuration with `gemini --help`
4. Start using Gemini CLI for your projects

## Additional Resources

- [Gemini CLI Documentation](https://ai.google.dev/gemini-api/docs/cli)
- [Google AI Studio](https://aistudio.google.com/)
- [Google Cloud Console](https://console.cloud.google.com/)
- [Vertex AI Documentation](https://cloud.google.com/vertex-ai/docs)
