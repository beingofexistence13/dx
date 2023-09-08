"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    // <div>
    //   <h2>Something went wrong!!!</h2>
    //   <button
    //   className='px-3 py-2 ronded-lg border hover:bg-[--code]'
    //     onClick={
    //       // Attempt to recover by trying to re-render the segment
    //       () => reset()
    //     }
    //   >
    //     Try again
    //   </button>
    // </div>
    <section className="border">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            500
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Internal Server Error.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            We are already working to solve the problem
          </p>
        </div>
      </div>
    </section>
  )
}
