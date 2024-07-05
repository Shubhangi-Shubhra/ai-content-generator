import { Button } from "@/components/ui/button";
import Link from "next/link";

// Array of icons URLs
const icons = [
  "https://cdn-icons-png.flaticon.com/128/5145/5145108.png",
  "https://cdn-icons-png.flaticon.com/128/2068/2068695.png",
  "https://cdn-icons-png.flaticon.com/128/8637/8637113.png",
  "https://cdn-icons-png.flaticon.com/128/3479/3479978.png"
];

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-950 to-black min-h-screen flex flex-col items-center justify-center">
      <header className="w-full p-4 flex justify-end">
        
      </header>
      <main className="text-center flex-grow flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-white">
          Prompt<span className="text-white">Wizard</span>
        </h1>
        <p className="text-gray-100 mt-4 max-w-2xl">
          Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
        </p>
        <Link href="/dashboard">
          <Button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg">
            Get started
          </Button>
        </Link>
        {/* Render icons */}
        <div className="flex mt-4">
          {icons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`Icon ${index + 1}`}
              className="w-16 h-16 mx-4 cursor-pointer filter invert hover:scale-110 transition duration-300"
            />
          ))}
        </div>
      </main>
    </div>
  );
}
