(()=>{
  const $=id=>document.getElementById(id);
  $('openInvitation').onclick=()=>{
    const entrance=$('entrance');
    $('openInvitation').disabled=true;
    entrance.classList.add('is-open');
    setTimeout(()=>{
      entrance.hidden=true;
      $('site').removeAttribute('inert');
      scrollTo(0,0);
      $('home').setAttribute('tabindex','-1');
      $('home').focus({preventScroll:true});
    },matchMedia('(prefers-reduced-motion: reduce)').matches?0:1450);
  };
  function tick(){
    const t=Math.max(0,new Date('2026-12-03T09:00:00+05:30')-Date.now());
    for(const [id,n] of [['days',Math.floor(t/86400000)],['hours',Math.floor(t/3600000)%24],['minutes',Math.floor(t/60000)%60],['seconds',Math.floor(t/1000)%60]])
      $(id).textContent=String(n).padStart(2,'0');
  }
  tick();setInterval(tick,1000);
  $('rsvpForm').onsubmit=e=>{
    e.preventDefault();
    const name=$('guestName');
    name.setCustomValidity(name.value.trim()?'':'Please enter your name.');
    if(!$('rsvpForm').reportValidity())return;
    const declining=$('attendance').value==='Regretfully declines';
    const msg='Wedding RSVP — Saurabh & Simran\nName: '+name.value.trim()+'\nResponse: '+$('attendance').value+'\nGuests: '+(declining?'0':$('guestCount').value);
    location.assign('https://wa.me/918988481269?text='+encodeURIComponent(msg));
  };
  $('guestName').oninput=()=>$('guestName').setCustomValidity('');
  async function copyInvite(){
    try{
      await navigator.clipboard.writeText(location.href);
      $('shareInvite').textContent='Link copied ✓';
    }catch{
      window.prompt('Copy invitation link:',location.href);
    }
  }
  $('shareInvite').onclick=async()=>{
    if(navigator.share){
      try{await navigator.share({title:'Saurabh & Simran',url:location.href});}
      catch(error){if(error.name!=='AbortError')await copyInvite();}
    }else await copyInvite();
  };
})();
