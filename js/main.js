(function () {
  /* Edit this list with Trevor's YouTube video IDs:
     From https://youtube.com/watch?v=XXXX the id is XXXX
     uploaded = YYYYMMDD; views/likes/duration from YouTube metadata snapshot */
  var watchVideos = [
    { id: "6orMh-1dKTw", title: "Andrew Lloyd Webber: Requiem — Pie Jesu", uploaded: "20240406", views: 2710, likes: 3, duration: 132 },
    { id: "_OvmxhJYbRA", title: "Lili Boulanger: Pie Jesu", uploaded: "20240406", views: 1130, likes: 3, duration: 281 },
    { id: "a1oXlzh6flY", title: "Oliver Knussen: Horn Concerto, Op. 28 (NY Premiere)", uploaded: "20240406", views: 16755, likes: 27, duration: 796 },
    { id: "DfTg0ztApfo", title: "Gabriel Fauré: Requiem — Pie Jesu", uploaded: "20240406", views: 2353, likes: 3, duration: 223 },
    { id: "2-2h8vi77uc", title: "Improvisation on a Gregorian Chant — Kyrie IX", uploaded: "20240406", views: 2034, likes: 6, duration: 478 },
    { id: "3RziXCFrMrE", title: "Eugene Bozza: En Forêt, Op. 40", uploaded: "20240406", views: 12809, likes: 9, duration: 351 },
    { id: "Z_OaiAuX5uk", title: "Nicolas-Charles Bochsa: Fantasie, Op. 72 — Andante sostenuto", uploaded: "20240406", views: 1060, likes: 4, duration: 382 },
    { id: "ovQtMQpdslI", title: "Samuel Barber: Summer Music, Op. 31", uploaded: "20240407", views: 396, likes: 3, duration: 770 },
    { id: "rpgh6XoBXWg", title: "Mozart: Serenade in E-flat major, K. 375 (with Radovan Vlatković)", uploaded: "20240407", views: 2702, likes: 5, duration: 1462 },
    { id: "yzSDKamV4QU", title: "Edgard Varèse: Octandre", uploaded: "20240407", views: 486, likes: 1, duration: 484 },
    { id: "Rmjo5H2t-vM", title: "Michael Kamen: Theme from Band of Brothers", uploaded: "20240408", views: 1435, likes: 22, duration: 141 },
    { id: "DYu_8sLEdSs", title: "Mozart: Horn Concerto No. 2, K. 417", uploaded: "20240410", views: 8231, likes: 53, duration: 819 },
    { id: "cdrAtM6_qXs", title: "J.S. Bach: Wachet auf, ruft uns die Stimme", uploaded: "20240412", views: 459, likes: 4, duration: 291 },
    { id: "131A6_MQtHo", title: "Esa-Pekka Salonen: Concert étude", uploaded: "20240823", views: 4050, likes: 5, duration: 467 },
    { id: "H2-D-lQjAEM", title: "Hans Zimmer: Interstellar — No Time for Caution", uploaded: "20240825", views: 1427, likes: 9, duration: 230 },
    { id: "FjX5Nr9rYWo", title: "Francis Poulenc: Élégie, FP 168", uploaded: "20240901", views: 287, likes: 6, duration: 578 },
    { id: "zHxRipclPaY", title: "Open Rehearsal — Fauré Pie Jesu", uploaded: "20240923", views: 301, likes: 12, duration: 39 },
    { id: "X1ns5rSm4Kc", title: "Richard Strauss: Andante in C major, TrV 155", uploaded: "20250705", views: 133, likes: 6, duration: 249 },
    { id: "bYIz7Bm5D9I", title: "Franz Strauss: Nocturno, Op. 7", uploaded: "20250705", views: 141, likes: 8, duration: 305 },
    { id: "OEoEwsz8FaU", title: "Carl Reinecke: Notturno, Op. 112", uploaded: "20250705", views: 173, likes: 6, duration: 267 },
    { id: "iZEIQ56UmY4", title: "Camille Saint-Saëns: Romance, Op. 36", uploaded: "20250717", views: 3956, likes: 6, duration: 210 },
    { id: "oruIMMeh1FM", title: "Camille Saint-Saëns: The Swan (Le Cygne)", uploaded: "20250717", views: 7681, likes: 13, duration: 163 },
    { id: "Fo5_NR0W7os", title: "Richard Strauss: Andante in C major, TrV 155", uploaded: "20250718", views: 585, likes: 4, duration: 249 },
    { id: "J4r9eVvIRpc", title: "Franz Strauss: Nocturno, Op. 7", uploaded: "20250719", views: 15966, likes: 9, duration: 305 },
    { id: "82IilPhTA-U", title: "Carl Reinecke: Notturno, Op. 112", uploaded: "20250720", views: 893, likes: 6, duration: 267 },
    { id: "P6shC74VSbA", title: "Reinhold Glière: Romance, Op. 35 No. 6", uploaded: "20250814", views: 1169, likes: 3, duration: 201 },
    { id: "imXqGItAA5s", title: "Sergei Rachmaninoff: Vocalise, Op. 34 No. 14", uploaded: "20250814", views: 2043, likes: 10, duration: 369 },
    { id: "2vrtI-GFPVQ", title: "Bach / Gounod: Ave Maria", uploaded: "20250814", views: 623, likes: 15, duration: 316 },
    { id: "LZQoUbOJdGU", title: "Reinhold Glière: Valse triste, Op. 35 No. 7", uploaded: "20250815", views: 2074, likes: 11, duration: 169 },
    { id: "23pf3RXA-yc", title: "Reinhold Glière: Intermezzo, Op. 35 No. 11", uploaded: "20260114", views: 133, likes: 4, duration: 129 },
    { id: "IijxKj5BIno", title: "Richard Strauss: Morgen, Op. 27 No. 4", uploaded: "20260114", views: 133, likes: 2, duration: 202 },
    { id: "llEigNcnopI", title: "Jules Massenet: Méditation from Thaïs", uploaded: "20260114", views: 278, likes: 9, duration: 296 },
    { id: "AduYVQt64TE", title: "Franz Schubert: Ständchen, D. 957", uploaded: "20260203", views: 251, likes: 12, duration: 250 },
    { id: "qQG70S8CO60", title: "Alexander Scriabin: Romance for horn and piano", uploaded: "20260203", views: 301, likes: 13, duration: 114 },
    { id: "vSNMoOcdy2U", title: "Jerry Goldsmith: Love Theme from Chinatown", uploaded: "20260203", views: 237, likes: 8, duration: 133 },
    { id: "AmhvclbPrB0", title: "Franz Schubert: Ave Maria, D. 839", uploaded: "20260531", views: 77, likes: 0, duration: 389 },
    { id: "L4b3h7sFKN8", title: "Franz Strauss: Nocturno, Op. 7", uploaded: "20260531", views: 76, likes: 0, duration: 354 },
    { id: "N_df3LT1DB0", title: "Erik Satie: Gymnopédie No. 1", uploaded: "20260531", views: 145, likes: 0, duration: 197 },
    { id: "QNEVfezTtUM", title: "Maurice Ravel: Pavane pour une infante défunte", uploaded: "20260531", views: 84, likes: 0, duration: 352 },
    { id: "Ws9e_YQHNvA", title: "Richard Strauss: Andante in C major, TrV 155", uploaded: "20260531", views: 146, likes: 0, duration: 271 }
  ];

  /* SoundCloud track ids from https://soundcloud.com/horncalls
     Titles are shortened for the on-site list; urls are the public permalinks. */
  var audioTracks = [
    { id: 2206646511, title: "Sergei Rachmaninoff: Vocalise, Op. 34 No. 14", url: "https://soundcloud.com/horncalls/sergei-rachmaninoff-vocalise-op-34-no-14-trevor-nuckols-horn-linda-avery-piano-4", duration: 369 },
    { id: 2206646507, title: "Franz Strauss: Nocturno, Op. 7", url: "https://soundcloud.com/horncalls/franz-strauss-nocturno-op-7-trevor-nuckols-horn-linda-avery-horn-live-8", duration: 305 },
    { id: 2206646503, title: "Reinhold Glière: Romance, Op. 35 No. 6", url: "https://soundcloud.com/horncalls/reinhold-gliere-romance-op-35-no-6-trevor-nuckols-horn-linda-avery-piano-9", duration: 202 },
    { id: 2206646499, title: "Bach / Gounod: Ave Maria", url: "https://soundcloud.com/horncalls/bach-gounod-ave-maria-trevor-nuckols-horn-linda-avery-piano-3", duration: 316 },
    { id: 2206646495, title: "Camille Saint-Saëns: Romance, Op. 36", url: "https://soundcloud.com/horncalls/camille-saint-saens-romance-op-36-trevor-nuckols-horn-linda-avery-piano-live-2", duration: 210 },
    { id: 2206646491, title: "Richard Strauss: Andante in C major, TrV 155", url: "https://soundcloud.com/horncalls/richard-strauss-andante-in-c-major-trv-155-trevor-nuckols-horn-linda-avery-piano-live-6", duration: 249 },
    { id: 2206646487, title: "Carl Reinecke: Notturno, Op. 112", url: "https://soundcloud.com/horncalls/carl-reinecke-notturno-op-112-trevor-nuckols-horn-linda-avery-piano-7", duration: 267 },
    { id: 2206646483, title: "Camille Saint-Saëns: The Swan (Le Cygne)", url: "https://soundcloud.com/horncalls/camille-saint-saens-the-swan-le-cygne-trevor-nuckols-horn-linda-avery-piano-1", duration: 163 },
    { id: 2206646479, title: "Reinhold Glière: Valse triste, Op. 35 No. 7", url: "https://soundcloud.com/horncalls/reinhold-gliere-valse-triste-op-35-no-7-trevor-nuckols-horn-linda-avery-piano-5", duration: 169 },
    { id: 1795383964, title: "Edgard Varèse: Octandre", url: "https://soundcloud.com/horncalls/vareseoctandre", duration: 484 },
    { id: 1795369417, title: "Samuel Barber: Summer Music, Op. 31", url: "https://soundcloud.com/horncalls/barbersummermusic", duration: 770 },
    { id: 1795365436, title: "Mozart: Serenade in E-flat major, K. 375", url: "https://soundcloud.com/horncalls/mozartserenade375", duration: 1462 },
    { id: 1794749227, title: "Michael Kamen: Theme from Band of Brothers", url: "https://soundcloud.com/horncalls/bandofbrothers", duration: 141 },
    { id: 1794736618, title: "Andrew Lloyd Webber: Requiem — Pie Jesu", url: "https://soundcloud.com/horncalls/andrewlloydwebberpiejesu", duration: 132 },
    { id: 1794672628, title: "Oliver Knussen: Horn Concerto, Op. 28 (NY Premiere)", url: "https://soundcloud.com/horncalls/knussenhornconcerto", duration: 796 },
    { id: 1794631855, title: "Nicolas-Charles Bochsa: Fantasie, Op. 72 — Andante sostenuto", url: "https://soundcloud.com/horncalls/bochsafantasie", duration: 382 }
  ];

  watchVideos.forEach(function (video, index) {
    video.order = index;
  });

  var gunbarrel = document.getElementById("gunbarrel");
  if (gunbarrel) {
    var GUNBARREL_KEY = "horncalls-seen-intro";
    var seenIntro = false;
    try {
      seenIntro = window.localStorage.getItem(GUNBARREL_KEY) === "1";
    } catch (err) {
      /* ignore */
    }
    if (seenIntro) {
      gunbarrel.remove();
    } else {
      try {
        window.localStorage.setItem(GUNBARREL_KEY, "1");
      } catch (err) {
        /* ignore */
      }
      window.setTimeout(function () {
        gunbarrel.remove();
      }, 2200);
    }
  }

  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  initLightbox();
  initWatchTabs();
  initWatchGallery(watchVideos);
  initAudioPlaylist(audioTracks);

  function initWatchTabs() {
    var tabs = document.querySelectorAll("[data-watch-tab]");
    var panels = document.querySelectorAll("[data-watch-panel]");
    if (!tabs.length || !panels.length) return;

    function activate(name) {
      tabs.forEach(function (tab) {
        var on = tab.getAttribute("data-watch-tab") === name;
        tab.classList.toggle("is-active", on);
        tab.setAttribute("aria-selected", on ? "true" : "false");
        tab.tabIndex = on ? 0 : -1;
      });
      panels.forEach(function (panel) {
        var on = panel.getAttribute("data-watch-panel") === name;
        panel.hidden = !on;
      });
      if (name === "audio") {
        document.dispatchEvent(new CustomEvent("horncalls:pause-watch"));
      }
      if (name === "video") {
        document.dispatchEvent(new CustomEvent("horncalls:pause-audio"));
      }
    }

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        activate(tab.getAttribute("data-watch-tab"));
      });
      tab.addEventListener("keydown", function (event) {
        var keys = ["ArrowLeft", "ArrowRight", "Home", "End"];
        if (keys.indexOf(event.key) === -1) return;
        event.preventDefault();
        var list = Array.prototype.slice.call(tabs);
        var index = list.indexOf(tab);
        var next = index;
        if (event.key === "ArrowRight") next = (index + 1) % list.length;
        if (event.key === "ArrowLeft") next = (index - 1 + list.length) % list.length;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = list.length - 1;
        list[next].focus();
        activate(list[next].getAttribute("data-watch-tab"));
      });
    });
  }

  function formatAudioTime(seconds) {
    seconds = Math.max(0, Math.floor(seconds || 0));
    var m = Math.floor(seconds / 60);
    var s = seconds % 60;
    return m + ":" + (s < 10 ? "0" : "") + s;
  }

  function initAudioPlaylist(tracks) {
    var list = document.getElementById("audio-list");
    var iframe = document.getElementById("sc-widget");
    if (!list || !iframe || !tracks.length) return;

    var ICON_PLAY =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
    var ICON_PAUSE =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>';
    var ICON_VOL =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10v4h4l5 5V5L7 10H3zm13.5 2a3.5 3.5 0 0 0-1.8-3.1v6.2A3.5 3.5 0 0 0 16.5 12zm0-7.2v2.1a5.5 5.5 0 0 1 0 10.2v2.1a7.5 7.5 0 0 0 0-14.4z"/></svg>';
    var ICON_MUTE =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.5 12a3.5 3.5 0 0 0-1.8-3.1v2.3l1.7 1.7c.07-.29.1-.59.1-.9zm3.0-7.2v2.1c1.2 1.3 1.9 3 1.9 5.1s-.7 3.8-1.9 5.1v2.1a7.5 7.5 0 0 0 0-14.4zM4.3 3 3 4.3 7.7 9H3v4h4l5 5v-6.7l4.7 4.7c-.5.4-1.1.7-1.7.9v2.1c1 .3 2.1.4 3.2.2l2.5 2.5 1.3-1.3L4.3 3zM14 3.7v2.1l-1.9 1.9V3.7L14 3.7z"/></svg>';

    var rows = [];
    var widget = null;
    var widgetReady = false;
    var activeIndex = -1;
    var playing = false;
    var muted = false;
    var durationMs = 0;
    var seekDragging = false;

    tracks.forEach(function (track, index) {
      var item = document.createElement("li");
      item.className = "audio-item";
      item.dataset.index = String(index);

      var title = document.createElement("h3");
      title.className = "audio-item-title";
      var num = document.createElement("span");
      num.className = "audio-item-num";
      num.textContent = (index + 1 < 10 ? "0" : "") + (index + 1) + ".";
      title.appendChild(num);
      title.appendChild(document.createTextNode(" " + track.title));

      var player = document.createElement("div");
      player.className = "audio-player";

      var playBtn = document.createElement("button");
      playBtn.type = "button";
      playBtn.className = "audio-play";
      playBtn.setAttribute("aria-label", "Play " + track.title);
      playBtn.innerHTML = ICON_PLAY;

      var seek = document.createElement("input");
      seek.type = "range";
      seek.className = "audio-seek";
      seek.min = "0";
      seek.max = "1000";
      seek.value = "0";
      seek.step = "1";
      seek.setAttribute("aria-label", "Seek " + track.title);

      var time = document.createElement("span");
      time.className = "audio-time";
      time.textContent = "0:00 / " + formatAudioTime(track.duration || 0);

      var muteBtn = document.createElement("button");
      muteBtn.type = "button";
      muteBtn.className = "audio-mute";
      muteBtn.setAttribute("aria-label", "Mute");
      muteBtn.innerHTML = ICON_VOL;

      player.appendChild(playBtn);
      player.appendChild(seek);
      player.appendChild(time);
      player.appendChild(muteBtn);
      item.appendChild(title);
      item.appendChild(player);
      list.appendChild(item);

      rows.push({
        track: track,
        item: item,
        playBtn: playBtn,
        seek: seek,
        time: time,
        muteBtn: muteBtn
      });

      playBtn.addEventListener("click", function () {
        toggleTrack(index);
      });

      seek.addEventListener("pointerdown", function () {
        seekDragging = true;
      });
      seek.addEventListener("pointerup", function () {
        commitSeek(index);
      });
      seek.addEventListener("change", function () {
        commitSeek(index);
      });
      muteBtn.addEventListener("click", function () {
        toggleMute();
      });
    });

    function commitSeek(index) {
      seekDragging = false;
      if (index !== activeIndex || !widget || !widgetReady || !durationMs) return;
      var ratio = Number(rows[index].seek.value) / 1000;
      widget.seekTo(Math.floor(durationMs * ratio));
    }

    function setRowPlaying(index, isPlaying) {
      rows.forEach(function (row, i) {
        var on = i === index && isPlaying;
        row.item.classList.toggle("is-playing", on);
        row.playBtn.innerHTML = on ? ICON_PAUSE : ICON_PLAY;
        row.playBtn.setAttribute(
          "aria-label",
          (on ? "Pause " : "Play ") + row.track.title
        );
      });
    }

    function setRowLoading(index, loading) {
      rows.forEach(function (row, i) {
        row.item.classList.toggle("is-loading", i === index && loading);
      });
    }

    function updateTimeDisplay(index, positionMs, totalMs) {
      var row = rows[index];
      if (!row) return;
      var total = totalMs || (row.track.duration || 0) * 1000;
      row.time.textContent =
        formatAudioTime(positionMs / 1000) + " / " + formatAudioTime(total / 1000);
      if (!seekDragging && total > 0) {
        row.seek.value = String(Math.round((positionMs / total) * 1000));
      }
    }

    function bindWidget() {
      if (!window.SC || !window.SC.Widget) return false;
      if (widget) return true;
      widget = window.SC.Widget(iframe);
      widget.bind(window.SC.Widget.Events.READY, function () {
        widgetReady = true;
        widget.setVolume(muted ? 0 : 100);
      });
      widget.bind(window.SC.Widget.Events.PLAY, function () {
        playing = true;
        setRowLoading(activeIndex, false);
        setRowPlaying(activeIndex, true);
        document.dispatchEvent(new CustomEvent("horncalls:pause-watch"));
      });
      widget.bind(window.SC.Widget.Events.PAUSE, function () {
        playing = false;
        setRowPlaying(activeIndex, false);
      });
      widget.bind(window.SC.Widget.Events.FINISH, function () {
        playing = false;
        setRowPlaying(activeIndex, false);
        if (activeIndex >= 0) {
          updateTimeDisplay(activeIndex, 0, durationMs);
          rows[activeIndex].seek.value = "0";
        }
      });
      widget.bind(window.SC.Widget.Events.PLAY_PROGRESS, function (data) {
        if (activeIndex < 0) return;
        if (data.relativePosition) {
          durationMs = data.currentPosition / data.relativePosition;
        }
        updateTimeDisplay(activeIndex, data.currentPosition, durationMs);
      });
      return true;
    }

    function ensureWidget(callback) {
      if (bindWidget()) {
        callback();
        return;
      }
      var tries = 0;
      var timer = window.setInterval(function () {
        tries += 1;
        if (bindWidget() || tries > 50) {
          window.clearInterval(timer);
          callback();
        }
      }, 100);
    }

    function playIndex(index) {
      var track = tracks[index];
      if (!track || !widget) return;

      document.dispatchEvent(new CustomEvent("horncalls:pause-watch"));
      activeIndex = index;
      setRowLoading(index, true);
      setRowPlaying(index, false);

      widget.load(track.url, {
        auto_play: true,
        callback: function () {
          widgetReady = true;
          setRowLoading(index, false);
          widget.getDuration(function (ms) {
            durationMs = ms || (track.duration || 0) * 1000;
            updateTimeDisplay(index, 0, durationMs);
          });
          widget.setVolume(muted ? 0 : 100);
          widget.play();
        }
      });
    }

    function toggleTrack(index) {
      ensureWidget(function () {
        if (!widget) return;
        if (index === activeIndex && playing) {
          widget.pause();
          return;
        }
        if (index === activeIndex && !playing) {
          document.dispatchEvent(new CustomEvent("horncalls:pause-watch"));
          widget.play();
          return;
        }
        playIndex(index);
      });
    }

    function toggleMute() {
      muted = !muted;
      rows.forEach(function (row) {
        row.muteBtn.innerHTML = muted ? ICON_MUTE : ICON_VOL;
        row.muteBtn.setAttribute("aria-label", muted ? "Unmute" : "Mute");
      });
      if (widget && widgetReady) {
        widget.setVolume(muted ? 0 : 100);
      }
    }

    document.addEventListener("horncalls:pause-audio", function () {
      if (widget && playing) {
        try {
          widget.pause();
        } catch (err) {
          /* ignore */
        }
      }
    });

    ensureWidget(function () {});
  }

  function initLightbox() {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    var closeBtn = document.getElementById("lightbox-close");
    if (!lightbox || !lightboxImg || !closeBtn) return;

    function openLightbox(src, alt) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || "";
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      closeBtn.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
      lightboxImg.src = "";
      lightboxImg.alt = "";
    }

    document.querySelectorAll(".gallery-item").forEach(function (item) {
      item.addEventListener("click", function () {
        var img = item.querySelector("img");
        openLightbox(
          item.getAttribute("data-full") || (img && img.src),
          (img && img.alt) || item.getAttribute("aria-label") || ""
        );
      });
    });

    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeLightbox();
    });
  }

  function initWatchGallery(videos) {
    var grid = document.getElementById("watch-grid");
    var sortSelect = document.getElementById("watch-sort");
    if (!grid) return;

    if (!videos || !videos.length) {
      grid.innerHTML =
        '<p class="watch-empty">Videos coming soon. Meanwhile, visit ' +
        '<a href="https://youtube.com/@horncalls" target="_blank" rel="noopener noreferrer">@horncalls on YouTube</a>.</p>';
      return;
    }

    var players = [];
    var observer = null;
    var VOLUME_STORAGE_KEY = "horncalls-watch-volume";
    var sharedVolume = { volume: 100, muted: false };
    var volumePollId = null;
    var activePlayerIndex = -1;
    var volumeUiDragging = false;
    var isTouchApple =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    loadSharedVolume();

    document.addEventListener("horncalls:pause-watch", function () {
      players.forEach(function (player) {
        if (player && typeof player.pauseVideo === "function") {
          try {
            player.pauseVideo();
          } catch (err) {
            /* ignore */
          }
        }
      });
      stopVolumePoll();
      activePlayerIndex = -1;
      setPlayingControls(-1);
    });

    function loadSharedVolume() {
      try {
        var raw = window.localStorage.getItem(VOLUME_STORAGE_KEY);
        if (!raw) return;
        var parsed = JSON.parse(raw);
        if (typeof parsed.volume === "number" && !isNaN(parsed.volume)) {
          sharedVolume.volume = Math.max(0, Math.min(100, parsed.volume));
        }
        if (typeof parsed.muted === "boolean") {
          sharedVolume.muted = parsed.muted;
        }
      } catch (err) {
        /* private mode / blocked storage */
      }
    }

    function saveSharedVolume() {
      try {
        window.localStorage.setItem(VOLUME_STORAGE_KEY, JSON.stringify(sharedVolume));
      } catch (err) {
        /* ignore */
      }
    }

    function applyVolumeToPlayer(player) {
      if (!player || typeof player.setVolume !== "function") return;
      try {
        player.setVolume(sharedVolume.volume);
        if (sharedVolume.muted || sharedVolume.volume === 0) {
          if (typeof player.mute === "function") player.mute();
        } else if (typeof player.unMute === "function") {
          player.unMute();
        }
      } catch (err) {
        /* player not ready */
      }
    }

    function applyVolumeToAll(exceptIndex) {
      players.forEach(function (player, index) {
        if (index === exceptIndex) return;
        applyVolumeToPlayer(player);
      });
    }

    function syncVolumeUi() {
      grid.querySelectorAll(".watch-controls").forEach(function (controls) {
        var slider = controls.querySelector(".watch-volume-slider");
        var muteBtn = controls.querySelector(".watch-mute");
        if (slider && !volumeUiDragging) {
          slider.value = String(sharedVolume.volume);
          slider.setAttribute("aria-valuenow", String(sharedVolume.volume));
        }
        if (muteBtn) {
          var muted = sharedVolume.muted || sharedVolume.volume === 0;
          muteBtn.setAttribute("aria-pressed", muted ? "true" : "false");
          muteBtn.classList.toggle("is-muted", muted);
          muteBtn.setAttribute("aria-label", muted ? "Unmute" : "Mute");
        }
      });
    }

    function setSharedVolume(volume, muted) {
      sharedVolume.volume = Math.max(0, Math.min(100, volume));
      if (typeof muted === "boolean") sharedVolume.muted = muted;
      saveSharedVolume();
      applyVolumeToAll(-1);
      syncVolumeUi();
    }

    function captureVolumeFromPlayer(player, sourceIndex) {
      if (volumeUiDragging) return;
      if (!player || typeof player.getVolume !== "function") return;
      try {
        var volume = player.getVolume();
        if (typeof volume !== "number" || isNaN(volume)) return;
        var muted = typeof player.isMuted === "function" ? !!player.isMuted() : false;
        var nextVolume = Math.max(0, Math.min(100, volume));
        if (nextVolume === sharedVolume.volume && muted === sharedVolume.muted) return;
        sharedVolume.volume = nextVolume;
        sharedVolume.muted = muted;
        saveSharedVolume();
        applyVolumeToAll(sourceIndex);
        syncVolumeUi();
      } catch (err) {
        /* ignore */
      }
    }

    function startVolumePoll(index) {
      stopVolumePoll();
      activePlayerIndex = index;
      volumePollId = window.setInterval(function () {
        var player = players[activePlayerIndex];
        if (!player) return;
        captureVolumeFromPlayer(player, activePlayerIndex);
      }, 400);
    }

    function stopVolumePoll() {
      if (volumePollId !== null) {
        window.clearInterval(volumePollId);
        volumePollId = null;
      }
    }

    function bindVolumeControls(controls, index) {
      var slider = controls.querySelector(".watch-volume-slider");
      var muteBtn = controls.querySelector(".watch-mute");

      if (slider) {
        slider.addEventListener("pointerdown", function () {
          volumeUiDragging = true;
        });
        slider.addEventListener("pointerup", function () {
          volumeUiDragging = false;
        });
        slider.addEventListener("pointercancel", function () {
          volumeUiDragging = false;
        });
        slider.addEventListener("input", function () {
          var value = Number(slider.value);
          setSharedVolume(value, value === 0);
        });
        slider.addEventListener("change", function () {
          volumeUiDragging = false;
          var value = Number(slider.value);
          setSharedVolume(value, value === 0);
        });
      }

      if (muteBtn) {
        muteBtn.addEventListener("click", function () {
          var currentlyMuted = sharedVolume.muted || sharedVolume.volume === 0;
          if (currentlyMuted) {
            var restore = sharedVolume.volume > 0 ? sharedVolume.volume : 60;
            setSharedVolume(restore, false);
          } else {
            setSharedVolume(sharedVolume.volume, true);
          }
        });
      }
    }

    function sortVideos(mode) {
      var list = videos.slice();
      if (mode === "newest") {
        list.sort(function (a, b) {
          return String(b.uploaded || "").localeCompare(String(a.uploaded || "")) || a.order - b.order;
        });
      } else if (mode === "oldest") {
        list.sort(function (a, b) {
          return String(a.uploaded || "").localeCompare(String(b.uploaded || "")) || a.order - b.order;
        });
      } else if (mode === "views") {
        list.sort(function (a, b) {
          return (b.views || 0) - (a.views || 0) || a.order - b.order;
        });
      } else if (mode === "likes") {
        list.sort(function (a, b) {
          return (b.likes || 0) - (a.likes || 0) || a.order - b.order;
        });
      } else {
        list.sort(function (a, b) {
          return a.order - b.order;
        });
      }
      return list;
    }

    function formatViews(n) {
      n = Number(n) || 0;
      if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, "") + "M views";
      if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "K views";
      return n + " views";
    }

    function formatUploaded(ymd) {
      if (!ymd || String(ymd).length !== 8) return "";
      var s = String(ymd);
      var months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
      var month = months[Number(s.slice(4, 6)) - 1] || "";
      return month + " " + Number(s.slice(6, 8)) + ", " + s.slice(0, 4);
    }

    function destroyPlayers() {
      stopVolumePoll();
      activePlayerIndex = -1;
      players.forEach(function (player) {
        if (player && typeof player.destroy === "function") {
          try {
            player.destroy();
          } catch (err) {
            /* ignore */
          }
        }
      });
      players = [];
      if (observer) {
        observer.disconnect();
        observer = null;
      }
    }

    function render(mode) {
      destroyPlayers();
      grid.innerHTML = "";
      var pendingFrames = [];
      var sorted = sortVideos(mode);

      sorted.forEach(function (video, index) {
        var card = document.createElement("article");
        card.className = "watch-card";

        var title = document.createElement("h3");
        title.textContent = video.title || "Performance";
        card.appendChild(title);

        var meta = document.createElement("p");
        meta.className = "watch-meta";
        var bits = [];
        var uploadedLabel = formatUploaded(video.uploaded);
        if (uploadedLabel) bits.push(uploadedLabel);
        if (typeof video.views === "number") bits.push(formatViews(video.views));
        meta.textContent = bits.join(" · ");
        if (bits.length) card.appendChild(meta);

        var frame = document.createElement("div");
        frame.className = "watch-frame";

        var iframe = document.createElement("iframe");
        iframe.id = "yt-player-" + index;
        iframe.title = video.title || "YouTube video";
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute(
          "allow",
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        );
        iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
        iframe.setAttribute("loading", "lazy");
        iframe.dataset.videoId = video.id;
        iframe.dataset.playerIndex = String(index);
        frame.appendChild(iframe);

        var controls = document.createElement("div");
        controls.className = "watch-controls";
        controls.hidden = true;
        controls.innerHTML =
          '<button type="button" class="watch-skip watch-skip-back" data-skip="-10" data-player-index="' +
          index +
          '" aria-label="Rewind 10 seconds">' +
          '<svg class="watch-skip-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
          '<path d="M11.5 12L18 7v10l-6.5-5zm-7 0L11 7v10l-6.5-5z" fill="currentColor"/>' +
          "</svg>" +
          '<span class="watch-skip-label">10</span>' +
          "</button>" +
          '<div class="watch-volume">' +
          '<button type="button" class="watch-mute" aria-pressed="false" aria-label="Mute">' +
          '<svg class="watch-mute-icon watch-mute-on" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
          '<path d="M4 9v6h3l5 4V5L7 9H4zm11.5 3a3.5 3.5 0 0 0-1.8-3.1v6.2A3.5 3.5 0 0 0 15.5 12zm0-7.2v2.1a5.5 5.5 0 0 1 0 10.2v2.1a7.5 7.5 0 0 0 0-14.4z" fill="currentColor"/>' +
          "</svg>" +
          '<svg class="watch-mute-icon watch-mute-off" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
          '<path d="M4 9v6h3l5 4V5L7 9H4zm12.5 1.1l1.4-1.4 1.4 1.4 1.4-1.4-1.4-1.4 1.4-1.4-1.4-1.4-1.4 1.4-1.4-1.4-1.4 1.4 1.4 1.4-1.4 1.4 1.4 1.4z" fill="currentColor"/>' +
          "</svg>" +
          "</button>" +
          '<label class="watch-volume-label" for="watch-volume-' +
          index +
          '"><span class="visually-hidden">Volume</span></label>' +
          '<input id="watch-volume-' +
          index +
          '" class="watch-volume-slider" type="range" min="0" max="100" step="1" value="' +
          sharedVolume.volume +
          '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' +
          sharedVolume.volume +
          '" aria-label="Volume">' +
          "</div>" +
          '<button type="button" class="watch-skip watch-skip-fwd" data-skip="10" data-player-index="' +
          index +
          '" aria-label="Forward 10 seconds">' +
          '<span class="watch-skip-label">10</span>' +
          '<svg class="watch-skip-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
          '<path d="M12.5 12L6 7v10l6.5-5zm7 0L13 7v10l6.5-5z" fill="currentColor"/>' +
          "</svg>" +
          "</button>" +
          (isTouchApple
            ? '<p class="watch-volume-hint">On iPhone and iPad, use the side volume buttons.</p>'
            : "");
        frame.appendChild(controls);
        card.appendChild(frame);

        grid.appendChild(card);
        pendingFrames.push(iframe);

        controls.querySelectorAll(".watch-skip").forEach(function (btn) {
          btn.addEventListener("click", function () {
            var idx = Number(btn.getAttribute("data-player-index"));
            var delta = Number(btn.getAttribute("data-skip"));
            skipPlayer(idx, delta);
          });
        });
        bindVolumeControls(controls, index);
      });

      if ("IntersectionObserver" in window) {
        observer = new IntersectionObserver(
          function (entries, obs) {
            var ready = [];
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                ready.push(entry.target);
                obs.unobserve(entry.target);
              }
            });
            if (ready.length) activateIframes(ready);
          },
          { rootMargin: "200px 0px" }
        );
        pendingFrames.forEach(function (iframe) {
          observer.observe(iframe);
        });
      } else {
        activateIframes(pendingFrames);
      }
    }

    function skipPlayer(index, delta) {
      var player = players[index];
      if (!player || typeof player.getCurrentTime !== "function") return;
      try {
        var current = player.getCurrentTime() || 0;
        var duration = 0;
        if (typeof player.getDuration === "function") {
          duration = player.getDuration() || 0;
        }
        var next = Math.max(0, current + delta);
        if (duration > 0) next = Math.min(duration, next);
        player.seekTo(next, true);
      } catch (err) {
        /* ignore until player ready */
      }
    }

    function embedSrc(videoId) {
      var params = "enablejsapi=1&rel=0&modestbranding=1&playsinline=1";
      if (window.location.protocol === "http:" || window.location.protocol === "https:") {
        params += "&origin=" + encodeURIComponent(window.location.origin);
      }
      return (
        "https://www.youtube-nocookie.com/embed/" +
        encodeURIComponent(videoId) +
        "?" +
        params
      );
    }

    function loadYouTubeApi(callback) {
      if (window.YT && window.YT.Player) {
        callback();
        return;
      }
      var previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function () {
        if (typeof previous === "function") previous();
        callback();
      };
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        var tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
      }
    }

    function setPlayingControls(activeIndex) {
      var cards = grid.querySelectorAll(".watch-card");
      cards.forEach(function (card, cardIndex) {
        var controls = card.querySelector(".watch-controls");
        var isActive = activeIndex === cardIndex;
        card.classList.toggle("is-playing", isActive);
        if (controls) controls.hidden = !isActive;
      });
      if (activeIndex >= 0) syncVolumeUi();
    }

    function bindPlayer(iframe) {
      if (iframe.dataset.ytBound === "1") return;
      iframe.dataset.ytBound = "1";
      var index = Number(iframe.dataset.playerIndex);
      var player = new window.YT.Player(iframe.id, {
        events: {
          onReady: function (event) {
            applyVolumeToPlayer(event.target);
          },
          onStateChange: function (event) {
            if (event.data === window.YT.PlayerState.PLAYING) {
              applyVolumeToPlayer(event.target);
              startVolumePoll(index);
              setPlayingControls(index);
              players.forEach(function (other, otherIndex) {
                if (otherIndex !== index && other && typeof other.pauseVideo === "function") {
                  try {
                    other.pauseVideo();
                  } catch (err) {
                    /* ignore */
                  }
                }
              });
            } else if (event.data === window.YT.PlayerState.BUFFERING) {
              if (activePlayerIndex === index) {
                setPlayingControls(index);
              }
            } else if (
              event.data === window.YT.PlayerState.PAUSED ||
              event.data === window.YT.PlayerState.ENDED ||
              event.data === window.YT.PlayerState.CUED
            ) {
              if (activePlayerIndex === index) {
                captureVolumeFromPlayer(event.target, index);
                stopVolumePoll();
                activePlayerIndex = -1;
                setPlayingControls(-1);
              }
            }
          },
        },
      });
      players[index] = player;
    }

    function activateIframes(iframes) {
      iframes.forEach(function (iframe) {
        if (!iframe.getAttribute("src")) {
          iframe.src = embedSrc(iframe.dataset.videoId);
        }
      });
      loadYouTubeApi(function () {
        iframes.forEach(bindPlayer);
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener("change", function () {
        render(sortSelect.value);
      });
      render(sortSelect.value || "views");
    } else {
      render("views");
    }
  }
})();
