import aiorbitTexture from 'assets/aiorbit-nft.png';
import xxcorpTexture from 'assets/xxcorp-project.png';
import gptProtocolTexture from 'assets/gpt-protocol.png';
import onChainMonkeyTexture from 'assets/onchain-monkey.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import aiorbitSvg from 'assets/aiorbit-svg.svg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Blockchain', 'AI', 'Full Stack', 'Leader', 'Innovator'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

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
        title="Fahmid Uddin - AI & Blockchain Specialist"
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
        title="AIORBIT NFT Collection"
        description="Development of dynamic AI-enhanced NFTs in Solidity, blending blockchain and AI technologies."
        buttonText="View project"
        buttonLink="/projects/aiorbit"
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
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="XXCORP INC Innovations"
        description="Founding and steering a tech company specializing in web and mobile solutions, and its successful integration into GPT Protocol."
        buttonText="View project"
        buttonLink="/projects/xxcorp"
        model={{
          type: 'laptop',
          alt: 'XXCORP project showcase',
          textures: [{ srcSet: [xxcorpTexture], placeholder: sprTexturePlaceholder }],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="GPT Protocol Development"
        description="Leading the development of decentralized AI blockchain technologies at GPT Protocol."
        buttonText="View project"
        buttonLink="/projects/gpt-protocol"
        model={{
          type: 'laptop',
          alt: 'GPT Protocol project',
          textures: [
            { srcSet: [gptProtocolTexture], placeholder: sprTexturePlaceholder },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Metagood & OnChainMonkey"
        description="Pioneering the fully on-chain NFT system for OnChainMonkey, enhancing the blockchain ecosystem."
        buttonText="View project"
        buttonLink="/projects/onchainmonkey"
        model={{
          type: 'laptop',
          alt: 'OnChainMonkey project',
          textures: [
            { srcSet: [onChainMonkeyTexture], placeholder: sprTexturePlaceholder },
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
