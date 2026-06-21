export function DantaLogo({ size = 80, className = "" }: { size?: number; className?: string }) {
  const h = Math.round(size * 1.2);
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Arc paths for curved text */}
        <path id="dl-top" d="M 24,82 A 82,105 0 0,1 176,82" />
        <path id="dl-bot" d="M 15,158 A 90,112 0 0,0 185,158" />
      </defs>

      {/* Warm inner fill */}
      <ellipse cx="100" cy="120" rx="89" ry="109" fill="#fdf5eb" opacity="0.6" />

      {/* Outer oval border */}
      <ellipse cx="100" cy="120" rx="93" ry="113" stroke="#c4975a" strokeWidth="2.4" fill="none" />
      {/* Inner oval border (thinner) */}
      <ellipse cx="100" cy="120" rx="85" ry="104" stroke="#c4975a" strokeWidth="0.9" fill="none" opacity="0.65" />

      {/* Side accent dots */}
      <circle cx="6.5" cy="120" r="3.5" fill="#7c2d3e" />
      <circle cx="193.5" cy="120" r="3.5" fill="#7c2d3e" />

      {/* DANTA — curved top text */}
      <text
        fontSize="19"
        fontWeight="700"
        letterSpacing="7"
        fill="#c4975a"
        fontFamily="Georgia, 'Times New Roman', serif"
      >
        <textPath href="#dl-top" startOffset="50%" textAnchor="middle">
          DANTA
        </textPath>
      </text>

      {/* THE DENTAL COMPANY — curved bottom text */}
      <text
        fontSize="9.5"
        fontWeight="500"
        letterSpacing="2.8"
        fill="#c4975a"
        fontFamily="Georgia, 'Times New Roman', serif"
      >
        <textPath href="#dl-bot" startOffset="50%" textAnchor="middle">
          THE DENTAL COMPANY
        </textPath>
      </text>

      {/* ─── Large "D" letterform ─── */}
      {/* Vertical stem */}
      <rect x="64" y="64" width="10" height="113" rx="2" fill="#c4975a" />
      {/* Top serif */}
      <rect x="56" y="64" width="26" height="7" rx="2" fill="#c4975a" />
      {/* Bottom serif */}
      <rect x="56" y="170" width="26" height="7" rx="2" fill="#c4975a" />
      {/* D bow (thick curved stroke) */}
      <path
        d="M 74,71 C 112,71 146,86 148,120 C 150,154 114,170 74,170"
        stroke="#c4975a"
        strokeWidth="10"
        fill="none"
        strokeLinecap="butt"
      />

      {/* ─── Large outer tooth silhouette ─── */}
      <path
        d="
          M 75,68
          C 82,62 93,59 103,62
          C 113,65 122,74 128,88
          C 134,103 134,122 130,139
          C 127,152 121,164 113,169
          C 109,172 106,169 105,164
          C 104,159 102,156 100,156
          C 98,156 96,159 95,164
          C 94,169 91,172 87,169
          C 79,164 73,152 70,139
          C 66,122 66,103 72,88
          C 76,76 75,68 75,68 Z
        "
        stroke="#b5a090"
        strokeWidth="1.6"
        fill="none"
        opacity="0.55"
      />

      {/* ─── Small inner tooth (burgundy) ─── */}
      <path
        d="
          M 89,94
          C 93,90 106,90 110,94
          C 114,98 116,108 115,118
          C 114,127 111,137 108,142
          C 106,147 104,149 101.5,149
          C 100.5,149 100,147 99.5,143
          C 99,139 98,136 97,136
          C 96,136 95,139 94.5,143
          C 94,147 93.5,149 92.5,149
          C 90,149 88,147 86,142
          C 83,137 80,127 79,118
          C 78,108 80,98 89,94 Z
        "
        fill="#7c2d3e"
        opacity="0.9"
      />

      {/* ─── Stethoscope ─── */}
      {/* Left ear tip */}
      <line x1="79" y1="68" x2="73" y2="53" stroke="#2e2826" strokeWidth="2.6" strokeLinecap="round" />
      {/* Right ear tip */}
      <line x1="97" y1="66" x2="99" y2="51" stroke="#2e2826" strokeWidth="2.6" strokeLinecap="round" />
      {/* Headband connecting arc */}
      <path d="M 73,53 Q 85,46 99,51" stroke="#2e2826" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      {/* Main tubing: curves around and ends at chest piece */}
      <path
        d="M 79,68 C 68,72 62,88 64,108 C 66,126 74,142 83,154 C 92,164 104,169 116,166 C 128,163 137,154 139,143 C 141,134 137,125 131,121"
        stroke="#2e2826"
        strokeWidth="2.6"
        fill="none"
        strokeLinecap="round"
      />
      {/* Chest piece ring */}
      <circle cx="130" cy="118" r="7.5" stroke="#2e2826" strokeWidth="2.2" fill="none" />
      {/* Chest piece centre dot */}
      <circle cx="130" cy="118" r="2.8" fill="#2e2826" />

      {/* Subtle vertical divider (dashed) */}
      <line
        x1="100"
        y1="66"
        x2="100"
        y2="170"
        stroke="#c4975a"
        strokeWidth="0.7"
        opacity="0.22"
        strokeDasharray="3 5"
      />
    </svg>
  );
}
