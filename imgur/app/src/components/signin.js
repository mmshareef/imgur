import React from 'react';

class  Signin extends React.Component{
    render(){
        return(
            <div>
            <button type="button" className="btn btn-primary" style = {{marginRight:"30px"}} data-toggle="modal" data-target="#Signin">Sign in</button>
        <div class="modal fade" id="Signin" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Enter below details</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <input className="username" placeholder=" Email"/><br/>
      <input className="password" placeholder="Password"/>
      </div>
      <div className="modal-footer">
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
export default Signin;