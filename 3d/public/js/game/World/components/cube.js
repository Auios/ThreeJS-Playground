import {
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  MathUtils,
  TextureLoader
} from 'three';

let rotationOffset = 0;

/**
 * @returns {MeshStandardMaterial}
 */
function createMaterial() {
  // create a texture loader.
  const textureLoader = new TextureLoader();

  // load a texture
  const texture = textureLoader.load('/assets/textures/uv-test-bw.png');

  // create a "standard" material
  // const material = new MeshStandardMaterial({ color: 'salmon' });
  const material = new MeshStandardMaterial({
    color: "white",
    map: texture,
  });

  return material;
}

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {Mesh}
 */
function createCube(x = 0, y = 0, z = 0) {
  const geometry = new BoxGeometry(1, 1, 1);

  const material = createMaterial();

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
