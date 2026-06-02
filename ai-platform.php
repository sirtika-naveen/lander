<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta name="author" content="Pradeep Maurya">
<meta name="designer" content="Pradeep Maurya">
<meta name="designer:url" content="https://pradeepmaurya.in">
<title>SIRTIKA™ AI Diagnostic Platform — Growth Architecture Assessment</title>
<meta name="description" content="Evaluate your organisation's revenue architecture maturity and identify structural gaps with the SIRTIKA AI Diagnostic Platform."/>

<style>


/* Page hero */
.page-hero{background:radial-gradient(ellipse 90% 65% at 50% -5%,rgba(28,114,147,.2) 0%,transparent 60%),radial-gradient(ellipse 60% 40% at 80% 80%,rgba(109,46,70,.1) 0%,transparent 50%),#0a0608;padding-top:130px;padding-bottom:80px}

/* Pulsing dot */
@keyframes pulse2{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.85)}}
.dot-pulse{animation:pulse2 2s ease-in-out infinite}

/* Dimension card accent */
.dim-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#1C7293,#44b0c0);border-radius:16px 16px 0 0}

/* Deliverable check row */
.del-row{display:flex;align-items:center;gap:.75rem;padding:.7rem 0;border-bottom:1px solid rgba(184,137,58,.08)}
.del-row:last-child{border-bottom:none}

/* Stage pill */
.stage-pill{display:flex;align-items:center;justify-content:center;flex-direction:column;border-radius:9999px;font-weight:700}

