import React from 'react';

interface MandalaPatternProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  petals?: number;
}

export default function MandalaPattern({
  size = 200,
  className = '',
  style,
  petals = 8,
}: MandalaPatternProps) {
  const cx = 100;
  const cy = 100;
  const outerR = 90;
  const midR = 68;
  const innerR = 44;
  const coreR = 18;

  const petalAngles = Array.from({ length: petals }, (_, i) => (360 / petals) * i);
  const midDotAngles = Array.from({ length: petals * 2 }, (_, i) => (360 / (petals * 2)) * i);

  function polarToCartesian(r: number, angleDeg: number) {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`mandala ${className}`}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      {/* Concentric circles */}
      <circle cx={cx} cy={cy} r={outerR} fill="none" stroke="currentColor" strokeWidth="0.8" />
      <circle cx={cx} cy={cy} r={midR}   fill="none" stroke="currentColor" strokeWidth="0.5" />
      <circle cx={cx} cy={cy} r={innerR} fill="none" stroke="currentColor" strokeWidth="0.5" />
      <circle cx={cx} cy={cy} r={coreR}  fill="none" stroke="currentColor" strokeWidth="0.8" />

      {/* Petals (ellipses rotated around centre) */}
      {petalAngles.map((angle) => (
        <ellipse
          key={`petal-${angle}`}
          cx={cx}
          cy={cy - (outerR + coreR) / 2}
          rx={9}
          ry={(outerR - coreR) / 2}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          transform={`rotate(${angle} ${cx} ${cy})`}
        />
      ))}

      {/* Radial lines from core to outer */}
      {petalAngles.map((angle) => {
        const p1 = polarToCartesian(coreR, angle);
        const p2 = polarToCartesian(outerR, angle);
        return (
          <line
            key={`line-${angle}`}
            x1={p1.x}
            y1={p1.y}
            x2={p2.x}
            y2={p2.y}
            stroke="currentColor"
            strokeWidth="0.4"
            opacity="0.7"
          />
        );
      })}

      {/* Dots on mid ring */}
      {midDotAngles.map((angle) => {
        const p = polarToCartesian(midR, angle);
        return <circle key={`mdot-${angle}`} cx={p.x} cy={p.y} r="1.5" fill="currentColor" />;
      })}

      {/* Dots on inner ring */}
      {petalAngles.map((angle) => {
        const p = polarToCartesian(innerR, angle);
        return <circle key={`idot-${angle}`} cx={p.x} cy={p.y} r="2.2" fill="currentColor" />;
      })}

      {/* Half-way decorative circles on outer ring */}
      {petalAngles.map((angle) => {
        const p = polarToCartesian(outerR, angle);
        return (
          <circle key={`odot-${angle}`} cx={p.x} cy={p.y} r="3" fill="none" stroke="currentColor" strokeWidth="0.6" />
        );
      })}

      {/* Centre dot */}
      <circle cx={cx} cy={cy} r="3.5" fill="currentColor" />
    </svg>
  );
}
