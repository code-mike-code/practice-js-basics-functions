const iterationTask = x => {
	let result = 0
	for (let i = 1; i <= x; i++) {
		result += i
	}

	return result
}

console.log(iterationTask(4))
