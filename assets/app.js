(()=>{
 'use strict';
 const $=id=>document.getElementById(id);
 const CELEBRATIONS_START='2026-12-02T00:00:00+05:30';
 const RSVP_NUMBER='918988481269';
 const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
 let language='en',soundPlaying=false;
 const english=new Map([...document.querySelectorAll('[data-i18n]')].map(el=>[el,el.innerHTML.replace(/<br\s*\/?\s*>/gi,'\n')]));
 const hi={
  youreInvited:'आप सादर आमंत्रित हैं',weddingBehlaog:'बेहलोग में विवाह समारोह',lightLamp:'दीप जलाने के लिए स्पर्श करें',skip:'निमंत्रण पर जाएँ',navDays:'समारोह',navHome:'हमारा घर',welcome:'शुभ विवाह में आपका स्वागत है',groom:'सौरभ',bride:'सिमरन',heroDate:'२–४ दिसम्बर २०२६',behlaog:'बेहलोग · हिमाचल प्रदेश',scroll:'नीचे देखें',theDate:'शुभ तिथियाँ',scratchHint:'तिथियाँ देखने के लिए खुरचें या स्पर्श करें।',dateDays:'दिन',dateMonth:'माह',dateYear:'वर्ष',december:'दिसम्बर',inviteLead:'बड़ों के आशीर्वाद के साथ,\nआप सादर आमंत्रित हैं',with:'संग',families:'समस्त परिवार सहित',fullDate:'२–४ दिसम्बर २०२६',formalAddress:'हमारा घर, गाँव बेहलोग\nठियोग, शिमला, हिमाचल प्रदेश',specialDay:'२ से ४ दिसम्बर के बीच किसी भी दिन पधारें। ३ दिसम्बर परिवार और मित्रों के संग मिलने का विशेष दिन है।',together:'साथ, एक नई शुरुआत',portraitCaption:'तुम्हारे साथ हर जगह घर जैसा लगता है।',celebrations:'विवाह समारोह',scheduleNote:'साथ मिलकर मनाने के तीन दिन।\nरस्मों के नाम और समय जल्द साझा करेंगे।',date2:'बुधवार, २ दिसम्बर',date3:'गुरुवार, ३ दिसम्बर',date4:'शुक्रवार, ४ दिसम्बर',detailsSoon:'विवरण जल्द साझा करेंगे',dayOne:'पहला दिन',dayTwo:'दूसरा दिन',dayThree:'तीसरा दिन',dayOneCopy:'हमारे उत्सव की शुरुआत।',dayTwoCopy:'परिवार और मित्रों के संग मिलने का विशेष दिन।',dayThreeCopy:'साथ बिताए कुछ और यादगार पल।',calendar:'कैलेंडर में जोड़ें',saveDates:'तीनों तिथियाँ सुरक्षित करें',calendarNote:'कैलेंडर में पूरे दिन सुरक्षित हैं। रस्मों का समय बाद में साझा करेंगे।',countdown:'उत्सव के आरम्भ तक',days:'दिन',hours:'घंटे',minutes:'मिनट',seconds:'सेकंड',countdownNote:'२ दिसम्बर २०२६ — हमारे उत्सव के पहले दिन तक।',location:'हमारा घर',village:'गाँव बेहलोग',homeHills:'पहाड़ों में, अपने घर पर उत्सव।',address:'करगोली–देहा मार्ग पर\nतहसील ठियोग, जिला शिमला\nहिमाचल प्रदेश',homePhoto:'हमारे घर की तस्वीर यहाँ जल्द जोड़ी जाएगी।',showMap:'मानचित्र देखें',openMaps:'गूगल मैप्स में खोलें',mapNote:'मानचित्र गाँव का क्षेत्र दिखाता है। सटीक स्थान के लिए ऊपर दिए बटन का उपयोग करें।',gettingThere:'यहाँ कैसे पहुँचें',travelCopy:'हमारे घर का रास्ता खोजने में सहायता के लिए हमें फ़ोन करें।',call:'सौरभ को फ़ोन करें · +९१ ८९८८४ ८१२६९',ourFamilies:'हमारे परिवार',blessings:'स्नेह और आशीर्वाद सहित',familyCopy:'समस्त परिवार सहित,\nहम अपने घर में आपका स्वागत करने को उत्सुक हैं।',music:'कुछ मधुर संगीत',musicCopy:'खुशियों के इन पलों के लिए एक मधुर धुन।',playMusic:'संगीत चलाएँ',joinUs:'क्या आप पधारेंगे?',rsvpCopy:'कृपया हर दिन आने वाले मेहमानों की संख्या बताएँ। आपका साथ हमारे लिए बहुत मायने रखता है।',yourName:'आपका नाम',rsvp2:'२ दिसम्बर',rsvp3:'३ दिसम्बर',rsvp4:'४ दिसम्बर',wednesday:'बुधवार',thursday:'गुरुवार',friday:'शुक्रवार',zeroGuests:'जिस दिन नहीं आ सकें, उसके लिए ० चुनें। संख्या में स्वयं को शामिल करें।',sendWhatsApp:'व्हाट्सऐप पर भेजें',whatsappNote:'आपका उत्तर व्हाट्सऐप में खुलेगा। वहाँ भेजें दबाने तक कोई संदेश नहीं भेजा जाएगा।',withLove:'हमारे परिवारों की ओर से सप्रेम',closingNames:'सौरभ और सिमरन',share:'यह निमंत्रण साझा करें ↗',backTop:'ऊपर जाएँ ↑',shareJoy:'खुशियाँ साझा करें',linkLabel:'निमंत्रण का लिंक',done:'हो गया'
 };
 const messages={en:{lit:'With love, welcome to our celebration.',arrived:'Our celebration dates have arrived. Thank you for your love and blessings.',revealed:'2–4 December 2026. We look forward to seeing you.',nameError:'Please enter your name.',copied:'Invitation link copied. Ready to share.',play:'Play instrumental',pause:'Pause instrumental',audioError:'Sound is unavailable in this browser.'},hi:{lit:'स्नेह सहित, हमारे उत्सव में आपका स्वागत है।',arrived:'हमारे उत्सव की तिथियाँ आ गई हैं। आपके स्नेह और आशीर्वाद के लिए धन्यवाद।',revealed:'२–४ दिसम्बर २०२६। आपके आगमन की प्रतीक्षा है।',nameError:'कृपया अपना नाम लिखें।',copied:'निमंत्रण का लिंक कॉपी हो गया।',play:'संगीत चलाएँ',pause:'संगीत रोकें',audioError:'इस ब्राउज़र में संगीत उपलब्ध नहीं है।'}};
 const t=key=>messages[language][key];
 let syncSound=()=>{};
 $('languageToggle').hidden=false;
 $('languageToggle').onclick=()=>{
  language=language==='en'?'hi':'en';document.documentElement.lang=language;
  for(const [el,original] of english)el.textContent=language==='hi'?(hi[el.dataset.i18n]||original):original;
  $('languageToggle').textContent=language==='en'?'हिं':'EN';
  $('languageToggle').setAttribute('aria-label',language==='en'?'Switch to Hindi':'Switch to English');
  $('guestName').placeholder=language==='en'?'Your name':'आपका नाम';
  $('guestName').setCustomValidity('');syncSound();tick();
  if(scratchCards.every(card=>card.classList.contains('is-revealed')))$('revealStatus').textContent=t('revealed');
 };

 // The lamp entrance is optional enhancement; no-JavaScript visitors see the invitation.
 const entrance=$('entrance');entrance.hidden=false;$('site').inert=true;
 document.body.classList.add('entry-active');$('openInvitation').focus({preventScroll:true});
 $('openInvitation').onclick=()=>{
  $('openInvitation').disabled=true;entrance.classList.add('is-lit');
  const prompt=entrance.querySelector('.lamp-prompt');if(prompt)prompt.textContent=t('lit');
  window.setTimeout(()=>{
   entrance.classList.add('is-leaving');
   window.setTimeout(()=>{
    entrance.hidden=true;$('site').inert=false;document.body.classList.remove('entry-active');
    window.scrollTo(0,0);$('home').focus({preventScroll:true});
   },reducedMotion.matches?0:550);
  },reducedMotion.matches?0:1050);
 };

 // Scratch or tap: every date also has a native keyboard-operable button.
 const scratchCards=[...document.querySelectorAll('[data-scratch]')];
 for(const card of scratchCards){
  const canvas=document.createElement('canvas');canvas.setAttribute('aria-hidden','true');
  const context=canvas.getContext('2d');if(!context)continue;
  card.append(canvas);let revealed=false,drawing=false,moves=0,lastPoint;
  function reveal(){
   if(revealed)return;revealed=true;drawing=false;card.classList.add('is-revealed');
   card.setAttribute('aria-pressed','true');
   if(scratchCards.every(item=>item.classList.contains('is-revealed')))$('revealStatus').textContent=t('revealed');
  }
  function paint(){
   if(revealed)return;
   const rect=card.getBoundingClientRect(),dpr=Math.min(window.devicePixelRatio||1,2);
   if(!rect.width||!rect.height)return;
   canvas.width=Math.round(rect.width*dpr);canvas.height=Math.round(rect.height*dpr);
   context.setTransform(dpr,0,0,dpr,0,0);context.globalCompositeOperation='source-over';
   const fill=context.createLinearGradient(0,0,rect.width,rect.height);fill.addColorStop(0,'#b18b47');fill.addColorStop(.3,'#f1d99d');fill.addColorStop(.65,'#c4a364');fill.addColorStop(1,'#ecd499');
   context.fillStyle=fill;context.fillRect(0,0,rect.width,rect.height);
   // Deterministic foil speckles, regenerated only when the viewport changes.
   for(let i=0;i<180;i++){context.fillStyle=i%3?'#fff6d844':'#7a5d2f22';context.fillRect((i*47.3)%rect.width,(i*83.7)%rect.height,1.3,1.3);}
   context.strokeStyle='#fff1ce88';context.lineWidth=1;context.strokeRect(7,7,rect.width-14,rect.height-14);
   context.fillStyle='#fff2c7';context.font='30px Georgia';context.textAlign='center';context.textBaseline='middle';context.fillText('✦',rect.width/2,rect.height/2);
  }
  function point(event){const r=canvas.getBoundingClientRect();return {x:event.clientX-r.left,y:event.clientY-r.top};}
  function scratch(event){
   const p=point(event);context.globalCompositeOperation='destination-out';context.lineWidth=34;context.lineCap='round';
   context.beginPath();context.moveTo(lastPoint?lastPoint.x:p.x,lastPoint?lastPoint.y:p.y);context.lineTo(p.x,p.y);context.stroke();lastPoint=p;
   if(++moves%8===0){const pixels=context.getImageData(0,0,canvas.width,canvas.height).data;let cleared=0,total=0;for(let i=3;i<pixels.length;i+=64){total++;if(pixels[i]<64)cleared++;}if(cleared/total>.28)reveal();}
  }
  canvas.onpointerdown=event=>{if(revealed)return;drawing=true;lastPoint=point(event);canvas.setPointerCapture(event.pointerId);scratch(event);};
  canvas.onpointermove=event=>{if(drawing)scratch(event);};
  canvas.onpointerup=()=>{drawing=false;lastPoint=null;};canvas.onpointercancel=()=>{drawing=false;lastPoint=null;};
  card.onclick=reveal;card.setAttribute('aria-pressed','false');paint();
  if(window.ResizeObserver)new window.ResizeObserver(paint).observe(card);else window.addEventListener('resize',paint);
 }

 function tick(){
  const remaining=Math.max(0,new Date(CELEBRATIONS_START).getTime()-Date.now());
  for(const [id,n] of [['days',Math.floor(remaining/86400000)],['hours',Math.floor(remaining/3600000)%24],['minutes',Math.floor(remaining/60000)%60],['seconds',Math.floor(remaining/1000)%60]])$(id).textContent=String(n).padStart(2,'0');
  if(!remaining)$('countdownNote').textContent=t('arrived');
 }
 tick();window.setInterval(tick,1000);
 if(window.IntersectionObserver&&!reducedMotion.matches){
  const observer=new window.IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}},{threshold:.06});
  for(const el of document.querySelectorAll('.formal-invite,.portrait,.event,.home-photo,.family-section>.crest')){el.classList.add('reveal-ready');observer.observe(el);}
  reducedMotion.addEventListener('change',event=>{if(event.matches){observer.disconnect();for(const el of document.querySelectorAll('.reveal-ready'))el.classList.add('is-visible');}});
 }
 let progressQueued=false;
 function updateProgress(){const length=document.documentElement.scrollHeight-window.innerHeight;$('readingProgress').style.transform=`scaleX(${length>0?Math.max(0,Math.min(1,window.scrollY/length)):0})`;progressQueued=false;}
 window.addEventListener('scroll',()=>{if(!progressQueued){progressQueued=true;window.requestAnimationFrame(updateProgress);}},{passive:true});window.addEventListener('resize',updateProgress);updateProgress();

 const countIds=['countDec2','countDec3','countDec4'];
 function syncSteppers(){for(const button of document.querySelectorAll('[data-step]')){const input=$(button.dataset.count);button.disabled=Number(button.dataset.step)<0?Number(input.value)<=0:Number(input.value)>=30;}}
 for(const button of document.querySelectorAll('[data-step]'))button.onclick=()=>{const input=$(button.dataset.count);input.value=String(Math.min(30,Math.max(0,(Number(input.value)||0)+Number(button.dataset.step))));syncSteppers();};
 for(const id of countIds)$(id).oninput=syncSteppers;syncSteppers();
 $('guestName').oninput=()=>$('guestName').setCustomValidity('');
 $('rsvpForm').onsubmit=event=>{
  event.preventDefault();const name=$('guestName');name.setCustomValidity(name.value.trim()?'':t('nameError'));
  if(!$('rsvpForm').reportValidity())return;
  const counts=countIds.map(id=>Number($(id).value));
  if(counts.some(n=>!Number.isInteger(n)||n<0||n>30))return;
  const message=`Wedding RSVP — Saurabh & Simran\nName: ${name.value.trim()}\nResponse: ${counts.some(n=>n>0)?'Joyfully accepts':'Regretfully declines'}\n2 December: ${counts[0]} guest(s)\n3 December: ${counts[1]} guest(s)\n4 December: ${counts[2]} guest(s)\nCounts include the person replying.\nVenue: Our home, Village Behlaog, Theog, Shimla`;
  window.location.assign(`https://wa.me/${RSVP_NUMBER}?text=${encodeURIComponent(message)}`);
 };
 $('loadMap').hidden=false;$('loadMap').onclick=()=>{
  const frame=document.createElement('iframe');frame.title='Village Behlaog area, Theog, Shimla';frame.loading='lazy';frame.referrerPolicy='no-referrer-when-downgrade';frame.src='https://maps.google.com/maps?q=Village%20Behlaog%2C%20Kargoli%20Deha%20Road%2C%20Theog%2C%20Shimla%2C%20Himachal%20Pradesh&output=embed';
  $('mapContainer').append(frame);$('mapTeaser').hidden=true;
 };
 function manualCopy(){$('shareUrl').value=window.location.href;$('copyDialog').hidden=false;$('site').inert=true;$('shareUrl').focus();$('shareUrl').select();}
 function closeCopy(){$('copyDialog').hidden=true;$('site').inert=false;$('shareInvite').focus();}
 $('closeCopy').onclick=closeCopy;$('copyDialog').onkeydown=event=>{
  if(event.key==='Escape'){event.preventDefault();closeCopy();}
  if(event.key==='Tab'){const first=$('shareUrl'),last=$('closeCopy');if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}
 };
 async function copyInvite(){try{await navigator.clipboard.writeText(window.location.href);$('shareStatus').textContent=t('copied');}catch{manualCopy();}}
 $('shareInvite').hidden=false;$('shareInvite').onclick=async()=>{const data={title:'Saurabh & Simran — Wedding Invitation',text:'Join us at our home in Behlaog, 2–4 December 2026.',url:window.location.href};if(navigator.share){try{await navigator.share(data);}catch(error){if(error.name!=='AbortError')await copyInvite();}}else await copyInvite();};

 // Original, locally synthesized ambience. Off until a guest explicitly presses play.
 const AudioContext=window.AudioContext||window.webkitAudioContext;
 if(AudioContext){
  const button=$('musicToggle'),inline=$('musicInline');button.hidden=false;inline.hidden=false;
  let context,master,loop,busy=false,step=0;
  const melody=[261.63,329.63,392,329.63,293.66,349.23,440,349.23,261.63,329.63,392,523.25,293.66,349.23,392,329.63];
  function note(){const now=context.currentTime,frequency=melody[step++%melody.length];for(const [ratio,level] of [[1,.13],[.5,.045],[2,.018]]){const voice=context.createOscillator(),gain=context.createGain();voice.type='sine';voice.frequency.value=frequency*ratio;gain.gain.setValueAtTime(0,now);gain.gain.linearRampToValueAtTime(level,now+.07);gain.gain.exponentialRampToValueAtTime(.0001,now+2.7);voice.connect(gain);gain.connect(master);voice.start(now);voice.stop(now+2.8);voice.onended=()=>{voice.disconnect();gain.disconnect();};}}
  syncSound=()=>{button.setAttribute('aria-pressed',String(soundPlaying));inline.setAttribute('aria-pressed',String(soundPlaying));button.setAttribute('aria-label',soundPlaying?(language==='hi'?'संगीत रोकें':'Mute instrumental ambience'):(language==='hi'?'संगीत चलाएँ':'Play instrumental ambience'));$('musicIcon').textContent=soundPlaying?'Ⅱ':'▶';inline.textContent=t(soundPlaying?'pause':'play');};
  async function stop(){window.clearInterval(loop);soundPlaying=false;syncSound();if(context&&context.state==='running')await context.suspend();}
  async function toggle(){if(busy)return;busy=true;try{if(soundPlaying)await stop();else{if(!context){context=new AudioContext();master=context.createGain();master.gain.value=.25;master.connect(context.destination);}await context.resume();if(document.hidden){await stop();return;}soundPlaying=true;note();loop=window.setInterval(note,1600);syncSound();}}catch{await stop().catch(()=>{});$('musicStatus').textContent=t('audioError');}finally{busy=false;}}
  button.onclick=toggle;inline.onclick=toggle;syncSound();document.addEventListener('visibilitychange',()=>{if(document.hidden)stop().catch(()=>{});});window.addEventListener('pagehide',()=>{stop().catch(()=>{});});
 }
})();
