import { Color, Scene } from 'three';

/**
 * @returns {Scene}
 */
function createScene() {
  const scene = new Scene();

  scene.background = new Color('skyblue');

  return scene;
}

export { createScene };
