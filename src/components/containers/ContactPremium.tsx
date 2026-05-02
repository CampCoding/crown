import React from "react";
import { CheckCircle2, Send, Phone, Mail, Building2, User } from "lucide-react";
import NetworkGrid from "../layout/NetworkGrid";
import Particles from "../Particles";

const ContactPremium = () => {
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
        <div className="row g-5 align-items-center">
          {/* Left Content Column */}
          <div className="col-12 col-lg-6">
            <div className="contact-content-wrap pe-lg-5">
              <div className="badge-premium mb-4">
                <span className="text-primary small fw-bold text-uppercase ls-2">Contact Us</span>
              </div>
              
              <h2 className="display-3 fw-900 text-white text-uppercase mb-4">
                Talk to an <br />
                <span className="text-primary">Expert</span> Today
              </h2>
              
              <p className="text-slate-400 fs-5 mb-5 max-w-500">
                Get in touch with our team for any questions about our digital ecosystem. 
                We're here to help you scale your brand with precision.
              </p>

              <div className="feature-list d-grid gap-4 mb-5">
                {[
                  { title: "Personalized Guidance from Experts", desc: "Get direct access to our senior strategy professionals." },
                  { title: "Secure & Confidential Communication", desc: "Your data and inquiries are protected with bank-grade security." },
                  { title: "Fast & Friendly Support", desc: "Our team is ready to assist you — expect quick, relevant responses." }
                ].map((feature, i) => (
                  <div key={i} className="feature-item d-flex gap-3 align-items-start">
                    <div className="feature-icon mt-1">
                      <CheckCircle2 className="text-primary" size={24} />
                    </div>
                    <div className="feature-text">
                      <h5 className="text-white fw-700 mb-1">{feature.title}</h5>
                      <p className="text-slate-500 small m-0">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="footer-link-premium mt-5">
                <p className="text-slate-400">
                  Looking for customer support? <a href="#" className="text-primary text-decoration-none fw-bold hover-underline">Click here</a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="col-12 col-lg-6">
            <div className="contact-form-card rounded-5 p-4 p-md-5 border border-white-10 shadow-3xl">
              <h3 className="text-white fw-700 mb-4 h4">Please enter your information</h3>
              
              <form className="row g-4">
                <div className="col-12 col-md-6">
                  <div className="input-group-premium">
                    <label className="text-slate-400 small fw-bold mb-2 d-block">Full Name</label>
                    <div className="position-relative">
                      <User className="position-absolute top-50 start-0 translate-middle-y ms-3 text-slate-500" size={18} />
                      <input type="text" className="form-control-premium w-100" placeholder="Enter full name" />
                    </div>
                  </div>
                </div>
                
                <div className="col-12 col-md-6">
                  <div className="input-group-premium">
                    <label className="text-slate-400 small fw-bold mb-2 d-block">Email</label>
                    <div className="position-relative">
                      <Mail className="position-absolute top-50 start-0 translate-middle-y ms-3 text-slate-500" size={18} />
                      <input type="email" className="form-control-premium w-100" placeholder="Enter email" />
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="input-group-premium">
                    <label className="text-slate-400 small fw-bold mb-2 d-block">Phone</label>
                    <div className="position-relative">
                      <Phone className="position-absolute top-50 start-0 translate-middle-y ms-3 text-slate-500" size={18} />
                      <input type="tel" className="form-control-premium w-100" placeholder="Enter phone number" />
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="input-group-premium">
                    <label className="text-slate-400 small fw-bold mb-2 d-block">Company</label>
                    <div className="position-relative">
                      <Building2 className="position-absolute top-50 start-0 translate-middle-y ms-3 text-slate-500" size={18} />
                      <input type="text" className="form-control-premium w-100" placeholder="Enter company" />
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="input-group-premium">
                    <label className="text-slate-400 small fw-bold mb-2 d-block">Message</label>
                    <textarea className="form-control-premium w-100" rows={4} placeholder="Enter your message here..."></textarea>
                  </div>
                </div>

                <div className="col-12 mt-5">
                  <button type="submit" className="btn-primary-pill w-100 d-flex align-items-center justify-content-center gap-2 py-3">
                    SEND MESSAGE <Send size={18} />
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
        .max-w-500 { max-width: 500px; }
        .ls-2 { letter-spacing: 2px; }
        
        .badge-premium {
          display: inline-flex;
          padding: 8px 20px;
          border-radius: 50px;
          background: rgba(0, 114, 237, 0.1);
          border: 1px solid rgba(0, 114, 237, 0.2);
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
        }
        .btn-primary-pill:hover {
          transform: translateY(-3px);
          filter: brightness(1.1);
          box-shadow: 0 15px 30px -5px rgba(0, 114, 237, 0.5);
        }

        .hover-underline:hover {
          text-decoration: underline !important;
        }

        .orb {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, var(--primary-color) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
        }

        .border-white-10 { border: 1px solid rgba(255, 255, 255, 0.1); }
      `}</style>
    </section>
  );
};

export default ContactPremium;
