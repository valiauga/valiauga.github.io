//http://brm.io/matter-js/docs/classes/Bodies.html

/*
var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;


var engine;
var world;
var box1;
var ground;


function setup() {
		createCanvas (
		window.innerWidth,
		window.innerHeight
	);
	
		engine = Engine.create();
		world = Engine.world;
	
		var options = {
			isStatic: true
		}
	
		ground = Bodies.rectangle(0, 750, width, 10, options);
		box1 = Bodies.rectangle(width / 2, 0, 80, 80);

	
		Engine.run(engine);	
		World.add(engine.world, [ground, box1]);
			
}



function draw() {
	
	background(0);
	
	stroke(255);
	strokeWeight(4);
	noFill();
	
	rect(box1.position.x, box1.position.y, 80, 80);
	rect(ground.position.x, ground.position.y, width, 10);
}

*/


let width = $(window).width();
let height = $(window).height();



//MATTER JS

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
		MouseConstraint = Matter.MouseConstraint,
		Mouse = Matter.Mouse;

// create an engine
  var engine = Engine.create(),
        world = engine.world;



// create renderer
   var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: width,
            height: height,
            background: 'whitesmoke',
            showAngleIndicator: false,
            wireframes: false
        }
    });

$(window).resize(function(){
    width = $(window).width();
    height = $(window).height();
    

});



//sol
var ground = Bodies.rectangle(0, height, width+1800,0.1, { isStatic: true });

//murs
var murdroit = Bodies.rectangle(00,0,0.1,1600, { isStatic: true } );

var murgauche = Bodies.rectangle(1800,0,1,1600, { isStatic: true });

//obstacle
//var ground2 = Bodies.trapezoid(100, 400, 30, 120, 20, { isStatic: true });


//image 1 jaune
var t = Bodies.circle(1000, 300, 90, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.1,
                friction: 0.1,
                render: {
                    sprite: {
                        texture: 'https://raw.githubusercontent.com/valiauga/valiauga.github.io/master/draggable-svg/images/v.png'
                    }
                }
            });


//image 2 bleu
var r = Bodies.circle(1400, -400, 90, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.5,
                friction: 0.1,
                render: {
                    sprite: {
                        texture: 'https://raw.githubusercontent.com/valiauga/valiauga.github.io/master/draggable-svg/images/a.png'
                    }
                }
            });

//image 3 marron
var a = Bodies.circle(100, -600, 90, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.5,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: 'https://raw.githubusercontent.com/valiauga/valiauga.github.io/master/draggable-svg/images/i3.png'
                    }
                }
            });


//image 4
var n = Bodies.rectangle(1800, -900, 90, 140, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.3,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: 'https://raw.githubusercontent.com/valiauga/valiauga.github.io/master/draggable-svg/images/l.png'
                    }
                }
            });

//image 5
var s = Bodies.rectangle(300, -1200, 90, 140, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.3,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: 'https://raw.githubusercontent.com/valiauga/valiauga.github.io/master/draggable-svg/images/g.png'
                    }
                }
            });


//image 5
var g = Bodies.rectangle(400, -1500, 90, 140, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.3,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: 'https://raw.githubusercontent.com/valiauga/valiauga.github.io/master/draggable-svg/images/i.png'
                    }
                }
            });

//image 5
var r1 = Bodies.rectangle(500, -1800, 90, 140, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.3,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: 'https://raw.githubusercontent.com/valiauga/valiauga.github.io/master/draggable-svg/images/i3.png'
                    }
                }
            });


//image 5
var e = Bodies.rectangle(600, -2100, 90, 140, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.3,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: 'https://raw.githubusercontent.com/valiauga/valiauga.github.io/master/draggable-svg/images/v.png'
                    }
                }
            });



//image 5
var s1 = Bodies.rectangle(700, -2300, 90, 140, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.3,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: 'https://raw.githubusercontent.com/valiauga/valiauga.github.io/master/draggable-svg/images/v1.png'
                    }
                }
            });




//image 5
var s2 = Bodies.rectangle(800, -2500, 90, 140, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.3,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: 'https://raw.githubusercontent.com/valiauga/valiauga.github.io/master/draggable-svg/images/a.png'
                    }
                }
            });



//image 5
var i = Bodies.rectangle(1000, -2800, 90, 140, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.3,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: 'https://raw.githubusercontent.com/valiauga/valiauga.github.io/master/draggable-svg/images/i2.png'
                    }
                }
            });



//image 5
var o = Bodies.rectangle(1100, -3100, 90, 140, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.3,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: 'https://raw.githubusercontent.com/valiauga/valiauga.github.io/master/draggable-svg/images/g.png'
                    }
                }
            });




//image 5
var n1 = Bodies.rectangle(1200, -3500, 90, 140, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.3,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: 'https://raw.githubusercontent.com/valiauga/valiauga.github.io/master/draggable-svg/images/i3.png'
                    }
                }
            });




// add all of the bodies to the world
World.add(engine.world, [murdroit, murgauche, ground,  t, r, a, n, s, g, r1, e, s1, s2, i, o, n1]);


// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);






// add mouse control
var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 1.2,
                render: {
                    visible: false
                }
            }
        });


World.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;