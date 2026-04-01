import React, { useState } from 'react';
import { 
  Code2, 
  Cloud, 
  Database, 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  Calendar,
  Building2,
  Rocket,
  Shield,
  Zap,
  Download,
  Brain,
  Bot,
  Lightbulb,
  Users,
  Globe,
  Terminal,
  BookOpen,
  ArrowRight,
  Sparkles,
  MessageSquare,
  Flame
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { personalInfo, experience, skills, projects, featuredPost, education, testimonials, internationalExperience, aiSection, aiWorkshop, latestNews } from '../data/mock';

const Home = () => {
  const [activeTab, setActiveTab] = useState('all');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/BASTIAN-KEMKA_CV.pdf';
    link.download = 'Bastian_Lontsi_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              BL
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('news')} className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                Aktuelles
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                Über mich
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                Erfahrung
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                Fähigkeiten
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                Projekte
              </button>
              <button onClick={() => scrollToSection('ai')} className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                KI & Zukunft
              </button>
              <button onClick={() => scrollToSection('workshop')} className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                Workshop
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                Kontakt
              </button>
            </div>
            <Button onClick={() => scrollToSection('contact')} size="sm" className="bg-blue-600 hover:bg-blue-700">
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/30 border border-blue-900/50 mb-6">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm text-zinc-300">{personalInfo.status}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {personalInfo.name}
            </h1>
            
            <div className="text-2xl md:text-3xl text-zinc-400 mb-4 font-light">
              {personalInfo.title}
            </div>
            
            <div className="text-xl text-blue-400 mb-8">
              {personalInfo.subtitle}
            </div>
            
            <p className="text-lg text-zinc-400 mb-8 max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              <MapPin className="w-5 h-5 text-zinc-500" />
              <span className="text-zinc-400">{personalInfo.location}</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-blue-600 hover:bg-blue-700">
                Kontakt aufnehmen
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-700 hover:bg-zinc-900" onClick={downloadCV}>
                <Download className="mr-2 w-4 h-4" />
                Lebenslauf herunterladen
              </Button>
              <Button size="lg" variant="ghost" className="hover:bg-zinc-900" onClick={() => window.open(personalInfo.linkedin, '_blank')}>
                <Linkedin className="mr-2 w-4 h-4" />
                LinkedIn
              </Button>
              <Button size="lg" variant="ghost" className="hover:bg-zinc-900" onClick={() => window.open(personalInfo.github, '_blank')}>
                <Github className="mr-2 w-4 h-4" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section id="news" className="py-20 px-6 bg-gradient-to-br from-orange-950/20 to-red-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Flame className="w-8 h-8 text-orange-400" />
              <h2 className="text-4xl font-bold">Aktuelles</h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            {latestNews.map((news) => (
              <Card key={news.id} className="bg-zinc-900/80 border-zinc-800 hover:border-orange-700/50 transition-all hover:shadow-lg hover:shadow-orange-500/10">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{news.emoji}</span>
                      <div>
                        <CardTitle className="text-2xl text-orange-400">{news.title}</CardTitle>
                        <div className="flex items-center gap-3 mt-2">
                          <Badge className="bg-orange-950 text-orange-400 border-orange-900">
                            <Calendar className="w-3 h-3 mr-1" />
                            {news.date}
                          </Badge>
                          <Badge variant="outline" className="border-green-700 text-green-400">
                            {news.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-300 leading-relaxed mb-6">{news.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {news.technologies.map((tech, idx) => (
                      <Badge key={idx} className="bg-zinc-800 text-zinc-300 border-zinc-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {news.link && (
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <ExternalLink className="w-4 h-4" />
                      <a href={news.link} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                        {news.link}
                      </a>
                      {news.isPrivate && (
                        <Badge variant="outline" className="border-zinc-600 text-zinc-500 text-xs">
                          Privat
                        </Badge>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Über mich</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                {personalInfo.bioLong}
              </p>
              
              <div className="flex flex-wrap gap-3 mt-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700">
                  <Code2 className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">Full Stack Development</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700">
                  <Cloud className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm">Cloud & DevOps</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700">
                  <Database className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Software Architecture</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg border border-zinc-700 bg-zinc-900">
                <h3 className="text-sm font-semibold text-cyan-300 mb-2">Online Referenzen</h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>
                    <a href="https://www.iuscm.net" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                      Institut Universitaire Siantou (IUS) - offizielle Website
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/search?q=Kemka+Lontsi+Bastian+MINESUP" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                      MINESUP Google-Search (Kemka Lontsi Bastian)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-blue-400" />
                    Aktuelle Rolle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    {experience[0].role} bei {experience[0].company}
                  </p>
                  <p className="text-sm text-zinc-500 mt-2">{experience[0].period}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Shield className="w-5 h-5 text-cyan-400" />
                    Spezialisierung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    HashiCorp Vault, Kubernetes, Microservices-Architektur, Cloud-Native Development
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Globe className="w-5 h-5 text-green-400" />
                    Internationale Erfahrung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {internationalExperience.map((exp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-zinc-400">
                        <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-sm">{exp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Berufserfahrung</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={exp.id} className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{exp.role}</CardTitle>
                      <CardDescription className="text-base">
                        <div className="flex items-center gap-2 text-zinc-400 mb-2">
                          <Building2 className="w-4 h-4" />
                          <span className="font-semibold text-zinc-300">{exp.company}</span>
                          <Badge variant="outline" className="ml-2">{exp.type}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-zinc-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 mb-4">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zinc-300 mb-3">Hauptverantwortlichkeiten:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-zinc-400">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Technische Fähigkeiten</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-blue-400" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {skills.backend.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-zinc-300">{skill.name}</span>
                        <span className="text-xs text-zinc-500">{skill.level}</span>
                      </div>
                      <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                          style={{ width: skill.level === 'Fortgeschritten' ? '85%' : '65%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {skills.frontend.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-zinc-300">{skill.name}</span>
                        <span className="text-xs text-zinc-500">{skill.level}</span>
                      </div>
                      <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
                          style={{ width: skill.level === 'Fortgeschritten' ? '85%' : '65%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="w-5 h-5 text-cyan-400" />
                  DevOps & Cloud
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {skills.devops.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-zinc-300">{skill.name}</span>
                        <span className="text-xs text-zinc-500">{skill.level}</span>
                      </div>
                      <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                          style={{ width: skill.level === 'Fortgeschritten' ? '85%' : '65%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-green-400" />
                  Tools & Methoden
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {skills.tools.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-zinc-300">{skill.name}</span>
                        <span className="text-xs text-zinc-500">{skill.level}</span>
                      </div>
                      <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                          style={{ width: skill.level === 'Fortgeschritten' ? '85%' : '65%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Ausgewählte Projekte</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-lg hover:shadow-blue-500/10 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className="bg-blue-950 text-blue-400 border-blue-900">{project.status}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-blue-400 transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-zinc-400">{project.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-zinc-500 mb-2">ROLLE</p>
                    <p className="text-sm text-zinc-300">{project.role}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-zinc-700 text-zinc-400">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs border-zinc-700 text-zinc-400">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                  
                  <Button variant="ghost" className="w-full justify-between hover:bg-zinc-800 group-hover:text-blue-400"
                  
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    Details anzeigen
                    <ExternalLink  className="w-4 h-4"  />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border-zinc-800">
            <CardHeader>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-blue-400 font-semibold">FEATURED EXPERTISE</span>
              </div>
              <CardTitle className="text-3xl mb-2">{featuredPost.title}</CardTitle>
              <CardDescription className="text-lg text-zinc-400">{featuredPost.subtitle}</CardDescription>
              <div className="flex items-center gap-4 text-sm text-zinc-500 mt-4">
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {featuredPost.content.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-semibold mb-3 text-zinc-200">{section.heading}</h3>
                    <p className="text-zinc-400 leading-relaxed">{section.text}</p>
                  </div>
                ))}
                
                <Separator className="bg-zinc-800 my-6" />
                
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-zinc-200">Key Takeaways</h4>
                  <ul className="space-y-3">
                    {featuredPost.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-400">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {featuredPost.technologies.map((tech, idx) => (
                    <Badge key={idx} className="bg-blue-950 text-blue-400 border-blue-900">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* AI Section */}
      <section id="ai" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-10 h-10 text-purple-400" />
              <h2 className="text-4xl font-bold">{aiSection.title}</h2>
            </div>
            <p className="text-xl text-zinc-400 mb-2">{aiSection.subtitle}</p>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="pt-6">
                  <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                    {aiSection.introduction}
                  </p>
                  
                  <div className="space-y-6">
                    {aiSection.sections.map((section, idx) => (
                      <div key={idx}>
                        <h3 className="text-xl font-semibold mb-3 text-zinc-200 flex items-center gap-2">
                          {idx === 0 && <Sparkles className="w-5 h-5 text-purple-400" />}
                          {idx === 1 && <CheckCircle2 className="w-5 h-5 text-green-400" />}
                          {idx === 2 && <Shield className="w-5 h-5 text-red-400" />}
                          {idx === 3 && <Lightbulb className="w-5 h-5 text-yellow-400" />}
                          {section.heading}
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">{section.text}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Separator className="bg-zinc-800 my-6" />
                  
                  <div className="bg-gradient-to-r from-purple-950/30 to-pink-950/30 p-6 rounded-lg border border-purple-900/50">
                    <h4 className="text-lg font-semibold mb-3 text-purple-300">Fazit</h4>
                    <p className="text-zinc-300 leading-relaxed">{aiSection.conclusion}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                    Referenzen & Artikel
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {aiSection.references.map((ref, idx) => (
                      <a 
                        key={idx} 
                        href={ref.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block p-4 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors border border-zinc-700 hover:border-purple-700"
                      >
                        <h5 className="text-sm font-semibold text-zinc-200 mb-1 line-clamp-2">{ref.title}</h5>
                        <div className="flex items-center justify-between text-xs text-zinc-500">
                          <span>{ref.source}</span>
                          <span>{ref.date}</span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-purple-400 mt-2" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AI Workshop Section */}
      <section id="workshop" className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-900/50 mb-4">
              <Users className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300">Workshop</span>
            </div>
            <h2 className="text-4xl font-bold mb-2">{aiWorkshop.title}</h2>
            <p className="text-xl text-zinc-400 mb-4">{aiWorkshop.subtitle}</p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>
          
          <div className="mb-12">
            <p className="text-lg text-zinc-400 max-w-3xl leading-relaxed">
              {aiWorkshop.description}
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Badge className="bg-cyan-950 text-cyan-400 border-cyan-900">
                <Calendar className="w-3 h-3 mr-1" />
                {aiWorkshop.date}
              </Badge>
              <Badge className="bg-cyan-950 text-cyan-400 border-cyan-900">
                Dauer: {aiWorkshop.duration}
              </Badge>
            </div>
          </div>
          
          {/* Tools Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {aiWorkshop.tools.map((tool, idx) => (
              <Card key={idx} className="bg-zinc-900 border-zinc-800 hover:border-cyan-700 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {tool.icon === 'code' && <Code2 className="w-8 h-8 text-green-400" />}
                    {tool.icon === 'terminal' && <Terminal className="w-8 h-8 text-blue-400" />}
                    {tool.icon === 'brain' && <Bot className="w-8 h-8 text-purple-400" />}
                    <CardTitle className="text-xl">{tool.name}</CardTitle>
                  </div>
                  <CardDescription className="text-zinc-400">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-zinc-300 mb-2">Anwendungsfälle:</h5>
                    <ul className="space-y-1">
                      {tool.useCases.map((useCase, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                          <ArrowRight className="w-3 h-3 text-cyan-400 mt-1 flex-shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-zinc-300 mb-2">Tipps:</h5>
                    <ul className="space-y-1">
                      {tool.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-500">
                          <Lightbulb className="w-3 h-3 text-yellow-400 mt-1 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Workflow Steps */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Rocket className="w-6 h-6 text-cyan-400" />
              Mein KI-gestützter Workflow
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              {aiWorkshop.workflow.map((step, idx) => (
                <div key={idx} className="relative">
                  <Card className="bg-zinc-900 border-zinc-800 h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-lg font-bold">
                          {step.step}
                        </div>
                        <div className="text-sm font-semibold text-cyan-400">{step.tool}</div>
                      </div>
                      <h4 className="font-semibold text-zinc-200 mb-2">{step.title}</h4>
                      <p className="text-sm text-zinc-400">{step.description}</p>
                    </CardContent>
                  </Card>
                  {idx < aiWorkshop.workflow.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                      <ChevronRight className="w-4 h-4 text-zinc-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Key Learnings */}
          <Card className="bg-gradient-to-br from-cyan-950/30 to-blue-950/30 border-cyan-900/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                Key Learnings aus dem Workshop
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {aiWorkshop.keyLearnings.map((learning, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-zinc-300">{learning}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Ausbildung</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu) => (
              <Card key={edu.id} className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-blue-950/30 border border-blue-900/50">
                      <GraduationCap className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <CardDescription>
                        <div className="text-base text-zinc-300 mb-1">{edu.field}</div>
                        <div className="text-sm text-zinc-500">{edu.institution}</div>
                        <div className="text-sm text-zinc-500 mt-1">{edu.period}</div>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 mb-4">{edu.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {edu.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-zinc-800 text-zinc-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  {edu.references && edu.references.length > 0 && (
                    <div className="text-sm text-zinc-400">
                      <p className="mb-2 font-medium text-zinc-300">Online Referenzen:</p>
                      <ul className="space-y-1">
                        {edu.references.map((ref, i) => (
                          <li key={i}>
                            <a href={ref} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                              {ref}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Kontakt aufnehmen</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Interessiert an einer Zusammenarbeit? Ich bin immer offen für spannende Projekte und neue Herausforderungen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardContent className="pt-6">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-zinc-400">{personalInfo.email}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer" onClick={() => window.open(personalInfo.linkedin, '_blank')}>
              <CardContent className="pt-6">
                <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-sm text-zinc-400">Profil besuchen</p>
              </CardContent>
            </Card>
            
            <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer" onClick={() => window.open(personalInfo.github, '_blank')}>
              <CardContent className="pt-6">
                <Github className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-sm text-zinc-400">Code ansehen</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="mr-2 w-4 h-4" />
              Email senden
            </Button>
            <Button size="lg" variant="outline" className="border-zinc-700 hover:bg-zinc-900" onClick={downloadCV}>
              <Download className="mr-2 w-4 h-4" />
              Lebenslauf herunterladen
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-zinc-400 text-sm">
              © 2024 {personalInfo.name}. Alle Rechte vorbehalten.
            </div>
            
            <div className="flex items-center gap-6">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-zinc-400 hover:text-zinc-100 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
