import type { GetStaticProps, NextPage } from 'next';

import { Layout, Seo } from '@/components/molecules';
import { useRandomImage } from '@/hooks/useRandomImage';
import { Contact as ContactSection } from '@/sections';
import type { RandomPageImage } from '@/types';

const Contact: NextPage<{ images: Array<RandomPageImage> }> = (props) => {
  const image = useRandomImage(props.images);
  return (
    <Layout>
      <Seo
        title={'Contact – Piyush Yadav'}
        description={
          'Get in touch with Piyush Yadav. Send him a message or email'
        }
        exactUrl={'/contact'}
        keywords={[
          'contact',
          'message',
          'form',
          'contact form',
          'send message',
        ]}
      />
      <ContactSection image={image} />
    </Layout>
  );
};

export default Contact;

const imagesAlts: Array<string> = [
  'Person taking a selfie with a t-shirt that says hi',
  'Person laying on the floor and checking their phone',
  'Person reading a book',
  'Person walking like a zombie',
];

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      images: imagesAlts.map((alt, key) => ({
        key,
        alt,
        width: 384,
        height: 384,
      })),
    },
  };
};
