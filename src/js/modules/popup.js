const popupLinks = document.querySelectorAll('.popup-lnk');
const body = document.querySelectorAll('body');
const lockp = document.querySelectorAll('.lock-padding');

let unlock = true;
const timeout = 800;

if(popupLinks.length > 0){
    for(let index = 0; index < popupLinks.length; index++){
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', (e) => {
            const popupName = popupLink.getAttribute('href').replase('#', '');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        })
    }
}

const popupClose = document.querySelectorAll('.popup__close');
if(popupClose.length > 0){
    for(let index = 0; index < popupClose.length; index++){
        const el = popupClose[index];
        el.addEventListener('click', (e) => {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });

    }
}

function popupOpen(currentPopup){
    if(currentPopup && unlock){
        const popupActive = document.querySelector('.popup.open');
        if(popupActive){
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener('click', (e) => {
            if(!e.target.closest('.popup__content')){
                popupClose(e.target.closest('popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true){
    if(unlock){
        popupActive.classList.remove('open');
        if(doUnlock){
            bodyUnlock();
        }
    }
}

function bodyLock(){
    const lockPaddingValue = window.innerWidth - document.querySelector('.modals').offsetWidth + 'px';
    if(lockPadding.length > 0) {
        for(let index = 0; index < lockPadding.length; index++){
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(() => {
        unlock = true;
    }, timeout);

}  

function bodyUnlock(){
    setTimeout(() => {
        if(lockPadding.length > 0){
            for(let index = 0; index < lockPadding.length; index++){
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }     
        }
        
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(() => {
        unlock = true;
    }, timeout);
}
