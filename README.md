# KIIDOKU — AI Podcast Streaming Web App

KIIDOKU is a futuristic, no-login, free-access platform that streams AI-generated podcasts and videos 24/7. It covers everything from AI news and breakthroughs to debates and discoveries.

## 🌐 Features
- Live audio/video stream
- Real-time transcript
- AI-generated podcast segments
- GitHub, arXiv, Twitter integrations
- Anonymous discussion hub

## 🛠️ Tech Stack
- Frontend: React.js + TailwindCSS
- Backend: Node.js + Express
- Streaming: HLS.js / WebRTC
- AI: OpenAI API
- Hosting: Vercel / Netlify

## 🚀 Getting Started
```bash
git clone https://github.com/yourusername/kiidoku.git
cd kiidoku
npm install
npm start
```cpp
kiidoku/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── LiveStreamPlayer.jsx
│   │   ├── DiscoverFeed.jsx
│   │   ├── DebateHub.jsx
│   │   ├── PodcastArchive.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Stream.jsx
│   │   ├── Discover.jsx
│   │   ├── Debate.jsx
│   │   ├── Archive.jsx
│   ├── App.jsx
│   └── main.jsx
├── server/
│   ├── index.js
│   ├── routes/
│   │   ├── github.js
│   │   ├── news.js
│   │   ├── arxiv.js
│   └── utils/
│       └── aiNarration.js
├── .env
├── package.json
└── README.md
---
