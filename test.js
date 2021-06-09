function test(n, limit) {
	for(let l = 10; l <= limit; l *= 10) {
		for(let i = 0; i < n; i++) {
			const num = parseInt(Math.random() * l)
			const F = num_to_str(num)
			const T = str_to_num(F)
			const test = T == num
			if(!test) {
				console.log(`${test} => num: ${num}`)
				console.log(`num_to_str: ${F}`)
				console.log(`str_to_num: ${T}`)
				return
			}
		}
		console.log(`n: ${n}, limit: ${l} => Passed.`)
	}
}
