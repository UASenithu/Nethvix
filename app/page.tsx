'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, 
  Code2, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X, 
  Sparkles,
  Sun,
  Moon,
  Send,
  MessageCircle,
  ChevronDown,
  Calculator,
  Users,
  Check,
  Search,
  ShieldCheck,
  Download,
  BookOpen,
  Bot,
  ArrowUpRight
} from 'lucide-react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Case Study Modal State
  const [activeCaseStudy, setActiveCaseStudy] = useState<any | null>(null);

  // Cost Calculator States
  const [projectType, setProjectType] = useState<'website' | 'webapp' | 'mobileapp'>('website');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['design', 'responsive']);

  // Project Tracker States
  const [searchCode, setSearchCode] = useState('');
  const [trackResult, setTrackResult] = useState<any | null>(null);
  const [trackError, setTrackError] = useState(false);

  // Lead Magnet State
  const [leadEmail, setLeadEmail] = useState('');
  const [leadDownloaded, setLeadDownloaded] = useState(false);

  // AI Chatbot Widget States
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hi there! 👋 Welcome to NethvixDev. Looking for a custom quote or tech advice?' }
  ]);

  // Calculator calculations
  const basePrices = { website: 1000, webapp: 2500, mobileapp: 3500 };
  const baseTimelines = { website: '2 Weeks', webapp: '4 Weeks', mobileapp: '6 Weeks' };
  
  const featureList = [
    { id: 'design', name: 'UI/UX Figma Prototyping', price: 300 },
    { id: 'responsive', name: 'Advanced Mobile Optimization', price: 200 },
    { id: 'cms', name: 'Content Management System (CMS)', price: 400 },
    { id: 'auth', name: 'Secure User Auth & Dashboard', price: 500 },
    { id: 'payment', name: 'Payment Gateway Integration', price: 400 },
  ];

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const calculatedTotal = basePrices[projectType] + selectedFeatures.reduce((acc, curr) => {
    const feat = featureList.find(f => f.id === curr);
    return acc + (feat ? feat.price : 0);
  }, 0);

  // Sample Project Database for Tracker
  const sampleProjects: { [key: string]: any } = {
    'NX-8021': { name: 'Fintech Dashboard Portal', client: 'FinTech Lanka', stage: 'Development', progress: 65, timeline: 'Due in 5 Days' },
    'NX-4092': { name: 'E-Commerce Mobile App', client: 'AppWorks Global', stage: 'UI/UX Design', progress: 30, timeline: 'Due in 12 Days' },
    'NX-9910': { name: 'CloudScale SaaS Landing', client: 'CloudScale Inc', stage: 'QA & Testing', progress: 90, timeline: 'Launching Tomorrow' }
  };

  const handleTrackSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const result = sampleProjects[searchCode.trim().toUpperCase()];
    if (result) {
      setTrackResult(result);
      setTrackError(false);
    } else {
      setTrackResult(null);
      setTrackError(true);
    }
  };

  const handleChatSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setChatMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');

    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        sender: 'bot', 
        text: 'Thanks for reaching out! Our lead architect Senithu will review your query and email you shortly.' 
      }]);
    }, 1000);
  };

  const caseStudies = [
    {
      id: 'nexuspay',
      title: 'NexusPay Dashboard UI',
      category: 'Fintech SaaS',
      client: 'FinTech Lanka (Pvt) Ltd',
      duration: '3 Weeks',
      summary: 'Next.js analytics portal with real-time tracking graphs.',
      challenge: 'The client faced fragmented data tracking across multi-currencies, leading to delayed financial decisions and poor user experience on legacy desktop software.',
      solution: 'We engineered a high-performance Next.js 15 dashboard featuring real-time websocket data pipelines, interactive Recharts graphs, and an ultra-clean Tailwind dark mode layout.',
      results: ['40% faster transaction monitoring', '99.9% system uptime achieved', 'Secured Series A funding shortly after launch']
    },
    {
      id: 'lankashop',
      title: 'LankaShop App Experience',
      category: 'E-Commerce Mobile App',
      client: 'AppWorks Global',
      duration: '5 Weeks',
      summary: 'Mobile UI/UX design optimized for highest user retention.',
      challenge: 'High drop-off rates during mobile checkouts and confusing navigation architecture hindered conversion rates for local vendors.',
      solution: 'Designed a completely streamlined 1-tap checkout UX in Figma and developed a cross-platform React Native app with lightning-fast local caching.',
      results: ['40% increase in user retention', '2.5x growth in mobile conversions', '4.8 Star rating on Apple App Store']
    }
  ];

  const blogPosts = [
    { title: 'Why Next.js 15 is Dominating Enterprise Web Development in 2026', tag: 'Engineering', readTime: '4 min read' },
    { title: 'The Ultimate UI/UX Checklist for High-Converting SaaS Products', tag: 'Design', readTime: '6 min read' },
    { title: 'Scaling React Native Apps: Lessons Learned from 15+ Launches', tag: 'Mobile', readTime: '5 min read' }
  ];

  const teamMembers = [
    { name: 'Senithu Nethviru', role: 'Founder & Lead Architect', initials: 'SN', color: 'bg-blue-600' },
    { name: 'Kavishka Silva', role: 'Head of UI/UX Design', initials: 'KS', color: 'bg-indigo-600' },
    { name: 'Dinuka Nawarathna', role: 'Senior Fullstack Engineer', initials: 'DN', color: 'bg-purple-600' },
  ];

  const faqs = [
    {
      q: "How long does it typically take to complete a project?",
      a: "A standard custom website takes about 2 to 3 weeks from strategy to launch. Complex E-Commerce or SaaS platforms may take 4 to 8 weeks depending on core features."
    },
    {
      q: "What is your development tech stack?",
      a: "We specialize in modern, high-performance tech stacks including Next.js 15+, React, TypeScript, Tailwind CSS, and Node.js for backend scalability."
    },
    {
      q: "Do you provide ongoing support and maintenance after launch?",
      a: "Yes! We offer continuous maintenance packages to ensure your digital product stays secure, updated, and optimized for maximum speed and conversion."
    },
    {
      q: "How do we get started working together?",
      a: "Simply use our interactive cost estimator below, track your project live with a tracking ID, or message us instantly via WhatsApp."
    }
  ];

  return (
    <div className={`min-h-screen font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${darkMode ? 'bg-slate-950/80 border-slate-800/50' : 'bg-white/80 border-slate-200'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl text-white">
              <Sparkles size={20} />
            </span>
            NETHVIX<span className="text-blue-500">.DEV</span>
          </div>

          <div className={`hidden md:flex space-x-6 text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            <a href="#services" className="hover:text-blue-500 transition">Services </a>
            <a href="#tracker" className="hover:text-blue-500 transition">Track Project</a>
            <a href="#estimator" className="hover:text-blue-500 transition">Calculator</a>
            <a href="#work" className="hover:text-blue-500 transition">Work</a>
            <a href="#blog" className="hover:text-blue-500 transition">Blog</a>
            <a href="#team" className="hover:text-blue-500 transition">Team</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-full border transition ${darkMode ? 'border-slate-800 bg-slate-900 text-amber-400 hover:bg-slate-800' : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              title="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-medium transition shadow-lg shadow-blue-600/20">
              Let's Talk
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-3">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full border transition ${darkMode ? 'border-slate-800 bg-slate-900 text-amber-400' : 'border-slate-200 bg-slate-100 text-slate-700'}`}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className={darkMode ? 'text-slate-300' : 'text-slate-800'}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className={`md:hidden border-b px-6 py-4 flex flex-col space-y-3 ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'}`}>
            <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#tracker" onClick={() => setIsOpen(false)}>Track Project</a>
            <a href="#estimator" onClick={() => setIsOpen(false)}>Calculator</a>
            <a href="#work" onClick={() => setIsOpen(false)}>Our Work</a>
            <a href="#blog" onClick={() => setIsOpen(false)}>Blog</a>
            <a href="#team" onClick={() => setIsOpen(false)}>Team</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 pt-44 pb-20 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs text-blue-400 font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Accepting New Client Projects for 2026
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] max-w-4xl"
        >
          We Build Digital Products <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
            That Scale & Convert
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-base md:text-xl max-w-2xl mb-12 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}
        >
          A next-generation software agency transforming complex business ideas into high-performing websites, stunning UI/UX, and mobile apps.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="#work" className={`px-8 py-4 rounded-full font-bold transition flex items-center justify-center gap-2 ${darkMode ? 'bg-white text-slate-950 hover:bg-slate-200' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
            Explore Portfolio <ArrowRight size={18} />
          </a>
          <a href="#estimator" className={`border px-8 py-4 rounded-full font-bold transition flex items-center justify-center ${darkMode ? 'border-slate-800 bg-slate-900/50 hover:bg-slate-800' : 'border-slate-300 bg-white hover:bg-slate-100'}`}>
            Calculate Cost
          </a>
        </motion.div>
      </header>

      {/* Security & Enterprise Trust Badges Section */}
      <section className={`py-8 border-y ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-white border-slate-200'}`}>
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <ShieldCheck className="text-blue-500" size={24} />
            <div className="text-left">
              <h4 className="font-bold text-xs uppercase">Enterprise Grade</h4>
              <p className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>256-bit SSL Secured</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <CheckCircle2 className="text-indigo-500" size={24} />
            <div className="text-left">
              <h4 className="font-bold text-xs uppercase">NDA Protected</h4>
              <p className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>100% Client Confidentiality</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="text-purple-500" size={24} />
            <div className="text-left">
              <h4 className="font-bold text-xs uppercase">Lightning Fast</h4>
              <p className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Optimized Next.js Stacks</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Users className="text-emerald-500" size={24} />
            <div className="text-left">
              <h4 className="font-bold text-xs uppercase">Dedicated Support</h4>
              <p className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>24/7 Priority Maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`container mx-auto px-6 py-28 border-t ${darkMode ? 'border-slate-900' : 'border-slate-200'}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do Best</h2>
          <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>We use cutting-edge modern technologies to give your business an unfair advantage.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -8 }} className={`p-8 rounded-3xl border transition group ${darkMode ? 'bg-slate-900/40 border-slate-800/80 hover:border-blue-500/50' : 'bg-white border-slate-200 shadow-sm hover:border-blue-500/50'}`}>
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
              <Palette size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
            <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>User-centric interfaces designed in Figma with high conversion metrics and gorgeous modern aesthetic appeal.</p>
            <ul className={`text-xs space-y-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500"/> Wireframing & Prototyping</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500"/> Design Systems</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ y: -8 }} className={`p-8 rounded-3xl border transition group ${darkMode ? 'bg-slate-900/40 border-slate-800/80 hover:border-blue-500/50' : 'bg-white border-slate-200 shadow-sm hover:border-blue-500/50'}`}>
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition">
              <Code2 size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Web Development</h3>
            <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Lightning-fast, SEO-optimized web applications built using Next.js, React, and Tailwind CSS.</p>
            <ul className={`text-xs space-y-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-indigo-500"/> Custom Web Apps</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-indigo-500"/> E-Commerce Solutions</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ y: -8 }} className={`p-8 rounded-3xl border transition group ${darkMode ? 'bg-slate-900/40 border-slate-800/80 hover:border-purple-500/50' : 'bg-white border-slate-200 shadow-sm hover:border-purple-500/50'}`}>
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-600 group-hover:text-white transition">
              <Smartphone size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">App Development</h3>
            <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Cross-platform mobile applications delivering native-level high performance for iOS and Android.</p>
            <ul className={`text-xs space-y-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-purple-500"/> React Native / Flutter</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-purple-500"/> App Store Deployment</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Project Tracker Section */}
      <section id="tracker" className={`container mx-auto px-6 py-28 border-t ${darkMode ? 'border-slate-900' : 'border-slate-200'}`}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-blue-500/10 text-xs text-blue-400 font-semibold">
            <Search size={14} /> Live Project Tracker
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Track Your Project Status</h2>
          <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Enter your project tracking number below to view real-time stage updates instantly (Try: <span className="text-blue-400 font-mono">NX-8021</span>)</p>
        </div>

        <div className={`max-w-2xl mx-auto border rounded-3xl p-8 ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-xl'}`}>
          <form onSubmit={handleTrackSearch} className="flex gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
              <input 
                type="text" 
                value={searchCode}
                onChange={(e) => setSearchCode(e.target.value)}
                placeholder="Enter Tracking ID (e.g., NX-8021)"
                className={`w-full pl-11 pr-4 py-3 rounded-2xl border text-sm outline-none transition uppercase ${darkMode ? 'bg-slate-900 border-slate-700 text-white focus:border-blue-500' : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-blue-500'}`}
              />
            </div>
            <button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-2xl font-bold text-sm transition shadow-lg shadow-blue-600/20"
            >
              Search
            </button>
          </form>

          {trackError && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs text-center">
              Invalid Tracking ID. Please try <span className="font-mono font-bold">NX-8021</span>, <span className="font-mono font-bold">NX-4092</span>, or <span className="font-mono font-bold">NX-9910</span>.
            </div>
          )}

          {trackResult && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-blue-500 tracking-wider">Client: {trackResult.client}</span>
                  <h3 className="text-lg font-bold">{trackResult.name}</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold">{trackResult.timeline}</span>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-xs mb-1.5 font-medium">
                  <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Current Stage: <strong className="text-white">{trackResult.stage}</strong></span>
                  <span className="text-blue-400 font-bold">{trackResult.progress}%</span>
                </div>
                <div className={`w-full h-2 rounded-full overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                  <div className="h-full bg-blue-600 rounded-full transition-all duration-500" style={{ width: `${trackResult.progress}%` }}></div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 pt-2 text-center text-[10px] font-medium opacity-70">
                <div className={trackResult.progress >= 25 ? 'text-blue-400 font-bold' : ''}>1. Discovery</div>
                <div className={trackResult.progress >= 50 ? 'text-blue-400 font-bold' : ''}>2. Design</div>
                <div className={trackResult.progress >= 75 ? 'text-blue-400 font-bold' : ''}>3. Development</div>
                <div className={trackResult.progress >= 100 ? 'text-blue-400 font-bold' : ''}>4. Launch</div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Interactive Project Cost Calculator */}
      <section id="estimator" className={`container mx-auto px-6 py-28 border-t ${darkMode ? 'border-slate-900' : 'border-slate-200'}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-blue-500/10 text-xs text-blue-400 font-semibold">
            <Calculator size={14} /> Interactive Estimator
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Estimate Your Project Cost</h2>
          <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Select your project requirements to get an instant estimated quote and timeline.</p>
        </div>

        <div className={`max-w-4xl mx-auto border rounded-3xl p-8 md:p-12 ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-xl'}`}>
          
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-3">1. Select Project Type</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button 
                type="button"
                onClick={() => setProjectType('website')}
                className={`p-4 rounded-2xl border text-left transition ${projectType === 'website' ? 'border-blue-500 bg-blue-500/10 text-blue-400' : darkMode ? 'border-slate-800 bg-slate-900/60' : 'border-slate-200 bg-slate-50'}`}
              >
                <div className="font-bold text-base mb-1">Custom Website</div>
                <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Best for business & portfolio</div>
              </button>
              
              <button 
                type="button"
                onClick={() => setProjectType('webapp')}
                className={`p-4 rounded-2xl border text-left transition ${projectType === 'webapp' ? 'border-blue-500 bg-blue-500/10 text-blue-400' : darkMode ? 'border-slate-800 bg-slate-900/60' : 'border-slate-200 bg-slate-50'}`}
              >
                <div className="font-bold text-base mb-1">Web Application</div>
                <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>SaaS / Dashboard portals</div>
              </button>

              <button 
                type="button"
                onClick={() => setProjectType('mobileapp')}
                className={`p-4 rounded-2xl border text-left transition ${projectType === 'mobileapp' ? 'border-blue-500 bg-blue-500/10 text-blue-400' : darkMode ? 'border-slate-800 bg-slate-900/60' : 'border-slate-200 bg-slate-50'}`}
              >
                <div className="font-bold text-base mb-1">Mobile App</div>
                <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>iOS & Android platforms</div>
              </button>
            </div>
          </div>

          <div className="mb-10">
            <label className="block text-sm font-semibold mb-3">2. Select Required Features</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {featureList.map((feat) => {
                const isSelected = selectedFeatures.includes(feat.id);
                return (
                  <div 
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition ${isSelected ? 'border-blue-500 bg-blue-500/5' : darkMode ? 'border-slate-800 bg-slate-900/30' : 'border-slate-200 bg-slate-50'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition ${isSelected ? 'bg-blue-600 border-blue-600 text-white' : darkMode ? 'border-slate-700' : 'border-slate-300'}`}>
                        {isSelected && <Check size={12} />}
                      </div>
                      <span className="text-sm font-medium">{feat.name}</span>
                    </div>
                    <span className={`text-xs font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>+${feat.price}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`p-6 rounded-2xl border flex flex-col md:flex-row justify-between items-center gap-6 ${darkMode ? 'bg-blue-950/20 border-blue-900/50' : 'bg-blue-50 border-blue-200'}`}>
            <div>
              <p className={`text-xs uppercase tracking-wider font-semibold mb-1 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Estimated Timeline</p>
              <h4 className="text-xl font-bold">{baseTimelines[projectType]}</h4>
            </div>
            <div className="text-center md:text-right">
              <p className={`text-xs uppercase tracking-wider font-semibold mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Estimated Investment</p>
              <h3 className="text-3xl md:text-4xl font-extrabold text-blue-500">${calculatedTotal} <span className="text-xs font-normal opacity-70">USD</span></h3>
            </div>
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-bold transition shadow-lg shadow-blue-600/20"
            >
              Lock in Estimate
            </a>
          </div>

        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className={`container mx-auto px-6 py-28 border-t ${darkMode ? 'border-slate-900' : 'border-slate-200'}`}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
            <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Click any case study to deep-dive into challenge, solution & impact metrics.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div 
              key={study.id}
              onClick={() => setActiveCaseStudy(study)}
              className={`group relative border rounded-3xl overflow-hidden h-80 flex flex-col justify-end p-8 cursor-pointer transition transform hover:-translate-y-1 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-md'}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-t z-10 ${darkMode ? 'from-slate-950 via-slate-950/40' : 'from-slate-100 via-slate-100/40'} to-transparent`}></div>
              <div className="absolute inset-0 bg-blue-900/10 group-hover:scale-105 transition duration-500"></div>
              
              <div className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full border flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-blue-600 border-blue-600 text-white">
                <ArrowUpRight size={18} />
              </div>

              <div className="relative z-20">
                <span className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2 block">{study.category}</span>
                <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{study.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Modal Popup */}
      <AnimatePresence>
        {activeCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`border rounded-3xl max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'}`}
            >
              <button 
                onClick={() => setActiveCaseStudy(null)}
                className={`absolute top-6 right-6 p-2 rounded-full border transition ${darkMode ? 'border-slate-800 bg-slate-800 text-slate-300' : 'border-slate-200 bg-slate-100 text-slate-700'}`}
              >
                <X size={18} />
              </button>

              <span className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1 block">{activeCaseStudy.category}</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{activeCaseStudy.title}</h2>
              
              <div className="flex gap-4 text-xs mb-6 opacity-70">
                <span>Client: <strong>{activeCaseStudy.client}</strong></span>
                <span>Timeline: <strong>{activeCaseStudy.duration}</strong></span>
              </div>

              <div className="space-y-6 text-sm">
                <div>
                  <h4 className="font-bold text-blue-400 mb-2">The Challenge</h4>
                  <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{activeCaseStudy.challenge}</p>
                </div>

                <div>
                  <h4 className="font-bold text-indigo-400 mb-2">Our Solution</h4>
                  <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{activeCaseStudy.solution}</p>
                </div>

                <div>
                  <h4 className="font-bold text-emerald-400 mb-2">Key Results & Impact</h4>
                  <ul className="space-y-2">
                    {activeCaseStudy.results.map((res: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
                <a 
                  href="#contact" 
                  onClick={() => setActiveCaseStudy(null)}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-bold transition shadow-lg shadow-blue-600/20"
                >
                  Start Similar Project
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Tech Blog */}
      <section id="blog" className={`container mx-auto px-6 py-28 border-t ${darkMode ? 'border-slate-900' : 'border-slate-200'}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-purple-500/10 text-xs text-purple-400 font-semibold">
            <BookOpen size={14} /> Resource Center
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Engineering Insights</h2>
          <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Expert articles on Next.js performance, UI/UX design systems, and scaling.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <div key={idx} className={`p-8 rounded-3xl border flex flex-col justify-between ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 uppercase tracking-wider">{post.tag}</span>
                  <span className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{post.readTime}</span>
                </div>
                <h3 className="font-bold text-lg mb-4 leading-snug">{post.title}</h3>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-400 hover:text-blue-300">
                Read Article <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Magnet Section */}
            <section className={`container mx-auto px-6 py-28 border-t ${darkMode ? 'border-slate-900' : 'border-slate-200'}`}>
              <div className={`relative max-w-5xl mx-auto rounded-3xl border overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-10 ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-blue-50 border-blue-200/60 shadow-xl'}`}>
                
                {/* Background Glow Effects */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

                {/* Left Side: Details & Value Proposition */}
                <div className="flex-1 z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-500/10 text-xs text-blue-500 font-bold uppercase tracking-wider">
                    <Sparkles size={14} /> Free Developer Resource
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Get Our 2026 UI/UX & <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                      SaaS Scaling Checklist
                    </span>
                  </h2>
                  <p className={`mb-8 text-sm md:text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Join 5,000+ founders and engineers. Download the exact 45-point checklist we use to audit enterprise digital products for maximum conversion, speed, and security.
                  </p>
                  
                  <ul className={`text-sm space-y-4 font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    <li className="flex items-center gap-3">
                      <div className="bg-blue-500/20 p-1 rounded-full text-blue-500"><CheckCircle2 size={16} /></div> 
                      Proven conversion optimization tactics
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="bg-blue-500/20 p-1 rounded-full text-blue-500"><CheckCircle2 size={16} /></div> 
                      Next.js 15 & React Native performance guidelines
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="bg-blue-500/20 p-1 rounded-full text-blue-500"><CheckCircle2 size={16} /></div> 
                      UI/UX accessibility standards for 2026
                    </li>
                  </ul>
                </div>

                {/* Right Side: Form / Success Box */}
                <div className={`w-full md:w-[420px] z-10 p-6 md:p-8 rounded-2xl border ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200 shadow-xl shadow-blue-900/5'}`}>
                  {leadDownloaded ? (
                    <div className="flex flex-col items-center justify-center text-center py-4">
                      <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-4 border border-emerald-500/20">
                        <CheckCircle2 size={32} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Success! PDF is ready.</h3>
                      <p className={`text-xs mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        Click the button below to download your checklist instantly.
                      </p>
                      <a 
                        href="/checklist.pdf" 
                        download 
                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl text-sm font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
                      >
                        <Download size={18} /> Download PDF Now
                      </a>
                    </div>
                  ) : (
                    <div>
                      <h4 className="font-bold text-lg mb-1">Where should we send it?</h4>
                      <p className={`text-xs mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        100% free. No spam, ever.
                      </p>
                      
                      <form onSubmit={async (e) => { 
                        e.preventDefault(); 
                        if (!leadEmail) return;

                        try {
                          const response = await fetch("https://api.web3forms.com/submit", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                              access_key: "d3355ac6-0a33-40fe-8997-fd1cf08f4b55", // Ube web3forms key eka
                              email: leadEmail,
                              subject: "New PDF Checklist Download Request from NexusLabs!",
                              message: `User email: ${leadEmail} requested the 2026 SaaS UI/UX Optimization Checklist.`
                            })
                          });
                          
                          const data = await response.json();
                          if (data.success) {
                            setLeadDownloaded(true);
                          } else {
                            alert("Something went wrong. Please try again.");
                          }
                        } catch (error) {
                          console.error("Error submitting form", error);
                        }
                      }} className="flex flex-col gap-4">
                        <div>
                          <label className={`block text-xs font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Email Address</label>
                          <input 
                            type="email" 
                            required
                            value={leadEmail}
                            onChange={(e) => setLeadEmail(e.target.value)}
                            placeholder="Enter your work email" 
                            className={`w-full px-4 py-3.5 rounded-xl border text-sm outline-none transition focus:border-blue-500 ${darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                          />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 mt-2">
                          Get Free Access <ArrowRight size={16} />
                        </button>
                      </form>
                    </div>
                  )}
                </div>

              </div>
            </section>

      {/* Meet the Team Section */}
      <section id="team" className={`container mx-auto px-6 py-28 border-t ${darkMode ? 'border-slate-900' : 'border-slate-200'}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-indigo-500/10 text-xs text-indigo-400 font-semibold">
            <Users size={14} /> Human Trust
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Minds Behind NexusLabs</h2>
          <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Expert engineers and designers dedicated to building your digital excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, idx) => (
            <div key={idx} className={`p-8 rounded-3xl border text-center ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className={`w-20 h-20 rounded-full ${member.color} text-white text-xl font-bold flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                {member.initials}
              </div>
              <h3 className="text-lg font-bold mb-1">{member.name}</h3>
              <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className={`container mx-auto px-6 py-28 border-t ${darkMode ? 'border-slate-900' : 'border-slate-200'}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Got questions? We've got clear answers before you begin.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}
            >
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-5 text-left font-semibold flex justify-between items-center gap-4 text-sm md:text-base"
              >
                <span>{faq.q}</span>
                <ChevronDown size={18} className={`transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-blue-500' : ''}`} />
              </button>
              {openFaq === index && (
                <div className={`px-6 pb-5 text-xs md:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FIX: Aluth Contact Section Eka Methanata Gaththa */}
      <ContactSection darkMode={darkMode} />

      {/* Smart AI Chatbot Floating Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {isChatOpen ? (
          <div className={`w-80 md:w-96 border rounded-3xl shadow-2xl overflow-hidden flex flex-col ${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
            <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot size={20} />
                <span className="font-bold text-sm">Nexus AI Assistant</span>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="hover:opacity-80">
                <X size={18} />
              </button>
            </div>

            <div className={`p-4 h-64 overflow-y-auto space-y-3 text-xs ${darkMode ? 'bg-slate-950/50' : 'bg-slate-50'}`}>
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-3 rounded-2xl max-w-[80%] ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : darkMode ? 'bg-slate-800 text-slate-200 rounded-bl-none' : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleChatSend} className={`p-3 border-t flex gap-2 ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
              <input 
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask something..."
                className={`flex-1 px-3 py-2 rounded-xl border text-xs outline-none ${darkMode ? 'bg-slate-950 border-slate-700 text-white' : 'bg-slate-100 border-slate-300 text-slate-900'}`}
              />
              <button type="submit" className="bg-blue-600 text-white p-2.5 rounded-xl hover:bg-blue-500 transition">
                <Send size={14} />
              </button>
            </form>
          </div>
        ) : (
          <button 
            onClick={() => setIsChatOpen(true)}
            className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition transform hover:scale-105"
            title="Chat with AI Assistant"
          >
            <Bot size={24} />
          </button>
        )}
      </div>

      {/* Footer */}
      <footer className={`border-t py-12 text-sm ${darkMode ? 'border-slate-900 text-slate-500' : 'border-slate-200 text-slate-500'}`}>
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 NexusLabs. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-500 transition">Twitter</a>
            <a href="#" className="hover:text-blue-500 transition">LinkedIn</a>
            <a href="#" className="hover:text-blue-500 transition">GitHub</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

// ========================================================
// FIX: Contact Component Eka Eliyen Liyala Thiyenne 
// ========================================================
function ContactSection({ darkMode }: { darkMode?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "d3355ac6-0a33-40fe-8997-fd1cf08f4b55", // ⚠️ Ube Web3Forms Access Key eka methana danna
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="container mx-auto px-6 py-28">
      <div className={`border p-8 md:p-14 rounded-3xl max-w-3xl mx-auto relative overflow-hidden transition-colors ${darkMode ? 'bg-gradient-to-br from-blue-950/40 via-indigo-950/30 to-slate-900 border-slate-800/80' : 'bg-white border-slate-200 shadow-xl'}`}>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's build something exceptional.</h2>
          <p className={`text-sm md:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Fill out the form below or chat instantly with us on WhatsApp.
          </p>
          
          <div className="mt-6">
            <a 
              href="https://wa.me/94770000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-full text-sm font-semibold transition shadow-lg shadow-emerald-600/20"
            >
              <MessageCircle size={18} /> Chat Instantly on WhatsApp
            </a>
          </div>
        </div>

        {submitted ? (
          <div className="bg-emerald-500/10 border border-emerald-500/30 p-8 rounded-2xl text-center">
            <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-2">Thank you!</h3>
            <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              We've received your message. We'll be in touch with you soon!
            </p>
            <button 
              onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
              className="mt-6 text-xs text-blue-400 underline hover:text-blue-300"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Senithu Nethviru" 
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition ${darkMode ? 'bg-slate-900/80 border-slate-700 text-white focus:border-blue-500' : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-blue-500'}`}
                />
              </div>
              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="senithu@example.com" 
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition ${darkMode ? 'bg-slate-900/80 border-slate-700 text-white focus:border-blue-500' : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-blue-500'}`}
                />
              </div>
            </div>
            <div>
              <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Project Details</label>
              <textarea 
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Tell us about your project, timeline, and goals..." 
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition resize-none ${darkMode ? 'bg-slate-900/80 border-slate-700 text-white focus:border-blue-500' : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-blue-500'}`}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
            >
              Send Message <Send size={16} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}