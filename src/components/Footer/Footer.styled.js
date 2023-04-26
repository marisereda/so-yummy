import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import spinachMob from '../../images/background/spinach_bottom_right_mob_1x.png';
import spinachTab from '../../images/background/spinach_bottom_right_tab_1x.png';
import spinachDesk from '../../images/background/spinach_bottom_right_desk_1x.png';
import upSpinachMob from '../../images/background/spinach_bottom_left_mob_1x.png';
import upSpinachTab from '../../images/background/spinach_bottom_left_tab_1x.png';
import upSpinachDesk from '../../images/background/spinach_bottom_left_desk_1x.png';

export const FooterStyle = styled.footer`
  font-family: ${p => p.theme.fonts.primary};
  position: relative;
  background-color: ${p => p.theme.colors.footerBG};
`;
export const Spinach = styled.div`
  position: absolute;
  z-index: -1;
  bottom: 364px;
  left: 0px;
  width: 256px;
  height: 392px;
  background-image: url(${upSpinachMob});
  @media screen and (min-width: 768px) {
    bottom: 266px;

    width: 423px;
    height: 646px;
    background-image: url(${upSpinachTab});
  }
  @media screen and (min-width: 1440px) {
    bottom: 208px;

    width: 558px;
    height: 852px;
    background-image: url(${upSpinachDesk});
  }
`;
export const FoterBox = styled.div`
  margin-left: auto;
  margin-right: auto;

  color: ${p => p.theme.colors.primaryLightTextNoChange};
  padding-top: 28px;
  padding-bottom: 20px;
  @media screen and (min-width: 768px) {
    padding: 50px 94px 23px 32px;
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 64px 100px 50px;
  }
`;

export const MainFooterContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    margin-bottom: 40px;
  }
`;

export const TitleContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 72px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;

////////////////// Styled Title -- Logo//////////
export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    justify-content: start;
    align-items: center;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const Logo = styled.img`
  margin-right: 8px;
  width: 32px;
  height: 32px;
  @media screen and (min-width: 768px) {
    margin-right: 12px;
    width: 44px;
    height: 44px;
  }
`;

export const TitleText = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.015em;
  color: ${p => p.theme.colors.primaryLightTextNoChange};

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1;
  }
`;
export const DescriptionList = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    list-style: disc;
  }
`;
export const DescriptionItem = styled.li`
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.02em;
  margin-left: 20px;
  color: ${p => p.theme.colors.primaryLightTextNoChange};
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.33;
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;

///////////////  Styled Navigation /////////
export const Nav = styled.nav`
  margin-bottom: 32px;
  text-align: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    text-align: start;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 101px;
  }
`;

export const ItemNav = styled.li`
  &:not(:last-child) {
    margin-bottom: 14px;
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const Styledlink = styled(NavLink)`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.primaryLightTextNoChange};
  &:hover,
  :focus {
    color: ${p => p.theme.colors.greenAccentSearch};
  }
`;

///////////////  Styled SubscribeForm /////////
export const SubscribeContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-left: 235px;
  }
`;

export const SubscribeBox = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const SubscribeTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  color: ${p => p.theme.colors.primaryLightTextNoChange};
  margin-bottom: 14px;
`;
export const SubscribeText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.primaryLightTextNoChange};

  margin-bottom: 28px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: block;
    text-align: center;
    margin-bottom: 38px;
  }
  @media screen and (min-width: 1440px) {
    display: inline-flex;
    text-align: start;
    margin-bottom: 0px;
  }
`;
export const Label = styled.label`
  position: relative;
`;
export const InputIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
`;
export const Icon = styled.img`
  width: 16px;
  height: 12px;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 16px;
  }
`;
export const Input = styled.input`
  width: 204px;
  height: 38px;
  border: 1px solid ${p => p.theme.colors.primaryLightTextNoChange};
  border-radius: 6px;
  outline: rgba(0, 0, 0, 0.2);
  background-color: transparent;
  justify-content: center;
  color: ${p => p.theme.colors.primaryLightTextNoChange};
  font-size: 10px;
  line-height: 1.5;
  padding-left: 42px;

  &::placeholder {
    font-size: 10px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.primaryLightTextNoChange};
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 30px ${p => p.theme.colors.darkAccent} inset !important;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    -webkit-text-fill-color: ${p =>
      p.theme.colors.primaryLightTextNoChange} !important;
    caret-color: white;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: 12px;
    padding-left: 51px;
    width: 259px;
    height: 50px;
    font-size: 14px;
    line-height: 21px;

    &::placeholder {
      font-size: 14px;
      line-height: 1.5;
      letter-spacing: -0.02em;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 339px;
    height: 60px;
    margin-right: 0;
    font-size: 18px;
    line-height: 1.5;
    &::placeholder {
      font-size: 18px;
      line-height: 1.5;
    }
  }
`;

export const Btn = styled.button`
  width: 204px;
  height: 38px;
  border: none;
  border-radius: 6px;
  outline: rgba(0, 0, 0, 0.2);
  background-color: ${p => p.theme.colors.footerSubscribeButtonBG};
  font-size: 14px;
  line-height: 1.14;
  margin-top: 8px;
  margin-bottom: 44px;

  &:valid {
    color: ${p => p.theme.colors.primaryLightTextNoChange};
  }

  &:hover:valid,
  :focus:valid {
    color: ${p => p.theme.colors.primaryLightTextNoChange};
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    width: 171px;
    height: 50px;
    font-size: 16px;
    line-height: 1.12;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 16px;
    width: 339px;
    height: 60px;
  }
`;

///////////////  Styled FollowUs /////////
export const IconList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IconItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 18px;
    }
  }
`;
export const IconFol = styled(Icon)`
  fill: ${p => p.theme.colors.SocialIcons};

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  &:hover,
  :focus {
    fill: ${p => p.theme.colors.primaryLightText};
    transform: scale(1.2);
  }
`;

///////////////  Styled Rights /////////
export const RightsBox = styled.div`
  background-color: ${p => p.theme.colors.footerRightsReserved};
  padding: 28px 0px;
  background-image: url(${spinachMob});
  background-size: inherit;
  background-repeat: no-repeat;
  background-position: 100% 100%;

  @media screen and (min-width: 768px) {
    padding: 32px 0px;
    background-image: url(${spinachTab});
  }
  @media screen and (min-width: 1440px) {
    padding: 50px 0px;
    background-image: url(${spinachDesk});
  }
`;

export const RightsText = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.otherCategoriesMainPageBtn};
  opacity: 0.5;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1;
  }
`;
export const Span = styled.span`
  margin-left: 14px;
  @media screen and (min-width: 768px) {
    margin-left: 28px;
  }
`;
