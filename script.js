    function toggleTheme() {
      const current = document.documentElement.getAttribute('data-theme');
      if (current === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
    }

    (function() {
      const saved = localStorage.getItem('theme');
      if (saved) document.documentElement.setAttribute('data-theme', saved);
    })();

    function createNyan() {
      const cat = document.createElement('img');
      cat.src = 'https://i.redd.it/k5v48axtppqc1.jpeg';
      cat.classList.add('cat');

      cat.style.left = `${Math.random() * window.innerWidth}px`;
      const duration = Math.random() * 3 + 3; // 3–6s
      cat.style.animationDuration = `${duration}s`;

      document.body.appendChild(cat);

      setTimeout(() => {
        cat.remove();
      }, duration * 1000);
    }

    setInterval(createNyan, 2000);
