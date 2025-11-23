import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { motion, useInView } from "framer-motion";

// Import animations
import innovationAnim from "./assets/animations/1.json";
import timelineAnim from "./assets/animations/2.json";
import teamAnim from "./assets/animations/3.json";
import logo from "./assets/animations/LOGO.json";
import biotechAnim from "./assets/animations/2.json";
import globalStartupAnim from "./assets/animations/3.json";

// Icons
import { 
  Rocket, 
  Users, 
  Clock, 
  Target,
  ShieldCheck,
  Lightning,
  CheckCircle,
  ArrowRight,
  CaretDown,
  PaperPlaneRight,
  X,
  Heart,
  Flask,
  Globe,
  ChartLine,
  Code,
  Cloud,
  Cpu
} from "phosphor-react";

// ------------------------------------------------------------------
// CONFIG
// ------------------------------------------------------------------
const FORM_URL = "https://formspree.io/f/your-form-id";

// ------------------------------------------------------------------
// UPDATED COLOR SCHEME
// ------------------------------------------------------------------
const colors = {
  dark_blue: {
    DEFAULT: '#1e3a8a',
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a'
  },
  dark_terra: {
    DEFAULT: '#4a3520',
    50: '#faf7f4',
    100: '#f1e8dd',
    200: '#e3d1bc',
    300: '#d1b393',
    400: '#bd8f68',
    500: '#a8764d',
    600: '#8d5f3f',
    700: '#6f4a34',
    800: '#4a3520',
    900: '#3d2c1a'
  },
  neutral_beige: {
    DEFAULT: '#f5f5f4',
    50: '#fafaf9',
    100: '#f5f5f4',
    200: '#e7e5e4',
    300: '#d6d3d1',
    400: '#a8a29e',
    500: '#78716c',
    600: '#57534e',
    700: '#44403c',
    800: '#292524',
    900: '#1c1917'
  },
  dark_green: {
    DEFAULT: '#065f46',
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b'
  },
  slate_gray: {
    DEFAULT: '#475569',
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a'
  }
};

// ------------------------------------------------------------------
// ANIMATED BACKGROUND COMPONENT
// ------------------------------------------------------------------
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-15"
      >
        <source 
          src="https://res.cloudinary.com/dyeomcmin/video/upload/v1763857428/21161-315224572_kx8nbo.mp4" 
          type="video/mp4" 
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-dark_blue-900/20 to-dark_green-900/20 mix-blend-overlay"></div>
    </div>
  );
};

