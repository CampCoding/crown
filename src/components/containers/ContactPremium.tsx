import React, { useState } from "react";
import {
  CheckCircle2,
  Send,
  Phone,
  Mail,
  Building2,
  User,
  MessageCircle,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import NetworkGrid from "../layout/NetworkGrid";
import Particles from "../Particles";
import { COMPANY_INFO } from "@/lib/constants";

const ContactPremium = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 📨 Send via WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build WhatsApp message
    const whatsappMessage = `
*New Contact Inquiry — Crown Agency*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
🏢 *Company:* ${formData.company || "N/A"}

💬 *Message:*
${formData.message}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    // Reset form after a moment
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="contact-premium-section position-relative overflow-hidden py-50!">
      {/* Background Effects */}
      <div className="position-absolute inset-0 z-0">
        <Particles
          particleCount={1000}
          particleSpread={15}
          speed={0.2}
          particleColors={["#0072ed", "#ffffff", "#004a99"]}
          moveParticlesOnHover={true}
          particleHoverFactor={2}
          alphaParticles={true}
          particleBaseSize={500}
          disableRotation={false}
        />
        <NetworkGrid opacity={0.1} />
        <div className="orb position-absolute top-20 start-10 opacity-20" />
        <div className="orb position-absolute bottom-10 end-10 opacity-10" />
      </div>

      <div className="container position-relative z-1">
        <div className="row g-4 g-lg-5 align-items-center">
          {/* Left Content Column */}
          <div className="col-12 col-lg-6">
            <div className="contact-content-wrap pe-lg-5">
              <div className="badge-premium mb-4">
                <span className="text-primary small fw-bold text-uppercase ls-2">
                  Contact Crown Agency
                </span>
              </div>

              <h1 className="contact-title fw-900 text-white text-uppercase mb-4">
                Talk to an <br />
                <span className="text-primary">Expert</span> Today
              </h1>

              <p className="text-slate-400 contact-desc mb-5 max-w-500">
                Get in touch with Crown Agency for any questions about
                marketing, software, or branding. We&apos;re here to help you
                scale your brand with precision.
              </p>

              {/* Quick Contact Methods */}
              <div className="quick-contact d-flex flex-column gap-3 mb-5">
                {/* Email - only show if available */}
                {COMPANY_INFO.email && (
                  <Link
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="quick-link"
                    aria-label="Email Crown Agency"
                  >
                    <div className="quick-icon">
                      <Mail size={18} />
                    </div>
                    <div className="quick-text">
                      <span className="label">Email Us</span>
                      <span className="value">{COMPANY_INFO.email}</span>
                    </div>
                  </Link>
                )}

                <Link
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="quick-link"
                  aria-label="Call Crown Agency"
                >
                  <div className="quick-icon">
                    <Phone size={18} />
                  </div>
                  <div className="quick-text">
                    <span className="label">Call Us</span>
                    <span className="value">{COMPANY_INFO.phone}</span>
                  </div>
                </Link>

                <Link
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-link whatsapp-link"
                  aria-label="WhatsApp Crown Agency"
                >
                  <div className="quick-icon whatsapp">
                    <MessageCircle size={18} />
                  </div>
                  <div className="quick-text">
                    <span className="label">WhatsApp</span>
                    <span className="value">Chat with us instantly</span>
                  </div>
                </Link>

                <div className="quick-link static">
                  <div className="quick-icon">
                    <MapPin size={18} />
                  </div>
                  <div className="quick-text">
                    <span className="label">Visit Us</span>
                    <span className="value">{COMPANY_INFO.address.full}</span>
                  </div>
                </div>
              </div>

              <div className="feature-list d-grid gap-4 mb-5">
                {[
                  {
                    title: "Personalized Guidance from Experts",
                    desc: "Direct access to our senior strategy team.",
                  },
                  {
                    title: "Secure & Confidential Communication",
                    desc: "Your data and inquiries are fully protected.",
                  },
                  {
                    title: "Fast & Friendly Support",
                    desc: "Quick, relevant responses — usually within hours.",
                  },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="feature-item d-flex gap-3 align-items-start"
                  >
                    <div className="feature-icon mt-1">
                      <CheckCircle2 className="text-primary" size={22} />
                    </div>
                    <div className="feature-text">
                      <h5 className="text-white fw-700 mb-1 fs-6">
                        {feature.title}
                      </h5>
                      <p className="text-slate-500 small m-0">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="col-12 col-lg-6">
            <div className="contact-form-card rounded-5 p-3 p-sm-4 p-md-5 border border-white-10 shadow-3xl">
              <h2 className="text-white fw-700 mb-2 h4">Send us a message</h2>
              <p className="text-slate-400 small mb-4">
                Fill in the form & we&apos;ll respond on WhatsApp instantly.
              </p>

              <form className="row g-3 g-md-4" onSubmit={handleSubmit}>
                <div className="col-12 col-md-6">
                  <div className="input-group-premium">
                    <label
                      htmlFor="contact-name"
                      className="text-slate-400 small fw-bold mb-2 d-block"
                    >
                      Full Name *
                    </label>
                    <div className="position-relative">
                      <User
                        className="position-absolute top-50 start-0 translate-middle-y ms-3 text-slate-500"
                        size={18}
                      />
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control-premium w-100"
                        placeholder="Enter full name"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="input-group-premium">
                    <label
                      htmlFor="contact-email"
                      className="text-slate-400 small fw-bold mb-2 d-block"
                    >
                      Email *
                    </label>
                    <div className="position-relative">
                      <Mail
                        className="position-absolute top-50 start-0 translate-middle-y ms-3 text-slate-500"
                        size={18}
                      />
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control-premium w-100"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="input-group-premium">
                    <label
                      htmlFor="contact-phone"
                      className="text-slate-400 small fw-bold mb-2 d-block"
                    >
                      Phone *
                    </label>
                    <div className="position-relative">
                      <Phone
                        className="position-absolute top-50 start-0 translate-middle-y ms-3 text-slate-500"
                        size={18}
                      />
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control-premium w-100"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="input-group-premium">
                    <label
                      htmlFor="contact-company"
                      className="text-slate-400 small fw-bold mb-2 d-block"
                    >
                      Company
                    </label>
                    <div className="position-relative">
                      <Building2
                        className="position-absolute top-50 start-0 translate-middle-y ms-3 text-slate-500"
                        size={18}
                      />
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-control-premium w-100"
                        placeholder="Enter company"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="input-group-premium">
                    <label
                      htmlFor="contact-message"
                      className="text-slate-400 small fw-bold mb-2 d-block"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control-premium w-100"
                      rows={4}
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                </div>

                <div className="col-12 mt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary-pill w-100 d-flex align-items-center justify-content-center gap-2 py-3"
                  >
                    {isSubmitting ? (
                      <>OPENING WHATSAPP...</>
                    ) : (
                      <>
                        SEND VIA WHATSAPP <Send size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-premium-section {
          background: #050505;
        }
        .max-w-500 {
          max-width: 500px;
        }
        .ls-2 {
          letter-spacing: 2px;
        }

        /* Title - Responsive */
        .contact-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          line-height: 1.1;
        }
        .contact-desc {
          font-size: clamp(0.95rem, 1.4vw, 1.15rem);
        }

        .badge-premium {
          display: inline-flex;
          padding: 8px 20px;
          border-radius: 50px;
          background: rgba(0, 114, 237, 0.1);
          border: 1px solid rgba(0, 114, 237, 0.2);
        }

        /* Quick Contact Links */
        :global(.quick-link) {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        :global(.quick-link:hover:not(.static)) {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(0, 114, 237, 0.3);
          transform: translateX(4px);
        }
        :global(.quick-link.whatsapp-link:hover) {
          border-color: rgba(37, 211, 102, 0.3);
        }
        :global(.quick-link.static) {
          cursor: default;
        }

        :global(.quick-icon) {
          width: 38px;
          height: 38px;
          min-width: 38px;
          border-radius: 10px;
          background: rgba(0, 114, 237, 0.1);
          color: #0072ed;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        :global(.quick-icon.whatsapp) {
          background: rgba(37, 211, 102, 0.1);
          color: #25d366;
        }
        :global(.quick-link:hover .quick-icon:not(.whatsapp)) {
          background: #0072ed;
          color: white;
        }
        :global(.quick-link:hover .quick-icon.whatsapp) {
          background: #25d366;
          color: white;
        }

        :global(.quick-text) {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        :global(.quick-text .label) {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.4);
        }
        :global(.quick-text .value) {
          font-size: 14px;
          font-weight: 600;
          color: white;
          margin-top: 2px;
          word-break: break-word;
        }

        .contact-form-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.5);
        }

        .form-control-premium {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 12px 16px;
          color: white;
          transition: all 0.3s ease;
          font-size: 14px;
        }
        input.form-control-premium {
          padding-left: 45px;
        }
        .form-control-premium:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--primary-color);
          box-shadow: 0 0 15px rgba(0, 114, 237, 0.2);
        }
        .form-control-premium::placeholder {
          color: rgba(255, 255, 255, 0.2);
        }

        .btn-primary-pill {
          background: var(--primary-color);
          color: white;
          border: none;
          border-radius: 50px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px -5px rgba(0, 114, 237, 0.4);
          font-size: 13px;
        }
        .btn-primary-pill:hover:not(:disabled) {
          transform: translateY(-3px);
          filter: brightness(1.1);
          box-shadow: 0 15px 30px -5px rgba(0, 114, 237, 0.5);
        }
        .btn-primary-pill:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .orb {
          width: 600px;
          height: 600px;
          background: radial-gradient(
            circle,
            var(--primary-color) 0%,
            transparent 70%
          );
          filter: blur(80px);
          pointer-events: none;
        }

        .border-white-10 {
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* RESPONSIVE */
        @media (max-width: 991px) {
          .contact-premium-section {
            padding-top: 8rem !important;
            padding-bottom: 5rem !important;
          }
          .contact-content-wrap {
            padding-right: 0 !important;
          }
        }

        @media (max-width: 767px) {
          .contact-premium-section {
            padding-top: 7rem !important;
            padding-bottom: 4rem !important;
          }
          .contact-form-card {
            padding: 1.5rem !important;
          }
          .orb {
            width: 400px;
            height: 400px;
          }
        }

        @media (max-width: 575px) {
          .contact-premium-section {
            padding-top: 6rem !important;
            padding-bottom: 3rem !important;
          }
          .contact-form-card {
            padding: 1.25rem !important;
            border-radius: 1.5rem !important;
          }
          :global(.quick-link) {
            padding: 12px 14px;
            gap: 12px;
          }
          :global(.quick-text .value) {
            font-size: 13px;
          }
          :global(.quick-icon) {
            width: 34px;
            height: 34px;
            min-width: 34px;
          }
          .badge-premium {
            padding: 6px 16px;
            font-size: 0.7rem;
          }
        }

        @media (max-width: 374px) {
          .contact-form-card {
            padding: 1rem !important;
          }
          .form-control-premium {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactPremium;
