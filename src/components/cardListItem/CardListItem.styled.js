import styled from '@emotion/styled';

import bgCard from '../../images/bgImage-min.png';

export const ListItem = styled.li`
  width: 380px;
  height: 460px;
  display: block;
  border-radius: 3% 3% 2% 2%;
  overflow: hidden;
  background: ${p => p.theme.colors.gradientBackground};
  box-shadow: ${p => p.theme.shadows.card};
  box-shadow: 15px 0 8px 3px rgb(50 50 50 / 75%);

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

export const ProfileCard = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: ${p => p.theme.radii.card};
  padding: 242px 20px 20px;
  position: relative;

  background-repeat: no-repeat;
  background-image: url(${bgCard});
  background-position-x: 33px;
  background-position-y: 21px;
  background-size: 83%;

  @media screen and (min-width: 768px) {
    padding: 275px 87px 36px;
  }
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 40%;
  width: 80px;
  height: 80px;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 7px;
  left: 11px;
  width: 58px;
  height: 58px;

  border-radius: ${p => p.theme.radii.img};
`;

export const CentralLine = styled.div`
  position: absolute;
  top: 198px;
  left: 0;
  width: 100%;
  height: 8px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;

  @media screen and (min-width: 768px) {
    top: 214px;
    left: 0;
  }
`;

export const BoxInfo = styled.div`
  margin-top: 10px;
`;

export const BoxTweet = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;
export const CounTweet = styled.p`
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.min};
  text-transform: uppercase;
  margin: 0;
  margin-right: 10px;

  color: ${p => p.theme.colors.text};
`;

export const Tweet = styled.p`
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.min};
  text-transform: uppercase;
  margin: 0;
  color: ${p => p.theme.colors.text};
`;

export const BoxFollow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 26px;
`;

export const CounFollow = styled.p`
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.min};
  text-transform: uppercase;
  margin: 0;
  margin-right: 10px;

  color: ${p => p.theme.colors.text};
`;

export const Follow = styled.p`
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.min};
  text-transform: uppercase;
  margin: 0;
  color: ${p => p.theme.colors.text};
`;

export const Button = styled.button`
  width: 196px;
  height: 50px;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.ms};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.min};
  text-transform: uppercase;
  margin: 0;
  padding: 14px 20px;
  background-color: ${p => p.theme.colors.primaryButton};
  color: ${p => p.theme.colors.textButton};
  box-shadow: ${p => p.theme.shadows.button};
  border-radius: ${p => p.theme.radii.button};
  opacity: 0.9;
  transition-property: font-weight, scale, opacity;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    scale: 1.05;
    font-weight: bolder;
    opacity: 1;
  }
`;

export const NextButton = styled.button`
  width: 196px;
  height: 50px;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.ms};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.min};
  text-transform: uppercase;
  margin: 0;
  padding: 14px 20px;
  background-color: rgb(92, 211, 168);
  color: ${p => p.theme.colors.textButton};
  box-shadow: ${p => p.theme.shadows.button};
  border-radius: ${p => p.theme.radii.button};
  opacity: 0.9;
  transition-property: font-weight, scale, opacity;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    scale: 1.05;
    font-weight: bolder;
    opacity: 1;
  }
`;
