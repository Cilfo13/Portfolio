const TWEAK_DEFAULTS = {
  accentFrom: '#7c3aed',
  accentTo: '#06b6d4',
  bgBase: '#0a0a0f',
  nameSize: 88,
  showFloatingShapes: true,
};

function applyTweaks(tweaks) {
  const root = document.documentElement;
  root.style.setProperty('--violet', tweaks.accentFrom);
  root.style.setProperty('--cyan', tweaks.accentTo);
  root.style.setProperty('--grad', `linear-gradient(135deg, ${tweaks.accentFrom}, ${tweaks.accentTo})`);
  root.style.setProperty('--bg', tweaks.bgBase);

  const heroName = document.querySelector('.hero-name');
  if (heroName) {
    heroName.style.fontSize = `${tweaks.nameSize}px`;
  }

  document.querySelectorAll('[data-floating-shapes]').forEach((node) => {
    node.style.display = tweaks.showFloatingShapes ? '' : 'none';
  });
}

function initScrollReveal() {
  const elements = document.querySelectorAll('.fade-in-up');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((element) => observer.observe(element));
}

function initNavShadow() {
  const nav = document.querySelector('[data-nav]');
  if (!nav) {
    return;
  }

  const syncShadow = () => {
    nav.style.boxShadow = window.scrollY > 20 ? '0 2px 40px rgba(0,0,0,0.4)' : 'none';
  };

  syncShadow();
  window.addEventListener('scroll', syncShadow, { passive: true });
}

function initCurrentYear() {
  document.querySelectorAll('[data-current-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
}

function PortfolioTweaksApp() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    applyTweaks(tweaks);
  }, [tweaks]);

  return (
    <TweaksPanel>
      <TweakSection label="Palette">
        <TweakColor id="accentFrom" label="Accent From (Violet)" tweaks={tweaks} setTweak={setTweak} />
        <TweakColor id="accentTo" label="Accent To (Cyan)" tweaks={tweaks} setTweak={setTweak} />
        <TweakColor id="bgBase" label="Background Base" tweaks={tweaks} setTweak={setTweak} />
      </TweakSection>
      <TweakSection label="Hero">
        <TweakSlider id="nameSize" label="Name Font Size" min={48} max={120} step={2} tweaks={tweaks} setTweak={setTweak} />
        <TweakToggle id="showFloatingShapes" label="Floating Shapes" tweaks={tweaks} setTweak={setTweak} />
      </TweakSection>
    </TweaksPanel>
  );
}

window.addEventListener('DOMContentLoaded', () => {
  applyTweaks(TWEAK_DEFAULTS);
  initScrollReveal();
  initNavShadow();
  initCurrentYear();

  const tweaksRoot = document.getElementById('tweaks-root');
  if (tweaksRoot) {
    ReactDOM.createRoot(tweaksRoot).render(<PortfolioTweaksApp />);
  }
});
