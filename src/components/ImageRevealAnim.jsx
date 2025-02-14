import React from 'react'
import images from '../json/images'

// GSAP
import { gsap, Power1, Power2 } from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const ImageRevealAnim = () => {
  useGSAP(() => {
    const mainTl = gsap.timeline()

    const revealContainers = document.querySelectorAll('#reveal_')

    revealContainers.forEach((container, index) => {
      const tint = container.querySelector('#bg')
      // const image = container.querySelector('img')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: 'play none none reset',
        },
      })

      tl.set(tint, { x: 0 })
      // tl.set(image, { right: 100, scale: 1.2 })
      // tl.to(
      //   image,
      //   {
      //     right: 0,
      //     scale: 1,
      //     delay: (index % 3) * 0.5,
      //     duration: 1,
      //     ease: Power1.easeInOut,
      //   },
      //   '+=' + (index % 3)
      // )
      tl.to(
        tint,
        {
          xPercent: 100,
          duration: 1,
          xPercent: 100,
          ease: Power1.easeInOut,
        },
        '+=' + (index % 3)
      )
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
              id="container"
              className="flex flex-col justify-center items-center gap-4 px-4 pb-4 w-full h-full max-h-96 bg-black relative"
            >
              <div
                id="reveal_"
                className="relative object-cover w-full h-full items-center  justify-center z-10 overflow-hidden group"
              >
                <img
                  className="relative w-full h-full max-h-96 object-cover "
                  src={image.url}
                />
                <div id="bg" className="absolute inset-0 bg-black"></div>
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
            </div>
          )
        })}
      </div>
    </>

    // todo: make image stationary and move the tint instead
    // <div
    //   key={index}
    //   id="container"
    //   className="flex flex-col justify-center items-center gap-4 px-4 pb-4 w-full h-full max-h-[96] bg-black relative"
    // >
    //   <div id="reveal_" className="w-full h-96 relative overflow-hidden ">
    //     <img className="w-full object-cover" src={image.url} />
    //     <div id="bg" className="absolute inset-0 bg-black"></div>
    //   </div>
    // </div>
  )
}

export default ImageRevealAnim
