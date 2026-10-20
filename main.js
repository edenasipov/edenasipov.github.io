(()=>{const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.getElementById('yr').textContent=new Date().getFullYear();
const nav=document.getElementById('nav'),tl=document.getElementById('timeline');
const onScroll=()=>{nav.classList.toggle('scrolled',scrollY>30);const r=tl.getBoundingClientRect(),h=innerHeight*.6;tl.style.setProperty('--prog',Math.max(0,Math.min(100,(h-r.top)/r.height*100))+'%')};
addEventListener('scroll',onScroll,{passive:true});onScroll();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=(el.closest('.hero')?i*90:0)+'ms';io.observe(el)});
const c=document.getElementById('stars'),x=c.getContext('2d');let W,H,S=[],dpr=Math.min(devicePixelRatio||1,2);
const init=()=>{W=c.width=innerWidth*dpr;H=c.height=innerHeight*dpr;const n=Math.floor(innerWidth*innerHeight/5500);S=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,r:(Math.random()*1.2+.2)*dpr,t:Math.random()*6.28,s:Math.random()*.02+.004,v:(Math.random()*.08+.02)*dpr}))};
let shoot=null;const draw=()=>{x.clearRect(0,0,W,H);for(const s of S){s.t+=s.s;if(!rm){s.y-=s.v;if(s.y<0)s.y=H}x.globalAlpha=.35+.65*Math.abs(Math.sin(s.t));x.fillStyle='#dfe6ff';x.beginPath();x.arc(s.x,s.y,s.r,0,6.28);x.fill()}
if(!rm){if(!shoot&&Math.random()<.003)shoot={x:Math.random()*W,y:Math.random()*H*.4,l:0};if(shoot){shoot.l+=12*dpr;const g=x.createLinearGradient(shoot.x+shoot.l,shoot.y+shoot.l*.4,shoot.x+shoot.l-120*dpr,shoot.y+(shoot.l-120*dpr)*.4);g.addColorStop(0,'rgba(200,230,255,.9)');g.addColorStop(1,'transparent');x.globalAlpha=1;x.strokeStyle=g;x.lineWidth=1.5*dpr;x.beginPath();x.moveTo(shoot.x+shoot.l,shoot.y+shoot.l*.4);x.lineTo(shoot.x+shoot.l-120*dpr,shoot.y+(shoot.l-120*dpr)*.4);x.stroke();if(shoot.l>W*.5)shoot=null}requestAnimationFrame(draw)}};
init();draw();addEventListener('resize',()=>{init();if(rm)draw()});})();
