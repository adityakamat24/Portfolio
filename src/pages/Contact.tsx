import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex.chen.dev@gmail.com',
      link: 'mailto:alex.chen.dev@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/alexchen',
      color: 'hover:text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/alexchen',
      color: 'hover:text-gray-300'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      link: 'https://twitter.com/alexchen_dev',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            I'm always excited to connect with fellow developers, potential clients, 
            and anyone interested in discussing technology, design, or exciting project opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="slide-up">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Let's Start a Conversation</h2>
                <p className="text-foreground-muted leading-relaxed mb-8">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you. I typically respond within 24 hours.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="glass-card hover:bg-white/5 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/20">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{item.label}</h3>
                          {item.link ? (
                            <a 
                              href={item.link} 
                              className="text-foreground-muted hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span className="text-foreground-muted">{item.value}</span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 glass-card hover:bg-white/5 transition-all duration-300 hover:scale-110 ${social.color}`}
                      title={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="btn-glass w-full justify-start" asChild>
                    <a href="/resume.pdf" target="_blank">
                      <Calendar className="mr-3 w-5 h-5" />
                      Schedule a Call
                    </a>
                  </Button>
                  <Button variant="outline" className="btn-glass w-full justify-start" asChild>
                    <a href="/resume.pdf" target="_blank">
                      <Mail className="mr-3 w-5 h-5" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-up">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="glass-card border-white/20"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="glass-card border-white/20"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="glass-card border-white/20 min-h-[120px]"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-primary w-full group" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 glass-card border-white/10">
                  <p className="text-sm text-foreground-muted">
                    <strong>Response Time:</strong> I typically respond within 24 hours. 
                    For urgent matters, feel free to reach out via phone or LinkedIn.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-20 text-center slide-up">
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Let's Build Something Amazing Together</h2>
            <p className="text-foreground-muted text-lg leading-relaxed mb-8">
              I'm passionate about working with people who share a vision for creating 
              exceptional digital experiences. Whether you're a startup with a big idea, 
              an established company looking to innovate, or a fellow developer interested 
              in collaboration, I'd love to explore how we can work together.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Project Inquiries</h3>
                <p className="text-sm text-foreground-muted">New projects and collaborations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Github className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Open Source</h3>
                <p className="text-sm text-foreground-muted">Contributions and collaborations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Networking</h3>
                <p className="text-sm text-foreground-muted">Coffee chats and tech discussions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;