import Link from 'next/link';
import { FaCamera, FaVideo, FaPalette } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-6">AI Photo-Video Studio</h1>
          <p className="text-xl mb-12">Transform your creative vision into reality with AI-powered tools</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <FaCamera className="text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Image Generation</h3>
              <p>Create stunning images from text descriptions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <FaVideo className="text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Video Creation</h3>
              <p>Generate and edit videos with AI assistance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <FaPalette className="text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Logo Design</h3>
              <p>Create professional logos with AI-powered tools</p>
            </div>
          </div>

          <div className="space-x-4">
            <Link 
              href="/login" 
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