// ------------------------------------------------------------------
// MODAL COMPONENTS (Updated with new colors)
// ------------------------------------------------------------------
const Modal = ({ isOpen, onClose, title, children, size = "max-w-4xl" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className={`bg-white rounded-2xl shadow-2xl w-full ${size} max-h-[90vh] overflow-hidden border`}
        style={{ borderColor: colors.dark_green[200] }}
      >
        <div 
          className="flex items-center justify-between p-6 border-b"
          style={{ borderColor: colors.dark_green[200], backgroundColor: colors.neutral_beige[50] }}
        >
          <h2 className="text-2xl font-bold" style={{ color: colors.dark_blue[800] }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg transition-colors hover:bg-white"
            style={{ color: colors.dark_blue[600] }}
          >
            <X size={24} />
          </button>
        </div>
        <div className="overflow-y-auto max-h-[calc(90vh-80px)] bg-white">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

// Updated Mission Modal with new colors
const MissionModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} title="With AI We Innovate Medicine (WAII)" size="max-w-6xl">
    <div className="p-6 space-y-8">
      {/* Healthcare Focus Section */}
      <div className="bg-gradient-to-r from-dark_blue-50 to-dark_green-50 rounded-2xl p-8 border-2 shadow-lg" style={{ borderColor: colors.dark_blue[200] }}>
        <h3 className="text-3xl font-bold text-center mb-6" style={{ color: colors.dark_blue[800] }}>
          Transforming Saudi Arabia's Healthcare Innovation Ecosystem
        </h3>
        <p className="text-lg text-center mb-8" style={{ color: colors.slate_gray[700] }}>
          A comprehensive three-tier structure driving medical innovation from training to commercialization, aligned with Vision 2030
        </p>

        {/* Three Tier Structure */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Foundation Layer */}
          <div className="bg-white rounded-xl p-6 border-2 shadow-lg" style={{ borderColor: colors.dark_blue[200] }}>
            <div className="text-center mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: colors.dark_blue[100] }}>
                <Users size={32} style={{ color: colors.dark_blue[600] }} />
              </div>
              <h4 className="text-xl font-bold mb-2" style={{ color: colors.dark_blue[800] }}>Foundation Layer</h4>
              <div className="text-sm font-semibold px-3 py-1 rounded-full inline-block" style={{ backgroundColor: colors.dark_blue[100], color: colors.dark_blue[700] }}>
                WAII Non-Profit
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Target size={20} style={{ color: colors.dark_green[600], marginTop: '2px' }} />
                <span className="text-sm font-semibold" style={{ color: colors.dark_blue[700] }}>Role:</span>
              </div>
              <p className="text-sm" style={{ color: colors.slate_gray[600] }}>National impact, training, research culture, and innovation awareness</p>
              
              <div className="flex items-start gap-2">
                <Rocket size={20} style={{ color: colors.dark_green[600], marginTop: '2px' }} />
                <span className="text-sm font-semibold" style={{ color: colors.dark_blue[700] }}>What it does:</span>
              </div>
              <ul className="text-sm space-y-1" style={{ color: colors.slate_gray[600] }}>
                <li>• Runs public training programs & health innovation workshops</li>
                <li>• Leads youth and university engagement</li>
                <li>• Signs MoUs for innovation labs & hackathons</li>
                <li>• Ensures Vision 2030 alignment</li>
              </ul>
              
              <div className="bg-gradient-to-r from-dark_blue-50 to-dark_green-50 rounded-lg p-3 mt-3 border" style={{ borderColor: colors.dark_blue[200] }}>
                <p className="text-sm font-semibold text-center" style={{ color: colors.dark_blue[700] }}>
                  "WAII empowers society and develops the talent that will shape the future of medicine"
                </p>
              </div>
            </div>
          </div>

          {/* Development Layer */}
          <div className="bg-white rounded-xl p-6 border-2 shadow-lg" style={{ borderColor: colors.dark_green[300] }}>
            <div className="text-center mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: colors.dark_green[100] }}>
                <Lightning size={32} style={{ color: colors.dark_green[600] }} />
              </div>
              <h4 className="text-xl font-bold mb-2" style={{ color: colors.dark_green[700] }}>Development Layer</h4>
              <div className="text-sm font-semibold px-3 py-1 rounded-full inline-block" style={{ backgroundColor: colors.dark_green[100], color: colors.dark_green[700] }}>
                WAII Accelerator
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Target size={20} style={{ color: colors.dark_blue[600], marginTop: '2px' }} />
                <span className="text-sm font-semibold" style={{ color: colors.dark_green[700] }}>Role:</span>
              </div>
              <p className="text-sm" style={{ color: colors.slate_gray[600] }}>Transforms trained talent & research into validated startups</p>
              
              <div className="flex items-start gap-2">
                <Rocket size={20} style={{ color: colors.dark_blue[600], marginTop: '2px' }} />
                <span className="text-sm font-semibold" style={{ color: colors.dark_green[700] }}>What it does:</span>
              </div>
              <ul className="text-sm space-y-1" style={{ color: colors.slate_gray[600] }}>
                <li>• Operates 10 Innovation Offices in universities & medical hubs</li>
                <li>• Provides mentorship & product strategy</li>
                <li>• Regulatory pathway & investor readiness</li>
                <li>• Pipeline and qualification mechanism</li>
              </ul>
              
              <div className="bg-gradient-to-r from-dark_green-50 to-dark_blue-50 rounded-lg p-3 mt-3 border" style={{ borderColor: colors.dark_green[200] }}>
                <p className="text-sm font-semibold text-center" style={{ color: colors.dark_green[700] }}>
                  "The Accelerator converts Saudi scientific talent into real companies ready for global markets"
                </p>
              </div>
            </div>
          </div>

          {/* Investment Layer */}
          <div className="bg-white rounded-xl p-6 border-2 shadow-lg" style={{ borderColor: colors.dark_terra[300] }}>
            <div className="text-center mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: colors.dark_terra[100] }}>
                <ChartLine size={32} style={{ color: colors.dark_terra[600] }} />
              </div>
              <h4 className="text-xl font-bold mb-2" style={{ color: colors.dark_terra[700] }}>Investment Layer</h4>
              <div className="text-sm font-semibold px-3 py-1 rounded-full inline-block" style={{ backgroundColor: colors.dark_terra[100], color: colors.dark_terra[700] }}>
                WAII Ventures Holding
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Target size={20} style={{ color: colors.dark_blue[600], marginTop: '2px' }} />
                <span className="text-sm font-semibold" style={{ color: colors.dark_terra[700] }}>Role:</span>
              </div>
              <p className="text-sm" style={{ color: colors.slate_gray[600] }}>The commercial engine and investment fund manager</p>
              
              <div className="flex items-start gap-2">
                <Rocket size={20} style={{ color: colors.dark_blue[600], marginTop: '2px' }} />
                <span className="text-sm font-semibold" style={{ color: colors.dark_terra[700] }}>What it does:</span>
              </div>
              <ul className="text-sm space-y-1" style={{ color: colors.slate_gray[600] }}>
                <li>• Raises $10M initial fund</li>
                <li>• Takes equity in startups</li>
                <li>• Commercializes technologies</li>
                <li>• Prepares for Series A, JV, and IPO</li>
              </ul>
              
              <div className="bg-gradient-to-r from-dark_terra-50 to-dark_blue-50 rounded-lg p-3 mt-3 border" style={{ borderColor: colors.dark_terra[200] }}>
                <p className="text-sm font-semibold text-center" style={{ color: colors.dark_terra[700] }}>
                  "WAII Ventures Holding transforms innovations into scalable companies and sustainable economic returns"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Strategy */}
        <div className="bg-white rounded-xl p-6 border-2 shadow-lg" style={{ borderColor: colors.dark_blue[200] }}>
          <h4 className="text-xl font-bold mb-4 text-center" style={{ color: colors.dark_blue[800] }}>
            Strategic Portfolio Distribution
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-lg border" style={{ backgroundColor: colors.dark_blue[50], borderColor: colors.dark_blue[200] }}>
              <div className="text-2xl font-bold" style={{ color: colors.dark_blue[700] }}>40%</div>
              <div className="text-sm" style={{ color: colors.dark_blue[600] }}>Seed Investments</div>
            </div>
            <div className="p-4 rounded-lg border" style={{ backgroundColor: colors.dark_green[50], borderColor: colors.dark_green[200] }}>
              <div className="text-2xl font-bold" style={{ color: colors.dark_green[700] }}>20%</div>
              <div className="text-sm" style={{ color: colors.dark_green[600] }}>Product Development</div>
            </div>
            <div className="p-4 rounded-lg border" style={{ backgroundColor: colors.dark_terra[50], borderColor: colors.dark_terra[200] }}>
              <div className="text-2xl font-bold" style={{ color: colors.dark_terra[700] }}>20%</div>
              <div className="text-sm" style={{ color: colors.dark_terra[600] }}>Working Capital</div>
            </div>
            <div className="p-4 rounded-lg border" style={{ backgroundColor: colors.slate_gray[50], borderColor: colors.slate_gray[200] }}>
              <div className="text-2xl font-bold" style={{ color: colors.slate_gray[700] }}>20%</div>
              <div className="text-sm" style={{ color: colors.slate_gray[600] }}>Co-investments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Modal>
);

// Structure Modal with new colors
const StructureModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Program Structure & Timeline" size="max-w-6xl">
    <div className="p-6 space-y-8">
      <div className="text-center bg-gradient-to-r from-dark_blue-50 to-dark_green-50 p-6 rounded-2xl border-2 shadow-lg" style={{ borderColor: colors.dark_blue[200] }}>
        <h2 className="text-3xl font-bold mb-3" style={{ color: colors.dark_blue[800] }}>National Product Engine</h2>
        <p className="text-xl font-semibold" style={{ color: colors.dark_green[600] }}>90-Day Sovereign Build Cycle</p>
        <div className="grid grid-cols-4 gap-4 mt-6">
          {[
            { number: "100+", label: "Problem Dossiers" },
            { number: "90", label: "Days" },
            { number: "4", label: "Phases" },
            { number: "3", label: "Pilot Customers" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-3 rounded-xl border shadow-sm" style={{ borderColor: colors.dark_blue[200] }}>
              <div className="text-lg font-bold" style={{ color: colors.dark_blue[700] }}>{item.number}</div>
              <div className="text-xs" style={{ color: colors.slate_gray[600] }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Add timeline content here with updated colors */}
    </div>
  </Modal>
);

// Stack Modal with new colors
const StackModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Innovation Stack" size="max-w-6xl">
    <div className="p-6 space-y-6">
      <div className="text-center">
        <p className="text-lg" style={{ color: colors.slate_gray[600] }}>
          106 technological capabilities across 10 integrated layers - Building sovereign technological ecosystems
        </p>
      </div>
      {/* Add stack content here with updated colors */}
    </div>
  </Modal>
);

// Team Modal with new colors
const TeamModal = ({ isOpen, onClose }) => {
  const teamMembers = [
    {
      role: "NPE President - Chairman",
      headcount: 1,
      reportsTo: "Partners - Agencies",
      person: "Dr Alrohaimi",
      tasks: [
        "Strategic vision alignment with national transformation goals",
        "Stakeholder management with government partners and agencies",
        "Oversight of sovereign mission direction and priorities",
        "Ensuring compliance with Vision 2030 objectives",
        "Representing NPE at national and international forums"
      ]
    },
    // ... other team members
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Leadership Team" size="max-w-6xl">
      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-xl p-6 border-2 shadow-sm" style={{ backgroundColor: colors.dark_blue[50], borderColor: colors.dark_blue[200] }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: colors.dark_blue[800] }}>Team Values & Mission</h3>
            <p className="leading-relaxed mb-4" style={{ color: colors.slate_gray[700] }}>
              Leadership team embodying the integration of local authenticity with global modernity.
            </p>
            {/* Add team values content */}
          </div>
          <div className="rounded-xl p-6 border-2 shadow-sm" style={{ backgroundColor: colors.dark_green[50], borderColor: colors.dark_green[200] }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: colors.dark_green[800] }}>Leadership Structure</h3>
            <p className="mb-4" style={{ color: colors.slate_gray[700] }}>
              World-class leadership team combining local expertise with global capabilities.
            </p>
            {/* Add leadership structure content */}
          </div>
        </div>
        {/* Add team members list */}
      </div>
    </Modal>
  );
};

