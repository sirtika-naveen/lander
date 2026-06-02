
<!-- ══════════════ FOOTER ══════════════ -->
<footer class="pt-16 pb-8 border-t border-maroon-800/25" style="background:#050305">
  <div class="max-w-7xl mx-auto px-5 lg:px-8">
    <!-- Main footer grid -->
    <div class="grid md:grid-cols-3 gap-12 mb-14">
     
      <!-- SIRTIKA col -->
      <div>
        <p class="gold text-lg uppercase tracking-widest font-semibold mb-5">SIRTIKA</p>
        <ul class="space-y-3 text-lg">
          <li><a href="/#framework" class="text-gray-200 hover:text-gold-300 transition-colors">Framework</a></li>
          <li><a href="/#programme" class="text-gray-200 hover:text-gold-300 transition-colors">D-A-A-A Programme</a></li>
          <li><a href="ai-platform.php" class="text-gray-200 hover:text-gold-300 transition-colors">AI Platform</a></li>
          <li><a href="about.php" class="text-gray-200 hover:text-gold-300 transition-colors">About</a></li>
          <li><a href="contact.php" class="text-gray-200 hover:text-gold-300 transition-colors">Contact</a></li>
        </ul>
      </div>
      <!-- Engage col -->
      <div>
        <p class="gold text-lg uppercase tracking-widest font-semibold mb-5">Engage</p>
        <ul class="space-y-3 text-lg">
          <li><a href="/#offerings" class="text-gray-200 hover:text-gold-300 transition-colors">CRM Diagnosys</a></li>
          <li><a href="/#offerings" class="text-gray-200 hover:text-gold-300 transition-colors">SIRTIKA Diagnosys</a></li>
          <li><a href="/#offerings" class="text-gray-200 hover:text-gold-300 transition-colors">Premium Transformation</a></li>
          <li><a href="/#offerings" class="text-gray-200 hover:text-gold-300 transition-colors">Fractional CGO</a></li>
        </ul>
      </div>

      <!-- Legal col -->
      <div>
        <p class="gold text-lg uppercase tracking-widest font-semibold mb-5">Legal</p>
        <ul class="space-y-3 text-lg mb-8">
          <li><a href="privacy.php" class="text-gray-200 hover:text-gold-300 transition-colors">Privacy Policy</a></li>
          <li><a href="terms.php" class="text-gray-200 hover:text-gold-300 transition-colors">Terms & Disclaimer</a></li>
        </ul>
        
      </div>
    </div>

    <!-- Bottom line -->
    <div class="border-t border-gold-800/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p class="text-gray-200 text-sm">© 2026 SIRTIKA™ | Revenue Growth Architecture | Framework by Naveenn Suri</p>
      <p class="text-gray-200 text-sm">SIRTIKA™ is a trademark of Naveenn Suri</p>
    </div>
  </div>
</footer>
<div id="ck">
  <p class="text-gray-200 text-xs">This site uses cookies to improve experience.</p>
  <div class="flex gap-3">
    <button onclick="acceptCK()" class="btn-gold px-4 py-1.5 rounded-full text-xs font-bold">Accept</button>
    <a href="privacy.php" class="gold text-xs hover:underline self-center">Privacy Policy</a>
  </div>
</div>
<script>
window.addEventListener("scroll",function(){document.getElementById("nav").classList.toggle("s",window.scrollY>50)});
function toggleMob(){document.getElementById("mob-menu").classList.toggle("open")}
var obs=new IntersectionObserver(function(e){e.forEach(function(el){if(el.isIntersecting)el.target.classList.add("v")});},{threshold:.1});
document.querySelectorAll(".fu").forEach(function(el){obs.observe(el)});

function acceptCK(){document.getElementById("ck").style.display="none";localStorage.setItem("ck","1")}
if(localStorage.getItem("ck"))document.getElementById("ck").style.display="none";

</script>
