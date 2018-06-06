# React wrappers for MJML

There is an awesome library [mjml](https://mjml.io/) with github repo here [https://github.com/mjmlio/mjml](https://github.com/mjmlio/mjml).

`MJML` is a markup language created by [Mailjet](https://www.mailjet.com/).
So in order to create emails on the fly we created a library with `React` components.

## How it works

Install the required dependencies first:

```bash
npm install react react-dom mjml mjml-react
```

And afterwars write a code like a pro:

```js
import {
  render,
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlBreakpoint,
  MjmlPreview,
  MjmlBody,
  MjmlRaw,
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
  </tags.Mjml>
), {validationLevel: 'soft'});
```
