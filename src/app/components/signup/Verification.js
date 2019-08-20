import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { verifyUser } from '../../actions/user';

class Verfication extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.verifyUser({ 'userId': this.props.match.params.userId }, this.props.history);
    }

    render() {
        return (<div></div>);
    }
}

const mapDispatchToProps = dispatch =>
    ({ actions: bindActionCreators({ verifyUser }, dispatch) });

export default connect(null, mapDispatchToProps)(Verfication);