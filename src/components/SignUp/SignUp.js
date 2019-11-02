import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions';


import  SignUpForm  from './SignUpForm';
// import  UserType  from './UserType';
// import  HealthStats  from './HealthStats';

class SignUp extends Component{
state = {
    form: [],
    currentStep: 0,
    dropdownOpen: false 
}

onSubmit = form =>{
  
        // this.props.signup(this.state.form)
        // .then(()=>this.props.history.push('/login'))
    // this.setState({
    //    form:[ 
    //     ...this.state.form, 
    //     form
    //    ],
    //    currentStep: this.state.currentStep +1,
    // })
    // console.log(this.state.form)
    this.props.signup(form)
}


render(){
    return(
        <>
         {this.state.currentStep === 0 && <SignUpForm onSubmit={this.onSubmit} />}
         {/* {this.state.currentStep === 1 && <UserType onSubmit={this.onSubmit}  />}  */}
         {/* {this.state.currentStep === 2 && <HealthStats onSubmit={this.onSubmit} />} */}
         {<button onClick={this.onSubmit}>Finish Signing Up</button>}
         </>
    )
}

}

const mapStateToProps = state => ({
    ...state
})

export default connect(
    mapStateToProps,
    { signup }
)(SignUp);