import { motion, useScroll } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, ArrowRight, ChevronRight, Terminal, Server, Globe, Database, Shield, Zap, Calendar, MapPin, Briefcase, Phone } from 'lucide-react';
import { AnimatedText } from './components/ui/animated-text';
import { MovingBorder } from './components/ui/moving-border';

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen flex items-center"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex justify-between items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-400"
            >
              <Code2 className="inline-block mr-2" />
              Daksh Gupta
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex gap-6"
            >
              {[
                { icon: Github, href: "https://github.com/DakshGupta1204", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/daksh-gupta-dtuite/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:dakshgpt12@gmail.com", label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative p-2 rounded-full bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
                >
                  <Icon size={24} className="text-zinc-400 group-hover:text-violet-400 transition-colors" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium">
                Available for Freelance Work
              </span>
            </motion.div>

            <AnimatedText
              text="Full Stack Developer Building Digital Experiences"
              className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-400 "
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-zinc-400 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto"
            >
              I craft modern web applications with a focus on user experience and scalable architecture.
              Passionate about creating seamless digital experiences that make a difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 mb-12"
            >
              <div className="flex items-center gap-2 text-zinc-400">
                <Calendar size={20} />
                <span>3+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <MapPin size={20} />
                <span>New Delhi, India</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <Briefcase size={20} />
                <span>Available for Remote Work</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <MovingBorder>
                <a href="#contact" className="text-white flex items-center gap-2 px-8 py-4 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors text-lg">
                  Let's Connect <ArrowRight size={20} />
                </a>
              </MovingBorder>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="w-fit mx-auto my-10"
          >
            <div className="w-6 h-10 border-2 border-zinc-700 rounded-full p-2 ">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-1.5 h-1.5 bg-violet-400 rounded-full mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <div className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/50" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedText
            text="Skills & Expertise"
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-400"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Terminal, title: "Frontend Development", description: "React, Next.js, TypeScript, Tailwind CSS" },
              { icon: Server, title: "Backend Development", description: "Node.js, Express, Python" },
              { icon: Database, title: "Database Management", description: "SQL, MongoDB" },
              { icon: Globe, title: "Web Technologies", description: "REST APIs" },
              { icon: Shield, title: "Security", description: "Authentication, Authorization, Data Protection" },
              { icon: Zap, title: "Performance", description: "Optimization" }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-zinc-800/50 rounded-lg backdrop-blur-sm hover:bg-zinc-800/70 transition-colors"
              >
                <skill.icon className="w-12 h-12 text-violet-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <p className="text-zinc-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-zinc-900/50 py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/50" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedText
            text="Featured Projects"
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-400"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "A full-stack e-commerce solution with real-time inventory management and payment integration.",
                tech: ["React", "Node.js", "MongoDB", "Razorpay"],
                image: "src/Karishma.png",
                link: "https://prototype1.karishmacloset.in/"
              },
              {
                title: "Repair Service Listing Website",
                description: "A website for listing repair services with real-time updates and team features.",
                tech: ["Next.js", "TypeScript", "MongoDB","Tailwind CSS"],
                image: "/src/Fixkaro.png",
                link: "https://fixkaro.vercel.app/"
              },
              {
                title: "Property Listing Website",
                description: "A website for listing properties with real-time updates and team features.",
                tech: ["React", "Node.js", "MongoDB","Typescript","Tailwind CSS"],
                image: "/src/100Gaj.png",
                link: "https://construction-livid.vercel.app/"
              }
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={(e) => {
                  e.preventDefault();
                  window.open(project.link, '_blank', 'noopener,noreferrer');
                }}
                className="group relative bg-zinc-800/50 rounded-lg overflow-hidden backdrop-blur-sm cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-400">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-zinc-700/50 rounded-full text-sm text-zinc-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors group cursor-pointer"
                    whileHover={{ x: 5 }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(project.link, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    <span>View Demo</span>
                    <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 relative" id="contact">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/50" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedText
            text="Get In Touch"
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-400"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "dakshgpt12@gmail.com",
                  link: "mailto:dakshgpt12@gmail.com",
                  description: "Send me an email"
                },
                {
                  icon: Linkedin,
                  title: "LinkedIn",
                  value: "Daksh Gupta",
                  link: "https://www.linkedin.com/in/daksh-gupta-dtuite/",
                  description: "Connect with me"
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+91 8826415708",
                  link: "tel:+918826415708",
                  description: "Call me"
                }
              ].map((contact, index) => (
                <motion.a
                  key={contact.title}
                  href={contact.link}
                  target={contact.title === "LinkedIn" ? "_blank" : undefined}
                  rel={contact.title === "LinkedIn" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group p-6 bg-zinc-800/50 rounded-lg backdrop-blur-sm hover:bg-zinc-800/70 transition-colors cursor-pointer"
                >
                  <contact.icon className="w-12 h-12 text-violet-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                  <p className="text-zinc-300 mb-2">{contact.value}</p>
                  <p className="text-zinc-400 text-sm">{contact.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;