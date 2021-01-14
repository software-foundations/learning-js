// window is the whole window browser
/*
* This event happens whenever the user enter and exit
The browser window
* With window, we have access to the user history, we
can refresh the window, we can open a new window (window.open),
we can close a window (window.close), or focus on an opened window
(window.focus)
*/
window.addEventListener('focus', event => {
	console.log('focus');
});

// document is the screen of the site
document.addEventListener('click', event => {	
	console.log('click');
})