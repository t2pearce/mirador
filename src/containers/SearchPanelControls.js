import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { withPlugins } from '../extend/withPlugins';
import { SearchPanelControls } from '../components/SearchPanelControls';
import * as actions from '../state/actions';
import {
  getManifestAutocompleteService,
  getManifestSearchService,
  getSearchQuery,
} from '../state/selectors';

/**
 * mapStateToProps - used to hook up connect to state
 * @memberof SearchPanelControls
 * @private
 */
const mapStateToProps = (state, { companionWindowId, windowId }) => ({
  autocompleteService: getManifestAutocompleteService(state, { windowId }),
  query: getSearchQuery(state, { companionWindowId, windowId }),
  searchService: getManifestSearchService(state, { windowId }),
});

/**
 * mapDispatchToProps - to hook up connect
 * @memberof SearchPanelControls
 * @private
 */
const mapDispatchToProps = {
  fetchSearch: actions.fetchSearch,
};

/** */
const styles = theme => ({
  searchInput: {
    paddingBottom: theme.spacing(1),
    paddingRight: theme.spacing(1.5),
  },
  suggestions: {
    position: 'absolute',
    zIndex: theme.zIndex.modal - 1,
  },
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
  withTranslation(),
  withPlugins('SearchPanelControls'),
);

export default enhance(SearchPanelControls);
