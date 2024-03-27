let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let carousel = document.querySelector(".carousel");
let slideList = document.querySelector(".carousel .list");
let thumbnails = document.querySelector(".carousel .thumbnail");
const slidesThumbnails = document.querySelectorAll(".carousel .thumbnail .item");

//set the first item to be the last item in the thumbnail
thumbnails.appendChild(slidesThumbnails[0]);

console.log(nextBtn);
nextBtn.onclick = function () {
	showSlide("next");
};
prevBtn.onclick = function () {
	showSlide("prev");
};

let timeRunning = 3000;
let runTimeOut;
let autoRunTime = 7000;
let autoRun;

autoRun = setTimeout(() => {
	nextBtn.click();
}, autoRunTime);

function showSlide(type) {
	const slides = document.querySelectorAll(".carousel .list .item");
	const slidesThumbnails = document.querySelectorAll(".carousel .thumbnail .item");

	if (type === "next") {
		slideList.appendChild(slides[0]);
		thumbnails.appendChild(slidesThumbnails[0]);
		carousel.classList.add("next");
	} else {
		let slidePos = slides.length - 1;
		let thumbPos = slidesThumbnails.length - 1;
		slideList.prepend(slides[slidePos]);
		thumbnails.prepend(slidesThumbnails[thumbPos]);
		carousel.classList.add("prev");
	}

	clearTimeout(runTimeOut);
	runTimeOut = setTimeout(() => {
		carousel.classList.remove("next");
		carousel.classList.remove("prev");
	}, timeRunning);

	clearTimeout(autoRun);
	autoRun = setTimeout(() => {
		nextBtn.click();
	}, autoRunTime);
}
