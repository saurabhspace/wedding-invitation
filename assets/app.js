(()=>{
  'use strict';
  const $=id=>document.getElementById(id);
  const CELEBRATIONS_START='2026-12-02T00:00:00+05:30';
  const RSVP_NUMBER='918988481269';
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');

  // The page remains readable without JavaScript. Entry is a progressive enhancement.
  const entrance=$('entrance');
  entrance.hidden=false;
  $('site').inert=true;
  document.body.classList.add('entry-active');
  $('openInvitation').focus({preventScroll:true});
  $('openInvitation').onclick=()=>{
    $('openInvitation').disabled=true;
    entrance.classList.add('is-open');
    window.setTimeout(()=>{
      entrance.hidden=true;
      $('site').inert=false;
      document.body.classList.remove('entry-active');
      window.scrollTo(0,0);
      $('home').focus({preventScroll:true});
    },reducedMotion.matches?0:1100);
  };

  // Subtle section reveals; content stays visible if observation is unavailable.
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer=new IntersectionObserver(entries=>{
      for(const entry of entries)if(entry.isIntersecting){
        entry.target.classList.add('is-visible');observer.unobserve(entry.target);
      }
    },{threshold:.08});
    for(const element of document.querySelectorAll('.invitation-layout,.section-heading,.day,.venue-art,.venue-copy,.rsvp-copy')){
      element.classList.add('reveal-ready');observer.observe(element);
    }
    reducedMotion.addEventListener('change',event=>{
      if(event.matches){observer.disconnect();for(const element of document.querySelectorAll('.reveal-ready'))element.classList.add('is-visible');}
    });
  }
  let progressQueued=false;
  function updateProgress(){
    const length=document.documentElement.scrollHeight-window.innerHeight;
    const progress=length>0?Math.min(1,Math.max(0,window.scrollY/length)):0;
    $('readingProgress').style.transform=`scaleX(${progress})`;
    progressQueued=false;
  }
  window.addEventListener('scroll',()=>{
    if(!progressQueued){progressQueued=true;window.requestAnimationFrame(updateProgress);}
  },{passive:true});
  window.addEventListener('resize',updateProgress);
  updateProgress();

  function tick(){
    const remaining=Math.max(0,new Date(CELEBRATIONS_START).getTime()-Date.now());
    for(const [id,n] of [['days',Math.floor(remaining/86400000)],['hours',Math.floor(remaining/3600000)%24],['minutes',Math.floor(remaining/60000)%60],['seconds',Math.floor(remaining/1000)%60]])
      $(id).textContent=String(n).padStart(2,'0');
    if(!remaining)$('countdownNote').textContent='Our celebration dates have arrived. Thank you for your love and blessings.';
  }
  tick();window.setInterval(tick,1000);

  function updateAttendance(){
    const declining=$('attendance').value==='Regretfully declines';
    $('guestCountField').hidden=declining;
    $('guestCount').disabled=declining;
    $('guestCount').required=!declining;
  }
  $('attendance').onchange=updateAttendance;
  updateAttendance();
  $('guestName').oninput=()=>$('guestName').setCustomValidity('');
  $('rsvpForm').onsubmit=event=>{
    event.preventDefault();
    const name=$('guestName');
    name.setCustomValidity(name.value.trim()?'':'Please enter your name.');
    if(!$('rsvpForm').reportValidity())return;
    const count=$('attendance').value==='Regretfully declines'?0:$('guestCount').value;
    const message=`Wedding RSVP — Saurabh & Simran\nName: ${name.value.trim()}\nResponse: ${$('attendance').value}\nGuests: ${count}\nCelebrations: 2–4 December 2026, Behlaog`;
    window.location.assign(`https://wa.me/${RSVP_NUMBER}?text=${encodeURIComponent(message)}`);
  };

  // No external map request is made until the guest chooses to load it.
  $('loadMap').hidden=false;
  $('loadMap').onclick=()=>{
    const frame=document.createElement('iframe');
    frame.title='Village Behlaog area, Theog, Shimla';
    frame.loading='lazy';
    frame.referrerPolicy='no-referrer-when-downgrade';
    frame.src='https://maps.google.com/maps?q=Village%20Behlaog%2C%20Kargoli%20Deha%20Road%2C%20Theog%2C%20Shimla%2C%20Himachal%20Pradesh&output=embed';
    $('mapContainer').append(frame);
    $('loadMap').hidden=true;
  };

  function manualCopy(){
    $('shareUrl').value=window.location.href;
    $('copyDialog').hidden=false;
    $('site').inert=true;
    $('shareUrl').focus();
    $('shareUrl').select();
  }
  function closeCopy(){
    $('copyDialog').hidden=true;
    $('site').inert=false;
    $('shareInvite').focus();
  }
  $('closeCopy').onclick=closeCopy;
  $('copyDialog').onkeydown=event=>{
    if(event.key==='Escape'){event.preventDefault();closeCopy();}
    if(event.key==='Tab'){
      const first=$('shareUrl'),last=$('closeCopy');
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
    }
  };
  async function copyInvite(){
    try{
      await navigator.clipboard.writeText(window.location.href);
      $('shareStatus').textContent='Invitation link copied. Ready to share.';
    }catch{manualCopy();}
  }
  $('shareInvite').hidden=false;
  $('shareInvite').onclick=async()=>{
    const data={title:'Saurabh & Simran — Wedding Invitation',text:'Join us in Behlaog, 2–4 December 2026.',url:window.location.href};
    if(navigator.share){
      try{await navigator.share(data);}
      catch(error){if(error.name!=='AbortError')await copyInvite();}
    }else await copyInvite();
  };

  // A quiet, original instrumental ambience, synthesized locally. No audio download or autoplay.
  const AudioContext=window.AudioContext||window.webkitAudioContext;
  if(AudioContext){
    const button=$('musicToggle');
    button.hidden=false;
    let context,master,loop,playing=false,busy=false,step=0;
    const melody=[261.63,329.63,392,329.63,293.66,349.23,440,349.23,261.63,329.63,392,523.25,293.66,349.23,392,329.63];
    function soundNote(){
      const now=context.currentTime;
      const frequency=melody[step++%melody.length];
      for(const [ratio,level] of [[1,.13],[.5,.045],[2,.018]]){
        const voice=context.createOscillator(),gain=context.createGain();
        voice.type='sine';voice.frequency.value=frequency*ratio;
        gain.gain.setValueAtTime(0,now);
        gain.gain.linearRampToValueAtTime(level,now+.07);
        gain.gain.exponentialRampToValueAtTime(.0001,now+2.7);
        voice.connect(gain);gain.connect(master);voice.start(now);voice.stop(now+2.8);
        voice.onended=()=>{voice.disconnect();gain.disconnect();};
      }
    }
    async function stopMusic(){
      window.clearInterval(loop);playing=false;
      button.setAttribute('aria-pressed','false');
      button.setAttribute('aria-label','Play instrumental ambience');
      $('musicLabel').textContent='Sound off';
      if(context&&context.state==='running')await context.suspend();
    }
    button.onclick=async()=>{
      if(busy)return;
      busy=true;
      try{
        if(playing)await stopMusic();
        else{
          if(!context){context=new AudioContext();master=context.createGain();master.gain.value=.25;master.connect(context.destination);}
          await context.resume();
          if(document.hidden){await stopMusic();return;}
          playing=true;soundNote();loop=window.setInterval(soundNote,1600);
          button.setAttribute('aria-pressed','true');
          button.setAttribute('aria-label','Mute instrumental ambience');
          $('musicLabel').textContent='Sound on';
        }
      }catch{
        await stopMusic().catch(()=>{});
        $('shareStatus').textContent='Sound is unavailable in this browser.';
      }finally{busy=false;}
    };
    document.addEventListener('visibilitychange',()=>{if(document.hidden)stopMusic().catch(()=>{});});
    window.addEventListener('pagehide',()=>{stopMusic().catch(()=>{});});
  }
})();
