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

const buildTopicsHtml = (topics) => {
  if (!topics || !topics.length) return '';
  return topics.map(t => `<li key=${t}>${t.toUpperCase()}</li>`).join('');
};

function readMoreOrLess(e) {
  e.preventDefault();
  const repo = this.id.split('-readmore')[0];
  Array.from(document.querySelectorAll(`#${repo}-copy > p`))
  .forEach((p, index) => {
    if (index === 0) p.classList.toggle('fade');
    else p.classList.toggle('hidden');
  });
}

(() => {
  const repoNames = ['condictor', 'steam-battle', 'referendus', 'pick'];
  const getRepos = repoNames.map(repo => fetchGithubRepo(repo));
  Promise.all(getRepos)
  .then((repos) => {
    repos.forEach((repo) => {
      document.querySelector(`#${repo.name}-description`).innerHTML = repo.description || '';
      document.querySelector(`#${repo.name}-topics`).innerHTML = buildTopicsHtml(repo.topics);
      document.querySelector(`#${repo.name}-readmore`).addEventListener('click', readMoreOrLess);
    });
    document.querySelector('body').classList.add('body-fade-in');
  })
  .catch(err => console.error(Error(err)));


})();
