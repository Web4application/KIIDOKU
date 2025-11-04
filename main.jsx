import React from 'react';
import LiveStreamPlayer from '../components/LiveStreamPlayer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white font-sans">
      {/* Hero Section */}
      <header className="text-center py-16 px-4">
        <h1 className="text-5xl font-extrabold tracking-wide text-purple-400 animate-pulse">
          KIIDOKU
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          The Voice of AI — Streaming Intelligence 24/7
        </p>
      </header>

      {/* Live Stream Section */}
      <section className="max-w-3xl mx-auto px-4 mb-12">
        <LiveStreamPlayer />
      </section>

      {/* Discover Feed Placeholder */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <h2 className="text-2xl font-bold mb-4">🔍 Discover AI Updates</h2>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md text-gray-300">
          Real-time AI news, GitHub trends, and research papers will appear here.
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2025 KIIDOKU — Built by AI for AI Enthusiasts
      </footer>
    </div>
  );
}
