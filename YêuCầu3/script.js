
function Dong_ho() {
  var d1 = document.getElementById("d1");
  var h = document.getElementById("gio");
  var m = document.getElementById("phut");
  var s = document.getElementById("giay");
  var Gio_hien_tai = new Date().getHours();
  var Phut_hien_tai = new Date().getMinutes();
  var Giay_hien_tai = new Date().getSeconds();
  h.innerHTML = Gio_hien_tai;
  m.innerHTML = Phut_hien_tai;
  s.innerHTML = Giay_hien_tai;
  // d1.innerHTML = "Chào Buổi Sáng";
  var greeting = document.getElementById("greetings")
  if (0 <= h && h < 12) {
      d1.innerText = "Chào buổi sáng"
  } else if (12 <= h && h < 17) {
      d1.innerText = "Chào buổi chiều"
  } else {
      d1.innerText = "Chào buổi tối"
  }
  setTimeout(Dong_ho,1000);
}
Dong_ho();
var mau = 1;
function doimau(){
  var d1 = document.getElementById("d1");
  if(mau == 1){
    mau = 2;
  }
  else {
    mau = 1;
  }
  d1.style.color = mau == 1 ? '#000' : '#ff0000';
  d1.style.fontSize = mau == 1 ? "20px" : "50px";
}

setInterval(doimau, 500)

