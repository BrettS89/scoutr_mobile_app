import PurchaseTokens from '../components/purchaseTokens';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tokensActions from '../redux/actions/user';

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...tokensActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(PurchaseTokens);
