const igAnimation=function(){let e=document.querySelectorAll(".instafeed figure");e.forEach((e=>e.style.animationDelay=.5*Math.random()+.2+"s"));const t=function(){e.forEach((e=>{inViewPort(e)&&e.classList.add("appear")})),window.requestAnimationFrame(t)};window.requestAnimationFrame(t)},sburl="https://ig.instant-tokens.com/users/a8fa12d0-d91f-4918-9436-9375b4f8c64f/instagram/6499445400102879/token?userSecret=pesfgxmuavbppl5r14tsb",sbTokenSuccess=function(e){sbToken=e.Token,new Instafeed({accessToken:sbToken,limit:9,template:'<figure><a href="{{link}}" class="{{type}}"><img src="{{image}}" alt="AM Calgary Instagram Post" loading="lazy" width="250" height="250" /><figcaption>{{caption}}</figcaption></a></figure>',target:"sbInstaFeed"}).run(),setTimeout(igAnimation,1e3)},sbTokenError=function(e){console.log(e)},handleErrors=function(e){if(!e.ok)throw e.status+": "+e.statusText;return e.json()},getSbToken=function(e,t,n){fetch(e).then((e=>handleErrors(e))).then((e=>t(e))).catch((e=>n(e)))};getSbToken(sburl,sbTokenSuccess,sbTokenError);