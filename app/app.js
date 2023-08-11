// write logic for side bar menu opening and closing
// console.log('hello');
const menuBtn = document.getElementById('menu-bar');
menuBtn.addEventListener('click', openSideMenuBar);
function openSideMenuBar(){
    document.getElementById('menu-side-bar').style.display = 'block';
}

const crossBtn = document.getElementById('crossBtn');
crossBtn.addEventListener('click', closeSideMenuBar);
function closeSideMenuBar(){
    document.getElementById('crossBtn').style.borderColor = 'rgb(248, 172, 59)';
    document.getElementById('menu-side-bar').style.display = 'none';

}