// ------------------------------------------------------------------
// UPDATED BINARY BACKGROUND WITH NEW COLORS
// ------------------------------------------------------------------
const BinaryBackground = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPhrases, setCurrentPhrases] = useState([]);

  const arabicPhrases = [
    "لا يهم كم أنت بطيئ طالما أنك لن تتوقف.",
    "لا يوجد طريق مختصر إلى مكان يستحق الذهاب إليه.", 
    "كن التغير الذي تريد أن تراه في العالم.",
    "دائما خذ في عين الإعتبار أن قرار النجاح هو أهم من أي شيئ آخر.",
    "أن تخفق 100% في الطلقات التي لا تطلقها.",
    "الخطر الأعظم على معظمنا هو ليس أن يكون هدفنا عال جداً, و أن نخفق في تحقيقه, بل أن يكون سهلاً جداً و نحققه.",
    "أفضل توقيت لزرع شجرة كان قبل سنة و أفضل ثاني توقيت هو الآن.",
    "لن تكون قادراً على قطع المحيط إذا لم يكن لديك الشجاعة أن تخسر مرآى الشاطئ.",
    "مهما تصور أو صدق عقل الإنسان, فإنه قادر على تحقيقه.",
    "السعادة ليست شيئاً يحصل بسهولة, فإنها تأتي من أفعالك."
  ];

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const handler = () => setIsMobile(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // useEffect(() => {
  //   let currentIndex = 0;
  //   const maxPhrases = isMobile ? 2 : 3;
    
  //   const updatePhrases = () => {
  //     const newPhrases = [];
      
  //     for (let i = 0; i < maxPhrases; i++) {
  //       const phraseIndex = (currentIndex + i) % arabicPhrases.length;
  //       newPhrases.push({
  //         text: arabicPhrases[phraseIndex],
  //         id: `${phraseIndex}-${Date.now()}-${i}`,
  //         delay: i * 1000
  //       });
  //     }
      
  //     setCurrentPhrases(newPhrases);
  //     currentIndex = (currentIndex + maxPhrases) % arabicPhrases.length;
  //   };

  //   updatePhrases();
  //   const interval = setInterval(updatePhrases, 4000);

  //   return () => clearInterval(interval);
  // }, [isMobile]);

  const getRandomPosition = (index, total) => {
    const sectionHeight = 80 / total;
    const top = (sectionHeight * index) + 10 + (Math.random() * sectionHeight * 0.6);
    const left = Math.random() * 70 + 15;
    return { top: `${top}%`, left: `${left}%` };
  };

  const getRandomFontSize = () => {
    const sizes = ['text-lg', 'text-xl', 'text-2xl'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  return (
    <div className="w-full min-h-screen scroll-smooth" >
      <AnimatedBackground />
      <div className="fixed w-full h-full top-0 -z-0 overflow-hidden bg-gradient-to-br from-dark_blue-50/80 to-dark_green-50/80" aria-hidden>
        {currentPhrases.map((phrase, index) => (
          <motion.div
            key={phrase.id}
            className={`absolute font-arabic font-medium ${getRandomFontSize()} text-center leading-relaxed max-w-xs`}
            style={{ 
              color: colors.dark_blue[700],
              ...getRandomPosition(index, currentPhrases.length)
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.7, 0.7, 0], scale: [0.8, 1, 1, 0.8] }}
            transition={{ 
              duration: 4,
              times: [0, 0.1, 0.8, 1],
              ease: "easeInOut",
              delay: phrase.delay / 1000
            }}
          >
            {phrase.text}
          </motion.div>
        ))}
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

// ------------------------------------------------------------------
// UPDATED SECTION COMPONENTS WITH NEW COLORS
// ------------------------------------------------------------------

// Home Section with Three Hero Sections
const HomeSection = ({ onNavigate }) => {
  const [activeHero, setActiveHero] = useState(0);

  const heroSections = [
    {
      id: 0,
      title: "With AI We Innovate",
      subtitle: "WAII - Transforming Healthcare Through Artificial Intelligence",
      description: "Empowering Saudi Arabia's medical innovation ecosystem with cutting-edge AI solutions and strategic investment",
      cta: "Explore Healthcare Innovation",
      animation: null,
      bgColor: `linear-gradient(135deg, ${colors.dark_blue[50]}, ${colors.dark_green[50]})`,
      icon: <Heart size={48} style={{ color: colors.dark_blue[600] }} />
    },
    {
      id: 1,
      title: "With AI We Innovate Medicine",
      subtitle: "Revolutionizing Healthcare Delivery & Research",
      description: "From medical AI platforms to biological innovations, we're building the future of Saudi healthcare through strategic acceleration and investment",
      cta: "Join Medical Innovation",
      animation: biotechAnim,
      bgColor: `linear-gradient(135deg, ${colors.dark_green[50]}, ${colors.dark_blue[50]})`,
      icon: <Globe size={48} style={{ color: colors.dark_green[600] }} />
    },
    {
      id: 2,
      title: "Global Innovation Call",
      subtitle: "Empowering All Startups Beyond Healthcare",
      description: "While healthcare is our foundation, we support innovative startups across all sectors - from fintech to clean energy, agritech to advanced materials",
      cta: "Apply for Acceleration",
      animation: globalStartupAnim,
      bgColor: `linear-gradient(135deg, ${colors.neutral_beige[100]/10}, ${colors.dark_blue[50]/10})`,
      icon: <Globe size={48} style={{ color: colors.dark_blue[600] }} />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHero((prev) => (prev + 1) % heroSections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentHero = heroSections[activeHero];

  return (
    <section id="home" className="min-h-screen">
      {/* Main Hero Section with Carousel */}
      <div 
        className="min-h-screen flex items-center px-4 sm:px-6 scroll  sm:pt-20 transition-all duration-500 bg-white/50"
      >

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 pb-40  items-center">
            
            <div>
              <motion.div
                key={activeHero}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-4 space-y-10 mb-6">
                  <div className="space-y-8">
                    <h1 className="text-4xl sm:text-2xl lg:text-5xl font-bold leading-tight" style={{ color: colors.dark_blue[800] }}>
                      {currentHero.title}
                    </h1>
                    <p className="text-lg sm:text-xl mt-2 font-semibold" style={{ color: colors.dark_green[600] }}>
                      {currentHero.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-lg sm:text-xl leading-relaxed mb-8" style={{ color: colors.slate_gray[700] }}>
                  {currentHero.description}
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <button 
                    onClick={() => onNavigate('apply')}
                    className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors flex items-center gap-2 text-sm sm:text-base text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ backgroundColor: colors.dark_blue[600] }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = colors.dark_blue[700]}
                    onMouseLeave={(e) => e.target.style.backgroundColor = colors.dark_blue[600]}
                  >
                    {currentHero.cta} <ArrowRight size={20} />
                  </button>
                  
                  <button 
                    onClick={() => onNavigate('portfolio')}
                    className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors text-sm sm:text-base border-2 shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ 
                      borderColor: colors.dark_green[500],
                      color: colors.dark_green[600],
                      backgroundColor: 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = colors.dark_green[50];
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                    }}
                  >
                    View Our Portfolio
                  </button>
                </div>
              </motion.div>

              {/* Hero Navigation Dots */}
              <div className="flex gap-2 mt-8">
                {heroSections.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveHero(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeHero === index 
                        ? 'w-8' 
                        : 'opacity-50'
                    }`}
                    style={{
                      backgroundColor: activeHero === index 
                        ? colors.dark_blue[600] 
                        : colors.slate_gray[400]
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              {currentHero.animation ? (
                <Lottie 
                  animationData={currentHero.animation} 
                  className="w-full max-w-lg"
                  loop={true}
                  autoplay={true}
                />
              ) : (
                <img 
                  src="https://res.cloudinary.com/dyeomcmin/image/upload/v1762615142/02829ab0-769c-4b05-bf1c-39da394d7ec0_ven3f2.jpg" 
                  alt="WAII Innovation Vision"
                  className="w-96 max-w-xl rounded-2xl shadow-2xl"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Preview Section */}
      <div className="py-20" style={{ backgroundColor: colors.neutral_beige[100] }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: colors.dark_blue[800] }}>
              Our Portfolio Companies
            </h2>
            <p className="text-lg" style={{ color: colors.slate_gray[600] }}>
              Success stories from healthcare and technology ventures
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "MedAI Platform",
                sector: "Healthcare AI",
                stage: "Series A",
                description: "AI-powered diagnostic platform revolutionizing medical imaging analysis"
              },
              {
                name: "BioHem Solutions", 
                sector: "Biotechnology",
                stage: "Seed",
                description: "Developing biological hemoglobin oxygen carriers for medical applications"
              },
              {
                name: "PharmaChain",
                sector: "HealthTech",
                stage: "Series B",
                description: "Digital contracting platform for pharmaceutical supply chain optimization"
              }
            ].map((startup, index) => (
              <div 
                key={index} 
                className="rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border-2 shadow-lg"
                style={{ 
                  backgroundColor: colors.neutral_beige[50],
                  borderColor: colors.dark_green[200]
                }}
              >
                <h3 className="text-xl font-bold mb-2" style={{ color: colors.dark_blue[800] }}>
                  {startup.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span 
                    className="px-2 py-1 rounded text-sm font-medium border"
                    style={{ backgroundColor: colors.dark_blue[50], color: colors.dark_blue[700], borderColor: colors.dark_blue[200] }}
                  >
                    {startup.sector}
                  </span>
                  <span 
                    className="px-2 py-1 rounded text-sm font-medium border"
                    style={{ backgroundColor: colors.dark_green[50], color: colors.dark_green[700], borderColor: colors.dark_green[200] }}
                  >
                    {startup.stage}
                  </span>
                </div>
                <p className="text-sm" style={{ color: colors.slate_gray[600] }}>
                  {startup.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={() => onNavigate('portfolio')}
              className="px-8 py-3 rounded-lg font-semibold transition-colors text-white shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: colors.dark_green[600] }}
              onMouseEnter={(e) => e.target.style.backgroundColor = colors.dark_green[700]}
              onMouseLeave={(e) => e.target.style.backgroundColor = colors.dark_green[600]}
            >
              View Full Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div 
        className="py-20"
        style={{ 
          background: `linear-gradient(135deg, ${colors.dark_blue[100]}, ${colors.dark_green[100]})`
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: colors.dark_blue[800] }}>
            Be Part of Saudi Arabia's Innovation Future
          </h2>
          <p className="text-lg mb-8" style={{ color: colors.slate_gray[700] }}>
            Join the movement to build sovereign capabilities across healthcare, technology, and beyond
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => onNavigate('apply')}
              className="px-8 py-4 rounded-lg font-semibold transition-colors text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: colors.dark_blue[600] }}
              onMouseEnter={(e) => e.target.style.backgroundColor = colors.dark_blue[700]}
              onMouseLeave={(e) => e.target.style.backgroundColor = colors.dark_blue[600]}
            >
              Apply Now
            </button>
            <button 
              onClick={() => onNavigate('status')}
              className="px-8 py-4 rounded-lg font-semibold transition-colors text-lg border-2 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ 
                borderColor: colors.dark_green[500],
                color: colors.dark_green[600],
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = colors.dark_green[50];
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              Check Application Status
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Application Form Section
const ApplicationFormSection = ({ onNavigate, onApplicationSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    currentRole: '',
    yearsExperience: '',
    technicalSkills: '',
    education: '',
    projectTitle: '',
    problemStatement: '',
    proposedSolution: '',
    targetMarket: '',
    teamSize: '',
    cofounders: '',
    deck: null,
    motivation: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const steps = [
    {
      title: "Personal Information",
      fields: ['fullName', 'email', 'phone', 'nationality']
    },
    {
      title: "Professional Background", 
      fields: ['currentRole', 'yearsExperience', 'technicalSkills', 'education']
    },
    {
      title: "Project Proposal",
      fields: ['projectTitle', 'problemStatement', 'proposedSolution', 'targetMarket']
    },
    {
      title: "Team & Documentation",
      fields: ['teamSize', 'cofounders', 'deck', 'motivation']
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    onApplicationSubmit();
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: colors.neutral_beige[50] }}>
        <div className="bg-white rounded-2xl p-8 text-center max-w-md mx-4 shadow-2xl border" style={{ borderColor: colors.dark_green[200] }}>
          <CheckCircle size={64} style={{ color: colors.dark_green[500] }} className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4" style={{ color: colors.dark_blue[800] }}>Application Submitted!</h2>
          <p className="mb-6" style={{ color: colors.slate_gray[600] }}>
            Thank you for your application. We'll review it and get back to you soon.
          </p>
          <button 
            onClick={() => {
              setShowSuccess(false);
              onNavigate('home');
            }}
            className="px-6 py-3 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: colors.dark_blue[600] }}
            onMouseEnter={(e) => e.target.style.backgroundColor = colors.dark_blue[700]}
            onMouseLeave={(e) => e.target.style.backgroundColor = colors.dark_blue[600]}
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <section id="apply" className="min-h-screen" style={{ backgroundColor: colors.neutral_beige[50] }}>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: colors.dark_blue[800] }}>Apply to WAII</h2>
          <p className="text-lg" style={{ color: colors.slate_gray[600] }}>
            Join the next cohort of Saudi Arabia's innovation pioneers
          </p>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-2xl p-6 shadow-2xl border mb-12" style={{ borderColor: colors.dark_green[200] }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Progress Steps */}
            <div className="flex justify-between mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    index <= currentStep 
                      ? 'text-white' 
                      : 'text-gray-400'
                  }`}
                  style={{
                    backgroundColor: index <= currentStep ? colors.dark_blue[600] : colors.neutral_beige[200],
                    borderColor: index <= currentStep ? colors.dark_blue[600] : colors.neutral_beige[300]
                  }}>
                    {index < currentStep ? <CheckCircle size={20} /> : index + 1}
                  </div>
                  <span className="text-xs mt-2 text-center" style={{ color: colors.slate_gray[600] }}>{step.title}</span>
                </div>
              ))}
            </div>

            {/* Form Fields */}
            <div className="grid gap-6">
              {steps[currentStep].fields.map(field => (
                <div key={field}>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.dark_blue[700] }}>
                    {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </label>
                  {field === 'problemStatement' || field === 'proposedSolution' || field === 'motivation' ? (
                    <textarea
                      value={formData[field]}
                      onChange={(e) => setFormData(prev => ({ ...prev, [field]: e.target.value }))}
                      rows={4}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{ 
                        borderColor: colors.slate_gray[300],
                        focusBorderColor: colors.dark_blue[500],
                        focusRingColor: colors.dark_blue[200]
                      }}
                      required
                    />
                  ) : field === 'deck' ? (
                    <div className="border-2 border-dashed rounded-lg p-6 text-center transition-all duration-300 hover:border-solid"
                    style={{ 
                      borderColor: colors.slate_gray[300],
                      hoverBorderColor: colors.dark_blue[300]
                    }}>
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={(e) => setFormData(prev => ({ ...prev, deck: e.target.files[0] }))}
                        className="hidden"
                        id="deck-upload"
                      />
                      <label htmlFor="deck-upload" className="cursor-pointer">
                        {formData.deck ? (
                          <div style={{ color: colors.dark_green[600] }}>
                            <CheckCircle size={32} className="mx-auto mb-2" />
                            <p>Deck uploaded: {formData.deck.name}</p>
                          </div>
                        ) : (
                          <div style={{ color: colors.slate_gray[500] }}>
                            <PaperPlaneRight size={32} className="mx-auto mb-2" />
                            <p>Click to upload your pitch deck (PDF)</p>
                            <p className="text-sm">Max file size: 10MB</p>
                          </div>
                        )}
                      </label>
                    </div>
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      value={formData[field]}
                      onChange={(e) => setFormData(prev => ({ ...prev, [field]: e.target.value }))}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{ 
                        borderColor: colors.slate_gray[300],
                        focusBorderColor: colors.dark_blue[500],
                        focusRingColor: colors.dark_blue[200]
                      }}
                      required
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-between pt-6">
              <button
                type="button"
                onClick={() => setCurrentStep(prev => prev - 1)}
                disabled={currentStep === 0}
                className="px-6 py-3 border rounded-lg transition-all duration-300 disabled:opacity-50"
                style={{ 
                  borderColor: colors.slate_gray[300],
                  color: colors.slate_gray[700],
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (currentStep !== 0) {
                    e.target.style.backgroundColor = colors.neutral_beige[200];
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentStep !== 0) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                Previous
              </button>
              
              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(prev => prev + 1)}
                  className="px-6 py-3 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: colors.dark_blue[600] }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = colors.dark_blue[700]}
                  onMouseLeave={(e) => e.target.style.backgroundColor = colors.dark_blue[600]}
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-3 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: colors.dark_green[600] }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = colors.dark_green[700]}
                  onMouseLeave={(e) => e.target.style.backgroundColor = colors.dark_green[600]}
                >
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>

        {/* BOOST Section integrated below the form */}
        <div className="bg-gradient-to-r from-dark_blue-50 to-dark_green-50 rounded-2xl p-8 border-2 shadow-lg" style={{ borderColor: colors.dark_blue[200] }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4" style={{ color: colors.dark_blue[800] }}>BOOST Your Application</h3>
            <p style={{ color: colors.slate_gray[600] }}>
              Access resources to strengthen your proposal
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border shadow-sm" style={{ borderColor: colors.dark_blue[200] }}>
              <h4 className="font-bold mb-3" style={{ color: colors.dark_blue[700] }}>Application Resources</h4>
              <ul className="space-y-2 text-sm" style={{ color: colors.slate_gray[600] }}>
                <li>• Application Guide & Tips</li>
                <li>• Pitch Deck Template</li>
                <li>• Technical Requirements</li>
                <li>• Evaluation Criteria</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border shadow-sm" style={{ borderColor: colors.dark_green[200] }}>
              <h4 className="font-bold mb-3" style={{ color: colors.dark_green[700] }}>Support Available</h4>
              <ul className="space-y-2 text-sm" style={{ color: colors.slate_gray[600] }}>
                <li>• Office Hours with Experts</li>
                <li>• Technical Consultation</li>
                <li>• Proposal Review Sessions</li>
                <li>• Q&A Sessions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Status Check Section
const StatusSection = ({ onNavigate }) => {
  const [searchInput, setSearchInput] = useState('');
  const [statusData, setStatusData] = useState(null);

  const handleStatusCheck = (e) => {
    e.preventDefault();
    setStatusData({
      status: 'under-review',
      applicationId: 'WAII-2024-001',
      submittedDate: '2024-01-15',
      currentStage: 'Technical Review',
      nextUpdate: '2024-01-27'
    });
  };

  return (
    <section id="status" className="min-h-screen flex items-center justify-center py-20" style={{ backgroundColor: colors.neutral_beige[50] }}>
      <div className="max-w-2xl mx-auto px-6 w-full">
        <div className="bg-white rounded-2xl p-8 shadow-2xl border" style={{ borderColor: colors.dark_green[200] }}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.dark_blue[800] }}>Check Application Status</h2>
            <p style={{ color: colors.slate_gray[600] }}>
              Enter your application details to check your status
            </p>
          </div>

          {!statusData ? (
            <form onSubmit={handleStatusCheck} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.dark_blue[700] }}>
                  Email or Company Name
                </label>
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                  style={{ 
                    borderColor: colors.slate_gray[300],
                    focusBorderColor: colors.dark_blue[500],
                    focusRingColor: colors.dark_blue[200]
                  }}
                  placeholder="Enter your email or company name"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: colors.dark_blue[600] }}
                onMouseEnter={(e) => e.target.style.backgroundColor = colors.dark_blue[700]}
                onMouseLeave={(e) => e.target.style.backgroundColor = colors.dark_blue[600]}
              >
                Check Status
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="rounded-lg p-6 border" style={{ backgroundColor: colors.dark_green[50], borderColor: colors.dark_green[200] }}>
                <div className="text-center">
                  <CheckCircle size={48} style={{ color: colors.dark_green[500] }} className="mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2" style={{ color: colors.dark_green[800] }}>Application Found</h3>
                  <p style={{ color: colors.slate_gray[600] }}>Status: <span className="font-semibold">Under Review</span></p>
                </div>
              </div>
              
              <div className="grid gap-4">
                {[
                  { label: 'Application ID:', value: statusData.applicationId },
                  { label: 'Submitted Date:', value: statusData.submittedDate },
                  { label: 'Current Stage:', value: statusData.currentStage },
                  { label: 'Next Update:', value: statusData.nextUpdate }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span style={{ color: colors.slate_gray[600] }}>{item.label}</span>
                    <span className="font-semibold" style={{ color: colors.dark_blue[700] }}>{item.value}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setStatusData(null);
                  setSearchInput('');
                }}
                className="w-full py-3 rounded-lg font-semibold transition-colors border-2 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ 
                  borderColor: colors.dark_blue[500],
                  color: colors.dark_blue[600],
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = colors.dark_blue[50];
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Check Another Application
              </button>
            </div>
          )}

          <div className="mt-6 text-center">
            <button 
              onClick={() => onNavigate('home')}
              className="font-medium transition-colors hover:underline"
              style={{ color: colors.dark_blue[600] }}
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Portfolio Section
const PortfolioSection = ({ onNavigate }) => {
  const portfolioCompanies = [
    {
      name: "MedAI Platform",
      logo: "🩺",
      sector: "Healthcare AI",
      stage: "Series A",
      description: "AI-powered diagnostic platform revolutionizing medical imaging analysis and patient care",
      impact: "50+ hospitals integrated, 100K+ patients served",
      founded: "2023"
    },
    {
      name: "BioHem Solutions",
      logo: "🧬",
      sector: "Biotechnology",
      stage: "Seed", 
      description: "Developing biological hemoglobin oxygen carriers for critical medical applications",
      impact: "3 patents filed, clinical trials ongoing",
      founded: "2024"
    },
    {
      name: "PharmaChain",
      logo: "🔗",
      sector: "HealthTech",
      stage: "Series B",
      description: "Digital contracting platform optimizing pharmaceutical supply chain and compliance",
      impact: "30% cost reduction for partners",
      founded: "2022"
    },
    {
      name: "CleanEnergy Tech",
      logo: "⚡",
      sector: "Energy Tech",
      stage: "Series A",
      description: "Sustainable energy solutions for Saudi Arabia's green transition",
      impact: "10MW capacity deployed, 50+ jobs created",
      founded: "2023"
    },
    {
      name: "AgriTech Solutions",
      logo: "🌱",
      sector: "Agriculture Technology",
      stage: "Seed",
      description: "Smart farming solutions optimizing water usage and increasing crop yields",
      impact: "40% water savings, 25% yield increase",
      founded: "2024"
    },
    {
      name: "FinTech Saudi",
      logo: "💳",
      sector: "Financial Technology",
      stage: "Series B",
      description: "Next-generation financial infrastructure for the Kingdom's digital economy",
      impact: "2M+ users, $100M+ processed",
      founded: "2022"
    }
  ];

  return (
    <section id="portfolio" className="min-h-screen py-20" style={{ backgroundColor: colors.neutral_beige[50] }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: colors.dark_blue[800] }}>Our Portfolio</h2>
          <p className="text-lg" style={{ color: colors.slate_gray[600] }}>
            Investing in Saudi Arabia's most promising technology ventures across healthcare and beyond
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioCompanies.map((company, index) => (
            <div 
              key={index} 
              className="rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border-2 shadow-lg"
              style={{ 
                backgroundColor: colors.neutral_beige[50],
                borderColor: colors.dark_green[200]
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{company.logo}</div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: colors.dark_blue[800] }}>{company.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span 
                      className="px-2 py-1 rounded text-xs font-medium border"
                      style={{ backgroundColor: colors.dark_blue[50], color: colors.dark_blue[700], borderColor: colors.dark_blue[200] }}
                    >
                      {company.sector}
                    </span>
                    <span 
                      className="px-2 py-1 rounded text-xs font-medium border"
                      style={{ backgroundColor: colors.dark_green[50], color: colors.dark_green[700], borderColor: colors.dark_green[200] }}
                    >
                      {company.stage}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm mb-4" style={{ color: colors.slate_gray[600] }}>{company.description}</p>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span style={{ color: colors.slate_gray[500] }}>Impact:</span>
                  <span className="font-medium" style={{ color: colors.dark_blue[700] }}>{company.impact}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: colors.slate_gray[500] }}>Founded:</span>
                  <span className="font-medium" style={{ color: colors.dark_blue[700] }}>{company.founded}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => onNavigate('home')}
            className="px-8 py-3 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: colors.dark_blue[600] }}
            onMouseEnter={(e) => e.target.style.backgroundColor = colors.dark_blue[700]}
            onMouseLeave={(e) => e.target.style.backgroundColor = colors.dark_blue[600]}
          >
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
};

