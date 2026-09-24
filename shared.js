/* ─── DEFAULT CONFIGURATION ────────────────── */
const DEFAULT_CONFIG = {
  name: "Оля",
  age: 16,
  ageSuffix: "st",
  birthdayDate: "28-09-2010",
  heroSubtext: "Today the world became a brighter place — because you're in it. Wishing you the most magical birthday! 🌟",
  message: `Every memory we've made together is a treasure I keep close to my heart.
You light up every room you walk into, and the world is genuinely better because you're in it.

On this very special day, I want you to feel every ounce of love and joy that you deserve. Happy Birthday — here's to you, and to all the beautiful things still to come.`,
  messageSig: "-- With all my love 🌹",
  musicTitle: "Секретная песня",
  musicArtist: "Special Music Box",
  theme: "rose",
  wishes: [
    { icon: "🌸", text: "Доченька, солнышко моё, от всей души поздравляю тебя с Днем рождения!!!😘 Желаю тебе крепкого-крепкого здоровья, счастья, исполнения самых заветных желаний, отличного настроения, радости жизни, бодрости духа, оптимизма, большой силы воли, а еще везения и умения оказываться в нужный час в нужном месте!!!😘😘😘 Пусть тебя окружают преданные и надежные люди!!! Пусть тебя ценят на работе!!! Пусть Господь Бог ведет тебя по жизни!!!🙏 Ну, а я буду всегда рядом, всегда буду любить тебя, всегда буду молиться за тебя, буду твоим надежными плечом и тылом❤️❤️❤️ С твоим днем, моя родная!!!❤️😘 Отличного тебя дня, отличного путешествия, отличного настроения и ярких эмоций!!! P.s.с нетерпением жду дома!!!", author: "— От Мамы", color: "black" },
    { icon: "🌊", text: "Дорогая моя любимая доченька!!! Поздравляю тебя с Днем Рождения!!! Желаю тебе крепкого здоровья, большого жизненного счастья, приятных сюрпризов по жизни, спокойной планомерной интересной работы, большого финансового благополучия, интересных и хороших людей на твоем жизненном пути, много путешествий!!!! Чтобы ты всегда была спокойна душой и неутомима своими действиями активными по жизни!!! Мы тебя очень любим, поддерживаем во всем, верим в тебя!!! Обнимаю, целую крепко крепко!!!!!", author: "Твой любящий папа!", color: "black"},
    { icon: "🍀", text: "Поздравляю с Днем Рождения, желаю всего самого лучшего!!! Пусть сбываются все мечты, а каждый день будет наполнен счастьем и теплом.", author: "— От Максима", color: "black" },
    { icon: "✨", text: "Дорогая наша Оля! Ты не только фея крестная нашего Львенка, но и человек которого любит все наше семейство! Мы радуемся твоим спортивным победам, новым путешествиям и твоему умению находить и создавать счастливые моменты! Пусть твой задор, твоя настойчивость и целеустремленность помогут тебе и дальше создавать жизнь твоей мечты! Будь здорова, наша дорогая! И пусть твои мечты сбываются! ", author: "— Ганичевы Анюта, Андрей, Лева и Кирюша", color: "black" },
    { icon: "🎯", text: "Олечка! Поздравляю тебя с днём рождения! Ты человек-энергия, человек-движение, и все это на низком пульсе😅, в этом единственном плане мы с тобой не один человек 😂, но я стараюсь приблизиться))) Очень рада была узнать тебя 5 лет назад и только из-за тебя захотеть работать в нашей компании)) Желаю бесконечного счастья, бега в кайф всегда, даже если на личник, чтобы на работе все слушались, чтобы денег много, а работы поменьше, чтобы ходить в кафешки и заниматься любимыми делами 😉, чтобы еда только вкусная, чтобы близкие только радовали 🥰🥰🥰, ну разве что иногда, чтобы были поводы для крысиных историй, чтобы скучно не было))) Очень обнимаю! С днём рождения!!!!", author: "— Oт  Ани)", color: "black"},
    { icon: "🎊", text: "С днём рождения, дорогая! 🎉 Пусть этот год принесёт тебе много ярких моментов, исполнения желаний и поводов для улыбки. Оставайся такой же светлой, доброй и настоящей — с тобой всегда легко и тепло. Обнимаю крепко и желаю, чтобы всё задуманное получалось легко и в радость!", author: "— От Сабины❤️", color: "black" },
    { icon: "✨", text: "Сестра, пусть новый год твоей жизни будет щедрым на чудеса! ✨ Желаю, чтобы твои глаза всегда светились от счастья, а каждый твой день был наполнен теплом, любимыми людьми и делами, которые приносят радость. Пусть все будет так, как ты захочешь! С днем рождения! 🤗", author: "— От Олеси", color: "black" },
    { icon: "🍀", text: "Олечка, пупсичек, с днём Рождения! Желаю счастья, радости, веселья, остальное дорасскажу на 18 км😏", author: "— От Насти", color: "black" },
    { icon: "🎂", text: "Олечка, С Днем Рождения, дорогая! Желаю тебе побольше счастливых моментов,  легких километров и красивых маршрутов в жизни 🔥 а еще продолжай кайфовать от жизни, как ты это умеешь и не переставай нас радовать своей лучезарной улыбкой ☺️ а, и еще желаю побольше пирогов, шарлоток, велопокатоушек на рассвете, безумных поездок и верных друзей рядом, которые разделят с тобой любые моменты в твоей жизни! Люблю!", author: "— От Александра", color: "black" },
    { icon: "🌸", text: "Олечка, моя хорошенькая! Поздравляю тебя с днём рождения !🥹🫶🏻 Пусть у тебя в жизни будет много улыбок, тепла и замечательных моментов! Любвиииии🫰🏻✨Желаю искренних людей рядом и пусть твои мечты осуществляются! Всё самое лучшее в жизни ещё впереди!🤍 Спасибо тебе, что ты появилась в моей жизни, даришь мне так много времени и ярких моментов, поддерживаешь мои идеи, стремления. Столько всего уже вместе прошли!🌸🥹 Пусть бег будет всегда в удовольствие, а впереди ещё будет куча классных событий!🫰🏻✨ Улыбайся! А если будет тяжело, приходи к нам, мы тебя обнимем и поддержим!🫶🏻🫂 люблю, обнимаю! 🥰", author: "— От Алишы", color: "black" },
    { icon: "🌊", text: "Хорошо тебе доехать на своей машине из Москвы до Санкт-Петербурга🚗", author: "— От Никаноровых Дениса и Регины:", color: "black" },
    { icon: "✨", text: "Друг, поздравляю тебя с твоим личным новым годом, точно знаю, что ты вбежишь в него с новым личным рекордом. Пусть этот год будет полон новых путешествий, эмоций, МЕДАЛЕК, карандашиков, кружочков по подписке, восторга, уюта вечеров, смеха с друзьями и карты подорожник, работающей на оба города. Мы с оленями будем ждать тебя на колу, суп, квизы и фотоотчеты. Обнимаем!", author: "— Кешка, Сева и Сема", color: "black" }
  ],
  timeline: [
  { year: "2010", icon: "🎂", title: "Начинается первая глава", desc: "В тот день всё изменилось: ты появилась и покорила все сердца." },

  { year: "2017", icon: "🎒", title: "Первый день в школе", desc: "День когда началась не только школьная жизнь, но и наша дружба" },

  { year: "2025", icon: "💖", title: "Лучший человек", desc: "День когда ты обрела свою вторую половинку - Марка" },

  { year: "2025", icon: "🌈", title: "Выпускной", desc: "Самый грустный день - мы больше не учимся вместе" },

  { year: "2026", icon: "🧸", title: "Колледж", desc: "Новая глава - ты познакомилась с новыми людьми и нашла друзей" },
  
  { year: "28.09.2026", icon: "✨", title: "День рождения !", desc: "Сегодня мы отмечаем 16 лет радости, любви и бесчисленных драгоценных воспоминаний. С днем ​​рождения! 🎉" },
],
  photos: [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg",
    "images/pic5.jpg",
    "images/pic6.jpg",
    "images/pic7.jpg",
    "images/pic77.jpg",
    "images/pic8.jpg",
    "images/pic9.jpg"
  ]
};

