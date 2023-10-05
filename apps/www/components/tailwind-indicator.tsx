/* eslint-disable tailwindcss/classnames-order */

export function TailwindIndicator() {
  if (process.env.NODE_ENV === "production") return null

  return (
    <div className="xs:bottom-20 fixed bottom-16 left-5 z-[100000000000000000000] flex h-6 w-6 items-center justify-center rounded-full border p-4 font-mono text-xs sm:bottom-2">
      <div className="2xs:block hidden">2xs</div>
      <div className="2xs:hidden block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  )
}