// Team Section
// Team Section
const TeamSection = ({ onNavigate }) => {
  const teamMembers = [
    {
      name: "Dr. Alrohaimi", 
      role: "WAII President",
      expertise: "Healthcare Innovation & National Strategy",
      description: "Leading Saudi Arabia's healthcare transformation with 15+ years in biotech and national strategy development.",
      image: "https://res.cloudinary.com/dyeomcmin/image/upload/v1762491408/1738516948980_frrcsz.jpg",
      linkedin: "https://www.linkedin.com/in/dr-abdulmuhsen-alrohaimi/",
      color: colors.dark_blue[600]
    },
    {
      name: "Sebastien Fenelon",
      role: "WAII Director", 
      expertise: "AI Systems & Technology Architecture",
      description: "Visionary technologist pioneering sovereign AI systems and privacy-first innovation platforms.",
      image: "https://res.cloudinary.com/dyeomcmin/image/upload/v1762492100/092b5938-dbb5-4c88-879e-cbb7abbea109_llxifo.jpg",
      linkedin: "https://www.linkedin.com/in/sebastien-fenelon-b83171254/",
      color: colors.dark_green[600]
    },
    {
      name: "Dr. Sarah Al-Mansour",
      role: "Health Innovation Lead",
      expertise: "Medical Research & Clinical Innovation",
      description: "Bridging cutting-edge medical research with practical healthcare solutions for the Kingdom.",
      image: "https://images.unsplash.com/photo-1559839734-2b7ea197ec2?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      color: colors.dark_terra[600]
    },
    {
      name: "Engineer Khalid Al-Rashid",
      role: "Technology Operations Director",
      expertise: "Engineering & Scale Operations",
      description: "Driving operational excellence and scalable technology deployment across healthcare ecosystems.",
      image: "https://images.unsplash.com/photo-1472099645785-658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      color: colors.slate_gray[600]
    }
  ];

  return (
    <section id="team" className="min-h-screen py-20" style={{ backgroundColor: colors.neutral_beige[50] }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <button 
            onClick={() => onNavigate('home')}
            className="font-medium mb-6 inline-flex items-center gap-2 transition-colors hover:underline"
            style={{ color: colors.dark_blue[600] }}
          >
            ← Back to Home
          </button>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: colors.dark_blue[800] }}>
            Our Team
          </h1>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Vision Focus */}
            <div className="text-center p-6 rounded-2xl border-2 shadow-lg" 
                 style={{ borderColor: colors.dark_blue[200], backgroundColor: colors.dark_blue[50] }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                   style={{ backgroundColor: colors.dark_blue[100] }}>
                <Target size={32} style={{ color: colors.dark_blue[600] }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.dark_blue[800] }}>Vision Focused</h3>
              <p className="text-sm" style={{ color: colors.slate_gray[600] }}>
                Driving Saudi Arabia's 2030 healthcare innovation agenda with strategic leadership and global partnerships
              </p>
            </div>

            {/* Health Letters */}
            <div className="text-center p-6 rounded-2xl border-2 shadow-lg" 
                 style={{ borderColor: colors.dark_green[200], backgroundColor: colors.dark_green[50] }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                   style={{ backgroundColor: colors.dark_green[100] }}>
                <Heart size={32} style={{ color: colors.dark_green[600] }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.dark_green[800] }}>Health Innovation</h3>
              <p className="text-sm" style={{ color: colors.slate_gray[600] }}>
                Transforming healthcare delivery through AI, biotechnology, and patient-centric innovation
              </p>
            </div>

            {/* Global Impact */}
            <div className="text-center p-6 rounded-2xl border-2 shadow-lg" 
                 style={{ borderColor: colors.dark_terra[200], backgroundColor: colors.dark_terra[50] }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                   style={{ backgroundColor: colors.dark_terra[100] }}>
                <Globe size={32} style={{ color: colors.dark_terra[600] }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.dark_terra[800] }}>Global Standards</h3>
              <p className="text-sm" style={{ color: colors.slate_gray[600] }}>
                Building solutions that meet international standards while addressing local healthcare challenges
              </p>
            </div>
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div 
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 h-full flex flex-col"
                style={{ borderColor: colors.dark_green[200] }}
              >
                {/* Profile Image */}
                <div className="relative mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-2xl object-cover mx-auto border-4 shadow-md group-hover:scale-105 transition-transform duration-300"
                    style={{ borderColor: member.color }}
                  />
                  {/* LinkedIn Badge */}
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: member.color }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>

                {/* Member Info */}
                <div className="text-center flex-1">
                  <h3 className="text-lg font-bold mb-1" style={{ color: colors.dark_blue[800] }}>
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold mb-2" style={{ color: member.color }}>
                    {member.role}
                  </p>
                  <p className="text-xs mb-3 font-medium" style={{ color: colors.slate_gray[600] }}>
                    {member.expertise}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: colors.slate_gray[600] }}>
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Us Section */}
        <div className="bg-gradient-to-r from-dark_blue-50 to-dark_green-50 rounded-2xl p-8 border-2 shadow-lg" 
             style={{ borderColor: colors.dark_blue[200] }}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.dark_blue[800] }}>
              Get In Touch
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.slate_gray[600] }}>
              Ready to transform healthcare innovation? Reach out to our team to discuss partnerships, investments, or collaboration opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Email Contact */}
            <div className="text-center p-6 bg-white rounded-xl border-2 shadow-sm" 
                 style={{ borderColor: colors.dark_blue[200] }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" 
                   style={{ backgroundColor: colors.dark_blue[100] }}>
                <svg className="w-6 h-6" style={{ color: colors.dark_blue[600] }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2" style={{ color: colors.dark_blue[800] }}>Email Us</h3>
              <p className="text-sm" style={{ color: colors.slate_gray[600] }}>info@waii.gov.sa</p>
              <p className="text-sm" style={{ color: colors.slate_gray[600] }}>partnerships@waii.gov.sa</p>
            </div>

            {/* Phone Contact */}
            <div className="text-center p-6 bg-white rounded-xl border-2 shadow-sm" 
                 style={{ borderColor: colors.dark_green[200] }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" 
                   style={{ backgroundColor: colors.dark_green[100] }}>
                <svg className="w-6 h-6" style={{ color: colors.dark_green[600] }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2" style={{ color: colors.dark_green[800] }}>Call Us</h3>
              <p className="text-sm" style={{ color: colors.slate_gray[600] }}>+966 12 345 6789</p>
              <p className="text-sm" style={{ color: colors.slate_gray[600] }}>Business Hours</p>
            </div>

            {/* Location */}
            <div className="text-center p-6 bg-white rounded-xl border-2 shadow-sm" 
                 style={{ borderColor: colors.dark_terra[200] }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" 
                   style={{ backgroundColor: colors.dark_terra[100] }}>
                <svg className="w-6 h-6" style={{ color: colors.dark_terra[600] }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2" style={{ color: colors.dark_terra[800] }}>Visit Us</h3>
              <p className="text-sm" style={{ color: colors.slate_gray[600] }}>Riyadh Front</p>
              <p className="text-sm" style={{ color: colors.slate_gray[600] }}>Riyadh, Saudi Arabia</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8">
            <button 
              onClick={() => onNavigate('apply')}
              className="px-8 py-3 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: colors.dark_blue[600] }}
              onMouseEnter={(e) => e.target.style.backgroundColor = colors.dark_blue[700]}
              onMouseLeave={(e) => e.target.style.backgroundColor = colors.dark_blue[600]}
            >
              Start Your Innovation Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
// ------------------------------------------------------------------
// MAIN COMPONENT
// ------------------------------------------------------------------

export default function Home() {
  const [activeModal, setActiveModal] = useState(null);
  const [currentSection, setCurrentSection] = useState('home');
  const [hashtag, setHashtag] = useState('#HOME');

  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  const navigateToSection = (section) => {
    setCurrentSection(section);
    setHashtag(`#${section.toUpperCase()}`);
    window.scrollTo(0, 0);
  };

  const handleApplicationSubmit = () => {
    setTimeout(() => {
      navigateToSection('home');
    }, 3000);
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'home':
        return <HomeSection onNavigate={navigateToSection} />;
      case 'apply':
        return <ApplicationFormSection onNavigate={navigateToSection} onApplicationSubmit={handleApplicationSubmit} />;
      case 'status':
        return <StatusSection onNavigate={navigateToSection} />;
      case 'team':
        return <TeamSection onNavigate={navigateToSection} />;
      case 'portfolio':
        return <PortfolioSection onNavigate={navigateToSection} />;
      default:
        return <HomeSection onNavigate={navigateToSection} />;
    }
  };

  return (
    <BinaryBackground>
      {/* Updated Navigation */}
      <nav 
        className="fixed top-0 w-full backdrop-blur-md  z-50 border-b shadow-lg  "
        style={{ 
          backgroundColor: `${colors.neutral_beige[50]}CC`,
          borderColor: colors.dark_green[200]
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 sm:gap-8">
              <a href="home">
              <div className="flex items-center gap-3">
                <img 
                  src="https://res.cloudinary.com/dyeomcmin/image/upload/v1763867748/ChatGPT_Image_Nov_22_2025_10_14_54_PM_ddmola.png" 
                  className="w-10  sm:w-10 -mr-4 pb-4 " 
                />
                <div className="text-xl sm:text-2xl font-bold" style={{ color: colors.dark_blue[800] }}>
                  WAII
                </div>
                <div className="hidden opacity-0 sm:block text-sm font-medium" style={{ color: colors.dark_green[600] }}>
                  {hashtag}
                </div>
              </div>
              </a>
              <div className="hidden md:flex items-center -ml-8 gap-6">
                <button 
                  onClick={() => navigateToSection('home')}
                  className={`transition-colors ${
                    currentSection === 'home' 
                      ? 'font-semibold' 
                      : 'hover:opacity-80'
                  }`}
                  style={{ 
                    color: currentSection === 'home' 
                      ? colors.dark_green[600] 
                      : colors.dark_blue[600]
                  }}
                >
                  Home
                </button>
                <button 
                  onClick={() => navigateToSection('team')}
                  className={`transition-colors ${
                    currentSection === 'team' 
                      ? 'font-semibold' 
                      : 'hover:opacity-80'
                  }`}
                  style={{ 
                    color: currentSection === 'team' 
                      ? colors.dark_green[600] 
                      : colors.dark_blue[600]
                  }}
                >
                  Team
                </button>
                <button 
                  onClick={() => navigateToSection('portfolio')}
                  className={`transition-colors ${
                    currentSection === 'portfolio' 
                      ? 'font-semibold' 
                      : 'hover:opacity-80'
                  }`}
                  style={{ 
                    color: currentSection === 'portfolio' 
                      ? colors.dark_green[600] 
                      : colors.dark_blue[600]
                  }}
                >
                  Portfolio
                </button>
                <button 
                  onClick={() => openModal('mission')}
                  className="transition-colors hover:opacity-80"
                  style={{ color: colors.dark_blue[600] }}
                >
                  Mission
                </button>
                {/* <button 
                  onClick={() => openModal('structure')}
                  className="transition-colors hover:opacity-80"
                  style={{ color: colors.dark_blue[600] }}
                >
                  Structure
                </button> */}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigateToSection('status')}
                className="hidden sm:block border px-4 py-2 rounded-lg font-semibold transition-colors text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ 
                  borderColor: colors.dark_green[500],
                  color: colors.dark_green[600],
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = colors.dark_green[50];
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Check Status
              </button>
              <button 
                onClick={() => navigateToSection('apply')}
                className="px-4 sm:px-6 py-2 rounded-lg font-semibold transition-colors text-sm sm:text-base text-white shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: colors.dark_blue[600] }}
                onMouseEnter={(e) => e.target.style.backgroundColor = colors.dark_blue[700]}
                onMouseLeave={(e) => e.target.style.backgroundColor = colors.dark_blue[600]}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modals */}
      <MissionModal isOpen={activeModal === 'mission'} onClose={closeModal} />
      <StructureModal isOpen={activeModal === 'structure'} onClose={closeModal} />
      <StackModal isOpen={activeModal === 'stack'} onClose={closeModal} />
      <TeamModal isOpen={activeModal === 'team'} onClose={closeModal} />

      <main className="pt-16">
        {renderCurrentSection()}
      </main>

      {/* Updated Footer */}
      <footer 
        className="py-8 sm:py-12 border-t"
        style={{ 
          backgroundColor: colors.neutral_beige[100],
          borderColor: colors.dark_terra[200]
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src="https://res.cloudinary.com/dyeomcmin/image/upload/v1763867748/ChatGPT_Image_Nov_22_2025_10_14_54_PM_ddmola.png" 
                  className="w-10  sm:w-12 -mr-4 pb-4" 
                />
                <div className="text-2xl sm:text-2xl font-bold" style={{ color: colors.dark_blue[800] }}>
                  WAII
                </div>
              </div>
              <p className="text-sm sm:text-base" style={{ color: colors.slate_gray[600] }}>
                With AI We Innovate - Transforming Saudi Arabia's innovation ecosystem
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: colors.dark_blue[800] }}>Program</h3>
              <div className="space-y-2 text-sm" style={{ color: colors.slate_gray[600] }}>
                <button onClick={() => openModal('mission')} className="block hover:underline transition-all text-left">Mission</button>
                <button onClick={() => openModal('structure')} className="block hover:underline transition-all text-left">Structure</button>
                <button onClick={() => openModal('stack')} className="block hover:underline transition-all text-left">Stack</button>
                <button onClick={() => navigateToSection('team')} className="block hover:underline transition-all text-left">Team</button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: colors.dark_blue[800] }}>Resources</h3>
              <div className="space-y-2 text-sm" style={{ color: colors.slate_gray[600] }}>
                <button onClick={() => navigateToSection('apply')} className="block hover:underline transition-all text-left">Apply</button>
                <button onClick={() => navigateToSection('status')} className="block hover:underline transition-all text-left">Status Check</button>
                <button onClick={() => navigateToSection('portfolio')} className="block hover:underline transition-all text-left">Portfolio</button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: colors.dark_blue[800] }}>Contact</h3>
              <div className="space-y-2 text-sm" style={{ color: colors.slate_gray[600] }}>
                <div>info@waii.gov.sa</div>
                <div>+966 12 345 6789</div>
                <div>Riyadh, Saudi Arabia</div>
              </div>
            </div>
          </div>
          <div 
            className="border-t mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-sm"
            style={{ 
              borderColor: colors.dark_terra[200],
              color: colors.slate_gray[500]
            }}
          >
            <p>© 2024 With AI We Innovate (WAII). All rights reserved.</p>
          </div>
        </div>
      </footer>
    </BinaryBackground>
  );
}