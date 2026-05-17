import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, ArrowRight, MessageCircle, Mail, Phone, MapPin, Camera, Video, Briefcase, Send, FileText, Code, Target, Menu, X, ChevronRight, Star, ExternalLink, Zap, Globe, Award, TrendingUp, Clock, BrainCircuit, Heart, Compass, Sprout, Lightbulb, Users, Moon, HandHelping, Rocket
} from 'lucide-react';
import { FaLinkedin, FaXTwitter, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa6';

const COLORS = {
  maroon: '#6B1D1D',
  gold: '#F5B700',
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

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const GlassCard = ({ children, className = "", hover = true, interactive = false }) => (
  <div className={`
    backdrop-blur-xl bg-white/60 border border-white/60 rounded-[28px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] relative overflow-hidden
    ${hover ? 'hover:bg-white/90 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-white transition-all duration-500' : ''}
    ${interactive ? 'interactive hover:-translate-y-1' : ''}
    ${className}
  `}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    {children}
  </div>
);

const Button = ({ children, variant = 'primary', className = '', onClick, href }) => {
  const baseStyles = "relative px-6 py-4 rounded-2xl font-bold transition-all duration-500 flex items-center justify-center gap-2 overflow-hidden active:scale-95 z-10 w-full sm:w-auto font-jakarta interactive group";
  const highlight = <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0 rounded-2xl"></div>;
  
  const variants = {
    primary: `bg-[#6B1D1D] text-white shadow-md shadow-[#6B1D1D]/20 hover:shadow-xl hover:shadow-[#6B1D1D]/30 border border-[#6B1D1D]/50`,
    gold: `bg-[#F5B700] text-[#111111] shadow-md shadow-[#F5B700]/20 hover:shadow-xl hover:shadow-[#F5B700]/30 border border-[#F5B700]/50`,
    glass: `backdrop-blur-md bg-white/20 border border-white/40 text-[#111111] hover:bg-white/50`,
    outline: `border-2 border-gray-200 text-gray-700 hover:border-[#6B1D1D] hover:text-[#6B1D1D] bg-white/50 hover:bg-white`,
  };

  const content = <><span className="flex items-center gap-2 z-10 relative">{children}</span>{(variant === 'primary' || variant === 'gold') && highlight}</>;

  if (href) {
    return <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>{content}</a>;
  }
  return <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>{content}</button>;
};

const SectionHeader = ({ badge, title, subtitle, centered = true }) => (
  <div className={`mb-16 space-y-4 reveal ${centered ? 'text-center' : 'text-left'}`}>
    <span className="inline-block px-4 py-1.5 bg-[#6B1D1D]/5 text-[#6B1D1D] rounded-full text-[10px] font-black uppercase tracking-widest border border-[#6B1D1D]/10">
      {badge}
    </span>
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight leading-tight">{title}</h2>
    {subtitle && <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">{subtitle}</p>}
  </div>
);

const Marquee = () => {
  const text = "FREE RESOURCES • ELITE MENTORSHIP • OPEN TO ALL • ZERO COST • ";
  return (
    <div className="w-full bg-[#6B1D1D] text-white py-5 overflow-hidden relative border-y border-[#6B1D1D]/20 -rotate-1 scale-105 z-40 my-16 shadow-xl reveal">
      <div className="animate-marquee whitespace-nowrap text-xl md:text-3xl font-black uppercase tracking-[0.15em] opacity-90">
        {text.repeat(10)}
      </div>
    </div>
  );
};



export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { x, y, isHovering } = useMousePosition();
  
  useScrollReveal();

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
    <div className="min-h-screen bg-[#FDFCFB] text-[#1C1C1E] selection:bg-[#F5B700]/30 font-jakarta antialiased overflow-x-hidden relative">
      
      {/* Gen Z Global Aesthetics */}
      <div className="noise-overlay" />
      <div 
        className={`custom-cursor hidden md:block ${isHovering ? 'hovering' : ''}`} 
        style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }} 
      />

      {/* Reactive Mesh Background Accents */}
      <div 
        className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#F5B700]/10 blur-[120px] rounded-full -z-10 animate-pulse transition-transform duration-1000 ease-out" 
        style={{ transform: `translate(${x * 0.05}px, ${y * 0.05}px)` }}
      />
      <div 
        className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#6B1D1D]/5 blur-[120px] rounded-full -z-10 transition-transform duration-1000 ease-out" 
        style={{ transform: `translate(${x * -0.05}px, ${y * -0.05}px)` }}
      />

      {/* Floating Header */}
      <nav className={`fixed w-full z-[100] transition-all duration-700 px-4 md:px-8 ${scrolled ? 'top-3' : 'top-5'}`}>
        <div className={`max-w-7xl mx-auto flex items-center justify-between py-1.5 px-3 md:py-2 md:px-4 rounded-[32px] border transition-all duration-700 ${scrolled ? 'bg-white/60 backdrop-blur-[40px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] border-white/40' : 'bg-transparent border-transparent'}`}>
          <div className="flex items-center px-2 cursor-pointer group interactive" onClick={() => scrollTo('home')}>
            <img 
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="PkeLibrary Foundation" 
              className="h-10 md:h-12 w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-out" 
            />
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((name) => (
              <button key={name} onClick={() => scrollTo(name.toLowerCase())} className="px-4 py-2 rounded-2xl text-sm font-bold text-gray-600 hover:text-[#6B1D1D] hover:bg-[#6B1D1D]/5 transition-all interactive">
                {name}
              </button>
            ))}
            <Button variant="primary" className="ml-4 py-2.5 px-6 rounded-2xl text-xs">Join Community</Button>
          </div>

          <button className="lg:hidden p-3 rounded-2xl bg-white/50 backdrop-blur-md shadow-sm border border-white/50 hover:bg-white transition-colors interactive" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Fixed Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-4 px-4 z-[110] animate-slide-up">
            <GlassCard className="p-4 flex flex-col gap-1 max-h-[75vh] overflow-y-auto" hover={false}>
              {navLinks.map((name) => (
                <button 
                  key={name} 
                  onClick={() => scrollTo(name.toLowerCase())} 
                  className="text-left w-full p-4 rounded-2xl text-lg font-bold text-gray-800 hover:bg-[#6B1D1D]/5 hover:text-[#6B1D1D] active:bg-[#6B1D1D] active:text-white transition-all flex items-center justify-between group interactive"
                >
                  {name}
                  <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
              <div className="p-2 pt-4">
                <Button variant="primary" className="h-14 text-md w-full shadow-xl">Join Student Portal</Button>
              </div>
            </GlassCard>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-16 lg:pt-56 lg:pb-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-3/5 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/60 backdrop-blur-md rounded-full shadow-sm border border-white/50 animate-slide-up">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5B700] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F5B700]"></span>
                </span>
                <span className="text-[10px] font-black text-[#6B1D1D] uppercase tracking-[0.2em]">Live Mentorship Open</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] text-[#111111] animate-slide-up" style={{animationDelay: '100ms'}}>
                Guidance.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B1D1D] via-[#6B1D1D] to-[#F5B700]">Evolutionary.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{animationDelay: '200ms'}}>
                PkeLibrary Foundation is an elite student initiative delivering premium study materials and mentorship at zero cost.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{animationDelay: '300ms'}}>
                <Button variant="primary" className="h-16 px-10 text-lg shadow-2xl">
                  Get Started <ArrowRight size={22} />
                </Button>
                <Button variant="outline" className="h-16 px-10 text-lg border-white/50 backdrop-blur-sm">
                  View Catalog
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-8 pt-6 animate-slide-up" style={{animationDelay: '400ms'}}>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+45}`} className="w-12 h-12 rounded-full border-4 border-white shadow-md interactive" alt="User" />
                  ))}
                </div>
                <div className="h-8 w-px bg-gray-200 hidden sm:block" />
                <div className="text-left">
                  <div className="text-xl font-black">1.2M+ Assets</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-jakarta">Shared Globally</div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/5 relative interactive animate-slide-up" style={{animationDelay: '200ms'}}>
              <div className="bg-white/60 backdrop-blur-xl p-3 rounded-[40px] border border-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.08)] rotate-2 hover:rotate-0 transition-transform duration-700">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" className="rounded-[32px] w-full aspect-[4/5] object-cover shadow-inner" alt="Hero" />
                <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-2xl p-6 rounded-[28px] shadow-2xl border border-white hidden md:block animate-float">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F5B700] text-white rounded-2xl flex items-center justify-center shadow-lg">
                      <Zap size={24} fill="currentColor" />
                    </div>
                    <div>
                      <div className="font-black text-lg">Instant Access</div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase">100% Free Forever</div>
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
      <section id="impact" className="py-12 lg:py-24 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { val: "1.2M+", label: "Materials", icon: <FileText className="text-blue-500" /> },
              { val: "100K+", label: "Members", icon: <Users className="text-purple-500" /> },
              { val: "50+", label: "Regions", icon: <Globe className="text-emerald-500" /> },
              { val: "10K+", label: "Successes", icon: <Award className="text-[#F5B700]" /> }
            ].map((stat, i) => (
              <GlassCard key={i} className={`p-8 text-center flex flex-col items-center group reveal reveal-delay-${(i % 4) * 100}`} interactive={true}>
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-5xl font-black tracking-tight text-[#111111]">{stat.val}</div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">{stat.label}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Initiatives */}
      <section id="initiatives" className="py-24 px-4 md:px-8 bg-white/50 border-y border-white">
        <div className="max-w-7xl mx-auto w-full">
          <SectionHeader 
            badge="Live Impact" 
            title="Ongoing Initiatives" 
            subtitle="Explore the specialized projects currently transforming student lives through coaching, mentorship, and mental wellness."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Project Astra", 
                icon: <Rocket className="text-blue-600" />, 
                desc: "Lighting up futures by providing critical sponsorships, coaching materials, and direct financial support for deserving students.",
                tag: "Sponsorship & Support"
              },
              { 
                title: "Project Yuva", 
                icon: <HandHelping className="text-[#6B1D1D]" />, 
                desc: "Empowering the next generation to connect with society, fostering leadership, and enabling youth to give back through community service.",
                tag: "Social Connection"
              },
              { 
                title: "Project Soul Sync", 
                icon: <Moon className="text-indigo-600" />, 
                desc: "Focusing on mental well-being and emotional resilience through meditation sessions and stress-management workshops.",
                tag: "Mental Wellness"
              }
            ].map((init, i) => (
              <GlassCard key={i} className={`p-10 flex flex-col items-start text-left h-full group reveal reveal-delay-${i * 100}`} interactive={true}>
                <div className="w-16 h-16 rounded-[24px] bg-white shadow-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                   {React.cloneElement(init.icon, { size: 32 })}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#6B1D1D] bg-[#6B1D1D]/5 px-3 py-1 rounded-full mb-4 font-jakarta border border-[#6B1D1D]/10">
                  {init.tag}
                </span>
                <h3 className="text-3xl font-black mb-4">{init.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed mb-10 flex-grow">{init.desc}</p>
                <button className="flex items-center gap-3 font-black text-[#111111] hover:text-[#6B1D1D] hover:gap-6 transition-all duration-300 interactive">
                  Learn More <ArrowRight size={20} />
                </button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section id="principles" className="py-24 px-4 md:px-8 relative reveal">
        <div className="max-w-7xl mx-auto w-full bg-[#111111] rounded-[64px] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#6B1D1D]/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-center mb-20 space-y-4">
              <span className="text-[#F5B700] text-xs font-black uppercase tracking-[0.4em]">The Core Pillars</span>
              <h2 className="text-4xl md:text-6xl font-black text-white">Our Guiding Principles</h2>
            </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Right Guidance", icon: <Compass />, color: "text-blue-500", desc: "Perfect timing for career breakthroughs." },
              { title: "Education for All", icon: <Globe />, color: "text-[#F5B700]", desc: "Democratizing knowledge globally." },
              { title: "Humanity in Youth", icon: <Heart />, color: "text-rose-500", desc: "Empathy is our strongest asset." },
              { title: "Emotional Well-being", icon: <BrainCircuit />, color: "text-purple-500", desc: "Mental health comes first." },
              { title: "Rural Empowerment", icon: <Sprout />, color: "text-emerald-500", desc: "Bridging the village-tech divide." }
            ].map((item, i) => (
              <div key={i} className={`bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[40px] text-center group hover:bg-white/10 transition-all interactive reveal reveal-delay-${i * 100}`}>
                <div className={`w-16 h-16 mx-auto mb-8 rounded-[24px] bg-white/5 flex items-center justify-center ${item.color} shadow-lg group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(item.icon, { size: 32 })}
                </div>
                <h4 className="text-xl font-black text-white mb-4">{item.title}</h4>
                <p className="text-xs text-white/80 font-medium leading-relaxed font-jakarta">{item.desc}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Resources Hub */}
      <section id="resources" className="py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 reveal">
            <div className="space-y-4 max-w-xl">
              <span className="text-[#6B1D1D] text-xs font-black uppercase tracking-[0.3em]">Resource Vault</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight">The Student Intel Hub.</h2>
              <p className="text-lg text-gray-500 font-medium">Access over 1 million files curated by toppers and industry experts.</p>
            </div>
            <Button variant="outline" className="h-14">Browse Catalog <ChevronRight /></Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Ultimate Notes", count: "500+ PDFs", icon: <FileText className="text-blue-500" /> },
              { title: "DSA Sheets", count: "30+ Patterns", icon: <Code className="text-purple-500" /> },
              { title: "Placement Prep", count: "Company Wise", icon: <Target className="text-[#F5B700]" /> },
              { title: "Interview Logs", count: "MAANG Verified", icon: <TrendingUp className="text-emerald-500" /> },
              { title: "Career Maps", count: "Step-by-step", icon: <Compass className="text-rose-500" /> },
              { title: "AI Daily", count: "Trends Intel", icon: <BrainCircuit className="text-orange-500" /> }
            ].map((item, i) => (
              <GlassCard key={i} className={`p-10 flex flex-col group cursor-pointer reveal reveal-delay-${(i % 3) * 100}`} interactive={true}>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                   {React.cloneElement(item.icon, { size: 32 })}
                </div>
                <h3 className="text-2xl font-black mb-2">{item.title}</h3>
                <p className="text-sm font-bold text-gray-400 mb-8 tracking-widest font-jakarta">{item.count}</p>
                <div className="flex items-center gap-3 font-black text-[#111111] group-hover:text-[#6B1D1D] group-hover:gap-6 transition-all mt-auto">
                  Open Library <ArrowRight size={20} />
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs / AI Trends */}
      <section id="blogs" className="py-24 px-4 md:px-8 bg-[#FAFAFA] border-y border-gray-100 relative reveal">
        <div className="max-w-7xl mx-auto w-full">
          <GlassCard className="p-12 lg:p-20 overflow-hidden relative border-white" hover={false}>
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5B700]/10 rounded-full blur-3xl -z-10" />
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-10 reveal">
                   <div className="inline-block px-4 py-1.5 bg-[#111111] text-[#F5B700] rounded-full text-[10px] font-black uppercase tracking-widest">The Daily Intel</div>
                   <h2 className="text-5xl lg:text-7xl font-black tracking-tighter">AI Trends.<br/><span className="text-[#6B1D1D]">Read Everyday.</span></h2>
                   <p className="text-xl text-gray-500 font-medium leading-relaxed font-jakarta">
                     Stay 10x ahead with our curated insights on AI, modern development frameworks, and career hacks for the future.
                   </p>
                   <Button variant="primary" className="h-16 px-12 text-lg" onClick={() => window.open('https://yourwordpresssite.com/blog', '_blank')}>
                      Visit Intel Hub <ExternalLink size={22} />
                   </Button>
                </div>
                <div className="space-y-6">
                   <div className="p-8 bg-white/60 backdrop-blur-md rounded-[32px] shadow-sm border border-white hover:shadow-xl hover:bg-white transition-all cursor-pointer group interactive reveal reveal-delay-100">
                      <div className="flex gap-4 items-center mb-4">
                        <Clock size={16} className="text-gray-400" /> <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">3 Min Read</span>
                      </div>
                      <h4 className="text-2xl font-black mb-2 group-hover:text-[#6B1D1D] transition-colors">The 2026 Developer Roadmap.</h4>
                      <p className="text-gray-500 font-medium font-jakarta">How to navigate the AI-led engineering era and stay relevant.</p>
                   </div>
                   <div className="p-8 bg-white/60 backdrop-blur-md rounded-[32px] shadow-sm border border-white hover:shadow-xl hover:bg-white transition-all cursor-pointer group interactive reveal reveal-delay-200">
                      <div className="flex gap-4 items-center mb-4">
                        <Clock size={16} className="text-gray-400" /> <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">5 Min Read</span>
                      </div>
                      <h4 className="text-2xl font-black mb-2 group-hover:text-[#6B1D1D] transition-colors">Mastering Prompt Engineering.</h4>
                      <p className="text-gray-500 font-medium font-jakarta">Unlock the true power of LLMs for your semester research.</p>
                   </div>
                </div>
             </div>
          </GlassCard>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <SectionHeader badge="Success Stories" title="Voices of Impact" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Arjun Rao", role: "SDE @ Microsoft", text: "The DSA sheets changed my career. I went from no job offers to Microsoft in months." },
              { name: "Priya Das", role: "Final Year Student", text: "Finally a place where I found quality subject notes for free. Saved my exams!" },
              { name: "Siddharth M", role: "Intern @ Google", text: "The mentorship sessions are elite. It feels like a premium program but it's free." }
            ].map((t, i) => (
              <GlassCard key={i} className={`p-12 flex flex-col justify-between reveal reveal-delay-${(i % 3) * 100}`} interactive={true}>
                <div>
                  <div className="flex gap-1 mb-8 text-[#F5B700]">
                    {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-xl font-medium text-gray-600 italic leading-relaxed mb-12">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-4 pt-8 border-t border-gray-100">
                  <div className="w-12 h-12 bg-[#6B1D1D]/10 text-[#6B1D1D] rounded-xl flex items-center justify-center font-black text-xl">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-black text-[#111111]">{t.name}</h4>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-jakarta">{t.role}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 px-4 md:px-8 bg-white reveal">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <SectionHeader badge="Contact" title={<>Let's Start a <br/>Conversation</>} centered={false} />
              <div className="space-y-8">
                {[
                  { icon: <Mail />, label: "Email", value: "connect@pkelibrary.org" },
                  { icon: <Phone />, label: "Support", value: "+91 99887 76655" },
                  { icon: <MapPin />, label: "Location", value: "India" }
                ].map((item, i) => (
                  <div key={i} className={`flex gap-6 items-center group cursor-pointer interactive reveal reveal-delay-${i * 100}`}>
                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-[#6B1D1D] border border-gray-100 group-hover:bg-[#6B1D1D] group-hover:text-white transition-all duration-500 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{item.label}</div>
                      <div className="text-xl font-black group-hover:text-[#6B1D1D] transition-colors">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form className="bg-gray-50 p-10 lg:p-14 rounded-[48px] border border-gray-100 space-y-6 shadow-[0_24px_60px_rgba(0,0,0,0.05)] relative overflow-hidden group reveal reveal-delay-200">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5B700]/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl -z-10" />
              <div className="grid md:grid-cols-2 gap-6">
                 <input placeholder="First Name" className="w-full bg-white px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#6B1D1D] outline-none font-bold font-jakarta" />
                 <input placeholder="Last Name" className="w-full bg-white px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#6B1D1D] outline-none font-bold font-jakarta" />
              </div>
              <input placeholder="Email" className="w-full bg-white px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#6B1D1D] outline-none font-bold font-jakarta" />
              <textarea placeholder="Your message..." rows="4" className="w-full bg-white px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#6B1D1D] outline-none font-bold font-jakarta resize-none"></textarea>
              <Button variant="primary" className="w-full h-16 text-lg">Send Message <Send size={20} /></Button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Community Highlight Section */}
      <section className="py-24 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 reveal">
        <div className="max-w-7xl mx-auto w-full text-center relative z-10">
          <SectionHeader 
            badge="Connect With Us" 
            title="Join the Global Network." 
            subtitle="Follow us on social media for daily tips, live mentorship announcements, and exclusive resources."
          />
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-12">
            {[
              { icon: <FaYoutube size={32} />, label: "YouTube", sub: "100k+ Subs", color: "text-[#FF0000]", bg: "hover:bg-[#FF0000]", delay: 0 },
              { icon: <FaLinkedin size={32} />, label: "LinkedIn", sub: "Professional", color: "text-[#0077b5]", bg: "hover:bg-[#0077b5]", delay: 100 },
              { icon: <FaInstagram size={32} />, label: "Instagram", sub: "Daily Tips", color: "text-[#E1306C]", bg: "hover:bg-[#E1306C]", delay: 200 },
              { icon: <FaXTwitter size={32} />, label: "Twitter (X)", sub: "Tech News", color: "text-[#1DA1F2]", bg: "hover:bg-[#1DA1F2]", delay: 300 },
              { icon: <FaGithub size={32} />, label: "GitHub", sub: "Open Source", color: "text-[#333]", bg: "hover:bg-[#333]", delay: 400 }
            ].map((social, i) => (
              <a 
                key={i} 
                href="#"
                className={`group relative flex flex-col items-center justify-center p-8 bg-white rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 w-40 h-40 md:w-48 md:h-48 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] interactive reveal`}
                style={{ transitionDelay: `${social.delay}ms` }}
              >
                <div className={`absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${social.bg.replace('hover:', 'bg-')}`}></div>
                <div className={`w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 ${social.color}`}>
                  {social.icon}
                </div>
                <h4 className="font-black text-[#111111]">{social.label}</h4>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1 group-hover:text-gray-600 transition-colors">{social.sub}</p>
                
                {/* Glow Effect */}
                <div className={`absolute -inset-2 rounded-[40px] opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10 ${social.bg.replace('hover:', 'bg-')}`}></div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-10 w-72 h-72 bg-[#6B1D1D]/5 rounded-full blur-[80px] -translate-y-1/2 -z-10"></div>
        <div className="absolute top-1/2 right-10 w-72 h-72 bg-[#F5B700]/5 rounded-full blur-[80px] -translate-y-1/2 -z-10"></div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white pt-32 pb-16 relative overflow-hidden rounded-t-[80px]">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-20">
             <div className="space-y-10 reveal">
                <div className="flex items-center interactive">
                  <div className="bg-white p-3 rounded-[24px] shadow-lg hover:scale-105 transition-transform duration-500 ease-out">
                    <img 
                      src={`${import.meta.env.BASE_URL}logo.png`}
                      alt="PkeLibrary Foundation" 
                      className="h-16 w-auto object-contain" 
                    />
                  </div>
                </div>
                <p className="text-gray-500 font-medium leading-relaxed font-jakarta">The right guidance at the right time. A global non-profit initiative dedicated to student success and rural empowerment.</p>
                <div className="flex gap-4">
                  {[Briefcase, Camera, Video].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#F5B700] hover:border-[#F5B700] transition-all interactive">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
             </div>
             
             <div className="reveal reveal-delay-100">
               <h4 className="font-black mb-10 uppercase tracking-[0.3em] text-xs opacity-40">Resources</h4>
               <ul className="space-y-6 text-md font-bold text-gray-400 font-jakarta">
                 {['Home', 'Impact', 'Initiatives', 'Intel Hub'].map(item => (
                   <li key={item}><button onClick={() => scrollTo(item.toLowerCase())} className="hover:text-white transition-colors interactive">{item}</button></li>
                 ))}
               </ul>
             </div>

             <div className="reveal reveal-delay-200">
               <h4 className="font-black mb-10 uppercase tracking-[0.3em] text-xs opacity-40">Join Us</h4>
               <ul className="space-y-6 text-md font-bold text-gray-400 font-jakarta">
                 {['WhatsApp Group', 'Telegram', 'Alumni Network', 'Partner Program'].map(item => (
                   <li key={item}><a href="#" className="hover:text-white transition-colors interactive">{item}</a></li>
                 ))}
               </ul>
             </div>

             <GlassCard className="p-8 h-fit border-white/10 reveal reveal-delay-300" hover={false}>
               <h4 className="text-xl font-black mb-4">Support Mission</h4>
               <p className="text-xs text-gray-400 font-medium mb-8 font-jakarta">We are non-profit and run by volunteers. Help us keep education free.</p>
               <Button variant="gold" className="w-full text-xs py-4 h-14">Get Involved</Button>
             </GlassCard>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 reveal">
            <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.4em]">© 2026 PKELIBRARY FOUNDATION. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-12 text-[10px] font-black text-gray-600 uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors interactive">Privacy</a>
              <a href="#" className="hover:text-white transition-colors interactive">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      {scrolled && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-8 right-8 w-16 h-16 bg-[#6B1D1D] text-white rounded-2xl flex items-center justify-center shadow-2xl z-[110] border-4 border-white animate-fade-in active:scale-90 transition-transform interactive">
          <ChevronRight className="-rotate-90" strokeWidth={4} size={28} />
        </button>
      )}

    </div>
  );
}
