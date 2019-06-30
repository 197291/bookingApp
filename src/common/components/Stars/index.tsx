import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarR } from '@fortawesome/free-regular-svg-icons';

import { styles } from './styles';

interface Props {
  stars: number;
}

const Stars: React.FC<Props> = (props) => {
  const arr = Array(5).fill(false, 0, 5);
  arr.fill(true, 0, props.stars);

  const classes = styles(props);

  return (
    <div className={classes.root}>
      {!props.stars ? (
        <p style={{ color: '#07c' }}>No stars, but looks good!</p>
      ) : (
        arr.map((s, i) => <FontAwesomeIcon key={`star-${i}`} icon={s ? faStar : faStarR} />)
      )}
    </div>
  );
};

export default Stars;
