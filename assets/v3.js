// Sara's Little Universe V3 — editorial botanical edition.
// This enhancement reuses and preserves the existing twelve-scene story and personal letter.
(function () {
  'use strict';
  const audioSource = './assets/sara-birthday-song.mp3';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const backgroundMelody = new Audio(embeddedSong);
  backgroundMelody.loop = true;
  backgroundMelody.volume = 0.20;
  backgroundMelody.preload = 'none';
  let backgroundWanted = false;
  let hasMusicGesture = false;
  const lyricPreview = ['يا سارة الغالية... يا نور العيون','كل عام وإنتِ بألف خير يا سارة','يا رب تحقيق الأماني والنجاح والسرور'];

  // Replace the original short instrumental in the birthday-song chapter with
  // the user's supplied recording; keep that original instrumental as a
  // separate OPTIONAL background melody throughout the website.
  music.audio.pause();
  music.audio.src = audioSource;
  music.audio.preload = 'metadata';
  music.audio.volume = 0.78;
  music.playing = false;
  music.requested = false;

  function fmtTime(seconds) {
    const time = Number.isFinite(seconds) ? Math.max(0, Math.floor(seconds)) : 0;
    return String(Math.floor(time / 60)).padStart(2, '0') + ':' + String(time % 60).padStart(2, '0');
  }
  function currentSongTime() {
    const d = music.audio.duration;
    return fmtTime(music.audio.currentTime) + ' / ' + fmtTime(Number.isFinite(d) ? d : 62.67);
  }
  function sprigSvg() {
    return '<svg viewBox="0 0 120 230" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M62 219C71 180 37 152 54 115S85 49 66 10" stroke="#94A28C" stroke-width="2.5" stroke-linecap="round"/>' +
      '<path d="M53 166C17 160 8 139 17 133C34 124 51 147 53 166Z" fill="#80968E" opacity=".83"/>' +
      '<path d="M57 146C93 140 111 124 102 114C83 107 63 129 57 146Z" fill="#92A88E" opacity=".78"/>' +
      '<path d="M51 116C15 104 12 87 23 81C39 76 53 97 51 116Z" fill="#B0BB9C" opacity=".84"/>' +
      '<path d="M62 93C96 89 111 67 101 62C85 54 66 74 62 93Z" fill="#8CA28D" opacity=".76"/>' +
      '<path d="M70 65C39 51 34 31 45 27C64 24 73 46 70 65Z" fill="#A9B19C" opacity=".75"/>' +
      '<g fill="#C78C9D">' + Array.from({length: 8}, (_, i) => {
        const x = 42 + (i % 3) * 9;
        const y = 31 + i * 18;
        return '<circle cx="' + x + '" cy="' + y + '" r="' + (i % 2 ? 4 : 5) + '"/>';
      }).join('') + '</g><g fill="#E2BD89"><circle cx="88" cy="43" r="3"/><circle cx="15" cy="173" r="3"/></g></svg>';
  }
  function recordView() {
    return '<div class="v3-song-layout">' +
      '<div id="song-disc" class="v3-record-shell ' + (music.playing ? 'playing' : '') + '" role="img" aria-label="أسطوانة أغنية عيد ميلاد سارة">' +
      '<div class="v3-record-label"><strong>Sara</strong><small>21 · 11</small></div></div>' +
      '<span class="v3-song-note a">♫</span><span class="v3-song-note b">♪</span>' +
      '<img class="v3-song-bloom" src="' + embeddedImages.bouquet + '" alt="" loading="lazy">' +
      '</div>';
  }
  function trackView() {
    return '<div class="v3-player">' +
      '<span class="v3-ribbon" dir="ltr">SPECIAL RECORDING · SARA · 21 NOV</span>' +
      '<h3>أغنيتج الحقيقية، يا سارة ♡</h3>' +
      '<p class="v3-song-note-copy">يا سارة الغالية... هالمرة الأغنية بصوت غنائي حقيقي، باسمج، وبأمنيات تخص يومج.</p>' +
      '<div class="song-track"><span id="song-fill"></span></div><p id="song-time" class="tiny-note">' + currentSongTime() + '</p>' +
      '<div class="audio-tools">' +
      btn(music.playing ? 'وقفيها مؤقتًا ❚❚' : 'شغّلي أغنيتج ♪', 'data-music-toggle id="song-btn"') +
      btn('من البداية ↻', 'data-music-restart', 'secondary') +
      '<label class="v3-song-caption" for="song-volume">الصوت <input type="range" min="0" max="1" step="0.05" value="' + music.audio.volume + '" id="song-volume" aria-label="صوت أغنية سارة"></label>' +
      '</div><p class="v3-song-caption">تشتغل باختياركِ فقط، وتكدرين تسمعين لحن الخلفية بشكل منفصل بكل فصل.</p>' +
      '</div>' + next('نكمل ونفتح الرسائل') ;
  }
  // Retain the same chapter index and data-action semantics for backwards compatibility.
  scenes[5] = function saraRecordedSongScene() {
    return scene('YOUR SONG · A REAL BIRTHDAY RECORDING', 'هذي الأغنية <em>إلج وحدج</em>',
      'بعد ما طفيتي الشمعة، عندج مفاجأة ثانية... أغنية مخصوصة باسمج يا أحلى دكتورة صيدلانية. 🤍',
      recordView(), trackView(), 'v3-song-scene');
  };

  function decorateCurrentChapter() {
    const site = document.querySelector('.site');
    if (!site) return;
    site.dataset.v3 = 'true';
    site.insertAdjacentHTML('beforeend', '<div class="v3-rose-watermark" aria-hidden="true">S.</div>');
    const visual = site.querySelector('.visual-side');
    if (visual && state.scene !== 8 && state.scene !== 11) {
      visual.insertAdjacentHTML('afterbegin',
        '<div class="v3-orbit" aria-hidden="true"></div>' +
        '<div class="v3-sprig one" aria-hidden="true">' + sprigSvg() + '</div>' +
        '<div class="v3-sprig two" aria-hidden="true">' + sprigSvg() + '</div>' +
        '<div class="v3-chapter-seal" aria-hidden="true"><b>S.</b><span>21 NOV</span></div>');
    }
    if (state.scene === 0 && visual) visual.insertAdjacentHTML('beforeend', '<div class="v3-hero-caption">made for one special girl</div>');
    if (state.scene === 1 && visual) visual.insertAdjacentHTML('beforeend', '<div class="v3-starlit-name" aria-hidden="true">For Sara</div>');
    if (state.scene === 3 && visual) visual.insertAdjacentHTML('beforeend', '<div class="v3-botanical-stamp">dr. sara · a little magic</div>');
    if (state.scene === 9 && visual) visual.insertAdjacentHTML('beforeend', '<div class="v3-memory-mark" aria-hidden="true">S.</div>');
    if (state.scene === 11) document.title = 'Happy Birthday, Sara ♡ · 21 November';
    else document.title = 'إلى سارة ♡ — ' + chapters[state.scene];
  }

  function audioDock() {
    const playingSong = !music.audio.paused && !music.audio.ended;
    const playingMelody = !backgroundMelody.paused;
    return '<aside class="v3-dock" role="group" aria-label="التحكم بموسيقى عيد الميلاد">' +
      '<div class="v3-equalizer ' + ((playingSong || playingMelody) ? 'playing' : '') + '" aria-hidden="true"><i></i><i></i><i></i><i></i></div>' +
      '<button data-v3-background class="' + (playingMelody ? 'active' : '') + '" aria-pressed="' + playingMelody + '" title="لحن عيد الميلاد، اختياري في جميع الفصول"><span class="v3-dock-icon">♫</span> ' + (playingMelody ? 'إيقاف اللحن' : 'لحن الخلفية') + '</button>' +
      '<button data-v3-song class="' + (playingSong ? 'active' : '') + '" aria-pressed="' + playingSong + '" title="تشغيل أو إيقاف أغنية سارة"><span class="v3-dock-icon">♡</span> ' + (playingSong ? 'إيقاف الأغنية' : 'أغنية سارة') + '</button>' +
      '<span id="v3-status">' + (playingSong ? currentSongTime() : playingMelody ? 'لحن هادئ' : 'الصوت اختياري') + '</span>' +
      '<label class="v3-audio-label" for="v3-master-vol">الصوت</label><input type="range" min="0" max="1" step="0.05" value="' + music.audio.volume + '" id="v3-master-vol" aria-label="التحكم بمستوى صوت الأغنية" />' +
      '</aside>';
  }
  function refreshDock() {
    const old = document.querySelector('.v3-dock');
    if (!old) return;
    const focusId = document.activeElement?.getAttribute('data-v3-song') !== null ? 'song' : (document.activeElement?.hasAttribute('data-v3-background') ? 'melody' : '');
    old.outerHTML = audioDock();
    if (focusId === 'song') document.querySelector('[data-v3-song]')?.focus({preventScroll: true});
    if (focusId === 'melody') document.querySelector('[data-v3-background]')?.focus({preventScroll: true});
  }
  const renderBase = renderShell;
  renderShell = function enhancedSaraShell(markup) {
    renderBase(markup);
    decorateCurrentChapter();
    // Add the sound dock outside the chapter so scene transitions never cancel audio.
    document.body.querySelector('.v3-dock')?.remove();
    document.body.insertAdjacentHTML('beforeend', audioDock());
    if (state.scene === 5) updateV3Time();
  };

  const baseGo = go;
  go = function enhancedGo(chapter) {
    const wasOnSong = state.scene === 5;
    baseGo(chapter);
    // Existing navigation deliberately pauses a scene-specific song when leaving it;
    // optional background ambience continues across all chapters.
    if (wasOnSong && chapter !== 5 && backgroundWanted && backgroundMelody.paused) {
      backgroundMelody.play().catch(() => {});
    }
    refreshDock();
  };

  function updateV3Time() {
    const time = document.querySelector('#song-time');
    if (time) time.textContent = currentSongTime();
    const dockStatus = document.querySelector('#v3-status');
    if (dockStatus && !music.audio.paused) dockStatus.textContent = currentSongTime();
  }
  function syncSongAndAmbient() {
    if (!music.audio.paused) {
      if (!backgroundMelody.paused) backgroundMelody.pause();
      music.playing = true;
      hasMusicGesture = true;
    } else {
      music.playing = false;
    }
    refreshDock();
    updateV3Time();
  }
  async function toggleBackground() {
    if (!backgroundMelody.paused) {
      backgroundWanted = false;
      backgroundMelody.pause();
      refreshDock();
      return;
    }
    backgroundWanted = true;
    hasMusicGesture = true;
    if (!music.audio.paused) {
      music.audio.pause();
      music.playing = false;
      updateSong();
    }
    try {
      await backgroundMelody.play();
      refreshDock();
    } catch (e) {
      backgroundWanted = false;
      toast('المتصفح منع الصوت؛ المسي الزر مرة ثانية حتى يشتغل ♡');
      refreshDock();
    }
  }
  async function toggleFullSong() {
    hasMusicGesture = true;
    if (!music.audio.paused) {
      music.audio.pause();
      music.playing = false;
      refreshDock();
      updateSong();
      if (backgroundWanted) backgroundMelody.play().catch(() => {});
      return;
    }
    if (!backgroundMelody.paused) backgroundMelody.pause();
    music.requested = true;
    try {
      if (music.audio.ended) music.audio.currentTime = 0;
      await music.audio.play();
      music.playing = true;
      updateSong();
      refreshDock();
    } catch (e) {
      toast('الأغنية ما قدرت تشتغل. تأكدي من الإنترنت وجربي مرة ثانية ♡');
      refreshDock();
    }
  }
  document.addEventListener('click', (event) => {
    const melody = event.target.closest('[data-v3-background]');
    if (melody) {
      event.preventDefault();
      toggleBackground();
      return;
    }
    const song = event.target.closest('[data-v3-song]');
    if (song) {
      event.preventDefault();
      toggleFullSong();
    }
  });
  document.addEventListener('input', (event) => {
    if (event.target.id !== 'v3-master-vol') return;
    music.audio.volume = Number(event.target.value);
    backgroundMelody.volume = Math.min(.5, Number(event.target.value) * .27);
    const sceneVolume = document.querySelector('#song-volume');
    if (sceneVolume) sceneVolume.value = event.target.value;
  });
  music.audio.addEventListener('loadedmetadata', updateV3Time);
  music.audio.addEventListener('timeupdate', updateV3Time);
  music.audio.addEventListener('play', syncSongAndAmbient);
  music.audio.addEventListener('pause', syncSongAndAmbient);
  music.audio.addEventListener('ended', () => {
    music.playing = false;
    if (backgroundWanted && hasMusicGesture) backgroundMelody.play().catch(() => {});
    refreshDock();
  });
  music.audio.addEventListener('error', () => {
    if (music.requested) toast('تعذّر تحميل أغنية سارة؛ جرّبي إعادة التشغيل مع الإنترنت ♡');
  });
  backgroundMelody.addEventListener('play', refreshDock);
  backgroundMelody.addEventListener('pause', refreshDock);
  document.addEventListener('click', (event) => {
    if (reduceMotion || event.target.closest('button, input, summary, a')) return;
    for (let i = 0; i < 4; i++) {
      const particle = document.createElement('i');
      particle.className = 'v3-spark';
      particle.style.left = event.clientX + 'px';
      particle.style.top = event.clientY + 'px';
      particle.style.setProperty('--dx', (Math.random() * 65 - 32) + 'px');
      particle.style.setProperty('--dy', (Math.random() * 65 - 52) + 'px');
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 850);
    }
  });
  // If background audio was left disabled, don't surprise the recipient with autoplay.
  render();
})();