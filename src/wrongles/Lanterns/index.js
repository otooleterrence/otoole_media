// import React, { Component } from 'react'
// import * as THREE from 'three'
// import OBJLoader from 'three-obj-loader';
// import PointerControls from 'three-pointer-controls';

// class Scene extends Component {

//   theme = {
//     skyColors: [
//       0x413952,
//       0x6D2EEB,
//       0xFF9D31,
//     ],
//     groundColors: [
//       0x3650B8,
//       0x4171B7,
//       0x283899,
//     ],
//     groundColors2: [
//       0x3552AF,
//       0x3650B8,
//       0x3350AA,
//     ],
//   }

//   componentDidMount() {

//     const width = this.mount.clientWidth
//     const height = this.mount.clientHeight

//     OBJLoader(THREE);
//     this.THREE = THREE
//     // console.log('THREE', THREE);

//     const loader = new this.THREE.OBJLoader();
//     const scene = new THREE.Scene()
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       width / height,
//       0.1,
//       1000
//     )

//     scene.fog = new THREE.Fog(this.theme.skyColors[1], 0, 1700);

//     const light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.7);
//     light.position.set(0.5, 1, 0.75);
//     scene.add(light);

//     const controls = new PointerControls(THREE);
//     // pointer lock controls require the PointerLockControls.js file in examples/js/controls
//     scene.add(controls(camera));


//     /**
//      * Skybox Geometry
//      */
//     const skyBox = new THREE.SphereGeometry(800, 32, 15);
//     const skyMat = new THREE.MeshBasicMaterial({ color: this.theme.skyColors[0] });
//     skyMat.side = THREE.BackSide;
//     const skyMesh = new THREE.Mesh(skyBox, skyMat);
//     scene.add(skyMesh);

//     /**
//      *  ground plane
//      */
//     let geometry = new THREE.PlaneGeometry(2000, 2000, 100, 100);
//     geometry.rotateX(-Math.PI / 2); //rotates to x plane

//     for (let i = 0, l = geometry.vertices.length; i < l; i++) {
//       //randomizes the location of each vertex in the x and z direction,slightly vertically
//       let vertex = geometry.vertices[i];
//       vertex.x += Math.random() * 20;
//       vertex.y += Math.random() * 8 - 5;
//       vertex.z += Math.random() * 20;
//     }
//     for (var i = 0, l = geometry.faces.length; i < l; i++) {
//       //the color of each face randomizes to fade between three randomized values of the same color
//       const groundColors2 = [
//         0x3552AF,
//         0x3650B8,
//         0x3350AA
//       ];
//       var face = geometry.faces[i];
//       face.vertexColors[0] = new THREE.Color(groundColors2[Math.floor(Math.random() * 3)]);
//       face.vertexColors[1] = new THREE.Color(groundColors2[Math.floor(Math.random() * 3)]);
//       face.vertexColors[2] = new THREE.Color(groundColors2[Math.floor(Math.random() * 3)]);
//     }

//     let material = new THREE.MeshStandardMaterial({ vertexColors: THREE.VertexColors });
//     // material = new THREE.MeshStandardMaterial( {color: 0x3650B8} );
//     //uses the vertex colors of each triangle to make a basic material
//     let mesh = new THREE.Mesh(geometry, material);

//     scene.add(mesh);

//     // FLOATING OBJECTS GEOMETRY
//     geometry = new THREE.CylinderGeometry(5, 5, 10, 32);
//     let objects = [];

//     loader.load(
//       `${process.env.PUBLIC_URL}/objects/Lamp.obj`,
//       (lamp) => {
//         loader.load(
//           `${process.env.PUBLIC_URL}/objects/Holder.obj`,
//           (holder) => {

//             for (let i = 0; i < 50; i++) {
//               let lampGeo = lamp.children[0].geometry;
//               let emitMap = new THREE.TextureLoader().load(`${process.env.PUBLIC_URL}/textures/testTexture.jpg`);

//               let texRandomizer = i % 3;

//               if (texRandomizer === 0) emitMap = new THREE.TextureLoader().load('textures/Textures_Hex.jpg');
//               else if (texRandomizer === 1) emitMap = new THREE.TextureLoader().load('textures/Textures_Dots.jpg');
//               else if (texRandomizer === 2) emitMap = new THREE.TextureLoader().load('textures/Textures_Chev.jpg');

