/* eslint-disable @next/next/no-img-element */
import ImageBox from 'components/shared/ImageBox'
import Link from 'next/link';
import * as React from 'react'

type textLink = {
    text: string;
    url: string;
}

type Module = {
    heading: string;
    body: string;
    image: any;
    imageAlt: string;
    imageOnRight: boolean;
    textLink: textLink[];
}

export type MediaModul = {
    heading: string;
    body: string;
    module: Module[];
}

export type Props = MediaModul

export const MediaModul = ({
    heading,
    body,
    module,
    textLink
}: Props) => {
  return (
    <div className='bg-primary'>
        <div className='py-24 px-8 md:px-20 flex flex-col space-y-8'>
            <div className='relative flex justify-start items-start'>
                {heading && (
                    <h2 className='text-medium self-start sm:text-medium text-secondary mb-4'>{heading}</h2>
                )}
            </div>
            {body && (
                <div className='max-w-7xl relative justify-start items-start'>
                    <h4 className='text-extra-small sm:text-small text-secondary'>{body}</h4>
                </div>
            )}
           <div>
            {module?.map((modul, i) => {
                return(
                    <div className='bg-secondary grid grid-cols-1 md:grid-cols-2' key={i}>
                        <div className={`relative mx-auto h-[300px] md:h-[500px] w-full md:mt-0 ${modul.imageOnRight ? "order-last" : ""}`}>
                            <ImageBox 
                                image={modul.image}
                                alt={modul.imageAlt}
                                className='absolute inset-0 h-full w-full object-cover'
                            />
                        </div>
                        <div className='flex flex-col justify-center mx-auto px-20 py-10 text-center md:text-left'>
                            {modul.heading && (
                                <h2 className='text-small xl:text-large mb-4 text-black'>
                                    {modul.heading}
                                </h2>
                            )}
                            {modul.textLink?.map((cta, i) => {
                                return(
                                    <Link href={cta.url} className='text-black hover:text-red duration-100 text-extra-small md:text-small' key={i}>
                                        {cta.text}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
           </div>
        </div>
    </div>
  )
}
