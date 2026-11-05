import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, X, Volume2, VolumeX, Flame } from 'lucide-react';

const DiwaliPopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const canvasRef = useRef(null);
  const audioCtxRef = useRef(null);

  // Initialize Web Audio Context for firecracker sound effects
  const playCrackerSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Explosion crackle sound synthesizer
      const bufferSize = ctx.sampleRate * 0.4;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.08));
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1000, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.35);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.6, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.38);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start();
    } catch {
      // Audio playback fails gracefully if blocked
    }
  };

  // Firecracker Particle System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const setCanvasSize = () => {
      canvas.width = Math.min(window.innerWidth, 650);
      canvas.height = Math.min(window.innerHeight, 700);
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const particles = [];
    const rockets = [];

    const colors = [
      '#FFD700', // Gold
      '#FF4500', // OrangeRed
      '#FF1493', // DeepPink
      '#00FF7F', // SpringGreen
      '#00FFFF', // Cyan
      '#FF8C00', // DarkOrange
      '#FFF8DC', // Cornsilk (sparkle)
      '#BA55D3', // MediumOrchid
      '#FF3366', // Bright Crimson
      '#FFE066', // Warm Yellow
    ];

    class Rocket {
      constructor(targetX, targetY) {
        this.x = canvas.width * (0.65 + Math.random() * 0.3);
        this.y = canvas.height;
        this.targetX = targetX || (canvas.width * (0.2 + Math.random() * 0.7));
        this.targetY = targetY || (canvas.height * (0.15 + Math.random() * 0.45));
        const angle = Math.atan2(this.targetY - this.y, this.targetX - this.x);
        const speed = 12 + Math.random() * 4;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alive = true;
        this.trail = [];
      }

      update() {
        this.trail.push({ x: this.x, y: this.y, alpha: 1 });
        if (this.trail.length > 6) this.trail.shift();

        this.x += this.vx;
        this.y += this.vy;

        // Check if reached destination
        if (this.vy < 0 && this.y <= this.targetY) {
          this.alive = false;
          explode(this.x, this.y, this.color);
        }
      }

      draw() {
        ctx.save();
        this.trail.forEach((p, idx) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, (idx / this.trail.length) * 2.5 + 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 200, 50, ${p.alpha * 0.7})`;
          ctx.fill();
        });

        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
      }
    }

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 6.5 + 1.5;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.gravity = 0.09;
        this.friction = 0.96;
        this.alpha = 1;
        this.decay = Math.random() * 0.02 + 0.015;
        this.size = Math.random() * 3.5 + 1.5;
        this.flicker = Math.random() > 0.4;
      }

      update() {
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = this.flicker ? 16 : 8;
        ctx.fill();
        ctx.restore();
      }
    }

    const explode = (x, y, baseColor) => {
      playCrackerSound();
      const count = 75 + Math.floor(Math.random() * 45);
      const blastColor = baseColor || colors[Math.floor(Math.random() * colors.length)];
      for (let i = 0; i < count; i++) {
        // Multi-color spark bursts
        const particleColor = Math.random() > 0.3 ? blastColor : colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, y, particleColor));
      }
    };

    // Public trigger function attached to window for click triggers
    window.triggerDiwaliBlast = (x, y) => {
      const targetX = x !== undefined ? x : canvas.width * (0.3 + Math.random() * 0.5);
      const targetY = y !== undefined ? y : canvas.height * (0.2 + Math.random() * 0.4);
      rockets.push(new Rocket(targetX, targetY));
    };

    // Auto-launch rockets periodically
    let lastLaunchTime = Date.now();
    let launchInterval = 1600;

    // Initial blast burst on load
    setTimeout(() => {
      window.triggerDiwaliBlast();
      setTimeout(() => window.triggerDiwaliBlast(), 350);
      setTimeout(() => window.triggerDiwaliBlast(), 700);
    }, 600);

    const animate = () => {
      // Clear with soft fade to give fireworks glowing motion trail
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();
      if (now - lastLaunchTime > launchInterval) {
        window.triggerDiwaliBlast();
        lastLaunchTime = now;
        launchInterval = 1400 + Math.random() * 1200;
      }

      // Update & draw rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.update();
        r.draw();
        if (!r.alive) {
          rockets.splice(i, 1);
        }
      }

      // Update & draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw();
        if (p.alpha <= 0) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasSize);
      delete window.triggerDiwaliBlast;
    };
  }, [soundEnabled]);

  const handleManualBlast = () => {
    if (window.triggerDiwaliBlast) {
      window.triggerDiwaliBlast();
      setTimeout(() => window.triggerDiwaliBlast && window.triggerDiwaliBlast(), 200);
      setTimeout(() => window.triggerDiwaliBlast && window.triggerDiwaliBlast(), 400);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => {
          setIsOpen(true);
          setIsMinimized(false);
          setTimeout(handleManualBlast, 200);
        }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 text-white font-bold shadow-[0_0_25px_rgba(245,158,11,0.6)] hover:scale-105 active:scale-95 transition-all border border-amber-300 cursor-pointer animate-pulse"
        title="Reopen Happy Diwali Celebration"
      >
        <span className="text-xl">🪔</span>
        <span className="text-sm tracking-wider font-semibold">Happy Diwali</span>
        <Sparkles className="w-4 h-4 text-yellow-200 animate-spin" />
      </button>
    );
  }

  return (
    <aside aria-label="Diwali Celebration" className="fixed bottom-0 right-0 z-50 pointer-events-none p-3 sm:p-6 flex flex-col items-end">
      {/* Dynamic Firecracker Blast Canvas in the right corner */}
      <canvas
        ref={canvasRef}
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{ width: 'min(95vw, 650px)', height: 'min(85vh, 700px)' }}
      />

      {/* Floating Happy Diwali Festive Popup Card */}
      <div
        className={`relative pointer-events-auto transition-all duration-300 ease-out origin-bottom-right ${
          isMinimized
            ? 'w-auto'
            : 'w-[90vw] max-w-[340px] sm:max-w-[380px] bg-neutral-950/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-amber-500/50 shadow-[0_0_40px_rgba(245,158,11,0.35)] ring-1 ring-amber-400/30'
        }`}
        style={{
          boxShadow: '0 10px 40px -10px rgba(0,0,0,0.8), 0 0 25px rgba(251, 191, 36, 0.3)',
        }}
      >
        {isMinimized ? (
          <div className="flex items-center gap-2 bg-neutral-950/90 border border-amber-500/60 rounded-full px-4 py-2 shadow-2xl backdrop-blur-md">
            <button
              onClick={() => setIsMinimized(false)}
              className="flex items-center gap-2 text-amber-300 hover:text-amber-100 text-sm font-semibold cursor-pointer"
            >
              <span className="text-xl">🪔</span>
              <span>Happy Diwali</span>
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1 rounded-full cursor-pointer"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div>
            {/* Header controls: Sound toggle, minimize, close */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-amber-500/20">
              <div className="flex items-center gap-1.5 text-xs text-amber-400/90 font-medium tracking-wider uppercase">
                <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-bounce" />
                <span>Festival of Lights</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className="p-1.5 text-amber-300/80 hover:text-amber-200 hover:bg-amber-500/20 rounded-lg transition-colors cursor-pointer"
                  title={soundEnabled ? 'Mute blast sound' : 'Enable blast sound'}
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4 text-amber-300" /> : <VolumeX className="w-4 h-4 text-neutral-400" />}
                </button>
                <button
                  onClick={() => setIsMinimized(true)}
                  className="p-1.5 text-neutral-400 hover:text-amber-200 hover:bg-neutral-800 rounded-lg transition-colors text-xs font-bold cursor-pointer"
                  title="Minimize"
                >
                  ─
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
                  title="Close popup"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Glowing Diya & Greetings Content */}
            <div className="text-center py-2 flex flex-col items-center">
              {/* Diya Graphic with radiant glow */}
              <div className="relative mb-2">
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/40 via-yellow-500/50 to-orange-500/40 rounded-full blur-md animate-pulse"></div>
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-2xl shadow-inner border border-yellow-200/40">
                  🪔
                </div>
              </div>

              {/* HAPPY DIWALI text */}
              <h2
                className="font-karantina text-4xl sm:text-5xl font-black tracking-wider uppercase drop-shadow-[0_2px_12px_rgba(245,158,11,0.7)] text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-500"
                style={{ fontFamily: 'karantina, serif' }}
              >
                HAPPY DIWALI
              </h2>

              <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-[280px] leading-relaxed">
                May the divine light of Diwali illuminate your path with prosperity, joy, and endless innovation!
              </p>

              <div className="text-[11px] font-medium text-amber-400/90 tracking-widest mt-1 uppercase">
                Warm Wishes from E-Cell IIIT NR ✨
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-3 pt-2 flex items-center gap-2">
              <button
                onClick={handleManualBlast}
                className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:via-orange-400 hover:to-amber-500 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-[0_0_18px_rgba(245,158,11,0.5)] active:scale-95 transition-all cursor-pointer border border-amber-300/40"
              >
                <span>Burst Crackers</span>
                <span className="text-sm">🎆</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default DiwaliPopup;
