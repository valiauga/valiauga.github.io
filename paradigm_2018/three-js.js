var stats = new Stats();
		stats.setMode( 1 );
		document.getElementById("stats-div").appendChild(stats.domElement);

var time,p,refractSphereCamera;
    
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(50, 500 / 400, 0.1, 1000);

container = document.getElementById( 'canvas' );
document.body.appendChild(container);
    
var renderer = new THREE.WebGLRenderer({antialias:true,
                                        alpha:true
                                       });
renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 0);
container.appendChild( renderer.domElement );

// loading cube material
    var path = "images/poster-paradigm/";
    var format = '.jpg';
    var urls = [
    path + 'LEFT' + format, path + 'RIGHT' + format,
    path + 'UP' + format, path + 'DOWN' + format,
    path + 'BACK' + format, path + 'FRONT' + format];
    var textureCube = THREE.ImageUtils.loadTextureCube(urls);    

//BLOB
//var geometry = new THREE.SphereGeometry(3, 100, 100, 0, Math.PI * 2, 0, Math.PI * 2);
var geometry = new THREE.SphereGeometry(3, 100, 100);
var material = new THREE.MeshBasicMaterial({
				envMap: textureCube,
                refractionRatio: 0.5    
});

material.envMap.mapping = THREE.CubeRefractionMapping;
var cube = new THREE.Mesh(geometry, material);


//BLOB
var geometry_1 = new THREE.SphereGeometry(0.4, 100, 100);
var material_1 = new THREE.MeshBasicMaterial({
				envMap: textureCube,
                refractionRatio: 0.5
});
material_1.envMap.mapping = THREE.CubeRefractionMapping;
var cube_1 = new THREE.Mesh(geometry_1, material_1);



var cylinder_1_geometry = new THREE.CylinderGeometry( 0.35, 0.35, 0.01, 50 );
var cylinder_1_material = new THREE.MeshBasicMaterial( {
//                color: 0xffff00,
                envMap: textureCube,
                refractionRatio: 0.3,
                reflectivity: 0.9
});
cylinder_1_material.envMap.mapping = THREE.CubeRefractionMapping;
var cylinder_1 = new THREE.Mesh(cylinder_1_geometry, cylinder_1_material);
var cylinder_1 = new THREE.Mesh( cylinder_1_geometry, cylinder_1_material );

var cylinder_2_geometry = new THREE.CylinderGeometry( 0.5, 0.5, 0.7, 3 );
var cylinder_2_material = new THREE.MeshBasicMaterial( {
//                color: 0xffff00,
                envMap: textureCube,
                refractionRatio: 0.3
});
cylinder_2_material.envMap.mapping = THREE.CubeRefractionMapping;
var cylinder_2 = new THREE.Mesh(cylinder_2_geometry, cylinder_2_material);

//var cylinder_2 = new THREE.Mesh( cylinder_2_geometry, cylinder_2_material );

//add objects to scene
scene.add(cube);
scene.add(cube_1);
scene.add( cylinder_1 );
scene.add( cylinder_2 );

//fixed positions
cube.position.set(2, -2, 2);
cube_1.position.set(-0.8, 4.5, -0.8);
cylinder_1.position.set(-1.5, 0.12, 5);
cylinder_1.rotation.z=2;
cylinder_2.position.set(2.8, 1.1, 3.3);



var update_cube_geometry = function(cube_shape,noise_scale,k,time_input){
//    var k = 1.1;
    for (var i = 0; i < cube_shape.geometry.vertices.length; i++) {
        p = cube_shape.geometry.vertices[i];
        p.normalize().multiplyScalar(1 + noise_scale * noise.perlin3(p.x * k + time_input, p.y * k, p.z * k));
//      console.log(p);
    }
    cube_shape.geometry.computeVertexNormals();
    cube_shape.geometry.normalsNeedUpdate = true;
  }

camera.position.z = 8;

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}  


var render = function () {
    stats.begin();
    requestAnimationFrame(render);

//moving positions    
cube.rotation.y += 0.001;
    
//cylinder_1.rotation.x += 0.001;
cylinder_1.rotation.y += 0.001; 
cylinder_1.rotation.z += 0.001;     
//cube.position.x += 0.001;

cylinder_2.rotation.y -= 0.0001;    
cylinder_2.position.x -= 0.00001;        

var cylinder_grow = 0
cylinder_grow += 01;

//    camera.position.z -= 0.00001;
    
time = performance.now()*0.0001;
    
update_cube_geometry(cube,0.3,1,time);
update_cube_geometry(cube_1,0.6,1.1,time * -1);    
if (window.innerWidth > 500){
renderer.render(scene, camera);
    }
stats.end();    
};

render();