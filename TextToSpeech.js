let msg = new SpeechSynthesisUtterance()
let voices = speechSynthesis.getVoices()
	msg.voice = voices[4]

let tags = document.querySelectorAll('h1,h2,h3,p,a,input,div,button')
tags.forEach((tag) => {
	tag.addEventListener('click', (e) => {
		msg.text = e.target.innerText
		tag.style.backgroundColor = "yellow"
		tag.style.color = "black"
		speechSynthesis.speak(msg)

		let interval = setInterval(() => {
			if(!speechSynthesis.speaking){
				tag.style.removeProperty('background-color')
				tag.style.removeProperty('color')
				clearInterval(interval)
			}
		}, 100)
	})
})