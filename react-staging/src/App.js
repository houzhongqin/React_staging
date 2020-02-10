import React, { Component } from 'react'
import Add from './components/Add/Add'
import List from './components/List/list'
export default class App extends Component {
   
    render() {
        return (
            <div>
                <header className="site-header jumbotron">
                <div className="container">
                    <div className="row">
                    <div className="col-xs-12">
                        <h1>请发表对React的评论</h1>
                    </div>
                    </div>
                </div>
                </header>
                <div className="container">
                    <Add/>
                    <List/>
                </div>
            </div>
        )
    }
}
