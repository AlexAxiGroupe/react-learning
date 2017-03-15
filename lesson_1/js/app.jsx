var Hero = React.createClass({
	getInitialState: function(){
		return {
			count: 0	
		};
	},
	
	handleClick: function(){
		this.setState({
			count : this.state.count + 1
		});
	},
	render: function(){
		return (
			<div className="container">
				<div className="count">{this.state.count}</div>
				<img src={this.props.imageUrl} onClick={this.handleClick}/>
				<h1>{this.props.title}</h1>
				<p>{this.props.subtitle}</p>
			</div>
		);
	}
});

ReactDOM.render(<Hero 	title='Hello, React'
						subtitle='my first react application'
						imageUrl='img/logo.png'/>, 
						document.getElementById('root'));