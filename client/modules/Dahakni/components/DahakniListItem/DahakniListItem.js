import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './DahakniListItem.css';

function DahakniListItem(props) {
  return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
        <Link to={`/dahaknies/${props.dahakni.cuid}`} >
          {props.dahakni.title}
        </Link>
      </h3>
      <p className={styles['post-desc']}>{props.dahakni.content}</p>
      <p className={styles['post-action']}><a href="#" onClick={props.onDelete}><FormattedMessage id="deletePost" /></a></p>
      <hr className={styles.divider} />
    </div>
  );
}

DahakniListItem.propTypes = {
  dahakni: PropTypes.shape({
    content: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DahakniListItem;
