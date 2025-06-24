import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.getContext) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let nodes = [];
    const nodeCount = 50;
    const mouse = { x: null, y: null };

    // Define the protected area to keep nodes away from logo and text
    // Adjust these values depending on your layout
    const protectedArea = {
      x: canvas.width / 2 - 200,
      y: canvas.height / 2 - 150,
      width: 400,
      height: 300,
    };

    class Node {
      constructor() {
        // Generate random x, y but outside the protected area
        let x, y;
        do {
          x = Math.random() * canvas.width;
          y = Math.random() * canvas.height;
        } while (
          x > protectedArea.x &&
          x < protectedArea.x + protectedArea.width &&
          y > protectedArea.y &&
          y < protectedArea.y + protectedArea.height
        );

        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 2;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        // Prevent nodes from entering protected area: simple repel
        if (
          this.x > protectedArea.x &&
          this.x < protectedArea.x + protectedArea.width &&
          this.y > protectedArea.y &&
          this.y < protectedArea.y + protectedArea.height
        ) {
          // Push node out horizontally or vertically
          if (this.x - protectedArea.x < protectedArea.width / 2) {
            this.x = protectedArea.x - this.size;
            this.speedX = -Math.abs(this.speedX);
          } else {
            this.x = protectedArea.x + protectedArea.width + this.size;
            this.speedX = Math.abs(this.speedX);
          }
          if (this.y - protectedArea.y < protectedArea.height / 2) {
            this.y = protectedArea.y - this.size;
            this.speedY = -Math.abs(this.speedY);
          } else {
            this.y = protectedArea.y + protectedArea.height + this.size;
            this.speedY = Math.abs(this.speedY);
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
      }
    }

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push(new Node());
      }
    };

    const connectNodes = () => {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            const opacity = 1 - distance / 150;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node) => {
        node.update();
        node.draw();
      });

      connectNodes();
      requestAnimationFrame(animate);
    };

    initNodes();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Update protected area on resize
      protectedArea.x = canvas.width / 2 - 200;
      protectedArea.y = canvas.height / 2 - 150;

      initNodes();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white flex flex-col items-center justify-center px-4">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      <div className="relative z-10 text-center max-w-lg">
        <img
          src="/MainLogo(W).png"
          alt="IndieRise"
          className="w-40 h-auto mx-auto mb-8"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/160';
          }}
        />
        <h1 className="text-6xl font-semibold mb-4 tracking-wider">IndieRise</h1>
        <p className="text-xl text-gray-400 mb-10">Reimagining Storytelling with AI</p>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="border border-white px-8 py-3 text-lg rounded hover:bg-white hover:text-black transition">
            EXPLORE INDIESHOTS
          </button>
          <button className="border border-white px-8 py-3 text-lg rounded hover:bg-white hover:text-black transition">
            WATCH SHOW REEL
          </button>
        </div>
      </div>
    </section>
  );
}
