import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
//Loading
// Home Page Orb
const textureLoader = new THREE.TextureLoader()
// Debug

// ** Important
// const gui = new dat.GUI()
const normaltexture = textureLoader.load('/textures/NormalMap.png')
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.SphereGeometry(1,64,32);
// Materials

const material = new THREE.MeshStandardMaterial()
material.metalness = 1
material.roughness = 0.5
material.normalMap = normaltexture
material.color = new THREE.Color(0x000000)

// Mesh
const sphere = new THREE.Mesh(geometry,material)
sphere.position.set(0,0,-1)
scene.add(sphere)


const pointLight = new THREE.PointLight(0xff3636, 1)
pointLight.position.x = 0
pointLight.position.y = -10
        
pointLight.position.z = -8
pointLight.intensity = 10
scene.add(pointLight)

const pointLight2 = new THREE.PointLight(0x2bd2f0, 1)
pointLight2.position.x = 0
pointLight2.position.y = 10
pointLight2.position.z = -8
pointLight2.intensity = 10
scene.add(pointLight2)

const pointLight3 = new THREE.PointLight(0xffffff, 1)
pointLight3.position.x = 0
pointLight3.position.y = 0
pointLight3.position.z = 2
pointLight3.intensity = 1
scene.add(pointLight3)



/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)

scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha:true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */


let mouseX = 0
let mouseY = 0
let targetX = 0
let targetY = 0

const windowHalfX = window.innerWidth / 2
const windowHalfY = window.innerHeight / 2

const onDocumentMouseMove = (event) => {
    mouseX = (event.clientX - windowHalfX)
    mouseY = (event.clientY - windowHalfY)
    pointLight.position.x = mouseY
    pointLight.position.y = -mouseX
    pointLight2.position.x = -mouseY
    pointLight2.position.y = mouseX
    camera.position.x = mouseX * 0.0001
    camera.position.y = mouseY * 0.0001
    camera.position.z = 2
    
}
document.addEventListener('mousemove', onDocumentMouseMove)

const clock = new THREE.Clock()

const tick = () =>
{
    targetX = mouseX * 0.001
    targetY = mouseY * 0.001
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = .5 * elapsedTime
    sphere.rotation.y += .5 * (targetX - sphere.rotation.y)
    sphere.rotation.x += .5 * (targetY - sphere.rotation.x)
    
    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

