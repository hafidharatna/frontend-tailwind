const About = () => {
  return (
    <section id="about" className="bg-accent">
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-text/80">
              I'm a frontend developer with a passion for creating beautiful and user-friendly web applications. 
              With expertise in modern web technologies, I bring designs to life with clean and efficient code.
            </p>
            <p className="text-lg text-text/80">
              My journey in web development began with a fascination for the intersection of design and technology. 
              Today, I focus on building responsive, accessible, and performant web applications that provide 
              exceptional user experiences.
            </p>
            <div className="pt-4">
              <a href="#contact" className="btn-primary inline-block">
                Let's Work Together
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-secondary/10 rounded-2xl overflow-hidden">
              {/* Add your image here */}
              <img
                src="your-image-url.jpg"
                alt="Your Name"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;