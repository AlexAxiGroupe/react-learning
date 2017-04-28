var Nav = [
	{
		id : 1,
		text : 'item1',
		href : 'http://axi.in.ua'
	},
	{
		id : 2,
		text : 'item2',
		href : 'http://axi.in.ua'
	},
	{
		id : 3,
		text : 'item3',
		href : 'http://axi.in.ua'
	},
	{
		id : 4,
		text : 'item4',
		href : 'http://axi.in.ua'
	},
	{
		id : 5,
		text : 'item5',
		href : 'http://axi.in.ua'
	},
	{
		id : 6,
		text : 'item6',
		href : 'http://axi.in.ua'
	},
	{
		id : 7,
		text : 'item7',
		href : 'http://axi.in.ua'
	}
];

var Link = React.createClass({
	render: function(){
		return(
			<a href={this.props.href} className='nav__link'> {this.props.text} </a>
		);
	}
});
var Links = React.createClass({
	render: function(){
		return(
			<nav className='nav'>
				{
					Nav.map(function(el){
						return <Link 
							key={el.id}
							text={el.text}
							href={el.href}
						/>
					})
				}
			</nav>
		);
	}
});

ReactDOM.render(
	<Links/>,
	document.getElementById("content")
);
















