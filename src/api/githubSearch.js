const root = 'https://api.github.com/search/repositories?q='


const buildQuery = (txt, starMin, license, includeForked) => {
  const q = []
  txt ? q.push(`${txt}`) : ''
  license ? q.push(`license:${license}`) : ''
  includeForked ? q.push('fork:true') : ''
  q.push(`stars:>=${starMin || 0}`)
  return q.join('+')
}

export const githubSearch = (txt, starMin, license, includeForked) => {
  const path = buildQuery(txt, starMin, license, includeForked)
  return fetch(`${root}${path}`)
    .then(res =>
      res.ok ? res.json() : Promise.reject('Network failure')
    )
}
