import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Logo from './components/Logo';
import Marquee from './components/Marquee';
import { ArrowRight, BookOpen, Heart, Shield, Globe } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory bg-white text-gray-900 scroll-smooth">
      {/* Hero Section */}
      <section className="h-screen snap-start flex flex-col items-center justify-center relative overflow-hidden bg-green-50">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img 
            src="https://picsum.photos/seed/liberia/1920/1080" 
            alt="Liberia Backdrop" 
            className="w-full h-full object-cover blur-sm"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <Logo className="w-32 h-32 text-green-700 mb-8" />
        
        <motion.h1 
          className="text-6xl md:text-8xl font-bold text-center tracking-tighter text-green-900"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          AFRICA OF HOPE
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-green-700 mt-4 text-center max-w-2xl px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Empowering the next generation of Liberian leaders through education, technology, and community.
        </motion.p>
        
        <motion.div 
          className="mt-12 flex gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link 
            to="/login" 
            className="px-8 py-4 bg-green-700 text-white rounded-full font-bold hover:bg-green-800 transition-colors flex items-center gap-2 shadow-lg"
          >
            Get Started <ArrowRight size={20} />
          </Link>
          <a 
            href="#about" 
            className="px-8 py-4 border-2 border-green-700 text-green-700 rounded-full font-bold hover:bg-green-50 transition-colors"
          >
            Learn More
          </a>
        </motion.div>

        <div className="absolute bottom-0 w-full">
          <Marquee text="Education • Hope • Empowerment • Community • Future • Leadership • Innovation • Africa" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="h-screen snap-start flex items-center justify-center bg-white px-8">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-green-900">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              AFRICA OF HOPE is dedicated to providing accessible, high-quality education to students across Liberia. 
              Our platform bridges the gap between traditional learning and modern technology, 
              offering tools for students, instructors, and administrators to thrive.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-lg text-green-700">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="font-bold">Education</h3>
                  <p className="text-sm text-gray-500">Quality curriculum for all.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-lg text-green-700">
                  <Heart size={24} />
                </div>
                <div>
                  <h3 className="font-bold">Hope</h3>
                  <p className="text-sm text-gray-500">Building a brighter future.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-lg text-green-700">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="font-bold">Security</h3>
                  <p className="text-sm text-gray-500">Safe and reliable platform.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-lg text-green-700">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="font-bold">Community</h3>
                  <p className="text-sm text-gray-500">Connecting Liberia.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-green-200 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform"></div>
            <img 
              src="https://picsum.photos/seed/hope/800/600" 
              alt="Hope" 
              className="relative rounded-xl shadow-2xl w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="h-screen snap-start flex items-center justify-center bg-green-900 text-white px-8">
        <div className="max-w-4xl text-center space-y-12">
          <h2 className="text-5xl font-bold">Making a Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-2">
              <div className="text-6xl font-bold text-green-400">500+</div>
              <div className="text-xl uppercase tracking-widest opacity-80">Students</div>
            </div>
            <div className="space-y-2">
              <div className="text-6xl font-bold text-green-400">20+</div>
              <div className="text-xl uppercase tracking-widest opacity-80">Instructors</div>
            </div>
            <div className="space-y-2">
              <div className="text-6xl font-bold text-green-400">50+</div>
              <div className="text-xl uppercase tracking-widest opacity-80">Classes</div>
            </div>
          </div>
          <p className="text-xl opacity-80 italic">
            "Education is the most powerful weapon which you can use to change the world."
          </p>
        </div>
      </section>
    </div>
  );
}
