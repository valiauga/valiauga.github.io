
let w, h;
w = $(window).width();
h = $(window).height();

$(window).resize(function(){
    w = $(window).width();
h = $(window).height();
});

let friction_v, frictionAir_v, restitution, gravity_v;
friction_v = 0.01;
frictionAir_v = 0.0;
restitution = 0.1;
gravity_v = 0.65;


  // module aliases - 1
  var Engine = Matter.Engine,
      Render = Matter.Render,
        Runner = Matter.Runner,
        Common = Matter.Common,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Vertices = Matter.Vertices,
        Svg = Matter.Svg,
        Bodies = Matter.Bodies;

  // create an engine - 2
  var engine = Engine.create();
  engine.world.gravity.y = gravity_v;

  // create a renderer - 3
  var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
      width: w,
      height: h,
      background: 'whitesmoke',
      wireframes: false // <-- important
        
    }
      
  });


//var topWall = Bodies.rectangle(-200, -200, innerWidth*2, 20, { isStatic: true, render:{visible: true} });
var leftWall = Bodies.rectangle(-10, 0, 20, h*1.95, { isStatic: true });
var rightWall = Bodies.rectangle(w-0, 0, 10, h*1.95, { isStatic: true });
var bottomWall = Bodies.rectangle(0+100, innerHeight-0, w*2, 10, { isStatic: true });

World.add(engine.world, [leftWall, rightWall, bottomWall]);

var shape_options_1 = {
	friction: friction_v,
	frictionAir: frictionAir_v,
	restitution: restitution,
	render: {
          fillStyle: '#FBBE0A'
//          strokeStyle: color
        }
}

var shape_options_2 = {
	friction: friction_v,
	frictionAir: frictionAir_v,
	restitution: restitution,
	render: {
          fillStyle: '#222148'
//          strokeStyle: color
        }
}

var shape_options_3 = {
	friction: friction_v,
	frictionAir: frictionAir_v,
	restitution: restitution,
	render: {
          fillStyle: '#E25728'
//          strokeStyle: color
        }
}

var shape_options_4 = {
	friction: friction_v,
	frictionAir: frictionAir_v,
	restitution: restitution,
	render: {
          fillStyle: '#40A395'
//          strokeStyle: color
        }
}

var vertexSets = [],
      color = Common.choose(['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58']);
  
$('#svg-l').find('path').each(function(i, path){
//       vertexSets.push(Svg.pathToVertices(path, 100));
      var v = Bodies.fromVertices(w-w*0.9+(i*80), -200, Svg.pathToVertices(path, 300), shape_options_1, true);
    console.log(v)
    vertexSets.push(v);
     World.add(engine.world, v);
  });

$('#svg-v').find('path').each(function(i, path){
//       vertexSets.push(Svg.pathToVertices(path, 100));
      var v = Bodies.fromVertices(w-w*0.6+(i*80), -300, Svg.pathToVertices(path, 100), shape_options_2, true);
    console.log(v)
    vertexSets.push(v);
     World.add(engine.world, v);
  });


$('#svg-g').find('path').each(function(i, path){
//       vertexSets.push(Svg.pathToVertices(path, 100));
      var v = Bodies.fromVertices(w-w*0.4+(i*80), -400, Svg.pathToVertices(path, 100), shape_options_3, true);
    console.log(v)
    vertexSets.push(v);
     World.add(engine.world, v);
  });


$('#svg-a').find('path').each(function(i, path){
//       vertexSets.push(Svg.pathToVertices(path, 100));
      var v = Bodies.fromVertices(w-w*0.2+(i*80), -500, Svg.pathToVertices(path, 100), shape_options_4, true);
    console.log('svg a- ' + v)
    vertexSets.push(v);
     World.add(engine.world, v);
  });


var ball_1 = Matter.Bodies.circle(w-w*0.9, -1500, 100, {
		density: 0.04,
		friction: 0.01,
		frictionAir: 0.00001,
		restitution: 0.8,
		render: {
		fillStyle: '#FCBF0D',
        }
	});

var ball_2 = Matter.Bodies.circle(w-w*0.6, -500, 100, {
		density: 0.04,
		friction: 0.01,
		frictionAir: 0.00001,
		restitution: 0.8,
		render: {
		fillStyle: '#222148',
        }
	});

var ball_3 = Matter.Bodies.circle(w-w*0.4, -750, 100, {
		density: 0.04,
		friction: 0.01,
		frictionAir: 0.00001,
		restitution: 0.8,
		render: {
		fillStyle: '#E25728',
        }
	});


  vertexSets.push(ball_1,ball_2,ball_3);



 // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.4,
                render: {
                    visible: false
                }
            }
        });

    World.add(engine.world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: w, y: h }
    });

  // add all of the bodies to the world - 4
  World.add(engine.world, vertexSets);

  // run the engine - 5
  Engine.run(engine);

// run the renderer - 6
  Render.run(render);
//  Render.setPixelRatio(render, 'auto');

  

  