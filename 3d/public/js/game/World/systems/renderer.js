import { WebGLRenderer } from 'three';

/**
 * @returns {WebGLRenderer}
 */
function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });

  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };
