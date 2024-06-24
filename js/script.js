// my javascript code
//header  ne fix or static karva

const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});




//loder fix

window.onload=()=> {
	load();
}


function loder (){ 
	document.querySelector(".loder-container").classList.add("active");
	
}
function load(){
	setTimeout(loder,1000);
};







//toggle menu lavva responsive

let menu =  document.querySelector('#menu-icon');
let navbar =  document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};


window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};


//ratting

const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		ratingValue.value = idx + 1

		allStar.forEach(i=> {
			i.classList.replace('bxs-star', 'bx-star')
			i.classList.remove('active')
		});
		for(let i=0; i<allStar.length; i++) {
			if(i <= idx) {
				allStar[i].classList.replace('bx-star', 'bxs-star')
				allStar[i].classList.add('active')
			} else {
				allStar[i].style.setProperty('--i', click)
				click++
			};
		};
	});
});


//swiper to swipe the course content

var swiper = new Swiper(".featured-slider",{
	spaceBetween: 10,
	loop: true,
	centeredSlide: true,
	autoplay : {
		delay : 4500,
		disableOnInteraction : false
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	// navigation : {
	//     nextE1 : ".swiper-button-next",
	//     prevE1 : ".swiper-button-prev"
	// },
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		450: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		}
	}
});

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})






// course vada page ma vaddhare box show up krva
let loadMoreBtn = document.querySelector('#load-more');
let j = 3;

loadMoreBtn.onclick = () => {
   let boxes = [...document.querySelectorAll('.container-2 .box-container .box')];
   for (var i = j; i <j+3; i++){
      boxes[i].style.display = 'inline-block';
   }
   j += 3;

   if(j >= boxes.length){
      loadMoreBtn.style.display ='none';
   }
};




