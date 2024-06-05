const showTime = () => {
	const time = new Date().toLocaleTimeString()
	console.log(time)
}

let count = 0

const interval = setInterval(() => {
	showTime()
	count++

	if (count >= 5) {
		clearInterval(interval)
	}
}, 5000)
