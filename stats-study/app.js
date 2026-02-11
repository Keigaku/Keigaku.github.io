// ===== App State =====
const state = {
    currentView: 'reference',
    searchQuery: '',
    quizCategories: new Set(),
    quizItems: [],
    quizIndex: 0,
    quizAnswerShown: false,
    score: { correct: 0, wrong: 0 }
};

// ===== DOM Elements =====
const DOM = {
    navTabs: document.querySelectorAll('.nav-tab'),
    viewReference: document.getElementById('view-reference'),
    viewQuiz: document.getElementById('view-quiz'),
    searchInput: document.getElementById('search-input'),
    referenceList: document.getElementById('reference-list'),
    quizCategoriesEl: document.getElementById('quiz-categories'),
    quizQuestion: document.getElementById('quiz-question'),
    quizCategory: document.getElementById('quiz-category'),
    quizProgress: document.getElementById('quiz-progress'),
    quizAnswer: document.getElementById('quiz-answer'),
    quizAnswerText: document.getElementById('quiz-answer-text'),
    quizSupplement: document.getElementById('quiz-supplement'),
    quizSupplementText: document.getElementById('quiz-supplement-text'),
    quizActions: document.getElementById('quiz-actions'),
    btnShowAnswer: document.getElementById('btn-show-answer'),
    scoreCorrect: document.getElementById('score-correct'),
    scoreWrong: document.getElementById('score-wrong'),
    scoreRate: document.getElementById('score-rate'),
    scoreProgress: document.getElementById('score-progress')
};

// ===== Initialization =====
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initReferenceView();
    initQuizView();
    initSearch();
});

// ===== KaTeX Rendering =====
function renderMath(element) {
    if (typeof renderMathInElement !== 'undefined') {
        renderMathInElement(element, {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '\\(', right: '\\)', display: false },
                { left: '\\[', right: '\\]', display: true }
            ],
            throwOnError: false
        });
    }
}

// Retry rendering until KaTeX is loaded
function renderMathWhenReady(element) {
    if (typeof renderMathInElement !== 'undefined') {
        renderMath(element);
    } else {
        setTimeout(() => renderMathWhenReady(element), 100);
    }
}

// ===== Navigation =====
function initNavigation() {
    DOM.navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const view = tab.dataset.view;
            switchView(view);
        });
    });
}

function switchView(view) {
    state.currentView = view;

    DOM.navTabs.forEach(t => {
        t.classList.toggle('active', t.dataset.view === view);
    });

    DOM.viewReference.classList.toggle('active', view === 'reference');
    DOM.viewQuiz.classList.toggle('active', view === 'quiz');
}

// ===== Reference View =====
function initReferenceView() {
    renderReferenceList();
}

