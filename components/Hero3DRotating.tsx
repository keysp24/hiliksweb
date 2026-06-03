'use client';
import { useEffect, useRef } from 'react';
import type * as ThreeNS from 'three';

const CAPABILITIES = [
  'Digital Engineering',
  'Enterprise Applications',
  'Systems Integration',
  'AI & Analytics',
  'Intelligent Automation',
  'Managed Services',
  'Infrastructure & Monitoring',
  'Data & Platforms',
];

/**
 * 3D Rotating Graphic Ring — capabilities orbit in 3D space around a glowing torus.
 * Positioned on the right side of the hero.
 */
export default function Hero3DRotating() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const THREE = await import('three');
      if (disposed) return;

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
      camera.position.set(0, 0, 14);

      const group = new THREE.Group();
      scene.add(group);

      // ── GLOWING TORUS RING ──
      const torusGeo = new THREE.TorusGeometry(4.5, 0.08, 16, 100);
      const torusMat = new THREE.MeshBasicMaterial({
        color: 0xff6600,
        transparent: true,
        opacity: 0.7,
      });
      const torus = new THREE.Mesh(torusGeo, torusMat);
      group.add(torus);

      // Inner glow ring
      const torusInnerGeo = new THREE.TorusGeometry(4.5, 0.25, 16, 100);
      const torusInnerMat = new THREE.MeshBasicMaterial({
        color: 0xff4400,
        transparent: true,
        opacity: 0.12,
      });
      const torusInner = new THREE.Mesh(torusInnerGeo, torusInnerMat);
      group.add(torusInner);

      // Outer glow ring
      const torusOuterGeo = new THREE.TorusGeometry(4.5, 0.5, 16, 100);
      const torusOuterMat = new THREE.MeshBasicMaterial({
        color: 0xff8844,
        transparent: true,
        opacity: 0.04,
      });
      const torusOuter = new THREE.Mesh(torusOuterGeo, torusOuterMat);
      group.add(torusOuter);

      // ── ORBITING CAPABILITY LABELS ──
      const labels: ThreeNS.Mesh[] = [];
      const labelCount = CAPABILITIES.length;
      const labelGeo = new THREE.SphereGeometry(0.12, 12, 12);
      const labelMat = new THREE.MeshBasicMaterial({ color: 0xffaa44 });

      for (let i = 0; i < labelCount; i++) {
        const angle = (i / labelCount) * Math.PI * 2;
        const mesh = new THREE.Mesh(labelGeo, labelMat.clone());
        mesh.position.set(Math.cos(angle) * 4.5, Math.sin(angle) * 4.5, 0);
        mesh.userData = { angle, baseY: Math.sin(angle) * 4.5 };
        group.add(mesh);
        labels.push(mesh);
      }

      // ── PARTICLE FIELD ──
      const particleCount = 200;
      const particlePos = new Float32Array(particleCount * 3);
      const particleSpeeds: number[] = [];
      for (let i = 0; i < particleCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 3 + Math.random() * 5;
        particlePos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        particlePos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        particlePos[i * 3 + 2] = r * Math.cos(phi);
        particleSpeeds.push(0.002 + Math.random() * 0.004);
      }
      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
      const particleMat = new THREE.PointsMaterial({
        color: 0xff8844,
        size: 0.08,
        transparent: true,
        opacity: 0.5,
        sizeAttenuation: true,
      });
      const particles = new THREE.Points(particleGeo, particleMat);
      group.add(particles);

      // ── CENTER CORE ──
      const coreGeo = new THREE.SphereGeometry(0.6, 32, 32);
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0xff4400,
        transparent: true,
        opacity: 0.15,
      });
      const core = new THREE.Mesh(coreGeo, coreMat);
      group.add(core);

      const coreInnerGeo = new THREE.SphereGeometry(0.25, 32, 32);
      const coreInnerMat = new THREE.MeshBasicMaterial({
        color: 0xff6600,
        transparent: true,
        opacity: 0.6,
      });
      const coreInner = new THREE.Mesh(coreInnerGeo, coreInnerMat);
      group.add(coreInner);

      // ── MOUSE PARALLAX ──
      let mx = 0, my = 0;
      let targetMx = 0, targetMy = 0;
      const onMove = (e: MouseEvent) => {
        targetMx = (e.clientX / window.innerWidth - 0.5) * 2;
        targetMy = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener('mousemove', onMove);

      const resize = () => {
        const w = canvas.clientWidth || window.innerWidth;
        const h = canvas.clientHeight || window.innerHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      resize();
      window.addEventListener('resize', resize);

      // ── ANIMATION ──
      let raf = 0;
      const clock = new THREE.Clock();

      const animate = () => {
        const dt = clock.getDelta();
        const time = clock.getElapsedTime();

        mx += (targetMx - mx) * 0.04;
        my += (targetMy - my) * 0.04;

        // Rotate the entire group
        group.rotation.y += 0.003;
        group.rotation.x = Math.sin(time * 0.2) * 0.1;

        // Camera parallax
        camera.position.x = mx * 2;
        camera.position.y = my * 1;
        camera.lookAt(0, 0, 0);

        // Pulse torus opacity
        torusMat.opacity = 0.5 + Math.sin(time * 2) * 0.2;
        torusInnerMat.opacity = 0.08 + Math.sin(time * 1.5) * 0.04;

        // Animate labels orbiting
        labels.forEach((mesh, i) => {
          const angle = mesh.userData.angle + time * 0.15;
          mesh.position.x = Math.cos(angle) * 4.5;
          mesh.position.y = Math.sin(angle) * 4.5 + Math.sin(time * 0.5 + i) * 0.3;
          mesh.position.z = Math.cos(time * 0.3 + i) * 0.5;
          const pulse = 1 + Math.sin(time * 3 + i * 0.8) * 0.3;
          mesh.scale.setScalar(pulse);
        });

        // Animate particles
        const pos = particleGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          pos[i * 3 + 1] += Math.sin(time * particleSpeeds[i] * 100 + i) * 0.003;
        }
        particleGeo.attributes.position.needsUpdate = true;
        particles.rotation.y -= 0.001;

        // Pulse core
        coreMat.opacity = 0.1 + Math.sin(time * 2) * 0.05;
        coreInnerMat.opacity = 0.5 + Math.sin(time * 3) * 0.15;

        renderer.render(scene, camera);
        raf = requestAnimationFrame(animate);
      };
      animate();

      cleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('resize', resize);
        torusGeo.dispose(); torusMat.dispose();
        torusInnerGeo.dispose(); torusInnerMat.dispose();
        torusOuterGeo.dispose(); torusOuterMat.dispose();
        labelGeo.dispose(); labelMat.dispose();
        particleGeo.dispose(); particleMat.dispose();
        coreGeo.dispose(); coreMat.dispose();
        coreInnerGeo.dispose(); coreInnerMat.dispose();
        renderer.dispose();
      };
    })();

    return () => { disposed = true; cleanup(); };
  }, []);

  return <canvas ref={ref} aria-hidden className="hero-rotate" />;
}
