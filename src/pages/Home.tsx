import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import professionalPhoto from '@/assets/professional-photo.jpg';

const Home = () => {
  const navigate = useNavigate();

  const openResume = () => {
    // You can replace this with your actual resume URL
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Photo */}
          <div className="relative fade-in">
            <div className="relative">
              {/* Main photo with glassmorphism frame */}
              <div className="glass-card p-8 relative overflow-hidden">
                <img
                  src={professionalPhoto}
                  alt="Alex Chen"
                  className="w-full h-auto rounded-xl object-cover shadow-2xl"
                />
                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-xl float" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-accent to-primary rounded-full opacity-15 blur-2xl float" style={{ animationDelay: '2s' }} />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="slide-up space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient">Alex Chen</span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-foreground-muted font-light">
                Full-Stack Developer & UI/UX Designer
              </h2>
              
              <p className="text-lg text-foreground-muted leading-relaxed max-w-xl">
                I craft beautiful, functional web experiences that solve real problems. 
                Passionate about clean code, user-centered design, and bringing ideas to life.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-primary group"
                onClick={() => navigate('/contact')}
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-glass group"
                onClick={openResume}
              >
                <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                View Resume
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">50+</div>
                <div className="text-sm text-foreground-muted">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">3+</div>
                <div className="text-sm text-foreground-muted">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">100%</div>
                <div className="text-sm text-foreground-muted">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default Home;