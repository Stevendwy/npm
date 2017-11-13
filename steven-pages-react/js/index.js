import React, {Component} from 'react'
import {render} from 'react-dom'
import DPage from './page'

class App extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	current:1, 				//当前显示页
	  	totalPage:8 			//总页码
	  };
	}

	pageClick(num){
		this.setState({
			current:num
		})
	}
	render() {
		
		return (
			<div>
				<DPage 
				  current={this.state.current}
                  totalPage={this.state.totalPage}
                  pageClick={this.pageClick.bind(this)}
				/>
			</div>
			
		)
	}
}

render(<App />, document.getElementById("app"))
