/**
 * MEDICARE PLUS — Advanced Clinical Background Canvas Engine (LIGHT CLINICAL THEME)
 * Features:
 * - DUAL-LINE ECG / EKG HEARTBEAT WAVEFORMS (Lead II & Lead V5 Synchronized Twin-Traces)
 * - Clinical ECG Chart Paper Telemetry Grid with Millimeter Crosshairs and Voltage Tick Marks
 * - Floating & Glowing 3D-Depth Medical Plus Symbols (+ / Crosses) in Crisp Light Clinical Tones
 * - Soft Luminous Radial Glow Auroras (Clinical Sky Cyan & Hospital Emerald)
 * - Dynamic Cardiac Lead Cursors with Concentric QRS Shockwave Rings
 * - Interactive Mouse Parallax Reaction & Ambient Clinical Micro-Particles
 */

class MedicalBackground {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        
        this.particles = [];
        this.dustParticles = [];
        this.shockwaves = [];
        this.numParticles = 24;
        this.numDust = 42;
        
        this.mouseX = 0;
        this.mouseY = 0;
        this.targetMouseX = 0;
        this.targetMouseY = 0;
        
        // Primary DUAL-LINE ECG System (Lead II & Lead V5 Twin Track)
        this.primaryECG = {
            x: 0,
            speed: 3.4,
            heightFactor: 0.52, // Center-aligned monitoring track
            amplitude: 48,
            lead1Points: [], // Lead II: Primary Clinical Cyan Beam
            lead2Points: [], // Lead V5: Synchronized Companion Teal/Emerald Beam
            pulseRingRadius: 0,
            lastSpikeTriggered: false
        };

        // Secondary Lower Telemetry Track (Subtle Dual Monitor Wave)
        this.secondaryECG = {
            x: 0,
            speed: 2.6,
            heightFactor: 0.85, // Lower monitor rhythm at 85% height
            amplitude: 26,
            lead1Points: [],
            lead2Points: []
        };
        
        // High-precision clinical cardiac rhythm pattern (P-wave, PR segment, sharp QRS spike, ST segment, T-wave)
        this.ekgPattern = [
            0, 0, 0, 0.4, 1.2, 2.6, 3.8, 3.2, 1.4, 0, -0.6, 0, // P-wave (Atrial depolarization)
            0, 0, 0, -2.2, -6.5, 52.0, -19.0, 4.2, -1.0, 0,    // Sharp QRS Complex (Ventricular depolarization)
            0, 0, 0.6, 1.8, 3.6, 5.8, 6.8, 5.2, 3.0, 1.2, 0, 0  // T-wave (Ventricular repolarization)
        ];
        
        // Companion Lead V5 Waveform (Slightly phase-coupled with morphological nuance)
        this.ekgPatternLeadV5 = [
            0, 0, 0, 0.3, 1.0, 2.1, 3.0, 2.4, 1.0, 0, -0.4, 0, 
            0, 0, 0, -1.5, -4.8, 41.0, -14.0, 3.0, -0.8, 0,    
            0, 0, 0.5, 1.4, 2.8, 4.6, 5.4, 4.2, 2.4, 0.9, 0, 0  
        ];
        
        // Light Theme Medical Color Palettes for Plus Crosses
        this.colors = [
            { main: 'rgba(2, 132, 199, ', glow: 'rgba(14, 165, 233, ' },   // Clinical Cyan/Sky
            { main: 'rgba(13, 148, 136, ', glow: 'rgba(20, 184, 166, ' },  // Hospital Teal
            { main: 'rgba(5, 150, 105, ', glow: 'rgba(16, 185, 129, ' },   // Medical Emerald
            { main: 'rgba(37, 99, 235, ', glow: 'rgba(59, 130, 246, ' },   // Royal Blue
            { main: 'rgba(8, 145, 178, ', glow: 'rgba(6, 182, 212, ' }     // Deep Cyan
        ];
        
