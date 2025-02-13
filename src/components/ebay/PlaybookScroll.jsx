import React from 'react'
import ScrollAnimation from '../../components/ScrollAnimation'
import './ebay.css'

import { gsap, Power1, Power2 } from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const PlaybookScroll = () => {
  const scalerImg = useRef(null)
  const section = useRef(null)
  let scalerTl

  const hasScrollSupport = 'scrollBehavior' in document.documentElement.style

  useEffect(() => {
    document.documentElement.dataset.enhanced = true
    document.documentElement.dataset.center = true
    document.documentElement.dataset.layers = true
    document.documentElement.dataset.stick = true
    document.documentElement.dataset.stagger = 'timing' // timing / range

    if (hasScrollSupport) {
      scalerTl = gsap
        .timeline({
          scrollTrigger: {
            trigger: 'main section:first-of-type',
            start: 'top -10%',
            end: 'bottom 80%',
            scrub: true,
          },
        })
        .from(
          scalerImg.current,
          {
            height: window.innerHeight - 32,
            ease: 'power1.inOut',
          },
          0
        )
        .from(
          scalerImg.current,
          {
            width: window.innerWidth - 32,
            ease: 'power2.inOut',
          },
          0
        )
    }
  }, [])

  return (
    <div>
      {' '}
      <div
        className="overflow-clip z-10"
        style={{
          background: 'light-dark(#fff, #000)',
        }}
      >
        <header>
          <h1 className="fluid">
            let's
            <br />
            scroll.
          </h1>
        </header>

        <main className="pt-28">
          <section>
            <div className="min-h-screen w-screen flex content-center place-items-center sticky top-0">
              <div className="grid">
                <div className="layer">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1556304044-0699e31c6a34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1590330297626-d7aff25a0431?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxmYXNoaW9ufGVufDB8fDB8fHww"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHxmYXNoaW9ufGVufDB8fDB8fHww"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fG1vZGVsJTIwZmFzaGlvbiUyMHN0cmVldHxlbnwwfHwwfHx8MA%3D%3D"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1565321590372-09331b9dd1eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFpciUyMGpvcmRhbnxlbnwwfHwwfHx8MA%3D%3D"
                      alt=""
                    />
                  </div>
                </div>
                <div className="layer">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM4fHxwcm9kdWN0fGVufDB8fDB8fHww"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1637414165749-9b3cd88b8271?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHRlY2glMjBwcm9kdWN0fGVufDB8fDB8fHww"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1699911251220-8e0de3b5ce88?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b25ld2hlZWx8ZW58MHx8MHx8fDA%3D"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1667483629944-6414ad0648c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGx1eHVyeSUyMHdhdGNofGVufDB8fDB8fHww"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://plus.unsplash.com/premium_photo-1706078438060-d76ced26d8d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNhbWVyYSUyMHBvbGFyb2lkfGVufDB8fDB8fHww"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1525385444278-b7968e7e28dc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGl0ZW18ZW58MHx8MHx8fDA%3D"
                      alt=""
                    />
                  </div>
                </div>
                <div className="layer">
                  <div>
                    <img
                      src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXxlbnwwfHwwfHx8MA%3D%3D"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                      alt=""
                    />
                  </div>
                </div>
                <div className="scaler">
                  <img
                    ref={scalerImg}
                    src="https://assets.codepen.io/605876/model-shades.jpg?format=auto&quality=100"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="fluid">fin.</h2>
          </section>
        </main>
      </div>
    </div>
  )
}

export default PlaybookScroll
