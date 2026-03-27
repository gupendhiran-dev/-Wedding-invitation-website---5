const canvas = document.getElementById('particle-canvas');
const scene = new THREE.Scene();

// Camera setup
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 50;

// Renderer setup
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Create Particles (Sparkles/Dust)
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 700; // Amount of particles
const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++) {
    // Spread particles across the screen
    posArray[i] = (Math.random() - 0.5) * 150; 
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

// Material for glowing luxury feel
const particlesMaterial = new THREE.PointsMaterial({
    size: 0.3,
    color: 0xD4AF37, // Champagne Gold
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
});

// Particle Mesh
const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// Mouse movement effect
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX / window.innerWidth - 0.5;
    mouseY = event.clientY / window.innerHeight - 0.5;
});

// Animation Loop
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Slow continuous rotation
    particlesMesh.rotation.y = elapsedTime * 0.05;
    particlesMesh.rotation.x = elapsedTime * 0.02;

    // Subtle parallax effect tracking the mouse
    particlesMesh.position.x += (mouseX * 5 - particlesMesh.position.x) * 0.05;
    particlesMesh.position.y += (-mouseY * 5 - particlesMesh.position.y) * 0.05;

    // Slowly move particles down (like falling petals/snow)
    const positions = particlesMesh.geometry.attributes.position.array;
    for(let i = 1; i < particlesCount * 3; i += 3) {
        positions[i] -= 0.02; // Y-axis speed
        if(positions[i] < -75) {
            positions[i] = 75; // Reset to top
        }
    }
    particlesMesh.geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
}
animate();

// Handle Window Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
