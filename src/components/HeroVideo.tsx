import React, { useEffect, useRef, useState } from 'react';

interface HeroVideoProps {
  onVideoStateChange?: (isPlaying: boolean) => void;
}

export const VIDEO_SCENES = [
  {
    id: 'gmp-inspector',
    name: 'Inspectora GMP con Tablet & Cofia',
    url: '/assets/hero-gmp-inspector.mp4',
    poster: '/assets/hero-gmp-poster.jpg',
    description: 'Inspectora en filipina blanca con cofia, guantes y tablet verificando estándares BPM en cocina industrial',
  },
];

export const HeroVideo: React.FC<HeroVideoProps> = ({ onVideoStateChange }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [, setIsPlaying] = useState<boolean>(true);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const currentScene = VIDEO_SCENES[0];

  // 1. Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
      if (e.matches && videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    mediaQuery.addEventListener('change', handleMotionChange);
    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  // 2. IntersectionObserver to pause when out of viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!videoRef.current) return;

          if (entry.isIntersecting) {
            if (!reducedMotion) {
              const playPromise = videoRef.current.play();
              if (playPromise !== undefined) {
                playPromise
                  .then(() => {
                    setIsPlaying(true);
                    onVideoStateChange?.(true);
                  })
                  .catch(() => {
                    setIsPlaying(false);
                    onVideoStateChange?.(false);
                  });
              }
            }
          } else {
            videoRef.current.pause();
            setIsPlaying(false);
            onVideoStateChange?.(false);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [reducedMotion, onVideoStateChange]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Background Poster */}
      <img
        src={currentScene.poster}
        alt="Inspectora en cocina industrial verificando inocuidad y estándares"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded && !reducedMotion ? 'opacity-30' : 'opacity-100'
        }`}
        loading="eager"
      />

      {/* Main Video Element */}
      {!reducedMotion ? (
        <video
          ref={videoRef}
          key={currentScene.url}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          muted
          loop
          playsInline
          poster={currentScene.poster}
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src={currentScene.url} type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${currentScene.poster})` }}
        />
      )}

      {/* GRADIENT OVERLAY */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(10, 37, 64, 0.20) 0%, rgba(10, 37, 64, 0.44) 38%, rgba(10, 37, 64, 0.78) 75%, rgba(10, 37, 64, 0.94) 100%)',
        }}
      />

      {/* Subtle radial vignette for depth */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, rgba(10, 37, 64, 0.8) 100%)',
        }}
      />
    </div>
  );
};
