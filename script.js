import * as THREE from './three.min.js';
import { GLTFLoader } from './GLTFLoader.js';

let scene, camera, renderer, model;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1, 3);

    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('robotCanvas'), alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let loader = new GLTFLoader();
    loader.load('models/robot.glb', (gltf) => {
        model = gltf.scene;
        scene.add(model);
    });

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    if (model) model.rotation.y += 0.01;
    renderer.render(scene, camera);
}

init();