/* eslint-disable @next/next/no-img-element */
import ImageBox from 'components/shared/ImageBox'
import Link from 'next/link';
import * as React from 'react'

type Rows = {
    rowsImage: any;
    rowsImageAlt: string;
    tittel: string;
}

export type DualGrid = {
  heading: string;
  body: string;
  rows: Rows[];
}

export type Props = DualGrid

export const DualGrid = ({
    heading,
    body,
    rows
}: Props) => {
  return (
    <div className='bg-secondary'>
        <div className='py-24 px-8 md:px-20 flex flex-col space-y-8'>
            <div className='relative flex justify-start items-start'>
                {heading && (
                    <h2 className='text-medium self-start sm:text-medium text-primary mb-4'><span>&#35;</span>{heading}</h2>
                )}
            </div>
            {body && (
                <div className='max-w-7xl relative justify-start items-start'>
                    <h4 className='text-extra-small sm:text-small text-primary'>{body}</h4>
                </div>
            )}
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-between gap-16 mt-6'>
                {rows?.map((row, i) => {
                    return(
                        <div className='col-span-1 relative h-[300px] sm:h-[600px] overflow-hidden' key={i}>
                            <ImageBox
                                image={row.rowsImage}
                                alt={row.rowsImageAlt}
                                className='w-full h-full object-cover'
                            />
                            <div className='absolute group top-2 overflow-hidden px-2 w-fit'>
                                <div className='bg-secondary flex min-h-fit h-0 px-6 py-4 justify-center rounded-lg'>
                                    <div className='flex justify-center items-center'>
                                        <h5 className='text-red text-sm md:text-base'>{row.tittel}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
      </div>
     
  </div>
  )
}
