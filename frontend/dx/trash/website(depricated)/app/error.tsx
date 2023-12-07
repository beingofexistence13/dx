/* eslint-disable tailwindcss/classnames-order */

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
    <section className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
            500
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
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
