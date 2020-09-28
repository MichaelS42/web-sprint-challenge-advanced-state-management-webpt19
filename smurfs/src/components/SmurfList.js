import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';

import Smurf from './Smurf';

const SmurfList = (props) => {
    useEffect(() => {
        props.fetchSmurfs()
    }, [])

    return (
        <div> {props.smurfs.map(smurf => (<Smurf smurf={smurf}/> ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList)