import React from 'react';
import {connect} from 'react-redux';

class Redux extends React.Component {
    render(){
        return (
            <div>
                <header>Redux Testing</header>
                Theme {this.props.mode}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    theme: state.mode
})

export default connect(mapStateToProps, null)(Redux);
