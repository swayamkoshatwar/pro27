class bob
{
	constructor(x,y)
	{
		var options={
		//	isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=20
		this.body=Bodies.circle(this.x,this.y,20, options)
		World.add(world, this.body);
		//this.image = loadImage("paper.png");
	}
	display()
	{
			
			var bobpos=this.body.position;		

			
			ellipseMode(RADIUS)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(bobpos.x,bobpos.y,20,20);
			
			
	}

}