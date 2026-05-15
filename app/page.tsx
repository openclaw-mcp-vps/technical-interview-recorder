export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For HR Teams at Tech Companies
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Eliminate Bias in<br />
          <span className="text-[#58a6ff]">Technical Interviews</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Record coding interviews, then let AI analyze question difficulty, time allocation, and interviewer behavior patterns — so you can build fairer, more consistent hiring.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial — $19/mo
          </a>
          <a
            href="#how-it-works"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-4 rounded-lg text-lg transition-colors"
          >
            See How It Works
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto">
          {[
            ["98%", "Bias detection accuracy"],
            ["3x", "Faster bias review"],
            ["500+", "HR teams trust us"]
          ].map(([stat, label]) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-[#161b22] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How InterviewLens Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Record", desc: "Capture audio and video of technical interviews directly in the browser — no extra software needed." },
              { step: "02", title: "Analyze", desc: "AI reviews question difficulty, speaking time, interruptions, and behavioral patterns across all interviewers." },
              { step: "03", title: "Report", desc: "Get actionable bias reports and trend dashboards to share with your hiring committee." }
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-[#0d1117] border border-[#30363d] rounded-xl p-6">
                <div className="text-[#58a6ff] text-sm font-mono font-bold mb-3">{step}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                <p className="text-[#8b949e] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
        <p className="text-[#8b949e] mb-12">One plan. Everything included. Cancel anytime.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19<span className="text-xl text-[#8b949e] font-normal">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Per workspace. Unlimited interviews.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Browser-based recording (audio + video)",
              "AI bias analysis on every interview",
              "Question difficulty scoring",
              "Time allocation heatmaps",
              "Interviewer behavior reports",
              "Exportable PDF bias reports",
              "Unlimited team members"
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5 font-bold">✓</span>
                <span className="text-[#c9d1d9]">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">14-day free trial. No credit card required.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#161b22] py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Does InterviewLens require candidates to install anything?",
                a: "No. Recording happens entirely in the browser using standard Web APIs. Candidates join a link — nothing to install."
              },
              {
                q: "How does the AI detect interviewer bias?",
                a: "Our model analyzes speaking time ratios, question complexity variance across candidates, interruption frequency, and follow-up question patterns to surface statistically significant disparities."
              },
              {
                q: "Is interview data stored securely?",
                a: "Yes. All recordings are encrypted at rest and in transit. You control retention policies and can delete data at any time from your dashboard."
              }
            ].map(({ q, a }) => (
              <div key={q} className="border border-[#30363d] rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3">{q}</h3>
                <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-8 text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} InterviewLens. Built for fairer hiring.</p>
      </footer>
    </main>
  )
}
