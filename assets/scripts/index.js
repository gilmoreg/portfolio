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
  return topics.map(t => `<li>${t.toUpperCase()}</li>`).join('');
};

function readMoreOrLess(e) {
  e.preventDefault();
  const repo = this.id.split('-readmore')[0];
  Array.from(document.querySelectorAll(`#${repo}-copy > p`))
  .forEach((p, index) => {
    if (index === 0) p.classList.toggle('fade');
    else p.classList.toggle('hidden');
  });
  if (this.innerHTML === 'Read more...') this.innerHTML = 'Read less...';
  else this.innerHTML = 'Read more...';
}

(() => {
  const repoNames = ['condictor', 'steam-battle', 'referendus_angular', 'pick'];
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
  .catch(err => console.error(err));

  // Sticky nav
  const sticky = document.querySelector('.sticky');
  window.addEventListener('scroll', function () { // eslint-disable-line func-names
    if (this.scrollY >= 90) sticky.classList.add('sticky-scrolled');
    else sticky.classList.remove('sticky-scrolled');
  });
  Array.from(document.querySelectorAll('[data-target]'))
  .forEach((link) => {
    link.addEventListener('click', function () { // eslint-disable-line
      const target = document.querySelector(`#${this.dataset.target}`);
      window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
    });
  });
})();
