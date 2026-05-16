import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, ArrowRight, MessageCircle, Mail, Phone, MapPin, Camera, Video, Briefcase, Send, FileText, Code, Target, Menu, X, ChevronRight, Star, ExternalLink, Zap, Globe, Award, TrendingUp, Clock, BrainCircuit, Heart, Compass, Sprout, Lightbulb, Users, Moon, HandHelping, Rocket
} from 'lucide-react';

const COLORS = {
  maroon: '#6B1D1D',
  gold: '#F5B700',
  cyan: '#00F0FF',
  glassWhite: 'rgba(255, 255, 255, 0.7)',
  glassBorder: 'rgba(255, 255, 255, 0.3)'
};

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = ev => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    const handleMouseOver = (e) => {
      if (e.target.closest('button') || e.target.closest('a') || e.target.closest('.interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return { ...mousePosition, isHovering };
}

const GlassCard = ({ children, className = "", hover = true, interactive = true }) => (
  <div className={`
    backdrop-blur-xl bg-white/40 border-2 border-white/40 rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.05)] relative overflow-hidden
    ${hover ? 'hover:bg-white/60 hover:shadow-[12px_12px_0_#00F0FF] hover:-translate-y-2 hover:-rotate-1 transition-all duration-300 interactive' : ''}
    ${interactive ? 'group' : ''}
    ${className}
  `}>
    {children}
  </div>
);

const Button = ({ children, variant = 'primary', className = '', onClick, href }) => {
  const baseStyles = "relative px-8 py-5 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden hover:scale-105 active:scale-95 z-10 w-full sm:w-auto font-jakarta interactive";
  const variants = {
    primary: `bg-[#111111] text-white shadow-[6px_6px_0_#00F0FF] hover:shadow-[8px_8px_0_#F5B700] hover:bg-[#6B1D1D] border-2 border-transparent`,
    gold: `bg-[#F5B700] text-[#111111] shadow-[6px_6px_0_#6B1D1D] hover:shadow-[8px_8px_0_#00F0FF] border-2 border-[#111111]`,
    glass: `backdrop-blur-md bg-white/20 border-2 border-white/50 text-[#111111] hover:bg-white/40`,
    outline: `border-4 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-[#00F0FF] bg-transparent shadow-[6px_6px_0_#F5B700] hover:shadow-[0_0_0_transparent] hover:translate-x-1 hover:translate-y-1`,
  };

  const content = <span className="flex items-center gap-2 z-10 relative">{children}</span>;

  if (href) {
    return <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>{content}</a>;
  }
  return <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>{content}</button>;
};

const SectionHeader = ({ badge, title, subtitle, centered = true }) => (
  <div className={`mb-20 space-y-6 ${centered ? 'text-center' : 'text-left'}`}>
    <span className="inline-block px-5 py-2 bg-[#6B1D1D] text-[#00F0FF] rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-[#00F0FF]/50 shadow-[4px_4px_0_#F5B700] rotate-[-2deg] hover:rotate-0 transition-transform">
      {badge}
    </span>
    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#111111] tracking-tighter leading-[0.9]">{title}</h2>
    {subtitle && <p className="text-xl text-gray-500 max-w-2xl mx-auto font-bold tracking-tight">{subtitle}</p>}
  </div>
);

const Marquee = () => {
  const text = "FREE RESOURCES • ELITE MENTORSHIP • OPEN TO ALL • ZERO COST • ";
  return (
    <div className="w-full bg-[#111111] text-[#00F0FF] py-6 overflow-hidden relative border-y-4 border-[#F5B700] -rotate-2 scale-105 z-40 my-16 shadow-2xl">
      <div className="animate-marquee whitespace-nowrap text-3xl md:text-5xl font-black uppercase tracking-[0.1em]">
        {text.repeat(10)}
      </div>
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { x, y, isHovering } = useMousePosition();

  const navLinks = ['Home', 'Impact', 'Initiatives', 'Resources', 'Blogs', 'Contact'];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    if (id === 'blogs') {
      window.open('https://yourwordpresssite.com/blog', '_blank');
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1C1C1E] selection:bg-[#00F0FF] selection:text-[#111111] font-jakarta antialiased overflow-x-hidden relative">
      
      {/* Gen Z Global Aesthetics */}
      <div className="noise-overlay" />
      <div 
        className={`custom-cursor hidden md:block ${isHovering ? 'hovering' : ''}`} 
        style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }} 
      />

      {/* Reactive Mesh Background Accents */}
      <div 
        className="fixed top-0 left-0 w-[60%] h-[60%] bg-[#F5B700]/15 blur-[120px] rounded-full -z-10 transition-transform duration-1000 ease-out" 
        style={{ transform: `translate(${x * 0.05}px, ${y * 0.05}px)` }}
      />
      <div 
        className="fixed bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#00F0FF]/15 blur-[120px] rounded-full -z-10 transition-transform duration-1000 ease-out" 
        style={{ transform: `translate(${x * -0.05}px, ${y * -0.05}px)` }}
      />

      {/* Floating Header */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 px-4 md:px-8 ${scrolled ? 'top-4' : 'top-6'}`}>
        <div className={`max-w-7xl mx-auto flex items-center justify-between p-3 rounded-[32px] border-2 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-2xl shadow-[8px_8px_0_#F5B700] border-[#111111]' : 'bg-transparent border-transparent'}`}>
          <div className="flex items-center gap-4 px-4 cursor-pointer group interactive" onClick={() => scrollTo('home')}>
            <div className="w-12 h-12 bg-[#111111] rounded-2xl flex items-center justify-center text-[#00F0FF] shadow-[4px_4px_0_#F5B700] group-hover:rotate-12 transition-transform">
              <GraduationCap size={28} strokeWidth={3} />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl leading-none tracking-tighter">PKELIBRARY</span>
              <span className="text-[10px] font-black text-[#6B1D1D] tracking-[0.4em] uppercase">Foundation</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((name) => (
              <button key={name} onClick={() => scrollTo(name.toLowerCase())} className="px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-widest text-[#111111] hover:text-[#00F0FF] hover:bg-[#111111] hover:-rotate-2 transition-all interactive">
                {name}
              </button>
            ))}
            <Button variant="primary" className="ml-4 py-3 px-8 rounded-2xl text-xs">Join Student Portal</Button>
          </div>

          <button className="lg:hidden p-4 rounded-2xl bg-[#111111] text-[#00F0FF] shadow-[4px_4px_0_#F5B700] hover:-rotate-6 transition-transform" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Fixed Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-6 px-4 z-[110] animate-slide-up">
            <GlassCard className="p-6 flex flex-col gap-2 max-h-[75vh] overflow-y-auto border-4 border-[#111111] shadow-[8px_8px_0_#00F0FF]" hover={false}>
              {navLinks.map((name) => (
                <button 
                  key={name} 
                  onClick={() => scrollTo(name.toLowerCase())} 
                  className="text-left w-full p-5 rounded-2xl text-xl font-black uppercase tracking-widest text-[#111111] hover:bg-[#111111] hover:text-[#00F0FF] active:scale-95 transition-all flex items-center justify-between group border-2 border-transparent hover:border-[#F5B700]"
                >
                  {name}
                  <ChevronRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
              <div className="p-2 pt-6">
                <Button variant="primary" className="h-16 text-lg w-full">Join Now</Button>
              </div>
            </GlassCard>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-40 pb-16 lg:pt-64 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-3/5 space-y-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-[#111111] text-[#00F0FF] rounded-full shadow-[4px_4px_0_#F5B700] border-2 border-[#111111] animate-slide-up -rotate-1 hover:rotate-0 transition-transform cursor-default">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00F0FF]"></span>
                </span>
                <span className="text-xs font-black uppercase tracking-[0.3em]">Mentorship Open</span>
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-[#111111] drop-shadow-sm">
                Guidance.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B1D1D] via-[#F5B700] to-[#00F0FF] animate-pulse">Evolutionary.</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-bold max-w-xl mx-auto lg:mx-0 tracking-tight">
                PkeLibrary Foundation is the elite network delivering premium study assets and mentorship. <span className="text-[#6B1D1D] bg-[#F5B700]/20 px-2">100% Free.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Button variant="primary" className="h-20 px-12 text-xl">
                  Get Started <ArrowRight size={28} />
                </Button>
                <Button variant="outline" className="h-20 px-12 text-xl">
                  View Catalog
                </Button>
              </div>
            </div>

            <div className="w-full lg:w-2/5 relative">
              <div className="bg-[#111111] p-4 rounded-[48px] border-4 border-[#00F0FF] shadow-[16px_16px_0_#F5B700] rotate-3 hover:-rotate-1 transition-transform duration-500 group">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" className="rounded-[36px] w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Hero" />
                <div className="absolute -bottom-8 -left-8 bg-[#00F0FF] text-[#111111] p-6 rounded-3xl shadow-[8px_8px_0_#6B1D1D] border-4 border-[#111111] hidden md:block animate-float">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#111111] text-[#F5B700] rounded-2xl flex items-center justify-center">
                      <Zap size={32} fill="currentColor" />
                    </div>
                    <div>
                      <div className="font-black text-2xl tracking-tight">Instant Access</div>
                      <div className="text-[10px] font-black uppercase tracking-widest mt-1">NO PAYWALLS EVER</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Impact Section */}
      <section id="impact" className="py-20 lg:py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {[
              { val: "1.2M+", label: "Materials", icon: <FileText className="text-[#00F0FF]" /> },
              { val: "100K+", label: "Members", icon: <Users className="text-[#F5B700]" /> },
              { val: "50+", label: "Regions", icon: <Globe className="text-[#00F0FF]" /> },
              { val: "10K+", label: "Successes", icon: <Award className="text-[#F5B700]" /> }
            ].map((stat, i) => (
              <GlassCard key={i} className="p-10 text-center flex flex-col items-center group border-4 border-transparent hover:border-[#111111]">
                <div className="w-20 h-20 rounded-[28px] bg-[#111111] border-2 border-white/20 shadow-lg flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  {React.cloneElement(stat.icon, { size: 36 })}
                </div>
                <div className="text-4xl md:text-6xl font-black tracking-tighter text-[#111111]">{stat.val}</div>
                <p className="text-[12px] font-black text-[#6B1D1D] uppercase tracking-[0.3em] mt-3">{stat.label}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Initiatives */}
      <section id="initiatives" className="py-32 px-6 bg-[#00F0FF]/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            badge="Live Impact" 
            title="Ongoing Initiatives" 
            subtitle="Explore the specialized projects currently transforming student lives through coaching, mentorship, and mental wellness."
          />
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                title: "Project Astra", 
                icon: <Rocket className="text-[#00F0FF]" />, 
                desc: "Lighting up futures by providing critical sponsorships, coaching materials, and direct financial support for deserving students.",
                tag: "Sponsorship & Support"
              },
              { 
                title: "Project Yuva", 
                icon: <HandHelping className="text-[#F5B700]" />, 
                desc: "Empowering the next generation to connect with society, fostering leadership, and enabling youth to give back through community service.",
                tag: "Social Connection"
              },
              { 
                title: "Project Soul Sync", 
                icon: <Moon className="text-[#6B1D1D]" />, 
                desc: "Focusing on mental well-being and emotional resilience through meditation sessions and stress-management workshops.",
                tag: "Mental Wellness"
              }
            ].map((init, i) => (
              <GlassCard key={i} className="p-12 flex flex-col items-start text-left h-full border-2 border-[#111111]/10 hover:border-[#111111]">
                <div className="w-20 h-20 rounded-[32px] bg-[#111111] shadow-[8px_8px_0_#F5B700] flex items-center justify-center mb-10 group-hover:-translate-y-2 transition-transform">
                   {React.cloneElement(init.icon, { size: 40 })}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#111111] bg-[#00F0FF] border-2 border-[#111111] px-4 py-2 rounded-xl mb-6 shadow-[2px_2px_0_#111111]">
                  {init.tag}
                </span>
                <h3 className="text-4xl font-black tracking-tight mb-6">{init.title}</h3>
                <p className="text-gray-600 font-bold leading-relaxed mb-12 flex-grow text-lg">{init.desc}</p>
                <button className="flex items-center gap-3 font-black text-[#111111] text-xl uppercase tracking-widest hover:text-[#6B1D1D] hover:gap-6 transition-all duration-300 interactive">
                  Learn More <ArrowRight strokeWidth={3} size={24} />
                </button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section id="principles" className="py-32 px-6 bg-[#111111] rounded-[64px] mx-4 relative overflow-hidden border-8 border-[#F5B700]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00F0FF]/20 via-[#111111] to-[#111111]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24 space-y-6">
            <span className="text-[#00F0FF] text-sm font-black uppercase tracking-[0.5em]">The Core Pillars</span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter drop-shadow-lg">Our Guiding Principles</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { title: "Right Guidance", icon: <Compass />, color: "text-[#00F0FF]", desc: "Perfect timing for career breakthroughs." },
              { title: "Education for All", icon: <Globe />, color: "text-[#F5B700]", desc: "Democratizing knowledge globally." },
              { title: "Humanity in Youth", icon: <Heart />, color: "text-rose-500", desc: "Empathy is our strongest asset." },
              { title: "Emotional Well-being", icon: <BrainCircuit />, color: "text-purple-500", desc: "Mental health comes first." },
              { title: "Rural Empowerment", icon: <Sprout />, color: "text-emerald-500", desc: "Bridging the village-tech divide." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border-2 border-white/10 p-10 rounded-[40px] text-center group hover:bg-[#00F0FF] hover:border-[#00F0FF] transition-all hover:-translate-y-4 shadow-[0_0_0_transparent] hover:shadow-[12px_12px_0_#F5B700] interactive">
                <div className={`w-20 h-20 mx-auto mb-8 rounded-[32px] bg-white/10 flex items-center justify-center ${item.color} group-hover:bg-[#111111] group-hover:text-[#00F0FF] border-2 border-white/20 group-hover:border-[#111111] transition-all`}>
                  {React.cloneElement(item.icon, { size: 36, strokeWidth: 2.5 })}
                </div>
                <h4 className="text-2xl font-black text-white group-hover:text-[#111111] tracking-tight mb-4">{item.title}</h4>
                <p className="text-sm text-white/80 group-hover:text-[#111111] font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Hub */}
      <section id="resources" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
            <div className="space-y-6 max-w-xl">
              <span className="text-[#00F0FF] bg-[#111111] px-4 py-2 rounded-lg text-xs font-black uppercase tracking-[0.3em] shadow-[4px_4px_0_#F5B700]">Resource Vault</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter">The Student Intel Hub.</h2>
              <p className="text-xl text-gray-600 font-bold">Access over 1 million files curated by toppers and industry experts.</p>
            </div>
            <Button variant="primary" className="h-16 shadow-[8px_8px_0_#00F0FF]">Browse Catalog <ChevronRight strokeWidth={3} /></Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Ultimate Notes", count: "500+ PDFs", icon: <FileText className="text-[#111111]" /> },
              { title: "DSA Sheets", count: "30+ Patterns", icon: <Code className="text-[#111111]" /> },
              { title: "Placement Prep", count: "Company Wise", icon: <Target className="text-[#111111]" /> },
              { title: "Interview Logs", count: "MAANG Verified", icon: <TrendingUp className="text-[#111111]" /> },
              { title: "Career Maps", count: "Step-by-step", icon: <Compass className="text-[#111111]" /> },
              { title: "AI Daily", count: "Trends Intel", icon: <BrainCircuit className="text-[#111111]" /> }
            ].map((item, i) => (
              <GlassCard key={i} className="p-12 flex flex-col group cursor-pointer hover:border-[#111111]">
                <div className="w-20 h-20 bg-[#00F0FF] border-4 border-[#111111] shadow-[4px_4px_0_#111111] rounded-3xl flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform">
                   {React.cloneElement(item.icon, { size: 36, strokeWidth: 2.5 })}
                </div>
                <h3 className="text-3xl font-black tracking-tight mb-3 group-hover:text-[#00F0FF] transition-colors">{item.title}</h3>
                <p className="text-xs font-black text-[#6B1D1D] mb-10 tracking-[0.2em] uppercase">{item.count}</p>
                <div className="flex items-center gap-3 font-black text-[#111111] uppercase tracking-widest group-hover:text-[#00F0FF] group-hover:gap-6 transition-all mt-auto text-lg">
                  Open Library <ArrowRight strokeWidth={3} size={24} />
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs / AI Trends */}
      <section id="blogs" className="py-32 px-6 bg-[#111111] text-white border-y-8 border-[#00F0FF] relative">
        <div className="max-w-7xl mx-auto">
          <GlassCard className="p-14 lg:p-24 overflow-hidden relative border-none shadow-none bg-transparent" hover={false} interactive={false}>
             <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5B700]/20 rounded-full blur-[100px] -z-10 animate-pulse" />
             <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="space-y-12">
                   <div className="inline-block px-5 py-2 bg-[#00F0FF] text-[#111111] rounded-xl text-xs font-black uppercase tracking-widest shadow-[4px_4px_0_#F5B700] rotate-2">The Daily Intel</div>
                   <h2 className="text-6xl lg:text-8xl font-black tracking-tighter drop-shadow-md">AI Trends.<br/><span className="text-[#00F0FF]">Read Everyday.</span></h2>
                   <p className="text-2xl text-white/80 font-bold leading-relaxed tracking-tight">
                     Stay 10x ahead with our curated insights on AI, modern development frameworks, and career hacks for the future.
                   </p>
                   <Button variant="gold" className="h-20 px-12 text-xl shadow-[8px_8px_0_#00F0FF]" onClick={() => window.open('https://yourwordpresssite.com/blog', '_blank')}>
                      Visit Intel Hub <ExternalLink size={28} strokeWidth={3} />
                   </Button>
                </div>
                <div className="space-y-8">
                   <div className="p-10 bg-white/10 backdrop-blur-md rounded-[40px] border-2 border-white/20 hover:border-[#00F0FF] hover:bg-[#111111] shadow-2xl transition-all cursor-pointer group interactive hover:-translate-y-2">
                      <div className="flex gap-4 items-center mb-6">
                        <Clock size={20} className="text-[#F5B700]" /> <span className="text-xs font-black text-[#F5B700] uppercase tracking-widest">3 Min Read</span>
                      </div>
                      <h4 className="text-3xl font-black mb-4 group-hover:text-[#00F0FF] transition-colors tracking-tight">The 2026 Developer Roadmap.</h4>
                      <p className="text-white/70 font-bold text-lg">How to navigate the AI-led engineering era and stay relevant.</p>
                   </div>
                   <div className="p-10 bg-white/10 backdrop-blur-md rounded-[40px] border-2 border-white/20 hover:border-[#00F0FF] hover:bg-[#111111] shadow-2xl transition-all cursor-pointer group interactive hover:-translate-y-2">
                      <div className="flex gap-4 items-center mb-6">
                        <Clock size={20} className="text-[#00F0FF]" /> <span className="text-xs font-black text-[#00F0FF] uppercase tracking-widest">5 Min Read</span>
                      </div>
                      <h4 className="text-3xl font-black mb-4 group-hover:text-[#00F0FF] transition-colors tracking-tight">Mastering Prompt Engineering.</h4>
                      <p className="text-white/70 font-bold text-lg">Unlock the true power of LLMs for your semester research.</p>
                   </div>
                </div>
             </div>
          </GlassCard>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Success Stories" title="Voices of Impact" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "Arjun Rao", role: "SDE @ Microsoft", text: "The DSA sheets changed my career. I went from no job offers to Microsoft in months." },
              { name: "Priya Das", role: "Final Year Student", text: "Finally a place where I found quality subject notes for free. Saved my exams!" },
              { name: "Siddharth M", role: "Intern @ Google", text: "The mentorship sessions are elite. It feels like a premium program but it's free." }
            ].map((t, i) => (
              <GlassCard key={i} className="p-12 flex flex-col justify-between border-4 border-[#111111]/5 hover:border-[#111111]">
                <div>
                  <div className="flex gap-2 mb-10 text-[#00F0FF] bg-[#111111] w-fit px-4 py-2 rounded-xl shadow-[4px_4px_0_#F5B700] rotate-[-2deg]">
                    {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-2xl font-bold text-[#111111] leading-relaxed mb-12 tracking-tight">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-6 pt-10 border-t-4 border-[#111111]/10">
                  <div className="w-16 h-16 bg-[#00F0FF] border-2 border-[#111111] text-[#111111] rounded-2xl flex items-center justify-center font-black text-2xl shadow-[4px_4px_0_#111111]">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-black text-2xl tracking-tight text-[#111111]">{t.name}</h4>
                    <p className="text-[10px] font-black text-[#6B1D1D] uppercase tracking-[0.2em] mt-1">{t.role}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-[#00F0FF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-14">
              <div className="mb-20 space-y-6 text-left">
                <span className="inline-block px-5 py-2 bg-[#111111] text-[#F5B700] rounded-xl text-xs font-black uppercase tracking-[0.3em] border-2 border-[#111111] shadow-[4px_4px_0_#fff] rotate-[-2deg]">
                  Contact
                </span>
                <h2 className="text-6xl md:text-8xl font-black text-[#111111] tracking-tighter leading-[0.9]">Let's Start a <br/>Conversation</h2>
              </div>
              <div className="space-y-10">
                {[
                  { icon: <Mail />, label: "Email", value: "connect@pkelibrary.org" },
                  { icon: <Phone />, label: "Support", value: "+91 99887 76655" },
                  { icon: <MapPin />, label: "Location", value: "India" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 items-center group cursor-pointer interactive">
                    <div className="w-20 h-20 bg-[#111111] rounded-[24px] flex items-center justify-center text-[#00F0FF] border-4 border-[#111111] shadow-[6px_6px_0_#F5B700] group-hover:rotate-12 group-hover:bg-[#F5B700] group-hover:text-[#111111] transition-all duration-300">
                      {React.cloneElement(item.icon, { size: 32 })}
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-[#111111]/60 uppercase tracking-[0.3em] mb-1">{item.label}</div>
                      <div className="text-3xl font-black tracking-tight text-[#111111]">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form className="bg-[#111111] p-12 lg:p-16 rounded-[48px] border-4 border-[#111111] space-y-8 shadow-[24px_24px_0_#F5B700] relative overflow-hidden group">
              <div className="grid md:grid-cols-2 gap-8">
                 <input placeholder="First Name" className="w-full bg-[#1C1C1E] text-white px-8 py-5 rounded-2xl border-2 border-white/10 focus:border-[#00F0FF] focus:bg-[#111111] outline-none font-bold text-lg transition-all" />
                 <input placeholder="Last Name" className="w-full bg-[#1C1C1E] text-white px-8 py-5 rounded-2xl border-2 border-white/10 focus:border-[#00F0FF] focus:bg-[#111111] outline-none font-bold text-lg transition-all" />
              </div>
              <input placeholder="Email" className="w-full bg-[#1C1C1E] text-white px-8 py-5 rounded-2xl border-2 border-white/10 focus:border-[#00F0FF] focus:bg-[#111111] outline-none font-bold text-lg transition-all" />
              <textarea placeholder="Your message..." rows="5" className="w-full bg-[#1C1C1E] text-white px-8 py-5 rounded-2xl border-2 border-white/10 focus:border-[#00F0FF] focus:bg-[#111111] outline-none font-bold text-lg resize-none transition-all"></textarea>
              <Button variant="primary" className="w-full h-20 text-xl shadow-[8px_8px_0_#F5B700]">Send Message <Send size={24} strokeWidth={3} /></Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white pt-32 pb-16 relative overflow-hidden border-t-8 border-[#F5B700]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
             <div className="space-y-10">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#00F0FF] border-2 border-[#111111] shadow-[4px_4px_0_#F5B700] rounded-2xl flex items-center justify-center text-[#111111] rotate-[-2deg]">
                    <GraduationCap size={36} strokeWidth={3} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black text-3xl tracking-tighter leading-none">PKELIBRARY</span>
                    <span className="text-[10px] font-black text-[#00F0FF] tracking-[0.4em] uppercase">Foundation</span>
                  </div>
                </div>
                <p className="text-white/60 font-bold leading-relaxed text-lg">The right guidance at the right time. A global non-profit initiative dedicated to student success and rural empowerment.</p>
                <div className="flex gap-6">
                  {[Briefcase, Camera, Video].map((Icon, i) => (
                    <a key={i} href="#" className="w-14 h-14 rounded-2xl bg-white/5 border-2 border-white/10 flex items-center justify-center text-[#00F0FF] hover:bg-[#00F0FF] hover:text-[#111111] hover:shadow-[4px_4px_0_#F5B700] hover:-translate-y-1 transition-all interactive">
                      <Icon size={24} strokeWidth={2.5} />
                    </a>
                  ))}
                </div>
             </div>
             
             <div>
               <h4 className="font-black mb-10 uppercase tracking-[0.3em] text-sm text-[#F5B700]">Resources</h4>
               <ul className="space-y-6 text-lg font-bold text-white/70">
                 {['Home', 'Impact', 'Initiatives', 'Intel Hub'].map(item => (
                   <li key={item}><button onClick={() => scrollTo(item.toLowerCase())} className="hover:text-[#00F0FF] hover:translate-x-2 transition-transform interactive">{item}</button></li>
                 ))}
               </ul>
             </div>

             <div>
               <h4 className="font-black mb-10 uppercase tracking-[0.3em] text-sm text-[#F5B700]">Join Us</h4>
               <ul className="space-y-6 text-lg font-bold text-white/70">
                 {['WhatsApp Group', 'Telegram', 'Alumni Network', 'Partner Program'].map(item => (
                   <li key={item}><a href="#" className="hover:text-[#00F0FF] hover:translate-x-2 transition-transform interactive">{item}</a></li>
                 ))}
               </ul>
             </div>

             <GlassCard className="p-10 h-fit border-2 border-white/20 bg-white/5 shadow-[8px_8px_0_#00F0FF]" hover={false}>
               <h4 className="text-2xl font-black mb-4 text-white tracking-tight">Support Mission</h4>
               <p className="text-sm text-white/70 font-bold mb-10">We are non-profit and run by volunteers. Help us keep education free.</p>
               <Button variant="gold" className="w-full text-lg py-5 h-16 shadow-[6px_6px_0_#111111]">Get Involved</Button>
             </GlassCard>
          </div>
          
          <div className="pt-12 border-t-2 border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">© 2026 PKELIBRARY FOUNDATION. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-12 text-[10px] font-black text-[#00F0FF] uppercase tracking-[0.3em]">
              <a href="#" className="hover:text-white transition-colors interactive">Privacy</a>
              <a href="#" className="hover:text-white transition-colors interactive">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      {scrolled && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-10 right-10 w-20 h-20 bg-[#00F0FF] text-[#111111] rounded-full flex items-center justify-center shadow-[6px_6px_0_#111111] z-[110] border-4 border-[#111111] animate-fade-in hover:scale-110 active:scale-95 transition-all interactive">
          <ChevronRight className="-rotate-90" strokeWidth={4} size={36} />
        </button>
      )}

    </div>
  );
}
