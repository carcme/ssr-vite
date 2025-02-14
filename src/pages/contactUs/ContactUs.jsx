// App level imports
import BaseLayout from '../../components/layout/BaseLayout'
import { useElementOnScreen } from '../../lib/IO-Api-hook'

import svg from '../../assets/react.svg'

export const ContactUs = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '-150px',
    threshold: 0.9,
  })
  console.log('🚀 ~ ContactUs ~ containerRef:', containerRef)
  console.log('🚀 ~ ContactUs ~ isVisible:', isVisible)

  return (
    <BaseLayout>
      <div className="flex flex-col items-center justify-center h-[200vh] bg-[#282c34]">
        <div
          className={`flex justify-center items-center fixed top-0 w-full bg-transparent text-white font-extrabold text-2xl mt-20 p-6 z-50 ${
            isVisible === true ? '' : 'bg-red-700'
          }`}
        >
          {isVisible ? 'IN VIEWPORT' : 'NOT IN VIEWPORT'}
        </div>
        <div className="h-screen w-full"></div>
        <div
          className="box flex justify-center items-center bg-blue-400  text-white font-extrabold text-2xl w-80 h-60 rounded-md transition-all duration-1000 ease-in-out"
          ref={containerRef}
        >
          <div className="flex justify-center items-center gap-4">
            <img
              src="http://stuckincustoms.smugmug.com/Portfolio/i-KMjVHRd/0/X3/Andramada-X3.jpg"
              alt="svg"
              className="w-full h-fit object-cover"
            />
            <img
              src="https://assets.codepen.io/605876/model-shades.jpg?format=auto&quality=100"
              className={`transition-all duration-1000 ease-in-out w-full h-fit object-cover ${
                isVisible === true ? 'scale-[100%]' : 'scale-[400%]'
              }`}
              alt="svg"
            />
            <img
              src="http://stuckincustoms.smugmug.com/Portfolio/i-JSxf5Nm/0/X3/Burning-Man-Day-6%20%28202%20of%201606%29-X3.jpg"
              alt="svg"
              className="w-full h-fit object-cover"
            />
          </div>
        </div>
      </div>
      <div className="h-96 w-full items-center text-white text-2xl p-3">
        Extra Content
      </div>
    </BaseLayout>
  )
}
