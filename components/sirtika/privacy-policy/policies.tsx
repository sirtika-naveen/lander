export function Policies() {
  const sections = [
    {
      number: "1",
      title: "Who We Are",
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-4">
            SIRTIKA™ is a revenue growth architecture framework created by Naveenn Suri and offered through consulting, diagnostics, advisory services, and related business interactions.
          </p>
          <p className="text-slate-600 leading-relaxed mb-2">For privacy-related questions, you can contact:</p>
          <p className="text-slate-800 font-semibold">Naveenn Suri</p>
          <p className="text-slate-600">Email: <a href="mailto:n.suri@sirtika.com" className="text-slate-800 underline underline-offset-2">n.suri@sirtika.com</a></p>
          <p className="text-slate-600">Website: <a href="https://www.sirtika.com" className="text-slate-800 underline underline-offset-2">www.sirtika.com</a></p>
        </>
      ),
    },
    {
      number: "2",
      title: "Information We Collect",
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-4">We may collect the following categories of information:</p>
          <p className="text-slate-800 font-semibold mb-2">a) Information you provide directly</p>
          <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
            {["Name", "Company name", "Job title", "Email address", "Phone number", "Business information submitted through forms", "Information shared during calls or meetings", "Diagnostic inputs and questionnaires"].map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-slate-800 font-semibold mb-2">b) Information collected automatically</p>
          <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
            {["IP address", "Browser type", "Device type", "Pages visited", "Time spent on site"].map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-slate-800 font-semibold mb-2">c) Marketing and communication data</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            {["Emails exchanged", "Form submissions", "Meeting requests"].map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      ),
    },
    {
      number: "3",
      title: "How We Use Your Information",
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-4">We use your information to:</p>
          <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
            {["Respond to enquiries", "Schedule meetings", "Share reports and proposals", "Deliver services", "Improve website and services", "Maintain records", "Send relevant communication"].map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-slate-800 font-semibold">We do not sell your personal information.</p>
        </>
      ),
    },
    {
      number: "4",
      title: "Cookies and Analytics",
      content: <p className="text-slate-600 leading-relaxed">We may use cookies to improve user experience and analyze website usage.</p>,
    },
    {
      number: "5",
      title: "Data Sharing",
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-4">We may share information with:</p>
          <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
            {["Technology providers", "CRM or email tools", "Advisors", "Authorities if required"].map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-slate-800 font-semibold">We do not sell or misuse your data.</p>
        </>
      ),
    },
    {
      number: "6",
      title: "Data Retention",
      content: <p className="text-slate-600 leading-relaxed">We retain information only as long as necessary for business or legal purposes.</p>,
    },
    {
      number: "7",
      title: "Data Security",
      content: <p className="text-slate-600 leading-relaxed">We take reasonable steps to protect your data, though no system is 100% secure.</p>,
    },
    {
      number: "8",
      title: "Your Rights",
      content: <p className="text-slate-600 leading-relaxed">You may request access, correction, or deletion of your data.</p>,
    },
    {
      number: "9",
      title: "Third-Party Links",
      content: <p className="text-slate-600 leading-relaxed">We are not responsible for third-party websites.</p>,
    },
    {
      number: "10",
      title: "Updates",
      content: <p className="text-slate-600 leading-relaxed">We may update this policy periodically.</p>,
    },
    {
      number: "11",
      title: "Contact",
      content: (
        <>
          <p className="text-slate-800 font-semibold">Naveenn Suri</p>
          <p className="text-slate-600">Email: <a href="mailto:n.suri@sirtika.com" className="text-slate-800 underline underline-offset-2">n.suri@sirtika.com</a></p>
          <p className="text-slate-600">Website: <a href="https://www.sirtika.com" className="text-slate-800 underline underline-offset-2">www.sirtika.com</a></p>
        </>
      ),
    },
  ];

  return (
    <section className="w-full" style={{ backgroundColor: '#FFFFFF' }}>

      {/* Intro */}
      <div className="w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-12 xl:px-20 2xl:px-28 py-16 md:py-20 xl:py-28">
        <p className="text-slate-600 font-semibold text-lg md:text-xl xl:text-2xl leading-relaxed mb-5">
          SIRTIKA™ respects your privacy and is committed to protecting the personal information you share with us.
        </p>
        <p className="text-slate-600 font-semibold text-lg md:text-xl xl:text-2xl leading-relaxed mb-5">
          This Privacy Policy explains how we collect, use, store, and protect information when you visit our website, fill out a form, request a strategy call, download material, submit a diagnostic questionnaire, or otherwise interact with us.
        </p>
        <p className="text-slate-600 font-semibold text-lg md:text-xl xl:text-2xl leading-relaxed">
          If you do not agree with this Privacy Policy, please do not use this website or submit your information.
        </p>
      </div>

      {/* Divider */}
      <div className="w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-12 xl:px-20 2xl:px-28">
        <hr className="border-slate-200" />
      </div>

      {/* Policy Sections */}
      <div className="w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-12 xl:px-20 2xl:px-28 py-12 md:py-16 xl:py-20 space-y-12 xl:space-y-16">
        {sections.map(({ number, title, content }) => (
          <div key={number} className="flex gap-6 md:gap-10 xl:gap-16">
            {/* Section Number */}
            <div className="flex-shrink-0 w-10 md:w-14 xl:w-20">
              <span
                className="text-3xl md:text-4xl xl:text-6xl font-bold leading-none select-none"
                style={{ color: '#0F172A', opacity: 0.1 }}
              >
                {number}
              </span>
            </div>
            {/* Section Content */}
            <div className="flex-1 pt-1">
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-slate-900 mb-4 xl:mb-6 tracking-tight">
                {title}
              </h2>
              <div className="text-base md:text-lg xl:text-xl [&_p]:leading-relaxed [&_li]:leading-relaxed">
                {content}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer strip */}
      <div className="mt-8 py-10 xl:py-14 border-t border-slate-200 text-center">
        <p className="text-sm xl:text-base text-slate-400 tracking-widest uppercase">
          SIRTIKA™ — Privacy Policy — {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}