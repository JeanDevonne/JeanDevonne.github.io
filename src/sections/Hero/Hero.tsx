'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function Hero() {

  useGSAP(() => {
    gsap.fromTo("#hero-h1, #hero-h2", {
      opacity: 0,
      y: 100,
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.4,
      duration: 1,
      ease: "power2.inOut",
    })
  }, [])
  
  return (
    <section className="w-full py-20 flex justify-around items-center">
      <div>
        <h1 id="hero-h1" className="text-4xl sm:text-5xl font-extrabold mb-2">JEAN LEON</h1>
        <h2 id="hero-h2" className="text-2xl sm:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 animate-gradient-x">Front End Engineer</h2>
        <p className="text-base">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
      </div>
      <picture>
        <img src="/images/avatar.jpg" height={200} width={200} alt="" className="rounded-full" />
      </picture>
    </section>
  )
}
