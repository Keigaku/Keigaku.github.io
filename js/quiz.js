// ===========================
// Quiz Engine
// ===========================
const QuizEngine = {
    /**
     * Render a quiz into a container element
     * @param {string} containerId - ID of the container element
     * @param {string} quizId - Unique quiz identifier for saving scores
     * @param {Array} questions - Array of question objects:
     *   { question: string, options: string[], correct: number, explanation: string }
     */
    render(containerId, quizId, questions) {
        const container = document.getElementById(containerId);
        if (!container) return;

        let currentQ = 0;
        let score = 0;
        let answered = new Array(questions.length).fill(false);
        let userAnswers = new Array(questions.length).fill(null);

        const renderQuestion = () => {
            const q = questions[currentQ];
            const isAnswered = answered[currentQ];

            container.innerHTML = `
                <div class="quiz-container">
                    <div class="quiz-header">
                        <div class="quiz-title">📝 確認クイズ</div>
                        <div class="quiz-progress-text">${currentQ + 1} / ${questions.length}</div>
                    </div>
                    <div class="quiz-question">
                        <div class="quiz-question-text">${q.question}</div>
                        <div class="quiz-options">
                            ${q.options.map((opt, i) => {
                let cls = 'quiz-option';
                if (isAnswered) {
                    cls += ' disabled';
                    if (i === q.correct) cls += ' correct';
                    else if (i === userAnswers[currentQ]) cls += ' incorrect';
                } else if (userAnswers[currentQ] === i) {
                    cls += ' selected';
                }
                const markers = ['A', 'B', 'C', 'D', 'E'];
                return `<button class="${cls}" data-index="${i}">
                                    <span class="quiz-option-marker">${markers[i]}</span>
                                    <span>${opt}</span>
                                </button>`;
            }).join('')}
                        </div>
                        ${isAnswered ? `<div class="quiz-explanation">💡 ${q.explanation}</div>` : ''}
                    </div>
                    <div class="quiz-actions">
                        <div class="quiz-score">正解: <strong>${score}</strong> / ${questions.length}</div>
                        <div style="display:flex;gap:0.5rem;">
                            ${currentQ > 0 ? '<button class="btn btn-secondary quiz-prev">← 前へ</button>' : ''}
                            ${isAnswered && currentQ < questions.length - 1 ? '<button class="btn btn-primary quiz-next">次へ →</button>' : ''}
                            ${isAnswered && currentQ === questions.length - 1 ? '<button class="btn btn-success quiz-finish">結果を見る</button>' : ''}
                        </div>
                    </div>
                </div>
            `;

            // Event listeners
            container.querySelectorAll('.quiz-option:not(.disabled)').forEach(btn => {
                btn.addEventListener('click', () => {
                    const idx = parseInt(btn.dataset.index);
                    if (!answered[currentQ]) {
                        userAnswers[currentQ] = idx;
                        answered[currentQ] = true;
                        if (idx === q.correct) score++;
                        renderQuestion();
                    }
                });
            });

            const prevBtn = container.querySelector('.quiz-prev');
            if (prevBtn) prevBtn.addEventListener('click', () => { currentQ--; renderQuestion(); });

            const nextBtn = container.querySelector('.quiz-next');
            if (nextBtn) nextBtn.addEventListener('click', () => { currentQ++; renderQuestion(); });

            const finishBtn = container.querySelector('.quiz-finish');
            if (finishBtn) finishBtn.addEventListener('click', () => renderResult());
        };

        const renderResult = () => {
            const percent = Math.round((score / questions.length) * 100);
            const passed = percent >= 60;
            ProgressManager.saveQuizScore(quizId, score, questions.length);

            let icon, title, message;
            if (percent === 100) {
                icon = '🏆'; title = 'パーフェクト！'; message = '素晴らしい！全問正解です！';
            } else if (percent >= 80) {
                icon = '🎉'; title = '優秀！'; message = 'よく理解できています！';
            } else if (percent >= 60) {
                icon = '👍'; title = '合格！'; message = '基礎はしっかり押さえています。';
            } else {
                icon = '📖'; title = 'もう少し！'; message = 'コンテンツを復習してもう一度挑戦しましょう。';
            }

            container.innerHTML = `
                <div class="quiz-container">
                    <div class="quiz-result">
                        <div class="quiz-result-icon">${icon}</div>
                        <div class="quiz-result-title">${title}</div>
                        <div class="quiz-result-score">${percent}%</div>
                        <div class="quiz-result-message">${message}（${score}/${questions.length}問正解）</div>
                        <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
                            <button class="btn btn-secondary quiz-retry">🔄 もう一度挑戦</button>
                            ${!passed ? '<button class="btn btn-primary quiz-review">📖 復習する</button>' : ''}
                        </div>
                    </div>
                </div>
            `;

            container.querySelector('.quiz-retry').addEventListener('click', () => {
                currentQ = 0; score = 0;
                answered = new Array(questions.length).fill(false);
                userAnswers = new Array(questions.length).fill(null);
                renderQuestion();
            });

            const reviewBtn = container.querySelector('.quiz-review');
            if (reviewBtn) {
                reviewBtn.addEventListener('click', () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }

            // Update dashboard stats if visible
            if (typeof App !== 'undefined' && App.updateStats) App.updateStats();
        };

        renderQuestion();
    },

    /**
     * Render a matching quiz (drag-and-drop style with click)
     */
    renderMatching(containerId, quizId, pairs) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Shuffle the right column
        const shuffledRight = [...pairs].sort(() => Math.random() - 0.5);
        let selectedLeft = null;
        let matchedPairs = [];
        let matchedCount = 0;

        const render = () => {
            container.innerHTML = `
                <div class="quiz-container">
                    <div class="quiz-header">
                        <div class="quiz-title">🔗 マッチングクイズ</div>
                        <div class="quiz-progress-text">${matchedCount} / ${pairs.length} 完了</div>
                    </div>
                    <p style="color:var(--text-muted);font-size:0.85rem;margin-bottom:1rem;">
                        左の用語をクリックしてから、対応する右の説明をクリックしてください。
                    </p>
                    <div class="matching-container">
                        <div class="matching-column">
                            <h4>用語</h4>
                            ${pairs.map((p, i) => {
                let cls = 'matching-item';
                if (matchedPairs.includes(i)) cls += ' matched';
                else if (selectedLeft === i) cls += ' selected';
                return `<div class="${cls}" data-left="${i}">${p.term}</div>`;
            }).join('')}
                        </div>
                        <div class="matching-column">
                            <h4>説明</h4>
                            ${shuffledRight.map((p, i) => {
                const origIdx = pairs.indexOf(p);
                let cls = 'matching-item';
                if (matchedPairs.includes(origIdx)) cls += ' matched';
                return `<div class="${cls}" data-right="${origIdx}">${p.definition}</div>`;
            }).join('')}
                        </div>
                    </div>
                    ${matchedCount === pairs.length ? `
                        <div class="quiz-result" style="margin-top:1rem;">
                            <div class="quiz-result-icon">🎉</div>
                            <div class="quiz-result-title">全ペア完成！</div>
                            <div class="quiz-result-message">よくできました！</div>
                        </div>
                    ` : ''}
                </div>
            `;

            container.querySelectorAll('.matching-item:not(.matched)').forEach(item => {
                item.addEventListener('click', () => {
                    if (item.dataset.left !== undefined) {
                        selectedLeft = parseInt(item.dataset.left);
                        render();
                    } else if (item.dataset.right !== undefined && selectedLeft !== null) {
                        const rightIdx = parseInt(item.dataset.right);
                        if (rightIdx === selectedLeft) {
                            matchedPairs.push(selectedLeft);
                            matchedCount++;
                            selectedLeft = null;
                            if (matchedCount === pairs.length) {
                                ProgressManager.saveQuizScore(quizId, pairs.length, pairs.length);
                            }
                        } else {
                            item.classList.add('wrong');
                            setTimeout(() => { item.classList.remove('wrong'); }, 400);
                            selectedLeft = null;
                        }
                        render();
                    }
                });
            });
        };

        render();
    }
};
