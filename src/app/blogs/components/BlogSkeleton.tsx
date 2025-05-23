import { Skeleton } from '@radix-ui/themes'
import React from 'react'

const BlogSkeleton = () => {
    return (
        <div className='w-full px-64 max-[1025px]:px-0 max-[1285px]:px-0 max-sm:px-2 flex flex-col gap-10 items-center mt-4 pb-8'>
            {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex items-center justify-center space-x-4 w-[50vw] max-sm:w-full max-sm:px-4 mt-10">
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[50vw] max-sm:w-[90vw]" />
                        <Skeleton className="h-12 w-[50vw] max-sm:w-[90vw]" />
                        <div className="flex gap-4">
                            <Skeleton className="h-4 w-[100px]" />
                            <Skeleton className="h-4 w-[100px]" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BlogSkeleton