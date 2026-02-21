// ===========================
// App Initialization
// ===========================
const App = {
    init() {
        // Track visit
        ProgressManager.updateVisit();

        // Start time tracking
        this.startTimeTracking();

        // Initialize navigation
        Navigation.init();

        // Splash screen
        setTimeout(() => {
            const splash = document.getElementById('splash');
            splash.classList.add('fade-out');
            document.getElementById('app').classList.remove('hidden');

            setTimeout(() => splash.remove(), 600);
        }, 1800);
    },

    startTimeTracking() {
        // Track time every 5 minutes
        setInterval(() => {
            ProgressManager.addTime(5);
            Navigation.updateProgressUI();
        }, 5 * 60 * 1000);
    },

    updateStats() {
        Navigation.updateProgressUI();
    }
};

// Start the app
document.addEventListener('DOMContentLoaded', () => App.init());
