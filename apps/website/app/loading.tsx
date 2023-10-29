/* eslint-disable tailwindcss/classnames-order */


export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return     <section className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center">
  <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
    <div className="mx-auto max-w-screen-sm text-center">
      <h1 className="text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
        202
      </h1>
      <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
        Wait This Page Is Loading.
      </p>
      <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
        We are already working to solve the problem
      </p>
    </div>
  </div>
</section>
}
