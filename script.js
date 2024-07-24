/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

video.addEventListener('timeupdate',()=>{
	let progress = (video.currentTime/video.duration)*100;
	progressBar.style.flexBasis=`${progress}%`;
	console.log(progressBar.style.flexBasis)
})
 
toggle.addEventListener('click',()=>{
	let toggleContent = toggle.textContent;
	if(toggleContent=="►"){
		toggle.textContent="❚ ❚" 
		video.play()
	}else{
		toggle.textContent = "►";
		video.pause();
	}
})

// let volumeVal = ranges[0].value;
// video.volume = volumeVal/100;
ranges[0].addEventListener('input',()=>{
	let volumeVal = ranges[0].value;
	console.log(volumeVal); 
	video.volume = volumeVal;
})

ranges[1].addEventListener('input',()=>{
	let speed = ranges[1].value;
	video.playbackRate = speed;
})

skipButtons[0].addEventListener('click',()=>{
	let currentTime = video.currentTime;
	video.currentTime = Math.max(currentTime-10,0);
	video.play();
})

skipButtons[1].addEventListener('click',()=>{
	let currentTime = video.currentTime;
	video.currentTime = Math.min(currentTime+25,video.duration);
	video.play();
})






