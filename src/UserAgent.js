import React, { Component } from 'react';
import { loadDataUARequest } from './actions';
import { connect } from 'react-redux';

class UserAgent extends Component {
    render() {
        return (
            <p>
                User-Agent { this.props.data }
                { !this.props.isFetching && <button onClick={() => this.props.loadData()}>Load</button> }
                { this.props.isFetching && <span>Loading...</span> }
            </p>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.ua.isFetching,
        data: state.ua.data,
        error: state.ua.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(loadDataUARequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAgent);
