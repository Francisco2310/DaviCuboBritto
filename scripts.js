import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

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
let angle = 0;
const radius = 2;

scene.add( cube );
camera.position.z = 1;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; 
controls.dampingFactor = 0.05;
controls.target.set(0, 0, 0);



function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    angle += 0.01;
    cube.position.x = radius * Math.cos(angle);
    cube.position.z = radius * Math.sin(angle);
    controls.update();
    renderer.render( scene, camera );
}

animate();