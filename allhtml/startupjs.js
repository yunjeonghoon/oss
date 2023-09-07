/* 로그인 화면 */
$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });

 document.addEventListener('DOMContentLoaded', function() {
  const loginButton = document.getElementById('login-btn');
  const signButton = document.getElementById('sign-btn');
	 
  loginButton.addEventListener('click', function() {
	 
    window.open('startupmain.html', '_self');
  });
  signButton.addEventListener('click', function(){
	  window.open('startupagree.html', '_self');
	});
});
