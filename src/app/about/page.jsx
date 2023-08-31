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
        title="Where Innovation Meets Reliability"
        invert
      >
        <p>
          Unveil the ensemble of handpicked experts that make up VBS. We´re not
          just a team; we´re a closely-knit family of enthusiasts, each
          contributing a unique skill set to create groundbreaking blockchain
          and Web3 solutions.
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
      <PageIntro
        eyebrow="About us"
        title="Where Dedication Meets Innovation"
      >
        <p>
          We are a team of blockchain enthusiasts who share the same core values
          and vision for a decentralized future.
        </p>

        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            VBS is the brainchild of a cadre of long-time friends and
            collaborators who saw the untapped potential of blockchain
            technology. Our journey began with a shared vision, and it´s that
            camaraderie and understanding of each other´s strengths that set us
            apart.
          </p>
          <p>
            We´re more than just a group of experts; we´re a harmonious unit.
            Each member of VBS brings something invaluable to the table, and
            it´s this synergy that allows us to deliver solutions that are not
            just effective but revolutionary. Our commitment to transparency,
            trust, and unparalleled quality is what makes us a beacon in the
            blockchain and Web3 landscape.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="5+" label="Years in Business" />
          <StatListItem value="98%" label="Client Retention Rate" />
          <StatListItem value="24/7" label="Customer Support" />
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
