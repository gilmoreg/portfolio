import React, { Component } from 'react';
import Preview from './Preview/Preview';
import Card from './Card/Card';
import './Portfolio.css';

require('smoothscroll-polyfill').polyfill();

const fetchGithubRepo = repo =>
  fetch(`https://api.github.com/repos/gilmoreg/${repo}`, {
    headers: {
      Accept: 'application/vnd.github.mercy-preview+json',
    },
  })
  .then(res => res.json())
  .then(res => ({
    name: repo,
    description: res.description,
    topics: res.topics,
  }))
  .catch(err => new Error(err));

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      selected: -1,
    };
    this.selectCard = this.selectCard.bind(this);
    this.closePreview = this.closePreview.bind(this);
  }

  componentWillMount() {
    const repoNames = ['condictor', 'steam-battle', 'referendus', 'pick'];
    const repos = repoNames.map(repo => fetchGithubRepo(repo));
    Promise.all(repos)
    .then((res) => {
      this.setState({ repos: res });
    });
  }

  componentDidMount() {
    document.querySelector('body').classList.add('body-fade-in');
  }

  selectCard(e) {
    e.preventDefault();
    const repo = e.target.dataset.repo;
    const index = this.state.repos.findIndex(r => (r.name === repo));
    if (index >= 0) {
      if (index === this.state.selected) this.setState({ selected: -1 });
      else {
        this.setState({ selected: index });
        document.querySelector('#preview-container').scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  closePreview() {
    this.setState({ selected: -1 });
    document.querySelector('.Portfolio').scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const children = this.state.repos.map(repo =>
      <Card
        key={repo.name}
        repo={repo.name}
        topics={repo ? repo.topics : []}
        description={repo ? repo.description : []}
        click={this.selectCard}
      />,
    );

    let preview = null;
    if ((this.state.selected >= 0) && this.state.repos.length) {
      preview = <Preview repo={this.state.repos[this.state.selected]} close={this.closePreview} />;
    }

    return (
      <section className="Portfolio">
        <section className="cards">
          {children[0]}
          {children[1]}
          <div id="preview-container">{(this.state.selected >= 0) ? preview : ''}</div>
          {children[2]}
          {children[3]}
        </section>
      </section>
    );
  }
}

export default Portfolio;
