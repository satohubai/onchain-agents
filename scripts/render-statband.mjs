// Daily-refreshed hexagon stat band (the Sato "big mono numbers in hexagons"
// look), written as statband-dark.svg / statband-light.svg on every render.
// Pure string-template SVG, no deps. MIT © Prime Signal LLC.

const THEMES = {
  dark: {
    bg: "none",
    ink: "#f4f7fa",
    sub: "#8fa3b5",
    hexes: ["#34d399", "#a78bfa", "#38bdf8", "#f59e0b"],
    stroke2: "#1c2733",
  },
  light: {
    bg: "none",
    ink: "#0b1118",
    sub: "#5b6f80",
    hexes: ["#059669", "#7c3aed", "#0284c7", "#d97706"],
    stroke2: "#d7e0e8",
  },
};

function hexPath(cx, cy, r) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 180) * (60 * i - 90);
    pts.push(`${(cx + r * Math.sin(a)).toFixed(1)} ${(cy - r * Math.cos(a)).toFixed(1)}`);
  }
  return `M${pts.join(" L")} Z`;
}

export function renderStatBand({ entries, scored, verified, chains, checked, date, variant = "dark" }) {
  const t = THEMES[variant] || THEMES.dark;
  // Coverage-first band (export.aggregates present): resources · chains ·
  // scored · independently checked. Falls back to the legacy entries/scored/
  // verified/updated band when the feed has no aggregates block yet.
  const useAggregates = chains != null && checked != null;
  const stats = useAggregates
    ? [
        { n: Number(entries) || 0, label: "RESOURCES" },
        { n: Number(chains) || 0, label: "CHAINS" },
        { n: Number(scored) || 0, label: "SCORED" },
        { n: Number(checked) || 0, label: "CHECKED ✓" },
      ]
    : [
        { n: Number(entries) || 0, label: "ENTRIES" },
        { n: Number(scored) || 0, label: "SCORED" },
        { n: Number(verified) || 0, label: "✓ INSTALLS" },
        { n: String(date || "").slice(5) || "—", label: "UPDATED", small: true },
      ];
  const W = 1520;
  const H = 260;
  const cellW = W / stats.length;
  const cells = stats
    .map((s, i) => {
      const cx = cellW * i + cellW / 2;
      const cy = 118;
      const color = t.hexes[i % t.hexes.length];
      const value = s.small ? s.n : String(s.n);
      const fs = s.small ? 44 : 64;
      return `
  <g>
    <path d="${hexPath(cx, cy, 92)}" fill="none" stroke="${color}" stroke-width="5"/>
    <path d="${hexPath(cx, cy, 74)}" fill="none" stroke="${t.stroke2}" stroke-width="2"/>
    <text x="${cx}" y="${cy + fs / 3}" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="${fs}" font-weight="700" fill="${color}">${value}</text>
    <text x="${cx}" y="${cy + 128}" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="22" letter-spacing="4" fill="${t.sub}">${s.label}</text>
  </g>`;
    })
    .join("\n");

  const ariaLabel = useAggregates
    ? `${entries} resources, ${chains} chains, ${scored} scored, ${checked} independently checked`
    : `${entries} entries, ${scored} scored, ${verified} verified installs, updated ${date}`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${ariaLabel}">
${cells}
</svg>
`;
}
