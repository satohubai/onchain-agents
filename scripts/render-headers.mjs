// Section header banners — faithful to the satohub.ai design system:
// near-black panel (ink-900 → base black), the site's .kicker (mono 11px-equiv,
// uppercase, 0.28em tracking, signal green) ABOVE a white font-display title,
// the exact HexBadge hexagon (24u path, fillOpacity .16, glow drop-shadow),
// soft radial accent glows, hairline #222a3a. DARK ONLY — the brand never
// sits on a light background; on GitHub light mode the banner reads as a
// dark card, exactly like the site's screenshots do.
// Pure string-template SVG, no deps. MIT © Prime Signal LLC.

// Exact tokens from tailwind.config.ts / globals.css — never invent colors.
const INK = {
  base0: "#07090e", // base black (body)
  base1: "#0c0f16", // ink-900 panel
  hairline: "#222a3a", // ink-700
  sub: "#939cae", // ink-400
  body: "#bac2d1", // ink-300
  white: "#ffffff",
};

export const ACCENTS = {
  signal: "#34d399",
  cyan: "#22d3ee",
  violet: "#a78bfa",
  blue: "#60a5fa",
  warn: "#fbbf24",
};

// The exact HexBadge path (24u, pointy-top) scaled by transform.
const HEX24 = "M12 2 L20.66 7 L20.66 17 L12 22 L3.34 17 L3.34 7 Z";

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function renderHeader({ title, kicker, glyph = "⬡", accent = "signal" }) {
  const a = ACCENTS[accent] || ACCENTS.signal;
  if (kicker && kicker.length > 52) kicker = kicker.slice(0, 52).replace(/\s+\S*$/, "") + "…";
  const W = 1520, H = 168;
  const uid = Math.abs([...`${title}${accent}`].reduce((h, c) => (h * 31 + c.charCodeAt(0)) | 0, 7)).toString(36);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(title)}">
  <defs>
    <linearGradient id="bg-${uid}" x1="0" y1="0" x2="0" y2="1">
      <stop stop-color="${INK.base1}"/><stop offset="1" stop-color="${INK.base0}"/>
    </linearGradient>
    <filter id="soft-${uid}" x="-80%" y="-80%" width="260%" height="260%">
      <feGaussianBlur stdDeviation="42"/>
    </filter>
    <filter id="glow-${uid}" x="-60%" y="-60%" width="220%" height="220%">
      <feDropShadow dx="0" dy="0" stdDeviation="7" flood-color="${a}" flood-opacity="0.5"/>
    </filter>
    <clipPath id="clip-${uid}"><rect width="${W}" height="${H}" rx="20"/></clipPath>
    <pattern id="grid-${uid}" width="44" height="44" patternUnits="userSpaceOnUse">
      <path d="M44 0 H0 V44" fill="none" stroke="rgba(148,160,180,0.05)" stroke-width="1"/>
    </pattern>
  </defs>
  <g clip-path="url(#clip-${uid})">
    <rect width="${W}" height="${H}" fill="url(#bg-${uid})"/>
    <rect width="${W}" height="${H}" fill="url(#grid-${uid})"/>
    <!-- soft radial glows (the site's blurred backdrop) -->
    <circle cx="180" cy="${H / 2}" r="120" fill="${a}" opacity="0.16" filter="url(#soft-${uid})"/>
    <circle cx="${W - 260}" cy="${H + 30}" r="110" fill="${ACCENTS.violet}" opacity="0.07" filter="url(#soft-${uid})"/>
    <circle cx="${W * 0.62}" cy="-30" r="100" fill="${ACCENTS.blue}" opacity="0.06" filter="url(#soft-${uid})"/>
    <!-- faint hex ghosts, right field -->
    <g transform="translate(${W - 218},${H / 2 - 66}) scale(5.5)" opacity="0.5">
      <path d="${HEX24}" fill="none" stroke="${INK.hairline}" stroke-width="0.5" stroke-linejoin="round"/>
    </g>
    <g transform="translate(${W - 330},${H / 2 + 6}) scale(3.4)" opacity="0.35">
      <path d="${HEX24}" fill="none" stroke="${INK.hairline}" stroke-width="0.6" stroke-linejoin="round"/>
    </g>
  </g>
  <rect width="${W}" height="${H}" rx="20" fill="none" stroke="${INK.hairline}" stroke-width="2"/>
  <!-- HexBadge emblem (exact geometry: fill .16 + stroke 1.5 + glow) -->
  <g transform="translate(52,${H / 2 - 52}) scale(4.333)" filter="url(#glow-${uid})">
    <path d="${HEX24}" fill="${a}" fill-opacity="0.16" stroke="${a}" stroke-width="1.5" stroke-linejoin="round"/>
  </g>
  <text x="104" y="${H / 2 + 15}" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="42" font-weight="700" fill="${a}">${esc(glyph)}</text>
  <!-- kicker over title, the site pattern -->
  ${kicker ? `<text x="176" y="66" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="18" letter-spacing="5" fill="${a}" fill-opacity="0.9">${esc(kicker.toUpperCase())}</text>` : ""}
  <text x="174" y="${kicker ? 118 : H / 2 + 16}" font-family="'Space Grotesk', ui-sans-serif, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="46" font-weight="800" letter-spacing="-0.5" fill="${INK.white}">${esc(title)}</text>
</svg>
`;
}
