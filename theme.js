const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const body = document.body;
        
        const setTheme = () => {
            if (mediaQuery.matches) {
                body.classList.add('dark-mode');
            } else {
                body.classList.remove('dark-mode');
            }
        };
        
        mediaQuery.addEventListener('change', setTheme);
        setTheme();

