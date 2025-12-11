var deButton = document.querySelector('button');
var deNav = document.querySelector('nav');
var sluitButton = document.querySelector('nav button');

deButton.onclick = openMenu;

if(sluitButton){
    sluitButton.onclick =sluitMenu;
}
function openMenu() {
    deNav.classList.toggle('open');
}

function sluitMenu() {
    deNav.classList.remove('open');
}


document.querySelectorAll('.dislikeButton').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('selected');
  });
});

document.querySelectorAll('.likeButton').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('selected');
  });
});
//https://chatgpt.com/share/693b0adf-dd90-800f-927c-e68a47dfc47b//
document.addEventListener("keydown", e => {
  if (e.key === "Escape") sluitMenu();
});

document.addEventListener("keydown", e => {
  if (e.key === "g") openMenu();
});