// App level imports
import BaseLayout from '../../components/layout/BaseLayout'

import ImageRevealAnim from '../../components/ImageRevealAnim'
import ImageRevealAnimGrid from '../../components/ImageRevealAnimGrid'

export const Home = () => {
  return (
    <BaseLayout>
      <div className="bg-black w-full ">
        <div className="h-px sm:mx-32 mx-10 my-20 bg-white text-white">
          Slide In Alternating
        </div>
      </div>
      <ImageRevealAnimGrid />

      <div className="bg-black w-full ">
        <div className="h-px sm:mx-32 mx-10 my-20 bg-white text-white">
          Slide Off Overlay
        </div>
      </div>
      <ImageRevealAnim />
    </BaseLayout>
  )
}
