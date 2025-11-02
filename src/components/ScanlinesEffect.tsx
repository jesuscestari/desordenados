export default function ScanlinesEffect() {
  return (
    <>
      {/* Scanlines overlay */}
      <div className="scanlines-overlay" />

      {/* Subtle grid background */}
      <div className="grid-overlay" />

      <style jsx>{`
        .scanlines-overlay {
          pointer-events: none;
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to bottom,
            transparent 50%,
            rgba(255, 255, 255, 0.02) 50%
          );
          background-size: 100% 4px;
          animation: scanlines 8s linear infinite;
        }

        .grid-overlay {
          pointer-events: none;
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image:
            linear-gradient(rgba(93, 217, 232, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(93, 217, 232, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
        }

        @keyframes scanlines {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 100%;
          }
        }
      `}</style>
    </>
  );
}
