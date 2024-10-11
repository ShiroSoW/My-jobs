const bear = document.getElementById('bear')
const ghost = document.getElementById('ghost')

document.addEventListener('keydown', function (event) {
	jump()
})

function jump() {
	if (bear.classList != 'jump') {
		bear.classList.add('jump')
	}
	setTimeout(function () {
		bear.classList.remove('jump')
	}, 300)
}

let isAlive = setInterval(function () {
	let bearTop = parseInt(window.getComputedStyle(bear).getPropertyValue('top'))
	let ghostLeft = parseInt(
		window.getComputedStyle(ghost).getPropertyValue('left')
	)

	if (ghostLeft < 200 && ghostLeft > 40 && bearTop >= 545) {
		alert('GAME OVER!')
	}
}, 10)


var counter = 0

function onKeyDown(score) {
	counter++
	score.innerHTML = 'Score: ' + counter
}
