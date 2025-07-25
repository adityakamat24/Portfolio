import { Button } from '@/components/ui/button';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import professionalPhoto from '@/assets/professional-photo.jpg';

const Home = () => {
  const scrollToContent = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  const openResume = () => {
    // You can replace this with your actual resume URL
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Creative Photo */}
          <div className="relative fade-in">
            <div className="relative">
              {/* Creative hexagon photo with dynamic border */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-all duration-700 animate-pulse" />
                <div 
                  className="relative glass-card p-6 rounded-3xl overflow-hidden transform hover:scale-105 transition-all duration-500"
                  style={{
                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                  }}
                >
                  <img
                    src={professionalPhoto}
                    alt="Alex Chen"
                    className="w-full h-auto object-cover shadow-2xl transform hover:scale-110 transition-transform duration-700"
                    style={{
                      clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                    }}
                  />
                </div>
                {/* Dynamic floating elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/30 rounded-full blur-xl float animate-bounce" style={{ animationDelay: '0s' }} />
                <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-accent/25 rounded-full blur-2xl float" style={{ animationDelay: '1.5s' }} />
                <div className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-lg float" style={{ animationDelay: '3s' }} />
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
                asChild
              >
                <a href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
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

        {/* Enhanced CTA Section */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex space-x-4">
              <a
                href="/projects"
                className="glass-card px-6 py-3 text-sm font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
              >
                <span className="mr-2">🚀</span>
                View My Work
              </a>
              <a
                href="/contact"
                className="glass-card px-6 py-3 text-sm font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
              >
                <span className="mr-2">💬</span>
                Let's Talk
              </a>
            </div>
            <ChevronDown className="w-5 h-5 text-foreground-muted animate-bounce opacity-50" />
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