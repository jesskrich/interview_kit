const url = 'https://api.github.com/licenses'

export const githubLicenses = () => {
  return fetch(url)
    .then (res => {
      if (res.ok) {
        return res.json();
      }
      else {
        Promise.reject('Network failure')
      }
    })
}
