import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
 <LeftSection>
 <SectionTitle main center>
 Welcome to my personal Portfolio
 </SectionTitle>
 <SectionText>
 Just an avenue to keep everyone up to speed with my career.
 </SectionText>
 <Button onclick={()=> window.location = 'https://google.com'}>Learn More</Button>
 </LeftSection>
 </Section>
);

export default Hero;