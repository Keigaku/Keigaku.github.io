// ===========================
// Progress Manager (localStorage)
// ===========================
const ProgressManager = {
    STORAGE_KEY: 'quant_training_progress',

    getAll() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : this.getDefault();
        } catch {
            return this.getDefault();
        }
    },

    getDefault() {
        return {
            completedDays: [],
            quizScores: {},
            startDate: null,
            lastVisit: null,
            totalTimeMinutes: 0,
            streak: 0
        };
    },

    save(data) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            console.warn('Failed to save progress:', e);
        }
    },

    completeDay(dayNum) {
        const data = this.getAll();
        if (!data.completedDays.includes(dayNum)) {
            data.completedDays.push(dayNum);
            data.completedDays.sort((a, b) => a - b);
        }
        this.save(data);
        return data;
    },

    uncompleteDay(dayNum) {
        const data = this.getAll();
        data.completedDays = data.completedDays.filter(d => d !== dayNum);
        this.save(data);
        return data;
    },

    isDayCompleted(dayNum) {
        return this.getAll().completedDays.includes(dayNum);
    },

    saveQuizScore(quizId, score, total) {
        const data = this.getAll();
        data.quizScores[quizId] = { score, total, date: new Date().toISOString() };
        this.save(data);
        return data;
    },

    getQuizScore(quizId) {
        return this.getAll().quizScores[quizId] || null;
    },

    getCompletedCount() {
        return this.getAll().completedDays.length;
    },

    getQuizzesPassed() {
        const data = this.getAll();
        return Object.values(data.quizScores).filter(q => q.score / q.total >= 0.6).length;
    },

    getProgressPercent() {
        const total = (typeof Navigation !== 'undefined' && Navigation.days) ? Navigation.days.length : 110;
        return Math.round((this.getCompletedCount() / total) * 100);
    },

    updateVisit() {
        const data = this.getAll();
        const now = new Date();
        const today = now.toDateString();

        if (!data.startDate) {
            data.startDate = now.toISOString();
        }

        if (data.lastVisit) {
            const lastDate = new Date(data.lastVisit).toDateString();
            if (lastDate !== today) {
                const lastDay = new Date(data.lastVisit);
                const diffMs = now - lastDay;
                const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
                if (diffDays <= 1) {
                    data.streak = (data.streak || 0) + 1;
                } else {
                    data.streak = 1;
                }
            }
        } else {
            data.streak = 1;
        }

        data.lastVisit = now.toISOString();
        this.save(data);
        return data;
    },

    addTime(minutes) {
        const data = this.getAll();
        data.totalTimeMinutes = (data.totalTimeMinutes || 0) + minutes;
        this.save(data);
    },

    getTotalTimeFormatted() {
        const data = this.getAll();
        const mins = data.totalTimeMinutes || 0;
        if (mins < 60) return `${mins}m`;
        const hours = Math.floor(mins / 60);
        const remainder = mins % 60;
        return remainder > 0 ? `${hours}h${remainder}m` : `${hours}h`;
    },

    getStreak() {
        return this.getAll().streak || 0;
    },

    reset() {
        localStorage.removeItem(this.STORAGE_KEY);
    }
};
