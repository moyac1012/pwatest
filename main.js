let cnt = 0;

function incBadge() {
  cnt++;
  setBadge(cnt);
}

function decBadge() {
  cnt--;
  setBadge(cnt);
}

function  setBadge(num) {
  if (navigator.setAppBadge) {
    navigator.setAppBadge(num).catch(err => console.error("バッジ設定エラー:", err));
  } else {
    console.warn("Badging APIはこのブラウザではサポートされていません。");
  }
}

function clearBadge() {
  if (navigator.clearAppBadge) {
    navigator.clearAppBadge().catch(err => console.error("バッジ解除エラー:", err));
  } else {
    console.warn("Badging APIはこのブラウザではサポートされていません。");
  }
}

async function requestNotificationPermission() {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      // You can now use the Badging API
    }
  }