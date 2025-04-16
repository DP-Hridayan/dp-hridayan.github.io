const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
        const body = document.body;
        
        const setTheme = () => {
            if (mediaQuery.matches) {
                body.classList.add('light-mode');
            } else {
                body.classList.remove('light-mode');
            }
        };
        
        mediaQuery.addEventListener('change', setTheme);
        setTheme();

