# wlsn-nuxt-prismic

## Configuration

Create a prismic repo and add change its name in `sm.json` line 2:

```json
  "apiEndpoint": "https://[YOUR_REPO_NAME].prismic.io/api/v2",
```

This repo comes preconfigured with two custom types `page` & `home`. Theese two custom types has matching Nuxt pages where `pages/index.vue` is fetching the single type `home` and `pages/_uid.vue` is dynamicly fetching all pages using the multiple type `page`.

You can chose to configure those however you want, or push them to Prismic as is.

## Build Setup

```bash
# install dependencies
$ npm i

# serve with hot reload at localhost:3000
$ npm run dev

# run slicemachine
$ npm run slicemachine

# run storybook
$ npm run storybbok

# generate static project
$ npm run generate
```
