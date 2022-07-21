import React from "react";
import './style.css';
import {connect} from "react-redux"







// firebase facebook login


import {set_data,facebook_login} from '../../store/action'
class Home extends React.Component{
  render(){
    let user = {name:"umair",email:"umair@gmail.com"}
    return(
      <div>
        <h2>Home</h2>
        <button onClick={()=>this.props.facebook_login()}>FACEBOOK LOGIN</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  users: state.users
});
const mapDispatchToProps = (dispatch) => ({
  setdata: () => dispatch(set_data()),
  facebook_login: () => dispatch(facebook_login())
})
export default connect(mapStateToProps,mapDispatchToProps) (Home)



