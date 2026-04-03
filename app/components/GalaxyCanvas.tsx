// app/components/GalaxyCanvas.tsx
'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function GalaxyCanvas({ subtle=false }: { subtle?:boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return
    const renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
    renderer.setSize(window.innerWidth,window.innerHeight)
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,800)
    camera.position.z = 6
    const pal = subtle?[[1,1,1],[0.7,0.8,1],[0.9,0.75,1]]:[[1,1,1],[0,0.96,1],[1,0.71,0.77],[1,0.84,0],[0.76,0.49,1]]
    const N = subtle?3000:5500
    const sp=new Float32Array(N*3),sc=new Float32Array(N*3),sb=new Float32Array(N)
    for(let i=0;i<N;i++){
      sp[i*3]=(Math.random()-.5)*180;sp[i*3+1]=(Math.random()-.5)*180;sp[i*3+2]=(Math.random()-.5)*180
      const c=pal[Math.floor(Math.random()*pal.length)];sc[i*3]=c[0];sc[i*3+1]=c[1];sc[i*3+2]=c[2]
      sb[i]=Math.random()*2.5+0.3
    }
    const sg=new THREE.BufferGeometry()
    sg.setAttribute('position',new THREE.BufferAttribute(sp,3))
    sg.setAttribute('color',new THREE.BufferAttribute(sc,3))
    sg.setAttribute('size',new THREE.BufferAttribute(new Float32Array(sb),1))
    const sm=new THREE.Points(sg,new THREE.PointsMaterial({size:.1,vertexColors:true,transparent:true,opacity:subtle?.6:.85,sizeAttenuation:true}))
    scene.add(sm)
    if(!subtle){
      const nodes=Array.from({length:25},()=>new THREE.Vector3((Math.random()-.5)*25,(Math.random()-.5)*16,(Math.random()-.5)*8-12))
      const lp:THREE.Vector3[]=[]
      for(let i=0;i<16;i++){const a=Math.floor(Math.random()*nodes.length),b=Math.floor(Math.random()*nodes.length);if(a!==b){lp.push(nodes[a],nodes[b])}}
      scene.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(lp),new THREE.LineBasicMaterial({color:0x00f5ff,transparent:true,opacity:.07})))
    }
    const gN=1600,gp=new Float32Array(gN*3),gc=new Float32Array(gN*3)
    for(let i=0;i<gN;i++){
      const arm=Math.floor(Math.random()*3),t=Math.random()
      const angle=t*Math.PI*6+arm*(Math.PI*2/3),r=t*17+Math.random()*2,sc2=(1-t)*3
      gp[i*3]=Math.cos(angle)*r+(Math.random()-.5)*sc2;gp[i*3+1]=(Math.random()-.5)*1.5;gp[i*3+2]=Math.sin(angle)*r+(Math.random()-.5)*sc2-25
      const b=.25+t*.75
      if(arm===0){gc[i*3]=b*.4;gc[i*3+1]=b*.1;gc[i*3+2]=b}
      else if(arm===1){gc[i*3]=b*.8;gc[i*3+1]=b*.3;gc[i*3+2]=b*.6}
      else{gc[i*3]=b*.1;gc[i*3+1]=b*.7;gc[i*3+2]=b}
    }
    const gg=new THREE.BufferGeometry();gg.setAttribute('position',new THREE.BufferAttribute(gp,3));gg.setAttribute('color',new THREE.BufferAttribute(gc,3))
    scene.add(new THREE.Points(gg,new THREE.PointsMaterial({size:.13,vertexColors:true,transparent:true,opacity:subtle?.35:.55,sizeAttenuation:true})))
    let mx=0,my=0,sy=0
    const onM=(e:MouseEvent)=>{mx=e.clientX/window.innerWidth-.5;my=e.clientY/window.innerHeight-.5}
    const onS=()=>{sy=window.scrollY}
    window.addEventListener('mousemove',onM);window.addEventListener('scroll',onS)
    const clock=new THREE.Clock();const szA=sg.attributes.size.array as Float32Array
    let raf:number
    const loop=()=>{
      raf=requestAnimationFrame(loop);const t=clock.getElapsedTime()
      sm.rotation.y=t*.007+mx*.04;sm.rotation.x=my*.025;sm.rotation.z=t*.0012
      camera.position.y=-sy*.002+my*-.2;camera.position.x=mx*.3
      for(let i=0;i<N;i++)szA[i]=(Math.sin(t*1.8+i*.06)*.3+.9)*sb[i]
      sg.attributes.size.needsUpdate=true;renderer.render(scene,camera)
    };loop()
    const onR=()=>{camera.aspect=window.innerWidth/window.innerHeight;camera.updateProjectionMatrix();renderer.setSize(window.innerWidth,window.innerHeight)}
    window.addEventListener('resize',onR)
    return()=>{cancelAnimationFrame(raf);window.removeEventListener('mousemove',onM);window.removeEventListener('scroll',onS);window.removeEventListener('resize',onR);renderer.dispose()}
  },[subtle])
  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0 pointer-events-none" />
}
