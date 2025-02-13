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

  return (
    <BaseLayout>
      <div className="flex flex-col items-center justify-center h-[400vh] bg-[#282c34]">
        <div
          className={`flex justify-center items-center fixed top-0 w-full bg-transparent text-white font-extrabold text-2xl mt-20 p-6 z-50${
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
          <img
            src="https://assets.codepen.io/605876/model-shades.jpg?format=auto&quality=100"
            className={`transition-all duration-1000 ease-in-out z-10 ${
              isVisible === true ? '' : 'scale-[400%]'
            }`}
            alt="svg"
          />
        </div>
      </div>
    </BaseLayout>
  )
}
