import React from 'react'
import HeadingText from '../components/HeadingText'
import SubHeadingText from '../components/SubHeadingText'

function Address() {
  return (
     <section className='mt-36 flex flex-col items-center'>
          <HeadingText text="Address" align="center" />
          <SubHeadingText text="Locate our main office now." align="center" />
          <div className="w-full overflow-hidden rounded-2xl mt-12 border-4 border-[var(--primary-accent-color)]">
            <iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=NO%2030,%20OTADA%20ROAD%20,%20OTUKPO,%20BENUE%20STATE,%20NIGERIA+(Maxbillion)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/drones/">drones ireland</a></iframe>
          </div>
    </section>
  )
}

export default Address