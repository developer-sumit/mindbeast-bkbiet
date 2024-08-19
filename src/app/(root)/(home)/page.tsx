export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-3 bg-gray-700 rounded-2xl h-1/2">
        <p>Beast Mode Hackathon</p>
        <button className="self-end font-semibold rounded-full px-5 py-2 bg-primary-100 hover:bg-primary text-white">
          Join
        </button>
      </div>
    </div>
  );
}
