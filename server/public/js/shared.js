const themesMap = [
    {
        id: 'forest',
        path: '/assets/backgrounds/forest.jpg',
        accent: 'rgba(88, 166, 255, 0.3)',
        hover: 'rgba(57, 181, 253, 0.8)'
    },
    {
        id: 'green-house',
        path: '/assets/backgrounds/green-house.jpg',
        accent: 'rgba(86,211,100,0.35)',
        hover: 'rgba(255, 236, 113, 0.75)'
    },
    {
        id: 'purple-leaves',
        path: '/assets/backgrounds/purple-leaves.jpg',
        accent: 'rgba(168,98,255,0.35)',
        hover: 'rgba(255, 81, 214, 0.8)'
    },
    {
        id: 'sky',
        path: '/assets/backgrounds/sky.jpg',
        accent: 'rgba(255, 0, 85, 0.4)',
        hover: 'rgba(255, 0, 85, 0.75)'
    }
];

(() => {
    const saved = localStorage.getItem('sekhmet.theme');
    const theme = themesMap.find(a => a.id === saved);
    if (theme) {
        document.body.style.backgroundImage = `url('${theme.path}')`;
        document.documentElement.style.setProperty('--accent', theme.accent);
        document.documentElement.style.setProperty('--accent-hover', theme.hover);
    }
})();

document.querySelectorAll('input').forEach(el => {
    el.setAttribute('spellcheck', 'false');
});