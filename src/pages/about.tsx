import type { GetStaticProps, NextPage } from 'next';

import imagesBlurData from '@/blur/about';
import { Layout, Seo } from '@/components/molecules';
import { useRandomImage } from '@/hooks/useRandomImage';
import { About as AboutSection } from '@/sections';
import type { ImageBlurDataObject, RandomPageImage } from '@/types';

const About: NextPage<{ images: Array<RandomPageImage> }> = (props) => {
  const image = useRandomImage(props.images);
  return (
    <Layout>
      <Seo
        title={'About – Piyush Yadav'}
        description={'Learn a bit about me, my career and more'}
        exactUrl={'/about'}
        keywords={['bio', 'biography', 'information', 'about']}
      />
      <AboutSection image={image} />
    </Layout>
  );
};

export default About;

const imagesAlts: Array<string> = [
  "Diwali – Oct '2022",
  "Clicked by my Friend – July '22",
  "Diwali  – Nov '21",
  "Diwali  – Nov '20",
  "At college with my friends  – jun '21",
  "Birthday of Mine – Sep '08",
  "At college with my friends  – jun '21",
  "On the Way to Stadium – Mar '20",
  "Cricket was fun at that Time – April '19",
];

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      images: Object.keys(imagesBlurData as ImageBlurDataObject).map((key) => ({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ...(imagesBlurData[key] || {}),
        alt: imagesAlts[+key],
      })),
    },
  };
};
