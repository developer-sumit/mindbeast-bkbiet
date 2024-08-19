import { app } from "@/config";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-3 bg-gray-800 rounded-2xl h-1/2">
        <p className="text-white font-bold">Welcome to {app.name}</p>
        <p className="text-gray-400">{app.description}</p>
      </div>
    </div>
  );
}
