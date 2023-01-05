import type { NextPage } from 'next';

import { Layout, Seo } from '@/components/molecules';
import { FourOhFour as FourOhFourSection } from '@/sections';

const GitHubRelease: NextPage = () => {
  return (
    <Layout>
      <Seo
        title={'Page not found – Piyush Yadav'}
        description={
          "The page you're looking for doesn't exist or has been moved."
        }
        exactUrl={'/404'}
        keywords={['404', 'not found', 'page not found']}
      />
      <FourOhFourSection />
    </Layout>
  );
};

export default GitHubRelease;