//               let lampMaterial = new THREE.MeshStandardMaterial({ /*specular: 0xffffff,*/ flatShading: THREE.SmoothShading, vertexColors: THREE.VertexColors, emissive: this.theme.skyColors[2], emissiveIntensity: 1, emissiveMap: emitMap });
//               let lampMesh = new THREE.Mesh(lampGeo, lampMaterial);

//               // console.log('Lamp Mesh', lampMesh);

//               let holderGeo = holder.children[0].geometry;
//               let holderMaterial = new THREE.MeshStandardMaterial({ /*specular: 0xffffff,*/ flatShading: THREE.FlatShading, vertexColors: THREE.VertexColors, color: 0x000000 });
//               let holderMesh = new THREE.Mesh(holderGeo, holderMaterial);

//               let Lamps = new THREE.Group();
//               Lamps.add(lampMesh);
//               Lamps.add(holderMesh);

//               Lamps.scale.set(5, 5, 5);

//               Lamps.position.x = Math.floor(Math.random() * 20 - 10) * 20;
//               Lamps.position.y = Math.floor(Math.random() * 40) + 5;
//               Lamps.position.z = Math.floor(Math.random() * 20 - 10) * 20;
//               Lamps.rotation.y = -Math.PI / (Math.random() * 2);

//               scene.add(Lamps);

//               let posRandomizer = Math.random() * 2;
//               let rotRandomizer = Math.random() * 2;
//               // console.log(i, ': ', posRandomizer);

//               Lamps.animate = function (time) {
//                 this.position.y = (Math.sin(posRandomizer * time) + 5) * 2;
//                 this.rotation.y = (Math.sin(rotRandomizer * time) + 5) * 0.5;
//               }

//               objects.push(Lamps);
//             }

//             // FLOATING OBJECTS GEOMETRY HIGH UPS
//             geometry = new THREE.CylinderGeometry(5, 5, 10, 32); //new box geometry

//             for (let i = 0; i < 50; i++) {
//               let lampGeo = lamp.children[0].geometry;
//               let emitMap = new THREE.TextureLoader().load('textures/testTexture.jpg');

//               let texRandomizer = i % 3;

//               if (texRandomizer === 0) emitMap = new THREE.TextureLoader().load('textures/Textures_Hex.jpg');
//               else if (texRandomizer
//                  === 1) emitMap = new THREE.TextureLoader().load('textures/Textures_Dots.jpg');
//               else if (texRandomizer === 2) emitMap = new THREE.TextureLoader().load('textures/Textures_Chev.jpg');

//               let lampMaterial = new THREE.MeshStandardMaterial({ /*specular: 0xffffff,*/ flatShading: THREE.SmoothShading, vertexColors: THREE.VertexColors, emissive: this.theme.skyColors[2], emissiveIntensity: 1, emissiveMap: emitMap });
//               let lampMesh = new THREE.Mesh(lampGeo, lampMaterial);

//               // console.log('Lamp Mesh', lampMesh);

//               let holderGeo = holder.children[0].geometry;
//               let holderMaterial = new THREE.MeshStandardMaterial({ /*specular: 0xffffff,*/ flatShading: THREE.FlatShading, vertexColors: THREE.VertexColors, color: 0x000000 });
//               var holderMesh = new THREE.Mesh(holderGeo, holderMaterial);

//               let Lamps = new THREE.Group();
//               Lamps.add(lampMesh);
//               Lamps.add(holderMesh);

//               Lamps.scale.set(5, 5, 5);

//               //make a new mesh
//               Lamps.position.x = Math.floor(Math.random() * 20 - 10) * 20;
//               Lamps.position.y = Math.floor(Math.random() * 40) + 30;
//               Lamps.position.z = Math.floor(Math.random() * 20 - 10) * 20;
//               Lamps.rotation.y = -Math.PI / (Math.random() * 2);

//               //place that mesh in the scene randomly
//               scene.add(Lamps);

//               // material.color.setHSL( Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
//               //alter the material color between loops

//               let posRandomizer = Math.random() * 2;
//               let rotRandomizer = Math.random() * 2;
//               let heightRandomizer = Math.random() * 60 + 5;
//               // console.log(i, ': ', posRandomizer);

//               Lamps.animate = function (time) {
//                 this.position.y = (Math.sin(posRandomizer * time) + heightRandomizer) * 2;
//                 this.rotation.y = (Math.sin(rotRandomizer * time) + 5) * 0.5;
//               }

