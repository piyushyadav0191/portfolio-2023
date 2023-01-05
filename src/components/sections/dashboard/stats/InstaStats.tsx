import { LinkStatCard } from '@/components/compounds';
import { useImmutableRequest } from '@/hooks/useRequest';
import { mdiInstagram } from '@/icons';
import type { FC } from '@/types';

export const InstaStats: FC = () => {
  const { data, loading } = useImmutableRequest<{ followers?: number }>(
    '/api/insta-followers',
  );
  return (
    <>
      <LinkStatCard
        title={'Instagram'}
        href={'https://www.instagram.com/abcdefghijklmno_qrstwx_z/'}
        text={'followers on Instagram'}
        value={`${data?.followers || '?'}`}
        iconPath={mdiInstagram}
        color={'#c13584'}
        loading={loading}
      />
    </>
  );
};