function renderReferenceList(filter = '') {
    const container = DOM.referenceList;
    container.innerHTML = '';
    const lowerFilter = filter.toLowerCase();

    STATS_DATA.forEach(category => {
        const filteredItems = category.items.filter(item => {
            if (!filter) return true;
            return (
                item.question.toLowerCase().includes(lowerFilter) ||
                item.answer.toLowerCase().includes(lowerFilter) ||
                item.supplement.toLowerCase().includes(lowerFilter)
            );
        });

        if (filteredItems.length === 0) return;

        const section = document.createElement('div');
        section.className = 'category';

        const header = document.createElement('div');
        header.className = 'category__header';
        header.innerHTML = `
      <span class="category__icon">${category.icon}</span>
      <span class="color-indicator" style="background:${category.color}"></span>
      <span class="category__name">${category.name}</span>
      <span class="category__count">${filteredItems.length}問</span>
      <span class="category__toggle">▼</span>
    `;

        header.addEventListener('click', () => {
            section.classList.toggle('open');
        });

        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'category__items';

        filteredItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'item-card';
            card.style.borderLeftColor = category.color;

            card.innerHTML = `
        <div class="item-card__question">${item.question}</div>
        <div class="item-card__answer">${item.answer}</div>
        <div class="item-card__supplement">${item.supplement}</div>
      `;

            itemsContainer.appendChild(card);
        });

        section.appendChild(header);
        section.appendChild(itemsContainer);
        container.appendChild(section);

        // Open first category by default if searching
        if (filter) {
            section.classList.add('open');
        }
    });

    if (container.children.length === 0) {
        container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state__icon">🔍</div>
        <div class="empty-state__text">「${filter}」に一致する項目が見つかりません</div>
      </div>
    `;
    }

    renderMathWhenReady(container);
}

// ===== Search =====
function initSearch() {
    let debounceTimer;
    DOM.searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            state.searchQuery = e.target.value.trim();
            renderReferenceList(state.searchQuery);
        }, 250);
    });
}

// ===== Quiz View =====
function initQuizView() {
    renderQuizCategories();
    DOM.btnShowAnswer.addEventListener('click', showQuizAnswer);
}

function renderQuizCategories() {
    const container = DOM.quizCategoriesEl;
    container.innerHTML = '';

    // "All" button
    const allBtn = document.createElement('button');
    allBtn.className = 'quiz-category-btn';
    allBtn.textContent = '🎯 全カテゴリ';
    allBtn.addEventListener('click', () => {
        state.quizCategories.clear();
        STATS_DATA.forEach(c => state.quizCategories.add(c.id));
        updateQuizCategoryButtons();
        startQuiz();
    });
    container.appendChild(allBtn);

    STATS_DATA.forEach(category => {
        const btn = document.createElement('button');
        btn.className = 'quiz-category-btn';
        btn.dataset.categoryId = category.id;
        btn.textContent = `${category.icon} ${category.name}`;
        btn.addEventListener('click', () => {
            if (state.quizCategories.has(category.id)) {
                state.quizCategories.delete(category.id);
            } else {
                state.quizCategories.add(category.id);
            }
            updateQuizCategoryButtons();
            if (state.quizCategories.size > 0) {
                startQuiz();
            }
        });
        container.appendChild(btn);
    });
}

function updateQuizCategoryButtons() {
    const buttons = DOM.quizCategoriesEl.querySelectorAll('[data-category-id]');
    buttons.forEach(btn => {
        btn.classList.toggle('active', state.quizCategories.has(btn.dataset.categoryId));
    });
    // Update "all" button
    const allBtn = DOM.quizCategoriesEl.querySelector('.quiz-category-btn:first-child');
    allBtn.classList.toggle('active', state.quizCategories.size === STATS_DATA.length);
}

// ===== Quiz Logic =====
function startQuiz() {
    // Gather items
    state.quizItems = [];
    STATS_DATA.forEach(category => {
        if (state.quizCategories.has(category.id)) {
            category.items.forEach(item => {
                state.quizItems.push({
                    ...item,
                    categoryName: category.name,
                    categoryIcon: category.icon,
                    categoryColor: category.color
                });
            });
        }
    });

    // Shuffle
    shuffleArray(state.quizItems);

    // Reset
    state.quizIndex = 0;
    state.quizAnswerShown = false;
    state.score = { correct: 0, wrong: 0 };
    updateScore();
    showCurrentQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showCurrentQuestion() {
    if (state.quizIndex >= state.quizItems.length) {
        showQuizComplete();
        return;
    }

    const item = state.quizItems[state.quizIndex];
    state.quizAnswerShown = false;

    DOM.quizCategory.innerHTML = `<span class="color-indicator" style="background:${item.categoryColor}"></span> ${item.categoryIcon} ${item.categoryName}`;
    DOM.quizProgress.textContent = `${state.quizIndex + 1} / ${state.quizItems.length}`;
    DOM.quizQuestion.innerHTML = item.question;
    DOM.quizAnswerText.innerHTML = item.answer;
    DOM.quizSupplementText.innerHTML = item.supplement;

    DOM.quizAnswer.classList.remove('visible');
    DOM.quizSupplement.classList.remove('visible');

    DOM.quizActions.innerHTML = `
    <button class="btn btn-primary" id="btn-show-answer" onclick="showQuizAnswer()">💡 答えを見る</button>
  `;

    renderMathWhenReady(DOM.quizQuestion);
}

function showQuizAnswer() {
    if (state.quizAnswerShown) return;
    state.quizAnswerShown = true;

    DOM.quizAnswer.classList.add('visible');
    DOM.quizSupplement.classList.add('visible');

    renderMathWhenReady(DOM.quizAnswer);
    renderMathWhenReady(DOM.quizSupplement);

    DOM.quizActions.innerHTML = `
    <button class="btn btn-success" onclick="quizJudge(true)">⭕ 正解</button>
    <button class="btn btn-danger" onclick="quizJudge(false)">❌ 不正解</button>
  `;
}

function quizJudge(correct) {
    if (correct) {
        state.score.correct++;
    } else {
        state.score.wrong++;
    }
    updateScore();

    state.quizIndex++;
    showCurrentQuestion();
}

function updateScore() {
    const { correct, wrong } = state.score;
    const total = correct + wrong;
    const rate = total > 0 ? Math.round((correct / total) * 100) : 0;

    DOM.scoreCorrect.textContent = correct;
    DOM.scoreWrong.textContent = wrong;
    DOM.scoreRate.textContent = total > 0 ? `${rate}%` : '--%';
    DOM.scoreProgress.style.width = total > 0 ? `${rate}%` : '0%';
}

function showQuizComplete() {
    const { correct, wrong } = state.score;
    const total = correct + wrong;
    const rate = total > 0 ? Math.round((correct / total) * 100) : 0;

    let emoji = '🎉';
    let message = 'パーフェクト！素晴らしい！';
    if (rate < 100) { emoji = '👏'; message = '頑張りました！'; }
    if (rate < 80) { emoji = '💪'; message = 'もう少し復習しましょう！'; }
    if (rate < 60) { emoji = '📚'; message = '基礎から復習しましょう！'; }

    DOM.quizCategory.textContent = '';
    DOM.quizProgress.textContent = '';
    DOM.quizQuestion.innerHTML = `
    <div style="font-size:3rem; margin-bottom:16px">${emoji}</div>
    <div style="font-size:1.4rem; margin-bottom:8px">クイズ完了！</div>
    <div style="font-size:1rem; color:var(--text-secondary)">${message}</div>
    <div style="margin-top:16px; font-size:1.5rem; font-weight:700; color:var(--accent-5)">${rate}%（${correct}/${total}）</div>
  `;
    DOM.quizAnswer.classList.remove('visible');
    DOM.quizSupplement.classList.remove('visible');
    DOM.quizActions.innerHTML = `
    <button class="btn btn-primary" onclick="startQuiz()">🔄 もう一度</button>
  `;
}
