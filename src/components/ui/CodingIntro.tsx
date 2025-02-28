import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useEffect, useState } from 'react';

const CodingIntro = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add listener to check if screen size is less than 768px
    const mobileMediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mobileMediaQuery.matches);

    const handleMobileMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mobileMediaQuery.addEventListener('change', handleMobileMediaQueryChange);
    return () => {
      mobileMediaQuery.removeEventListener('change', handleMobileMediaQueryChange);
    };
  }, []);

  // Simplified code string for mobile
  const mobileCodeString = `const aboutMe = {
  name: "Chandan Kumar",
  title: "Full Stack Developer",
  skills: {
    Frontend: [
      "React", "Next.js",
      "Three.js"
    ],
    Backend: [
      "Node.js", "Express",
      "MongoDB"
    ]
  },
  interests: [
    "Web Dev",
    "AI/ML",
    "Blockchain"
  ],
  contact: "kumarnchandan05@gmail.com"
};`;

  // Full code string for desktop
  const desktopCodeString = `const aboutMe = {
  name: "Chandan Kumar",
  title: "Full Stack Developer & AI Enthusiast",
  location: "India",
  skills: [{
      Category: Frontend,
      Skills: [ "React", "Next.js", "Tailwind CSS", "Three.js", "GSAP", ],
    },
    {
      Category: Backend,
      Skills: [ "Node.js", "Nest.js", "Express.js", "Fastify.js", "MongoDB", "PostgreSQL" ],
    },
    {
      Category: Other,
      Skills: [ "Git", "Github", "Github Actions", "Docker", "Firebase" ],
    },],
  interests: [
    "Web Development", "Artificial Intelligence & Machine Learning", "Blockchain",
  ],
  futureGoal: {
    vision: "To become a Full Stack Developer and contribute to " +
            "the field of web development and Artificial Intelligence " +
            "and solve complex real-world problems."
  },
  contact: "kumarnchandan05@gmail.com"
};

// Currently open to new opportunities
if (youAreHiring) {
  console.log("Let's connect!");
}`;

  const customStyle = {
    background: 'linear-gradient(145deg, rgba(23, 25, 35, 0.95), rgba(27, 32, 46, 0.95))',
    padding: isMobile ? '1em' : '1.5em',
    borderRadius: '0.5em',
    fontSize: isMobile ? '14px' : '18px', // Slightly reduced from 18px
    margin: 0,
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    overflow: 'auto',
    maxHeight: isMobile ? '70vh' : '80vh', // Added maxHeight for desktop
    width: '100%', // Ensure it takes full width
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="code-window relative w-full max-w-full rounded-lg overflow-hidden" // Changed max-w-7xl to max-w-full
    >
      {/* Code Window Header */}
      <div className="absolute top-0 left-0 right-0 h-8 sm:h-10 bg-gradient-to-r from-[#2d2d2d] to-[#1a1a1a] rounded-t-lg flex items-center px-2 sm:px-4 gap-1 sm:gap-2 border-b border-[#ffffff1a]">
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-gray-400 text-xs sm:text-sm font-mono">about-me.ts</span>
      </div>

      {/* Code Content */}
      <div className={`mt-8 sm:mt-10 relative ${isMobile ? 'px-2' : ''}`}>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8758ac33] to-transparent pointer-events-none" />

        <SyntaxHighlighter
          language="typescript"
          style={nightOwl}
          customStyle={customStyle}
          showLineNumbers={!isMobile}
          wrapLines={true}
          wrapLongLines={isMobile}
        >
          {isMobile ? mobileCodeString : desktopCodeString}
        </SyntaxHighlighter>
      </div>
    </motion.div>
  );
};
export default CodingIntro;
