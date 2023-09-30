export function accordion(){
    const target = document.querySelectorAll('.accordion__title');
    const content = document.querySelectorAll('.accordion__content');
    target.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            target.forEach(btn => {btn.classList.remove('_active')});
            btn.classList.add('_active');

            content.forEach(content => {content.classList.remove('_active')});
            content[index].classList.add('_active'); 
        })
    })
}