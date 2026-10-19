import React from 'react';

/**
 * Ambient floating elements:
 * - Floating golden fireflies / small glowing light embers with warm pulsation
 * - Small golden butterflies fluttering and flying across the scene
 */
export const AmbientFlyingParticles: React.FC = () => {
  // Firefly lights configuration
  const lights = [
    { id: 1, left: '15%', top: '65%', size: 5, delay: '0s', duration: '6s' },
    { id: 2, left: '28%', top: '45%', size: 4, delay: '1.2s', duration: '7s' },
    { id: 3, left: '38%', top: '75%', size: 6, delay: '2.5s', duration: '5.5s' },
    { id: 4, left: '62%', top: '35%', size: 5, delay: '0.8s', duration: '6.5s' },
    { id: 5, left: '72%', top: '60%', size: 4, delay: '3.1s', duration: '8s' },
    { id: 6, left: '82%', top: '48%', size: 6, delay: '1.7s', duration: '6.2s' },
    { id: 7, left: '22%', top: '25%', size: 4, delay: '4s', duration: '7.5s' },
    { id: 8, left: '50%', top: '80%', size: 5, delay: '2.2s', duration: '6.8s' },
    { id: 9, left: '78%', top: '22%', size: 5, delay: '1.5s', duration: '5.8s' },
    { id: 10, left: '42%', top: '55%', size: 4, delay: '3.6s', duration: '7.2s' },
    { id: 11, left: '88%', top: '70%', size: 6, delay: '0.4s', duration: '6s' },
    { id: 12, left: '10%', top: '38%', size: 4, delay: '2.9s', duration: '7.8s' }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-15">
      {/* 1. Floating Golden Fireflies / Light Embers */}
      {lights.map((light) => (
        <div
          key={light.id}
          className="absolute rounded-full animate-firefly pointer-events-none"
          style={{
            left: light.left,
            top: light.top,
            width: `${light.size}px`,
            height: `${light.size}px`,
            backgroundColor: '#fbefc0',
            boxShadow: `0 0 ${light.size * 2.5}px rgba(251, 239, 192, 0.9), 0 0 ${light.size * 4}px rgba(217, 177, 90, 0.6)`,
            animationDelay: light.delay,
            animationDuration: light.duration
          }}
        />
      ))}

      {/* 2. Flying Butterfly 1: Drifts across diagonally from lower-left to upper-center */}
      <div
        className="absolute pointer-events-none animate-butterfly-fly-1"
        style={{ left: '12%', top: '58%' }}
      >
        <div className="animate-wing-flutter">
          <svg viewBox="0 0 100 80" className="w-6 sm:w-7 h-6 sm:h-7 filter drop-shadow-[0_0_8px_rgba(251,239,192,0.85)]">
            <g transform="translate(100 0) scale(-1 1)">
              <path d="M51 38 C58 14 82 1 94 10 C103 18 92 33 75 39 C66 42 57 41 51 40 Z" fill="#fbefc0" fillOpacity="0.95" />
              <path d="M51 42 C62 44 80 50 81 62 C82 74 66 76 59 66 C54 59 51 51 51 42 Z" fill="#d9b15a" fillOpacity="0.8" />
            </g>
            <g>
              <path d="M51 38 C58 14 82 1 94 10 C103 18 92 33 75 39 C66 42 57 41 51 40 Z" fill="#fbefc0" fillOpacity="0.95" />
              <path d="M51 42 C62 44 80 50 81 62 C82 74 66 76 59 66 C54 59 51 51 51 42 Z" fill="#d9b15a" fillOpacity="0.8" />
            </g>
            <ellipse cx="50" cy="44" rx="2" ry="10" fill="#9c7124" />
          </svg>
        </div>
      </div>

      {/* 3. Flying Butterfly 2: Glides playfully on the right side around the bride */}
      <div
        className="absolute pointer-events-none animate-butterfly-fly-2"
        style={{ right: '16%', top: '42%' }}
      >
        <div className="animate-wing-flutter" style={{ animationDelay: '0.15s' }}>
          <svg viewBox="0 0 100 80" className="w-5 sm:w-6 h-5 sm:h-6 filter drop-shadow-[0_0_6px_rgba(251,239,192,0.9)]">
            <g transform="translate(100 0) scale(-1 1)">
              <path d="M51 38 C58 14 82 1 94 10 C103 18 92 33 75 39 C66 42 57 41 51 40 Z" fill="#fbefc0" fillOpacity="0.9" />
              <path d="M51 42 C62 44 80 50 81 62 C82 74 66 76 59 66 C54 59 51 51 51 42 Z" fill="#d9b15a" fillOpacity="0.8" />
            </g>
            <g>
              <path d="M51 38 C58 14 82 1 94 10 C103 18 92 33 75 39 C66 42 57 41 51 40 Z" fill="#fbefc0" fillOpacity="0.9" />
              <path d="M51 42 C62 44 80 50 81 62 C82 74 66 76 59 66 C54 59 51 51 51 42 Z" fill="#d9b15a" fillOpacity="0.8" />
            </g>
            <ellipse cx="50" cy="44" rx="1.8" ry="9" fill="#9c7124" />
          </svg>
        </div>
      </div>

      {/* 4. Flying Butterfly 3: Higher drifting butterfly */}
      <div
        className="absolute pointer-events-none animate-butterfly-fly-3"
        style={{ left: '68%', top: '20%' }}
      >
        <div className="animate-wing-flutter" style={{ animationDelay: '0.3s' }}>
          <svg viewBox="0 0 100 80" className="w-4 sm:w-5 h-4 sm:h-5 filter drop-shadow-[0_0_6px_rgba(251,239,192,0.8)]">
            <g transform="translate(100 0) scale(-1 1)">
              <path d="M51 38 C58 14 82 1 94 10 C103 18 92 33 75 39 C66 42 57 41 51 40 Z" fill="#fbefc0" fillOpacity="0.9" />
              <path d="M51 42 C62 44 80 50 81 62 C82 74 66 76 59 66 C54 59 51 51 51 42 Z" fill="#d9b15a" fillOpacity="0.8" />
            </g>
            <g>
              <path d="M51 38 C58 14 82 1 94 10 C103 18 92 33 75 39 C66 42 57 41 51 40 Z" fill="#fbefc0" fillOpacity="0.9" />
              <path d="M51 42 C62 44 80 50 81 62 C82 74 66 76 59 66 C54 59 51 51 51 42 Z" fill="#d9b15a" fillOpacity="0.8" />
            </g>
            <ellipse cx="50" cy="44" rx="1.6" ry="8" fill="#9c7124" />
          </svg>
        </div>
      </div>
    </div>
  );
};
