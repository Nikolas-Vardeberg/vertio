/* eslint-disable @next/next/no-img-element */
import ImageBox from 'components/shared/ImageBox'
import * as React from 'react'

export type MainHero = {
  heading: string
  body?: string
  heroImage: any
  heroImageAlt: string
  darkBackground: boolean
}

export type Props = MainHero

export const MainHero = ({
  heading,
  body,
  heroImage,
  heroImageAlt,
  darkBackground
}: Props) => {
  return (
    <div className={`${darkBackground ? "bg-primary" : "bg-secondary"}`}>
      <div className='py-24 px-8 md:px-20 flex flex-col space-y-8'>
        <div className='max-w-4xl relative flex justify-start items-start'>
          {heading && (
            <h1 className={`text-medium self-start sm:text-large mb-4 ${darkBackground ? "text-white" : "text-black"}`}>{heading}</h1>
          )}
        </div>
        {body && (
          <div className='max-w-7xl relative justify-start items-start'>
            <h4 className={`text-extra-small sm:text-small ${darkBackground ? "text-white" : "text-black"}`}>{body}</h4>
          </div>
        )}
        {heroImage && (
          <ImageBox
            image={heroImage}
            alt={heroImageAlt || 'Hero image'}
            className='md:w-full md:h-full'
          />
        )}
        </div>
    </div>
  )
}
