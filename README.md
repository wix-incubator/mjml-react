# mjml-react &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/wix-incubator/mjml-react/blob/master/LICENSE) <a href="https://www.npmjs.com/package/mjml-react"><img src="https://img.shields.io/npm/v/mjml-react.svg" alt="npm version"></a> [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/wix-incubator/mjml-react/pulls)

<img src="https://cdn.worldvectorlogo.com/logos/mjml-by-mailjet.svg" height="64"/> &middot; <img src="https://cdn.worldvectorlogo.com/logos/react.svg" width="64" height="64"/>

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
          <MjmlButton
            padding="20px"
            backgroundColor="#346DB7"
            href="https://www.wix.com/"
            >
            I like it!
          </MjmlButton>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
), {validationLevel: 'soft'});
```

And as the result you will get a nice looking email HTML (works in mobile too!)

![preview](https://user-images.githubusercontent.com/10008149/41058394-59b8ce9e-69d2-11e8-9eb9-c294f35bae9f.png)

## Options

mjml-react sets the following MJML options when rendering to HTML:

```js
{
  keepComments: false,
  beautify: false,
  minify: true,
  validationLevel: 'strict'
}
```

If you want to override these, you can pass an object to `render` as a second argument. See the [MJML docs](https://documentation.mjml.io/#inside-node-js) for the full list of options you can set.

## Extensions

```js
import {
  MjmlHtml,
  MjmlComment,
  MjmlConditionalComment
} from 'mjml-react/extensions';

<MjmlComment>Built with ... at ...</MjmlComment>
// <!--Built with ... at ...-->

<MjmlConditionalComment>MSO conditionals</MjmlConditionalComment>
// <!--[if gte mso 9]>MSO conditionals<![endif]-->

<MjmlConditionalComment condition="if IE">MSO conditionals</MjmlConditionalComment>
// <!--[if IE]>MSO conditionals<![endif]-->

<MjmlHtml tag="div" html="<span>Hello World!</span>" />
// <div><span>Hello World!</span></div>
```

## Utils

We do have also some utils for post processing the output HTML.
Because not all mail clients do support named HTML entities, like `&apos;`.
So we need to replace them to hex.

```js
import {
  namedEntityToHexCode,
  fixConditionalComment
} from 'mjml-react/utils';

const html = '<div>&apos;</div>';
namedEntityToHexCode(html);
// <div>&#39;</div>

fixConditionalComment('<!--[if mso]><div>Hello World</div><![endif]-->', 'Hello', 'if IE');
// <!--[if IE]><div>Hello World</div><![endif]-->
```

## Limitations

Currently `mjml` and `mjml-react` libraries are meant to be run inside a node.

## Example project

You can find an example project here
[https://github.com/wix-incubator/mjml-react-example](https://github.com/wix-incubator/mjml-react-example)
