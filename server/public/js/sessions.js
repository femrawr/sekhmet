const sessions = document.querySelector('.sessions');

const addSession = (name, id, platform, active) => {
    const sess = document.createElement('div');
    sess.className = 'session';
    sess.dataset.id = id;
    sess.dataset.pf = platform;

    sess.innerHTML = `
        <div class="top">
            <div class="title ${active ? 'yuh' : 'nuh'}">${name}</div>

            <div class="buttons">
                <button class="button edit"><img src="/assets/icons/edit.svg"></button>
                <button class="button delete"><img src="/assets/icons/delete.svg"></button>
            </div>
        </div>

        <div class="meta">platform: ${platform}</div>
        <div class="meta">id: <code>${id}</code></div>
    `;

    sess.addEventListener('click', (e) => {
        if (e.target.closest('.button')) return;
        window.location.href = `/pages/control.html?s=${encodeURIComponent(id)}`;
    });

    sess.querySelector('.edit').addEventListener('click', (e) => {
        e.stopPropagation();

        const old = sess.querySelector('.title');
        const now = prompt('Rename session:', old.textContent); // TODO
        if (now && now.trim()) old.textContent = now.trim();

        saveSessions(getSessions());
    });

    sess.querySelector('.delete').addEventListener('click', (e) => {
        e.stopPropagation(); // TODO; add warning
        sess.remove();

        saveSessions(getSessions());
    });

    sessions.appendChild(sess);
    saveSessions(getSessions());
};

const saveSessions = (list) => {
    localStorage.setItem('sekhmet.sessions', JSON.stringify(list));
};

const getSessions = () => {
    const array = Array.from(sessions.querySelectorAll('.session'));
    return array.map(ses => ({
        id: ses.dataset.id,
        name: ses.querySelector('.title').textContent,
        platform: ses.dataset.pf,
        status: ses.querySelector('.title').classList.contains('yuh')
    }));
};

(() => {
    const saved = localStorage.getItem('sekhmet.sessions');
    if (!saved) return;

    let parsed = null;
    try {
        parsed = JSON.parse(saved);
    } catch(_) {}

    if (!parsed.length) return;

    parsed.forEach(a => {
        addSession(
            a.name,
            a.id,
            a.platform,
            a.status
        );
    });
})();