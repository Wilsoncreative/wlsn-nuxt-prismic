# wlsn-nuxt-prismic

## Configuration

Create a prismic repo and edit the file named `sm.json` in the root of your folder, replacing the repo name with your repo name:

```json
{
  "apiEndpoint": "https://[YOUR-REPO-NAME].prismic.io/api/v2",
  "libraries": ["@/slices"],
  "_latest": "0.1.0",
  "storybook": "http://localhost:3003"
}
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
