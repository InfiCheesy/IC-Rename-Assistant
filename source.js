// ==UserScript==
// @name         IC网盘批量重命名
// @namespace    chatgpt.ic.pan.rename
// @version      1.5.0
// @description  自动切换115旧版网页后，读取已勾选文件并批量重命名；TMDB 自动区分电影/电视剧：电影按“电影名 (年份)”命名，电视剧按“剧名.S01E01”命名，并保留母文件夹重命名功能；新增电视剧集数偏移功能
// @icon         data:image/png;base64,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
// @author       OpenAI
// @match        https://115.com/*
// @match        https://*.115.com/*
// @match        https://v.anxia.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  if (window.top !== window.self) return;
  if (window.__IC115_BATCH_RENAME_V150__) return;
  window.__IC115_BATCH_RENAME_V150__ = true;

  const CONFIG = {
    season: 1,
    zeroPad: 2,
    pollMs: 400,
    toastMs: 2600,
    tmdbStorageKey: 'gpt115_tmdb_read_token',
    endpoints: [
      'https://webapi.115.com/files/edit',
      'https://115.com/files/edit',
      '/webapi/files/edit',
      '/files/edit'
    ]
  };
  const LOGO64 = 'data:image/png;base64,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';

  const STYLE = `
    .gpt115-root{position:fixed;right:16px;bottom:16px;z-index:2147483647;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#111827}
    .gpt115-card{width:460px;background:#fff;border:1px solid #d1d5db;border-radius:16px;box-shadow:0 14px 36px rgba(0,0,0,.18);overflow:hidden}
    .gpt115-head{padding:12px 14px;background:#2563eb;color:#fff;font-weight:700;display:flex;justify-content:space-between;align-items:center}
    .gpt115-head-left{display:flex;align-items:center;gap:10px}
    .gpt115-logo{width:28px;height:28px;border-radius:6px;flex:none}
    .gpt115-body{padding:12px 14px}
    .gpt115-row{margin-bottom:10px}
    .gpt115-row label{display:block;font-size:12px;color:#4b5563;margin-bottom:4px}
    .gpt115-row input{width:100%;box-sizing:border-box;border:1px solid #d1d5db;border-radius:10px;padding:8px 10px;font-size:14px;outline:none}
    .gpt115-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    .gpt115-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
    .gpt115-check{display:flex;align-items:center;gap:8px;margin-top:8px;margin-bottom:4px;font-size:13px;color:#374151}
    .gpt115-check input{width:auto;box-sizing:border-box}
    .gpt115-btn{border:0;border-radius:10px;padding:8px 12px;font-size:13px;cursor:pointer}
    .gpt115-btn.primary{background:#2563eb;color:#fff}
    .gpt115-btn.secondary{background:#e5e7eb;color:#111827}
    .gpt115-btn.warn{background:#dc2626;color:#fff}
    .gpt115-meta{font-size:12px;color:#6b7280;margin-top:8px;line-height:1.5}
    .gpt115-preview{max-height:320px;overflow:auto;border:1px solid #e5e7eb;border-radius:10px;padding:8px;background:#f9fafb;margin-top:10px}
    .gpt115-item{font-size:12px;padding:8px 6px;border-bottom:1px solid #e5e7eb}
    .gpt115-item:last-child{border-bottom:none}
    .gpt115-old{color:#6b7280;word-break:break-all}
    .gpt115-new{color:#111827;font-weight:600;word-break:break-all;margin-top:3px}
    .gpt115-bad .gpt115-new{color:#b91c1c}
    .gpt115-good .gpt115-new{color:#065f46}
    .gpt115-mini{font-size:12px;color:#6b7280}
    .gpt115-toast{position:fixed;left:50%;top:20px;transform:translateX(-50%);z-index:2147483647;background:#111827;color:#fff;padding:10px 14px;border-radius:999px;font-size:13px;box-shadow:0 10px 30px rgba(0,0,0,.2)}
    .gpt115-collapse{display:none}
    .gpt115-copy{margin-left:8px;font-size:12px;padding:4px 8px;border-radius:8px;border:0;background:#e5e7eb;cursor:pointer}
    .gpt115-badge{display:inline-block;padding:2px 8px;border-radius:999px;background:#eef2ff;color:#3730a3;font-size:12px;margin-left:8px}
    .gpt115-note{font-size:12px;color:#6b7280;line-height:1.5}
    .gpt115-tmdb-box{border:1px solid #e5e7eb;border-radius:10px;padding:10px;background:#f8fafc;margin-top:10px}
    .gpt115-flex{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
    .gpt115-value{font-size:13px;color:#111827;font-weight:600;word-break:break-all}
  `;

  const state = {
    open: true,
    preview: [],
    running: false,
    lastSelectionKey: '',
    timer: null,
    folderPreview: null,
    detectedTitle: '',
    tmdbResult: null,
    tmdbStatus: '',
    tmdbQuery: '',
    autoFilledShowName: '',
    autoFilledFolderName: '',
    tmdbTimer: null,
    detectedDirty: false,
    lastAutoDetectKey: '',
    tmdbInFlight: false,
    tmdbLastAttemptKey: ''
  };

  function isFilePage() {
    try {
      const href = location.href || '';
      const host = location.hostname || '';
      const path = location.pathname || '';

      if (!/(\.|^)115\.com$/i.test(host) && !/v\.anxia\.com$/i.test(host)) return false;
      if (/passport\.115\.com/i.test(host)) return false;
      if (/\/login/i.test(path)) return false;
      if (/play|video/i.test(href)) return false;

      if (/files|my|disk|home|offline/i.test(href)) return true;

      return true;
    } catch (_) {
      return false;
    }
  }

  function startAutoSwitchOldVersion() {
    const maxWaitTime = 10000;
    const startTime = Date.now();
    const timer = setInterval(function () {
      if (Date.now() - startTime > maxWaitTime) {
        clearInterval(timer);
        return;
      }

      if (!isFilePage()) return;

      const xpath = "//*[contains(text(), '切换旧版')]";
      const result = document.evaluate(xpath, document, null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      const oldVersionBtn = result && result.singleNodeValue;

      if (!oldVersionBtn) return;

      try {
        oldVersionBtn.click();
        if (oldVersionBtn.parentElement) oldVersionBtn.parentElement.click();
      } catch (err) {
        console.error('自动切换115旧版失败:', err);
      }

      clearInterval(timer);
    }, 300);
  }

  function injectStyle(css) {
    if (document.getElementById('gpt115-style-v130')) return;
    const style = document.createElement('style');
    style.id = 'gpt115-style-v130';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function toast(message, isError = false) {
    const el = document.createElement('div');
    el.className = 'gpt115-toast';
    if (isError) el.style.background = '#b91c1c';
    el.textContent = message;
    document.body.appendChild(el);
    setTimeout(function() {
      try { el.remove(); } catch (_) {
        try { if (el.parentNode) el.parentNode.removeChild(el); } catch (_) {}
      }
    }, CONFIG.toastMs);
  }

  function sleep(ms) {
    return new Promise(function(resolve) {
      setTimeout(resolve, ms || 0);
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function normalizeName(name) {
    return String(name || '').trim().replace(/[\\/:*?"<>|]/g, ' ').replace(/\s+/g, ' ');
  }

  function getTmdbToken() {
    try { return localStorage.getItem(CONFIG.tmdbStorageKey) || ''; } catch (_) { return ''; }
  }

  function setTmdbToken(token) {
    try { localStorage.setItem(CONFIG.tmdbStorageKey, String(token || '').trim()); } catch (_) {}
  }

  function copyText(text) {
    text = String(text || '');
    if (!text) return Promise.reject(new Error('empty'));
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function(resolve, reject) {
      try {
        var ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        resolve();
      } catch (err) { reject(err); }
    });
  }

  function normalizeSpaces(s) {
    return String(s || '').replace(/[_\.]+/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function stripSiteSuffixes(s) {
    s = String(s || '');
    s = s.replace(/\b(?:www\.)?(?:dyttxz|dy2018|ygdy8|ddhdtv|btbtt|xiaobaotv|rrys|yyets|zmz|xzzj|xz\.net|xznet|dyttx?z|zerotv|freeok|mytvsuper|duboku|ikanbot|nivod|naifei|netflixgc|ddys)\b/ig, ' ');
    s = s.replace(/\b(?:net|com|org|cc|tv|cn|me|app)\b/ig, ' ');
    s = s.replace(/\s+/g, ' ').trim();
    return s;
  }

  function stripNoiseTokens(s) {
    s = String(s || '');
    s = s.replace(/\b(?:4k|2160p|1080p|720p|576p|540p|480p|360p|x264|x265|h264|h265|hevc|avc|aac|ac3|eac3|flac|dts|hdr|sdr|uhd|hdtv|web[ ._-]?dl|webrip|bdrip|bluray|blu[ ._-]?ray|remux|proper|repack|ma10p|10bit|8bit|mkv|mp4|ts|avi|m4v|nf|amzn|dsnp|中字|双字|国语|粤语|国粤|内封|内嵌|简繁|简体|繁体|全集|全\\d+集)\b/ig, ' ');
    s = s.replace(/\s+/g, ' ').trim();
    return s;
  }

  function stripBracketTagsKeepTitle(s) {
    s = String(s || '');
    return s.replace(/[\[【(（][^\]】)）]{0,80}[\]】)）]/g, function(m) {
      var body = m.slice(1, -1);
      if (/^(tv|ova|oad|bd|web|webrip|bdrip|bluray|x26[45]|h26[45]|hevc|aac|ac3|eac3|flac|dts|1080|720|2160|10bit|8bit|ma10p|简繁|字幕|中字|合集|完结|season|s\d+|ep?\d+|第?\d+[集话話])([\w\s\-\._+&]*)$/i.test(body)) return ' ';
      if (/^[A-Z0-9._-]{2,20}$/.test(body)) return ' ';
      return ' ' + body + ' ';
    });
  }

  function cleanTitleForGuess(filename) {
    var s = splitExt(String(filename || '')).base;
    s = stripBracketTagsKeepTitle(s);
    s = s.replace(/\bS(?:eason)?[ ._-]?\d{1,2}[ ._-]?E(?:pisode)?[ ._-]?\d{1,4}\b/ig, ' ');
    s = s.replace(/(?:^|[^\w])\d{1,2}[xX]\d{1,4}(?=[^\w]|$)/g, ' ');
    s = s.replace(/第\s*\d{1,4}\s*[集话話]/ig, ' ');
    s = s.replace(/(?:^|[^\w])(?:EP?|Episode)[ ._-]?\d{1,4}(?=[^\w]|$)/ig, ' ');
    s = s.replace(/[\[【(（]\s*\d{1,4}\s*[\]】)）]/g, ' ');
    s = s.replace(/\b(?:19|20)\d{2}\b/g, ' ');
    s = stripNoiseTokens(s);
    s = s.replace(/[|]+/g, ' ');
    s = s.replace(/\s*[-–—]+\s*(?:ZeroTV|YYeTs|ZMZ|RARBG|CMCT|HDHome|HDTV|WEB|BluRay|Netflix|NF)\b.*$/i, ' ');
    s = normalizeSpaces(s);
    s = stripSiteSuffixes(s);
    s = s.replace(/^(?:the movie database|tmdb)\b/i, '').trim();
    return s;
  }

  function commonPrefixByWords(list) {
    var arr = (list || []).filter(Boolean).map(function(x){ return normalizeSpaces(x).split(' '); });
    if (!arr.length) return '';
    var first = arr[0];
    var out = [];
    for (var i = 0; i < first.length; i++) {
      var token = first[i];
      var ok = true;
      for (var j = 1; j < arr.length; j++) {
        if (arr[j][i] !== token) { ok = false; break; }
      }
      if (!ok) break;
      out.push(token);
    }
    return out.join(' ').trim();
  }

  function pickPreferredTitle(s) {
    s = cleanTitleForGuess(s);
    if (!s) return '';

    var zhMatches = s.match(/[\u4e00-\u9fff]{2,}(?:[·：:\-][\u4e00-\u9fff]{1,})*/g);
    if (zhMatches && zhMatches.length) {
      zhMatches.sort(function(a,b){ return b.length - a.length; });
      return normalizeName(zhMatches[0]);
    }

    var jpMatches = s.match(/[\u3040-\u30ff\u31f0-\u31ffー]{2,}(?:\s*[\u3040-\u30ff\u31f0-\u31ffー]{1,})*/g);
    if (jpMatches && jpMatches.length) {
      jpMatches.sort(function(a,b){ return b.length - a.length; });
      return normalizeName(jpMatches[0]);
    }

    var parts = s.split(/\s+-\s+|\s+\|\s+|\s+\/\s+/).map(function(x){ return normalizeSpaces(stripSiteSuffixes(stripNoiseTokens(x))); }).filter(Boolean);
    if (!parts.length) parts = [s];

    parts = parts.map(function(x) {
      x = x.replace(/\b(?:season|part|vol|disc|cd)\s*\d+\b/ig, ' ');
      x = x.replace(/\b(?:ZeroTV|YYeTs|ZMZ|RARBG|CMCT|HDHome|Netflix|NF)\b/ig, ' ');
      return normalizeSpaces(x);
    }).filter(Boolean);

    parts.sort(function(a,b){ return b.length - a.length; });
    var best = parts[0] || s;
    best = best.replace(/^[-–—\s]+|[-–—\s]+$/g, '');
    return normalizeName(best);
  }

  function guessTitleFromItems(items) {
    items = items || [];
    var cleaned = items.map(function(x){ return cleanTitleForGuess(x.oldName || x); }).filter(Boolean);
    if (!cleaned.length) return '';

    var preferred = items.map(function(x){ return pickPreferredTitle(x.oldName || x); }).filter(Boolean);
    var zhPreferred = preferred.filter(function(x){ return /[\u4e00-\u9fff]/.test(x); });
    if (zhPreferred.length) {
      var commonZh = commonPrefixByWords(zhPreferred);
      if (commonZh && commonZh.replace(/[^\u4e00-\u9fff]/g, '').length >= 2) return normalizeName(commonZh);
      zhPreferred.sort(function(a,b){ return b.length - a.length; });
      return normalizeName(zhPreferred[0]);
    }

    var prefix = commonPrefixByWords(preferred.length ? preferred : cleaned);
    if (prefix && prefix.replace(/[^\u4e00-\u9fffA-Za-z0-9\u3040-\u30ff]+/g, '').length >= 2) return normalizeName(prefix);

    var best = (preferred.length ? preferred : cleaned).slice().sort(function(a,b){ return b.length - a.length; })[0] || '';
    best = best.replace(/\b(?:season|part|vol|disc|cd)\s*\d+\b/ig, ' ').trim();
    best = normalizeSpaces(best);
    return normalizeName(best);
  }

  function tmdbDisplayName(result) {
    if (!result) return '';
    var name = result.cnName || result.name || result.title || result.original_name || result.original_title || '';
    var year = result.year || '';
    return year ? (name + ' (' + year + ')') : name;
  }

  async function tmdbSearch(query, token) {
    query = normalizeSpaces(query);
    token = String(token || '').trim();
    if (!query) throw new Error('未识别到片名');
    if (!token) throw new Error('请先填写 TMDB API Read Access Token');

    var url = 'https://api.themoviedb.org/3/search/multi?language=zh-CN&include_adult=false&query=' + encodeURIComponent(query) + '&page=1';
    var resp = await fetch(url, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
    var data = await resp.json().catch(function(){ return {}; });
    if (!resp.ok) {
      throw new Error((data && (data.status_message || data.message)) || ('TMDB 请求失败：HTTP ' + resp.status));
    }
    var results = (data && data.results) || [];
    results = results.filter(function(x){ return x && (x.media_type === 'tv' || x.media_type === 'movie'); });
    if (!results.length) throw new Error('TMDB 未找到匹配结果');

    function score(x) {
      var s = 0;
      var q = query.toLowerCase();
      var names = [
        x.name, x.title, x.original_name, x.original_title
      ].filter(Boolean).map(function(v){ return String(v).toLowerCase(); });
      for (var i = 0; i < names.length; i++) {
        if (names[i] === q) s += 120;
        else if (names[i].indexOf(q) >= 0) s += 60;
      }
      if (x.media_type === 'tv') s += 25;
      s += Math.min(20, Number(x.popularity || 0) / 20);
      return s;
    }

    results.sort(function(a,b){ return score(b) - score(a); });
    var x = results[0];
    var date = x.first_air_date || x.release_date || '';
    var year = /^\d{4}/.test(date) ? date.slice(0,4) : '';
    return {
      id: x.id,
      mediaType: x.media_type,
      cnName: x.name || x.title || '',
      originalName: x.original_name || x.original_title || '',
      year: year,
      displayName: (x.name || x.title || '') + (year ? (' (' + year + ')') : '')
    };
  }

  function splitExt(filename) {
    const idx = filename.lastIndexOf('.');
    if (idx <= 0) return { base: filename, ext: '' };
    return { base: filename.slice(0, idx), ext: filename.slice(idx) };
  }

  function zeroPad(num, width = 2) {
    let s = String(num);
    while (s.length < width) s = '0' + s;
    return s;
  }

  function textOf(el) {
    return ((el && el.textContent) || '').trim();
  }

  function isFiniteNumber(num) {
    return typeof num === 'number' && isFinite(num);
  }

  function uniqueBy(arr, keyFn) {
    const map = new Map();
    arr.forEach((item) => {
      const key = keyFn(item);
      if (!map.has(key)) map.set(key, item);
    });
    return [...map.values()];
  }

  function getListDocument() {
    const frame = document.querySelector("iframe[name='wangpan'], iframe[rel='wangpan'], .wrap-view iframe");
    if (frame && frame.contentDocument) return frame.contentDocument;
    return document;
  }

  function getListRoot(doc) {
    doc = doc || getListDocument() || document;
    return doc.querySelector('.list-contents, .list-thumb, #js_data_list') || doc.body;
  }

  function extractFileNameFromRow(row) {
    const directTitle = row.getAttribute('title');
    if (directTitle && /\.[^.]+$/.test(directTitle)) return directTitle.trim();

    const nameNode = row.querySelector('a.name > span, .file-name-wrap .name span, .file-name-wrap .name, [field="file_name"] span, [field="file_name"]');
    const nodeText = textOf(nameNode);
    if (nodeText && /\.[^.]+$/.test(nodeText)) return nodeText.trim();

    const fallback = textOf(row).split('\n').map(s => s.trim()).filter(Boolean).find(s => /\.[^.]+$/.test(s));
    return fallback || '';
  }

  function getSelectedRows() {
    const doc = getListDocument();
    const root = getListRoot(doc);
    const selector = [
      'li.selected[file_id]',
      'li.selected[file_type="1"][file_id]',
      '.list-thumb li.selected[file_id]'
    ].join(',');

    const rows = [...root.querySelectorAll(selector)]
      .filter((row) => !row.classList.contains('ce-temp-cur-dir'))
      .filter((row) => row.getAttribute('file_id'));

    return uniqueBy(rows, (row) => row.getAttribute('file_id'));
  }

  function collectSelectedItems() {
    return getSelectedRows().map((row) => {
      const fileId = row.getAttribute('file_id') || '';
      const oldName = extractFileNameFromRow(row);
      return {
        fileId,
        oldName,
        row
      };
    }).filter((item) => item.fileId && item.oldName);
  }

  function parseFolderIdFromUrl(url) {
    try {
      if (!url) return '';
      const u = new URL(url, location.origin);
      const cid = u.searchParams.get('cid') || u.searchParams.get('folder_id') || u.searchParams.get('cate_id');
      return cid || '';
    } catch (_) {
      return '';
    }
  }

  function readFolderIdFromNode(node) {
    if (!node) return '';
    var attrs = ['cid', 'data-cid', 'cate_id', 'data-id', 'folder_id', 'data-folder-id'];
    for (var i = 0; i < attrs.length; i++) {
      var v = node.getAttribute && node.getAttribute(attrs[i]);
      if (v && v !== '0') return String(v);
    }
    try {
      var href = node.getAttribute && (node.getAttribute('href') || node.getAttribute('data-href')) || '';
      var cid = parseFolderIdFromUrl(href);
      if (cid && cid !== '0') return cid;
    } catch (_) {}
    var cur = node.parentElement;
    for (var depth = 0; cur && depth < 4; depth++, cur = cur.parentElement) {
      for (var j = 0; j < attrs.length; j++) {
        var pv = cur.getAttribute && cur.getAttribute(attrs[j]);
        if (pv && pv !== '0') return String(pv);
      }
      try {
        var ph = cur.getAttribute && (cur.getAttribute('href') || cur.getAttribute('data-href')) || '';
        var pcid = parseFolderIdFromUrl(ph);
        if (pcid && pcid !== '0') return pcid;
      } catch (_) {}
    }
    return '';
  }

  function findCurrentFolderNode() {
    const docs = [];
    const listDoc = getListDocument();
    if (document) docs.push(document);
    if (listDoc && listDoc !== document) docs.push(listDoc);

    for (var d = 0; d < docs.length; d++) {
      var doc = docs[d];
      try {
        var lastPath = doc.querySelector('#js_top_header_file_path_box .top-file-path > .file-path > :last-child');
        if (lastPath) return lastPath;
      } catch (_) {}
    }

    const selectors = [
      '.path .on',
      '.path li:last-child',
      '.breadcrumb .on',
      '.breadcrumb li:last-child',
      '.bread_crumb li:last-child',
      '.js_path li:last-child',
      '.js-path li:last-child',
      '.dir_path li:last-child',
      '.right-tit',
      '.file-title',
      '.title .name'
    ];

    for (var d2 = 0; d2 < docs.length; d2++) {
      var doc2 = docs[d2];
      for (var i = 0; i < selectors.length; i++) {
        var node = doc2.querySelector(selectors[i]);
        if (node) return node;
      }
    }
    return null;
  }

  function getCurrentFolderId() {
    var currentNode = findCurrentFolderNode();
    var domCid = readFolderIdFromNode(currentNode);
    if (domCid && domCid !== '0') return domCid;

    const frame = document.querySelector("iframe[name='wangpan'], iframe[rel='wangpan'], .wrap-view iframe");
    const sources = [];
    try {
      if (frame && frame.contentWindow && frame.contentWindow.location && frame.contentWindow.location.href) {
        sources.push(frame.contentWindow.location.href);
      }
    } catch (_) {}
    try { if (frame && frame.getAttribute('src')) sources.push(frame.getAttribute('src')); } catch (_) {}
    try { sources.push(location.href); } catch (_) {}

    for (var i = 0; i < sources.length; i++) {
      var cid = parseFolderIdFromUrl(sources[i]);
      if (cid && cid !== '0') return cid;
    }
    return '';
  }

  function getCurrentFolderName() {
    var currentNode = findCurrentFolderNode();
    if (currentNode) {
      try {
        var tt = (currentNode.getAttribute('titletext') || currentNode.getAttribute('title') || '').trim();
        if (tt) return tt;
      } catch (_) {}
      var nodeTxt = textOf(currentNode).replace(/[>›]/g, '').trim();
      if (nodeTxt) return nodeTxt;
    }
    return '当前文件夹';
  }

  function getCurrentFolderInfo() {
    var currentNode = findCurrentFolderNode();
    return {
      folderId: readFolderIdFromNode(currentNode) || getCurrentFolderId(),
      oldName: currentNode ? getCurrentFolderName() : getCurrentFolderName()
    };
  }

  function updateCurrentFolderBreadcrumb(newName) {
    var docs = [];
    var listDoc = getListDocument();
    if (document) docs.push(document);
    if (listDoc && listDoc !== document) docs.push(listDoc);

    for (var d = 0; d < docs.length; d++) {
      var doc = docs[d];
      try {
        var lastPath = doc.querySelector('#js_top_header_file_path_box .top-file-path > .file-path > :last-child');
        if (lastPath) {
          try { lastPath.setAttribute('titletext', newName); } catch (_) {}
          var span = lastPath.querySelector('span');
          if (span) span.textContent = newName;
          else lastPath.textContent = newName;
        }
      } catch (_) {}
    }
  }

  function buildFolderPreview(folderName) {
    var info = getCurrentFolderInfo();
    var cleanShow = normalizeName(folderName);
    if (!cleanShow) return { ok: false, reason: '母文件夹名为空', folderId: info.folderId, oldName: info.oldName, newName: '' };
    if (!info.folderId) return { ok: false, reason: '未识别到当前文件夹', folderId: '', oldName: info.oldName, newName: cleanShow };
    if (String(info.oldName || '').trim() === cleanShow) return { ok: true, reason: '', folderId: info.folderId, oldName: info.oldName, newName: cleanShow, same: true };
    return { ok: true, reason: '', folderId: info.folderId, oldName: info.oldName, newName: cleanShow, same: false };
  }

  function pickEpisode(rawName) {
    const name = String(rawName || '').replace(/\.[^.]+$/, '');
    const candidates = [];

    function pushCandidate(ep, score, pos) {
      if (!isFiniteNumber(ep) || ep <= 0 || ep >= 10000) return;
      candidates.push({ ep: ep, score: score, pos: isFiniteNumber(pos) ? pos : -1 });
    }

    function firstMatch(reg, score, pickIndex) {
      const m = reg.exec(name);
      if (!m) return;
      const idx = pickIndex || (m.length - 1);
      pushCandidate(parseInt(m[idx], 10), score, typeof m.index === 'number' ? m.index : -1);
    }

    firstMatch(/\bS(?:eason)?[._\- ]?(\d{1,3})[._\- ]?E(?:pisode)?[._\- ]?(\d{1,4})(?!\d)/i, 300, 2);
    firstMatch(/(?:^|[^\w])(\d{1,3})[xX](\d{1,4})(?!\d)/, 295, 2);
    firstMatch(/第\s*0*(\d{1,4})\s*[集话話]/i, 290, 1);
    firstMatch(/(?:^|[^\w])(?:EP?|Episode)[._\- ]*0*(\d{1,4})(?!\d)/i, 280, 1);
    firstMatch(/[\[【(（]\s*0*(\d{1,4})\s*[\]】)）]/, 260, 1);

    const sanitized = name
      .replace(/\b(?:19|20)\d{2}\b/g, ' ')
      .replace(/\b(?:2160|1080|720|576|540|480|360)p?\b/ig, ' ')
      .replace(/\b(?:x|h)[._\- ]?26[45]\b/ig, ' ')
      .replace(/\b(?:hevc|avc|aac|ac3|eac3|ddp|dd|flac|dts|hdr|sdr|uhd|hdtv|web[._\- ]?dl|webrip|bdrip|bluray|blu[._\- ]?ray|remux|proper|repack)\b/ig, ' ')
      .replace(/\b(?:10|8)bit\b/ig, ' ')
      .replace(/[_\.\-]+/g, ' ');

    const rawTokenReg = /(?:^|[^\w])0*([1-9]\d{0,3})(?:v\d+)?(?=[^\w]|$)/g;
    let m;
    while ((m = rawTokenReg.exec(sanitized))) {
      const ep = parseInt(m[1], 10);
      if (!isFiniteNumber(ep)) continue;
      if (ep >= 1900 && ep <= 2099) continue;
      pushCandidate(ep, 100, typeof m.index === 'number' ? m.index : -1);
    }

    if (!candidates.length) return null;
    candidates.sort(function(a, b) {
      if (b.score !== a.score) return b.score - a.score;
      if (b.pos !== a.pos) return b.pos - a.pos;
      return b.ep - a.ep;
    });
    return candidates[0].ep;
  }

  function parseEpisodeOffset(value) {
    var s = String(value == null ? '' : value).trim();
    if (!s) return 0;
    if (!/^[+-]?\d+$/.test(s)) return 0;
    return parseInt(s, 10) || 0;
  }

  function buildTvName(showName, season, oldFilename, episodeOffset) {
    const ep = pickEpisode(oldFilename);
    if (!ep) return { ok: false, reason: '未识别到集数', episode: null, newName: '' };

    const offset = parseEpisodeOffset(episodeOffset);
    const finalEp = ep + offset;
    if (!isFiniteNumber(finalEp) || finalEp <= 0 || finalEp >= 10000) {
      return { ok: false, reason: '偏移后集数无效', episode: ep, newEpisode: finalEp, newName: '' };
    }

    const cleanShow = normalizeName(showName);
    if (!cleanShow) return { ok: false, reason: '剧名为空', episode: ep, newEpisode: finalEp, newName: '' };

    const ext = splitExt(oldFilename).ext;
    const seasonText = zeroPad(season, 2);
    const episodeText = zeroPad(finalEp, CONFIG.zeroPad);
    return {
      ok: true,
      reason: '',
      episode: ep,
      newEpisode: finalEp,
      newName: `${cleanShow}.S${seasonText}E${episodeText}${ext}`
    };
  }

  function buildMovieName(movieName, year, oldFilename) {
    const cleanMovie = normalizeName(movieName);
    if (!cleanMovie) return { ok: false, reason: '电影名为空', episode: null, newName: '' };
    const ext = splitExt(oldFilename).ext;
    return {
      ok: true,
      reason: '',
      episode: null,
      newName: year ? `${cleanMovie} (${year})${ext}` : `${cleanMovie}${ext}`
    };
  }

  function buildNewName(showName, season, oldFilename, episodeOffset) {
    const mediaType = state.tmdbResult && state.tmdbResult.mediaType;
    if (mediaType === 'movie') {
      const movieName = (state.tmdbResult.cnName || state.tmdbResult.originalName || showName || '').trim();
      const year = state.tmdbResult.year || '';
      return buildMovieName(movieName, year, oldFilename);
    }
    return buildTvName(showName, season, oldFilename, episodeOffset);
  }

  function generatePreview(showName, season, episodeOffset) {
    const items = collectSelectedItems();
    const preview = items.map((item) => ({ ...item, ...buildNewName(showName, season, item.oldName, episodeOffset) }));

    const counter = new Map();
    for (const item of preview) {
      if (!item.ok) continue;
      const key = item.newName.toLowerCase();
      counter.set(key, (counter.get(key) || 0) + 1);
    }

    for (const item of preview) {
      if (!item.ok) continue;
      if ((counter.get(item.newName.toLowerCase()) || 0) > 1) {
        item.ok = false;
        item.reason = '新文件名冲突';
      }
    }

    return preview;
  }

  async function postRename(endpoint, payload) {
    const body = new URLSearchParams();
    Object.entries(payload).forEach(([key, value]) => body.append(key, String(value)));

    const resp = await fetch(endpoint, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: body.toString()
    });

    const text = await resp.text();
    let data = null;
    try { data = JSON.parse(text); } catch (_) {}

    const ok = resp.ok && (
      (data && (data.state === true || data.errNo === 0 || data.errno === 0 || data.code === 0 || data.status === 1))
      || /success|ok/i.test(text)
    );

    if (ok) return { ok: true, data, text, endpoint };
    throw new Error((data && (data.error || data.message || data.msg)) || text || `HTTP ${resp.status}`);
  }

  async function renameOne(fileId, newName) {
    const payloads = [
      { fid: fileId, file_name: newName },
      { file_id: fileId, file_name: newName },
      { fid: fileId, filename: newName },
      { file_id: fileId, filename: newName },
      { fid: fileId, name: newName },
      { file_id: fileId, name: newName }
    ];

    let lastError = null;
    for (const endpoint of CONFIG.endpoints) {
      for (const payload of payloads) {
        try {
          return await postRename(endpoint, payload);
        } catch (err) {
          lastError = err;
        }
      }
    }
    throw lastError || new Error('未找到可用的重命名接口');
  }

  function top115Window() {
    try {
      if (window.top && window.top.TOP) return window.top.TOP;
    } catch (_) {}
    try {
      if (window.TOP) return window.TOP;
    } catch (_) {}
    try {
      if (window.unsafeWindow && window.unsafeWindow.TOP) return window.unsafeWindow.TOP;
    } catch (_) {}
    try {
      if (window.top && window.top !== window && window.top.unsafeWindow && window.top.unsafeWindow.TOP) return window.top.unsafeWindow.TOP;
    } catch (_) {}
    try {
      if (window.top && window.top.Core) return window.top;
    } catch (_) {}
    try {
      if (window.Core) return window;
    } catch (_) {}
    try {
      if (window.unsafeWindow) return window.unsafeWindow;
    } catch (_) {}
    return window;
  }

  function isVisibleNode(node) {
    if (!node || !(node instanceof Element)) return false;
    if (node.closest && node.closest('.gpt115-root')) return false;
    var style = null;
    try { style = node.ownerDocument.defaultView.getComputedStyle(node); } catch (_) {}
    if (style && (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0')) return false;
    if (node.getClientRects && node.getClientRects().length) return true;
    return false;
  }

  function setNativeValue(el, value) {
    var last = el.value;
    el.value = value;
    try {
      var proto = Object.getPrototypeOf(el);
      var desc = proto && Object.getOwnPropertyDescriptor(proto, 'value');
      if (desc && desc.set) desc.set.call(el, value);
    } catch (_) {}
    if (last !== value) {
      try { el.dispatchEvent(new Event('input', { bubbles: true })); } catch (_) {}
      try { el.dispatchEvent(new Event('change', { bubbles: true })); } catch (_) {}
    }
  }

  function getCurrentFolderParentId() {
    var docs = [];
    var listDoc = getListDocument();
    if (document) docs.push(document);
    if (listDoc && listDoc !== document) docs.push(listDoc);
    for (var d = 0; d < docs.length; d++) {
      var doc = docs[d];
      var nodes = doc.querySelectorAll('#js_top_header_file_path_box .top-file-path > .file-path > *');
      if (nodes && nodes.length >= 2) {
        for (var i = nodes.length - 2; i >= 0; i--) {
          var cid = nodes[i].getAttribute('cid') || nodes[i].getAttribute('data-cid') || '';
          if (cid) return cid;
        }
      }
    }
    return '';
  }

  function ensureTempCurrentFolderRow(folderId, oldName) {
    var listDoc = getListDocument();
    var root = getListRoot(listDoc);
    if (!root) throw new Error('未找到115文件列表');
    var existing = root.querySelector('li.ce-temp-cur-dir[cate_id="' + String(folderId) + '"]');
    if (existing) return existing;

    var li = (listDoc || document).createElement('li');
    li.className = 'temp-el ce-temp-cur-dir';
    li.setAttribute('rel', 'item');
    li.setAttribute('file_type', '0');
    li.setAttribute('cate_id', String(folderId));
    li.setAttribute('cate_name', oldName || '');
    li.setAttribute('title', oldName || '');
    li.setAttribute('p_id', getCurrentFolderParentId() || '0');
    li.innerHTML = '' +
      '<s class="drag-flag" data-rel="drag" style="cursor:pointer;"></s>' +
      '<textarea style="display:none;" field="desc"></textarea>' +
      '<textarea style="display:none;" field="ext3"></textarea>' +
      '<input type="checkbox" value="' + String(folderId) + '" />' +
      '<div class="checkbox" menu="file_check_one"></div>' +
      '<div class="file-name-wrap">' +
        '<i class="file-type tp-folder" folder-type="shared"></i>' +
        '<span class="file-name" rel="file_name">' +
          '<em><a class="name" href="javascript:;" cate="1" menu="open" aid="1" cid="' + String(folderId) + '" rel="view_folder"><span></span></a></em>' +
        '</span>' +
      '</div>' +
      '<div class="file-size"><span></span></div>' +
      '<div class="file-typename"><span>文件夹</span></div>' +
      '<div class="file-modified"></div>' +
      '<div class="file-directory"></div>' +
      '<div class="file-opr" rel="menu">' +
        '<a href="javascript:;" menu="edit_name"><i class="icon-operate ifo-rename" menu="edit_name"></i><span menu="edit_name">重命名</span></a>' +
      '</div>';
    var span = li.querySelector('a.name > span');
    if (span) span.textContent = oldName || '';

    if (root.tagName && root.tagName.toLowerCase() === 'ul') {
      var parent = root.parentNode || root;
      if (parent && parent.insertBefore) parent.insertBefore(li, root.firstChild || null);
      else root.appendChild(li);
    } else {
      root.insertBefore(li, root.firstChild || null);
    }
    return li;
  }

  function selectOnlyRow(row) {
    var root = getListRoot(getListDocument());
    if (!root) return;
    var selected = root.querySelectorAll('li.selected');
    for (var i = 0; i < selected.length; i++) {
      selected[i].classList.remove('selected');
      var cb0 = selected[i].querySelector('input[type="checkbox"]');
      if (cb0) cb0.checked = false;
    }
    row.classList.add('selected');
    var cb = row.querySelector('input[type="checkbox"]');
    if (cb) cb.checked = true;
  }

  async function waitForRenameInput(oldName, timeoutMs) {
    var start = Date.now();
    while (Date.now() - start < timeoutMs) {
      var docs = [];
      var listDoc = getListDocument();
      if (document) docs.push(document);
      if (listDoc && listDoc !== document) docs.push(listDoc);
      var found = [];
      for (var d = 0; d < docs.length; d++) {
        var doc = docs[d];
        var nodes = doc.querySelectorAll('input[type="text"], input:not([type]), textarea');
        for (var i = 0; i < nodes.length; i++) {
          var node = nodes[i];
          if (!isVisibleNode(node)) continue;
          if (node.disabled || node.readOnly) continue;
          found.push(node);
        }
      }
      if (found.length) {
        found.sort(function(a, b) {
          var sa = 0, sb = 0;
          if ((a.value || '').trim() === (oldName || '').trim()) sa += 10;
          if ((b.value || '').trim() === (oldName || '').trim()) sb += 10;
          if ((a.placeholder || '').indexOf('电视剧名称') >= 0) sa -= 100;
          if ((b.placeholder || '').indexOf('电视剧名称') >= 0) sb -= 100;
          return sb - sa;
        });
        return found[0];
      }
      await sleep(80);
    }
    return null;
  }

  async function tryConfirmRename(oldName, newName) {
    var input = await waitForRenameInput(oldName, 2200);
    if (!input) throw new Error('未找到115的文件夹重命名输入框');
    try { input.focus(); } catch (_) {}
    try { if (input.select) input.select(); } catch (_) {}
    setNativeValue(input, newName);
    try { input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', which: 13, keyCode: 13, bubbles: true })); } catch (_) {}
    try { input.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', code: 'Enter', which: 13, keyCode: 13, bubbles: true })); } catch (_) {}
    try { input.blur(); } catch (_) {}

    var docs = [];
    var listDoc = getListDocument();
    if (document) docs.push(document);
    if (listDoc && listDoc !== document) docs.push(listDoc);
    for (var d = 0; d < docs.length; d++) {
      var doc = docs[d];
      var buttons = doc.querySelectorAll('a, button, input[type="button"], input[type="submit"]');
      for (var i = 0; i < buttons.length; i++) {
        var btn = buttons[i];
        if (!isVisibleNode(btn)) continue;
        var txt = ((btn.textContent || btn.value || '').replace(/\s+/g, ' ').trim());
        if (/^(确定|确认|保存|完成|提交)$/.test(txt)) {
          try { btn.click(); } catch (_) {}
          await sleep(120);
          return true;
        }
      }
    }

    await sleep(300);
    return true;
  }

  async function renameFolderOne(folderId, oldName, newName) {
    var topWin = top115Window();
    var errMsgs = [];

    async function runNativeRename(useTempRow) {
      if (!(topWin && topWin.Core && topWin.Core.Dir && typeof topWin.Core.Dir.Rename === 'function')) {
        throw new Error('115旧版原生 Core.Dir.Rename 不可用');
      }
      if (useTempRow) {
        var row = ensureTempCurrentFolderRow(folderId, oldName || newName);
        selectOnlyRow(row);
      }
      topWin.Core.Dir.Rename('1', String(folderId), String(oldName || newName));
      await tryConfirmRename(oldName || newName, newName);
      updateCurrentFolderBreadcrumb(newName);
      return { ok: true, via: useTempRow ? 'Core.Dir.Rename(temp-row)' : 'Core.Dir.Rename' };
    }

    try {
      return await runNativeRename(false);
    } catch (err1) {
      errMsgs.push(String(err1 && err1.message || err1));
      console.warn('[ic-pan-rename] direct Core.Dir.Rename failed', err1);
    }

    try {
      return await runNativeRename(true);
    } catch (err2) {
      errMsgs.push(String(err2 && err2.message || err2));
      console.warn('[ic-pan-rename] temp-row Core.Dir.Rename failed', err2);
    }

    throw new Error('当前文件夹重命名失败：未成功调用115旧版原生重命名。' + (errMsgs.length ? ' 详情：' + errMsgs.join(' | ') : ''));
  }

  function refreshList() {
    const frame = document.querySelector("iframe[name='wangpan'], iframe[rel='wangpan'], .wrap-view iframe");
    try {
      if (frame && frame.contentWindow) {
        frame.contentWindow.location.reload();
        return;
      }
    } catch (_) {}

    try {
      if (window.unsafeWindow?.Main?.ReInstance) {
        window.unsafeWindow.Main.ReInstance();
        return;
      }
    } catch (_) {}

    try {
      window.dispatchEvent(new Event('focus'));
    } catch (_) {}
  }

  function renderPreview(listEl) {
    if (!state.preview.length && !state.folderPreview) {
      listEl.innerHTML = '<div class="gpt115-mini">先在115里勾选文件，再输入名称；预览会自动显示。</div>';
      return;
    }

    var html = [];
    if (state.folderPreview) {
      var f = state.folderPreview;
      var nextFolder = f.ok ? (f.same ? (f.newName + '（文件夹名已一致）') : f.newName) : ('无法处理：' + f.reason);
      html.push(`
        <div class="${f.ok ? 'gpt115-item gpt115-good' : 'gpt115-item gpt115-bad'}">
          <div class="gpt115-old">[当前文件夹] ${escapeHtml(f.oldName || '当前文件夹')}</div>
          <div class="gpt115-new">${escapeHtml(nextFolder)}</div>
        </div>
      `);
    }

    html = html.concat(state.preview.map((item) => {
      const cls = item.ok ? 'gpt115-item gpt115-good' : 'gpt115-item gpt115-bad';
      const next = item.ok ? item.newName : `无法处理：${item.reason}`;
      return `
        <div class="${cls}">
          <div class="gpt115-old">${escapeHtml(item.oldName)}</div>
          <div class="gpt115-new">${escapeHtml(next)}</div>
        </div>
      `;
    }));

    listEl.innerHTML = html.join('');
  }

  function buildPreviewText() {
    var lines = [];
    if (state.folderPreview) {
      var f = state.folderPreview;
      lines.push('[当前文件夹] ' + (f.oldName || '当前文件夹') + ' => ' + (f.ok ? f.newName : '[失败] ' + f.reason));
    }
    return lines.concat(state.preview.map(function(x){ return x.oldName + ' => ' + (x.ok ? x.newName : '[失败] ' + x.reason); })).join('\n');
  }

  function downloadText(filename, content) {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function bootstrap() {
    if (!isFilePage()) return;
    if (document.querySelector('.gpt115-root')) return;
    injectStyle(STYLE);

    const root = document.createElement('div');
    root.className = 'gpt115-root';
    root.innerHTML = `
      <div class="gpt115-card">
        <div class="gpt115-head">
          <div class="gpt115-head-left">
            <img src="${LOGO64}" alt="logo" class="gpt115-logo">
            <span>IC网盘批量重命名</span>
          </div>
          <button class="gpt115-btn secondary" data-act="toggle">收起</button>
        </div>
        <div class="gpt115-body" data-body>
          <div class="gpt115-row">
            <label>自动识别片名（中/英/日）</label>
            <div class="gpt115-flex">
              <input type="text" data-input="detected" placeholder="将从已勾选文件名中自动识别" />
              <button class="gpt115-btn secondary" data-act="detect">重新识别</button>
              <button class="gpt115-btn secondary" data-act="tmdb-search">搜索 TMDB</button>
            </div>
          </div>
          <div class="gpt115-row">
            <label>TMDB API Read Access Token</label>
            <input type="password" data-input="tmdb-token" placeholder="需要你自己的 TMDB 只读 Token；将保存在本地浏览器" />
          </div>
          <div class="gpt115-tmdb-box">
            <div class="gpt115-row">
              <label>TMDB 标准名称</label>
              <div class="gpt115-flex">
                <div class="gpt115-value" data-tmdb-name>等待搜索</div>
                <span class="gpt115-badge" data-tmdb-type>TMDB</span>
                <button class="gpt115-copy" data-act="copy-standard">复制</button>
              </div>
            </div>
            <div class="gpt115-note" data-tmdb-status>识别后会自动搜索 TMDB，并显示标准名称、年份和类型。</div>
          </div>
          <div class="gpt115-row">
            <label>重命名基础名称</label>
            <input type="text" data-input="show" placeholder="电视剧填剧名；电影会自动按 TMDB 标准名处理" />
          </div>
          <div class="gpt115-grid">
            <div class="gpt115-row">
              <label>季（仅电视剧使用）</label>
              <input type="number" min="1" max="99" value="1" data-input="season" />
            </div>
            <div class="gpt115-row">
              <label>集数偏移（仅电视剧使用）</label>
              <input type="number" step="1" value="0" data-input="episode-offset" placeholder="默认 0，可填 -2、-1、1、2、3..." />
            </div>
          </div>
          <div class="gpt115-grid">
            <div class="gpt115-row">
              <label>格式预览</label>
              <input type="text" value="电影：名称 (年份) / 电视剧：名称.S01E01" disabled />
            </div>
            <div class="gpt115-row">
              <label>偏移示例</label>
              <input type="text" value="E01 + 3 => E04；E10 - 2 => E08" disabled />
            </div>
          </div>
          <div class="gpt115-row">
            <label>母文件夹名（可编辑确认，默认自动填入）</label>
            <input type="text" data-input="folder-name" placeholder="电影默认：电影名 (年份)；电视剧默认：剧名" />
          </div>
          <label class="gpt115-check">
            <input type="checkbox" data-input="rename-folder" checked />
            <span>同时把当前文件夹改成上面的母文件夹名（可选）</span>
          </label>
          <div class="gpt115-actions">
            <button class="gpt115-btn primary" data-act="rename">执行重命名</button>
            <button class="gpt115-btn secondary" data-act="export">导出预览</button>
            <button class="gpt115-btn warn" data-act="clear">清空预览</button>
          </div>
          <div class="gpt115-meta" data-meta>
            使用方法：先勾选文件。脚本会自动识别片名并搜索 TMDB；电影按“电影名 (年份)”格式重命名，电视剧按“剧名.S01E01”格式重命名，并可同步重命名母文件夹。新增“集数偏移”可统一调整电视剧集数。
          </div>
          <div class="gpt115-preview" data-preview></div>
        </div>
      </div>
    `;
    document.body.appendChild(root);

    const bodyEl = root.querySelector('[data-body]');
    const detectedInput = root.querySelector('[data-input="detected"]');
    const tokenInput = root.querySelector('[data-input="tmdb-token"]');
    const tmdbNameEl = root.querySelector('[data-tmdb-name]');
    const tmdbTypeEl = root.querySelector('[data-tmdb-type]');
    const tmdbStatusEl = root.querySelector('[data-tmdb-status]');
    const showInput = root.querySelector('[data-input="show"]');
    const seasonInput = root.querySelector('[data-input="season"]');
    const episodeOffsetInput = root.querySelector('[data-input="episode-offset"]');
    const folderNameInput = root.querySelector('[data-input="folder-name"]');
    const metaEl = root.querySelector('[data-meta]');
    const previewEl = root.querySelector('[data-preview]');
    const renameFolderInput = root.querySelector('[data-input="rename-folder"]');
    tokenInput.value = getTmdbToken();
    if (episodeOffsetInput) episodeOffsetInput.value = '0';

    function updateTmdbUi() {
      var r = state.tmdbResult;
      tmdbNameEl.textContent = r ? tmdbDisplayName(r) : '等待搜索';
      tmdbTypeEl.textContent = r ? (r.mediaType === 'tv' ? 'TV' : 'Movie') : 'TMDB';
      tmdbStatusEl.textContent = state.tmdbStatus || '识别后会自动搜索 TMDB，并显示标准名称、年份和类型。';
    }

    function syncAutoFilledNames(result) {
      if (!result) return;
      var standard = result.cnName || result.originalName || '';
      var display = tmdbDisplayName(result);
      var folderDisplay = result.mediaType === 'movie' ? display : standard;

      if (!showInput.value || showInput.value === state.autoFilledShowName) {
        showInput.value = standard;
        state.autoFilledShowName = standard;
      }
      if (!folderNameInput.value || folderNameInput.value === state.autoFilledFolderName) {
        folderNameInput.value = folderDisplay;
        state.autoFilledFolderName = folderDisplay;
      }
    }

    async function runTmdbSearch(force) {
      var query = normalizeSpaces(detectedInput.value || state.detectedTitle || '');
      var token = tokenInput.value.trim();
      var attemptKey = query + '||' + token;
      if (!query) {
        state.tmdbResult = null;
        state.tmdbStatus = '未识别到片名，请手动修改“自动识别片名”后再搜索。';
        updateTmdbUi();
        return;
      }
      if (!token) {
        state.tmdbResult = null;
        state.tmdbStatus = '请先填写你自己的 TMDB API Read Access Token。';
        updateTmdbUi();
        return;
      }
      if (state.tmdbInFlight) return;
      if (!force && state.tmdbLastAttemptKey === attemptKey) {
        updateTmdbUi();
        return;
      }
      state.tmdbInFlight = true;
      state.tmdbLastAttemptKey = attemptKey;
      state.tmdbStatus = '正在搜索 TMDB：' + query;
      updateTmdbUi();
      try {
        var result = await tmdbSearch(query, token);
        state.tmdbResult = result;
        state.tmdbQuery = query;
        state.tmdbStatus = '已匹配到 TMDB 标准信息：' + (result.mediaType === 'movie' ? '电影' : '电视剧');
        syncAutoFilledNames(result);
      } catch (err) {
        state.tmdbResult = null;
        state.tmdbQuery = query;
        state.tmdbStatus = String(err && err.message || err);
      } finally {
        state.tmdbInFlight = false;
      }
      updateTmdbUi();
      scheduleRefresh(true, 10);
    }

    function scheduleTmdbSearch(force, delay) {
      if (state.tmdbTimer) clearTimeout(state.tmdbTimer);
      state.tmdbTimer = setTimeout(function() { runTmdbSearch(!!force); }, delay || 300);
    }

    function baseSelectionKey(items) {
      return items.map((x) => `${x.fileId}:${x.oldName}`).join('|');
    }

    function updateMeta() {
      const total = state.preview.length;
      const okCount = state.preview.filter((x) => x.ok).length;
      const failCount = total - okCount;
      const offset = parseEpisodeOffset(episodeOffsetInput ? episodeOffsetInput.value : 0);
      var folderText = '';
      if (renameFolderInput && renameFolderInput.checked) {
        if (state.folderPreview && state.folderPreview.ok) {
          folderText = state.folderPreview.same ? '；当前文件夹名称已一致' : '；将同时重命名当前文件夹为已确认的母文件夹名';
        } else {
          folderText = '；当前文件夹：' + (state.folderPreview ? state.folderPreview.reason : '未识别到');
        }
      }
      var offsetText = offset ? ('；当前集数偏移：' + (offset > 0 ? ('+' + offset) : String(offset))) : '；当前集数偏移：0';
      metaEl.innerHTML = `已读取到 <b>${total}</b> 个已勾选文件；可重命名 <b>${okCount}</b> 个；失败 <b>${failCount}</b> 个${offsetText}${folderText}。`;
    }

    function refreshPreviewSilently(force = false) {
      if (!isFilePage()) return;

      const showName = normalizeName(showInput.value);
      const folderName = normalizeName(folderNameInput.value);
      const season = Math.max(1, Math.min(99, parseInt(seasonInput.value || '1', 10) || 1));
      const episodeOffset = parseEpisodeOffset(episodeOffsetInput ? episodeOffsetInput.value : 0);

      seasonInput.value = String(season);
      if (episodeOffsetInput) episodeOffsetInput.value = String(episodeOffset);

      const items = collectSelectedItems();
      const rawSelKey = baseSelectionKey(items);
      const guessedTitle = guessTitleFromItems(items);

      if (!state.detectedDirty && guessedTitle && rawSelKey && rawSelKey !== state.lastAutoDetectKey) {
        detectedInput.value = guessedTitle;
        state.detectedTitle = guessedTitle;
        state.lastAutoDetectKey = rawSelKey;
      } else if (!detectedInput.value && guessedTitle && !state.detectedDirty) {
        detectedInput.value = guessedTitle;
        state.detectedTitle = guessedTitle;
      } else if (detectedInput.value) {
        state.detectedTitle = detectedInput.value.trim();
      }

      const renameFolderFlag = !!(renameFolderInput && renameFolderInput.checked);
      const mediaType = state.tmdbResult && state.tmdbResult.mediaType;
      const nextKey = rawSelKey + '||' + showName + '||' + folderName + '||' + season + '||' + episodeOffset + '||' + renameFolderFlag + '||' + state.detectedTitle + '||' + mediaType;
      if (!force && nextKey === state.lastSelectionKey) return;
      state.lastSelectionKey = nextKey;

      var currentAttemptKey = normalizeSpaces(state.detectedTitle || '') + '||' + tokenInput.value.trim();
      if (state.detectedTitle && tokenInput.value.trim() && state.tmdbLastAttemptKey !== currentAttemptKey) {
        scheduleTmdbSearch(false, 250);
      } else {
        updateTmdbUi();
      }

      if (!showName && !(state.tmdbResult && state.tmdbResult.mediaType === 'movie')) {
        state.preview = [];
        state.folderPreview = renameFolderFlag ? buildFolderPreview(folderName) : null;
        renderPreview(previewEl);
        metaEl.innerHTML = '请输入或确认重命名基础名称；勾选文件后会自动识别片名并尝试搜索 TMDB。';
        return;
      }

      state.preview = generatePreview(showName, season, episodeOffset);
      state.folderPreview = renameFolderFlag ? buildFolderPreview(folderName) : null;

      renderPreview(previewEl);
      updateMeta();
      if (!state.preview.length) {
        metaEl.innerHTML = '已输入名称，但暂未识别到勾选文件。';
      }
    }

    function scheduleRefresh(force = false, delay = 80) {
      if (state.timer) clearTimeout(state.timer);
      state.timer = window.setTimeout(() => refreshPreviewSilently(force), delay);
    }

    detectedInput.addEventListener('input', function() {
      state.detectedTitle = detectedInput.value.trim();
      state.detectedDirty = true;
      state.tmdbLastAttemptKey = '';
      scheduleTmdbSearch(true, 300);
      scheduleRefresh(true, 10);
    });
    tokenInput.addEventListener('change', function() {
      setTmdbToken(tokenInput.value.trim());
      state.tmdbLastAttemptKey = '';
      scheduleTmdbSearch(true, 50);
    });
    showInput.addEventListener('input', () => scheduleRefresh(true, 10));
    folderNameInput.addEventListener('input', () => scheduleRefresh(true, 10));
    seasonInput.addEventListener('input', () => scheduleRefresh(true, 10));
    if (episodeOffsetInput) episodeOffsetInput.addEventListener('input', () => scheduleRefresh(true, 10));
    renameFolderInput.addEventListener('change', () => scheduleRefresh(true, 10));
    window.setInterval(() => {
      if (!isFilePage()) return;
      scheduleRefresh(false, 0);
    }, CONFIG.pollMs);

    root.addEventListener('click', async (event) => {
      const act = event.target?.getAttribute?.('data-act');
      if (!act) return;

      if (act === 'toggle') {
        state.open = !state.open;
        bodyEl.classList.toggle('gpt115-collapse', !state.open);
        event.target.textContent = state.open ? '收起' : '展开';
        return;
      }

      if (act === 'clear') {
        state.preview = [];
        state.folderPreview = null;
        state.tmdbResult = null;
        state.tmdbStatus = '';
        state.tmdbQuery = '';
        state.detectedDirty = false;
        state.lastAutoDetectKey = '';
        state.tmdbLastAttemptKey = '';
        state.lastSelectionKey = '';
        detectedInput.value = '';
        showInput.value = '';
        folderNameInput.value = '';
        seasonInput.value = '1';
        if (episodeOffsetInput) episodeOffsetInput.value = '0';
        renderPreview(previewEl);
        updateTmdbUi();
        metaEl.textContent = '已清空。';
        return;
      }

      if (act === 'detect') {
        var guessed = guessTitleFromItems(collectSelectedItems());
        detectedInput.value = guessed || '';
        state.detectedTitle = guessed || '';
        state.detectedDirty = false;
        state.tmdbLastAttemptKey = '';
        if (guessed) {
          scheduleTmdbSearch(true, 10);
          toast('已重新识别片名');
        } else {
          toast('未识别到片名', true);
        }
        scheduleRefresh(true, 10);
        return;
      }

      if (act === 'tmdb-search') {
        setTmdbToken(tokenInput.value.trim());
        await runTmdbSearch(true);
        return;
      }

      if (act === 'copy-standard') {
        var txt = state.tmdbResult ? tmdbDisplayName(state.tmdbResult) : '';
        if (!txt) {
          toast('暂无可复制的标准名称', true);
          return;
        }
        try {
          await copyText(txt);
          toast('已复制：' + txt);
        } catch (err) {
          toast('复制失败', true);
        }
        return;
      }

      if (act === 'export') {
        if (!state.preview.length && !state.folderPreview) {
          toast('没有可导出的预览', true);
          return;
        }
        downloadText('ic_pan_rename_preview.txt', buildPreviewText());
        toast('已导出预览文件');
        return;
      }

      if (act === 'rename') {
        if (state.running) return;

        const showName = normalizeName(showInput.value);
        const folderName = normalizeName(folderNameInput.value);
        const isMovie = !!(state.tmdbResult && state.tmdbResult.mediaType === 'movie');

        if (!showName && !isMovie) {
          toast('请先输入名称', true);
          showInput.focus();
          return;
        }

        refreshPreviewSilently(true);
        const todo = state.preview.filter((x) => x.ok && x.fileId);
        const folderTodo = renameFolderInput && renameFolderInput.checked ? state.folderPreview : null;
        const canRenameFolder = !!(folderTodo && folderTodo.ok && folderTodo.folderId && !folderTodo.same);
        if (!todo.length && !canRenameFolder) {
          toast('没有可执行的重命名项目', true);
          return;
        }

        state.running = true;
        let success = 0;
        let folderRenamed = false;
        const failed = [];

        try {
          for (const item of todo) {
            try {
              await renameOne(item.fileId, item.newName);
              success += 1;
            } catch (err) {
              failed.push(`${item.oldName} => ${item.newName} | ${err?.message || err}`);
            }
          }
          if (canRenameFolder) {
            try {
              await renameFolderOne(folderTodo.folderId, folderTodo.oldName, folderTodo.newName);
              folderRenamed = true;
            } catch (err) {
              failed.push(`[当前文件夹] ${folderTodo.oldName || '当前文件夹'} => ${folderTodo.newName} | ${err && err.message ? err.message : err}`);
            }
          }
        } finally {
          state.running = false;
        }

        if (failed.length) {
          downloadText('ic_pan_rename_failed.txt', failed.join('\n'));
          toast(`完成：成功 ${success} 个文件${folderRenamed ? '，并已重命名当前文件夹' : ''}；失败 ${failed.length} 个`, true);
        } else {
          toast(`完成：成功重命名 ${success} 个文件${folderRenamed ? '，并已重命名当前文件夹' : ''}`);
        }

        refreshList();
      }
    });

    renderPreview(previewEl);
    updateTmdbUi();
    scheduleRefresh(true, 50);
    toast('IC网盘批量重命名脚本已加载');
  }

  function waitAndBootstrap() {
    let started = false;
    const start = Date.now();
    const maxWait = 30000;

    const timer = setInterval(function () {
      if (document.querySelector('.gpt115-root')) {
        clearInterval(timer);
        return;
      }

      if (!started) {
        started = true;
        try { startAutoSwitchOldVersion(); } catch (_) {}
      }

      if (isFilePage()) {
        try {
          bootstrap();
        } catch (err) {
          console.error('bootstrap failed:', err);
        }
      }

      if (Date.now() - start > maxWait) {
        clearInterval(timer);
      }
    }, 500);

    setInterval(function () {
      try {
        if (isFilePage() && !document.querySelector('.gpt115-root')) {
          bootstrap();
        }
      } catch (_) {}
    }, 1500);
  }

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  }

  ready(function () {
    waitAndBootstrap();
  });
})();
