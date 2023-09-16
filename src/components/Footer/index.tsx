import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import {
  FooterSection,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Tell us everything")}</Large>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:info.dmsmoving@gmail.com">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
              <a href="tel:+16505159161">
                <Chat>{t(`Or Call Us`)}</Chat>
              </a>
            </Col>
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Address")}</Language>
              <Para>449 Avenue H, Trasure Island</Para>
              <Para>San Francisco</Para>
              <Para>California</Para>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://www.yelp.com/biz/davidson-moving-and-storage-san-francisco"
                src="yelp.svg"
              />
              <SocialLink
                href="https://web.whatsapp.com/send?phone=+16505159161"
                src="whatsapp.svg"
              />
              <SocialLink
                 href="https://t.me/DavidsonMoving"
                 src="telegram.svg"
              />
              <SocialLink
                href="https://www.instagram.com/davidsonmoving/"
                src="instagram.svg"
              />
              <SocialLink
                href="https://www.facebook.com/people/Davidson-Moving/100091916710496/"
                src="facebook.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);