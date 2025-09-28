"use client"


import { Suspense, useEffect, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js"
import * as THREE from "three"
import gsap from "gsap"


function RubiksCube() {
  const cubesRef = useRef<THREE.Mesh[]>([])
  const lightRef = useRef<THREE.DirectionalLight>(null)
  const groupRef = useRef<THREE.Group>(null) // grupo inteiro para rotação contínua
  const moveIndex = useRef(0)
  const isAnimating = useRef(false)

  const [isInicialized, setIsInicialized] = useState(false)

  useEffect(() => {
    if (!isInicialized){
        const cubes: THREE.Mesh[] = []

    // paleta de cinzas (mantendo dark minimal)
 const colors = [
  new THREE.Color("#111"),
  new THREE.Color("#2e2e2e"),
  new THREE.Color("#2e2e2e"),
  new THREE.Color("#4d4d4d"),
  new THREE.Color("#6e6e6e"),
  new THREE.Color("#8c8c8c"),
]

 for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const geometry = new RoundedBoxGeometry(0.95, 0.95, 0.95, 3, 0.05)
          geometry.translate(x, y, z)

          // brilho metálico
          const color = colors[Math.floor(Math.random() * colors.length)]
          const material = new THREE.MeshStandardMaterial({
            color,
            roughness: 0.5,
            metalness: 1,
          })

          const cube = new THREE.Mesh(geometry, material) as THREE.Mesh & {
            center?: THREE.Vector3
          }
          cube.center = new THREE.Vector3(x, y, z)

          cubes.push(cube)
        }
      }
    }
    cubesRef.current = cubes
    setIsInicialized(true)
    startSequence()
      
    }
  
    
  }, [isInicialized])

  function rotateLayer(
    order: "XYZ" | "YZX" | "ZXY",
    axis: "x" | "y" | "z",
    sign: number,
    dir: number
  ) {
    if (isAnimating.current) return
    isAnimating.current = true

    const cubesToRotate = cubesRef.current.filter(cube => {
      const center = (cube as THREE.Mesh & { center?: THREE.Vector3 }).center
      return center && Math.abs(center[axis] - sign) < 0.1
    })

    const rotationObj = { angle: 0, prevAngle: 0 }
    gsap.to(rotationObj, {
      angle: dir * Math.PI / 2,
      duration: 1,
      ease: "power2.inOut",
      onUpdate: () => {
        const delta = rotationObj.angle - rotationObj.prevAngle
        rotationObj.prevAngle = rotationObj.angle

        const rotationEuler = new THREE.Euler()
        rotationEuler.order = order
        rotationEuler[axis] = delta

        const rotationMatrix = new THREE.Matrix4()
        rotationMatrix.makeRotationFromEuler(rotationEuler)

        for (const cube of cubesToRotate) {
          cube.rotation.reorder(order)
          cube.rotation[axis] += delta

          const center = (cube as THREE.Mesh & { center?: THREE.Vector3 }).center
          if (center) {
            center.applyMatrix4(rotationMatrix)
          }
        }
      },
      onComplete: () => {
        isAnimating.current = false
        moveIndex.current = (moveIndex.current + 1) % sequence.length
        setTimeout(startSequence) // intervalo reduzido
      }
    })
  }

  const sequence: Array<() => void> = [
    () => rotateLayer("YZX", "y", 1, 1),
    () => rotateLayer("XYZ", "x", -1, -1),
    () => rotateLayer("YZX", "y", -1, -1),
    () => rotateLayer("ZXY", "z", 1, 1),
  ]

  function startSequence() {
    sequence[moveIndex.current]()
  }

  // rotação suave do grupo inteiro
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3
      groupRef.current.rotation.x += delta * 0.1
    }
    if (lightRef.current) {
      lightRef.current.position.copy(state.camera.position)
    }
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={2}
      
       />
      <directionalLight 
      ref={lightRef} 
      intensity={2} 
      scale={5}
      position={[-5, 5, -10]} 
      castShadow
       />
      <spotLight 
      position={[5, -10, -5]} 
      angle={1} 
      penumbra={0.8} 
      intensity={2} 
      castShadow />

      <hemisphereLight 
      groundColor={"#ffffff"} 
      intensity={1} 
      args={["#ffffff", "#22222", 1]}
      
      />
      <pointLight 
      position={[5, -5, -3]} 
      intensity={2} 
      />

      {isInicialized && cubesRef.current.map((cube, i)=>(
        <primitive object={cube} key={i}/>
      ))}
    </group>
  )
}

export default function Cube() {
  return (
    <Canvas 
    dpr={[1,2]}
    gl={{preserveDrawingBuffer:true}}
    shadows 
    camera={{ position: [5, 5, 6], fov: 35 }}>

        <Suspense >
        <RubiksCube />
     <OrbitControls 
   enableZoom={false}
 
  />
        </Suspense>
      <color attach="background" args={["black"]} />
      
     
    </Canvas>
  )
}
