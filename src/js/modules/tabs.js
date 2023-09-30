export function tabs(){
    const tab_btn = document.querySelectorAll('.tabs__btn');
    const tabs_body = document.querySelectorAll('.tabs__body');
    tab_btn.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            tab_btn.forEach(tab => {tab.classList.remove('active')});
            tab.classList.add('active');

            tabs_body.forEach(tabs_body => {tabs_body.classList.remove('active')});
            tabs_body[index].classList.add('active');       
        })
    });
};