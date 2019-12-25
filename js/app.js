const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')
const ampm = document.getElementById('ampm')

function clock () {
	const date = new Date()
	let h = date.getHours()
	const m = date.getMinutes()
	const s = date.getSeconds()
	ampm.innerHTML = 'AM'

	if (h > 12) {
		h -= 12
		ampm.innerHTML = 'PM'
	}

	hour.innerHTML = (h < 10) ? `0${h}` : h
	minute.innerHTML = (m < 10) ? `0${m}` : m
	second.innerHTML = (s < 10) ? `0${s}` : s
}

clock()
setInterval(clock, 1000)