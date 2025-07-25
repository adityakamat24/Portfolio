import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Code, Palette, Database, Settings, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const [selectedSkill, setSelectedSkill] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skills = {
    "Languages": [
      { name: "JavaScript", level: "Expert", projects: ["E-commerce Platform", "Task Manager", "Portfolio Site"] },
      { name: "TypeScript", level: "Advanced", projects: ["React Dashboard", "API Service"] },
      { name: "Python", level: "Advanced", projects: ["Data Analytics Tool", "Web Scraper"] },
      { name: "Java", level: "Intermediate", projects: ["Banking System", "Mobile App Backend"] },
      { name: "SQL", level: "Advanced", projects: ["Database Design", "Analytics Platform"] }
    ],
    "Frontend": [
      { name: "React", level: "Expert", projects: ["SaaS Dashboard", "E-commerce Site", "Portfolio"] },
      { name: "Next.js", level: "Advanced", projects: ["Blog Platform", "Marketing Site"] },
      { name: "Tailwind CSS", level: "Expert", projects: ["Design System", "Multiple UIs"] },
      { name: "Framer Motion", level: "Intermediate", projects: ["Animated Landing Page"] }
    ],
    "Backend": [
      { name: "Node.js", level: "Advanced", projects: ["REST API", "Real-time Chat"] },
      { name: "Express", level: "Advanced", projects: ["API Gateway", "Microservices"] },
      { name: "PostgreSQL", level: "Advanced", projects: ["User Management", "Analytics DB"] },
      { name: "MongoDB", level: "Intermediate", projects: ["Content Management", "Social App"] }
    ],
    "Tools": [
      { name: "Git", level: "Expert", projects: ["All Projects"] },
      { name: "Docker", level: "Intermediate", projects: ["Deployment Pipeline"] },
      { name: "AWS", level: "Intermediate", projects: ["Cloud Infrastructure"] },
      { name: "Figma", level: "Advanced", projects: ["UI/UX Design", "Design Systems"] }
    ]
  };

  const softSkills = [
    { icon: Users, title: "Team Collaboration", description: "Experience working in agile teams and cross-functional projects" },
    { icon: Lightbulb, title: "Problem Solving", description: "Creative approach to complex technical challenges" },
    { icon: Code, title: "Code Quality", description: "Committed to clean, maintainable, and well-documented code" },
    { icon: Palette, title: "Design Thinking", description: "User-centered design approach with attention to detail" }
  ];

  const handleSkillClick = (skill: any) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer who loves creating digital experiences 
            that make a difference. With a background in both design and development, 
            I bring a unique perspective to every project.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 slide-up">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">My Journey</h2>
            <div className="space-y-4 text-foreground-muted">
              <p>
                My coding journey began during my computer science studies, where I discovered 
                the perfect blend of logical problem-solving and creative expression. What started 
                as curiosity about how websites work evolved into a passion for building 
                meaningful digital solutions.
              </p>
              <p>
                Over the past 3 years, I've had the privilege of working on diverse projects, 
                from startup MVPs to enterprise applications. Each project has taught me 
                something new and reinforced my belief that great software is built at the 
                intersection of functionality and user experience.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing 
                to open-source projects, or experimenting with the latest web technologies. 
                I believe in continuous learning and staying ahead of the curve in this 
                ever-evolving field.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">What Drives Me</h2>
            <div className="space-y-4 text-foreground-muted">
              <p>
                I'm motivated by the impact technology can have on people's lives. Whether 
                it's streamlining a business process, creating an engaging user experience, 
                or solving a complex technical challenge, I find joy in building solutions 
                that matter.
              </p>
              <p>
                My approach combines technical expertise with design thinking. I believe 
                that beautiful code and beautiful interfaces go hand in hand. Every line 
                of code should serve a purpose, and every pixel should have intention.
              </p>
            </div>

            {/* Soft Skills Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {softSkills.map((skill, index) => (
                <Card key={index} className="glass-card hover:bg-white/5 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4">
                    <skill.icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">{skill.title}</h3>
                    <p className="text-sm text-foreground-muted">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="slide-up">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          
          <div className="space-y-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <div key={category} className="glass-card p-8">
                <div className="flex items-center mb-6">
                  {category === "Languages" && <Code className="w-6 h-6 text-primary mr-3" />}
                  {category === "Frontend" && <Palette className="w-6 h-6 text-primary mr-3" />}
                  {category === "Backend" && <Database className="w-6 h-6 text-primary mr-3" />}
                  {category === "Tools" && <Settings className="w-6 h-6 text-primary mr-3" />}
                  <h3 className="text-2xl font-semibold">{category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="skill-tag cursor-pointer"
                      onClick={() => handleSkillClick(skill)}
                    >
                      {skill.name}
                      <span className="ml-2 text-xs opacity-75">({skill.level})</span>
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="glass-card border-white/20">
            <DialogHeader>
              <DialogTitle className="text-2xl text-gradient">
                {selectedSkill?.name}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Proficiency Level</h4>
                <Badge variant="secondary" className="skill-tag">
                  {selectedSkill?.level}
                </Badge>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Projects Using This Skill</h4>
                <div className="space-y-2">
                  {selectedSkill?.projects.map((project, index) => (
                    <div key={index} className="glass-card p-3">
                      <span className="text-foreground-muted">{project}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default About;