/* Marquee */
@keyframes mq{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.mqt{animation:mq 35s linear infinite;display:flex;white-space:nowrap}

/* Stat number */
.stn{font-weight:700;line-height:1}

@media(max-width:640px){
  #ck{white-space:normal;flex-direction:column;width:90vw;text-align:center}
}
</style>
<?php include 'head.php';?>
</head>
<body>
<?php include 'navigationMenu.php';?>

<!-- ══════════════════ HERO ══════════════════ -->
<section class="page-hero gp relative overflow-hidden">
  <!-- Floating orbs -->
  <div class="absolute top-1/4 right-1/5 w-96 h-96 rounded-full blur-3xl pointer-events-none" style="background:rgba(28,114,147,.09)"></div>
  <div class="absolute bottom-0 left-1/4 w-64 h-64 rounded-full blur-2xl pointer-events-none" style="background:rgba(109,46,70,.08)"></div>

  <div class="max-w-7xl mx-auto px-5 lg:px-8">
    <!-- Breadcrumb -->
    <div class="flex items-center gap-2 text-sm text-gray-200 mb-8 fu">
      <a href="index.php" class="hover:text-yellow-400 transition-colors">Home</a>
      <i class="fas fa-chevron-right text-gray-200" style="font-size:.6rem"></i>
      <span style="color:#44b0c0">AI Platform</span>
    </div>

    <div class="grid lg:grid-cols-2 gap-14 items-center">
      <!-- Left: headline + copy -->
      <div class="fu">
        <!-- Launch badge -->
        <div class="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full tb" style="background:rgba(28,114,147,.1)">
          <span class="w-2 h-2 rounded-full dot-pulse" style="background:#44b0c0"></span>
          <span class="slabel-teal" style="font-size:.65rem;letter-spacing:.2em">Launching Q3 2026</span>
        </div>

        <h1 class="font-display font-bold text-white leading-[1.08] mb-6" style="font-size:clamp(2.6rem,5.5vw,4.2rem)">
          SIRTIKA™ AI<br/>
          <em class="teal-text not-italic">Diagnostic Platform</em>
        </h1>
        <p class="text-gray-200 leading-relaxed mb-5 max-w-lg" style="font-size:clamp(.95rem,1.3vw,1.1rem)">
          Understand Your Structural Growth Gaps Before You Build.
        </p>
        <p class="text-gray-200 leading-relaxed mb-10 max-w-lg text-lg">
          The SIRTIKA AI Diagnostic Platform is a growth intelligence tool designed to evaluate how strong your organisation's revenue architecture really is.
        </p>

        <div class="flex flex-wrap gap-3 mb-12">
          <a href="#diagnostic" class="btn-teal px-7 py-3.5 rounded-full text-lg">Take the Diagnostic <i class="fas fa-arrow-right ml-2"></i></a>
          <a href="#how-it-fits" class="btn-outline px-7 py-3.5 rounded-full text-lg">How It Fits Within SIRTIKA</a>
        </div>

      </div>

      <!-- Right: visual -->
      <div class="fu d2 relative hidden lg:block">
        <div class="io rounded-2xl tb" style="height:500px">
          <img src="img/ai-plateform.jpeg" alt="AI Diagnostic Platform" class="rounded-2xl"/>
        </div>
        <!-- floating info card -->
        <div class="absolute -bottom-8 -left-8 tb rounded-xl px-5 py-4" style="background:rgba(10,6,8,.93);backdrop-filter:blur(14px)">
          <p class="slabel-teal text-sm mb-1.5">Platform Output</p>
          <p class="font-display font-semibold text-white text-lg leading-tight">Pillar Gap Report +<br/>90-Day Roadmap</p>
        </div>
        <!-- floating badge -->
        <div class="absolute -top-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center tb" style="background:rgba(28,114,147,.15)">
          <i class="fas fa-brain text-2xl" style="color:#44b0c0"></i>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════════ WHY THIS EXISTS ══════════════════ -->
<section class="py-28 lg:py-36">
  <div class="max-w-7xl mx-auto px-5 lg:px-8">
    <div class="grid gap-16 items-center">

      <!-- Right copy -->
      <div class="fu d2 order-1 lg:order-2">
        <p class="slabel mb-4">Why This Platform Exists</p>
        <h2 class="font-display font-bold text-white mb-8" style="font-size:clamp(2rem,4vw,3rem);line-height:1.1">
          Most organisations do not struggle<br/>because of <em class="maroon-text not-italic">lack of effort.</em>
        </h2>
        <p class="text-gray-200 leading-relaxed mb-8">They struggle because their growth system is not designed to scale.</p>
        <p class="text-gray-200 leading-relaxed mb-8">Many technology companies try to improve growth by increasing activity — more outreach, more proposals, more sales hires. But in many cases the real problem is structural.</p>

        <!-- Common patterns -->
        <div class="space-y-3">
          <p class="slabel mb-4" style="font-size:.6rem">Common Patterns</p>
          <div class="del-row">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(109,46,70,.15);border:1px solid rgba(109,46,70,.3)">
              <i class="fas fa-user-tie text-sm" style="color:#c76a93"></i>
            </div>
            <p class="text-gray-200 text-lg">Heavy founder dependency in deal closures</p>
          </div>
          <div class="del-row">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(109,46,70,.15);border:1px solid rgba(109,46,70,.3)">
              <i class="fas fa-crosshairs text-sm" style="color:#c76a93"></i>
            </div>
            <p class="text-gray-200 text-lg">Unclear industry focus or ICP definition</p>
          </div>
          <div class="del-row">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(109,46,70,.15);border:1px solid rgba(109,46,70,.3)">
              <i class="fas fa-file-alt text-sm" style="color:#c76a93"></i>
            </div>
            <p class="text-gray-200 text-lg">Weak sales assets and value articulation</p>
          </div>
          <div class="del-row">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(109,46,70,.15);border:1px solid rgba(109,46,70,.3)">
              <i class="fas fa-chart-bar text-sm" style="color:#c76a93"></i>
            </div>
            <p class="text-gray-200 text-lg">Inconsistent pipeline discipline</p>
          </div>
          <div class="del-row">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(109,46,70,.15);border:1px solid rgba(109,46,70,.3)">
              <i class="fas fa-sync-alt text-sm" style="color:#c76a93"></i>
            </div>
            <p class="text-gray-200 text-lg">Lack of structured governance around revenue</p>
          </div>
        </div>

        <p class="text-gray-200 mt-8 text-lg leading-relaxed border-l-2 border-teal-400/40 pl-4" style="color:#9ca3af">The SIRTIKA AI Diagnostic Platform helps leadership teams identify these structural gaps quickly and objectively.</p>
      </div>
    </div>
  </div>
</section>


<!-- ══════════════════ WHAT THE PLATFORM EVALUATES ══════════════════ -->
<section class="py-28 lg:py-36 relative" style="background:rgba(17,10,13,.6)">
  <div class="absolute inset-0 gp opacity-60 pointer-events-none"></div>
  <div class="max-w-7xl mx-auto px-5 lg:px-8 relative">
    <div class="text-center mb-16 fu">
      <p class="slabel-teal mb-4">What the Platform Evaluates</p>
      <h2 class="font-display font-bold text-white" style="font-size:clamp(2rem,4vw,3.1rem);line-height:1.1">
        The platform assesses the organisation across the<br/>
        <em class="teal-text not-italic">core dimensions</em> that determine whether growth can scale.
      </h2>
      <p class="text-gray-200 mt-5 max-w-2xl mx-auto">Each dimension directly impacts the sustainability and scalability of your revenue engine.</p>
    </div>

    <!-- Wide image -->
    <div class="fu io rounded-2xl tb mb-12" style="height:300px">
      <img src="img/growth-archi.jpeg" alt="Growth architecture assessment" class="rounded-2xl"/>
      <div class="absolute inset-0 flex items-center justify-center" style="z-index:10">
        <div class="text-center px-8 py-5 rounded-2xl" style="background:rgba(10,6,8,.78);backdrop-filter:blur(10px);border:1px solid rgba(28,114,147,.25)">
          <p class="font-display font-bold text-white text-xl lg:text-2xl mb-2">Five Dimensions of Growth Architecture</p>
          <p class="text-lg" style="color:#44b0c0;letter-spacing:.2em;text-transform:uppercase">Assessed in parallel — scored against benchmarks</p>
        </div>
      </div>
    </div>

    <!-- 5 dimension cards -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-5">
      <!-- Revenue Architecture -->
      <div class="fu d1 ch tb rounded-2xl p-6 relative" style="background:rgba(17,10,13,.9)">
        <div class="dim-card absolute inset-0 rounded-2xl pointer-events-none"></div>
        <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style="background:rgba(28,114,147,.15);border:1px solid rgba(28,114,147,.3)">
          <i class="fas fa-building-columns text-lg" style="color:#44b0c0"></i>
        </div>
        <p class="slabel mb-2" style="font-size:.6rem;color:#44b0c0">Dimension 01</p>
        <h3 class="font-display font-bold text-white text-lg mb-3">Revenue Architecture</h3>
        <p class="text-gray-200 text-lg leading-relaxed">Industry focus, ICP clarity, revenue model, pipeline structure.</p>
      </div>
      <!-- Market Traction -->
      <div class="fu d2 ch tb rounded-2xl p-6 relative" style="background:rgba(17,10,13,.9)">
        <div class="dim-card absolute inset-0 rounded-2xl pointer-events-none" style="background:transparent;"></div>
        <div class="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style="background:linear-gradient(90deg,#B8893A,#e4b84a)"></div>
        <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style="background:rgba(184,137,58,.15);border:1px solid rgba(184,137,58,.3)">
          <i class="fas fa-bolt gold text-lg"></i>
        </div>
        <p class="slabel mb-2" style="font-size:.6rem">Dimension 02</p>
        <h3 class="font-display font-bold text-white text-lg mb-3">Market Traction</h3>
        <p class="text-gray-200 text-lg leading-relaxed">Demand generation approach, enterprise targeting, CXO engagement.</p>
      </div>
      <!-- Sales Capability -->
      <div class="fu d3 ch tb rounded-2xl p-6 relative" style="background:rgba(17,10,13,.9)">
        <div class="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style="background:linear-gradient(90deg,#7C3AED,#a855f7)"></div>
        <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style="background:rgba(124,58,237,.15);border:1px solid rgba(124,58,237,.3)">
          <i class="fas fa-handshake text-lg" style="color:#a855f7"></i>
        </div>
        <p class="slabel mb-2" style="font-size:.6rem;color:#7C3AED">Dimension 03</p>
        <h3 class="font-display font-bold text-white text-lg mb-3">Sales Capability</h3>
        <p class="text-gray-200 text-lg leading-relaxed">Sales assets, value messaging, presales strength.</p>
      </div>
      <!-- Governance Discipline -->
      <div class="fu d4 ch tb rounded-2xl p-6 relative" style="background:rgba(17,10,13,.9)">
        <div class="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style="background:linear-gradient(90deg,#0EA5E9,#38bdf8)"></div>
        <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style="background:rgba(14,165,233,.15);border:1px solid rgba(14,165,233,.3)">
          <i class="fas fa-cogs text-lg" style="color:#38bdf8"></i>
        </div>
        <p class="slabel mb-2" style="font-size:.6rem;color:#0EA5E9">Dimension 04</p>
        <h3 class="font-display font-bold text-white text-lg mb-3">Governance Discipline</h3>
        <p class="text-gray-200 text-lg leading-relaxed">Pipeline reviews, forecasting structure, execution rhythm.</p>
      </div>
      <!-- Risk and Dependency -->
      <div class="fu d5 ch tb rounded-2xl p-6 relative" style="background:rgba(17,10,13,.9)">
        <div class="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style="background:linear-gradient(90deg,#10B981,#34d399)"></div>
        <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style="background:rgba(16,185,129,.15);border:1px solid rgba(16,185,129,.3)">
          <i class="fas fa-shield-alt text-lg" style="color:#34d399"></i>
        </div>
        <p class="slabel mb-2" style="font-size:.6rem;color:#10B981">Dimension 05</p>
        <h3 class="font-display font-bold text-white text-lg mb-3">Risk and Dependency</h3>
        <p class="text-gray-200 text-lg leading-relaxed">Founder reliance, revenue concentration, structural vulnerabilities.</p>
      </div>
    </div>
  </div>
</section>


<!-- ══════════════════ WHAT ORGANISATIONS RECEIVE ══════════════════ -->
<section class="py-28 lg:py-36 relative overflow-hidden">
  <div class="absolute inset-0" style="background:radial-gradient(ellipse 70% 60% at 30% 50%,rgba(28,114,147,.07) 0%,transparent 65%)"></div>
  <div class="max-w-7xl mx-auto px-5 lg:px-8 relative">
    <div class="grid lg:grid-cols-2 gap-16 items-center">

      <!-- Left: copy + deliverables list -->
      <div class="fu">
        <p class="slabel mb-4">What Organisations Receive</p>
        <h2 class="font-display font-bold text-white mb-6" style="font-size:clamp(2rem,4vw,3rem);line-height:1.1">
          A structured transformation report <em class="teal-text not-italic">including:</em>
        </h2>
        <p class="text-gray-200 text-lg leading-relaxed mb-10">After completing the diagnostic, organisations receive a comprehensive assessment that clarifies growth constraints and transformation priorities.</p>

        <!-- 7 deliverables -->
        <div class="space-y-0">
          <div class="del-row fu d1">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(28,114,147,.15);border:1px solid rgba(28,114,147,.3)">
              <i class="fas fa-chart-pie text-sm" style="color:#44b0c0"></i>
            </div>
            <div>
              <p class="text-white text-lg font-medium">Growth Maturity Score</p>
              <p class="text-gray-200 text-sm">Quantified score across all five dimensions</p>
            </div>
          </div>
          <div class="del-row fu d2">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(28,114,147,.15);border:1px solid rgba(28,114,147,.3)">
              <i class="fas fa-th-large text-sm" style="color:#44b0c0"></i>
            </div>
            <div>
              <p class="text-white text-lg font-medium">Capability Heatmap</p>
              <p class="text-gray-200 text-sm">Visual map of strength and gap areas</p>
            </div>
          </div>
          <div class="del-row fu d3">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(28,114,147,.15);border:1px solid rgba(28,114,147,.3)">
              <i class="fas fa-lightbulb text-sm" style="color:#44b0c0"></i>
            </div>
            <div>
              <p class="text-white text-lg font-medium">SWOT Insights</p>
              <p class="text-gray-200 text-sm">Structured strengths, weaknesses, opportunities, threats</p>
            </div>
          </div>
          <div class="del-row fu d4">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(28,114,147,.15);border:1px solid rgba(28,114,147,.3)">
              <i class="fas fa-search text-sm" style="color:#44b0c0"></i>
            </div>
            <div>
              <p class="text-white text-lg font-medium">Structural Gap Analysis</p>
              <p class="text-gray-200 text-sm">Named gaps mapped to each pillar with severity rating</p>
            </div>
          </div>
          <div class="del-row fu d1">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(28,114,147,.15);border:1px solid rgba(28,114,147,.3)">
              <i class="fas fa-list-ol text-sm" style="color:#44b0c0"></i>
            </div>
            <div>
              <p class="text-white text-lg font-medium">Prioritised Improvement Initiatives</p>
              <p class="text-gray-200 text-sm">Ranked actions across dimensions, sequenced by impact</p>
            </div>
          </div>
          <div class="del-row fu d2">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(28,114,147,.15);border:1px solid rgba(28,114,147,.3)">
              <i class="fas fa-calendar-alt text-sm" style="color:#44b0c0"></i>
            </div>
            <div>
              <p class="text-white text-lg font-medium">90-Day Roadmap</p>
              <p class="text-gray-200 text-sm">Week-by-week actions for the first 90 days</p>
            </div>
          </div>
          <div class="del-row fu d3" style="border-bottom:none">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(28,114,147,.15);border:1px solid rgba(28,114,147,.3)">
              <i class="fas fa-road text-sm" style="color:#44b0c0"></i>
            </div>
            <div>
              <p class="text-white text-lg font-medium">Long-Term Transformation Path</p>
              <p class="text-gray-200 text-sm">12-month architecture blueprint aligned to SIRTIKA pillars</p>
            </div>
          </div>
        </div>

        <p class="text-gray-200 mt-8 text-lg leading-relaxed">This report helps leadership teams clearly understand where growth is constrained and what must change.</p>
      </div>

      <!-- Right: report visual + image -->
      <div class="fu d2 space-y-5">
        <div class="io rounded-2xl tb" style="height:320px">
          <img src="img/diagnostic.jpeg" alt="Diagnostic report" class="rounded-2xl"/>
        </div>
        <!-- Report card mockup -->
        <div class="tb rounded-2xl p-7" style="background:rgba(17,10,13,.95)">
          <div class="flex items-center justify-between mb-5">
            <p class="slabel-teal" style="font-size:.6rem">Sample Report Output</p>
            <span class="text-sm px-3 py-1 rounded-full font-semibold" style="background:rgba(28,114,147,.15);color:#44b0c0;border:1px solid rgba(28,114,147,.25)">Confidential</span>
          </div>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-gray-200 text-sm">Revenue Architecture</span>
              <div class="flex items-center gap-3">
                <div class="w-32 h-1.5 rounded-full" style="background:rgba(255,255,255,.06)">
                  <div class="h-1.5 rounded-full" style="width:45%;background:linear-gradient(90deg,#1C7293,#44b0c0)"></div>
                </div>
                <span class="text-sm text-white w-8 text-right">45%</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-200 text-sm">Market Traction</span>
              <div class="flex items-center gap-3">
                <div class="w-32 h-1.5 rounded-full" style="background:rgba(255,255,255,.06)">
                  <div class="h-1.5 rounded-full" style="width:60%;background:linear-gradient(90deg,#B8893A,#e4b84a)"></div>
                </div>
                <span class="text-sm text-white w-8 text-right">60%</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-200 text-sm">Sales Capability</span>
              <div class="flex items-center gap-3">
                <div class="w-32 h-1.5 rounded-full" style="background:rgba(255,255,255,.06)">
                  <div class="h-1.5 rounded-full" style="width:35%;background:linear-gradient(90deg,#7C3AED,#a855f7)"></div>
                </div>
                <span class="text-sm text-white w-8 text-right">35%</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-200 text-sm">Governance Discipline</span>
              <div class="flex items-center gap-3">
                <div class="w-32 h-1.5 rounded-full" style="background:rgba(255,255,255,.06)">
                  <div class="h-1.5 rounded-full" style="width:25%;background:linear-gradient(90deg,#0EA5E9,#38bdf8)"></div>
                </div>
                <span class="text-sm text-white w-8 text-right">25%</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-200 text-sm">Risk & Dependency</span>
              <div class="flex items-center gap-3">
                <div class="w-32 h-1.5 rounded-full" style="background:rgba(255,255,255,.06)">
                  <div class="h-1.5 rounded-full" style="width:55%;background:linear-gradient(90deg,#10B981,#34d399)"></div>
                </div>
                <span class="text-sm text-white w-8 text-right">55%</span>
              </div>
            </div>
          </div>
          <div class="mt-5 pt-4 border-t border-gold-800/15 flex items-center justify-between">
            <span class="text-gray-200 text-sm">Overall Maturity Score</span>
            <span class="font-display font-bold text-white text-lg">44 <span class="text-sm text-gray-200">/ 100</span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- ══════════════════ HOW IT FITS WITHIN SIRTIKA ══════════════════ -->
<section id="how-it-fits" class="py-28 lg:py-36" style="background:rgba(17,10,13,.6)">
  <div class="max-w-7xl mx-auto px-5 lg:px-8">
    <div class="text-center mb-16 fu">
      <p class="slabel mb-4">How It Fits Within SIRTIKA</p>
      <h2 class="font-display font-bold text-white" style="font-size:clamp(2rem,4vw,3.1rem);line-height:1.1">
        The Entry Point to <em class="gold-text not-italic">Transformation</em>
      </h2>
      <p class="text-gray-200 mt-5 max-w-2xl mx-auto">The AI Diagnostic Platform powers the Diagnose stage of the SIRTIKA Growth Architecture program.</p>
    </div>

    <div class="grid lg:grid-cols-2 gap-14 items-center">
      <!-- Left: flow explanation -->
      <div class="fu space-y-6">
        <div class="tb rounded-2xl p-6 flex gap-5" style="background:rgba(17,10,13,.9)">
          <div class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-display font-black text-lg" style="background:rgba(28,114,147,.2);border:2px solid rgba(28,114,147,.4);color:#44b0c0">D</div>
          <div>
            <p class="text-white font-semibold mb-1">The diagnostic identifies structural gaps</p>
            <p class="text-gray-200 text-lg leading-relaxed">The AI Platform runs the five-dimension assessment and produces the SIRTIKA Pillar Gap Report — your transformation roadmap.</p>
          </div>
        </div>
        <div class="flex items-center gap-3 px-6">
          <div class="h-px flex-1" style="background:rgba(184,137,58,.2)"></div>
          <i class="fas fa-arrow-down gold text-sm"></i>
          <div class="h-px flex-1" style="background:rgba(184,137,58,.2)"></div>
        </div>
        <div class="gb rounded-2xl p-6 flex gap-5" style="background:rgba(17,10,13,.9)">
          <div class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-display font-black text-lg" style="background:rgba(184,137,58,.15);border:2px solid rgba(184,137,58,.35);color:#B8893A">A×3</div>
          <div>
            <p class="text-white font-semibold mb-1">The SIRTIKA advisory program then builds the engine</p>
            <p class="text-gray-200 text-lg leading-relaxed">The Transformation Advisory owns the three A's: Architect, Activate, Accelerate. Together, they deliver the complete SIRTIKA™ programme.</p>
          </div>
        </div>
      </div>

      <!-- Right: 4-stage visual -->
      <div class="fu d2">
        <div class="io rounded-2xl tb mb-6" style="height:280px">
          <img src="img/four-stage.jpeg" alt="The Four Stages" class="rounded-2xl"/>
        </div>

        <!-- 4 stage pills -->
        <div class="grid grid-cols-4 gap-3">
          <div class="tb rounded-2xl p-4 text-center" style="background:rgba(28,114,147,.12)">
            <div class="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center font-display font-black" style="background:rgba(28,114,147,.25);color:#44b0c0;font-size:1.1rem">D</div>
            <p class="text-white text-sm font-semibold">Diagnose</p>
            <p class="text-sm mt-1" style="color:#44b0c0">AI Platform</p>
          </div>
          <div class="gb rounded-2xl p-4 text-center" style="background:rgba(184,137,58,.07)">
            <div class="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center font-display font-black gold" style="background:rgba(184,137,58,.15);border:1.5px solid rgba(184,137,58,.3);font-size:1.1rem">A</div>
            <p class="text-white text-sm font-semibold">Architect</p>
            <p class="text-gray-200 text-sm mt-1">Advisory</p>
          </div>
          <div class="gb rounded-2xl p-4 text-center" style="background:rgba(184,137,58,.07)">
            <div class="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center font-display font-black gold" style="background:rgba(184,137,58,.15);border:1.5px solid rgba(184,137,58,.3);font-size:1.1rem">A</div>
            <p class="text-white text-sm font-semibold">Activate</p>
            <p class="text-gray-200 text-sm mt-1">Advisory</p>
          </div>
          <div class="gb rounded-2xl p-4 text-center" style="background:rgba(184,137,58,.07)">
            <div class="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center font-display font-black gold" style="background:rgba(184,137,58,.15);border:1.5px solid rgba(184,137,58,.3);font-size:1.1rem">A</div>
            <p class="text-white text-sm font-semibold">Accelerate</p>
            <p class="text-gray-200 text-sm mt-1">Advisory</p>
          </div>
        </div>
        <p class="text-gray-200 text-sm text-center mt-4">The AI Platform owns the Diagnose stage. The Transformation Advisory owns the three A's.</p>
      </div>
    </div>
  </div>
</section>


<!-- ══════════════════ WHO THIS IS FOR ══════════════════ -->
<section class="py-28 lg:py-36 relative overflow-hidden">
  <div class="absolute inset-0 gp-gold opacity-40 pointer-events-none"></div>
  <div class="absolute inset-0" style="background:radial-gradient(ellipse 70% 60% at 70% 50%,rgba(28,114,147,.06) 0%,transparent 60%)"></div>
  <div class="max-w-7xl mx-auto px-5 lg:px-8 relative">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div class="fu">
        <p class="slabel mb-4">Who This Is For</p>
        <h2 class="font-display font-bold text-white mb-8" style="font-size:clamp(2rem,4vw,3rem);line-height:1.1">
          The platform is designed for technology companies<br/>
          <em class="teal-text not-italic">that are preparing to scale.</em>
        </h2>
        <p class="text-gray-200 leading-relaxed mb-10">Typical users include organisations across multiple sectors where growth is real but still feels harder than it should.</p>

        <!-- Sector list -->
        <div class="space-y-3">
          <div class="tb rounded-xl p-4 flex items-center gap-4" style="background:rgba(17,10,13,.8)">
            <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(28,114,147,.15)"><i class="fas fa-cog text-lg" style="color:#44b0c0"></i></div>
            <p class="text-white text-lg">Technology consulting firms</p>
          </div>
          <div class="tb rounded-xl p-4 flex items-center gap-4" style="background:rgba(17,10,13,.8)">
            <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(28,114,147,.15)"><i class="fas fa-cloud text-lg" style="color:#44b0c0"></i></div>
            <p class="text-white text-lg">Enterprise SaaS companies</p>
          </div>
          <div class="tb rounded-xl p-4 flex items-center gap-4" style="background:rgba(17,10,13,.8)">
            <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(28,114,147,.15)"><i class="fas fa-layer-group text-lg" style="color:#44b0c0"></i></div>
            <p class="text-white text-lg">ERP and platform partners</p>
          </div>
          <div class="tb rounded-xl p-4 flex items-center gap-4" style="background:rgba(17,10,13,.8)">
            <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(28,114,147,.15)"><i class="fas fa-project-diagram text-lg" style="color:#44b0c0"></i></div>
            <p class="text-white text-lg">Digital transformation providers</p>
          </div>
          <div class="tb rounded-xl p-4 flex items-center gap-4" style="background:rgba(17,10,13,.8)">
            <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(28,114,147,.15)"><i class="fas fa-rocket text-lg" style="color:#44b0c0"></i></div>
            <p class="text-white text-lg">Founder-led technology businesses</p>
          </div>
        </div>

        <div class="mt-8 tb rounded-xl p-5" style="background:rgba(28,114,147,.07)">
          <p class="text-gray-200 text-lg leading-relaxed italic">Especially organisations where growth is real but still feels harder than it should. If your team has strong product-market fit but struggles with consistent revenue growth and scaling beyond founder-driven sales, this platform is for you.</p>
        </div>
      </div>

      <div class="fu d2 space-y-5">
        <div class="io rounded-2xl tb" style="height:380px">
          <img src="img/tech-team.jpeg" alt="Technology company team" class="rounded-2xl"/>
        </div>
        <!-- Quote card -->
        <div class="tb rounded-2xl p-6" style="background:rgba(17,10,13,.9)">
          <p class="text-gray-200 text-lg leading-relaxed italic border-l-2 border-teal-400/40 pl-4">
            "Diagnose the architecture before redesigning the engine. If growth feels heavy, the problem is often structural."
          </p>
          <p class="text-sm mt-4 gold font-medium">— Naveenn Suri, Creator of SIRTIKA™</p>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- ══════════════════ DIAGNOSTIC CTA SECTION ══════════════════ -->
<section id="diagnostic" class="py-28 lg:py-36 relative overflow-hidden" style="background:rgba(17,10,13,.7)">
  <div class="absolute inset-0" style="background:radial-gradient(ellipse 80% 70% at 50% 50%,rgba(28,114,147,.1) 0%,transparent 65%)"></div>
  <!-- Background image -->
  <div class="absolute inset-0 overflow-hidden">
    <img src="img/connect-banner.jpeg" alt="" class="w-full h-full object-cover opacity-8" style="opacity:.08"/>
  </div>
  <div class="relative max-w-4xl mx-auto px-5 lg:px-8 text-center fu">
    <div class="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full tb" style="background:rgba(28,114,147,.1)">
      <span class="w-2 h-2 rounded-full dot-pulse" style="background:#44b0c0"></span>
      <span class="slabel-teal" style="font-size:.65rem;letter-spacing:.2em">Launching Q3 2026 — Join the Waitlist</span>
    </div>

    <h2 class="font-display font-bold text-white mb-6" style="font-size:clamp(2.4rem,5vw,4rem);line-height:1.08">
      Diagnose the architecture<br/><em class="teal-text not-italic">before redesigning the engine.</em>
    </h2>
    <p class="text-gray-200 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">If growth feels heavy, the problem is often structural. The SIRTIKA AI Diagnostic Platform helps organisations understand their current growth architecture and identify the changes required to scale.</p>

    <div class="flex flex-wrap gap-4 justify-center mb-10">
      <a href="https://calendly.com/naveenn-sirtika" target="_blank" class="btn-teal px-9 py-4 rounded-full text-base font-semibold">Book a Diagnostic Call <i class="fas fa-arrow-right ml-2"></i></a>
      <a href="mailto:n.suri@sirtika.com" class="btn-teal-outline px-9 py-4 rounded-full text-base flex items-center gap-2">
        <i class="fas fa-envelope"></i> n.suri@sirtika.com
      </a>
    </div>
    <p class="text-gray-200 text-lg">The platform is in final development. Contact us to join the early access list.</p>
  </div>
</section>


<?php include 'footer.php';?>


<script>
// Nav scroll effect
window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('s',window.scrollY>50));

// Mobile menu toggle
document.querySelector('#nav button[onclick]')?.addEventListener('click',()=>{});

// Intersection observer for fade-up
const obs=new IntersectionObserver(e=>{
  e.forEach(el=>{if(el.isIntersecting)el.target.classList.add('v')})
},{threshold:.1});
document.querySelectorAll('.fu').forEach(el=>obs.observe(el));

// Cookie
if(localStorage.getItem('ck'))document.getElementById('ck').style.display='none';

// Smooth scroll with nav offset
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href').slice(1);
    const el=document.getElementById(id);
    if(el){e.preventDefault();window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-75,behavior:'smooth'})}
  });
});
</script>
</body>
</html>