
<!-- ══════════════ NAV ══════════════ -->
<nav id="nav">
  <div class="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-[66px]">
    <!--<a href="/" class="font-display font-black text-xl tracking-widest gold-text">SIRTIKA™</a>-->
    <a href="/" class="font-display font-black text-xl tracking-widest gold-text"><img src="img/sirtika-logo-100.png" alt="logo" style="height:55px;"></a>
    <ul class="hidden lg:flex items-center gap-8 text-sm font-medium text-nav">
      <li><a href="/#framework" class="hover:text-gold-300 transition-colors">Framework</a></li>
      <li><a href="/#programme" class="hover:text-gold-300 transition-colors">Programme</a></li>
      <li><a href="/#offerings" class="hover:text-gold-300 transition-colors">Offerings</a></li>
      <li><a href="ai-platform.php" class="hover:text-gold-300 transition-colors">AI Platform</a></li>
      <li><a href="about.php" class="hover:text-gold-300 transition-colors">About</a></li>
    </ul>
    <div class="hidden lg:flex items-center gap-3">
      <a href="https://calendly.com/naveenn-sirtika" target="_blank" class="btn-teal px-5 py-2.5 rounded-full text-sm">Book a Diagnostic Call</a>
    </div>
    <button id="hbg" class="lg:hidden text-gold-400 text-xl" onclick="toggleMob()"><i class="fas fa-bars"></i></button>
  </div>
  <div id="mob-menu" class="lg:hidden bg-dark-800/98 border-t border-maroon-700/20 px-6 py-5 space-y-4">
    <a href="/#framework" onclick="toggleMob()" class="block text-nav hover:text-gold-300 py-2 border-b border-white/5 text-sm">Framework</a>
    <a href="/#programme" onclick="toggleMob()" class="block text-nav hover:text-gold-300 py-2 border-b border-white/5 text-sm">Programme</a>
    <a href="/#offerings" onclick="toggleMob()" class="block text-nav hover:text-gold-300 py-2 border-b border-white/5 text-sm">Offerings</a>
    <a href="ai-platform.php" onclick="toggleMob()" class="block text-nav hover:text-gold-300 py-2 border-b border-white/5 text-sm">AI Platform</a>
    <a href="about.php" onclick="toggleMob()" class="block text-nav hover:text-gold-300 py-2 border-b border-white/5 text-sm">About</a>
    <a href="https://calendly.com/naveenn-sirtika" target="_blank" onclick="toggleMob()" class="btn-teal block px-5 py-3 rounded-full text-center text-sm mt-4">Book a Diagnostic Call</a>
  </div>
</nav>
