import type { NextPage } from 'next';

import { Layout, Seo } from '@/components/molecules';
import { Dashboard as DashboardSection } from '@/sections';

const UnderConstruction: NextPage = () => {
  return (
    <Layout>
      <Seo
        title={'Dashboard – Piyush Yadav '}
        description={
          'Get to know the latest stats and my current top listened tracks on Spotify'
        }
        exactUrl={'/dashboard'}
        keywords={[
          'dashboard',
          'stats',
          'statistics',
          'music',
          'top track',
          'spotify',
        ]}
      />
      <DashboardSection />
    </Layout>
  );
};

export default UnderConstruction;
