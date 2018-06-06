# React wrappers for MJML

```js
import {
  render,
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlBreakpoint,
  MjmlPreview,
  MjmlBody,
  MjmlRaw
} from 'mjml-react';

const {html, errors} = render((
  <Mjml>
    <MjmlHead>
      <MjmlTitle>Last Minute Offer</MjmlTitle>
      <MjmlPreview>Last Minute Offer...</MjmlTitle>
    </MjmlHead>
    <MjmlBody>
      <MjmlRaw>
        <p>Nice offer!</p>
      </MjmlRaw>
    </MjmlBody>
  </tags.Mjml>
), {validationLevel: 'soft'});
```
