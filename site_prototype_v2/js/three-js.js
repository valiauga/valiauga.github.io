var time,p;
    
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
//var camera = new THREE.OrthographicCamera( 1, 100, 200, 1, 0.1, 1000 );

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
    
    
//var geometry = new THREE.SphereGeometry(3, 100, 100, 0, Math.PI * 2, 0, Math.PI * 2);
var geometry = new THREE.SphereGeometry(3, 100, 100);
var material = new THREE.MeshBasicMaterial({
				envMap: textureCube,
                refractionRatio: 0.5
});
material.envMap.mapping = THREE.CubeRefractionMapping;
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//cylinder
var c_geometry = new THREE.CylinderGeometry( 0.3, 0.3, 2, 30 );
var c_material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    envMap: textureCube,
    refractionRatio: 0.4
});
                                          
var cylinder = new THREE.Mesh( c_geometry, c_material );
scene.add( cylinder );
cylinder.position.y = -1;
cylinder.position.x = -5;

cylinder.rotation.y = 0;
cylinder.rotation.x = 0;
cylinder.rotation.z = 0;

var c_geometry_2 = new THREE.CylinderGeometry( 1.3, 1.3, 2, 3 );
var c_material_2 = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    envMap: textureCube,
    refractionRatio: 0.4
});

var cylinder_2 = new THREE.Mesh( c_geometry_2, c_material_2 );
scene.add( cylinder_2 );
cylinder_2.position.y = 2.1;
cylinder_2.position.x = 6;


var update_cube_geometry = function(){
    var k = 1;
    for (var i = 0; i < cube.geometry.vertices.length; i++) {
        p = cube.geometry.vertices[i];
        p.normalize().multiplyScalar(1 + 0.3 * noise.perlin3(p.x * k, p.y * k, p.z * k));
//      console.log(p);
    }
    cube.geometry.computeVertexNormals();
    cube.geometry.normalsNeedUpdate = true;
  }

camera.position.z = 9;

var render = function () {
    requestAnimationFrame(render);
    
    cube.rotation.y += 0.001;
    
    cylinder.rotation.y += 0.001;
    cylinder.rotation.x += 0.0006;
    
//    cube.position.x += 0.01;
    time = performance.now()*0.1;
    
    update_cube_geometry();
    
    renderer.render(scene, camera);
    
};

render();