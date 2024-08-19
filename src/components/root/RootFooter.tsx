import { app } from "@/config";

export default function RootFooter() {
  return (
    <div className="h-14 w-full flex flex-col items-center bg-secondary">
      <p className="text-gray-400">{app.name} @Copyright 2024</p>
    </div>
  );
}
