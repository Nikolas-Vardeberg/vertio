import { PortableText } from '@portabletext/react';
import * as React from 'react'

export type Text = {
  content: any;
  isDark: boolean;
}

export type Props = Text

export const Text = ({ content, isDark }: Props) => {
  return (
    <div className={isDark ? 'bg-primary' : 'bg-secondary'}>
      <div className={`max-w-8xl px-8 md:px-20 ${isDark ? "py-8 md:py-16" : "py-2 md:py-8"}`}>
        <div className={`max-w-8xl justify-start items-start prose prose-xl prose-li:marker:text-black ${isDark ? "text-white prose-li:marker:text-white prose-headings:text-white  prose-strong:text-white" : "text-black"}`}>
            {content && (
                <PortableText value={content}/>
            )}
        </div>
      </div>
    </div>
  )
}