"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-background text-text overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-primary/95 backdrop-blur-md py-4 shadow-xl' : 'bg-primary py-6 shadow-md'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/images/favicon.png" alt="Logo" width={50} height={50} className="mr-4 transition-transform duration-300 hover:scale-110" />
          </div>
          <ul className="flex space-x-8 text-background">
            {['Home', 'About Us', 'Advisory Board', 'Services', 'Testimonials', 'Contact Us'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="relative py-2 transition-all duration-300 hover:text-white group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Home Section - Hero */}
      <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-primary mb-8 animate-fade-in">
            S-square D-square
            <span className="block text-4xl md:text-5xl mt-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Consulting
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-sans text-text/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
            Leveraging data science and internal controls to improve profitability.
            <span className="block mt-4 text-primary font-semibold">We help you grow your business, exponentially!</span>
          </p>
          <div className="mt-12 flex gap-6 justify-center animate-fade-in-delayed-2">
            <a href="#services" className="px-8 py-4 bg-primary text-white rounded-full font-semibold transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-xl">
              Our Services
            </a>
            <a
              href="https://calendly.com/ssqr-dsqr/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105"
            >
              Book an Appointment
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary/50 rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="w-full py-24 px-6 bg-gradient-to-b from-background to-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary/60 uppercase tracking-widest text-sm font-semibold">Who We Are</span>
            <h2 className="text-5xl font-serif font-bold text-primary mt-4">About Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/30 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3 relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl transform group-hover:scale-110 transition-transform duration-500"></div>
              <Image
                src="/images/photo-AboutUs.png"
                alt="Shashank Honavar"
                width={280}
                height={280}
                className="relative rounded-full mx-auto shadow-2xl ring-4 ring-primary/20 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="lg:w-2/3 space-y-6">
              <p className="text-lg leading-relaxed text-text/80">
                Our company offers management consultancy services on a turnkey basis and works with small to mid-size businesses to improve their profitability by helping them grow their business by either increasing revenues or by taking a very critical look at their operations and minimizing their costs.
              </p>
              <p className="text-lg leading-relaxed text-text/80">
                Our unique value proposition is that we bring to the table a <span className="font-semibold text-primary">very wide array of skills, background, and real hands-on experience</span> across multiple industries in various disciplines and across numerous business functions.
              </p>

              <div className="mt-10 p-8 bg-white rounded-2xl shadow-lg border border-primary/10">
                <h3 className="text-3xl font-serif font-semibold text-primary mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/></svg>
                  </span>
                  Owner Profile
                </h3>
                <p className="text-text/80 leading-relaxed mb-4">
                  S-square D-square LLC, is the second company founded by <span className="font-semibold text-primary">Shashank Honavar</span>, a seasoned Risk Management executive with over <span className="font-semibold">23 years experience</span> covering multiple risk disciplines including Operational Risk, Credit Risk, Market Risk, Treasury Risk, Reputation Risk, and Culture Risk.
                </p>
                <p className="text-text/80 leading-relaxed mb-4">
                  Shashank set up S-square D-square LLC in 2018 after sensing a business opportunity in serving small businesses, which make up <span className="font-semibold text-primary">97% of all US businesses</span> and collectively represent an untapped market for fractional CXO services.
                </p>
                <a
                  href="https://www.linkedin.com/in/innovationusingdatascience/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300"
                >
                  View LinkedIn Profile
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section id="advisory-board" className="w-full py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary/60 uppercase tracking-widest text-sm font-semibold">Our Experts</span>
            <h2 className="text-5xl font-serif font-bold text-primary mt-4">Advisory Board</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/30 mx-auto mt-6 rounded-full"></div>
            <p className="mt-6 text-lg text-text/70 max-w-2xl mx-auto">Meet the distinguished professionals who guide our strategic direction</p>
          </div>

          <div className="space-y-8">
            {[
              {
                name: "Bill Abernathy",
                title: "Banking/OCC",
                image: "/images/advisory1.png",
                skills: ["Risk Management", "Regulatory Relations", "Problem Bank Resolution"],
                bio: "Bill Abernathy has broad experience as a Banker, Bank Regulator & Bank Consultant. Principal & Executive Consultant at Abernathy Bank Consulting. Former Senior Bank Officer (EVP and SVP) at 4 Georgia Banks and 30-year career with the OCC as National Bank Examiner, Assistant Deputy Comptroller and Director of 6 Divisions."
              },
              {
                name: "Sudha Shenoy",
                title: "Actuary",
                image: "/images/advisory2.png",
                skills: ["Pricing & Product Development", "Medicare & Medicaid", "ERM"],
                bio: "Sudha Shenoy is an actuary with proven analytical, organizational and leadership skills with experience in Medicare & Medicaid Programs, new product development, provider reimbursement, and risk management."
              },
              {
                name: "Dr. Ajay Subramanian",
                title: "Academia",
                image: "/images/advisory3.png",
                skills: ["Financial Economics", "Mathematical Finance", "Risk Analysis"],
                bio: "Bruce A. Palmer Professor in Risk Management and Insurance at Robinson College of Business, Georgia State University. Research interests in financial economics, microeconomics, industrial organization, and mathematical finance."
              },
              {
                name: "Maya Nayak",
                title: "Technology",
                image: "/images/advisory4.png",
                skills: ["Solution Architecture", "Product Design", "Digital Transformation"],
                bio: "Results-oriented executive with 19+ years delivering large-scale enterprise solutions for the financial industry. Proven track record working closely with CTO/CIO on digital transformation initiatives."
              },
              {
                name: "Shilpan Patel",
                title: "Analytics",
                image: "/images/advisory5.png",
                skills: ["Data Analytics", "Mentorship", "Business Intelligence"],
                bio: "Co-Founder at Analyticshub.io and Qlik Luminary (2018 & 2019). 15+ years in data and analytics, passionate about enabling students through lifelong learning and hands-on mentorship."
              }
            ].map((advisor, index) => (
              <div
                key={advisor.name}
                className={`group flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/10`}
              >
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    width={160}
                    height={160}
                    className="relative rounded-full shadow-xl ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                    <h3 className="text-2xl font-serif font-bold text-primary">{advisor.name}</h3>
                    <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                      {advisor.title}
                    </span>
                  </div>
                  <p className="text-text/70 leading-relaxed mb-4">{advisor.bio}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {advisor.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-secondary/30 text-text/70 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-24 px-6 bg-gradient-to-b from-secondary/10 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary/60 uppercase tracking-widest text-sm font-semibold">What We Offer</span>
            <h2 className="text-5xl font-serif font-bold text-primary mt-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/30 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Risk Management",
                description: "Comprehensive consulting services for risk management and regulatory compliance tailored to your industry."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Data Analytics",
                description: "Advanced data analytics and business intelligence solutions to drive informed decision-making."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                ),
                title: "Business Process",
                description: "Enterprise resource planning and business process optimization for operational excellence."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Digital Transformation",
                description: "Strategic technology and digital transformation consulting to modernize your business operations."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Healthcare Strategy",
                description: "Healthcare strategy and operational improvement services to enhance patient outcomes and efficiency."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: "Growth Strategy",
                description: "Develop and implement growth strategies to scale your business and maximize profitability."
              }
            ].map((service) => (
              <div
                key={service.title}
                className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/20 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full transition-all duration-500 group-hover:scale-150"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-text/70 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-24 px-6 bg-gradient-to-b from-background to-primary/5 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary/60 uppercase tracking-widest text-sm font-semibold">What Our Clients Say</span>
            <h2 className="text-5xl font-serif font-bold text-primary mt-4">Client Testimonials</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/30 mx-auto mt-6 rounded-full"></div>
            <p className="mt-6 text-lg text-text/70 max-w-2xl mx-auto">
              Our clients have been thrilled with the results we&apos;ve delivered. Here&apos;s what they have to say about working with S-square D-square.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Sahil Chopra",
                title: "Senior Manager Internal Audit, Citi | CPA",
                quote: "Shashank helped us at a critical time during internal audit validations. He led a large team to timely deliver reviews of technology transformation actions related to Spot RWA. Shashank's strength is managing stakeholder relationships and providing credible technical challenge to management actions."
              },
              {
                name: "Adam ElKhouli",
                title: "Senior Vice President Internal Audit, Citi",
                quote: "Shashank served as the lead from the Internal Audit Tech. Transformation Team on significant audit transformation projects. He demonstrated exceptional leadership and expertise, ensuring successful outcomes and navigating complex deliverables. Shashank's dedication to quality and attention to detail were evident and he played crucial role in completing audit projects."
              },
              {
                name: "David M. Herman",
                title: "Vice President, Citi",
                quote: "I worked together with Shashank on a complex and challenging project at Citi. Shashank is very capable and a great manager with impressive people and technical skills. He was organized, provided well thought out views, and made working on the project much more enjoyable with his ability to lighten the mood yet still meet constrained timelines while producing a strong work product."
              },
              {
                name: "Jennifer (Lewis) Priestley, Ph.D.",
                title: "Professor of Statistics and Data Science (Emerita), Kennesaw State University",
                quote: "Shashank is a creative, entrepreneurial problem solver. He brings high energy and a positive attitude to any project. He is also a life long learner who is consistently challenging himself to broaden and deepen his skillset. He will make a positive impact on any organization of which he is a part."
              },
              {
                name: "Lisa (Chilton) Small",
                title: "Model Risk Management Group Project Manager, SunTrust Banks, Inc.",
                quote: "Shashank is a creative, entrepreneurial problem solver. He brings high energy and a positive attitude to any project. He is also a life long learner who is consistently challenging himself to broaden and deepen his skillset. He will make a positive impact on any organization of which he is a part."
              },
              {
                name: "Amit Kapur",
                title: "Project Manager and Solutions Architect, Infosys",
                quote: "In the brief period of time I could work with Shashank on the Suntrust Enterprise Risk Program, I saw his zeal for getting the work done. He is always coming up with solutions and takes charge of the situation with his team. I observed his client relationship skills and truly appreciate his enthusiasm to go for a win-win situation."
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/10"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div className="relative">
                  <p className="text-text/70 leading-relaxed italic mb-6 pr-8">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                      <p className="text-sm text-text/60">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="w-full py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <span className="text-primary/60 uppercase tracking-widest text-sm font-semibold">Get In Touch</span>
          <h2 className="text-5xl font-serif font-bold text-primary mt-4">Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/30 mx-auto mt-6 rounded-full"></div>
          <p className="mt-8 text-xl text-text/70 max-w-2xl mx-auto">
            Ready to transform your business? We&apos;d love to hear from you. Reach out and let&apos;s discuss how we can help you achieve exponential growth.
          </p>

          {/* Book Appointment Button */}
          <div className="mt-10">
            <a
              href="https://calendly.com/ssqr-dsqr/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white text-lg font-semibold rounded-full transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book an Appointment
            </a>
          </div>

          <div className="mt-12 flex justify-center gap-6 flex-wrap">
            {[
              { href: "https://www.facebook.com/S-square-D-square-LLC-115239573237276/", icon: "/images/fbIcon.png", name: "Facebook", color: "hover:bg-blue-600" },
              { href: "https://www.linkedin.com/in/innovationusingdatascience/", icon: "/images/linkdinIcon.png", name: "LinkedIn", color: "hover:bg-blue-700" },
              { href: "https://www.pinterest.com/shashankhonavar/", icon: "/images/pinterestIcon.png", name: "Pinterest", color: "hover:bg-red-600" },
              { href: "https://twitter.com/ssquaredsquare", icon: "/images/twiterIcon.png", name: "Twitter", color: "hover:bg-sky-500" }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl ${social.color}`}
                title={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={32}
                  height={32}
                  className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </a>
            ))}
          </div>

          {/* Contact Info Cards */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {/* Address */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-primary/10 text-left hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-primary mb-2">Address</h4>
              <p className="text-text/70 text-sm leading-relaxed">
                S-Square D-Square Consulting LLC<br />
                3070 Haven Mill Lane,<br />
                Milton, GA 30004-8115
              </p>
            </div>

            {/* Email */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-primary/10 text-left hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-primary mb-2">E-mail</h4>
              <a href="mailto:shashank.honavar@ssquaredsquare.com" className="text-text/70 text-sm hover:text-primary transition-colors break-all">
                shashank.honavar@ssquaredsquare.com
              </a>
            </div>

            {/* Phone */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-primary/10 text-left hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="font-semibold text-primary mb-2">Phone</h4>
              <a href="tel:+14049939237" className="text-text/70 text-sm hover:text-primary transition-colors">
                +1 (404) 993-9237
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-primary text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Logo & Company */}
            <div className="flex items-center gap-4">
              <Image src="/images/favicon.png" alt="Logo" width={50} height={50} className="brightness-0 invert" />
              <div>
                <h3 className="text-xl font-serif font-bold">S-square D-square</h3>
                <p className="text-white/70 text-sm">Consulting LLC</p>
              </div>
            </div>

            {/* Address */}
            <div className="text-white/70 text-sm leading-relaxed text-center md:text-left">
              <p>3070 Haven Mill Lane,</p>
              <p>Milton, GA 30004-8115</p>
            </div>

            {/* Navigation */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-white/80">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about-us" className="hover:text-white transition-colors">About</a>
              <a href="#advisory-board" className="hover:text-white transition-colors">Advisory Board</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#contact-us" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>&copy; S-square D-square Consulting LLC 2020</p>
            <p>
              Designed by{' '}
              <a
                href="https://www.linkedin.com/in/shrilakshmipai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors underline underline-offset-2"
              >
                Shrilakshmi Pai Nallur
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
