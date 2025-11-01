import React, { useState } from 'react';
import { X } from 'lucide-react';

interface Skill {
  name: string;
  description: string;
}

const skills: Skill[] = [
  {
    name: 'UI/UX Design',
    description: 'I leverage design thinking principles to create intuitive user experiences. Using tools like Figma, I prototype and wireframe solutions that balance user needs with business objectives. My approach involves user research, persona development, and iterative design based on feedback and analytics.'
  },
  {
    name: 'Gemini API Integration',
    description: 'I have extensive experience integrating Google\'s Gemini AI API into products. This includes prompt engineering, response optimization, and building AI-powered workflows that enhance user productivity. I focus on creating seamless AI experiences that feel natural and add genuine value.'
  },
  {
    name: 'Roadmap Planning',
    description: 'I develop strategic product roadmaps that align with business goals and user needs. My process involves stakeholder alignment, priority frameworks (like RICE), and continuous iteration based on market feedback. I ensure roadmaps are flexible yet focused on delivering measurable outcomes.'
  },
  {
    name: 'Data Analytics',
    description: 'I use tools like Amplitude, MoEngage, and Google Analytics to drive product decisions. My approach involves setting up proper tracking, creating meaningful dashboards, and translating data insights into actionable product improvements. I focus on metrics that matter for business growth.'
  },
  {
    name: 'Agile Methodology',
    description: 'I implement agile practices that optimize team productivity and product delivery. This includes sprint planning, backlog management, and continuous improvement processes. I adapt agile frameworks to fit team needs while maintaining focus on delivering value to users.'
  },
  {
    name: 'Stakeholder Management',
    description: 'I excel at aligning diverse stakeholders around product vision and priorities. My approach involves clear communication, regular updates, and collaborative decision-making processes. I ensure all voices are heard while maintaining product focus and momentum.'
  }
];

const philosophy = {
  title: 'My Product Philosophy',
  description: 'I believe great products are born from deep user empathy and relentless execution. My approach centers on understanding the real problems users face, not just what they say they want. I combine data-driven insights with intuitive design to create solutions that feel inevitable once users experience them. Every feature should have a clear purpose, measurable impact, and contribute to the overall product narrative. I prioritize building products that scale both technically and organizationally, ensuring sustainable growth while maintaining quality and user satisfaction.'
};

interface HowIWorkProps {
  profileImage: string;
  onClose: () => void;
}

const HowIWork: React.FC<HowIWorkProps> = ({ profileImage, onClose }) => {
  const [showHowIWork, setShowHowIWork] = useState(false);
  const [activeSkill, setActiveSkill] = useState<string>('philosophy');
  const [isHovering, setIsHovering] = useState(false);

  const handleShowHowIWork = () => {
    setShowHowIWork(true);
  };

  const handleClose = () => {
    setShowHowIWork(false);
    setActiveSkill('philosophy');
    onClose();
  };

  const getActiveContent = () => {
    if (activeSkill === 'philosophy') {
      return philosophy;
    }
    const skill = skills.find(s => s.name === activeSkill);
    return skill ? { title: skill.name, description: skill.description } : philosophy;
  };

  if (!showHowIWork) {
    return (
      <div className="relative w-80 h-80 mx-auto">
        <div 
          className="relative w-full h-full rounded-full overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={handleShowHowIWork}
        >
          <img 
            src={profileImage} 
            alt="Venkatesh Murthy N S - Product Manager"
            className="w-full h-full object-cover"
          />
          
          {/* Hover Overlay */}
          <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-all duration-300 ${
            isHovering ? 'opacity-100' : 'opacity-0'
          }`}>
            <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-lg shadow-lg transform transition-all duration-300 hover:scale-105">
              How I Work
            </button>
          </div>
        </div>
      </div>
    );
  }

  const activeContent = getActiveContent();

  return (
    <div className="w-full max-w-4xl mx-auto p-6 animate-in fade-in duration-500">
      {/* Glassmorphism Container */}
      <div className="relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 group"
        >
          <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-200" />
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-white mb-8 text-center">How I Work</h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
          {/* Philosophy Button */}
          <button
            onClick={() => setActiveSkill('philosophy')}
            className={`px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
              activeSkill === 'philosophy'
                ? 'bg-blue-500/30 text-white border-2 border-blue-400/50 shadow-lg'
                : 'bg-white/10 text-white/80 border border-white/20 hover:bg-white/20 hover:text-white'
            }`}
          >
            My Philosophy
          </button>
          
          {/* Skill Buttons */}
          {skills.map((skill) => (
            <button
              key={skill.name}
              onClick={() => setActiveSkill(skill.name)}
              className={`px-4 py-3 rounded-xl font-medium transition-all duration-200 text-sm ${
                activeSkill === skill.name
                  ? 'bg-blue-500/30 text-white border-2 border-blue-400/50 shadow-lg'
                  : 'bg-white/10 text-white/80 border border-white/20 hover:bg-white/20 hover:text-white'
              }`}
            >
              {skill.name}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <h3 className="text-2xl font-semibold text-white mb-4 transition-all duration-300">
            {activeContent.title}
          </h3>
          <p className="text-white/90 leading-relaxed text-lg transition-all duration-300">
            {activeContent.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowIWork;
