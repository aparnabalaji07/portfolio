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
    <svg
      viewBox="-260 -260 520 520"
      className="absolute left-[-200px] top-1/2 -translate-y-1/2 w-[480px] h-[480px] md:left-[-140px] md:w-[620px] md:h-[620px] pointer-events-none"
      aria-hidden="true"
    >
      <path
        d={spiralPath}
        fill="none"
        strokeWidth="26"
        strokeLinecap="round"
        style={{ stroke: "var(--spiral)" }}
      />
    </svg>
  );
}
