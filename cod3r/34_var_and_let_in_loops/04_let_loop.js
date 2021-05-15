const funcs = []

for (let i = 0; i < 10; i++) {
	funcs.push(function() {
		console.log(i)
	})
}

funcs[2]() // -> 2, because using var we set i as local variable
funcs[0]() // -> 0, because using var we set i as local variable
// ...
funcs[9]() // -> 9, because using var we set i as local variable
