import * as React from 'react'


export type Text = {
  body: string
  heading: string;
  isDark: boolean;
}

export type Props = Text

export const Text = ({ heading, body, isDark }: Props) => {
  return (
    <div className={isDark ? 'bg-primary' : ''}>
      <div className={`max-w-8xl px-8 md:px-20 ${isDark ? "py-8 md:py-16" : "py-2 md:py-8"}`}>
        {heading && (
            <div className={`flex justify-start items-start text-small md:text-medium leading-normal mb-5 ${isDark ? "text-secondary" : "text-primary"}`}>
                {heading}
            </div>
        )}
        {body && (
             <div
             className={`flex justify-start items-start text-extra-small md:text-small leading-normal ${isDark ? "text-secondary" : "text-primary"}`}
            >
                {body}
            </div>
        )}
      </div>
    </div>
  )
}