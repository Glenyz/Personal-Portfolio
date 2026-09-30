var menuBtn = document.getElementById('menuBtn');
var navList = document.getElementById('navList');

if (menuBtn && navList){
  menuBtn.addEventListener('click', function(){
    var isOpen = navList.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navList.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', function(){
      navList.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}
