const funcs = []

for (var i = 0; i < 10; i++) {
	funcs.push(function() {
		console.log(i)
	})
}

funcs[2]() // -> 10, because using var we set i as global variable
funcs[0]() // -> 10, because using var we set i as global variable
// ...
funcs[9]() // -> 10, because using var we set i as global variable
