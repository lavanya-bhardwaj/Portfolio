
const folderContent = {
  projects: `
    <p class="eyebrow">no. 01 — things i've built</p>
    <h3>projects</h3>

    <div class="project">
      <h4>RideX</h4>
      <p>A bike rental management platform with an admin panel — booking approvals, history logs, and a custom animated cursor. Built with Flask, PostgreSQL, and Bootstrap, deployed on Railway.</p>
      <a class="link" href="https://github.com/lavanya-bhardwaj/RideX" target="_blank" rel="noopener">view project →</a>
    </div>

  `,

  about: `
    <p class="eyebrow">no. 02 — the short version</p>
    <h3>about me</h3>
    <p>
      I'm a second-year CS student who spends about as much time debugging code
      as I used to spend blocking scenes for the stage. Theatre gave me the
      instinct for pacing and detail; code gives me somewhere to keep building
      things with it.
    </p>
    <p>
      I like projects with a point of view — a colour story, a bit of texture,
      something that feels made rather than assembled. When I'm not building,
      I'm usually directing something, arguing a case in a debate round, or
      collecting stories for my content channel.
    </p>
  `,

  contact: `
    <p class="eyebrow">no. 03 — say hello</p>
    <h3>contact</h3>
    <ul class="contact-list">
      <li><span>email</span><a class="link" href="mailto:[email protected]">lavanyabhardwaj1106@gmail.com</a></li>
      <li><span>github</span><a class="link" href="https://github.com/lavanya-bhardwaj" target="_blank" rel="noopener">github.com/lavanya-bhardwaj</a></li>
      <li><span>linkedin</span><a class="link" href="https://linkedin.com/in/lavanya-bhardwaj-codes" target="_blank" rel="noopener">linkedin.com/in/lavanya-bhardwaj-codes</a></li>
      <li><span>instagram</span><a class="link" href="https://instagram.com/lavya.mp4" target="_blank" rel="noopener">@thelavarchive</a></li>
    </ul>
  `,
};



const overlay = document.getElementById('overlay');
const paperContent = document.getElementById('paperContent');
const folders = document.querySelectorAll('.folder');

let lastFocused = null;

function openFolder(key) {
  const html = folderContent[key];
  if (!html) return;

  paperContent.innerHTML = html;
  lastFocused = document.activeElement;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  const closeBtn = overlay.querySelector('.paper-close');
  if (closeBtn) closeBtn.focus();
}

function closeOverlay() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}

folders.forEach((folder) => {
  folder.addEventListener('click', () => {
    openFolder(folder.dataset.folder);
  });
});

overlay.querySelectorAll('[data-close]').forEach((el) => {
  el.addEventListener('click', closeOverlay);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && overlay.classList.contains('open')) {
    closeOverlay();
  }
});
