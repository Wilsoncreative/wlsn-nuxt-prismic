# wlsn-nuxt-prismic

## Configuration

Create a prismic repo and add change its name in `sm.json` line 2:

```json
  "apiEndpoint": "https://[YOUR_REPO_NAME].prismic.io/api/v2",
```

This repo comes preconfigured with two Nuxt pages:

1. `pages/index.vue` is fetching a single type named `home` with an uid of `home`.
2. `pages/_uid.vue` is dynamicly fetching all pages using a multiple type names `page`, matching the url slug against the page uid.

If those are the kind of types you need, feel free to create them using Slice Machine.

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
