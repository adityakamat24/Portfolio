import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Code, Palette, Database, Settings, Users, Lightbulb } from 'lucide-react';
import { Server, BrainCircuit } from "lucide-react";

const About = () => {
  const [selectedSkill, setSelectedSkill] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skills = {
    "Languages": [
      { name: "Python", level: "Expert", projects: ["LLM Inference", "ScanAI", "FlashAttention Kernels"] },
      { name: "JavaScript", level: "Advanced", projects: ["ScanAI Frontend", "Portfolio Site"] },
      { name: "C++", level: "Advanced", projects: ["Unreal Engine Robot Simulation"] },
      { name: "Java", level: "Intermediate", projects: ["Coursework", "Backend Practice Projects"] },
      { name: "SQL", level: "Advanced", projects: ["Analytics Dashboards", "ETL for 10M+ Rows"] }
    ],
    "Frontend": [
      { name: "ReactJS", level: "Advanced", projects: ["ScanAI UI", "Portfolio Website"] },
      { name: "Tailwind CSS", level: "Advanced", projects: ["Custom UI Components", "Real-time Feedback UI"] },
      { name: "Firebase", level: "Intermediate", projects: ["Personal Projects", "Realtime Storage"] }
    ],
    "Backend": [
      { name: "FastAPI", level: "Expert", projects: ["ScanAI Backend", "LLM REST Services"] },
      { name: "Express.js", level: "Advanced", projects: ["ScanAI API Layer"] },
      { name: "PostgreSQL", level: "Advanced", projects: ["User Data Services", "LLM Logs and Queries"] },
      { name: "MongoDB", level: "Intermediate", projects: ["Label Storage", "Content Analysis"] },
      { name: "Redis", level: "Intermediate", projects: ["Caching Layer", "Task Queues"] }
    ],
    "AI/ML": [
      { name: "PyTorch", level: "Expert", projects: ["GPT-2 Scaling", "Transformer Training"] },
      { name: "Transformers (HF)", level: "Advanced", projects: ["LLM Fine-Tuning", "Summarization Models"] },
      { name: "ONNX Runtime", level: "Intermediate", projects: ["Quantized LLM Inference"] },
      { name: "Quantization", level: "Advanced", projects: ["INT8 Model Deployment"] },
      { name: "FlashAttention", level: "Advanced", projects: ["Custom Triton Kernels", "FSDP Training"] },
      { name: "RAG", level: "Intermediate", projects: ["Knowledge-Retrieval Pipelines"] },
      { name: "Triton", level: "Intermediate", projects: ["Fused Attention Kernels"] }
    ],
    "DevOps & Infra": [
      { name: "Docker", level: "Advanced", projects: ["ScanAI Deployment", "LLM Microservices"] },
      { name: "Git", level: "Expert", projects: ["All Projects"] },
      { name: "AWS (EC2/S3)", level: "Intermediate", projects: ["Production Deployments"] },
      { name: "Google Cloud (GCS)", level: "Intermediate", projects: ["Model Storage", "Pipeline Versions"] },
      { name: "GitHub Actions", level: "Advanced", projects: ["CI/CD Pipelines"] },
      { name: "Nginx", level: "Intermediate", projects: ["Reverse Proxy for ScanAI"] }
    ],
    "Tools": [
      { name: "Weights & Biases", level: "Advanced", projects: ["Model Training Monitoring"] },
      { name: "MLflow", level: "Intermediate", projects: ["Experiment Tracking"] },
      { name: "Power BI", level: "Intermediate", projects: ["Backend Metrics Dashboard"] },
      { name: "Matplotlib / Seaborn", level: "Advanced", projects: ["Training Visualizations"] },
      { name: "RStudio", level: "Intermediate", projects: ["Academic Data Projects"] }
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
            I’m an AI engineer and software developer who enjoys building things that work, from LLMs and optimization pipelines to full-stack products. With experience across machine learning, systems engineering, and UI design, I bring both technical depth and product thinking to every project I take on.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 slide-up">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">My Journey</h2>
            <div className="space-y-4 text-foreground-muted">
              <p>
                I didn't get into coding because I had some master plan - it just started with being curious about stuff. I wanted to figure out how software actually works, why these models can somehow "learn" things, and how you go from having an idea to building something that people can actually use.
              </p>
              <p>
                That curiosity kind of took off during my undergrad and honestly, it's turned into something I really love doing - building systems that are both smart and well put together.
              </p>
              <p>
                The last few years, I've been all over the place with projects. Full-stack apps, training and tweaking large language models, you name it. Working on something like ScanAI really taught me how to think about the whole picture - writing the backend stuff, getting AI models to run faster with CUDA, and making frontends that don't suck to use. The internships I've done have been huge too, showing me what engineering looks like when it's not just a side project.
              </p>
              <p>
                These days I'm diving deep into AI work while also writing code that can handle real-world scale, and getting into good design. Not just making things look nice, but making them feel right when you're using them. I can move between optimizing models and building solid software pretty naturally - they're both just different ways of solving problems. And when I need a break from all the screen time, you'll probably find me behind a DJ setup just mixing tracks because it's fun.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">What Drives Me</h2>
            <div className="space-y-4 text-foreground-muted">
              <p>
                I'm just wired to go deep on things. When I see some new tech or come across an idea that grabs my attention, I can't just look at it and move on - I have to figure out how the hell it actually works. I'll tear it apart, read whatever I can get my hands on, mess around with it, and build stuff until it clicks. That's just how my brain works, and honestly, it's what gets me excited about this whole field.
              </p>
              <p>
                I hate staying on the surface of things. If I'm working with something - could be an AI model, some framework I haven't used before, or a system I need to understand - I want to know what's really going on underneath. I learn by getting my hands dirty, asking questions that probably annoy people, and actually building things with it. That's how I figure stuff out, and it's what keeps me interested in doing this work.
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
                  {category === "AI/ML" && <BrainCircuit className="w-6 h-6 text-primary mr-3" />}
                  {category === "DevOps & Infra" && <Server className="w-6 h-6 text-primary mr-3" />}
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