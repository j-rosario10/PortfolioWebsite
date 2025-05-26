import React, {useState} from 'react'
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    message: '',
    isError: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, message: '', isError: false });

    // Setup your EmailJS parameters
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,    // Replace with your actual EmailJS service ID
      import.meta.env.VITE_TEMPLATE_ID,   // Replace with your actual EmailJS template ID
      templateParams,
      import.meta.env.VITE_PUBLIC_KEY     // Replace with your actual EmailJS public key
    ).then(() => {
      setFormStatus({ isSubmitting: false, message: 'Message sent successfully!', isError: false });
      setFormData({ name: '', email: '', message: '' });
    }).catch((error) => {
      console.error('EmailJS error:', error);
      setFormStatus({ isSubmitting: false, message: 'Failed to send message. Please try again.', isError: true });
    });
  };

  return (
    <div className="md:w-2/3">
      <form 
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Send Me a Message</h3>
        
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
            required
          ></textarea>
        </div>
        
        {formStatus.message && (
          <div className={`mb-6 p-3 rounded-md ${formStatus.isError ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'}`}>
            {formStatus.message}
          </div>
        )}
        
        <button
          type="submit"
          disabled={formStatus.isSubmitting}
          className={`w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-md transition-all duration-300 flex items-center justify-center ${formStatus.isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {formStatus.isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

export default EmailForm