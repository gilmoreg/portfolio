/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './Buttons';
import './Anikunchan.css';

const Anikunchan = props => (
  <section>
    <img src="https://cloud.githubusercontent.com/assets/18176333/22078537/ed5b02da-dd7d-11e6-9a3a-21f8397af8b5.png" alt="Anikunchan" />
    <h1>Anikunchan</h1>
    <p>My first project as a <strong>Thinkful</strong> student. The assignment was simply to consume a REST API, but I wanted to reach higher and integrate multiple APIs, and this was the result. I ran into obstacles early as several APIs I had planned to use ended up not working. For example, Myanimelist’s API did not turn out to be viable as a public source of data, and Twitter and Imgur only provide data for currently trending topics (not suitable for searches on older shows). Originally it appeared that Google Image Search had been deprecated, but I later discovered that their <strong>Custom Search Engine</strong> still supported an image search if configured properly, and its free tier would suffice for a project like this.</p>
    <p>By the time I finished the first version of this project, I was comfortable using <strong>JQuery</strong> and <strong>responsive design</strong>. I was also able to able to experiment with <strong>Flexbox</strong>.</p>
    <p>I later revisited this project with the benefit of having studied server side programming. I was always disturbed that my API keys were exposed in the source, so I leveraged the <strong>Serverless Framework</strong> with <strong>AWS Lamdba</strong> functions to proxy the API calls without exposing the keys. I was surprised at how easy the Serverless Framework makes it!</p>
    <p>With the benefit of hindsight, I noticed that I had been too aggressive in attempting to avoid reusing code. I introduced a great deal of complexity simply to avoid reusing about 10 lines of code. Lessons learned!</p>
    <Buttons close={props.close} repo={'anikunchan'} />
  </section>
);

Anikunchan.propTypes = {
  close: PropTypes.func.isRequired,
};

export default Anikunchan;
