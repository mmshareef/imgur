import React from 'react';

class  Signup extends React.Component{
    render(){
        return(
            <div>
            <button type="button" className="btn btn-primary" style = {{marginRight:"60px"}} data-toggle="modal" data-target="#Signup">Sign up</button>
        <div className="modal fade" id="Signup" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Enter below details</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <input className="firstname" placeholder=" First name"/><br/>
      <input className="lastname" placeholder="Last name"/><br/>
      <input className="email" placeholder=" Email"/><br/>
      <input className="password" placeholder="Password"/>
      </div>
      <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Enter</button>
      </div>
    </div>
  </div>
</div>
</div>
        )
    }
}
export default Signup;