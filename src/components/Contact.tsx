import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center">Get in Touch</h2>
          <p className="text-center text-text/80 mb-12">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-text/20 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-text/20 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-text/20 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-16 text-center">
            <p className="text-text/80 mb-4">Or reach out directly:</p>
            <a href="mailto:your.email@example.com" className="text-primary hover:text-secondary transition-colors duration-300">
              your.email@example.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;