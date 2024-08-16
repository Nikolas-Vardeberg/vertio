import ImageBox from 'components/shared/ImageBox';
import * as React from 'react'
import CustomCursor from "../shared/CustomCursor"
import FlareCursor from 'components/shared/FlareCustom';

export type Video = {
    heading: string;
    body: string;
    videoImage: any;
    videoImageAlt: string;
}

export type Props = Video

export const Video = ({ heading, body, videoImage, videoImageAlt }: Props) => {
  return (
    <div className='bg-primary'>
        <div className='py-24 px-8 md:px-20 flex flex-col space-y-8'>
            <div className='relative flex justify-start items-start'>
                {heading && (
                    <h2 className='text-medium self-start sm:text-medium text-secondary mb-4'><span>&#35;</span>{heading}</h2>
                )}
            </div>
            {body && (
                <div className='max-w-7xl relative justify-start items-start'>
                    <h4 className='text-extra-small sm:text-small text-secondary'>{body}</h4>
                </div>
            )}
            {videoImage && (
                <div className='h-[300px] md:h-[600px] relative flex justify-center items-center'>
                    <ImageBox 
                        image={videoImage}
                        alt={videoImageAlt}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
        </div>
    </div>
  )
}
