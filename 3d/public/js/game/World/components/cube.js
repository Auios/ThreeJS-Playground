import { BoxGeometry, Mesh, MeshStandardMaterial, MathUtils } from 'three';

let rotationOffset = 0;

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {Mesh}
 */
function createCube(x = 0, y = 0, z = 0) {
  const geometry = new BoxGeometry(1, 1, 1);

  // Switch the old "basic" material to
  // a physically correct "standard" material
  const material = new MeshStandardMaterial({ color: 'salmon' });

  const cube = new Mesh(geometry, material);

  cube.position.set(x, y ,z);
  cube.rotationOffset = rotationOffset += 0.0025;

  const radiansPerSecond = MathUtils.degToRad(20);

  // this method will be called once per frame
  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * delta * cube.rotationOffset;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
