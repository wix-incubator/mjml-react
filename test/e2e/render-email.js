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
      background-color="#fff"
      width="700px"
      >

      <MjmlSection
        background-color="#ffffff"
        full-width="full-width"
        padding="15px"
        >
        <MjmlColumn>
          <MjmlText
            align="center"
            color="#9a9c9f"
            font-family="Helvetica,Ubuntu,Arial,sans-serif"
            font-size="10px"
            line-height="18px"
            padding="0"
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
        background-color="#222C2C"
        background-repeat="no-repeat"
        background-url="https://static.wixstatic.com/media/f84110_61c47c7d1fe3468cb8a4fdf46f141c6b~mv2.png"
        full-width="full-width"
        padding="15px"
        >
        <MjmlSection
          background-color="#fff"
          padding="40px 40px 0px 40px"
          >
          <MjmlColumn>
            <MjmlImage
              height="64px"
              padding="0"
              src="https://static.wixstatic.com/media/a306cb_c61667d7fdba400a8d8371f65e95b704.png"
              width="64px"
              />
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          background-color="#fff"
          padding="40px 40px 0px 40px"
          >
          <MjmlColumn>
            <MjmlText
              align="center"
              color="#838264"
              css-class="font-size-40-in-mobile"
              font-family="Montserrat,Ubuntu,Helvetica,Arial,sans-serif"
              font-size="70px"
              font-weight="700"
              letter-spacing="5px"
              line-height="1.3"
              padding="0"
              >
              SPECIAL OFFER
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          background-color="#fff"
          padding="40px 40px 0px 40px"
          >
          <MjmlColumn>
            <MjmlText
              align="center"
              color="#4a4a4a"
              font-family="Helvetica,Ubuntu,Arial,sans-serif"
              font-size="20px"
              line-height="1.5"
              padding="0"
              >
              GET YOUR FIRST SESSION FREE
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          background-color="#fff"
          padding="40px 40px 0px 40px"
          >
          <MjmlColumn>
            <MjmlButton
              background-color="#fff"
              border="solid 1px #4a4a4a"
              color="#4a4a4a"
              css-class="button"
              font-family="Helvetica,Ubuntu,Arial,sans-serif"
              font-size="16px"
              href="https://www.wix.com/"
              inner-padding="10px 30px"
              padding="0"
              >
              Sign Up
            </MjmlButton>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          background-color="#fff"
          padding="40px 0px 0px 0px"
          >
          <MjmlColumn>
            <MjmlImage
              padding="0"
              src="https://static.wixstatic.com/media/a306cb_3208991023294d7c8412aada717f100f~mv2.png/v1/fit/w_700,h_2000,al_c,q_85/image.jpg"
              />
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          background-color="#fff"
          padding="40px 40px 0px 40px"
          >
          <MjmlColumn>
            <MjmlText
              align="center"
              color="#4a4a4a"
              font-family="Helvetica,Ubuntu,Arial,sans-serif"
              font-size="20px"
              line-height="1.5"
              padding="0"
              >
              Every Email has a main message. Tell your audience what you want them to know, how to take action and where to reach you.
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          background-color="#fff"
          padding="40px 40px 0px 40px"
          >
          <MjmlColumn>
            <MjmlButton
              background-color="#fff"
              border="solid 1px #4a4a4a"
              color="#4a4a4a"
              css-class="button"
              font-family="Roboto,Ubuntu,Helvetica,Arial,sans-serif"
              font-size="16px"
              href="https://www.wix.com/"
              inner-padding="10px 30px"
              padding="0"
              >
              Read More
            </MjmlButton>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          background-color="#fff"
          padding="40px 40px 0px 40px"
          >
          <MjmlColumn>
            <MjmlText
              align="center"
              color="#838264"
              font-family="Helvetica,Ubuntu,Arial,sans-serif"
              font-size="30px"
              font-weight="bold"
              line-height="1.5"
              >
              NEVER STOP TRAINING
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          background-color="#fff"
          padding="40px 40px 0px 40px"
          >
          <MjmlColumn width="50%">
            <MjmlText
              align="center"
              color="#4a4a4a"
              font-family="Helvetica,Ubuntu,Arial,sans-serif"
              font-size="16px"
              line-height="1.5"
              >
              Engage your audience. Use lively images and catchy text to grab people’s attention and get them clicking.
            </MjmlText>
            <MjmlSpacer height="20px"/>
            <MjmlButton
              background-color="#fff"
              border="solid 1px #4a4a4a"
              color="#4a4a4a"
              css-class="button"
              font-family="Roboto,Ubuntu,Helvetica,Arial,sans-serif"
              font-size="16px"
              inner-padding="10px 30px"
              padding="0"
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
          background-color="#fff"
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
              font-family="Helvetica,Ubuntu,Arial,sans-serif"
              font-size="16px"
              line-height="1.5"
              padding="0"
              >
              This is a great place to tell your story. Describe what you have to offer and encourage your readers to check it out.
            </MjmlText>
            <MjmlSpacer height="20px"/>
            <MjmlButton
              background-color="#fff"
              border="solid 1px #4a4a4a"
              color="#4a4a4a"
              css-class="button"
              font-family="Helvetica,Ubuntu,Arial,sans-serif"
              font-size="16px"
              href="https://www.wix.com/"
              inner-padding="10px 30px"
              padding="0"
              >
              Book Now
            </MjmlButton>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          background-color="#fff"
          padding="40px 40px 0px 40px"
          >
          <MjmlColumn>
            <MjmlDivider
              border-width="1px"
              border-color="#C9C9C9"
              padding="0"
              />
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          background-color="#fff"
          padding="40px 40px 0px 40px"
          >
          <MjmlColumn width="33.33%">
            <MjmlText
              align="center"
              color="#838264"
              font-family="Helvetica,Ubuntu,Arial,sans-serif"
              font-size="12px"
              line-height="1.5"
              >
              Vilnius, Lithuania<br/>
              Phone
            </MjmlText>
          </MjmlColumn>
          <MjmlColumn width="33.33%">
            <MjmlText
              align="center"
              color="#838264"
              font-family="Helvetica,Ubuntu,Arial,sans-serif"
              font-size="12px"
              line-height="1.5"
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
              font-family="Helvetica,Ubuntu,Arial,sans-serif"
              font-size="12px"
              line-height="1.5"
              >
              Check out my website <img src="https://static.wixstatic.com/media/f84110_25cd91bb4305479395dc2dedce29b7ce~mv2.png/v1/fit/w_750,h_750/f84110_25cd91bb4305479395dc2dedce29b7ce~mv2.png" width="22px" height="22px" style={{verticalAlign: 'middle'}}/>
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          background-color="#fff"
          padding="0 40px 40px 40px"
          >
          <MjmlColumn background-color="#393939">
            <MjmlText
              font-family="Helvetica,Ubuntu,Arial,sans-serif"
              color="#fff"
              align="center"
              line-height="1.5"
              font-size="12px"
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
        background-color="#ffffff"
        full-width="full-width"
        padding="15px"
        >
        <MjmlColumn>
          <MjmlText
            align="center"
            color="#9a9c9f"
            font-family="Ubuntu,Helvetica,Arial,sans-serif"
            font-size="10px"
            line-height="18px"
            padding="0"
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
            font-family="Ubuntu,Helvetica,Arial,sans-serif"
            font-size="10px"
            line-height="18px"
            padding="0px"
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
