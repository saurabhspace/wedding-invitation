const C=window.WEDDING;
const $=id=>document.getElementById(id);
$('coverNames').textContent=`${C.groomHindi} & ${C.brideHindi}`;
$('coupleNames').innerHTML=`${escapeHTML(C.groom)} <em>&</em> ${escapeHTML(C.bride)}`;
$('footerNames').textContent=`${C.groom} & ${C.bride}`;
$('heroDate').textContent=C.dateLabel;
$('venueName').textContent=C.venueName;
$('venueAddress').textContent=C.venueAddress;
$('mapLink').href=C.mapsUrl;
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
$('eventGrid').replaceChildren(...C.events.map(e=>{const card=document.createElement('article');card.className='event-card';for(const [tag,cls,value] of [['div','event-icon',e.icon],['h3','',e.title],['p','hindi',e.hindi],['p','',e.date],['p','',e.time],['p','',e.location]]){const el=document.createElement(tag);if(cls)el.className=cls;el.textContent=value;card.append(el)}return card}));
$('openInvite').onclick=()=>{$('cover').remove();$('main').classList.remove('hidden');window.scrollTo(0,0);petals(18)};
function updateCountdown(){const diff=Math.max(0,new Date(C.weddingDate).getTime()-Date.now());$('days').textContent=Math.floor(diff/86400000);$('hours').textContent=String(Math.floor(diff/3600000)%24).padStart(2,'0');$('minutes').textContent=String(Math.floor(diff/60000)%60).padStart(2,'0');$('seconds').textContent=String(Math.floor(diff/1000)%60).padStart(2,'0')};updateCountdown();setInterval(updateCountdown,1000);
$('rsvpButton').onclick=()=>{const name=$('guestName').value.trim();if(!name){$('guestName').focus();$('guestName').reportValidity();alert('Please enter your name first.');return}if(!/^\d{10,15}$/.test(C.rsvpWhatsApp)||C.rsvpWhatsApp==='919999999999'){alert('The couple needs to set their WhatsApp number in config.js before RSVP can work.');return}const count=Math.min(20,Math.max(1,Number($('guestCount').value)||1));const msg=`Wedding RSVP — ${C.groom} & ${C.bride}\nName: ${name}\nResponse: ${$('attendance').value}\nGuests: ${count}`;window.open(`https://wa.me/${C.rsvpWhatsApp}?text=${encodeURIComponent(msg)}`,'_blank','noopener,noreferrer')};
$('shareButton').onclick=async()=>{const data={title:`${C.groom} & ${C.bride} — Wedding Invitation`,text:'You are warmly invited to celebrate with us!',url:location.href};if(navigator.share){try{await navigator.share(data)}catch(e){if(e.name!=='AbortError')console.warn(e)}}else{try{await navigator.clipboard.writeText(location.href);$('shareButton').textContent='Link copied ✓'}catch{prompt('Copy invitation link:',location.href)}}};
function petals(n){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;for(let i=0;i<n;i++){const p=document.createElement('span');p.className='petal';p.textContent='✿';p.style.left=Math.random()*100+'%';p.style.fontSize=9+Math.random()*15+'px';p.style.animationDuration=4+Math.random()*5+'s';p.style.animationDelay=Math.random()*2+'s';$('petals').append(p);p.addEventListener('animationend',()=>p.remove())}}
// Music is optional: put a licensed/local music.mp3 in this folder to enable playback.
const audio=new Audio('music.mp3');audio.loop=true;let playing=false;
$('music').onclick=async()=>{if(playing){audio.pause();playing=false;$('music').querySelector('span').textContent='Music off';return}try{await audio.play();playing=true;$('music').querySelector('span').textContent='Music on'}catch{$('music').querySelector('span').textContent='Add music.mp3'}};
