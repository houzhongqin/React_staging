import React,{Component} from 'react';
import Search from './components/Search/Search'
import List from './components/List/list'
export default class App extends Component{
  render(){
    return (
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <Search/>
        </section>
        <List/>
      </div>)
  }
  
}


