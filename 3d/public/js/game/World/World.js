import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';


import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/light.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import { createControls } from './systems/controls.js';

/** @type {Scene} */
let scene;

/** @type {PerspectiveCamera} */
let camera;

/** @type {WebGLRenderer} */
let renderer;

/** @type {Loop} */
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();

    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);

    const { ambientLight, mainLight } = createLights();
    const cube = createCube(0, 0, 10);

    scene.add(ambientLight);
    scene.add(mainLight);

    scene.add(cube);

    loop.updatables.push(cube);
    loop.updatables.push(controls);

    const resizer = new Resizer(container, camera, renderer);
    resizer.onResize = () => {
      this.render();
    };
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
