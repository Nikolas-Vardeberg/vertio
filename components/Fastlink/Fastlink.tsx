/* eslint-disable @next/next/no-img-element */
import ImageBox from 'components/shared/ImageBox'
import Link from 'next/link';
import * as React from 'react'

type Links = {
    service: string;
    url: string;
}

export type Fastlink = {
  eyebrow: string
  fastlinkImage: any
  fastlinkImageAlt: string
  blocks: Links[];
}

export type Props = Fastlink

export const Fastlink = ({
  eyebrow,
  fastlinkImage,
  fastlinkImageAlt,
  blocks
}: Props) => {
  return (
    <div className="bg-primary">
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col justify-center items-center md:items-start py-12 px-12 lg:px-32 xl:px-52 space-y-3'>
                {eyebrow && (
                    <h4 className='text-secondary text-extra-small sm:text-small'>{eyebrow}</h4>
                )}
                {blocks?.map((block, i) => {
                    return(
                        <Link href={block.url} key={i} className='text-white text-small sm:text-large hover:scale-110 duration-100'>
                            <span>&#35;</span>{block.service}
                        </Link>
                    )
                })}
            </div>
            {fastlinkImage && (
                <ImageBox 
                    image={fastlinkImage}
                    alt={fastlinkImageAlt}
                    className='w-full object-cover'
                />
            )}
        </div>
    </div>
  )
}
