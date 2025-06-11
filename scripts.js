import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const geometry = new THREE.BoxGeometry();
const video = document.createElement('video');
video.src = 'calma-calabreso-calma-calma-calabreso.mp4';
video.loop = true;
video.muted = true;
video.play();

const texture = new THREE.VideoTexture(video);
const material = new THREE.MeshBasicMaterial( { map:texture } );
const cube = new THREE.Mesh( geometry, material );
const renderer = new THREE.WebGLRenderer();

scene.add( cube );
camera.position.z = 1;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}

animate();