// var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
// function bgChange() {
//     const element = document.querySelector(".welcome-banner")
//     const element2 = document.querySelector(".footer-nav")
//     let hexColor = '#';
//     for (let i = 0; i <= 5; i++) {
//         hexColor += hex[Math.floor(Math.random() * hex.length)]
//     }
//      let hexColor2 = '#';
//      for (let i = 0; i <= 5; i++) {
//          hexColor2 += hex[Math.floor(Math.random() * hex.length)]
//     }
//     let black = '#000'
//     element.style.background = "linear-gradient(to right, " + hexColor + ", " + hexColor2 + ")";
//     element2.style.background = "linear-gradient(to right, " + hexColor + ", " + hexColor2 + ")";
//     document.querySelector('.submit-btn').style.background = "linear-gradient(to right, " + hexColor + ", " + black + ")";
//     document.querySelector('.gradient-bg').style.background = "linear-gradient(to bottom, " + hexColor + ", " + black + ")";
//     document.querySelector('.gradient').style.background = "linear-gradient(to bottom, " + hexColor + ", " + black + ")";
// }
// window.addEventListener("load", bgChange)
// //FOR TYPING
// var TxtType = function (el, toRotate, period) {
//     this.toRotate = toRotate;
//     this.el = el;
//     this.loopNum = 0;
//     this.period = parseInt(period, 10) || 2000;
//     this.txt = '';
//     this.tick();
//     this.isDeleting = false;
// };
// TxtType.prototype.tick = function () {
//     var i = this.loopNum % this.toRotate.length;
//     var fullTxt = this.toRotate[i];
//     if (this.isDeleting) {
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }
//     this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
//     var that = this;
//     var delta = 200 - Math.random() * 100;
//     if (this.isDeleting) { delta /= 2; }
//     if (!this.isDeleting && this.txt === fullTxt) {
//         delta = this.period;
//         this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === '') {
//         this.isDeleting = false;
//         this.loopNum++;
//         delta = 500;
//     }
//     setTimeout(function () {
//         that.tick();
//     }, delta);
// };
// window.onload = function () {
//     var elements = document.getElementsByClassName('typewrite');
//     for (var i = 0; i < elements.length; i++) {
//         var toRotate = elements[i].getAttribute('data-type');
//         var period = elements[i].getAttribute('data-period');
//         if (toRotate) {
//             new TxtType(elements[i], JSON.parse(toRotate), period);
//         }
//     }
//     // INJECT CSS
//     var css = document.createElement("style");
//     css.innerHTML = ".typewrite > .wrap { border-right: 0.10em solid #fff}";
//     document.body.appendChild(css);
// };

// document.querySelector(".html").addEventListener("click", () => {
//     document.querySelector(".cards").css("display")
// })
// particlesJS.load('particles-js', 'particles.json', function () {
//     console.log('callback - particles.js config loaded');
// });
var hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];function bgChange(){const t=document.querySelector(".welcome-banner"),e=document.querySelector(".footer-nav");let i="#";for(let t=0;t<=5;t++)i+=hex[Math.floor(Math.random()*hex.length)];let n="#";for(let t=0;t<=5;t++)n+=hex[Math.floor(Math.random()*hex.length)];t.style.background="linear-gradient(to right, "+i+", "+n+")",e.style.background="linear-gradient(to right, "+i+", "+n+")",document.querySelector(".submit-btn").style.background="linear-gradient(to right, "+i+", "+"#000)",document.querySelector(".gradient-bg").style.background="linear-gradient(to bottom, "+i+", "+"#000)",document.querySelector(".gradient").style.background="linear-gradient(to bottom, "+i+", "+"#000)"}window.addEventListener("load",bgChange);var TxtType=function(t,e,i){this.toRotate=e,this.el=t,this.loopNum=0,this.period=parseInt(i,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};TxtType.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,e=this.toRotate[t];this.isDeleting?this.txt=e.substring(0,this.txt.length-1):this.txt=e.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var i=this,n=200-100*Math.random();this.isDeleting&&(n/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,n=500):(n=this.period,this.isDeleting=!0),setTimeout((function(){i.tick()}),n)},window.onload=function(){for(var t=document.getElementsByClassName("typewrite"),e=0;e<t.length;e++){var i=t[e].getAttribute("data-type"),n=t[e].getAttribute("data-period");i&&new TxtType(t[e],JSON.parse(i),n)}var o=document.createElement("style");o.innerHTML=".typewrite > .wrap { border-right: 0.10em solid #fff}",document.body.appendChild(o)},document.querySelector(".html").addEventListener("click",(()=>{document.querySelector(".cards").css("display")})),particlesJS.load("particles-js","particles.json",(function(){console.log("callback - particles.js config loaded")}));
