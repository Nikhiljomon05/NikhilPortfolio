// Custom illustrations used as project thumbnails.
// Swap in a real screenshot by adding `image` to a project in src/data/content.js.

function StillGoodArt({ className }) {
  return (
    <svg
      viewBox="0 0 640 400"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label="Illustration of a plate of food with a discount tag"
    >
      <defs>
        <radialGradient id="sg-glow" cx="62%" cy="52%" r="60%">
          <stop offset="0" stopColor="#B51220" stopOpacity="0.6" />
          <stop offset="1" stopColor="#0c0808" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sg-plate" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#201416" />
          <stop offset="1" stopColor="#0a0707" />
        </linearGradient>
      </defs>

      <rect width="640" height="400" fill="#0c0808" />
      <rect width="640" height="400" fill="url(#sg-glow)" />

      {/* plate */}
      <g transform="translate(400 215)">
        <circle r="150" fill="url(#sg-plate)" stroke="#B51220" strokeOpacity="0.8" strokeWidth="1.5" />
        <circle r="116" fill="none" stroke="#fff" strokeOpacity="0.12" />
        <circle r="84" fill="none" stroke="#B51220" strokeOpacity="0.55" strokeDasharray="3 8" />
        {/* leaf */}
        <path d="M-46 22C-50-38 6-66 56-54 56 0 10 40-46 22Z" fill="#B51220" fillOpacity="0.9" />
        <path d="M-46 22C-14-4 18-28 56-54" fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round" />
        {/* small round garnishes */}
        <circle cx="-62" cy="48" r="13" fill="#fff" fillOpacity="0.9" />
        <circle cx="-30" cy="62" r="8" fill="#E5384A" />
        <circle cx="38" cy="56" r="10" fill="#fff" fillOpacity="0.35" />
      </g>

      {/* fork */}
      <g stroke="#fff" strokeOpacity="0.7" strokeWidth="3" strokeLinecap="round" fill="none" transform="translate(198 150)">
        <path d="M0 0v34M12 0v34M24 0v34M0 34q12 16 24 0M12 50v130" />
      </g>
      {/* knife */}
      <g transform="translate(614 150)" fill="none" stroke="#fff" strokeOpacity="0.7" strokeWidth="3" strokeLinecap="round">
        <path d="M0 0c-14 20-14 56 0 80M0 80v100" />
      </g>

      {/* price tag */}
      <g transform="translate(430 60) rotate(12)">
        <path d="M0 0h96a10 10 0 0 1 10 10v74l-58 34-58-34V10A10 10 0 0 1 0 0Z" fill="#E5384A" />
        <circle cx="48" cy="20" r="6" fill="#0c0808" />
        <text
          x="53"
          y="84"
          textAnchor="middle"
          fontFamily="Anton, Impact, sans-serif"
          fontSize="52"
          fill="#fff"
        >
          %
        </text>
      </g>

      <text x="36" y="360" fontFamily="Anton, Impact, sans-serif" fontSize="54" fill="#fff" letterSpacing="2">
        STILLGOOD
      </text>
      <rect x="36" y="372" width="64" height="3" fill="#E5384A" />
    </svg>
  )
}

function GenericArt({ className }) {
  return (
    <svg
      viewBox="0 0 640 400"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label="Abstract code brackets illustration"
    >
      <defs>
        <radialGradient id="gen-glow" cx="50%" cy="50%" r="60%">
          <stop offset="0" stopColor="#B51220" stopOpacity="0.55" />
          <stop offset="1" stopColor="#0c0808" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="640" height="400" fill="#0c0808" />
      <rect width="640" height="400" fill="url(#gen-glow)" />
      <g fill="none" stroke="#fff" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round">
        <path d="M250 130 170 200l80 70" strokeOpacity="0.9" />
        <path d="M390 130l80 70-80 70" strokeOpacity="0.9" />
      </g>
      <path d="M345 110 295 290" stroke="#E5384A" strokeWidth="14" strokeLinecap="round" />
    </svg>
  )
}

const ART = { stillgood: StillGoodArt, generic: GenericArt }

export default function ProjectArt({ name = 'generic', className = '' }) {
  const Art = ART[name] ?? GenericArt
  return <Art className={className} />
}
