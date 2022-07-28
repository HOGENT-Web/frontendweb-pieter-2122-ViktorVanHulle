import { useEffect } from "react";
import * as THREE from "three";
import { CubeCamera } from "three";
import background from "../../assets/images/mr-cup-fabien-barral-Fo5dTm6ID1Y-unsplash.jpg";
import background2 from "../../assets/images/family-tree.png";

function Canvas(props) {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    camera.position.z = 96;

    const canvas = document.getElementById("c");
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true, //3D object looks smooth
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement); //append renderer to dom

    //ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    //spotlight
    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    //BG
    const image = new Image();
    const texture = new THREE.Texture(image);
    image.onload = () => {
      texture.needsUpdate = true;
    };
    image.src = background;
    const boxGeometry = new THREE.BoxGeometry(
      image.naturalWidth / 18,
      image.naturalHeight / 18,
      1
    );
    const boxMaterial = new THREE.MeshBasicMaterial({ map: texture });
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(boxMesh);

    //mouse
    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animate = () => {
      boxMesh.position.x = mouseX * 0.008;
      boxMesh.position.y = mouseY * 0.008;
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate); //recalls this funct every single frame
    };
    animate();
  }, []);

  return (
    <>
      <canvas id="c" />
    </>
  );
}

export default Canvas;
