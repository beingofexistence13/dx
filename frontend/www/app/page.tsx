import { Image } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <section className="info h-[150vh] w-full bg-white relative">
        <div className="blurry_gradient h-[450px] w-[450px] rounded-full absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] z-[0]"></div>
        <div className="glass h-full w-full"></div>

      </section>
      <section className="more_info h-screen w-full bg-red-500">
        <Image
          width={300}
          height={200}
          alt="NextUI hero Image with delay"
          src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
      </section>
    </>
  )
}
