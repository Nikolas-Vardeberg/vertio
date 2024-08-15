/* eslint-disable @next/next/no-img-element */
import ImageBox from 'components/shared/ImageBox'
import * as React from 'react'

export type MainHero = {
  heading: string
  body?: string
  heroImage: any
  heroImageAlt: string
}

export type Props = MainHero

export const MainHero = ({
  heading,
  body,
  heroImage,
  heroImageAlt,
}: Props) => {
  return (
    <div className='bg-primary'>
      <div className='py-24 px-8 md:px-20 flex flex-col space-y-8'>
        <div className='max-w-4xl relative flex justify-start items-start'>
          {heading && (
            <h1 className='text-medium self-start sm:text-large text-secondary mb-4'>{heading}</h1>
          )}
        </div>
        {body && (
          <div className='max-w-7xl relative justify-start items-start'>
            <h4 className='text-extra-small sm:text-small text-secondary'>{body}</h4>
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
