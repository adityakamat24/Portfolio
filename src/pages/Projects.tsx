import { useState, MouseEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Projects = () => {
  const projects = [
    {
      title: "ScanAI",
      description:
        "An AI-powered ingredient scanner that flags allergens and health risks from food label images using transformer models.",
      longDescription:
        "ScanAI is a full-stack application that analyzes uploaded product label images and returns a personalized ingredient safety score based on user profiles. I trained a custom 100M parameter transformer model for ingredient classification using domain-specific data, applied knowledge distillation and data augmentation to improve generalization, and integrated the model into a FastAPI backend. The frontend is built with React and Tailwind CSS, featuring real-time UI updates and modular cards. The system is deployed on AWS EC2 with Docker and Nginx, supporting scalable, low-latency inference.",
      skills: [
        "ReactJS",
        "Tailwind CSS",
        "Express.js",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "AWS EC2",
        "Transformers",
        "LLMs",
        "Knowledge Distillation",
        "Model Training",
        "Data Augmentation",
        "Image Processing",
      ],
      github: "https://github.com/adityakamat24/ScanAI",
      live: "https://tinyurl.com/ScanAI",
      image: "/images/SCANaI.png",
      featured: true,
    },
    {
      title: "Verifier-Guided Speculative Decoding",
      description:
        "Improved speculative decoding with verifier guidance for more efficient and stable autoregressive generation.",
      longDescription:
        "Implemented a prototype of verifier-guided speculative decoding where a lightweight verifier layer filters and schedules drafted tokens before sending them to the target model. Explored Tree and Cascade policies for structuring verification, tracked metrics like throughput, acceptance rate, and stability, and benchmarked performance across variants. Designed the system to reuse KV-cache, compute entropy- and agreement-based signals, and visualize results with detailed benchmarking analysis.",
      skills: [
        "Speculative Decoding",
        "Transformers",
        "PyTorch",
        "KV-Cache",
        "Distributed Inference",
        "Research Prototyping",
      ],
      github:
        "https://github.com/adityakamat24/Verifier-Guided-Speculative-Decoding",
      image: "/images/VGSD.png",
    },
    {
      title: "Go-RAFT",
      description:
        "A fault-tolerant distributed key-value store built using the Raft consensus algorithm.",
      longDescription:
        "Designed and implemented a distributed key-value store in Go with strong consistency guarantees using Raft. Included leader election, log replication, and recovery under failure scenarios. Used gRPC and Protocol Buffers for inter-node communication and tested with simulated partitions and network drops.",
      skills: [
        "Go",
        "Raft",
        "gRPC",
        "Protocol Buffers",
        "Distributed Systems",
        "Concurrency",
      ],
      github: "https://github.com/adityakamat24/go-raft",
      image: "/images/GORAFT.png",
    },
    {
      title: "GPT-2 Scaling with FlashAttention & FSDP",
      description:
        "Scaled a 124M GPT-2 model using FlashAttention and PyTorch FSDP for faster and more memory-efficient training.",
      longDescription:
        "Built a distributed training pipeline for GPT-2 using PyTorch Fully Sharded Data Parallel (FSDP) and FlashAttention. Achieved 3.8× speedup and 42% memory savings. Created visual dashboards to monitor GPU utilization and training convergence trends across A100 and 3090 clusters.",
      skills: [
        "PyTorch",
        "FSDP",
        "FlashAttention",
        "Distributed Training",
        "Mixed Precision",
        "LLMs",
      ],
      github: "https://github.com/adityakamat24/gpt2-flashattention-fsdp",
      image: "/images/GPT2 SCaling with Flash Attention.png",
    },
    {
      title: "Custom Triton Kernels for Transformer Inference",
      description:
        "Reduced transformer inference latency using fused attention kernels written in Triton.",
      longDescription:
        "Developed custom fused attention kernels in Triton, integrated them into PyTorch, and profiled using NVProf and nvdisasm to optimize warp-level parallelism and memory coalescing. Packaged as a reusable extension for future model deployment pipelines.",
      skills: [
        "Triton",
        "PyTorch",
        "CUDA",
        "Kernel Optimization",
        "Profiling",
        "Transformer Inference",
      ],
      github: "https://github.com/adityakamat24/triton-fast-mha",
      image: "/images/Custom Triton Kernels for Inference.png",
    },
    {
      title: "Low-Memory LLM Inference Pipeline",
      description:
        "Designed a lightweight transformer inference stack optimized for GPUs with limited VRAM.",
      longDescription:
        "Built a containerized inference system using quantized transformer models, tokenized streaming, and async batching. Deployed as RESTful microservices supporting real-time inference on RTX 3060-class GPUs, enabling 60% VRAM savings.",
      skills: [
        "Transformers",
        "Quantization",
        "Docker",
        "Streaming Inference",
        "Async Batching",
        "LLMs",
      ],
      github: "https://github.com/adityakamat24/low-memory-llm-inference",
      image: "/images/Low Memory LLM Inference Pipeline.png",
    },
    {
      title: "Robot Simulation for Assistive Tasks",
      description:
        "Simulation framework for AI-driven assistive robotics using Unreal Engine and neural network-based interaction logic.",
      longDescription:
        "Built a modular simulation platform in Unreal Engine using C++ and Blueprints to emulate assistive tasks like grasping and pouring. Integrated SDFs for improved collision handling and connected LLMs for high-level task automation in robotic control sequences.",
      skills: [
        "C++",
        "Unreal Engine",
        "SPH",
        "Neural SDFs",
        "LLMs",
        "Simulation",
        "Robotics",
      ],
      github: "https://github.com/adityakamat24/robot-assist-sim",
      image: "/images/Robot Simulation for Assistive Tasks.png",
    },
    {
      title: "WordleBot",
      description:
        "A CLI-based intelligent Wordle solver that mimics human deduction using filtering logic and entropy.",
      longDescription:
        "WordleBot is a Python-based command-line tool that plays and solves the Wordle game by simulating human-like reasoning. It uses letter frequency, positional filtering, and entropy-based heuristics to narrow down guesses efficiently. Built for fun and logic exploration, it showcases search space reduction and simulation thinking.",
      skills: [
        "Python",
        "CLI Tools",
        "Search Algorithms",
        "Heuristics",
        "Simulation",
        "Game Solving",
      ],
      github: "https://github.com/adityakamat24/WordleBot",
      image: "/images/WordleBot.png",
    },
  ];

  // modal state
  const [open, setOpen] = useState(false);
  const [selected, setSelected] =
    useState<(typeof projects)[number] | null>(null);

  // per-card inline expansions
  const [expandedSkills, setExpandedSkills] = useState<Record<number, boolean>>(
    {}
  );
  const [expandedDesc, setExpandedDesc] = useState<Record<number, boolean>>({});

  const openModal = (project: (typeof projects)[number]) => {
    setSelected(project);
    setOpen(true);
  };

  const stop = (e: MouseEvent) => e.stopPropagation();

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-5xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills and passion for
            creating meaningful digital experiences. Each project represents a
            unique challenge and learning opportunity.
          </p>
        </div>

        {/* Featured Project */}
        {projects
          .filter((p) => p.featured)
          .map((project, index) => (
            <div key={`featured-${index}`} className="mb-20 slide-up">
              <div className="glass-card p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                        Featured Project
                      </Badge>
                    </div>

                    <h2 className="text-4xl font-bold">{project.title}</h2>

                    <p className="text-lg text-foreground-muted leading-relaxed">
                      {project.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="skill-tag">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.live && (
                        <Button className="btn-primary group" asChild onClick={stop}>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} Live Demo`}
                          >
                            <Eye className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                            Live Demo
                          </a>
                        </Button>
                      )}

                      <Button variant="outline" className="btn-glass group" asChild onClick={stop}>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} Source Code`}
                        >
                          <Github className="mr-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                          Source Code
                        </a>
                      </Button>

                      <Button
                        variant="secondary"
                        className="group"
                        onClick={() => openModal(project)}
                        aria-label={`Open details for ${project.title}`}
                      >
                        Details
                      </Button>
                    </div>
                  </div>

                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => openModal(project)}
                      className="w-full text-left"
                      aria-label={`Open details for ${project.title}`}
                    >
                      <div className="glass-card p-4 hover:scale-105 transition-transform duration-500">
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </button>
                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl float" />
                    <div
                      className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl float"
                      style={{ animationDelay: "2s" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 slide-up">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => {
              const showAll = !!expandedSkills[index];
              const showDesc = !!expandedDesc[index];
              const visibleSkills = showAll
                ? project.skills
                : project.skills.slice(0, 3);
              const hiddenCount = project.skills.length - 3;

              return (
                <Card
                  key={project.title}
                  className="glass-card group hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={() => openModal(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && openModal(project)}
                  aria-label={`Open details for ${project.title}`}
                >
                  <CardHeader className="p-6">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="px-6 pb-6">
                    <p className="text-foreground-muted mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Inline long description toggle */}
                    {showDesc && (
                      <p
                        id={`desc-${index}`}
                        className="text-sm text-foreground-muted mb-4"
                      >
                        {project.longDescription}
                      </p>
                    )}
                    <button
                      className="text-sm text-primary underline underline-offset-4 mb-4"
                      onClick={(e) => {
                        stop(e);
                        setExpandedDesc((prev) => ({
                          ...prev,
                          [index]: !prev[index],
                        }));
                      }}
                      aria-expanded={showDesc}
                      aria-controls={`desc-${index}`}
                    >
                      {showDesc ? "Show less" : "Show more"}
                    </button>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {visibleSkills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {hiddenCount > 0 && !showAll && (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="h-6 px-2 text-xs"
                          onClick={(e) => {
                            stop(e);
                            setExpandedSkills((prev) => ({ ...prev, [index]: true }));
                          }}
                          aria-label={`Show ${hiddenCount} more skills`}
                        >
                          +{hiddenCount} more
                        </Button>
                      )}
                      {showAll && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 px-2 text-xs"
                          onClick={(e) => {
                            stop(e);
                            setExpandedSkills((prev) => ({ ...prev, [index]: false }));
                          }}
                          aria-label="Show fewer skills"
                        >
                          Show fewer
                        </Button>
                      )}
                    </div>

                    <div className="flex space-x-3">
                      {project.live && (
                        <Button
                          size="sm"
                          className="btn-primary flex-1 group"
                          asChild
                          onClick={stop}
                        >
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} demo`}
                          >
                            <ExternalLink className="mr-2 w-3 h-3 group-hover:scale-110 transition-transform" />
                            Demo
                          </a>
                        </Button>
                      )}

                      <Button
                        size="sm"
                        variant="outline"
                        className="btn-glass flex-1 group"
                        asChild
                        onClick={stop}
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} code`}
                        >
                          <Github className="mr-2 w-3 h-3 group-hover:rotate-12 transition-transform" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 slide-up">
          <div className="glass-card p-12">
            <h2 className="text-3xl font-bold mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-foreground-muted mb-8 max-w-2xl mx-auto">
              I'm always excited about new challenges and interesting projects.
              Let's discuss how we can bring your ideas to life.
            </p>
            <Button className="btn-primary" size="lg" asChild>
              <a href="/contact">Start a Conversation</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Modal with full details (scrollable & responsive) */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          // responsive width + capped height + scrolling
          className="w-[92vw] sm:max-w-3xl max-h-[85vh] overflow-y-auto p-0 sm:p-6 rounded-2xl"
        >
          {selected && (
            <>
              {/* Sticky header so the title stays visible */}
              <DialogHeader className="sticky top-0 z-10 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 sm:p-0">
                <DialogTitle className="text-2xl break-words">
                  {selected.title}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {selected.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 p-4 sm:p-0">
                {/* Image constrained to viewport */}
                <div className="w-full rounded-xl bg-muted flex items-center justify-center overflow-hidden">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-auto max-h-[40vh] object-contain"
                    loading="lazy"
                  />
                </div>

                <p className="text-foreground-muted leading-relaxed">
                  {selected.longDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {selected.skills.map((s, i) => (
                    <Badge key={i} variant="secondary">
                      {s}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pb-2">
                  {selected.live && (
                    <Button className="btn-primary" asChild>
                      <a
                        href={selected.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${selected.title} live demo`}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" className="btn-glass" asChild>
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${selected.title} source code`}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
