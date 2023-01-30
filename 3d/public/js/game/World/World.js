import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';

import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLight } from './components/light.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

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

    const light = createLight();

    scene.add(light);

    let cube = createCube(0, 0, 10);
    scene.add(cube);
    loop.updatables.push(cube);

    // const count = 20;
    // const distance = 20;
    // const spacing = 1;

    // for(let y = -count; y <= count; y++) {
    //   for(let x = -count; x <= count; x++) {
    //     const cube = createCube(x * spacing, y * spacing, distance);
    //     scene.add(cube);
    //     loop.updatables.push(cube);
    //   }
    // }

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
