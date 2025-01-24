import * as THREE from "three";
import "./index.scss";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	100,
);

camera.position.z = 6;

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

cube.position.set(-3, 0, 0);

const sphereGeometry = new THREE.SphereGeometry(0.5, 8, 8);
const sphereMaterial = new THREE.MeshPhongMaterial({
	color: "teal",
	emissive: "#fff",
	shininess: 100,
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

sphere.position.set(3, 0, 0);

const torus = new THREE.Mesh(
	new THREE.TorusGeometry(0.7, 0.2, 10),
	new THREE.MeshBasicMaterial({ color: "teal" }),
);
torus.position.set(0, 1.5, 1);

const bgPlane = new THREE.Mesh(
	new THREE.PlaneGeometry(window.innerWidth, window.innerHeight),
	new THREE.MeshBasicMaterial({ color: "orange" }),
);

const paperTexture = new THREE.TextureLoader().load("src/assets/paper.jpg");

const texturePlane = new THREE.Mesh(
	new THREE.PlaneGeometry(2, 2),
	new THREE.MeshBasicMaterial({ map: paperTexture }),
);

scene.add(bgPlane, texturePlane, torus, sphere, cube);

function animate() {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.01;
	cube.rotation.y -= 0.01;

	sphere.rotation.x += 0.01;
	sphere.rotation.y -= 0.01;

	torus.rotation.x += 0.01;
	torus.rotation.y -= 0.01;

	renderer.render(scene, camera);
}

animate();
