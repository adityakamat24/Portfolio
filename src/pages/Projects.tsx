import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      longDescription: "Built with React, Node.js, and PostgreSQL. Features include user authentication, shopping cart, order tracking, payment integration with Stripe, and comprehensive admin panel.",
      skills: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      github: "https://github.com/alexchen/ecommerce-platform",
      live: "https://ecommerce-demo.alexchen.dev",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      title: "Task Management Dashboard",
      description: "Collaborative task management application with real-time updates, team collaboration features, and analytics.",
      longDescription: "A productivity tool built with React and Firebase. Includes drag-and-drop task boards, real-time collaboration, time tracking, and project analytics.",
      skills: ["React", "Firebase", "Material-UI", "Chart.js"],
      github: "https://github.com/alexchen/task-manager",
      live: "https://tasks.alexchen.dev",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Weather Analytics App",
      description: "Weather forecasting application with location-based services, historical data analysis, and beautiful visualizations.",
      longDescription: "Integrated with multiple weather APIs to provide accurate forecasts. Features include location detection, weather maps, historical data comparison, and trend analysis.",
      skills: ["Vue.js", "Python", "D3.js", "Weather API"],
      github: "https://github.com/alexchen/weather-app",
      live: "https://weather.alexchen.dev",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with multi-platform integration and automated reporting.",
      longDescription: "Connects to major social platforms to provide unified analytics, scheduled posting, and engagement tracking with automated report generation.",
      skills: ["Next.js", "TypeScript", "MongoDB", "Social APIs"],
      github: "https://github.com/alexchen/social-dashboard",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search, virtual tours, and mortgage calculator integration.",
      longDescription: "Full-featured real estate platform with property listings, advanced filtering, virtual tour integration, and financial calculators.",
      skills: ["React", "Express", "MySQL", "Mapbox"],
      github: "https://github.com/alexchen/real-estate",
      live: "https://realestate.alexchen.dev",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course creation, progress tracking, and interactive learning modules.",
      longDescription: "Comprehensive LMS with video streaming, quiz creation, progress tracking, and certificate generation for online education.",
      skills: ["Angular", "Node.js", "PostgreSQL", "Video.js"],
      github: "https://github.com/alexchen/lms-platform",
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-5xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills and passion for creating 
            meaningful digital experiences. Each project represents a unique challenge 
            and learning opportunity.
          </p>
        </div>

        {/* Featured Project */}
        {projects.filter(p => p.featured).map((project, index) => (
          <div key={index} className="mb-20 slide-up">
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
                    {project.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="skill-tag">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Button className="btn-primary group" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <Eye className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                        Live Demo
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="btn-glass group" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="glass-card p-4 hover:scale-105 transition-transform duration-500">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="text-lg font-semibold opacity-75 relative z-10">Project Preview</span>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </div>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl float" />
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl float" style={{ animationDelay: '2s' }} />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 slide-up">
          {projects.filter(p => !p.featured).map((project, index) => (
            <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300">
              <CardHeader className="p-6">
                {/* Project Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-4 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                  <span className="text-sm font-medium opacity-75">Project Preview</span>
                </div>
                
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="px-6 pb-6">
                <p className="text-foreground-muted mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.slice(0, 3).map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {project.skills.length > 3 && (
                    <Badge variant="secondary" className="text-xs opacity-75">
                      +{project.skills.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex space-x-3">
                  {project.live && (
                    <Button size="sm" className="btn-primary flex-1 group" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 w-3 h-3 group-hover:scale-110 transition-transform" />
                        Demo
                      </a>
                    </Button>
                  )}
                  
                  <Button size="sm" variant="outline" className="btn-glass flex-1 group" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 w-3 h-3 group-hover:rotate-12 transition-transform" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 slide-up">
          <div className="glass-card p-12">
            <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
            <p className="text-foreground-muted mb-8 max-w-2xl mx-auto">
              I'm always excited about new challenges and interesting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <Button className="btn-primary" size="lg" asChild>
              <a href="/contact">
                Start a Conversation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;