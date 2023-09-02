"use client";

import { AdBanner } from "../components/AdBanner";
import Layout from "../components/Layout";
import Chain from "../components/chain";
import { generateChainData } from "../utils/fetch";
import Head from "next/head";
// import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from 'next/navigation'
import * as React from "react";





function Home() {
  interface Chain {
    chain: any;
    chainId: any;
    nativeCurrency: any;
    name: string;
    title: string;
    network: string;
    // ...
  }
  const [chains, setChains] = React.useState<Chain[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      const sortedChains = await generateChainData();
      setChains(sortedChains);
    }
    fetchData();
  }, []);
  // const router = useRouter();
  // const { testnets, testnet, search } = router.query;
  const pathname = usePathname()
  const searchParams = useSearchParams();
  const testnets = searchParams ? searchParams.get("testnets") : "";
  const testnet = searchParams ? searchParams.get("testnet") : "";
  const search = searchParams ? searchParams.get("search") : "";

  const includeTestnets =
    (typeof testnets === "string" && testnets === "true") || (typeof testnet === "string" && testnet === "true");

  const sortedChains = !includeTestnets
    ? chains.filter((item) => {
        const testnet =
          item.name?.toLowerCase().includes("test") ||
          item.title?.toLowerCase().includes("test") ||
          item.network?.toLowerCase().includes("test");
        const devnet =
          item.name?.toLowerCase().includes("devnet") ||
          item.title?.toLowerCase().includes("devnet") ||
          item.network?.toLowerCase().includes("devnet");
        return !testnet && !devnet;
      })
    : chains;

  const filteredChains =
    !search || typeof search !== "string" || search === ""
      ? sortedChains
      : sortedChains.filter((chain) => {
          //filter
          return (
            chain.chain.toLowerCase().includes(search.toLowerCase()) ||
            chain.chainId.toString().toLowerCase().includes(search.toLowerCase()) ||
            chain.name.toLowerCase().includes(search.toLowerCase()) ||
            (chain.nativeCurrency ? chain.nativeCurrency.symbol : "").toLowerCase().includes(search.toLowerCase())
          );
        });

  return (
    <>
      <Head>
        <title>Chainlist</title>
        <meta
          name="description"
          content="Chainlist is a list of RPCs for EVM(Ethereum Virtual Machine) networks. Use the information to connect your wallets and Web3 middleware providers to the appropriate Chain ID and Network ID. Find the best RPC for both Mainnet and Testnet to connect to the correct chain"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout lang={undefined}>
        <React.Suspense fallback={<div className="h-screen"></div>}>
          <div className="dark:text-[#B3B3B3] text-black grid gap-5 grid-cols-1 place-content-between pb-4 sm:pb-10 sm:grid-cols-[repeat(auto-fit,_calc(50%_-_15px))] 3xl:grid-cols-[repeat(auto-fit,_calc(33%_-_20px))] isolate grid-flow-dense">
            {filteredChains.map((chain, idx) => {
              if (idx === 2) {
                return (
                  <React.Fragment key={JSON.stringify(chain) + "en" + "with-banner"}>
                    <AdBanner />
                    <Chain chain={chain} lang="en" buttonOnly={undefined} />
                  </React.Fragment>
                );
              }

              return <Chain chain={chain} key={JSON.stringify(chain) + "en"} lang="en" buttonOnly={undefined} />;
            })}
          </div>
        </React.Suspense>
      </Layout>
    </>
  );
}

export default Home;
