import * as React from 'react'

export type Quote = {
  body: string
  hasDarkBackground: boolean
}

export type Props = Quote

export const Quote = ({ hasDarkBackground, body}: Props) => {
  return (
    <div className={hasDarkBackground ? 'bg-primary-500' : 'bg-secondary-100'}>
      <div className="mx-auto max-w-5xl px-8 py-24 sm:px-36 md:py-32">
        <div className="relative">
          <div
            className={`relative text-center font-times text-2xl font-bold md:text-4xl md:leading-10 
            ${hasDarkBackground ? 'text-grey-50' : 'text-primary-700'}`}
          >
            “{body}”
          </div>
        </div>
      </div>
    </div>
  )
}
