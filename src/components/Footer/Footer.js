import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
  <FooterWrapper>
    <LinkList>
    <LinkColumn>
    <LinkTitle>Call</LinkTitle>
    <LinkItem href="tel:08063436302">0806-343-6302</LinkItem>
    </LinkColumn>

    <LinkColumn>
    <LinkTitle>Email</LinkTitle>
    <LinkItem href="mailto:tobibanks@ymail.com">tobiodogwu@gmail.com</LinkItem>
    </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Solving problems, one project at a time</Slogan>
      </CompanyContainer>
  <SocialContainer>
      <SocialIcons href="https://github.com/tobibanks">
  <AiFillGithub size="3rem"/>
  </SocialIcons>
  <SocialIcons href="https://instagram.com/tobibanks">
  <AiFillInstagram size="3rem"/>
  </SocialIcons>

  <SocialIcons href="https://www.linkedin.com/in/tobiodogwu/">
  <AiFillLinkedin size="3rem"/>
  </SocialIcons>
  </SocialContainer>
    </SocialIconsContainer>
   
  </FooterWrapper>
  );
};

export default Footer;
