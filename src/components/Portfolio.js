import React, { Component } from 'react';
import Condictor from './Repos/Condictor';
import Pick from './Repos/Pick';
import Referendus from './Repos/Referendus';
import SteamBattle from './Repos/SteamBattle';
import Project from './Project/Project';
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
      repos: {},
    };
  }

  componentWillMount() {
    const repoNames = ['condictor', 'steam-battle', 'referendus', 'pick'];
    const getRepos = repoNames.map(repo => fetchGithubRepo(repo));
    Promise.all(getRepos)
    .then((res) => {
      const repos = {};
      res.forEach((r) => {
        const repo = r;
        switch (repo.name) {
          case 'condictor': {
            repo.screenshot = 'https://cloud.githubusercontent.com/assets/18176333/26330669/b2e90af6-3f12-11e7-96a3-b5349ef61d8f.png';
            repo.copy = <Condictor />;
            break;
          }
          case 'steam-battle': {
            repo.screenshot = 'https://cloud.githubusercontent.com/assets/18176333/24309924/c9490b84-109b-11e7-8f7a-4d2e4ee1b365.png';
            repo.copy = <SteamBattle />;
            break;
          }
          case 'referendus': {
            repo.screenshot = 'https://cloud.githubusercontent.com/assets/18176333/22914304/5e6e4e3e-f235-11e6-8c51-b1622ae48f38.png';
            repo.copy = <Referendus />;
            break;
          }
          case 'pick': {
            repo.screenshot = 'http://res.cloudinary.com/dk85nueap/image/upload/v1496772162/pick-large-montage_jxvg6l.png';
            repo.copy = <Pick />;
            break;
          }
          default: repo.copy = <p />;
        }
        repos[repo.name] = repo;
      });
      console.log(repos);
      this.setState({ repos });
    });
  }

  componentDidMount() {
    document.querySelector('body').classList.add('body-fade-in');
  }

  render() {
    return (
      <section className="Portfolio">
        <Project repo={this.state.repos.condictor} />
        <Project repo={this.state.repos['steam-battle']} />
        <Project repo={this.state.repos.referendus} />
        <Project repo={this.state.repos.pick} />
      </section>
    );
  }
}

export default Portfolio;
