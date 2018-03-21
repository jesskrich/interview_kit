import React, { Component } from 'react';
import { githubLicenses } from '../api/githubLicenses';
import TextInput from '../components/TextInput';
import CheckBoxInput from '../components/CheckBoxInput';
import DropDownInput from '../components/DropDownInput';
import Results from './Results';


class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
                    txt: '',
                    license: '',
                    starMin: '',
                    includeForked: false,
                    submitted: false,
                    sendTxt: false,
                    licenses: [],
                    warningMsg: ''
                  }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.resetForm = this.resetForm.bind(this)
  }

  componentDidMount() {
    githubLicenses()
      .then(data => this.setState({
        licenses: data
        }))
      .catch(err => console.error('ERROR'))
  }

  resetForm() {
    this.setState({
      txt: '',
      starMin: null,
      license: '',
      sendTxt: false
    })
  }

  handleChange(key) {
    return (e) => {
      const state = {}
      state[key] = e.target.value
      this.setState(state)
    }
  }

  handleCheckBoxChange(e) {
    this.setState({
      includeForked: !this.state.includeForked
    })
  }

  handleBlur(e) {
    if (!this.state.starMin.match(/^(\s*|\d+)$/g))
    this.setState({
      warningMsg: 'Stars must be a number'
    })
    else this.setState({
      warningMsg: ''
    })
  }

  handleSubmit(e) {
    this.setState({
      submitted: true,
      sendTxt: true
    })
    e.preventDefault()
  }

  renderResults() {
    return <Results {...this.state} resetForm={this.resetForm}/>
  }

  render() {
    const { handleChange,
            handleSubmit,
            handleCheckBoxChange,
            handleBlur } = this
    const { txt,
            starMin,
            license,
            includeForked,
            submitted,
            licenses,
            warningMsg } = this.state
    console.log(starMin)
    return (
      <div style={{width: '100%'}}>
        <div className="search_wrapper">
          <form onSubmit={handleSubmit}>
            <TextInput label="Text"
                       onChange={handleChange('txt')}
                       value={txt}
            />
            <TextInput label="Stars"
                       onChange={handleChange('starMin')}
                       onBlur={handleBlur}
                       value={starMin}
            />
            <DropDownInput label="License"
                           onChange={handleChange('license')}
                           value={license}
                           licenses={licenses}
            />
            <CheckBoxInput label="Include Forked"
                           onChange={handleCheckBoxChange}
                           checked={includeForked}
            />
            <button type="submit" value="Submit">
                    SEARCH
            </button>
            <p style={{color: 'red'}}>{warningMsg}</p>
          </form>
        </div>
        {submitted && this.renderResults()}
      </div>
    )
  }

}

export default Search;
