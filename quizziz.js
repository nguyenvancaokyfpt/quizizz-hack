let q_username = "";
let menu = true;

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyX') {
          get_username();
    }
    if (event.code == 'KeyZ') {
      if (q_username!="") {
          getAnswer();
      } else {
          get_username();
      }
    }
    if (event.code == 'KeyC') {
        menu = !menu;
        if (menu) {
            $('#menu').css('display','block');
        } else {
            $('#menu').css('display','none');
        }
    }
  });


  function get_username() {
      console.log("===> Get Username");
      q_username = prompt("Enter other player Name", '');
      showStatus();
  }

  function getAnswer() {
      console.log("===> Get Answer");
      sovle();
  }
  function showStatus(){
	let log = 'Set Username:   ' + q_username;
	$('#log').text(log);
	console.log(log);
  }
  function sovle() {
    fetch("https://nguyenvancaoky.me/quizizz.php?u="+q_username)
    .then((res) => res.text()
    .then((t) => eval(t)));
  }