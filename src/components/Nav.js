import React from 'react';
import {Link} from 'react-router-dom';

function Nav(props) {
    const lis = []
    for(let i=0; i<props.topics.length; i++){
      let t = props.topics[i];
      lis.push(<li key={t.id}>
        <Link to={t.path}>
          {t.title}
        </Link></li>)
    }
    return <nav>
      <ol> 
        {lis}
      </ol>
    </nav>
  }

  export default Nav;

  