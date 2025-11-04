export default function LiveStreamPlayer() {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2">Now Streaming</h2>
      <audio controls autoPlay className="w-full">
        <source src="https://your-stream-url.com/audio" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <p className="mt-2 text-sm text-gray-400">AI-generated podcast on latest breakthroughs</p>
    </div>
  );
}
