const logs = document.querySelector('.logs');
const bar = document.querySelector('.command-bar');
const input = document.querySelector('.input');

const sessions = document.querySelector('.sessions');
const themes = document.querySelector('.themes');

sessions.addEventListener('click', () => {
    window.location.href = '/pages/sessions.html';
});

themes.addEventListener('click', () => {
    window.location.href = '/pages/themes.html';
});

document.addEventListener('keydown', (e) => {
    if (e.key === ';' || e.key === ':' && !bar.classList.contains('active')) {
        e.preventDefault();

        bar.classList.add('active');
        input.focus();
    } else if (e.key === 'Escape' && bar.classList.contains('active')) {
        bar.classList.remove('active');
    }
});

input.addEventListener('blur', () => {
    bar.classList.remove('active');
});

input.addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') return;

    const command = input.value.trim();
    if (!command) return;

    switch (command) {
        case 'clear':
            logs.innerHTML = '';
            break;

        default:
            sendToServer('cmd!' + command);
    }

    input.value = '';
    bar.classList.remove('active');
    logs.scrollTop = logs.scrollHeight;
});

const addLog = (text, type) => {
    const line = document.createElement('div');
    line.className = 'log';
    line.innerHTML = `
        <span class="${type}">${text}</span>
    `;

    logs.appendChild(line);
};