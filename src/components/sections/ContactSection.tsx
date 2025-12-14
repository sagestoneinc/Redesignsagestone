import React, { useState } from "react";
import { Container } from "../Container";
import { Card } from "../Card";
import {
  Mail,
  MessageSquare,
  Calendar,
  CheckCircle2,
  MapPin,
  Phone,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    teamSize: "",
    message: "",
    interests: [] as string[],
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        role: "",
        teamSize: "",
        message: "",
        interests: [],
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (value: string) => {
    const newInterests = formData.interests.includes(value)
      ? formData.interests.filter((i) => i !== value)
      : [...formData.interests, value];

    setFormData({
      ...formData,
      interests: newInterests,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "hello@sagestoneinc.com",
      link: "mailto:hello@sagestoneinc.com",
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a 30-min demo",
      link: "#contact",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Available Mon-Fri 9am-6pm EST",
      link: "#contact",
    },
  ];

  return (
    <section
      id="contact"
      className="section-spacing bg-gradient-to-br from-stone-50 to-white"
    >
      <Container>
        {/* Header */}
        <div
          className="text-center max-w-3xl mx-auto"
          style={{ marginBottom: "var(--subsection-spacing)" }}
        >
          <h1>Get in Touch With SageStone Lab</h1>
          <p className="text-xl text-stone-600 max-w-none">
            Ready to transform your marketing data into
            actionable intelligence? Let's talk about how
            SageStone Lab can help your team grow.
          </p>
        </div>

        {/* Contact Methods */}
        <div
          className="grid md:grid-cols-3 gap-6"
          style={{ marginBottom: "var(--subsection-spacing)" }}
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.link}
                className="p-6 bg-white rounded-xl border border-stone-200 hover:border-sage-400 hover:shadow-lg transition-all text-center group"
              >
                <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-sage-500 group-hover:to-sage-700 transition-all">
                  <Icon
                    className="text-sage-700 group-hover:text-white transition-colors"
                    size={24}
                  />
                </div>
                <h4 className="mb-2">{method.title}</h4>
                <p className="text-sm text-stone-600 max-w-none">
                  {method.description}
                </p>
              </a>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-stone-200">
              <h2 className="mb-2">Request a Demo</h2>
              <p className="text-stone-600 mb-8">
                Fill out the form below and our team will get
                back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-br from-sage-500 to-sage-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2
                      className="text-white"
                      size={40}
                    />
                  </div>
                  <h3 className="mb-4">Thank You!</h3>
                  <p className="text-stone-600">
                    We've received your request and will be in
                    touch soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-stone-700 mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-stone-700 mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-stone-700 mb-2"
                    >
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-stone-700 mb-2"
                    >
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Role and Team Size */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="role"
                        className="block text-sm font-medium text-stone-700 mb-2"
                      >
                        Your Role *
                      </label>
                      <select
                        id="role"
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select a role</option>
                        <option value="founder">
                          Founder / CEO
                        </option>
                        <option value="marketing">
                          Marketing Manager
                        </option>
                        <option value="growth">
                          Growth Lead
                        </option>
                        <option value="agency">
                          Agency Owner
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="teamSize"
                        className="block text-sm font-medium text-stone-700 mb-2"
                      >
                        Team Size
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select size</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="200+">200+</option>
                      </select>
                    </div>
                  </div>

                  {/* Interests */}
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-3">
                      I'm interested in:
                    </label>
                    <div className="space-y-2">
                      {[
                        "Analytics & Insights",
                        "Marketing Automation",
                        "Email Integrations",
                        "Team Collaboration",
                      ].map((interest) => (
                        <label
                          key={interest}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(
                              interest,
                            )}
                            onChange={() =>
                              handleCheckboxChange(interest)
                            }
                            className="w-5 h-5 text-sage-600 border-stone-300 rounded focus:ring-2 focus:ring-sage-500"
                          />
                          <span className="text-stone-700">
                            {interest}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-stone-700 mb-2"
                    >
                      Tell us about your needs
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="What challenges are you looking to solve?"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-sage-600 to-sage-700 text-white rounded-lg hover:shadow-xl transition-all font-medium"
                  >
                    Request Demo
                  </button>

                  <p className="text-xs text-stone-500 text-center">
                    By submitting this form, you agree to our
                    Privacy Policy and Terms of Service.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Trust Indicators */}
            <div className="bg-gradient-to-br from-sage-600 to-sage-800 rounded-2xl p-8 text-white">
              <h3 className="text-white mb-6">
                Why Teams Choose SageStone Lab
              </h3>
              <ul className="space-y-4">
                {[
                  "Setup in under 5 minutes",
                  "No credit card required for demo",
                  "White-glove onboarding support",
                  "14-day money-back guarantee",
                  "Enterprise-grade security",
                  "Dedicated customer success manager",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      className="text-sage-200 flex-shrink-0 mt-0.5"
                      size={20}
                    />
                    <span className="text-sage-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office Info */}
            <div className="bg-white rounded-2xl p-8 border border-stone-200">
              <h4 className="mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="text-sage-600 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <p className="font-medium text-stone-900">
                      Headquarters
                    </p>
                    <p className="text-sm text-stone-600">
                      San Francisco, CA
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail
                    className="text-sage-600 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <p className="font-medium text-stone-900">
                      Email
                    </p>
                    <a
                      href="mailto:hello@sagestoneinc.com"
                      className="text-sm text-sage-600 hover:text-sage-700"
                    >
                      hello@sagestoneinc.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone
                    className="text-sage-600 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <p className="font-medium text-stone-900">
                      Support Hours
                    </p>
                    <p className="text-sm text-stone-600">
                      Mon-Fri, 9am-6pm EST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-sage-50 rounded-2xl p-8 border border-sage-200">
              <div className="text-center">
                <p className="text-4xl font-bold text-sage-700 mb-2">
                  &lt; 24hrs
                </p>
                <p className="text-stone-600">
                  Average response time
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}