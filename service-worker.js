// service-worker.js
const VERSION = 'v6'; // 数字を上げると確実に更新されます

self.addEventListener('install', (e) => {
  self.skipWaiting(); // すぐ新しいSWを有効化
});

self.addEventListener('activate', (e) => {
  clients.claim();    // 全タブに即適用
});

// fetch ハンドラを持たない＝キャッシュしない
