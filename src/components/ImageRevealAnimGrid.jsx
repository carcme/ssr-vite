import React from 'react'
import images from '../json/images'

// GSAP
import { gsap, Power1, Power2 } from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const ImageRevealAnimGrid = () => {
  useGSAP(() => {
    const revealContainers = document.querySelectorAll('#reveal')
    console.log('🚀 ~ useGSAP ~ revealContainers:', revealContainers)

    revealContainers.forEach((container, index) => {
      const image = container.querySelector('img')
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: 'play none none reset',
        },
      })

      tl.set(container, { autoAlpha: 1 })
      tl.from(container, {
        duration: 1.5,
        xPercent: 0,
        // filter: 'blur(10px)',
        ease: Power1.easeInOut,
      })
      tl.from(image, {
        xPercent: index % 2 === 0 ? 100 : -100,
        duration: 1.5,
        scale: 1,
        opacity: 0,
        delay: -1.5,
        ease: Power2.easeInOut,
      })
    })
  }, [])
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 pb-4 bg-black">
        {images.map((image, index) => {
          if (index > 50) return null
          return (
            <div
              key={index}
              className={`overflow-hidden w-full max-h-96 rounded-xl group  ${
                index % 5 === 0 ? 'col-span-2 ' : ''
              }`}
              id="reveal"
            >
              <img
                className={`relative object-cover w-full h-full items-center  justify-center z-10`}
                src={image.url}
              />
              {image.title && (
                <div className="opacity-0 absolute inset-0 bottom-0 top-[75%] bg-black/30 z-50 justify-center px-4 items-start group-hover:opacity-100 flex flex-col text-white text-2xl transition-opacity duration-300 ease-in-out">
                  {image.title}
                  <p className="text-sm font-thin pb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima, reprehenderit.
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ImageRevealAnimGrid
