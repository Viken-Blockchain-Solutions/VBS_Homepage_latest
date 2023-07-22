import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          The discovery phase is all about understanding our clients' needs,
          goals, and the unique challenges they face in their industry. We start
          by conducting in-depth questionnaires to gather as much information as
          possible about our clients' business operations, their target
          audience, and their expectations from the blockchain and Web3
          solutions.
        </p>
        <p>
          We then conduct feasibility studies to assess the viability of
          implementing blockchain and Web3 solutions in their operations. This
          involves analyzing their existing systems, identifying potential risks
          and challenges, and determining the resources required for the
          implementation.
        </p>
        <p>
          Our team of blockchain experts also performs a comprehensive
          blockchain audit, evaluating our clients' current use of blockchain
          technology, if any, and identifying areas where improvements can be
          made.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Blockchain Strategy Formulation</TagListItem>
        <TagListItem>Feasibility and Use Case Analysis</TagListItem>
        <TagListItem>Blockchain and DeFi Consulting</TagListItem>
        <TagListItem>Regulatory Compliance Analysis</TagListItem>
        <TagListItem>Blockchain Technology Education and Training</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Once we have a clear understanding of our clients' needs and goals, we
          move on to the build phase. This involves developing a comprehensive
          roadmap that outlines the project's objectives, key milestones, and
          the blockchain and Web3 solutions we will implement.
        </p>
        <p>
          Our team of blockchain developers, Web3 experts, and DeFi engineers
          then begin the process of building the solutions. This includes
          developing custom blockchain networks tailored to our clients' needs,
          creating secure and efficient smart contracts for various
          applications, building decentralized applications (dApps) that
          interact seamlessly with blockchain networks and smart contracts, and
          implementing decentralized finance (DeFi) protocols to enable
          peer-to-peer financial transactions.
        </p>
        <p>
          We ensure that our solutions are built using the latest technologies
          and best practices in the blockchain and Web3 space. We also ensure
          that our solutions are scalable, secure, and efficient, capable of
          handling high volumes of transactions and data.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Studio were so regular with their progress updates we almost began to
        think they were automated!
      </Blockquote>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Custom Blockchain Development</TagListItem>
        <TagListItem>Smart Contract Design and Auditing</TagListItem>
        <TagListItem>Decentralized Application (DApp) Development</TagListItem>
        <TagListItem>Blockchain Protocol Development</TagListItem>
        <TagListItem>
          Integration of Blockchain with Existing Systems
        </TagListItem>
        <TagListItem>Blockchain Network Optimization</TagListItem>
      </TagList>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          The delivery phase involves testing, integrating, and launching the
          blockchain and Web3 solutions. We start by conducting rigorous testing
          to ensure the functionality, security, and performance of the
          solutions. This includes unit testing, integration testing, and stress
          testing.
        </p>
        <p>
          Once the solutions have passed all tests, we provide support in
          integrating them into our clients' existing systems. We ensure that
          the integration process is smooth and seamless, with minimal
          disruption to our clients' operations.
        </p>
        <p>
          After the successful integration of the solutions, we provide
          comprehensive training to our clients on how to use and manage these
          solutions. This includes training on how to conduct transactions,
          manage smart contracts, and use dApps.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          Rigorous testing to ensure functionality, security, and performance.
        </ListItem>
        <ListItem title="Integration">
          Support in integrating the solutions into the clients' existing
          systems.
        </ListItem>
        <ListItem title="Training">
          Comprehensive training on how to use and manage the solutions.
        </ListItem>
      </List>
      <br />
      <TagList className="mt-4">
        <TagListItem>Blockchain Deployment and Scaling</TagListItem>
        <TagListItem>Smart Contract Deployment and Management</TagListItem>
        <TagListItem>Blockchain Security Services</TagListItem>
        <TagListItem>Blockchain Performance Monitoring</TagListItem>
        <TagListItem>Blockchain-as-a-Service (BaaS)</TagListItem>
        <TagListItem>Post-deployment Support and Maintenance</TagListItem>
      </TagList>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          At VBS, we are committed to delivering cutting-edge blockchain and
          Web3 solutions that meet our clients' needs and exceed their
          expectations. We strive to stay at the forefront of emerging trends
          and technologies in the blockchain and Web3 space, ensuring that our
          solutions are innovative and future-proof.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            We start by understanding our clients' needs and goals, and then
            develop solutions that align with their vision and objectives.
          </GridListItem>
          <GridListItem title="Efficient">
            We ensure that our solutions are scalable, secure, and efficient,
            capable of handling high volumes of transactions and data.
          </GridListItem>
          <GridListItem title="Adaptable">
            We adapt our solutions to meet the unique needs of our clients,
            ensuring that they are tailored to their business operations and
            goals.
          </GridListItem>
          <GridListItem title="Honest">
            We maintain transparency in all our processes, keeping our clients
            informed at every stage of the project.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients, providing them
            with ongoing support and maintenance services.
          </GridListItem>
          <GridListItem title="Innovative">
            We strive to stay at the forefront of emerging trends and
            technologies in the blockchain and Web3 space, ensuring that our
            solutions are innovative and future-proof.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          At Viken Blockchain Solutions (VBS), we follow a meticulous process to
          deliver top-notch blockchain and Web3 solutions to our clients. We
          work closely with our clients at every stage of the process, ensuring
          that our solutions align with their vision and objectives.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
