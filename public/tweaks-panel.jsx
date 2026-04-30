const TWEAKS_STORAGE_KEY = 'portfolio-tweaks';

const useTweaks = (defaults) => {
  const [tweaks, setTweaks] = React.useState(() => {
    try {
      const stored = localStorage.getItem(TWEAKS_STORAGE_KEY);
      return stored ? { ...defaults, ...JSON.parse(stored) } : defaults;
    } catch {
      return defaults;
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem(TWEAKS_STORAGE_KEY, JSON.stringify(tweaks));
    } catch {
      return;
    }
  }, [tweaks]);

  const setTweak = (key, value) => {
    setTweaks((current) => ({ ...current, [key]: value }));
  };

  return [tweaks, setTweak];
};

const panelShellStyle = {
  position: 'fixed',
  right: 20,
  bottom: 20,
  width: 320,
  maxWidth: 'calc(100vw - 32px)',
  padding: 16,
  borderRadius: 18,
  background: 'rgba(10, 10, 15, 0.92)',
  border: '1px solid rgba(255,255,255,0.12)',
  boxShadow: '0 24px 80px rgba(0,0,0,0.35)',
  backdropFilter: 'blur(18px)',
  color: '#e8e8f0',
  zIndex: 200,
};

const TweaksPanel = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ position: 'fixed', right: 20, bottom: 20, zIndex: 200 }}>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        style={{
          border: 'none',
          borderRadius: 999,
          padding: '12px 18px',
          background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
          color: '#fff',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: 0.4,
          cursor: 'pointer',
          boxShadow: '0 16px 48px rgba(6,182,212,0.3)',
        }}
      >
        {open ? 'Close Tweaks' : 'Open Tweaks'}
      </button>
      {open ? <div style={{ ...panelShellStyle, right: 0, bottom: 56 }}>{children}</div> : null}
    </div>
  );
};

const TweakSection = ({ label, children }) => (
  <section style={{ display: 'grid', gap: 12, marginTop: 14 }}>
    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#8888a8', textTransform: 'uppercase' }}>{label}</div>
    {children}
  </section>
);

const TweakRow = ({ label, children }) => (
  <label style={{ display: 'grid', gap: 8, fontSize: 13 }}>
    <span>{label}</span>
    {children}
  </label>
);

const TweakColor = ({ id, label, tweaks, setTweak }) => (
  <TweakRow label={label}>
    <input type="color" value={tweaks[id]} onChange={(event) => setTweak(id, event.target.value)} style={{ width: '100%', height: 42, border: 'none', background: 'transparent', cursor: 'pointer' }} />
  </TweakRow>
);

const TweakSlider = ({ id, label, min, max, step, tweaks, setTweak }) => (
  <TweakRow label={`${label}: ${tweaks[id]}`}>
    <input type="range" min={min} max={max} step={step} value={tweaks[id]} onChange={(event) => setTweak(id, Number(event.target.value))} />
  </TweakRow>
);

const TweakToggle = ({ id, label, tweaks, setTweak }) => (
  <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, fontSize: 13 }}>
    <span>{label}</span>
    <input type="checkbox" checked={Boolean(tweaks[id])} onChange={(event) => setTweak(id, event.target.checked)} />
  </label>
);
