var image = React.createElement('img',{src : '../img/logo.png'});
var title = React.createElement('h1', null, 'Hello, React!');
var subtitle = React.createElement('h2', null, 'My first react application')
var container = React.createElement('div', {className : 'container'}, image, title, subtitle);
ReactDOM.render(container, document.getElementById('root'));