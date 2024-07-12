import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import { CustomContainer, Layout } from '@/components/atoms';
import { Button } from '@/components/atoms';
import '@uniswap/widgets/fonts.css';
import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

export const supplyFundsButtonStyle =
  'inline-block text-gray-900 bg-gradient-to-r from-cyan-200 to-blue-200 border border-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-sm min-w-40 py-2.5 font-bold text-center no-underline cursor-pointer transition-colors duration-300 ease-in-out whitespace-nowrap';

export default function Home() {
  return (
    <>
      <Head>
        <title>EEZY</title>
        <meta name="description" content="Revolutionizing cool apps." />
      </Head>

      <Layout>
        <Nav />

        <CustomContainer as="main">
          <div className="w-full">
            <div className="grid grid-cols-12 gap-4">
              <div className="w-full col-span-12">
                <p className="flex justify-center w-full gap-2 pt-4 font-extrabold text-2xl md:text-3xl mb-4"></p>
                <div className="mb-8">
                  {opportunities
                    .sort((a, b) => b.apy - a.apy)
                    .map((opportunity, index) => (
                      <div
                        key={index}
                        className={`flex flex-col md:flex-row justify-between items-start md:items-center w-full p-4 pl-6 md:pl-4 rounded-lg shadow-md border border-gray-200 mb-3 ${
                          opportunity.apy === maxApy ? 'bg-yellow-100' : 'bg-white'
                        }`}
                      >
                        <div className="flex gap-5 mb-4 md:mb-0 items-start">
                          <Image
                            src={`/images/${opportunity.chain}.png`}
                            alt="Ethereum"
                            width={60}
                            height={60}
                          />
                          <p className="text-xl mt-4 font-semibold">{opportunity.name}</p>
                        </div>
                        <div className="flex gap-5 items-start md:items-center">
                          <p className="text-lg font-semibold mt-2">APY: {opportunity.apy}%</p>
                          <button
                            onClick={() => {
                              console.log('Supply funds');
                            }}
                            type="button"
                            className={supplyFundsButtonStyle}
                          >
                            Supply Funds
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </CustomContainer>
        <Footer />
      </Layout>
    </>
  );
}

const opportunities = [
  {
    name: 'Ethereum',
    chain: 'eth',
    apy: 2.5,
  },
  {
    name: 'Arbitrum',
    chain: 'arbitrum',
    apy: 3.5,
  },
  {
    name: 'Polygon',
    chain: 'polygon',
    apy: 4.5,
  },
];

const maxApy = Math.max(...opportunities.map((opportunity) => opportunity.apy));
