"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-background text-text">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-primary p-6 shadow-md flex items-center justify-between z-10">
        <div className="flex items-center">
          <Image src="/images/favicon.png" alt="Logo" width={50} height={50} className="mr-4" />
          <ul className="flex space-x-4 text-background">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#advisory-board" className="hover:underline">Advisory Board</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="w-full text-center py-32 mt-24">
        <h1 className="text-5xl font-serif font-bold text-primary">S-square D-square Consulting</h1>
        <p className="mt-6 text-2xl font-sans">Leveraging data science and internal controls to improve profitability. We help you grow your business, exponentially!!</p>
      </section>

      {/* About Us Section */}
      <section id="about" className="w-full py-20 mt-24">
        <h2 className="text-4xl font-serif font-bold text-primary mb-6">About Us</h2>
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <div className="md:w-1/3">
            <Image src="/images/photo-AboutUs.png" alt="Shashank Honavar" width={200} height={200} className="rounded-full mx-auto mb-6 md:mb-0" />
          </div>
          <div className="md:w-2/3 md:pl-6">
            <p>Our company offers management consultancy services on a turnkey basis and works with small to mid-size businesses to improve their profitability by helping them grow their business by either increasing revenues or by taking a very critical look at their operations and minimizing their costs. While there are probably many competitors of ours that do this, our unique value proposition to prospective clients is that we bring to the table a very wide array of skills, background, and real hands-on experience across multiple industries in various disciplines and across numerous business functions.</p>
            <h3 className="text-3xl font-serif font-semibold text-primary mt-6">Owner Profile</h3>
            <p>S-square D-square LLC, is the second company founded by Shashank Honavar, a seasoned Risk Management executive with over 23 years experience covering multiple risk disciplines (Operational Risk, Credit Risk, Market Risk, Treasury Risk, Reputation Risk, Culture Risk), implementation of COSO ERM Framework guidelines, design and execution of risk-based audit programs leveraging data analytics and relationship management with regulatory agencies during periodic safety and soundness reviews.</p>
            <p>Shashank set up S-square D-square LLC in 2018 after talking to several small business owners and sensing a business opportunity. Small businesses make up 97% of all US businesses and collectively represent an untapped market for someone with the right experience to come in and provide fractional CXO services and help solve all of their business problems and also help develop/implement growth strategies.</p>
            <p>For additional details on the owner’s background, please visit <a href="https://www.linkedin.com/in/shashank-honavar" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Shashank Honavar’s LinkedIn profile</a>.</p>
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section id="advisory-board" className="w-full py-20 mt-24">
        <h2 className="text-4xl font-serif font-bold text-primary mb-6">Advisory Board</h2>
   <ul>
    <li className="mb-8 flex flex-col md:flex-row md:items-center">
      <Image src="/images/advisory1.png" alt="Bill Abernathy" width={150} height={150} className="rounded-full mx-auto md:mr-6" />
      <div>
        <h3 className="text-3xl font-serif font-semibold">Bill Abernathy (Banking/OCC)</h3>
        <p>Bill Abernathy has broad and varied experience as a Banker, Bank Regulator & Bank Consultant. He is the Principal & Executive Consultant at Abernathy Bank Consulting (ABC) which he founded. ABC provides consulting services across a broad spectrum, but specializes in helping banks with Risk Management and Regulatory matters. Bill has been a Senior Bank Officer (EVP and SVP) at 4 Georgia Banks. Bill was with the Office of Comptroller of the Currency (Federal Bank Regulator) and in his 30-year career with the OCC was National Bank Examiner, Assistant Deputy Comptroller and Director of 6 Divisions. Among his noteworthy skills are Risk Management, Regulatory Relations, Problem Bank Resolution, Leadership, and Management.</p>
      </div>
    </li>
    <li className="mb-8 flex flex-col md:flex-row md:items-center">
      <Image src="/images/advisory2.png" alt="Sudha Shenoy" width={150} height={150} className="rounded-full mx-auto md:mr-6" />
      <div>
        <h3 className="text-3xl font-serif font-semibold">Sudha Shenoy (Actuary)</h3>
        <p>Sudha Shenoy is an actuary with proven analytical, organizational and leadership skills with experience in areas including Medicare & Medicaid Programs, new product development, provider reimbursement, and risk management. She specializes in Pricing & Product Development, Medicare & Medicaid, ERM, and Health Exchange work.</p>
      </div>
    </li>
    <li className="mb-8 flex flex-col md:flex-row md:items-center">
      <Image src="/images/advisory3.png" alt="Dr. Ajay Subramanian" width={100} height={100} className="rounded-full mx-auto md:mr-6" />
      <div>
        <h3 className="text-3xl font-serif font-semibold">Dr. Ajay Subramanian (Academia)</h3>
        <p>Ajay Subramanian is the Bruce A. Palmer Professor in the Department of Risk Management and Insurance at the Robinson College of Business at Georgia State University. He also holds a secondary appointment in the Department of Finance. His current research interests lie in financial economics, microeconomics, industrial organization, and mathematical finance. He teaches courses on “Interest Rate Models” in the master’s program in Quantitative Risk Analysis and Management and Ph.D. courses on “Game Theory and Mechanism Design” and “Dynamic Risk Models.” In the past, he has taught undergraduate and master’s courses on “Derivative Securities” and “Financial Risk Management” as well as Ph.D. courses on “Stochastic Processes,” “Asset Pricing Theory,” and “Corporate Finance Theory.”</p>
      </div>
    </li>
    <li className="mb-8 flex flex-col md:flex-row md:items-center">
      <Image src="/images/advisory4.png" alt="Maya Nayak" width={150} height={150} className="rounded-full mx-auto md:mr-6" />
      <div>
        <h3 className="text-3xl font-serif font-semibold">Maya Nayak (Technology)</h3>
        <p>Maya Nayak is a results-oriented executive with 19+ years of experience in delivering large-scale enterprise solutions for the financial industry. She has worked closely with the CTO/CIO on several initiatives around digital transformation of the IT organization. Her primary expertise lies in solution architecture, product design, product development, and delivery, with a proven track record of on-time, on-budget delivery.</p>
      </div>
    </li>
    <li className="mb-8 flex flex-col md:flex-row md:items-center">
      <Image src="/images/advisory5.png" alt="Shilpan Patel" width={150} height={150} className="rounded-full mx-auto md:mr-6" />
      <div>
        <h3 className="text-3xl font-serif font-semibold">Shilpan Patel (Analytics)</h3>
        <p>Shilpan Patel is Co-Founder at Analyticshub.io and a Qlik Luminary for two years in a row (2018 and 2019). He is passionate about enabling students to realize their full potential through lifelong learning and mentorship. He believes that the best way to learn and master a skill is by doing. He has over 15 years of experience in data and analytics, and he has taught and mentored thousands of students.</p>
      </div>
    </li>
  </ul>
