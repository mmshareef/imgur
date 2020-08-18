import React from 'react';

class Com extends React.Component {
  state = {
    upvotes: this.props.data.upvotes,
    views: this.props.data.views
  }
  incrementupvotes =()=> {
    this.setState({
      upvotes: this.state.upvotes+1 
    })
  }
  incrementviews =()=> {
    this.setState({
      views: this.state.views+1
    })
  }
  render(){
  return (
    <div>
      <div onClick= {this.incrementviews}className="col-sm-3" style ={{width:"240px !important", marginBottom:"20px"}}  type="button" data-toggle="modal" data-target={`#post${this.props.data.id}`}>
          <img className="firstimage" src={this.props.data.image}/>
            <div className ="content">
              <p >{this.props.data.title}</p>
              <ul>
                  <div className="icons">
                  <li><img className="eye" src="/images/eye.jpg"/>{this.state.views}</li>
                  <li><img className="eye" src="/images/msg.png"/>{this.props.data.comments}</li>
                  <li><img className="eye" src="/images/uparrow.jpg"/>{this.state.upvotes}</li>
                  </div>
              </ul>
          </div>
      </div>
      
<div class="modal fade" id={`post${this.props.data.id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLongTitle">{this.props.data.title}</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <div  style ={{width:"400px !important",}}>
          <img className="firstimage" src={this.props.data.image}/>
            <div className ="content">
              <p >{this.props.data.title}</p>
              <ul>
                  <div className="icons">
                  <li><img className="eye" src="/images/eye.jpg"/>{this.state.views}</li>
                  <li><img className="eye" src="/images/msg.png"/>{this.props.data.comments}</li>
                  <li><a onClick = {this.incrementupvotes}><img className="eye" src="/images/uparrow.jpg"/></a>{this.state.upvotes}</li>
                  </div>
              </ul>
          </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>
</div>
</div>
  );
}
}
export default Com;
