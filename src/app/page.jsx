import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoCentaurify from '@/images/clients/centaurify/logo-light.svg'
import logoKoe from '@/images/clients/kingdoms-of-ether/logo-light.svg'
import logoRequest from '@/images/clients/request-finance/logo-light.svg'
import logoMoralis from '@/images/clients/moralis/logo-light.svg'
import logoIagon from '@/images/clients/iagon/logo-light.svg'
import logoAndTextHealthB from '../images/clients/healthb/negative/logo_and_text_HealthB.svg'
import logoCentaurifyDark from '@/images/clients/centaurify/logo-dark.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'
import dockLogoNegative from '@/images/clients/dock/negative/text_negative(white).svg'
import logoTrustd from '@/images/clients/trustd/trustd.svg'

const clients = [
  ['Trustd', logoTrustd],
  ['Moralis Academy', logoMoralis],
  ['Request Finance', logoRequest],
  ['Kingdoms of Ether', logoKoe],
  ['Centaurify', logoCentaurify],
  ['Dock', dockLogoNegative],
  ['Iagon', logoIagon],
  ['HealthB', logoAndTextHealthB],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-base font-semibold tracking-wider text-white sm:text-left">
            We’ve had the pleasure of collaborating with numerous talented individuals on various projects
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} optimized="true" autoFocus/>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Blockchain Innovations, Shaping Tomorrow"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We harness blockchain to craft Web3, DeFi, and Privacy Solutions, transforming our clients´ visions. 
          Explore our case studies below to see our impactful collaborations.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime={caseStudy.year} className="font-semibold">
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Unlocking Web3 Opportunities with Expertise in Blockchain."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Whether you´re identifying, exploring, or responding to new Web3 challenges, our expertise ensures a wealth of innovative solutions.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Blockchain Development">
              Our expertise lies in crafting top-tier solutions on EVM-compatible chains, 
              including Ethereum, Binance Smart Chain, Polygon, Avalanche, and Fantom. 
              We leverage this technology to design secure, efficient, and transparent systems, 
              innovating your business operations with enhanced privacy and decentralization.
            </ListItem>

            <ListItem title="Web3 dApps Development">
              Harnessing the latest in decentralized application frameworks, our team delivers scalable, 
              user-centric dApps that flawlessly integrate with blockchain networks and smart contracts.
            </ListItem>

            <ListItem title="Smart Contract Development">
              Pioneering in the realm of smart contracts, we design self-executing agreements coded for utmost security, 
              eliminating intermediaries and ensuring transaction precision.
            </ListItem>

            <ListItem title="Supporting Multiple Industries">
              At VBS, we extend our blockchain solutions to a multitude of
              industries including finance, insurance, supply chain, and
              healthcare. Our versatile and innovative approach allows us to
              tailor our services to meet the unique needs and challenges of
              each industry, driving digital transformation and enhancing
              operational efficiency.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'Viken Blockchain Solutions is Scandinavia’s leading blockchain development company.',
}

export default async function Home() {
  let caseStudies = (await loadMDXMetadata('work')).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Scandinavia’s leading blockchain development company.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            At Viken Blockchain Solutions, we’re pioneering the future of
            blockchain technology. Our team is at the forefront of innovation,
            delivering cutting-edge solutions to our clients.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Centaurify', logo: logoCentaurifyDark }}
      >
        The team at VBS consistently exceeds our expectations. Their expertise
        in blockchain technology has been instrumental in the success of our
        projects.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
