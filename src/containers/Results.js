import React, { Component } from 'react';
import { githubSearch } from '../api/githubSearch';
import Card from '../components/Card';

class Results extends Component {
  constructor(props) {
    super(props)

    this.state = {
                    repos: [],
                    errorMsg: ''
                  }
  }

  componentDidMount() {
    this.getData()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sendTxt)
      this.getData()
    }

  getData() {
    const { txt, starMin, license, includeForked, resetForm } = this.props
    githubSearch(txt, starMin, license, includeForked)
      .then(data => this.setState({
        repos: data,
        errorMsg: ''
      }))
      .catch(err => this.setState({
        errorMsg: 'Search failed. Please try again.'
      }))
    resetForm()
  }

  showRepos() {
    const { repos } = this.state
    return (
      <ul>
        {repos.items.map(r =>
          <li key={r.id}>
            <Card item={r} />
          </li>)}
      </ul>
    )
  }

  render() {
    const { repos, errorMsg } = this.state
    if (errorMsg !== '')
      return <p>{errorMsg}</p>
    if (repos.total_count === 0)
      return <p>No repositories matched query</p>
    if (repos.length === 0)
      return <p>Loading...</p>
    return (
      <div className="results_wrapper">
        <h3>SEARCH results</h3>
        {this.showRepos()}
      </div>
    )
  }
}


export default Results;
