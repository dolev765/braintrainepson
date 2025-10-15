#!/usr/bin/env python3
"""
Simple HTTP server for development
Serves the Adaptive Posner Task application locally
"""

import http.server
import socketserver
import webbrowser
import os
import sys
from pathlib import Path

# Configuration
PORT = 8000
HOST = 'localhost'

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Custom handler to set proper MIME types for ES6 modules"""
    
    def end_headers(self):
        # Set CORS headers for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        
        # Set proper MIME type for JavaScript modules
        if self.path.endswith('.js'):
            self.send_header('Content-Type', 'application/javascript')
        
        super().end_headers()

def main():
    """Start the development server"""
    
    # Change to the script directory
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    # Check if index.html exists
    if not Path('index.html').exists():
        print("Error: index.html not found in current directory")
        print("Make sure you're running this script from the project root")
        sys.exit(1)
    
    # Create server
    with socketserver.TCPServer((HOST, PORT), CustomHTTPRequestHandler) as httpd:
        print(f"🚀 Development server starting...")
        print(f"📁 Serving files from: {script_dir}")
        print(f"🌐 Server running at: http://{HOST}:{PORT}")
        print(f"📱 Open in browser: http://{HOST}:{PORT}/index.html")
        print(f"⏹️  Press Ctrl+C to stop the server")
        print("-" * 50)
        
        # Try to open browser automatically
        try:
            webbrowser.open(f'http://{HOST}:{PORT}/index.html')
            print("🌐 Browser opened automatically")
        except Exception as e:
            print(f"⚠️  Could not open browser automatically: {e}")
            print(f"   Please open http://{HOST}:{PORT}/index.html manually")
        
        print("-" * 50)
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Server stopped by user")
            print("👋 Goodbye!")

if __name__ == '__main__':
    main()
