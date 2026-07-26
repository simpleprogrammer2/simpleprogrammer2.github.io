document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.getElementById('theme-switcher');
    const savedTheme = localStorage.getItem('theme') || 'theme-modern';
    
    // Apply initial theme
    document.body.className = savedTheme;
    
    if (switcher) {
        switcher.value = savedTheme;
        switcher.addEventListener('change', (e) => {
            const theme = e.target.value;
            document.body.className = theme;
            localStorage.setItem('theme', theme);
        });
    }
});
