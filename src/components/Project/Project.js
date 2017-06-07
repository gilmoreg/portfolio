import React from 'react';
import PropTypes from 'prop-types';
import Copy from '../Copy/Copy';
import './Project.css';

const Project = (props) => {
  const { topics, name, description, copy } = props.repo;
  let topicList;
  if (topics && topics.length) {
    topicList = topics.map(t => <li key={t}>{t.toUpperCase()}</li>);
  }
  return (
    <section className="Project">
      <a href={`http://${name}.gilmoreg.com`} rel="noopener noreferrer" target="_blank" title={name}>
        <img src={props.repo.screenshot} alt={name} />
      </a>
      <section className="content">
        <h2 className="title">{name.toUpperCase()}</h2>
        <div className="description">{description}</div>
        <ul className="topics">{topicList || ''}</ul>
        <Copy copy={copy} />
        <section className="button-row">
          <a href={`http://${name}.gilmoreg.com`} rel="noopener noreferrer" target="_blank" title={name}>
            <i className="fa fa-external-link" aria-hidden="true" /> Live Site
          </a>
          <a href={`https://github.com/gilmoreg/${name}`} rel="noopener noreferrer" target="_blank" title={name}>
            <i className="fa fa-github" aria-hidden="true" /> See the Code
          </a>
        </section>
      </section>
    </section>
  );
};

Project.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string,
    topics: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    copy: PropTypes.Component,
    screenshot: PropTypes.string,
  }),
};

Project.defaultProps = {
  repo: {
    name: '',
    topics: [''],
    description: '',
    copy: React.createElement('p'),
    screenshot: '',
  },
};

export default Project;
