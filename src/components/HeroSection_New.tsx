import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 3D Cubes configuration
    const cubes: Array<{
      x: number;
      y: number;
      z: number;
      rotationX: number;
      rotationY: number;
      size: number;
      hovered: boolean;
      melonVisible: boolean;
      melonY: number;
      melonRotation: number;
    }> = [];

    // Initialize cubes in a grid pattern (right side of screen like the image)
    const gridSize = 4;
    const spacing = 80;
    const startX = canvas.width * 0.6; // Position on right side
    const startY = canvas.height / 2 - (gridSize * spacing) / 2;

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        cubes.push({
          x: startX + i * spacing,
          y: startY + j * spacing,
          z: 0,
          rotationX: 0,
          rotationY: 0,
          size: 25,
          hovered: false,
          melonVisible: false,
          melonY: 0,
          melonRotation: 0,
        });
      }
    }

    // Draw 3D cube
    const drawCube = (cube: typeof cubes[0]) => {
      ctx.save();
      ctx.translate(cube.x, cube.y);

      // Create gradient for cube faces
      const gradient = ctx.createLinearGradient(-cube.size, -cube.size, cube.size, cube.size);
      if (cube.hovered) {
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0.8)');
        gradient.addColorStop(0.5, 'rgba(0, 150, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(100, 50, 255, 0.8)');
      } else {
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0.3)');
        gradient.addColorStop(0.5, 'rgba(0, 150, 255, 0.3)');
        gradient.addColorStop(1, 'rgba(100, 50, 255, 0.3)');
      }

      // Draw cube faces (isometric view)
      const s = cube.size;
      
      // Front face
      ctx.fillStyle = gradient;
      ctx.strokeStyle = cube.hovered ? 'rgba(0, 255, 255, 0.9)' : 'rgba(0, 255, 255, 0.4)';
      ctx.lineWidth = cube.hovered ? 2 : 1;
      ctx.fillRect(-s/2, -s/2, s, s);
      ctx.strokeRect(-s/2, -s/2, s, s);

      // Top face (isometric)
      ctx.beginPath();
      ctx.moveTo(-s/2, -s/2);
      ctx.lineTo(-s/4, -s/2 - s/4);
      ctx.lineTo(s/4, -s/2 - s/4);
      ctx.lineTo(s/2, -s/2);
      ctx.closePath();
      ctx.fillStyle = cube.hovered ? 'rgba(0, 255, 255, 0.9)' : 'rgba(0, 255, 255, 0.4)';
      ctx.fill();
      ctx.stroke();

      // Right face (isometric)
      ctx.beginPath();
      ctx.moveTo(s/2, -s/2);
      ctx.lineTo(s/4 + s/2, -s/2 - s/4);
      ctx.lineTo(s/4 + s/2, s/2 - s/4);
      ctx.lineTo(s/2, s/2);
      ctx.closePath();
      ctx.fillStyle = cube.hovered ? 'rgba(0, 150, 255, 0.9)' : 'rgba(0, 150, 255, 0.4)';
      ctx.fill();
      ctx.stroke();

      ctx.restore();
    };

    // Draw melon
    const drawMelon = (cube: typeof cubes[0]) => {
      if (!cube.melonVisible) return;

      ctx.save();
      ctx.translate(cube.x, cube.y + cube.melonY);
      ctx.rotate(cube.melonRotation);

      // Draw melon shape
      const melonSize = 20;
      
      // Melon body
      ctx.fillStyle = '#FF6B35';
      ctx.beginPath();
      ctx.ellipse(0, 0, melonSize, melonSize * 1.2, 0, 0, Math.PI * 2);
      ctx.fill();

      // Melon stripes
      ctx.strokeStyle = '#FF4500';
      ctx.lineWidth = 2;
      for (let i = -melonSize; i <= melonSize; i += 6) {
        ctx.beginPath();
        ctx.moveTo(i, -melonSize * 1.2);
        ctx.lineTo(i, melonSize * 1.2);
        ctx.stroke();
      }

      // Melon stem
      ctx.fillStyle = '#22C55E';
      ctx.fillRect(-2, -melonSize * 1.2 - 6, 4, 6);

      ctx.restore();
    };

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      // Check cube hover
      cubes.forEach(cube => {
        const distance = Math.sqrt((mouseX - cube.x) ** 2 + (mouseY - cube.y) ** 2);
        cube.hovered = distance < cube.size * 1.5;
        
        if (cube.hovered && !cube.melonVisible) {
          cube.melonVisible = true;
          cube.melonY = -40;
        }
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      cubes.forEach(cube => {
        // Animate cube rotation
        cube.rotationX += 0.01;
        cube.rotationY += 0.01;

        // Animate melon
        if (cube.melonVisible) {
          cube.melonY += 0.8;
          cube.melonRotation += 0.15;
          
          // Reset melon when it falls off screen
          if (cube.melonY > 80) {
            cube.melonVisible = false;
            cube.melonY = -40;
            cube.melonRotation = 0;
          }
        }

        drawCube(cube);
        drawMelon(cube);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* 3D Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)' }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          {/* Main Content - Left Aligned like the image */}
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left Side Content */}
            <div className="flex-1 text-left mb-16 lg:mb-0 lg:pr-12">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight">
                Brands grow faster when they go{' '}
                <span className="text-orange-400 relative block lg:inline">
                  Melons
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full" />
                </span>
                .
              </h1>

              {/* Tags - Like the image */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 border border-white/30 text-white rounded-full text-sm font-light">
                  BRANDS
                </span>
                <span className="px-4 py-2 border border-white/30 text-white rounded-full text-sm font-light">
                  WEBSITES
                </span>
                <span className="px-4 py-2 border border-white/30 text-white rounded-full text-sm font-light">
                  DIGITAL
                </span>
                <span className="px-4 py-2 border border-white/30 text-white rounded-full text-sm font-light">
                  EXPERIENCES
                </span>
              </div>
            </div>

            {/* Right Side - Space for 3D Animation */}
            <div className="flex-1 lg:flex-none lg:w-96 h-96 relative">
              {/* This space is for the 3D cubes animation */}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mt-12">
            {/* Description */}
            <div className="max-w-lg mb-8 lg:mb-0">
              <p className="text-xl text-white/70 font-light leading-relaxed">
                We design juicy brands, build scroll-stopping sites, and launch digital experiences that don't just work — they slap.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => window.location.href = '/contact'}
                className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-light"
              >
                Contact Us
              </button>
              <button
                onClick={() => window.location.href = '/contact'}
                className="px-8 py-4 text-black font-semibold rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/30 hover:scale-105 flex items-center gap-2"
                style={{ backgroundColor: '#FFD700' }}
              >
                Let's Make Magic
                <span className="bg-black text-yellow-400 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  +
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
