// CONFIG - GANTI LINK LU DISINI
const TIKTOK_LINK = "https://www.tiktok.com/@liliyan.lyna?_r=1&_t=ZS-9AGHwx4I27B"; // ganti username lu
const WA_NUMBER = "6288801883795";
const COMMUNITY_LINKS = {
  whatsapp: "https://whatsapp.com/channel/0029VbDfnrw0QeacGwXoCG3U",
  telegram: "https://whatsapp.com/channel/0029VbDfnrw0QeacGwXoCG3U"
};
const ICONS = [
  "https://i.ibb.co/bjcbw3ZD/REPLACE.jpg", // dari https://ibb.co.com/bjcbw3ZD
  "https://i.ibb.co/m5trpkvC/REPLACE.jpg", // dari https://ibb.co.com/m5trpkvC
  "https://i.ibb.co/93WDGB3p/REPLACE.jpg", // dari https://ibb.co.com/93WDGB3p
  "https://i.ibb.co/1GkrkDDv/REPLACE.jpg"  // dari https://ibb.co.com/1GkrkDDv
];
const FALLBACK = "https://i.ibb.co/m5trpkvC/1.png";

// ICON ROTASI 5 DETIK
let idx = parseInt(localStorage.getItem('am_icon_idx')||'0');
function applyIcon(i){
  let url = ICONS[i % ICONS.length];
  if(url.includes('REPLACE')) url = FALLBACK;
  let a = document.getElementById('logoImg');
  let b = document.getElementById('portoImg');
  a.onerror = () => a.src = FALLBACK;
  b.onerror = () => b.src = FALLBACK;
  a.src = url; b.src = url;
  document.getElementById('favicon').href = url;
  document.getElementById('iconCounter').textContent = (i+1)+'/'+ICONS.length;
  document.getElementById('appLogo').classList.add('rotating');
  setTimeout(()=>document.getElementById('appLogo').classList.remove('rotating'),400);
  localStorage.setItem('am_icon_idx', i);
}
applyIcon(idx);
setInterval(()=>{ idx = (idx+1) % ICONS.length; applyIcon(idx); },5000);

// SETUP LINKS
document.getElementById('tiktokBtn').href = TIKTOK_LINK;

function toast(msg){
  let t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2500);
}
function buyWA(product){
  let text = `Halo kak, mau ${product} dong%0A%0ANama:%0ATransaksi: ${product}%0A%0AReady kah?`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${text}`,'_blank');
  toast('Mengalihkan ke WA...');
}
function joinCommunity(type){
  if(type==='wa') window.open(COMMUNITY_LINKS.whatsapp,'_blank');
  else window.open(COMMUNITY_LINKS.telegram,'_blank');
}
function addReview(){
  let nama = document.getElementById('namaUlasan').value.trim() || 'Anonymous';
  let isi = document.getElementById('isiUlasan').value.trim();
  if(!isi){ toast('Tulis ulasannya dulu'); return; }
  let div = document.createElement('div');
  div.className = 'rev';
  div.innerHTML = `<b>${nama}</b><p>${isi}</p>`;
  document.getElementById('reviews').prepend(div);
  document.getElementById('namaUlasan').value = '';
  document.getElementById('isiUlasan').value = '';
  toast('Makasih ulasannya!');
}