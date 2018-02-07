function removeTransition(e){

	if(e.propertyName !== 'transform') return // skip if it's not a transform;

	this.classList.remove("playing");
}

function playSound(e){

	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

	if(audio){
		audio.currentTime = 0 //rewind to the start
		audio.play()	
		key.classList.add("playing")
	}
}

window.addEventListener('keydown',playSound)
const key = document.querySelectorAll(".key")


key.forEach(function(item){

	item.addEventListener('transitionend',removeTransition)

	item.addEventListener('click',function(){

		var sound = `audio[data-key="${item.getAttribute('data-key')}"]`
		
		var audio = document.querySelector(sound)
		audio.currentTime = 0 //rewind to the start
		audio.play()	
		item.classList.add("playing")

	})
})

