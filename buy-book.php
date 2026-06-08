<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta name="author" content="Pradeep Maurya">
<meta name="designer" content="Pradeep Maurya">
<meta name="designer:url" content="https://pradeepmaurya.in">
<title>The Revenue Operating System — Naveenn Suri | SIRTIKA</title>
<meta name="description" content="The Revenue Operating System by Naveenn Suri — how to install a repeatable revenue engine in 90 days. Available worldwide on Amazon." />
<?php include 'head.php';?>
<style>
:root{
    --navy:#1C7293;
    --navy-2:#0e2a39;
    --gold:#e4b84a;
    --gold-soft:#FFE094;
    --paper:#F6F1E6;
    --paper-2:#FBF7EE;
    --ink:#fff;
    --ink-soft:#fff;
    --line:rgba(11,30,51,.14);
  }
 
     /* ---- layout ---- */
  .wrap{max-width:1180px;margin:0 auto;padding:54px 28px 80px}
  .grid{display:grid;grid-template-columns:360px 1fr;gap:56px;align-items:start}

  /* ===== LEFT RAIL : BUY CHANNELS ===== */
  .rail{position:sticky;top:32px}
  .cover-stage{
    perspective:1400px;display:flex;justify-content:center;margin-bottom:30px;
  }
  .cover{
    width:248px;height:372px;border-radius:3px 6px 6px 3px;
    background:linear-gradient(150deg,var(--navy) 0%,var(--navy-2) 100%);
    box-shadow:
      -10px 0 0 -2px rgba(0,0,0,.18) inset,
      18px 22px 44px rgba(11,30,51,.34);
    position:relative;overflow:hidden;
    transform:rotateY(-13deg) rotateX(2deg);
    transition:transform .6s cubic-bezier(.2,.7,.2,1);
    color:#fff;
  }
  .cover:hover{transform:rotateY(-4deg) rotateX(1deg)}
  .cover::before{ /* spine highlight */
    content:"";position:absolute;left:0;top:0;bottom:0;width:14px;
    background:linear-gradient(90deg,rgba(255,255,255,.16),rgba(255,255,255,0));
  }
  .cover-inner{padding:30px 26px;height:100%;display:flex;flex-direction:column}
  .cover-rule{height:2px;background:var(--gold);width:46px;margin-bottom:18px}
  .cover-kicker{
    font-size:9.5px;letter-spacing:.3em;text-transform:uppercase;
    color:var(--gold-soft);margin-bottom:auto
  }
  .cover-title{
    font-weight:600;font-size:30px;line-height:1.12;
    margin-bottom:14px;letter-spacing:.2px
  }
  .cover-sub{font-size:11.5px;line-height:1.5;color:rgba(255,255,255,.78);margin-bottom:24px}
  .cover-foot{border-top:1px solid rgba(201,162,75,.4);padding-top:12px}
  .cover-author{font-size:12.5px;letter-spacing:.12em;text-transform:uppercase}
  .cover-author b{font-weight:700}

  .buybox{
    border-radius:8px;padding:24px 22px 22px;
    box-shadow:0 14px 30px rgba(11,30,51,.07);
   background: rgba(17,10,13,.8);
  }
  .buybox h2{
   font-weight:600;font-size:19px;;
    margin-bottom:4px
  }
  .buybox .lede{font-size:14.5px;color:var(--ink-soft);margin-bottom:18px}
  .gold-divider{height:1px;background:var(--line);margin:4px 0 18px}

  .btn{
    display:flex;align-items:center;gap:12px;width:100%;
    background:var(--navy);color:#fff;text-decoration:none;
    border:1px solid var(--navy);border-radius:7px;
    padding:13px 16px;margin-bottom:12px;
    transition:transform .18s ease, box-shadow .18s ease, background .18s ease;
  }
  .btn:hover{transform:translateY(-2px);box-shadow:0 10px 22px rgba(11,30,51,.22);background:var(--navy-2)}
  .btn .flag{font-size:20px;line-height:1}
  .btn .txt{display:flex;flex-direction:column;text-align:left}
  .btn .txt small{font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--gold-soft)}
  .btn .txt span{font-size:15px;font-weight:700;letter-spacing:.2px}
  .btn .arrow{margin-left:auto;color:var(--gold);font-size:18px;transition:transform .18s ease}
  .btn:hover .arrow{transform:translateX(3px)}

  .formats{font-size:16px;color:var(--ink-soft);text-align:center;margin-top:10px}
  .more-regions{
    margin-top:16px;font-size:14.5px;color:var(--ink-soft);
    text-align:center;line-height:1.5
  }
  .diag{
    margin-top:18px;text-align:center;
    border-top:1px dashed var(--line);padding-top:16px
  }
  .diag a{
    ;font-weight:700;font-size:14.5px;text-decoration:none;
    border-bottom:2px solid var(--gold);padding-bottom:2px
  }
  .diag p{font-size:13.5px;color:var(--ink-soft);margin-top:6px}

  /* ===== RIGHT : BOOK CONTENT ===== */
  .eyebrow{
    font-size:11.5px;letter-spacing:.28em;text-transform:uppercase;
    color:var(--gold);font-weight:700;margin-bottom:18px
  }
  .eyebrow::after{content:"";display:inline-block;width:38px;height:2px;background:var(--gold);
    vertical-align:middle;margin-left:14px}
  h1.title{
   font-weight:700;;
    font-size:clamp(40px,5.4vw,62px);line-height:1.02;letter-spacing:-.5px;margin-bottom:16px
  }
  .subtitle{
    font-weight:400;font-style:italic;
    font-size:clamp(19px,2.4vw,24px);color:var(--ink-soft);margin-bottom:22px;line-height:1.35
  }
  .byline{
    letter-spacing:.06em;color:var(--ink);margin-bottom:30px
  }
  .byline b{}
  .lead{
    font-size:18px;line-height:1.66;color:var(--ink);max-width:60ch;margin-bottom:36px
  }
  .lead .drop{float:left;font-size:62px;line-height:.78;
    font-weight:600;color:var(--gold);padding:6px 12px 0 0
  }

  .section-label{
    font-weight:600;;
    font-size:22px;margin:0 0 18px;display:flex;align-items:center;gap:14px
  }
  .section-label::before{content:"";width:8px;height:8px;background:var(--gold);transform:rotate(45deg);flex:none}

  .functions{list-style:none;margin:0 0 40px;border-top:1px solid rgb(46, 32, 19);}
  .functions li{
    display:grid;grid-template-columns:118px 1fr;gap:18px;
    padding:15px 4px;border-bottom:1px solid rgb(46, 32, 19);align-items:baseline
  }
  .functions .fn{
    font-weight:600;;font-size:16px;
    letter-spacing:.04em
  }

  .who{
    background:rgba(17,10,13,.9);color:#fff;border-radius:10px;padding:30px 32px;margin-bottom:40px;
    position:relative;overflow:hidden;border:1px solid rgba(184,137,58,0.18);
  }
  .who::before{content:"";position:absolute;right:-30px;top:-30px;width:160px;height:160px;
    border:1px solid rgba(201,162,75,.28);border-radius:50%}
  .who .section-label{color:#fff;font-size:18px;margin-bottom:12px}
  .who .section-label::before{background:var(--gold)}
  .who p{line-height:1.6;color:rgba(255,255,255,.86);max-width:62ch}
  .who b{color:var(--gold-soft)}

  .principles{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-bottom:46px}
  .principle{border-left:3px solid var(--gold);padding:4px 0 4px 16px}
  .principle span{font-size:13px;color:var(--gold);font-weight:600;
    display:block;margin-bottom:6px;letter-spacing:.06em}
  .principle p{color:var(--ink);line-height:1.5}

  .author{display:grid;grid-template-columns:auto 1fr;gap:24px;align-items:start;
    border-top:1px solid var(--line);padding-top:34px}
  .author-badge{
    width:84px;height:84px;border-radius:50%;background:1px solid rgb(46, 32, 19);color:var(--gold);
    display:flex;align-items:center;justify-content:center;flex:none;
    font-weight:700;font-size:30px;letter-spacing:.02em
  }
  .author h3{font-weight:600;;font-size:21px;margin-bottom:8px}
  .author p{color:var(--ink-soft);line-height:1.62;max-width:64ch}
  .author-badge img {
  border-radius: 50%;
  width: 80px;
  overflow: hidden;
}

  /* ---- entrance animation ---- */
  .fade{opacity:0;transform:translateY(16px);animation:rise .7s cubic-bezier(.2,.7,.2,1) forwards}
  .d1{animation-delay:.05s}.d2{animation-delay:.15s}.d3{animation-delay:.25s}
  .d4{animation-delay:.35s}.d5{animation-delay:.45s}
  @keyframes rise{to{opacity:1;transform:none}}

  /* ---- responsive ---- */
  @media (max-width:880px){
    .grid{grid-template-columns:1fr;gap:42px}
    .rail{position:static}
    .principles{grid-template-columns:1fr}
    .functions li{grid-template-columns:96px 1fr;gap:12px}
    .wrap{padding:36px 22px 64px}
  }

</style>
</head>
<body>
<?php include 'navigationMenu.php';?>


  <main class="pt-32 pb-20 gp relative overflow-hidden" style="background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(109,46,70,.18) 0%,transparent 60%),#0a0608">
       <div class="max-w-7xl mx-auto px-5 lg:px-8 relative">
    <div class="grid">

      <!-- ============ LEFT RAIL — BUY CHANNELS ============ -->
      <aside class="rail">
        <div class="cover-stage fade d1">
          <div class="cover">
            <div class="cover-inner">
              <div class="cover-rule"></div>
              <div class="cover-kicker">A B2B Growth Blueprint</div>
              <div class="cover-title">The Revenue Operating System</div>
              <div class="cover-sub">How to Install a Repeatable Revenue Engine in 90 Days</div>
              <div class="cover-foot">
                <div class="cover-author text-gold">Naveenn <b>Suri</b></div>
              </div>
            </div>
          </div>
        </div>

        <div class="buybox fade d2 gb">
          <h2>Get the book</h2>
          <p class="lede">Hardcopy Now Available in India</p>
          <p class="lede">You can now order the hardcopy of my book, The Revenue Operating System</p>
          <a class="btn" href="https://notionpress.com/in/read/the-revenue-operating-system" target="_blank" rel="noopener">
            <span class="flag">🇮🇳</span>
            <span class="txt"><small>In · India</small><span>Buy Hardcopy on Notion Press</span></span>
            <span class="arrow">→</span>
          </a>
          <div class="gold-divider"></div>
          <p class="lede">Available worldwide on Amazon.</p>
          

          <a class="btn" href="https://a.co/d/0aTZvWrd" target="_blank" rel="noopener">
            <span class="flag">🇺🇸</span>
            <span class="txt"><small>Amazon · United States</small><span>Buy on Amazon US</span></span>
            <span class="arrow">→</span>
          </a>

          <a class="btn" href="https://amzn.in/d/09B6I2Fc" target="_blank" rel="noopener">
            <span class="flag">🇮🇳</span>
            <span class="txt"><small>Amazon · India</small><span>Buy on Amazon India</span></span>
            <span class="arrow">→</span>
          </a>

          <p class="formats">Paperback &amp; Kindle edition</p>
          <p class="more-regions">Outside the US or India? The book ships to most countries via your local Amazon store — search <b>“The Revenue Operating System — Naveenn Suri.”</b></p>

          <div class="diag">
            <a href="#">Take the free Revenue Readiness Diagnostic</a>
            <p>See where your revenue engine leaks — in 5 minutes.</p>
          </div>
        </div>
      </aside>

      <!-- ============ RIGHT — BOOK CONTENT ============ -->
      <section>
        <div class="eyebrow fade d2">New Release · Business / Sales &amp; Revenue</div>
        <h1 class="title fade d2">The Revenue<br>Operating System</h1>
        <p class="gold-text fade d3">How to Install a Repeatable Revenue Engine in 90 Days</p>
        <p class="byline fade d3 mt-4">by <b>Naveenn Suri</b> · Founder, SIRTIKA™ (Revenue Growth Architecture)</p>

        <p class="lead fade d3">
          <span class="drop">M</span>ost mid-market B2B companies don’t have a sales problem — they have a system problem. Revenue depends on a few strong performers, the founder’s involvement, and a good quarter, instead of on infrastructure that produces results on repeat. This book shows founders, CEOs, and revenue leaders how to treat revenue the way they already treat finance and operations: as an operating system that can be designed, measured, governed, and scaled.
        </p>

        <h2 class="section-label fade d4">What you’ll install</h2>
        <ul class="functions fade d4">
          <li><span class="fn">Target</span><span class="fd">Know exactly which accounts to pursue, and why.</span></li>
          <li><span class="fn">Engage</span><span class="fd">Open the right conversations, at the right level, on purpose.</span></li>
          <li><span class="fn">Close</span><span class="fd">Move deals forward with structure instead of hope.</span></li>
          <li><span class="fn">Govern</span><span class="fd">Run revenue on rituals, roles, and rhythm — not heroics.</span></li>
          <li><span class="fn">Scale</span><span class="fd">Repeat the engine across people and markets without breaking it.</span></li>
        </ul>

        <div class="who fade d4">
          <h3 class="section-label">Who it’s for</h3>
          <p>Written for <b>founders, CEOs, sales and revenue leaders, and business-unit heads</b> at mid-market B2B companies — roughly <b>$20M–$200M</b> in revenue — who are ready to stop improvising growth and start operating it. Equally useful for the consultants and advisors who build revenue systems for them.</p>
        </div>

        <h2 class="section-label fade d5">Three ideas at its core</h2>
        <div class="principles fade d5">
          <div class="principle"><span>01</span><p>Revenue must be <b>structural</b>, not personality-driven.</p></div>
          <div class="principle"><span>02</span><p>Traction must be <b>engineered</b>, not activity-driven.</p></div>
          <div class="principle"><span>03</span><p>Growth must be <b>governed</b>, not emotionally managed.</p></div>
        </div>

        <div class="author fade d5">
          <div class="author-badge"><img src="img/naveenn_profile_1920w.jpeg?w=85&q=85" alt="Naveenn Suri"></div>
          <div>
            <h3>About the author</h3>
            <p>Naveenn Suri is an entrepreneur and growth strategist with 28 years of experience building scalable businesses and leading revenue and digital transformation. He founded Cloudway Consulting — one of India’s leading SAP transformation firms — which was acquired by EY India, where he served as a Partner. Today he is the founder of SIRTIKA (Revenue Growth Architecture). Across nearly three decades advising founders, CEOs, and revenue leaders, he kept seeing the same pattern: organisations invest heavily in product, people, and marketing, yet almost none have a structured system for building revenue. This book is his answer.</p>
          </div>
        </div>
      </section>

    </div>
    </div>
  </main>
<?php include 'footer.php';?>

</body></html>
