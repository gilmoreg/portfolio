/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Anikunchan from './Repos/Anikunchan';
import Ani2Mal from './Repos/Ani2Mal';
import Condictor from './Repos/Condictor';
import Pick from './Repos/Pick';
import Referendus from './Repos/Referendus';
import SteamBattle from './Repos/SteamBattle';
import './Preview.css';

const Preview = (props) => {
  let repo;
  switch (props.repo.name) {
    case 'pick': repo = <Pick close={props.close} />; break;
    case 'anikunchan': repo = <Anikunchan close={props.close} />; break;
    case 'condictor': repo = <Condictor close={props.close} />; break;
    case 'referendus': repo = <Referendus close={props.close} />; break;
    case 'steam-battle': repo = <SteamBattle close={props.close} />; break;
    case 'ani2mal': repo = <Ani2Mal close={props.close} />; break;
    default: return null;
  }

  return (
    <section className="Preview">
      {repo}
    </section>
  );
};

Preview.defaultProps = {
  repo: {},
};

Preview.propTypes = {
  repo: PropTypes.object,
  close: PropTypes.func.isRequired,
};

export default Preview;
