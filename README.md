# 💡 IdeaForge

**Turn Your Interests into Innovation**

IdeaForge is an AI-powered startup idea generator that transforms your passions into actionable business concepts. Simply enter your interests and watch as our AI creates unique, innovative startup ideas tailored to your preferences.

## ✨ Features

- **AI-Powered Generation**: Uses Google's Gemini AI to generate creative startup ideas
- **Interest-Based**: Input your passions and get personalized business concepts
- **Modern UI**: Clean, responsive interface built with Next.js and Tailwind CSS
- **Real-time Processing**: Fast idea generation with loading states and error handling
- **Mobile-Friendly**: Optimized for all device sizes

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Google AI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd startup-finder-idea-forge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   GOOGLE_GENAI_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:9002](http://localhost:9002)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **AI**: Google Genkit with Gemini 2.5 Flash
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Deployment**: Firebase App Hosting

## 📁 Project Structure

```
src/
├── app/                 # Next.js app router
│   ├── actions.ts      # Server actions
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   ├── header.tsx     # App header
│   ├── idea-form.tsx  # Input form
│   └── idea-list.tsx  # Results display
├── ai/                # AI configuration
│   ├── flows/         # Genkit flows
│   └── genkit.ts      # AI setup
└── hooks/             # Custom React hooks
```

## 🎯 How It Works

1. **Input**: Enter your interests (e.g., "sustainable farming, AI, vintage fashion")
2. **Processing**: AI analyzes your interests and generates relevant startup ideas
3. **Output**: Receive a curated list of unique, actionable business concepts

## 🔧 Available Scripts

- `npm run dev` - Start development server

