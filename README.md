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

This repo comes preconfigured with two Nuxt pages with their respective content type. Also, a slice named TextContent for demo purposes.

1. `pages/index.vue` is fetching a single type named `home` with an uid of `home`.
2. `pages/_uid.vue` is dynamicly fetching all pages using a multiple type names `page`, matching the url slug against the page uid.

Make sure you know you want theese two types and the slice before you push to Prismic. If you dont want the typs, just remove the folders: `./.slicemachine/assets/customtypes` and `./customtypes`, also remove line 4 & 5 in: `./.slicemachine/mock-config.js`

If you dont want the slice, just remove the folders: `./.slicemachine/assets/slices/TextContent` and `./slices/TextContent`, also remove line 3 in: `./slices/index.js`

## Build Setup

```bash
# install dependencies
$ npm i

# serve with hot reload at localhost:3000
$ npm run dev

# run slicemachine
$ npm run slicemachine

# run storybook
$ npm run storybook

# generate static project
$ npm run generate
```
