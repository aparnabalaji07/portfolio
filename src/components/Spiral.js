const TURNS = 4.2;
const SPACING = 8;
const STEPS = 220;

function buildSpiralPath() {
  let d = "";
  for (let i = 0; i <= STEPS; i++) {
    const theta = (i / STEPS) * TURNS * Math.PI * 2;
    const r = SPACING * theta;
    const x = r * Math.cos(theta);
    const y = r * Math.sin(theta);
    d += `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)} `;
  }
  return d;
}

const spiralPath = buildSpiralPath();

export default function Spiral() {
  return (
    <div
      className="absolute inset-0 top-20 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <svg
        viewBox="-260 -260 520 520"
        className="absolute -right-160 top-1/2 -translate-y-1/2 w-350 h-350 md:-right-120 md:w-500 md:h-500"
      >
        <path
          d={spiralPath}
          fill="none"
          strokeWidth="26"
          strokeLinecap="round"
          style={{ stroke: "var(--spiral)", opacity: 0.5 }}
        />
      </svg>
    </div>
  );
}
