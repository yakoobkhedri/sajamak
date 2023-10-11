document.getElementById('timer').innerHTML =
  '0' + ":" + '5';
startTimer();
 

document.getElementById('resend').addEventListener('click',function () {
    document.getElementById('timerBox').classList.remove('hide')
    document.getElementById('resend').classList.remove('active');
})

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    document.getElementById('timer').innerHTML ='0:00';
    document.getElementById('timerBox').classList.add('hide')
    document.getElementById('resend').classList.add('active');
    return
}
 
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
}
 
function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}