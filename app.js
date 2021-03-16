!function(){"use strict";var e,o={314:function(){window.onbeforeunload=function(){window.scrollTo(0,0)},window.addEventListener("resize",(function(){console.log(window.innerHeight),console.log(window.innerWidth)}));var e=window.innerHeight,o=window.innerWidth,t=o/o-o,r=o/o+o,n=(document.querySelector(".image"),gsap.utils.toArray(".cloudText"));gsap.registerPlugin(TextPlugin,ScrollToPlugin,ScrollTrigger);var i=document.querySelector(".blackImageCover"),c=document.querySelector("#Cloud_left_1_"),u=document.querySelector("#Cloud_right_1_"),a=document.querySelector("#Sun_1_"),l=(document.querySelector("#Sky"),document.querySelector("body"),document.querySelector("#Tent"),document.querySelector("#Sign-name")),s=(document.querySelector(".textHier"),window.location.search),d=new URLSearchParams(s),m=null===d.get("name")?"Guest":d.get("name"),g=d.get("email"),p=d.get("phone");document.querySelector(".name").value=m,document.querySelector(".email").value=g,document.querySelector(".phone").value=p;var f=["Hi","Hola","Hello","Hej","Hei","Ni Hao","Moi","Aloha","Privet","Ciao","Halo"];setInterval((function(){var e=Math.floor(Math.random()*f.length);document.querySelector(".sign-text").textContent="".concat(f[e]," ").concat(m)}),2e3);var y=document.querySelector("#tree1_1_"),v=document.querySelector("#tree2_1_"),b=document.querySelector("#tree3_1_"),h=document.querySelector("#tree4_1_"),x=document.querySelector("#tree5_1_"),S=(document.querySelector("#Tree-green1_1_"),document.querySelector("#Tree-green2_1_"),document.querySelector(".contactForm")),w=gsap.utils.toArray(".contactForm input,textarea");document.querySelector(".bookCompleted");document.querySelector(".BookMe").addEventListener("click",(function(){gsap.to(w,{duration:.2,opacity:0,stagger:.2,onComplete:function(){S.innerHTML='\n        <div class="w4rAnimated_checkmark bookCompleted">\n        <svg version="1.1" class="svgBookMe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">\n        <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>\n        <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>\n        </svg>\n        <p style="">Tack för din bokning! Du kommer inom kort få mer information per mail.</p>\n        </div>\n        '}})}));document.querySelector("#longText");gsap.timeline().from(y,{duration:.2,y:160,rotation:-90,transformOrigin:"center bottom"}).from(h,{duration:.2,y:0,rotation:90,transformOrigin:"center bottom"}).from(b,{duration:.2,y:160,rotation:-90,transformOrigin:"center bottom"}).from(x,{duration:.2,y:0,rotation:90,transformOrigin:"center bottom"}).from(v,{duration:.2,y:160,rotation:-90,transformOrigin:"center bottom"}).from(c,{x:t,duration:.8}).from(u,{x:r,duration:.8},"<").to(c,{immediateRender:!1,overwrite:"auto",scrollTrigger:{trigger:"body",start:"top -350px",end:"top -2000px",scrub:!0},x:o+350}).to(u,{immediateRender:!1,overwrite:"auto",scrollTrigger:{trigger:"body",start:"top -350px",end:"top -2000px",scrub:!0},x:-o-350}).from(l,{duration:.8,rotation:180,transformOrigin:"center bottom",ease:"bounce.out"},"+=0.5"),gsap.to(a,{scrollTrigger:{trigger:"body",start:"+=2000",end:"+=3400",scrub:1},x:o+100}),gsap.to(a,{scrollTrigger:{trigger:"body",start:"+=2200",end:"+=3400",scrub:1},y:e-100}),gsap.to(i,{scrollTrigger:{trigger:"body",start:"top -2000px",end:"top -3000px",scrub:1},onComplete:function(){gsap.fromTo(S,{x:-500},{opacity:1,x:0,onComplete:function(){n.forEach((function(e){gsap.to(e,{})}))}})},onReverseComplete:function(){gsap.to(S,{opacity:0,duration:0})},opacity:.4});var k=document.querySelector("#longText");gsap.to(k,{scrollTrigger:{trigger:"body",start:"top -1000px",end:"top -1600px",scrub:1},ease:"none",y:-.5*e}),n.forEach((function(e){gsap.to(e,{scrollTrigger:{trigger:"body",start:"top -350px",end:"top -1800px",scrub:1},ease:"bounce",opacity:1})}))},746:function(){}},t={};function r(e){var n=t[e];if(void 0!==n)return n.exports;var i=t[e]={exports:{}};return o[e](i,i.exports,r),i.exports}r.m=o,e=[],r.O=function(o,t,n,i){if(!t){var c=1/0;for(l=0;l<e.length;l++){t=e[l][0],n=e[l][1],i=e[l][2];for(var u=!0,a=0;a<t.length;a++)(!1&i||c>=i)&&Object.keys(r.O).every((function(e){return r.O[e](t[a])}))?t.splice(a--,1):(u=!1,i<c&&(c=i));u&&(e.splice(l--,1),o=n())}return o}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[t,n,i]},r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},function(){var e={260:0,143:0};r.O.j=function(o){return 0===e[o]};var o=function(o,t){var n,i,c=t[0],u=t[1],a=t[2],l=0;for(n in u)r.o(u,n)&&(r.m[n]=u[n]);for(a&&a(r),o&&o(t);l<c.length;l++)i=c[l],r.o(e,i)&&e[i]&&e[i][0](),e[c[l]]=0;r.O()},t=self.webpackChunk=self.webpackChunk||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}(),r.O(void 0,[143],(function(){return r(314)}));var n=r.O(void 0,[143],(function(){return r(746)}));n=r.O(n)}();