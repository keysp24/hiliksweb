'use client';
import { useEffect, useRef } from 'react';
import type * as ThreeNS from 'three';

/**
 * Procedural helix/network hero scene with scroll-driven camera.
 * Matches the source hiliks-site.html 3D implementation exactly.
 */
export default function Hero3D() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const scrollTRef = useRef(0);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const THREE = await import('three');
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      if (disposed) return;

      // Match the source's three.js r128 look: disable modern sRGB color
      // management / tone mapping so colors render rich (not washed out).
      THREE.ColorManagement.enabled = false;

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x0B0D11, 0.028);

      const cam = new THREE.PerspectiveCamera(55, 1, 0.1, 120);
      cam.position.set(0, 0, 22);
      let baseZ = 22;

      scene.add(new THREE.AmbientLight(0x556070, 0.7));
      const d = new THREE.DirectionalLight(0xffffff, 0.8);
      d.position.set(4, 8, 6);
      scene.add(d);
      const pO = new THREE.PointLight(0xF2680E, 2.4, 60);
      pO.position.set(7, 3, 10);
      scene.add(pO);
      const pB = new THREE.PointLight(0x2E8FE0, 1.2, 50);
      pB.position.set(-9, -4, 4);
      scene.add(pB);

      const helix = new THREE.Group();
      const count = 58,
        radius = 3.4,
        spacing = 0.46,
        step = 0.34;
      const ballGeo = new THREE.SphereGeometry(0.17, 16, 16);
      const matA = new THREE.MeshStandardMaterial({
        color: 0xf2680e,
        metalness: 0.65,
        roughness: 0.28,
        emissive: 0xc24409,
        emissiveIntensity: 0.35,
      });
      const matB = new THREE.MeshStandardMaterial({
        color: 0xff9248,
        metalness: 0.55,
        roughness: 0.32,
        emissive: 0x6e2e08,
        emissiveIntensity: 0.3,
      });
      const rungMat = new THREE.MeshStandardMaterial({
        color: 0x8a98a8,
        metalness: 0.7,
        roughness: 0.4,
        emissive: 0x14181e,
        emissiveIntensity: 0.2,
      });
      const rungGeo = new THREE.CylinderGeometry(0.045, 0.045, radius * 2, 10);
      const up = new THREE.Vector3(0, 1, 0);
      for (let i = 0; i < count; i++) {
        const a = i * step,
          y = i * spacing - (count * spacing) / 2;
        const ax = Math.cos(a) * radius,
          az = Math.sin(a) * radius;
        const sA = new THREE.Mesh(ballGeo, matA);
        sA.position.set(ax, y, az);
        helix.add(sA);
        const sB = new THREE.Mesh(ballGeo, matB);
        sB.position.set(-ax, y, -az);
        helix.add(sB);
        if (i % 2 === 0) {
          const r = new THREE.Mesh(rungGeo, rungMat);
          r.position.set(0, y, 0);
          const dir = new THREE.Vector3(ax * 2, 0, az * 2).normalize();
          r.quaternion.setFromUnitVectors(up, dir);
          helix.add(r);
        }
      }
      scene.add(helix);

      // perspective grid floor + ceiling
      const grid = new THREE.GridHelper(150, 72, 0xf2680e, 0x223040);
      grid.position.y = -9;
      (grid.material as ThreeNS.Material).transparent = true;
      (grid.material as ThreeNS.Material).opacity = 0.42;
      scene.add(grid);
      const grid2 = new THREE.GridHelper(150, 72, 0x2e3a49, 0x16202b);
      grid2.position.y = 10;
      (grid2.material as ThreeNS.Material).transparent = true;
      (grid2.material as ThreeNS.Material).opacity = 0.14;
      scene.add(grid2);

      // glow sprites behind
      function glowSprite(color: string, x: number, y: number, s: number) {
        const c = document.createElement('canvas');
        c.width = c.height = 128;
        const g = c.getContext('2d')!;
        const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
        grd.addColorStop(0, color);
        grd.addColorStop(1, 'rgba(0,0,0,0)');
        g.fillStyle = grd;
        g.fillRect(0, 0, 128, 128);
        const tex = new THREE.CanvasTexture(c);
        const sp = new THREE.Sprite(
          new THREE.SpriteMaterial({
            map: tex,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            transparent: true,
          })
        );
        sp.scale.set(s, s, 1);
        sp.position.set(x, y, -4);
        scene.add(sp);
      }
      glowSprite('rgba(242,104,14,.6)', 2, 1, 18);
      glowSprite('rgba(46,143,224,.35)', -6, -3, 14);

      // particles
      const PN = window.innerWidth < 760 ? 150 : 350;
      const pp: number[] = [];
      for (let i = 0; i < PN; i++)
        pp.push(
          (Math.random() - 0.5) * 46,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 24
        );
      const pg = new THREE.BufferGeometry();
      pg.setAttribute('position', new THREE.Float32BufferAttribute(pp, 3));
      const pts = new THREE.Points(
        pg,
        new THREE.PointsMaterial({
          color: 0xf2680e,
          size: 0.06,
          transparent: true,
          opacity: 0.55,
          blending: THREE.AdditiveBlending,
        })
      );
      scene.add(pts);

      let mx = 0,
        my = 0;
      const onMove = (e: MouseEvent) => {
        mx = e.clientX / window.innerWidth - 0.5;
        my = e.clientY / window.innerHeight - 0.5;
      };
      window.addEventListener('mousemove', onMove);

      const resize = () => {
        const w = window.innerWidth,
          h = window.innerHeight;
        renderer.setSize(w, h, false);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, w < 760 ? 1.5 : 2));
        cam.aspect = w / h;
        cam.updateProjectionMatrix();
        helix.scale.setScalar(Math.min(1, w / 820));
        baseZ = w < 560 ? 27 : w < 900 ? 24 : 22;
      };
      window.addEventListener('resize', resize);
      resize();

      // scroll trigger
      const st = ScrollTrigger.create({
        trigger: canvas.parentElement,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          scrollTRef.current = self.progress;
        },
      });

      let t = 0;
      let raf = 0;
      const loop = () => {
        t += 0.01;
        const scrollT = scrollTRef.current;
        helix.rotation.y += 0.0035;
        helix.rotation.y += scrollT * 0.5;
        helix.position.y = scrollT * 6;
        pts.rotation.y = t * 0.04;
        grid.position.z = ((t * 3) % 4) - 2;
        grid2.position.z = ((t * 2) % 4) - 2;
        grid.position.y = -9 + scrollT * 5;
        // (source animates a no-op emissiveIntensity here; the orange key
        // light stays at its full 2.4 intensity, keeping the helix vivid)
        cam.position.x += (mx * 5 - cam.position.x) * 0.04;
        cam.position.y += (-my * 3 - cam.position.y) * 0.04;
        cam.position.z = baseZ - scrollT * 6;
        cam.lookAt(0, helix.position.y * 0.4, 0);
        renderer.render(scene, cam);
        raf = requestAnimationFrame(loop);
      };
      loop();

      cleanup = () => {
        cancelAnimationFrame(raf);
        st.kill();
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('resize', resize);
        ballGeo.dispose();
        rungGeo.dispose();
        matA.dispose();
        matB.dispose();
        rungMat.dispose();
        pg.dispose();
        renderer.dispose();
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return <canvas id="scene" ref={ref} aria-hidden style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }} />;
}
