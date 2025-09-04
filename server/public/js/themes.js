const thumbnails = document.querySelector('.thumbs');

const back = document.querySelector('.back');

back.addEventListener('click', () => {
    window.history.back();
});

themesMap.forEach(t => {
    const thumb = document.createElement('div');
    thumb.className = 'thumb';
    thumb.style.backgroundImage = `url('${t.path}')`;
    thumb.dataset.name = t.id.replaceAll('-', ' ');
    thumb.addEventListener('click', () => {
        setTheme(t.id);
    });

    thumbnails.appendChild(thumb);
});

const setTheme = (id) => {
    const theme = themesMap.find(a => a.id === id);
    if (theme) {
        document.body.style.backgroundImage = `url('${theme.path}')`;
        document.documentElement.style.setProperty('--accent', theme.accent);
        document.documentElement.style.setProperty('--accent-hover', theme.hover);
    }

    localStorage.setItem('sekhmet.theme', id)
};