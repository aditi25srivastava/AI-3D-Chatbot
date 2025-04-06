import { Loader } from "https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/loaders/Loader.js";

class GLTFLoader extends Loader {
    constructor(manager) {
        super(manager);
    }
    load(url, onLoad, onProgress, onError) {
        const loader = new THREE.GLTFLoader();
        loader.load(url, function (gltf) {
            onLoad(gltf);
        }, onProgress, onError);
    }
}

export { GLTFLoader };