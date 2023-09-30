import * as webp from './modules/webp.js'; 
webp.isWebp();

import * as ibg from './modules/ibg.js';
ibg.ibg();

/*import * as menu from './modules/menu.js'; 
menu.menu();*/

/*import * as accordion from './modules/accordion.js';
accordion.accordion();*/

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';







const swiper = new Swiper('.slider', { 
  direction: 'horizontal', // 'horizontal' | 'vertical'
  effect: 'slide', // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards'
  speed: 300,
  loop: true, // => enable continuous loop mode
  
  slideToClickedSlide: false, //  => click on any slide will produce transition to this slide
  autoHeight: false, //  => adapt its height to the height of the currently active slide

  slidesPerView: 3, // => number | 'auto'   => Number of slides per view
  slidesPerGroup: 1, //  => Set numbers of slides to define and enable group sliding. Useful to use with slidesPerView > 1
  spaceBetween: 10, //  =>  string | number  =>  Distance between slides in px.
  centeredSlides: true, //  => active slide will be centered
  initialSlide: 1, //  => Index number of initial slide will be centered. first slide 0
  watchOverflow: true, //  => disabled and hide navigation buttons on case there are not enough slides for sliding.

  simulateTouch: true, //  => touch in PC
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,

  freeMode: {
    enabled: false,
    sticky: false,
  },

  // #Navigation arrows
  navigation: {
    enabled: false,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // If we need pagination
  pagination: {
    enabled: true,
    el: '.swiper-pagination',
    type:	'bullets', //'bullets' | 'fraction' | 'progressbar' | 'custom'
    clickable: true, // => If true then clicking on pagination button. Only for bullets pagination type
    dynamicBullets: true, // => So it will keep only few bullets visible at the same time.
    /* Custom bullets style
    renderBullet: function(index, className){
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },*/
    /* Custom Fraction style
    renderFraction: function(currentClass, totalClass){
      return 'фото <span class="' + currentClass + '"></span>' + 'из' + '<span class="' + totalClass + '"></span>';
    },
    */
    /* Custom Progressbar style
    renderProgressbar:	function(progressbarFillClass){
      return
    },
    */
  },

  // And if we need scrollbar
  scrollbar: {
    enabled: false,
    el: '.swiper-scrollbar',
    draggable: true,
  },

  autoplay: false,
  /*
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  */

  
  
  /*
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
  */
  
  });


  const swiper2 = new Swiper('.gallery-slider', {
    // configure Swiper to use modules
  modules: [Navigation, Pagination],
  slidesPerView: 3, // => number | 'auto'   => Number of slides per view
  slidesPerGroup: 1, //  => Set numbers of slides to define and enable group sliding. Useful to use with slidesPerView > 1
  spaceBetween: 10, //  =>  string | number  =>  Distance between slides in px.
  centeredSlides: true, //  => active slide will be centered
  initialSlide: 1, //  => Index number of initial slide will be centered. first slide 0
  watchOverflow: true, //  => disabled and hide navigation buttons on case there are not enough slides for sliding.

  simulateTouch: true, //  => touch in PC
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,  

  // If we need pagination
  pagination: {
    enabled: true,
    el: '.swiper-pagination',
    type:	'bullets', //'bullets' | 'fraction' | 'progressbar' | 'custom'
    clickable: true, // => If true then clicking on pagination button. Only for bullets pagination type
  },
  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        enabled: true,
        el: '.swiper-pagination',
        type:	'bullets', //'bullets' | 'fraction' | 'progressbar' | 'custom'
        clickable: true, // => If true then clicking on pagination button. Only for bullets pagination type
      },
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
      pagination: {
        enabled: true,
        el: '.swiper-pagination',
        type:	'bullets', //'bullets' | 'fraction' | 'progressbar' | 'custom'
        clickable: true, // => If true then clicking on pagination button. Only for bullets pagination type
      }
    },
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
          enabled: true,
          el: '.swiper-pagination',
          type:	'bullets', //'bullets' | 'fraction' | 'progressbar' | 'custom'
          clickable: true, // => If true then clicking on pagination button. Only for bullets pagination type
        },

    },
    
  }
  
  });

  const swiper3 = new Swiper('.reviuse__slider', {
    // configure Swiper to use modules
  modules: [Navigation, Pagination],
  slidesPerView: 1, // => number | 'auto'   => Number of slides per view
  centeredSlides: true, //  => active slide will be centered
  
  simulateTouch: true, //  => touch in PC
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,  

  // If we need pagination
  pagination: {
    enabled: true,
    el: '.swiper-pagination',
    type:	'bullets',
    dynamicBullets: true,
    clickable: true,
  },
  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      
      pagination: {
        enabled: true,
        el: '.swiper-pagination',
        type:	'bullets', //'bullets' | 'fraction' | 'progressbar' | 'custom'
        clickable: true, // => If true then clicking on pagination button. Only for bullets pagination type
      },
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      
      pagination: {
        enabled: true,
        el: '.swiper-pagination',
        type:	'bullets', //'bullets' | 'fraction' | 'progressbar' | 'custom'
        clickable: true, // => If true then clicking on pagination button. Only for bullets pagination type
      }
    },
      640: {
        slidesPerView: 1,
        pagination: {
          enabled: true,
          el: '.swiper-pagination',
          type:	'bullets', //'bullets' | 'fraction' | 'progressbar' | 'custom'
          clickable: true, // => If true then clicking on pagination button. Only for bullets pagination type
        },

    },
    
  }
  
  });