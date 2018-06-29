import React from 'react';

import {
  Mjml,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlDivider,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlSpacer,
  MjmlStyle,
  MjmlText,
  MjmlTitle,
  MjmlWrapper,
  render
} from '../../src';

const renderEmail = () => render((
  <Mjml>
    <MjmlHead>
      <MjmlTitle>Do not take life too seriously. You will never get out of it alive.</MjmlTitle>
      <MjmlPreview>Do not take life too seriously. You will never get out of it alive.</MjmlPreview>
      <MjmlFont
        name="Montserrat"
        href="https://fonts.googleapis.com/css?family=Montserrat"
        />
      <MjmlFont
        name="Roboto"
        href="https://fonts.googleapis.com/css?family=Roboto"
        />
      <MjmlStyle>
        {`
        * {
          '-webkit-font-smoothing': antialiased;
        }
        @media only screen and (max-width:480px) {
          .font-size-40-in-mobile div {
            font-size: 40px !important;
          }
          .button table {
            width: 100% !important;
          }
        }`
      }
      </MjmlStyle>
    </MjmlHead>
    <MjmlBody
      backgroundColor="#fff"
      width={700}
      >

      <MjmlSection
        backgroundColor="#ffffff"
        fullWidth
        padding={15}
        >
        <MjmlColumn>
          <MjmlText
            align="center"
            color="#9a9c9f"
            fontFamily="Helvetica,Ubuntu,Arial,sans-serif"
            fontSize={10}
            lineHeight={18}
            padding={0}
            >
            Can&#39;t see this Message? <a
              href="https://www.wix.com/"
              rel="noopener noreferrer"
              target="_blank"
              style={{
                fontWeight: 'bold',
                textDecoration: 'underline',
                color: '#3899ec'
              }}
              >
              View in browser
            </a>
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>

      <MjmlWrapper
        backgroundColor="#222C2C"
        backgroundRepeat="no-repeat"
        backgroundUrl="https://static.wixstatic.com/media/f84110_61c47c7d1fe3468cb8a4fdf46f141c6b~mv2.png"
        fullWidth
        padding={15}
        >
        <MjmlSection
          backgroundColor="#fff"
          padding="40px 40px 0px 40px"
          >
          <MjmlColumn>
            <MjmlImage
              height={64}
              padding={0}
              src="https://static.wixstatic.com/media/a306cb_c61667d7fdba400a8d8371f65e95b704.png"
              width={64}
              />
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          backgroundColor="#fff"
          padding="40px 40px 0px 40px"
          >
          <MjmlColumn>
            <MjmlText
              align="center"
              color="#838264"
              cssClass="font-size-40-in-mobile"
              fontFamily="Montserrat,Ubuntu,Helvetica,Arial,sans-serif"
              fontSize={70}
              fontWeight={700}
              letterSpacing={5}
              lineHeight={70 * 1.3}
              padding={0}
              >
              SPECIAL OFFER
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          backgroundColor="#fff"
          padding="40px 40px 0px 40px"
          >
          <MjmlColumn>
            <MjmlText
              align="center"
              color="#4a4a4a"
              fontFamily="Helvetica,Ubuntu,Arial,sans-serif"
              fontSize={20}
              lineHeight={20 * 1.5}
              padding={0}
              >
              GET YOUR FIRST SESSION FREE
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          backgroundColor="#fff"
          padding="40px 40px 0px 40px"
          >
          <MjmlColumn>
            <MjmlButton
              backgroundColor="#fff"
              border="solid 1px #4a4a4a"
              color="#4a4a4a"
              cssClass="button"
              fontFamily="Helvetica,Ubuntu,Arial,sans-serif"
              fontSize="16px"
              href="https://www.wix.com/"
              innerPadding="10px 30px"
              padding={0}
              >
              Sign Up
            </MjmlButton>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          backgroundColor="#fff"
          padding="40px 0px 0px 0px"
          >
          <MjmlColumn>
            <MjmlImage
              padding={0}
              src="https://static.wixstatic.com/media/a306cb_3208991023294d7c8412aada717f100f~mv2.png/v1/fit/w_700,h_2000,al_c,q_85/image.jpg"
              />
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          backgroundColor="#fff"
          padding="40px 40px 0px 40px"
          >
          <MjmlColumn>
            <MjmlText
              align="center"
              color="#4a4a4a"
              fontFamily="Helvetica,Ubuntu,Arial,sans-serif"
              fontSize={20}
              lineHeight={20 * 1.5}
              padding={0}
              >
              Every Email has a main message. Tell your audience what you want them to know, how to take action and where to reach you.
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          backgroundColor="#fff"
          padding="40px 40px 0px 40px"
          >
          <MjmlColumn>
            <MjmlButton
              backgroundColor="#fff"
              border="solid 1px #4a4a4a"
              color="#4a4a4a"
              cssClass="button"
              fontFamily="Roboto,Ubuntu,Helvetica,Arial,sans-serif"
              fontSize="16px"
              href="https://www.wix.com/"
              innerPadding="10px 30px"
              padding={0}
              >
              Read More
            </MjmlButton>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          backgroundColor="#fff"
          padding="40px 40px 0px 40px"
          >
          <MjmlColumn>
            <MjmlText
              align="center"
              color="#838264"
              fontFamily="Helvetica,Ubuntu,Arial,sans-serif"
              fontSize={30}
              fontWeight={700}
              lineHeight={30 * 1.5}
              >
              NEVER STOP TRAINING
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          backgroundColor="#fff"
          padding="40px 40px 0px 40px"
          >
          <MjmlColumn width="50%">
            <MjmlText
              align="center"
              color="#4a4a4a"
              fontFamily="Helvetica,Ubuntu,Arial,sans-serif"
              fontSize={16}
              lineHeight={16 * 1.5}
              >
              Engage your audience. Use lively images and catchy text to grab people’s attention and get them clicking.
            </MjmlText>
            <MjmlSpacer height={20}/>
            <MjmlButton
              backgroundColor="#fff"
              border="solid 1px #4a4a4a"
              color="#4a4a4a"
              cssClass="button"
              fontFamily="Roboto,Ubuntu,Helvetica,Arial,sans-serif"
              fontSize={16}
              innerPadding="10px 30px"
              padding={0}
              >
              Book Now
            </MjmlButton>
          </MjmlColumn>
          <MjmlColumn width="50%">
            <MjmlImage
              src="https://static.wixstatic.com/media/eceb8e_2518dbff872b4241b39884a4817887ac~mv2.jpg/v1/fit/w_700,h_2000,al_c,q_85/image.jpg"
              />
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          backgroundColor="#fff"
          padding="40px 40px 0px 40px"
          >
          <MjmlColumn width="50%">
            <MjmlImage
              src="https://static.wixstatic.com/media/eceb8e_17e61c888e5e470cb518910f7d9992e8~mv2.png/v1/fit/w_700,h_2000,al_c,q_85/image.jpg"
              />
          </MjmlColumn>
          <MjmlColumn width="50%">
            <MjmlText
              align="center"
              color="#4a4a4a"
              fontFamily="Helvetica,Ubuntu,Arial,sans-serif"
              fontSize={16}
              lineHeight={16 * 1.5}
              padding={0}
              >
              This is a great place to tell your story. Describe what you have to offer and encourage your readers to check it out.
            </MjmlText>
            <MjmlSpacer height={20}/>
            <MjmlButton
              backgroundColor="#fff"
              border="solid 1px #4a4a4a"
              color="#4a4a4a"
              cssClass="button"
              fontFamily="Helvetica,Ubuntu,Arial,sans-serif"
              fontSize={16}
              href="https://www.wix.com/"
              innerPadding="10px 30px"
              padding={0}
              >
              Book Now
            </MjmlButton>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          backgroundColor="#fff"
          padding="40px 40px 0px 40px"
          >
          <MjmlColumn>
            <MjmlDivider
              borderWidth={1}
              borderColor="#C9C9C9"
              padding={0}
              />
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          backgroundColor="#fff"
          padding="40px 40px 0px 40px"
          >
          <MjmlColumn width="33.33%">
            <MjmlText
              align="center"
              color="#838264"
              fontFamily="Helvetica,Ubuntu,Arial,sans-serif"
              fontSize={12}
              lineHeight={12 * 1.5}
              >
              Vilnius, Lithuania<br/>
              Phone
            </MjmlText>
          </MjmlColumn>
          <MjmlColumn width="33.33%">
            <MjmlText
              align="center"
              color="#838264"
              fontFamily="Helvetica,Ubuntu,Arial,sans-serif"
              fontSize={12}
              lineHeight={12 * 1.5}
              >
              <div>Share Via:</div>
              <img
                height="22px"
                hspace="2"
                src="https://static.wixstatic.com/media/f84110_58f23c280d944b558a230a3ce6c0fad9~mv2.png/v1/fit/w_750,h_750/f84110_58f23c280d944b558a230a3ce6c0fad9~mv2.png"
                style={{verticalAlign: 'middle'}}
                vspace="10"
                width="22px"
                />
              <img
                height="22px"
                hspace="2"
                src="https://static.wixstatic.com/media/f84110_45d5ed6b9b7c42b0930633253e0bae39~mv2.png/v1/fit/w_750,h_750/f84110_45d5ed6b9b7c42b0930633253e0bae39~mv2.png"
                style={{verticalAlign: 'middle'}}
                vspace="10"
                width="22px"
                />
              <img
                height="22px"
                hspace="2"
                src="https://static.wixstatic.com/media/f84110_858b0def7bea41f698f059382badd416~mv2.png/v1/fit/w_750,h_750/f84110_858b0def7bea41f698f059382badd416~mv2.png"
                style={{verticalAlign: 'middle'}}
                vspace="10"
                width="22px"
                />
            </MjmlText>
          </MjmlColumn>
          <MjmlColumn width="33.33%">
            <MjmlText
              align="center"
              color="#838264"
              fontFamily="Helvetica,Ubuntu,Arial,sans-serif"
              fontSize={12}
              lineHeight={12 * 1.5}
              >
              Check out my website <img src="https://static.wixstatic.com/media/f84110_25cd91bb4305479395dc2dedce29b7ce~mv2.png/v1/fit/w_750,h_750/f84110_25cd91bb4305479395dc2dedce29b7ce~mv2.png" width="22px" height="22px" style={{verticalAlign: 'middle'}}/>
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          backgroundColor="#fff"
          padding="0 40px 40px 40px"
          >
          <MjmlColumn backgroundColor="#393939">
            <MjmlText
              fontFamily="Helvetica,Ubuntu,Arial,sans-serif"
              color="#fff"
              align="center"
              lineHeight={12 * 1.5}
              fontSize={12}
              >
              Created with Wix.com.
              <strong>Love It?</strong> <a
                href="https://www.wix.com"
                style={{
                  color: '#fff',
                  textDecoration: 'underline'
                }}
                >
                <strong>Try It! It&#39;s Free.</strong>
              </a>
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

      </MjmlWrapper>

      <MjmlSection
        backgroundColor="#ffffff"
        fullWidth
        padding={15}
        >
        <MjmlColumn>
          <MjmlText
            align="center"
            color="#9a9c9f"
            fontFamily="Ubuntu,Helvetica,Arial,sans-serif"
            fontSize={10}
            lineHeight={18}
            padding={0}
            >
            You&#39;ve received this email because you are a subscriber of <a
              href="https://www.wix.com/"
              rel="noopener noreferrer"
              target="_blank"
              style={{
                fontWeight: 'bold',
                textDecoration: 'underline',
                color: '#3899ec'
              }}
              >
              this site
            </a>
          </MjmlText>
          <MjmlText
            align="center"
            color="#9a9c9f"
            fontFamily="Ubuntu,Helvetica,Arial,sans-serif"
            fontSize={10}
            lineHeight={18}
            padding={0}
            >
            If you feel you received it by mistake or wish to unsubscribe <a
              href="https://www.wix.com/"
              rel="noopener noreferrer"
              target="_blank"
              style={{
                fontWeight: 'bold',
                textDecoration: 'underline',
                color: '#3899ec'
              }}
              >
              click here
            </a>
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>

    </MjmlBody>
  </Mjml>
), {validationLevel: 'soft'});

export default renderEmail;