// Load saved config from localStorage when available so uploads persist across pages
let activeConfig;
try {
  activeConfig = DEFAULT_CONFIG;
} catch (err) {
  activeConfig = DEFAULT_CONFIG;
}

// Ensure there is a photos array; don't overwrite existing user photos
if (!activeConfig.photos || !Array.isArray(activeConfig.photos) || activeConfig.photos.length === 0) {
  activeConfig.photos = DEFAULT_CONFIG.photos.slice();
}

// Ensure wishes are populated — merge defaults if saved config has empty or missing entries
if (!activeConfig.wishes || !Array.isArray(activeConfig.wishes) || activeConfig.wishes.length === 0) {
  activeConfig.wishes = DEFAULT_CONFIG.wishes.map(w => Object.assign({}, w));
} else {
  DEFAULT_CONFIG.wishes.forEach((w, i) => {
    if (!activeConfig.wishes[i]) {
      activeConfig.wishes[i] = Object.assign({}, w);
    } else {
      if (!activeConfig.wishes[i].text || activeConfig.wishes[i].text.trim() === "") {
        activeConfig.wishes[i].text = w.text;
      }
      if (!activeConfig.wishes[i].icon) activeConfig.wishes[i].icon = w.icon;
      if (!activeConfig.wishes[i].author) activeConfig.wishes[i].author = w.author;
      if (!activeConfig.wishes[i].color) activeConfig.wishes[i].color = w.color;
    }
  });
  // Persist merged changes so the UI reflects them immediately
  try { localStorage.setItem('bday_config', JSON.stringify(activeConfig)); } catch (e) { /* ignore storage errors */ }
}

