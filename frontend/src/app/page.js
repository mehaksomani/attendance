import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
      <div className="p-8 bg-white min-h-screen">
        <h1 className="text-4xl font-bold text-blue-700 underline mb-4">
          Hello Tailwind!
        </h1>
        <p className="text-lg text-gray-800">
          Tailwind CSS is now integrated correctly and your Navbar is working!
        </p>
      </div>
  );
}
