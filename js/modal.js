const modal = document.querySelector('.modal');
const btn_superhero = document.querySelectorAll('.btn-superhero');
const close = document.querySelector('.modal__container--close')

for (let i = 0; i < btn_superhero.length; i++) 
{
   btn_superhero[i].addEventListener('click', () =>
   {
      modal.classList.remove('hidden');
      modal.classList.add('visible');
   })
}

close.addEventListener('click', () =>
{
   modal.classList.remove('visible');
   modal.classList.add('hidden');
})