import React from 'react';
import { autocapitalize } from '../../src';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleCrazy: false,
      name: '',
      email: '',
      scream: '',
      essay: '',
      rulesList: ['characters', 'words', 'on'],
    };
  }

  handleOnClick(e) {
    e.preventDefault();
    const {
      toggleCrazy,
      rulesList,
      ...rest
    } = this.state;

    alert(JSON.stringify(rest, null, 2));
    alert('open the console to see the whole state...');
    console.log(rest);
  }

  handleOnChange(e, id) {
    const {
      toggleCrazy,
      rulesList,
    } = this.state;

    let { value } = e.target;

    if (toggleCrazy) {
      value = autocapitalize(value, rulesList[Math.floor(Math.random() * rulesList.length)]);

      return this.setState({
        [id]: value,
      });
    }

    if (id === 'name') {
      value = autocapitalize(value, 'words');
    }
    if (id === 'scream') {
      value = autocapitalize(value, 'characters');
    }
    if (id === 'essay') {
      value = autocapitalize(value, 'sentences');
    }

    return this.setState({
      [id]: value,
    });
  }

  render() {
    const {
      toggleCrazy,
      name,
      email,
      scream,
      essay,
    } = this.state;

    return (
      <>
        <button
          type="button"
          onClick={() => this.setState({ toggleCrazy: !toggleCrazy })}
        >
          Toggle for random capitalization.
        </button>
        <div>
          Form inputs are crazy:
          {` ${toggleCrazy}`}
        </div>
        <form>
          <div>
            <div>
              Name:
            </div>
            <div>
              <input
                value={name}
                id="name"
                type="text"
                onChange={(e) => this.handleOnChange(e, 'name')}
                placeholder="John Doe"
              />
            </div>
          </div>
          <div>
            <div>
              Email:
            </div>
            <div>
              <input
                value={email}
                id="email"
                type="email"
                onChange={(e) => this.handleOnChange(e, 'email')}
                placeholder="john.doe@example.com"
              />
            </div>
          </div>
          <div>
            <div>
              SCREAM:
            </div>
            <div>
              <input
                value={scream}
                id="scream"
                type="text"
                onChange={(e) => this.handleOnChange(e, 'scream')}
                placeholder="RAISE YOUR VOICE"
              />
            </div>
          </div>
          <div>
            <div>
              Essay:
            </div>
            <div>
              <textarea
                row="4"
                cols="55"
                value={essay}
                id="essay"
                onChange={(e) => this.handleOnChange(e, 'essay')}
                placeholder="Write your essay. You do not have to care about capitalizing the first letter of a sentence. We do it for you."
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              onClick={(e) => this.handleOnClick(e)}
            >
              Submit
            </button>
          </div>
        </form>
      </>
    )
  }
}

export { Form };
