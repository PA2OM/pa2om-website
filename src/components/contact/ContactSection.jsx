import React, { useState } from 'react';
import Section from '../common/Section';
import Button from '../common/Button';

const FormField = ({ 
  label, 
  name, 
  type = 'text', 
  required = false, 
  value, 
  onChange,
  options,
  placeholder,
  rows
}) => {
  const baseClasses = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && '*'}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          rows={rows || 4}
          placeholder={placeholder}
          className={baseClasses}
        />
      ) : type === 'select' ? (
        <select
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className={baseClasses}
        >
          <option value="">{placeholder || 'Select an option'}</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className={baseClasses}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const timeSlots = [
    { value: "9:00", label: "9:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "13:00", label: "1:00 PM" },
    { value: "14:00", label: "2:00 PM" },
    { value: "15:00", label: "3:00 PM" },
    { value: "16:00", label: "4:00 PM" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would implement the email sending functionality
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Section
      bgColor="bg-gray-50"
      title="Contact Us"
      subtitle="Ready to transform your manufacturing and supply chain operations? Fill out the form below to request a consultation."
      titleColor="text-gray-900"
      subtitleColor="text-gray-600"
      className="max-w-4xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            label="Name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <FormField
            label="Company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
          />

          <FormField
            label="Email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <FormField
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
          />

          <FormField
            label="Preferred Date"
            name="preferredDate"
            type="date"
            required
            value={formData.preferredDate}
            onChange={handleChange}
          />

          <FormField
            label="Preferred Time (MST)"
            name="preferredTime"
            type="select"
            required
            value={formData.preferredTime}
            onChange={handleChange}
            options={timeSlots}
          />
        </div>

        <FormField
          label="Message"
          name="message"
          type="textarea"
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Please briefly describe your needs or challenges"
          rows={4}
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
        >
          Submit Request
        </Button>
      </form>

      {/* Alternative Contact Methods */}
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href="mailto:sales@pa2om.com"
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Email directly
        </a>

        <a
          href="https://linkedin.com/company/pa2om"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          Connect on LinkedIn
        </a>
      </div>
    </Section>
  );
};

export default ContactSection;