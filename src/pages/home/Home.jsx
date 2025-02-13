import { useEffect, useRef } from 'react'
// App level imports
import BaseLayout from '../../components/layout/BaseLayout'

import ImageRevealAnim from '../../components/ImageRevealAnim'
import ImageRevealAnimGrid from '../../components/ImageRevealAnimGrid'

export const Home = () => {
  return (
    <BaseLayout>
      <ImageRevealAnimGrid />
      <ImageRevealAnim />
    </BaseLayout>
  )
}
