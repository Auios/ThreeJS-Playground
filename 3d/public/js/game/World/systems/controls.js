import { OrbitControls } from 'OrbitControls';

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

  controls.tick = () => controls.update();

  return controls;
}

export { createControls };
