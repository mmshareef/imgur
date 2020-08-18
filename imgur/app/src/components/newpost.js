import React from 'react';

class  Newpost extends React.Component{
    render(){
        return(
            <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#Newpost">New Post</button>
        <div className="modal fade" id="Newpost" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Add Post</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <input className="photo" placeholder="paste img or url"/><br/>
      <input className="title" placeholder="enter title"/>
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
export default Newpost;