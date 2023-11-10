// filter

let filterBtn = Array.from(document.getElementsByClassName('filterBtn'));
let filterContent = Array.from(document.getElementsByClassName('filterContent'));
let checkAllInput = Array.from(document.getElementsByClassName('checkAll'));

filterBtn.forEach((item) => {
  item.addEventListener('click', function () {
    filterBtn.forEach((items) => {
      items.nextElementSibling.classList.remove('active');
      items.querySelector('svg').classList.remove('active');
    })
    item.nextElementSibling.classList.add('active');
    item.querySelector('svg').classList.add('active');
  })
})

checkAllInput.forEach((item)=>{
  item.addEventListener('click',function () {
    item.classList.toggle('active');
  })
})

function check(checked = true) {
  const checkboxes = document.querySelectorAll('input[name="type"]');
  checkboxes.forEach((checkbox) => {
      checkbox.checked = checked;
  });
}


const btn = document.querySelector('#btn');
btn.onclick = checkAll;

function checkAll() {
  check();
  this.onclick = uncheckAll;
}

function uncheckAll() {
  check(false);
  this.onclick = checkAll;
}
