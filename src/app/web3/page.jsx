import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageNFTinsight from '@/images/products/nft-insight.png'
import alloraImage from '@/images/products/allora_hero.png'
import imageSpread from '@/images/products/spread-dapp.png'
import imageDex from '@/images/products/coming-soon.png'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balancing Innovation with Practicality in Blockchain Solutions."
        invert
      >
        <p>
          We are a team of blockchain enthusiasts who share the same core values
          and vision for a decentralized future.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Innovation" invert>
            Our team is constantly exploring and implementing new blockchain and
            Web3 solutions to stay at the forefront of the industry.
          </GridListItem>
          <GridListItem title="Trust" invert>
            We value transparency and honesty in our work, ensuring that our
            clients are always informed and involved in the decision-making
            process.
          </GridListItem>
          <GridListItem title="Commitment" invert>
            We are dedicated to our client’s success and strive to deliver
            solutions that exceed their expectations.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const library = [
  {
    title: 'Web3 Business Tool',
    products: [
      {
        name: 'Allora',
        description: 'Allora is a comprehensive business management tool that automates time tracking, project management, invoicing, and accounting for freelancers, consultants, startups, and Web3 businesses.',
        image: { src: alloraImage },
        link: 'https://allora.finance'
      },
    ],
  },
  {
    title: 'Decentralized Applications',
    products: [
      {
        name: 'Spread Dapp - NFT Edition',
        description: 'Introducing Spread Dapp - NFT Edition: a game-changing platform for asset transfers on the blockchain. Easily send native, ERC20, and uniquely, ERC721 tokens to multiple addresses in one go. Now with batch NFT transfers.',
        image: { src: imageSpread },
        link: 'https://spreadnftedition.vercel.app/'
      },
      {
        name: 'Coming Soon: Decentralized Exchange',
        description: 'A state-of-the-art decentralized exchange platform offering secure, efficient, and user-friendly trading experiences.',
        image: { src: imageDex },
        link: '#dex'
      },
    ],
  },
]

function Library() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {library.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.products.map((product) => (
                    <li key={product.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100 mb-4">
                          <Link href={product.link}>
                            <Image
                              alt="WEB3"
                              {...product.image}
                              className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                            />
                          </Link>
                        </div>
                        <div>
                          <p className="font-display text-base/6 font-semibold tracking-wide text-neutral-950">
                            {product.name}
                          </p>
                          <p className="mt-2 text-sm text-neutral-700">
                            {product.description}
                          </p>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}


export const metadata = {
  title: 'Web3 Library',
  description: 'Explore our comprehensive Web3 Library, designed to empower users with decentralized solutions and blockchain integration. Dive into the future of the web with VBS.'
}

export default async function Web3() {
  let blogArticles = (await loadMDXMetadata('blog')).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="Our Web3 Library" title="Pioneering Decentralized Applications">
        <p>
          Explore the frontier of decentralized applications with VBS. From NFT marketplaces to DeFi platforms, we´re shaping the future of online interactions.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            VBS was conceived with an ambition to unlock the vast possibilities of blockchain technology. Our suite of dApps, including the renowned NFTInsight, stands as a testament to our unwavering commitment to innovation.
          </p>
          <p>
            At VBS, we´re not just technologists; we´re community builders. With a foundation of transparency, trust, and collaboration, we ensure our clients remain at the epicenter of our groundbreaking solutions.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="+4" label="Deployed dApps" />
          <StatListItem value="100k+" label="Active Users Across dApps" />
          <StatListItem value="$5M+" label="Total Value Locked (TVL)" />
        </StatList>
      </Container>

      <Culture />

      <Library />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Latest Articles"
        intro="Dive into our latest projects and insights, where we unravel the complexities of Web3, DeFi, and the ever-evolving blockchain landscape. Stay ahead with VBS."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
