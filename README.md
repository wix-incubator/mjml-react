# react-mjml &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/wix-incubator/mjml-react/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/wix-incubator/mjml-react/pulls)

There is an awesome library [mjml](https://mjml.io/) with github repo here [https://github.com/mjmlio/mjml](https://github.com/mjmlio/mjml).

`MJML` is a markup language created by [Mailjet](https://www.mailjet.com/).
So in order to create emails on the fly we created a library with `React` components.

## How it works

Install the required dependencies first:

```bash
npm install react react-dom mjml mjml-react
```

And afterwards write a code like a pro:

```js
import {
  render,
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlImage
} from 'mjml-react';

const {html, errors} = render((
  <Mjml>
    <MjmlHead>
      <MjmlTitle>Last Minute Offer</MjmlTitle>
      <MjmlPreview>Last Minute Offer...</MjmlPreview>
    </MjmlHead>
    <MjmlBody width={500}>
      <MjmlSection fullWidth backgroundColor="#efefef">
        <MjmlColumn>
          <MjmlImage src="https://static.wixstatic.com/media/5cb24728abef45dabebe7edc1d97ddd2.jpg"/>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection>
        <MjmlColumn>
          <MjmlButton padding="20px" backgroundColor="#346DB7" href="https://www.wix.com/">I like it!</MjmlButton>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
), {validationLevel: 'soft'});
```

And as the result you will get a nice looking email HTML (works in mobile too!)

![preview](https://user-images.githubusercontent.com/10008149/41058394-59b8ce9e-69d2-11e8-9eb9-c294f35bae9f.png)

