import React, { Component } from 'react';
import {increment, decrement, changeCount} from './../../../ducks/eggs'
import { connect } from 'react-redux'
import './SideBar.css'


class SideBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
       userInput: 0,
    }
  }

  handleUserInput = (e) => {
    this.setState({
      userInput: e.target.value,
    })
  }


  render() {
    console.log(this.state)
    return (
      <div className='sidebar-container'>
        <img className='sidebar-img' src="./newspaper.png" alt="" />
        <h3>News Today</h3>
        <hr />
        <p><a href='/#/hacker-news'>Hacker News</a></p>
        <p><a href='/#/medium'>Medium</a></p>
        <p><a href='/#/reddit'>Reddit</a></p>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
        <input type='number' onChange={this.handleUserInput}/>
        <button onClick={()=>this.props.changeCount(this.state.userInput)}> change</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  increment,
  decrement,
  changeCount
}

export default connect( undefined, mapDispatchToProps)(SideBar);
// argument 1 -  mapStateToProps reading from the store
// argument 2 - mapDispatchToProps to write to the store