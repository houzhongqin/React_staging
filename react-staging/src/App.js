import React,{Component} from 'react'
import About from './components/About'
import Home from './components/Home'
import {Link, Route} from 'react-router-dom'
export default class App extends Component{
  render(){
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <Link className="list-group-item"  to="/About">About</Link>
              <Link className="list-group-item" to="/Home" >Home</Link>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
             <Route path='/About' component={About}/>
             <Route path='/Home' component={Home}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
