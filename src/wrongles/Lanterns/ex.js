import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import React3 from 'react-three-renderer'
import * as THREE from 'three'
import Stats from 'stats.js'

/*eslint-disable react/no-string-refs */
/*eslint-disable react/no-find-dom-node */
export default class Preview3D extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cameraPosition: new THREE.Vector3(0, 50, 1500),
      lookAt: new THREE.Vector3(0, 200, 0)
    }

    this.lightPosition = new THREE.Vector3(1, 1, 1)
    this.clock = new THREE.Clock()

    this.mixers = []
    this._onAnimate = () => {}
  }

  componentDidMount() {
    const { scene } = this.refs

    // stats
    this.stats = new Stats()
    this.refs.container.appendChild(this.stats.domElement)

    const onProgress = function(xhr) {
      if (xhr.lengthComputable) {
        var percentComplete = xhr.loaded / xhr.total * 100
        console.log(Math.round(percentComplete, 2) + '% downloaded')
      }
    }

    const onError = function(xhr) {
      console.error(xhr)
    }

    const manager = new THREE.LoadingManager()
    manager.onProgress = function(item, loaded, total) {
      console.log(item, loaded, total)
    }

    const loader = new THREE.FBXLoader(manager)
    loader.load(
      '../accient_2_full.fbx',
      function(object) {
        scene.children.push(object)
      },
      onProgress,
      onError
    )

    // controls, camera
    const controls = new THREE.OrbitControls(
      this.refs.mainCamera,
      ReactDOM.findDOMNode(this.refs.react3)
    )

    controls.target.set(0, 12, 0)
    controls.addEventListener('change', () => {
      this.setState({
        cameraPosition: this.refs.mainCamera.position
      })
    })

    let light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.0)
    light.position.set(0, 1, 0)
    scene.children.push(light)

    light = new THREE.DirectionalLight(0xffffff, 1.0)
    light.position.set(0, 1, 0)
    scene.children.push(light)
  }

  componentWillUnmount() {
    delete this.stats
  }

  render() {
    const width = window.innerWidth // canvas width
    const height = window.innerHeight // canvas height

    return (
      <div ref="container">
        <React3
          mainCamera="camera" // this points to the perspectiveCamera below
          width={width}
          height={height}
          onAnimate={this._onAnimate}
          ref="react3"
        >
          <scene ref="scene">
            <perspectiveCamera
              name="camera"
              fov={70}
              aspect={width / height}
              near={1}
              far={3000}
              position={this.state.cameraPosition}
              lookAt={this.state.lookAt}
            />
            <gridHelper size={1000} divisions={10} />
            <directionalLight
              color={0xffffff}
              intensity={2}
              position={this.lightPosition}
            />
            <mesh>
              <boxGeometry width={1} height={1} depth={1} />
              <meshBasicMaterial color={0x00ff00} />
            </mesh>
          </scene>
        </React3>
      </div>
    )
  }
}
