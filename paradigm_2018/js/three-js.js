var time,p;
    
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(50, 500 / 400, 0.1, 1000);

container = document.getElementById( 'canvas' );
document.body.appendChild(container);
    
var renderer = new THREE.WebGLRenderer({antialias:true,
                                        alpha:true
                                       });
renderer.setSize(1000, 800);
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

camera.position.z = 6;

var render = function () {
    requestAnimationFrame(render);
    
    cube.rotation.y += 0.001;
//    cube.position.x += 0.001;
    time = performance.now()*0.1;
    
    update_cube_geometry();
    
    renderer.render(scene, camera);
    
};

render();