document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle-btn');
    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    
    // Set initial mode
    if (savedTheme === 'light-mode') {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
    
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isLight = document.body.classList.toggle('light-mode');
            const newTheme = isLight ? 'light-mode' : 'dark-mode';
            localStorage.setItem('theme', newTheme);
        });
    }
});
