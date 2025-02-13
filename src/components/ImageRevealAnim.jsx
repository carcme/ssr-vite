import React from 'react'
import images from '../json/images'

// GSAP
import { gsap, Power1, Power2 } from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const ImageRevealAnim = () => {
  useGSAP(() => {
    const revealContainers = document.querySelectorAll('#reveal')

    revealContainers.forEach((container) => {
      // const image = container.querySelector('img')
      const tint = container.querySelector('#bg')
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: tint,
          toggleActions: 'play none none reset',
        },
      })

      // tl.set(image, { xPercent: 0 })
      tl.set(tint, { x: 0 })
      tl.to(tint, {
        duration: 1.5,
        xPercent: 100,
        ease: Power1.easeInOut,
      })
      // tl.to(image, {
      //   xPercent: 0,
      // })
    })
  }, [])
  return (
    <>
      {images.map((image, index) => {
        return (
          <div
            key={index}
            id="container"
            className="flex flex-col justify-center items-center gap-4 px-4 pb-4 w-full max-h-[96] bg-black relative"
          >
            <div id="reveal" className="relative overflow-hidden ">
              <img
                className="relative h-full w-full object-cover "
                src={image.url}
              />
              <div id="bg" className="absolute inset-0 bg-black"></div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ImageRevealAnim
