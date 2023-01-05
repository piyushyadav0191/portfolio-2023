import Icon from '@mdi/react';

import { Heading, LinkButton } from '@/components/atoms';
import { mdiHeartOutline } from '@/icons';
import {
  styled,
  darkTheme as theme,
  type StitchesCSS as CSS,
} from '~/stitches';

const ButtonsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 'calc($$verticalContentPadding / 4)',
});

const ButtonsGroup = styled(ButtonsContainer, {
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
});

const ghSponsorsButtonStyles: CSS = {
  color: theme.colors['text-primary']?.value,
  backgroundColor: '#c94091',
  hocus: {
    color: theme.colors['text-primary']?.value,
    backgroundColor: '#b43982',
  },
};

const GitHubSponsorsButton = styled(LinkButton, {
  ...ghSponsorsButtonStyles,
  dark: ghSponsorsButtonStyles,
});



export const DonateButtons = () => {
  return (
    <ButtonsContainer>
      <Heading as={'h4'} css={{ fontSize: '$md' }}>
        Donate using...
      </Heading>
      <ButtonsGroup>
        <GitHubSponsorsButton
          href={'https://github.com/sponsors/piyushyadav0191'}
          title={"Piyush's GitHub Sponsors Page"}
        >
          <Icon path={mdiHeartOutline} size={0.9} />
          GitHub Sponsors
        </GitHubSponsorsButton>
      </ButtonsGroup>
      <small>
        <sup>*</sup> Both options allow custom amounts and one-time or monthly
        donations
      </small>
    </ButtonsContainer>
  );
};