//               objects.push(Lamps);
//               //objects array will be used later for raycasting
//             }
//           })
//       }
//     );

//     // WATER GEOMETRY
//     // let waterNormals = new THREE.TextureLoader().load('textures/waternormals.jpg');
//     // waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
//     // let water = new THREE.Water(renderer, camera, scene, {
//     //   textureWidth: 512,
//     //   textureHeight: 512,
//     //   waterNormals: waterNormals,
//     //   alpha: 1.0,
//     //   // sunDirection: light.position.clone().normalize(),
//     //   sunColor: this.theme.skyColors[1],
//     //   waterColor: 0x001e0f,
//     //   distortionScale: 50.0
//     // });
//     // let mirrorMesh = new THREE.Mesh(
//     //   new THREE.PlaneBufferGeometry(1000, 1000),
//     //   water.material
//     // );
//     // mirrorMesh.add(water);
//     // mirrorMesh.rotation.x = -Math.PI * 0.5;
//     // scene.add(mirrorMesh);


//     const renderer = new THREE.WebGLRenderer({ antialias: true })

//     // RESIZE LISTENER
//     const onWindowResize= () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       // composer.setSize(window.innerWidth, window.innerHeight);
//     }
//     window.addEventListener('resize', onWindowResize, false);


//     geometry = new THREE.BoxGeometry(1, 1, 1)
//     material = new THREE.MeshBasicMaterial({ color: '#433F81' })
//     const cube = new THREE.Mesh(geometry, material)

//     camera.position.z = 4
//     scene.add(cube)
//     renderer.setClearColor('#000000')
//     renderer.setSize(width, height)

//     this.scene = scene
//     this.camera = camera
//     this.renderer = renderer
//     this.material = material
//     this.cube = cube

//     this.mount.appendChild(this.renderer.domElement)
//     this.start()
//   }

//   componentWillUnmount() {
//     this.stop()
//     this.mount.removeChild(this.renderer.domElement)
//   }

//   start = () => {
//     if (!this.rameId) {
//       this.frameId = requestAnimationFrame(this.animate)
//     }
//   }

//   stop = () => {
//     cancelAnimationFrame(this.frameId)
//   }

//   animate = () => {
//     requestAnimationFrame(animate);
//     if (controlsEnabled) {
//       raycaster.ray.origin.copy(controls.getObject().position);
//       raycaster.ray.origin.y -= 10;
//       var intersections = raycaster.intersectObjects(objects);
//       var isOnObject = intersections.length > 0;
//       var time = performance.now();
//       var delta = (time - prevTime) / 1000;
//       velocity.x -= velocity.x * 10.0 * delta;
//       velocity.z -= velocity.z * 10.0 * delta;
//       velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass
//       if (moveForward) velocity.z -= 400.0 * delta;
//       if (moveBackward) velocity.z += 400.0 * delta;
//       if (moveLeft) velocity.x -= 400.0 * delta;
//       if (moveRight) velocity.x += 400.0 * delta;
//       if (isOnObject === true) {
//         velocity.y = Math.max(0, velocity.y);
//         canJump = true;
//       }
//       controls.getObject().translateX(velocity.x * delta);
//       controls.getObject().translateY(velocity.y * delta);
//       controls.getObject().translateZ(velocity.z * delta);
//       if (controls.getObject().position.y < 10) {
//         velocity.y = 0;
//         controls.getObject().position.y = 10;
//         canJump = true;
//       }
//       prevTime = time;
//     }

//     //animate each lantern
//     var tim = performance.now() * 0.001;
//     for (var i = 0; i < objects.length; i++) {
//       objects[i].animate(tim);
//     }

//     // water.material.uniforms.time.value += 1.0 / 60.0;
//     // // controls.update();
//     // water.render();

//     // var delta = 0.01;
//     // renderer.setViewport( 0, 0, window.innerWidth, window.innerHeight );
//     // composer.render();
//     // renderer.render( scene, camera );
//     this.cube.rotation.x += 0.01
//     this.cube.rotation.y += 0.01

//     this.renderScene()
//     // this.frameId = window.requestAnimationFrame(this.animate)

//   }

//   renderScene() {
//     this.renderer.render(this.scene, this.camera)
//   }

//   render() {
//     return (
//       <div
//         style={{ width: '100%', height: '100%' }}
//         ref={(mount) => { this.mount = mount }}
//       />
//     )
//   }
// }

// export default Scene
