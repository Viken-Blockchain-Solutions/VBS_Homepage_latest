import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageBjornTollefsen from '@/images/team/bjørn-tollefsen.jpeg'
import imageAlexanderJohannessen from '@/images/team/alexander-johannessen.jpeg'
import imageKennethZambrano from '@/images/team/kenneth-zambrano.jpeg'
import imageChristianCole from '@/images/team/christian-cole.jpeg'
import imageCarlosZambrano from '@/images/team/carlos-zambrano.jpeg'
import imageAndresAedo from '@/images/team/andres-aedo.jpeg'
import imageIvoGarofalo from '@/images/team/ivo-garofalo.jpeg'
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

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Ivo Garofalo',
        role: 'Founder / CEO',
        image: { src: imageIvoGarofalo },
      },
      {
        name: 'Christian Cole',
        role: 'CTO',
        image: { src: imageChristianCole },
      },
      {
        name: 'Alexander Johannessen',
        role: 'CMO',
        image: { src: imageAlexanderJohannessen },
      },
      {
        name: 'Bjørn Tollefsen',
        role: 'Partner & Business Relations',
        image: { src: imageBjornTollefsen },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Kenneth Zambrano',
        role: 'Senior Front-end Developer',
        image: { src: imageKennethZambrano },
      },
      {
        name: 'Carlos Zambrano',
        role: 'Web3, Front-end Developer',
        image: { src: imageCarlosZambrano },
      },
      {
        name: 'Andrés Aedo-Huenulao',
        role: 'Content Specialist',
        image: { src: imageAndresAedo },
      },
      {
        name: 'Ivo Garofalo',
        role: 'DEFI Engineer, Smart Contract Developer',
        image: { src: imageIvoGarofalo },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
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
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
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
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadMDXMetadata('blog')).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          Meet the dedicated minds behind our cutting-edge blockchain and Web3
          solutions - a team of passionate innovators dedicated to driving
          real-world results for your business.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            VBS was started by a group of friends who noticed the potential of
            blockchain technology and its applications in various industries.
            Since the beginning, we have been committed to driving innovation
            and delivering value to our clients.
          </p>
          <p>
            At VBS, we’re more than just colleagues — we’re a team. We value
            transparency, trust, and commitment to our work. We believe in the
            power of collaboration and put our clients at the center of
            everything we do.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Successful Projects" />
          <StatListItem value="52" label="Satisfied Clients" />
          <StatListItem value="$25M" label="Transactions Processed" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Immerse yourself in our comprehensive collection of articles, where we delve into the dynamic world of DeFi, Web3, Blockchain development, NFTs, and Cryptocurrencies. "
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
