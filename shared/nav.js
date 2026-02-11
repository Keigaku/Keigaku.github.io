// ===== Cross-Site Navigation Bar =====
// This script injects a floating navigation dropdown into every study site
// so users can quickly jump between sites.
(function () {
  const SITES = [
    { icon: '🏠', name: 'ポータル', folder: 'study-portal' },
    { icon: '📐', name: '統計検定二級', folder: 'stats-study' },
    { icon: '🎓', name: '統計検定一級', folder: 'stats-study-grade1' },
    { icon: '💹', name: '金融工学【初級】', folder: 'stats-study-finance-beginner' },
    { icon: '💹', name: '金融工学【上級】', folder: 'stats-study-finance' },
    { icon: '💻', name: '応用情報技術者', folder: 'stats-study-ap' },
    { icon: '🎯', name: 'ITストラテジスト', folder: 'study-st' },
    { icon: '🏗️', name: 'システムアーキテクト', folder: 'study-sa' },
    { icon: '📋', name: 'プロジェクトマネージャ', folder: 'study-pm' },
    { icon: '🌐', name: 'ネットワークスペシャリスト', folder: 'study-nw' },
    { icon: '🗃️', name: 'データベーススペシャリスト', folder: 'study-db' },
    { icon: '🔧', name: 'エンベデッドシステムスペシャリスト', folder: 'study-es' },
    { icon: '📘', name: 'ITサービスマネージャ', folder: 'study-sm' },
    { icon: '🔍', name: 'システム監査技術者', folder: 'study-au' },
    { icon: '🛡️', name: '情報処理安全確保支援士', folder: 'study-sc' }
  ];

  // Detect current site from URL
  const currentPath = window.location.pathname.replace(/\\/g, '/');
  function isCurrent(folder) {
    return currentPath.includes('/' + folder + '/');
  }

  // Inject CSS
  const style = document.createElement('style');
  style.textContent = `
    .site-nav-toggle {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: 1px solid rgba(255,255,255,0.15);
      background: rgba(30,30,55,0.92);
      backdrop-filter: blur(16px);
      color: #e8e8f0;
      font-size: 24px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 24px rgba(0,0,0,0.4);
      transition: all 0.3s ease;
    }
    .site-nav-toggle:hover {
      transform: scale(1.08);
      border-color: rgba(108,92,231,0.5);
      box-shadow: 0 4px 32px rgba(108,92,231,0.25);
    }
    .site-nav-toggle.open {
      background: rgba(108,92,231,0.3);
      border-color: rgba(108,92,231,0.5);
    }
    .site-nav-panel {
      position: fixed;
      bottom: 92px;
      right: 24px;
      z-index: 9998;
      width: 300px;
      max-height: 70vh;
      overflow-y: auto;
      background: rgba(20,20,40,0.96);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 16px;
      box-shadow: 0 12px 48px rgba(0,0,0,0.5);
      padding: 12px 8px;
      opacity: 0;
      transform: translateY(16px) scale(0.95);
      pointer-events: none;
      transition: all 0.25s ease;
    }
    .site-nav-panel.open {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: all;
    }
    .site-nav-panel::-webkit-scrollbar { width: 4px; }
    .site-nav-panel::-webkit-scrollbar-track { background: transparent; }
    .site-nav-panel::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 4px; }
    .site-nav-label {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: rgba(255,255,255,0.35);
      padding: 8px 12px 4px;
      font-weight: 600;
    }
    .site-nav-link {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 12px;
      border-radius: 10px;
      text-decoration: none;
      color: #c8c8d8;
      font-size: 0.88rem;
      font-family: 'Inter','Noto Sans JP',sans-serif;
      transition: all 0.2s;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .site-nav-link:hover {
      background: rgba(108,92,231,0.15);
      color: #e8e8f0;
    }
    .site-nav-link.current {
      background: rgba(108,92,231,0.2);
      color: #a29bfe;
      font-weight: 600;
    }
    .site-nav-link__icon { font-size: 1.1rem; flex-shrink: 0; }
    .site-nav-sep { height: 1px; background: rgba(255,255,255,0.06); margin: 6px 8px; }
  `;
  document.head.appendChild(style);

  // Build panel
  const panel = document.createElement('div');
  panel.className = 'site-nav-panel';

  let html = '<div class="site-nav-label">サイト一覧</div>';
  SITES.forEach((site, i) => {
    if (i === 1) html += '<div class="site-nav-sep"></div><div class="site-nav-label">統計・金融</div>';
    if (i === 5) html += '<div class="site-nav-sep"></div><div class="site-nav-label">情報処理技術者</div>';
    const href = '../' + site.folder + '/index.html';
    const cls = isCurrent(site.folder) ? ' current' : '';
    html += `<a class="site-nav-link${cls}" href="${href}"><span class="site-nav-link__icon">${site.icon}</span>${site.name}</a>`;
  });
  panel.innerHTML = html;

  // Build toggle button
  const toggle = document.createElement('button');
  toggle.className = 'site-nav-toggle';
  toggle.innerHTML = '📚';
  toggle.title = '他のサイトへ移動';

  let isOpen = false;
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    isOpen = !isOpen;
    panel.classList.toggle('open', isOpen);
    toggle.classList.toggle('open', isOpen);
  });

  document.addEventListener('click', () => {
    if (isOpen) {
      isOpen = false;
      panel.classList.remove('open');
      toggle.classList.remove('open');
    }
  });
  panel.addEventListener('click', (e) => e.stopPropagation());

  document.body.appendChild(panel);
  document.body.appendChild(toggle);
})();
