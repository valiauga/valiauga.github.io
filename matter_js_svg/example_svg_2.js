// module aliases - 1
  var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Composites = Matter.Composites,
      Common = Matter.Common,
      Svg = Matter.Svg,
      Vertices = Matter.Vertices;

  // create an engine - 2
  var engine = Engine.create(),
        world = engine.world;

  // create a renderer - 3
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 900,
            height: 600
        }
    });
Render.run(render);

// create runner ?!
    var runner = Runner.create();
    Runner.run(runner, engine);


// add bodies
    var svgs = [
        'letter-v', 
        'letter-i',
        'letter-l'
    ];

for (var i = 0; i < svgs.length; i += 1) {
        (function(i) {
            $.get('./svg/' + svgs[i] + '.svg').done(function(data) {
                var vertexSets = [],
                    color = Common.choose(['#556270', '#4ECDC4', '#C7F464']);

                $(data).find('path').each(function(i, path) {
                    var points = Svg.pathToVertices(path, 30);
                    vertexSets.push(Vertices.scale(points, 0.4, 0.4));
                });

                World.add(world, Bodies.fromVertices(100 + i * 150, 200 + i * 50, vertexSets, {
                    render: {
                        fillStyle: color,
                        strokeStyle: color,
                        lineWidth: 1
                    }
                }, true));
            });
        })(i);
    }


    $.get('./svg/letter-i.svg').done(function(data) {
        var vertexSets = [],
            color = Common.choose(['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58']);

        $(data).find('path').each(function(i, path) {
            vertexSets.push(Svg.pathToVertices(path, 30));
        });

        World.add(world, Bodies.fromVertices(400, 80, vertexSets, {
            render: {
                fillStyle: color,
                strokeStyle: color,
                lineWidth: 1
            }
        }, true));
    });


//BOX
World.add(world, [
        Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
        Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
        Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
        Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
    ]);