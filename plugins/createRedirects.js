import axios from 'axios'
import smConfig from '../sm.json'

export const prismicRedirects = []

export async function getPrismicRedirects() {
  const ref = await axios.get(smConfig.apiEndpoint).then((res) => {
    for (let index = 0; index < res.data.refs.length; index++) {
      if (res.data.refs[index].isMasterRef) {
        return res.data.refs[index].ref
      }
    }
  })

  const temp = await axios
    .get(
      smConfig.apiEndpoint +
        '/documents/search?ref=' +
        ref +
        '&q=[[at(document.type,"redirects")]]#format=json'
    )
    .then((res) => {
      for (
        let index = 0;
        index < res.data.results[0].data.redirects.length;
        index++
      ) {
        prismicRedirects.push({
          from: res.data.results[0].data.redirects[index].old,
          to: res.data.results[0].data.redirects[index].new,
          status: parseInt(res.data.results[0].data.redirects[index].status),
        })
      }
    })
}
