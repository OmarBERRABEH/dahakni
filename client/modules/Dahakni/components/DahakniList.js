import React, { PropTypes } from 'react';

// Import Components
import DahakniListItem from './DahakniListItem/DahakniListItem';

function DahakniList(props) {
  return (
    <div className="listView">
      {
        props.dahaknies.map(dahakni => (
          <DahakniListItem
            dahakni={dahakni}
            key={dahakni.cuid}
            onDelete={() => props.handleDeletePost(dahakni.cuid)}
          />
        ))
      }
    </div>
  );
}

DahakniList.propTypes = {
  dahaknies: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDahakniDelete: PropTypes.func.isRequired,
};

export default DahakniList;