</section>

      {/* Services Section */}
      <section id="services" className="w-full py-20 mt-24">
        <h2 className="text-4xl font-serif font-bold text-primary mb-6">Services</h2>
        <ul className="list-disc pl-6">
          <li className="mb-4">Consulting services for risk management and regulatory compliance.</li>
          <li className="mb-4">Data analytics and business intelligence solutions.</li>
          <li className="mb-4">Enterprise resource planning (ERP) and business process optimization.</li>
          <li className="mb-4">Technology and digital transformation consulting.</li>
          <li className="mb-4">Healthcare strategy and operational improvement.</li>
        </ul>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="w-full py-20 mt-24">
        <h2 className="text-4xl font-serif font-bold text-primary mb-6">Contact Us</h2>
        <p className="text-xl">Please reach out to us with any inquiries. We look forward to hearing from you!</p>
        <div className="mt-6">
          <ul className="flex space-x-6">
            <li><a href="https://www.facebook.com/S-square-D-square-LLC-115239573237276/" target="_blank" rel="noopener noreferrer"><Image src="/images/fbIcon.png" alt="Facebook" width={40} height={40} /></a></li>
            {/* <li><a href="https://www.instagram.com/ssquaredsquare/" target="_blank" rel="noopener noreferrer"><Image src="/images/instaIcon.png" alt="Instagram" width={40} height={40} /></a></li> */}
            <li><a href="https://www.linkedin.com/in/innovationusingdatascience/" target="_blank" rel="noopener noreferrer"><Image src="/images/linkdinIcon.png" alt="LinkedIn" width={40} height={40} /></a></li>
            <li><a href="https://www.pinterest.com/shashankhonavar/" target="_blank" rel="noopener noreferrer"><Image src="/images/pinterestIcon.png" alt="Pinterest" width={40} height={40} /></a></li>
            <li><a href="https://twitter.com/ssquaredsquare" target="_blank" rel="noopener noreferrer"><Image src="/images/twiterIcon.png" alt="Twitter" width={40} height={40} /></a></li>
          </ul>
        </div>
      </section>
    </main>
  );
}