        this.init();
    }
    
    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        window.addEventListener('mousemove', (e) => {
            this.targetMouseX = (e.clientX - this.width / 2) * 0.035;
            this.targetMouseY = (e.clientY - this.height / 2) * 0.035;
        });

        window.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                this.targetMouseX = (e.touches[0].clientX - this.width / 2) * 0.035;
                this.targetMouseY = (e.touches[0].clientY - this.height / 2) * 0.035;
            }
        }, { passive: true });
        
        this.createParticles();
        this.createDust();
        this.animate();
    }
    
    resize() {
        this.dpr = window.devicePixelRatio || 1;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        
        this.canvas.width = this.width * this.dpr;
        this.canvas.height = this.height * this.dpr;
        this.canvas.style.width = `${this.width}px`;
        this.canvas.style.height = `${this.height}px`;
        
        this.ctx.scale(this.dpr, this.dpr);
    }
    
    createParticles() {
        this.particles = [];
        const count = this.width < 768 ? 14 : this.numParticles;
        
        for (let i = 0; i < count; i++) {
            const colorObj = this.colors[Math.floor(Math.random() * this.colors.length)];
            const zDepth = 0.35 + Math.random() * 0.85; // 3D depth layer
            
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                z: zDepth,
                size: (18 + Math.random() * 36) * zDepth,
                armRatio: 0.32,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.008,
                vx: (Math.random() - 0.5) * 0.4 * zDepth,
                vy: -0.15 * zDepth - (Math.random() * 0.25 * zDepth), // Upward drift
                color: colorObj,
                baseAlpha: 0.14 + (zDepth * 0.24),
                pulseOffset: Math.random() * Math.PI * 2,
                pulseSpeed: 0.016 + Math.random() * 0.02,
                glowIntensity: 12 + Math.random() * 18 * zDepth
            });
        }
    }
    
    createDust() {
        this.dustParticles = [];
        const count = this.width < 768 ? 20 : this.numDust;
        for (let i = 0; i < count; i++) {
            this.dustParticles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                radius: Math.random() * 1.6 + 0.6,
                vx: (Math.random() - 0.5) * 0.2,
                vy: -Math.random() * 0.3 - 0.1,
                alpha: Math.random() * 0.35 + 0.1,
                pulse: Math.random() * Math.PI * 2,
                color: Math.random() > 0.5 ? 'rgba(2, 132, 199,' : 'rgba(13, 148, 136,'
            });
        }
    }
    
    // Trigger dynamic cardiac shockwave ripple
    triggerCardiacShockwave(x, y) {
        this.shockwaves.push({
            x: x,
            y: y,
            radius: 4,
            maxRadius: 150,
            alpha: 0.75
        });
    }

    drawShockwaves() {
        const { ctx } = this;
        for (let i = this.shockwaves.length - 1; i >= 0; i--) {
            const sw = this.shockwaves[i];
            sw.radius += 2.6;
            sw.alpha *= 0.94;
            
            ctx.save();
            ctx.beginPath();
            ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(2, 132, 199, ${sw.alpha * 0.35})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Inner companion echo ring
            ctx.beginPath();
            ctx.arc(sw.x, sw.y, Math.max(1, sw.radius - 12), 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(13, 148, 136, ${sw.alpha * 0.25})`;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.restore();
            
            if (sw.radius >= sw.maxRadius || sw.alpha < 0.02) {
                this.shockwaves.splice(i, 1);
            }
        }
    }

    // Clinical ECG Chart Grid (Standard clinical telemetry grid paper for light theme)
    drawECGGrid() {
        const { ctx, width, height } = this;
        ctx.save();
        
        const minorGrid = 22;
        const majorGrid = 110;
        
        const offsetX = (this.mouseX * 0.15) % minorGrid;
        const offsetY = (this.mouseY * 0.15) % minorGrid;
        
        // Minor grid lines (Subtle clinical cyan-tinted light lines)
        ctx.strokeStyle = 'rgba(2, 132, 199, 0.048)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let x = offsetX; x < width; x += minorGrid) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
        }
        for (let y = offsetY; y < height; y += minorGrid) {
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
        }
        ctx.stroke();
        
        // Major grid lines (Crisper telemetry lines)
        ctx.strokeStyle = 'rgba(2, 132, 199, 0.095)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        for (let x = (offsetX % majorGrid); x < width; x += majorGrid) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
        }
        for (let y = (offsetY % majorGrid); y < height; y += majorGrid) {
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
        }
        ctx.stroke();

        // Precision Telemetry Crosshair Dots (+) at major grid intersections
        ctx.fillStyle = 'rgba(2, 132, 199, 0.16)';
        const crossSize = 3;
        for (let x = (offsetX % majorGrid); x < width; x += majorGrid) {
            for (let y = (offsetY % majorGrid); y < height; y += majorGrid) {
                ctx.fillRect(x - crossSize, y - 0.5, crossSize * 2, 1);
                ctx.fillRect(x - 0.5, y - crossSize, 1, crossSize * 2);
            }
        }
        
        ctx.restore();
    }
    
    // RENDER SYNCHRONIZED DOUBLE-LINE ECG (Lead II & Lead V5 Twin-Beam)
    updateAndDrawDoubleECGWave(wave, isPrimary = true) {
        const { ctx, width, height } = this;
        const baseY = height * wave.heightFactor;
        
        // Advance horizontal sweep
        wave.x += wave.speed;
        if (wave.x > width) {
            wave.x = 0;
            wave.lead1Points = [];
            wave.lead2Points = [];
            wave.lastSpikeTriggered = false;
        }
        
        // Calculate cardiac rhythm for primary lead (Lead II) and companion lead (Lead V5)
        let offsetLead1 = 0;
        let offsetLead2 = 0;
        const cycleLength = isPrimary ? 320 : 400;
        const posInCycle = wave.x % cycleLength;
        const patternStep = 4.8;
        
        if (posInCycle < this.ekgPattern.length * patternStep) {
            const idx = Math.floor(posInCycle / patternStep);
            const val1 = this.ekgPattern[idx] || 0;
            const val2 = this.ekgPatternLeadV5[idx] || 0;
            
            offsetLead1 = val1 * (isPrimary ? -1.35 : -0.85);
            // Parallel offset for double line: 9px vertical separation with physiological correlation
            offsetLead2 = (val2 * (isPrimary ? -1.25 : -0.75)) + (isPrimary ? 9.5 : 6.5);

            // Trigger shockwave when QRS spike reaches maximum
            if (isPrimary && val1 >= 40 && !wave.lastSpikeTriggered) {
                this.triggerCardiacShockwave(wave.x, baseY + offsetLead1);
                wave.lastSpikeTriggered = true;
            }
        } else {
            // Baseline separation for double line during quiescent periods
            offsetLead1 = 0;
            offsetLead2 = isPrimary ? 9.5 : 6.5;
            if (isPrimary) wave.lastSpikeTriggered = false;
        }
        
        wave.lead1Points.push({ x: wave.x, y: baseY + offsetLead1 });
        wave.lead2Points.push({ x: wave.x, y: baseY + offsetLead2 });
        
        const maxPoints = Math.floor(width / wave.speed);
        if (wave.lead1Points.length > maxPoints) {
            wave.lead1Points.shift();
            wave.lead2Points.shift();
        }
        
        if (wave.lead1Points.length < 2) return;
        
        ctx.save();
        
        // ---------------------------------------------------------------------
        // LINE 1: Primary Beam (Clinical Sky Cyan - Lead II)
        // ---------------------------------------------------------------------
        for (let i = 0; i < wave.lead1Points.length - 1; i++) {
            const pt1 = wave.lead1Points[i];
            const pt2 = wave.lead1Points[i + 1];
            
            const progress = i / wave.lead1Points.length;
            const alpha = Math.pow(progress, 1.8) * (isPrimary ? 0.88 : 0.48);
            
            ctx.beginPath();
            ctx.moveTo(pt1.x, pt1.y);
            ctx.lineTo(pt2.x, pt2.y);
            ctx.strokeStyle = `rgba(2, 132, 199, ${alpha})`;
            ctx.lineWidth = isPrimary ? 2.6 : 1.6;
            ctx.lineCap = 'round';
            ctx.shadowColor = 'rgba(2, 132, 199, 0.45)';
            ctx.shadowBlur = isPrimary ? 8 : 4;
            ctx.stroke();
        }

        // ---------------------------------------------------------------------
        // LINE 2: Synchronized Companion Beam (Clinical Teal/Emerald - Lead V5)
        // Creating the distinct DOUBLE LINE ECG effect
        // ---------------------------------------------------------------------
        for (let i = 0; i < wave.lead2Points.length - 1; i++) {
            const pt1 = wave.lead2Points[i];
            const pt2 = wave.lead2Points[i + 1];
            
            const progress = i / wave.lead2Points.length;
            const alpha = Math.pow(progress, 2.1) * (isPrimary ? 0.78 : 0.40);
            
            ctx.beginPath();
            ctx.moveTo(pt1.x, pt1.y);
            ctx.lineTo(pt2.x, pt2.y);
            ctx.strokeStyle = `rgba(13, 148, 136, ${alpha})`;
            ctx.lineWidth = isPrimary ? 2.0 : 1.3;
            ctx.lineCap = 'round';
            ctx.shadowColor = 'rgba(13, 148, 136, 0.4)';
            ctx.shadowBlur = isPrimary ? 6 : 3;
            ctx.stroke();
        }
        
        // ---------------------------------------------------------------------
        // DUAL GLOWING LEAD CURSORS AT THE LEADING SWEEP EDGE
        // ---------------------------------------------------------------------
        const head1 = wave.lead1Points[wave.lead1Points.length - 1];
        const head2 = wave.lead2Points[wave.lead2Points.length - 1];
        
        if (head1 && head2 && isPrimary) {
            // Pulse expanding ring for Lead 1
            wave.pulseRingRadius = (wave.pulseRingRadius + 0.45) % 20;
            const ringAlpha = (1 - (wave.pulseRingRadius / 20)) * 0.6;
            
            ctx.beginPath();
            ctx.arc(head1.x, head1.y, wave.pulseRingRadius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(2, 132, 199, ${ringAlpha})`;
            ctx.lineWidth = 1.6;
            ctx.shadowBlur = 0;
            ctx.stroke();
            
            // Cursor Core 1: Clinical Cyan Core Dot
            ctx.shadowColor = 'rgba(2, 132, 199, 0.8)';
            ctx.shadowBlur = 14;
            ctx.beginPath();
            ctx.arc(head1.x, head1.y, 4.2, 0, Math.PI * 2);
            ctx.fillStyle = '#0284c7';
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(head1.x, head1.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = '#ffffff';
            ctx.fill();

            // Cursor Core 2: Companion Teal Dot
            ctx.shadowColor = 'rgba(13, 148, 136, 0.8)';
            ctx.shadowBlur = 12;
            ctx.beginPath();
            ctx.arc(head2.x, head2.y, 3.6, 0, Math.PI * 2);
            ctx.fillStyle = '#0d9488';
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(head2.x, head2.y, 1.6, 0, Math.PI * 2);
            ctx.fillStyle = '#ffffff';
            ctx.fill();

            // Dynamic Lead Labels & Telemetry Text beside the dual cursor
            ctx.shadowBlur = 0;
            ctx.font = '600 10px monospace';
            ctx.fillStyle = 'rgba(2, 132, 199, 0.9)';
            ctx.fillText('LEAD II: 72 BPM [SINUS NORMAL]', head1.x + 16, head1.y - 8);
            ctx.fillStyle = 'rgba(13, 148, 136, 0.9)';
            ctx.fillText('LEAD V5: 1.1 mV [ST STABLE]', head2.x + 16, head2.y + 14);
        }
        
        ctx.restore();
    }
    
    // Draw 3D Floating Glowing Medical Plus Symbol (+ Cross)
    drawMedicalCross(p, pulseAlpha) {
        const { ctx } = this;
        ctx.save();
        
        const renderX = p.x + (this.mouseX * p.z * 1.2);
        const renderY = p.y + (this.mouseY * p.z * 1.2);
        
        ctx.translate(renderX, renderY);
        ctx.rotate(p.rotation);
        
        const s = p.size;
        const w = s * p.armRatio;
        const halfS = s / 2;
        const halfW = w / 2;
        const r = Math.min(3.2, w * 0.28);
        
        // Soft glowing shadow for light mode
        ctx.shadowColor = p.color.glow + (pulseAlpha * 0.5) + ')';
        ctx.shadowBlur = p.glowIntensity * 0.8;
        ctx.shadowOffsetY = 2;
        
        // 12-sided rounded medical cross contour
        ctx.beginPath();
        // Top arm
        ctx.moveTo(-halfW + r, -halfS);
        ctx.lineTo(halfW - r, -halfS);
        ctx.quadraticCurveTo(halfW, -halfS, halfW, -halfS + r);
        ctx.lineTo(halfW, -halfW);
        // Right arm
        ctx.lineTo(halfS - r, -halfW);
        ctx.quadraticCurveTo(halfS, -halfW, halfS, -halfW + r);
        ctx.lineTo(halfS, halfW - r);
        ctx.quadraticCurveTo(halfS, halfW, halfS - r, halfW);
        ctx.lineTo(halfW, halfW);
        // Bottom arm
        ctx.lineTo(halfW, halfS - r);
        ctx.quadraticCurveTo(halfW, halfS, halfW - r, halfS);
        ctx.lineTo(-halfW + r, halfS);
        ctx.quadraticCurveTo(-halfW, halfS, -halfW, halfS - r);
        ctx.lineTo(-halfW, halfW);
        // Left arm
        ctx.lineTo(-halfS + r, halfW);
        ctx.quadraticCurveTo(-halfS, halfW, -halfS, halfW - r);
        ctx.lineTo(-halfS, -halfW + r);
        ctx.quadraticCurveTo(-halfS, -halfW, -halfS + r, -halfW);
        ctx.lineTo(-halfW, -halfW);
        ctx.lineTo(-halfW, -halfS + r);
        ctx.quadraticCurveTo(-halfW, -halfS, -halfW + r, -halfS);
        ctx.closePath();
        
        // Light mode gentle gradient fill
        const grad = ctx.createLinearGradient(-halfS, -halfS, halfS, halfS);
        grad.addColorStop(0, p.color.main + (pulseAlpha * 0.55) + ')');
        grad.addColorStop(1, p.color.main + (pulseAlpha * 0.2) + ')');
        
        ctx.fillStyle = grad;
        ctx.fill();
        
        // Crisp outline stroke
        ctx.lineWidth = Math.max(1, 1.4 * p.z);
        ctx.strokeStyle = p.color.glow + Math.min(1, pulseAlpha * 0.85) + ')';
        ctx.stroke();
        
        // Inner luminous core jewel
        ctx.beginPath();
        ctx.arc(0, 0, w * 0.26, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(2, 132, 199, ${pulseAlpha * 0.7})`;
        ctx.fill();
        
        ctx.restore();
    }
    
    // Draw Ambient Dust Particles
    drawDust() {
        const { ctx } = this;
        for (let i = 0; i < this.dustParticles.length; i++) {
            const d = this.dustParticles[i];
            d.pulse += 0.02;
            d.y += d.vy;
            d.x += d.vx;
            
            if (d.y < 0) d.y = this.height;
            if (d.x < 0) d.x = this.width;
            if (d.x > this.width) d.x = 0;
            
            const a = d.alpha * (0.6 + Math.sin(d.pulse) * 0.4);
            ctx.beginPath();
            ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
            ctx.fillStyle = `${d.color} ${a * 0.55})`;
            ctx.fill();
        }
    }
    
    // Soft Ambient Radial Color Glows for Light Theme
    drawAmbientGlows() {
        const { ctx, width, height } = this;
        ctx.save();
        
        // Soft top-right cyan/sky aura
        const glow1 = ctx.createRadialGradient(
            width * 0.85, height * 0.15, 0,
            width * 0.85, height * 0.15, width * 0.55
        );
        glow1.addColorStop(0, 'rgba(14, 165, 233, 0.09)');
        glow1.addColorStop(0.6, 'rgba(2, 132, 199, 0.03)');
        glow1.addColorStop(1, 'rgba(248, 250, 252, 0)');
        ctx.fillStyle = glow1;
        ctx.fillRect(0, 0, width, height);
        
        // Soft bottom-left emerald/teal aura
        const glow2 = ctx.createRadialGradient(
            width * 0.15, height * 0.85, 0,
            width * 0.15, height * 0.85, width * 0.6
        );
        glow2.addColorStop(0, 'rgba(16, 185, 129, 0.08)');
        glow2.addColorStop(0.6, 'rgba(13, 148, 136, 0.025)');
        glow2.addColorStop(1, 'rgba(248, 250, 252, 0)');
        ctx.fillStyle = glow2;
        ctx.fillRect(0, 0, width, height);
        
        ctx.restore();
    }
    
    animate() {
        const { ctx, width, height } = this;
        
        // Mouse damping
        this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
        this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;
        
        // Clear with pristine medical light background
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(0, 0, width, height);
        
        // Ambient soft color gradients
        this.drawAmbientGlows();
        
        // Clinical ECG chart paper grid
        this.drawECGGrid();
        
        // Ambient floating particles
        this.drawDust();
        
        // Concentric Cardiac Shockwaves
        this.drawShockwaves();
        
        // Floating glowing medical crosses
        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            
            p.x += p.vx;
            p.y += p.vy;
            p.rotation += p.rotationSpeed;
            p.pulseOffset += p.pulseSpeed;
            
            const pad = p.size * 1.5;
            if (p.x < -pad) p.x = width + pad;
            if (p.x > width + pad) p.x = -pad;
            if (p.y < -pad) p.y = height + pad;
            if (p.y > height + pad) p.y = -pad;
            
            const pulse = (Math.sin(p.pulseOffset) + 1) * 0.5;
            const currentAlpha = p.baseAlpha * (0.7 + (pulse * 0.45));
            
            this.drawMedicalCross(p, currentAlpha);
        }
        
        // PROMINENT DUAL-LINE ECG HEARTBEAT WAVES (Lead II & Lead V5)
        this.updateAndDrawDoubleECGWave(this.secondaryECG, false);
        this.updateAndDrawDoubleECGWave(this.primaryECG, true);
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize on DOM ready
window.addEventListener('DOMContentLoaded', () => {
    window.medicalBg = new MedicalBackground('medical-bg-canvas');
});
