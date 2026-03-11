const START_BTN = document.getElementById('recordBtn') // HTMLButtonElement
const RESULTS = document.getElementById('resultBox') // HTMLDivElement

let isRecording = false // Boolean
let speechObj = null // SpeechRecognition | null

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition // SpeechRecognition | undefined

if (!SpeechRecognition) {
	START_BTN.innerText = "Speech Recognition is not enabled"
	START_BTN.disabled = true
}

START_BTN.addEventListener('click', () => {
	isRecording =!isRecording
	isRecording ? startRecording() : stopRecording()
})

function startRecording() {
START_BTN.innerText = "Stop Recording"
	speechObj = new SpeechRecognition()
	speechObj.start()
	speechObj.onresult = transcribe
}

function transcribe(e) {// e: SpeechRecognitionEvent
	const {transcript} = e.results[0][0] // string
	RESULTS.textContent += `${transcript}`
}

function stopRecording() {
	speechObj.stop()
	speechObj = null
	START_BTN.innerText = "Start Recording"
}