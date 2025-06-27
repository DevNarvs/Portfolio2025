// components/ParticlesBackground.tsx
'use client'; // Only if using Next.js

import { useEffect } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { tsParticles } from '@tsparticles/engine';

const ParticlesBackground = () => {
  useEffect(() => {
    // Register slim preset globally
    loadSlim(tsParticles);
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: '#000000' },
        },
        particles: {
          number: { value: 60 },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: {
            value: { min: 0.1, max: 0.3 },
          },
          size: { value: { min: 1, max: 3 } },
          move: {
            enable: true,
            speed: 0.6,
            direction: 'none',
            random: true,
            outModes: { default: 'out' },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            resize: { enable: true },
          },
          modes: {
            repulse: { distance: 100 },
          },
        },
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
};

export default ParticlesBackground;
