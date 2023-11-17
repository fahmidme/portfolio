import aiorbitTexture from 'assets/aiorbit-nft.png';
import xxcorpTexture from 'assets/xxcorp-project.png';
import themecraftTexture from 'assets/themecraft-project.png';
import gptProtocolTexture from 'assets/gpt-protocol.png';
import onChainMonkeyTexture from 'assets/onchain-monkey.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import aiorbitSvg from 'assets/aiorbit-svg.svg';
import aiboltSvg from 'assets/aibolt-svg.svg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = [
  'Blockchain Engineer',
  'AI Product Creator',
  'Full Stack Developer',
  'Project Manager',
];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Creative Coder"
        description="Portfolio of Fahmid Uddin, a Full Stack Engineer specializing in AI and Blockchain technologies. Explore innovative projects and technical solutions."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="AIORBIT NFTs"
        description="Development of dynamic AI-enhanced NFTs in Solidity, blending blockchain and AI technologies."
        buttonText="View website"
        buttonLink="https://aiorbit.io/"
        model={{
          type: 'svg',
          alt: 'AIORBIT #7',
          SvgComponent: aiorbitSvg, // Pass the SVG component
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectOne.current)}
        index={2}
        title="AIBOLT Bot & NFT Ecosystem"
        description={`The AIBOLT initiative represents an evolutionary leap in NFT ecosystems, boasting a vibrant array of animated SVG solar systems that interact with on-chain Events.\n\nEach AIBOLT is not just a digital asset but part of a living narrative, where the AIBOLT Bot enhances user engagement through AI-driven storytelling and personalized experiences.\n\nThese NFTs evolve over time, offering a unique journey through their ever-changing universe, where stories and visual art are tokenized, encapsulating the convergence of blockchain’s immutability with AI’s imaginative prowess.`}
        buttonText="Read article"
        buttonLink="https://medium.com/@realhellofahmid/dreaming-in-code-the-journey-from-vivid-dreams-to-aiorbit-b74ae5d9f496"
        model={{
          type: 'svg',
          alt: 'AIORBIT #7',
          SvgComponent: aiboltSvg, // Pass the SVG component
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectTwo.current)}
        index={3}
        title="AI-Powered Web Themes: ThemeCraft"
        description="ThemeCraft, an open-source innovative web application, harnesses OpenAI's capabilities to transform natural language descriptions into customized web themes. It offers dynamic CSS generation, interactive editing, and the ability to export the final product, facilitating a unique and intuitive design experience."
        buttonText="View project"
        buttonLink="https://github.com/fahmidme/themecraft"
        model={{
          type: 'laptop',
          alt: 'ThemeCraft project showcase',
          textures: [
            {
              srcSet: [themecraftTexture], // Replace with a screenshot of ThemeCraft if available
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />

      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
