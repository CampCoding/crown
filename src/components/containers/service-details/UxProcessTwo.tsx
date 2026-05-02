import React, { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const UxProcessTwo = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "User Research",
      desc: "To deliver the best experience, we thoroughly research and evaluate your product and its users to create a strategic foundation for the brand."
    },
    {
      title: "Story Board",
      desc: "We visualize the user journey through detailed storyboards, ensuring every touchpoint is designed for maximum engagement and clarity."
    },
    {
      title: "Wireframing",
      desc: "Creating the structural blueprint of your digital interface, focusing on hierarchy, usability, and a seamless flow across all devices."
    },
    {
      title: "Prototyping",
      desc: "Building interactive high-fidelity prototypes that allow you to feel the experience before we move into final development."
    },
    {
      title: "Usability Testing",
      desc: "Rigorous testing with real users to validate our design decisions and refine the interface for peak performance."
    },
    {
      title: "UI Design",
      desc: "Crafting beautiful, modern, and high-impact visual designs that reflect your brand identity and captivate your audience."
    }
  ];

  return (
    <section className="section ux-process-v2 py-100! position-relative">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section-header text-center mb-5">
              <div className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill bg-primary-10 border border-primary-20 mb-3">
                <Sparkles size={16} className="text-primary" />
                <span className="text-primary small fw-bold text-uppercase ls-2">UX Process</span>
              </div>
              <h2 className="display-4 fw-900 text-white text-uppercase ls-1">Working <span className="text-primary-glow">UX Process</span></h2>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="process-grid">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`process-item rounded-5 p-4 p-md-5 mb-4 position-relative overflow-hidden transition-all duration-500 ${activeStep === index ? 'active' : ''}`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="row align-items-center">
                    <div className="col-12 col-md-4 d-flex align-items-center gap-4">
                      <div className={`step-number rounded-circle d-flex align-items-center justify-content-center fw-900 fs-4 ${activeStep === index ? 'bg-primary text-white' : 'border border-white-10 text-white-50'}`}>
                        {index + 1}
                      </div>
                      <h3 className={`mb-0 fw-800 text-uppercase ls-1 ${activeStep === index ? 'text-white' : 'text-white-30'}`}>
                        {step.title}
                      </h3>
                    </div>
                    <div className="col-12 col-md-7 offset-md-1">
                      <div className={`process-content transition-all duration-500 ${activeStep === index ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                        <p className="text-slate-300 fs-5 leading-relaxed mb-0">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Decorative Glow */}
                  <div className="item-glow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ux-process-v2 {
          background: transparent;
        }
        .bg-primary-10 { background: rgba(0, 114, 237, 0.1); }
        .border-primary-20 { border: 1px solid rgba(0, 114, 237, 0.2); }
        .ls-2 { letter-spacing: 2px; }
        .ls-1 { letter-spacing: 1px; }
        .text-primary-glow {
          color: var(--primary-color);
          text-shadow: 0 0 20px rgba(0, 114, 237, 0.4);
        }

        .process-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .process-item {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          cursor: pointer;
        }
        .process-item:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.1);
        }
        .process-item.active {
          background: rgba(0, 114, 237, 0.05);
          border-color: rgba(0, 114, 237, 0.3);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.4);
        }

        .step-number {
          width: 60px;
          height: 60px;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .text-white-30 { color: rgba(255, 255, 255, 0.3); }

        .h-0 { height: 0; }
        .leading-relaxed { line-height: 1.6; }

        .item-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(0, 114, 237, 0.08) 0%, transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .process-item.active .item-glow {
          opacity: 1;
        }

        @media (max-width: 767px) {
          .step-number {
            width: 45px;
            height: 45px;
            font-size: 1.2rem !important;
          }
          .process-content {
            margin-top: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default UxProcessTwo;
