function Hero(){
	return(
	<div className="container">
		<img src="img/logo.png" alt=""/>
		<h1>React</h1>
		<p>My first React application</p>
	</div>
	);
}

ReactDOM.render(<Hero />, document.getElementById('root'));