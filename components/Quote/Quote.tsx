import * as React from 'react'

export type Quote = {
  body: string
  hasDarkBackground: boolean
}

export type Props = Quote

export const Quote = ({ hasDarkBackground, body}: Props) => {
  return (
    <div className={hasDarkBackground ? 'bg-primary' : 'bg-secondary'}>
      <div className='max-w-9xl px-8 py-24 sm:px-36 md:py-24'>
        <div className='relative'>
          <div className={`relative self-start text-small md:text-medium xl:text-large leading-normal ${hasDarkBackground ? "text-secondary": "text-primary"}`}>
            &quot;{body}&quot;
          </div>
        </div>
      </div>
    </div>
  )
}
