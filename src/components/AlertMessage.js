import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';

class AlertMessage extends React.Component {

    state = {
        showList1 : true,
        msg :this.setState({ msg:this.props.msg }),

    };


    render() {
        return ( <SweetAlert
                type={this.props.type}
                show={this.state.showList1}
                title="Success Data!"
                onConfirm={() => {
                    this.setState({ showList1: false });
                }}
                onCancel={() => {
                    this.setState({ showList1: false });
                }}
                timeout={2000}
                >
                <h1 className="nav-links">{this.props.msg}</h1>
            </SweetAlert>
        );
    }
}

export default AlertMessage;
