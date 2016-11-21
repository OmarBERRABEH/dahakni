import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import DahakniList from '../../components/DahakniList';
// import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';

// Import Actions
import { addDahakniRequest, fetchDahaknies, delteDahakniRequest } from '../../DahakniActions';
import { toggleAddPost } from '../../../App/AppActions';

// Import Selectors
import { getShowAddPost } from '../../../App/AppReducer';
import { getDahaknies } from '../../DahakniReducer';

class DahakniListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDahaknies());
  }

  handleDahakniDelete = dahakni => {
    if (confirm('Do you want to delete this dahakni')) { // eslint-disable-line
      this.props.dispatch(delteDahakniRequest(post));
    }
  };

  handleAddDahakni = (name, title, content) => {
    this.props.dispatch(toggleAddPost());
    this.props.dispatch(addDahakniRequest({ name, title, content }));
  };

  render() {
    return (
      <div>
       <DahakniList dahaknies={this.props.dahaknies}  handleDahakniDelete={this.handleDahakniDelete} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
DahakniListPage.need = [() => { return fetchDahaknies(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPost: getShowAddPost(state),
    dahaknies: getDahaknies(state),
  };
}

DahakniListPage.propTypes = {
  dahaknies: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  showAddPost: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

DahakniListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(DahakniListPage);
