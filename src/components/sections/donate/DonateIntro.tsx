/* eslint-disable max-lines-per-function */
import { useMemo } from 'react';

import { Heading, Link } from '@/components/atoms';
import { OpenDoodle } from '@/components/compounds';
import { useHasMounted } from '@/hooks/useHasMounted';
import type { FC, RandomPageImage } from '@/types';
import { styled } from '~/stitches';

const IntroGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  '@tablet-sm': {
    gap: 'calc($$verticalContentPadding / 2)',
    gridTemplateColumns: '1fr auto',
    alignItems: 'center',
  },
  '& > img': {
    gridRow: 1,
    '@tablet-sm': {
      gridRow: 1,
      gridColumn: 2,
    },
  },
});

const IntroTexts = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 'calc($$verticalContentPadding / 4)',
});

interface DonateIntroProps {
  image?: RandomPageImage;
}

export const DonateIntro: FC<DonateIntroProps> = (props) => {
  const { image: img } = props;

  const hasMounted = useHasMounted();

  const imageComponent = useMemo(() => {
    if (!hasMounted || !img) return null;
    return (
      <OpenDoodle
        key={img.key}
        src={`/static/images/donate/${img.key}.png`}
        alt={img.alt || 'Doodle'}
        flip={img.key < 3}
        shadowColor={'$colors$shadow-red'}
        css={{
          maxWidth: 192,
          '@mobile-lg': { maxWidth: 220 },
          '@tablet-sm': { minWidth: 220 },
        }}
      />
    );
  }, [hasMounted, img]);

  return (
    <>
      <IntroGrid>
        <IntroTexts>
          <Heading
            as={'h2'}
            shadow={'orange'}
            gradient={'orange-to-red'}
            css={{ mb: 'calc($$verticalContentPadding / 4)' }}
          >
            Donate
          </Heading>
          <p>
            I strive to build great products and many of them are{' '}
            <Link
              href={'https://github.com/piyushyadav0191'}
              title={"piyush's GitHub Profile"}
            >
              open source
            </Link>
            . But this wouldn’t be possible without the support of my{' '}
            <Link href={'#thanks'} title={'Navigate to sponsors section'}>
              sponsors
            </Link>
            !
          </p>
          <p>
            If you use any of my projects, please consider donating so that I
            can continue maintaining them.
          </p>
        </IntroTexts>
        {imageComponent}
      </IntroGrid>

    </>
  );
};
