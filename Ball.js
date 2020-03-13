class Ball {
	constructor (x, y, d, c) {
		this.x = x
		this.y = y
		this.d = d
		this.c = c
		this.speedX =  2 * this.direction()
		this.speedY =  2 * this.direction()
	}

	draw () {
		push()
		noStroke()
		fill(this.c)
		ellipse(this.x, this.y, this.d, this.d)
		pop()
	}

	move () {
		this.x += this.speedX
		this.y +=  this.speedY
	}

	direction () {
		return floor(random(2)) * 2 - 1
	}
}