function saveConfig() {
  localStorage.setItem('bday_config', JSON.stringify(activeConfig));
}

function applyTheme(themeName) {
  document.documentElement.setAttribute('data-theme', themeName || 'rose');
}

// Apply theme instantly on load
applyTheme(activeConfig.theme);

/* ─────────────────────────────────────
   SMOOTH CURSOR LERP
   ───────────────────────────────────── */
function initCursor() {
  const cur = document.getElementById("cursor");
  const trail = document.getElementById("cursor-trail");
  if (!cur || !trail) return;

  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  let curX = mouseX, curY = mouseY;
  let trailX = mouseX, trailY = mouseY;

  document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function tickCursor() {
    curX += (mouseX - curX) * 0.25;
    curY += (mouseY - curY) * 0.25;
    trailX += (mouseX - trailX) * 0.08;
    trailY += (mouseY - trailY) * 0.08;

    cur.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`;
    trail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0) translate(-50%, -50%)`;

    requestAnimationFrame(tickCursor);
  }
  requestAnimationFrame(tickCursor);

  // Hover effects
  document.addEventListener('mouseover', e => {
    if (e.target.closest('button, a, .wish-card, .polaroid-card, .cake, .gift-box, .ctrl-btn, .theme-opt, .color-btn, .icon-btn, .customizer-toggle, .digit-input, input, textarea, select')) {
      trail.style.width = '52px';
      trail.style.height = '52px';
      trail.style.borderColor = 'var(--primary)';
      trail.style.background = 'rgba(255, 79, 123, 0.08)';
      cur.style.transform = 'translate(-50%, -50%) scale(0.5)';
    }
  });

  document.addEventListener('mouseout', e => {
    if (e.target.closest('button, a, .wish-card, .polaroid-card, .cake, .gift-box, .ctrl-btn, .theme-opt, .color-btn, .icon-btn, .customizer-toggle, .digit-input, input, textarea, select')) {
      trail.style.width = '36px';
      trail.style.height = '36px';
      trail.style.borderColor = 'var(--secondary)';
      trail.style.background = 'none';
      cur.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  });

  document.addEventListener("mouseleave", () => {
    cur.style.opacity = 0;
    trail.style.opacity = 0;
  });
  document.addEventListener("mouseenter", () => {
    cur.style.opacity = 1;
    trail.style.opacity = 0.6;
  });
}

/* ─────────────────────────────────────
   BACKGROUND CANVAS PARTICLES
   ───────────────────────────────────── */
function initBackgroundCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  let fireworks = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.r = Math.random() * 2.5 + .5;
    this.vx = (Math.random() - .5) * .3;
    this.vy = (Math.random() - .5) * .3;
    this.c = ["#ff4f7b", "#ffd166", "#c77dff", "#ff9b6a"][Math.floor(Math.random() * 4)];
    this.a = Math.random() * .5 + .1;
  }

  for (let i = 0; i < 70; i++) particles.push(new Particle());

  window.createFirework = function (x, y) {
    const count = 60;
    const colors = ["#ff4f7b", "#ffd166", "#ff9b6a", "#c77dff", "#00ffff", "#ff007f", "#39ff14"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 1.5;
      fireworks.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color: color,
        r: Math.random() * 2 + 1
      });
    }
  };

  (function animBG() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background particles
    particles.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c; ctx.globalAlpha = p.a; ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });

    // Active fireworks particles
    fireworks.forEach((f, idx) => {
      ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fillStyle = f.color; ctx.globalAlpha = f.alpha; ctx.fill();
      f.x += f.vx;
      f.y += f.vy;
      f.vy += 0.04; // gravity
      f.alpha -= 0.012;

      if (f.alpha <= 0) {
        fireworks.splice(idx, 1);
      }
    });

    requestAnimationFrame(animBG);
  })();
}

