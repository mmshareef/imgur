import React from 'react';
import faker from 'faker';
import Newpost from './components/newpost';
import Signin from './components/signin';
import Signup from './components/signup';
import Com from './components/Com';
import './styles/Style.css';
import './App.css';

class  App extends React.Component {
  constructor(props) {
    super(props)
  }
  repeat = () => {
    let arr = []
    for (let i = 0; i < 4; i++){
      let post = { 
        id:arr.length,
        image:faker.image.image(),
        title:`title ${arr.length}`,
        upvotes:0,
        comments:0,
        views:0
      }
      arr.push(<Com data = {post}/>)
    }
    for (let i = 0; i < 4; i++){
      let post = { 
        id:arr.length,
        image:faker.image.image(),
        title:`title ${arr.length}`,
        upvotes:0,
        comments:0,
        views:0
      }
      arr.push(<Com data = {post}/>)
    }  
    return arr;
  }
render() {
  return (
    <div className="App">
    <nav className="navbar">
    <div className = "box">
    <div className="imgur">imgur</div>
    <Newpost/>
    </div>
    <div className = "box">
    <Signin/>
    <Signup/>
    </div>
    </nav>
    <div className="repeat container"><div className="row">{this.repeat()}</div></div>
    </div>
  );
}
}

export default App;
