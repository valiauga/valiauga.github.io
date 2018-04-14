var gui = new dat.GUI();
var blob_gui = gui.addFolder('blob 1');

blob_gui.add(cube_1.position, 'x', -5, 5).listen();
blob_gui.add(cube_1.position, 'y', -5, 5).listen();
blob_gui.add(cube_1.position, 'z', -5, 5).listen();
//blob_gui.open();

var blob_gui = gui.addFolder('blob 2');

blob_gui.add(cube.position, 'x', -5, 5).listen();
blob_gui.add(cube.position, 'y', -5, 5).listen();
blob_gui.add(cube.position, 'z', -5, 5).listen();
//blob_gui.open();

var blob_gui = gui.addFolder('cylinder 1');

blob_gui.add(cylinder_1.position, 'x', -5, 5).listen();
blob_gui.add(cylinder_1.position, 'y', -5, 5).listen();
blob_gui.add(cylinder_1.position, 'z', -5, 5).listen();
//blob_gui.open();

var blob_gui = gui.addFolder('cylinder 2');

blob_gui.add(cylinder_2.position, 'x', -5, 5).listen();
blob_gui.add(cylinder_2.position, 'y', -5, 5).listen();
blob_gui.add(cylinder_2.position, 'z', -5, 5).listen();
//blob_gui.open();