// ===========================
// Simulator Engine
// ===========================
const SimulatorEngine = {
    /**
     * Create a simple input-based calculator simulator
     * @param {string} containerId - Container element ID
     * @param {Object} config - { title, inputs, calculate, resultLabels }
     */
    renderCalculator(containerId, config) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const { title, description, inputs, calculate, resultLabels } = config;

        const inputsHTML = inputs.map((inp, i) => `
            <div class="sim-control">
                <label class="sim-label">
                    ${inp.label}
                    ${inp.unit ? `<span style="color:var(--text-muted);font-size:0.75rem;">(${inp.unit})</span>` : ''}
                </label>
                ${inp.type === 'slider' ? `
                    <div style="display:flex;align-items:center;gap:0.5rem;">
                        <input type="range" class="sim-slider" id="sim-input-${i}"
                            min="${inp.min}" max="${inp.max}" step="${inp.step || 1}" value="${inp.default}">
                        <span class="sim-value-display" id="sim-display-${i}">${inp.default}</span>
                    </div>
                ` : `
                    <input type="number" class="sim-input" id="sim-input-${i}"
                        value="${inp.default}" min="${inp.min || ''}" max="${inp.max || ''}" step="${inp.step || 'any'}">
                `}
            </div>
        `).join('');

        container.innerHTML = `
            <div class="simulator-container">
                <div class="simulator-title">🧮 ${title}</div>
                ${description ? `<p style="color:var(--text-secondary);font-size:0.9rem;margin-bottom:1.25rem;">${description}</p>` : ''}
                <div class="sim-controls">${inputsHTML}</div>
                <button class="sim-btn" id="sim-calc-btn">計算する</button>
                <div class="sim-results" id="sim-results" style="margin-top:1.25rem;display:none;">
                    <div class="sim-result-grid" id="sim-result-grid"></div>
                </div>
            </div>
        `;

        // Slider value displays
        inputs.forEach((inp, i) => {
            if (inp.type === 'slider') {
                const slider = document.getElementById(`sim-input-${i}`);
                const display = document.getElementById(`sim-display-${i}`);
                slider.addEventListener('input', () => {
                    display.textContent = slider.value;
                });
            }
        });

        // Calculate button
        document.getElementById('sim-calc-btn').addEventListener('click', () => {
            const values = inputs.map((_, i) => {
                return parseFloat(document.getElementById(`sim-input-${i}`).value);
            });
            const results = calculate(values);
            const resultsContainer = document.getElementById('sim-results');
            const resultGrid = document.getElementById('sim-result-grid');

            resultGrid.innerHTML = resultLabels.map((label, i) => `
                <div class="sim-result-item">
                    <div class="sim-result-label">${label}</div>
                    <div class="sim-result-value">${results[i]}</div>
                </div>
            `).join('');

            resultsContainer.style.display = 'block';
            resultsContainer.classList.add('animate-in');
        });
    },

    /**
     * Render a canvas-based chart/graph
     * @param {string} containerId
     * @param {Object} config - { title, draw(canvas, ctx) }
     */
    renderChart(containerId, config) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = `
            <div class="simulator-container">
                <div class="simulator-title">📈 ${config.title}</div>
                ${config.controls || ''}
                <div class="sim-canvas-container">
                    <canvas id="${containerId}-canvas" class="sim-canvas"></canvas>
                </div>
            </div>
        `;

        const canvas = document.getElementById(`${containerId}-canvas`);
        const ctx = canvas.getContext('2d');

        // Set actual size
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * 2;
        canvas.height = rect.height * 2;
        ctx.scale(2, 2);

        if (config.draw) config.draw(canvas, ctx, rect.width, rect.height);

        return { canvas, ctx, width: rect.width, height: rect.height };
    },

    /**
     * Draw axes on a canvas
     */
    drawAxes(ctx, w, h, config = {}) {
        const margin = config.margin || { top: 30, right: 30, bottom: 50, left: 60 };
        const plotW = w - margin.left - margin.right;
        const plotH = h - margin.top - margin.bottom;

        ctx.strokeStyle = 'rgba(255,255,255,0.15)';
        ctx.lineWidth = 1;

        // Axes
        ctx.beginPath();
        ctx.moveTo(margin.left, margin.top);
        ctx.lineTo(margin.left, h - margin.bottom);
        ctx.lineTo(w - margin.right, h - margin.bottom);
        ctx.stroke();

        // Labels
        ctx.fillStyle = '#94a3b8';
        ctx.font = '12px "Noto Sans JP", sans-serif';
        ctx.textAlign = 'center';

        if (config.xLabel) {
            ctx.fillText(config.xLabel, margin.left + plotW / 2, h - 10);
        }

        if (config.yLabel) {
            ctx.save();
            ctx.translate(15, margin.top + plotH / 2);
            ctx.rotate(-Math.PI / 2);
            ctx.fillText(config.yLabel, 0, 0);
            ctx.restore();
        }

        // Grid lines
        if (config.xTicks) {
            config.xTicks.forEach(tick => {
                const x = margin.left + (tick.value - (config.xMin || 0)) / ((config.xMax || 1) - (config.xMin || 0)) * plotW;
                ctx.strokeStyle = 'rgba(255,255,255,0.05)';
                ctx.beginPath();
                ctx.moveTo(x, margin.top);
                ctx.lineTo(x, h - margin.bottom);
                ctx.stroke();
                ctx.fillStyle = '#64748b';
                ctx.fillText(tick.label, x, h - margin.bottom + 18);
            });
        }

        if (config.yTicks) {
            config.yTicks.forEach(tick => {
                const y = h - margin.bottom - (tick.value - (config.yMin || 0)) / ((config.yMax || 1) - (config.yMin || 0)) * plotH;
                ctx.strokeStyle = 'rgba(255,255,255,0.05)';
                ctx.beginPath();
                ctx.moveTo(margin.left, y);
                ctx.lineTo(w - margin.right, y);
                ctx.stroke();
                ctx.fillStyle = '#64748b';
                ctx.textAlign = 'right';
                ctx.fillText(tick.label, margin.left - 8, y + 4);
                ctx.textAlign = 'center';
            });
        }

        return { margin, plotW, plotH };
    },

    /**
     * Draw a line on chart
     */
    drawLine(ctx, points, w, h, config = {}) {
        const margin = config.margin || { top: 30, right: 30, bottom: 50, left: 60 };
        const plotW = w - margin.left - margin.right;
        const plotH = h - margin.top - margin.bottom;
        const xMin = config.xMin || 0;
        const xMax = config.xMax || 1;
        const yMin = config.yMin || 0;
        const yMax = config.yMax || 1;

        ctx.strokeStyle = config.color || '#60a5fa';
        ctx.lineWidth = config.lineWidth || 2;
        ctx.beginPath();

        points.forEach((pt, i) => {
            const x = margin.left + (pt[0] - xMin) / (xMax - xMin) * plotW;
            const y = h - margin.bottom - (pt[1] - yMin) / (yMax - yMin) * plotH;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });

        ctx.stroke();

        // Optional gradient fill
        if (config.fill) {
            const lastPt = points[points.length - 1];
            const firstPt = points[0];
            ctx.lineTo(margin.left + (lastPt[0] - xMin) / (xMax - xMin) * plotW, h - margin.bottom);
            ctx.lineTo(margin.left + (firstPt[0] - xMin) / (xMax - xMin) * plotW, h - margin.bottom);
            ctx.closePath();
            const gradient = ctx.createLinearGradient(0, margin.top, 0, h - margin.bottom);
            gradient.addColorStop(0, config.fill);
            gradient.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = gradient;
            ctx.fill();
        }
    },

    /**
     * Helper: Normal CDF approximation
     */
    normalCDF(x) {
        const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741;
        const a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
        const sign = x < 0 ? -1 : 1;
        x = Math.abs(x) / Math.sqrt(2);
        const t = 1.0 / (1.0 + p * x);
        const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
        return 0.5 * (1.0 + sign * y);
    },

    /**
     * Helper: Normal PDF
     */
    normalPDF(x) {
        return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
    },

    /**
     * Black-Scholes calculator
     */
    blackScholes(S, K, T, r, sigma, type = 'call') {
        if (T <= 0) {
            const intrinsic = type === 'call' ? Math.max(S - K, 0) : Math.max(K - S, 0);
            return { price: intrinsic, d1: 0, d2: 0, delta: type === 'call' ? (S > K ? 1 : 0) : (S < K ? -1 : 0), gamma: 0, vega: 0, theta: 0 };
        }
        const d1 = (Math.log(S / K) + (r + 0.5 * sigma * sigma) * T) / (sigma * Math.sqrt(T));
        const d2 = d1 - sigma * Math.sqrt(T);

        let price, delta;
        if (type === 'call') {
            price = S * this.normalCDF(d1) - K * Math.exp(-r * T) * this.normalCDF(d2);
            delta = this.normalCDF(d1);
        } else {
            price = K * Math.exp(-r * T) * this.normalCDF(-d2) - S * this.normalCDF(-d1);
            delta = this.normalCDF(d1) - 1;
        }

        const gamma = this.normalPDF(d1) / (S * sigma * Math.sqrt(T));
        const vega = S * this.normalPDF(d1) * Math.sqrt(T) / 100;
        const theta = (type === 'call' ?
            -S * this.normalPDF(d1) * sigma / (2 * Math.sqrt(T)) - r * K * Math.exp(-r * T) * this.normalCDF(d2) :
            -S * this.normalPDF(d1) * sigma / (2 * Math.sqrt(T)) + r * K * Math.exp(-r * T) * this.normalCDF(-d2)
        ) / 365;

        return { price, d1, d2, delta, gamma, vega, theta };
    }
};