/* ─────────────────────────────────────
   CONFETTI BURST EFFECT
   ───────────────────────────────────── */
function launchConfetti() {
  const colors = ["#ff4f7b", "#ffd166", "#c77dff", "#ff9b6a", "#fff", "#7dd3fc", "#52b788", "#ff007f"];
  for (let i = 0; i < 50; i++) {
    const p = document.createElement("div");
    p.className = "confetti-piece";
    p.style.cssText = `
      left: ${Math.random() * 100}vw;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      --tx: ${(Math.random() - 0.5) * 350}px;
      animation-duration: ${1.2 + Math.random() * 1.6}s;
      animation-delay: ${Math.random() * .3}s;
      transform: rotate(${Math.random() * 360}deg);
      width: ${4 + Math.random() * 6}px;
      height: ${7 + Math.random() * 9}px;
    `;
    document.body.appendChild(p);
    p.addEventListener("animationend", () => p.remove());
  }
}

/* ─────────────────────────────────────
   WEB AUDIO API SYNTHESIZER
   ───────────────────────────────────── */
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playBlowSound() {
  initAudio();
  if (!audioCtx) return;
  const startTime = audioCtx.currentTime;

  // White noise blast for puff sound
  const bufferSize = audioCtx.sampleRate * 0.12;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = audioCtx.createBufferSource();
  noise.buffer = buffer;

  const filter = audioCtx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(450, startTime);
  filter.Q.setValueAtTime(2.5, startTime);

  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0.08, startTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.11);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);

  noise.start(startTime);
  noise.stop(startTime + 0.12);
}

function playSuccessChime() {
  initAudio();
  if (!audioCtx) return;
  const startTime = audioCtx.currentTime;

  // Success Arpeggio: C5 -> E5 -> G5 -> C6
  const tones = [523.25, 659.25, 783.99, 1046.50];
  tones.forEach((freq, idx) => {
    const time = startTime + idx * 0.12;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.08, time + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.3);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(time);
    osc.stop(time + 0.35);
  });
}

// Initial calls on DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  initCursor();
  initBackgroundCanvas();
});

const openedAt = Date.now();

function updateCounter() {
  const elapsed = Math.floor((Date.now() - openedAt) / 1000);

  const days = Math.floor(elapsed / 86400);
  const hours = Math.floor((elapsed % 86400) / 3600);
  const minutes = Math.floor((elapsed % 3600) / 60);
  const seconds = elapsed % 60;

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCounter();
setInterval(updateCounter, 1000);
