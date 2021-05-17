class stone
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
			restitution:0.5,
			friction:0.4,
			}
		this.x=x
		this.y=y
		this.radius=radius
		this.image=loadImage("stone.png")
		this.body=Bodies.circle(this.x, this.y, this.radius/2, options)
		World.add(world, this.body)

	}
	display()
	{	
			push()
			translate(this.body.position.x, this.body.position.y)
			fill(255,0,255)
			imageMode(CENTER)
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.radius*2, this.radius*2)
			pop()
			
	}

}