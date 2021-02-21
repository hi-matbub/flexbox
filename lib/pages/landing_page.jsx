import React, {useState} from 'react';
// comps
import ControlPanel from '../comps/control_panel';
import Landing from '../comps/landing';
import ControlResponse from '../comps/control_response';
// styles
import '../styles/landing_page.css';

const LandingPage = () => {
  const [data, setData] = useState([]);

  return (
    <main className="main">
      <Landing />
      <ControlPanel handleData={(i) => setData(i)} />
      <ControlResponse data={data} />
      <footer>
        <p>2020</p>
      </footer>
    </main>
  );
};

export default LandingPage;
