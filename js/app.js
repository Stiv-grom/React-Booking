var my_news = [
	{
		author: 'Саша Печкин',
		text: 'В четверг, четвертого числа...',
		bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
	},
	{
		author: 'Просто Вася',
		text: 'Считаю, что $ должен стоить 35 рублей!',
		bigText: 'А евро 42!'
	},
	{
		author: 'Гость',
		text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
		bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
	},
	{
		author: 'Newly',
		text: 'added',
		bigText: 'lorem ipsum hhh'
	}
];

class Article extends React.Component {
	constructor(props) {
		super(props);
		this.state = {visible: false};
		this.readmoreClick = this.readmoreClick.bind(this);
	}
	readmoreClick(e) {
		e.preventDefault();
		this.setState({visible: true});
	}
	render() {
		var data = this.props.data;
		var articleTemplate;
		var visible = this.state.visible; // считываем значение переменной из состояния компонента
		return (
			<div className="article">
				<p className="news__author{index}">{data.author}:</p>
				<p className="news__text">{data.text}</p>
				{/* для ссылки readmore: не показывай ссылку, если visible === true */}
				<a href="#" onClick={this.readmoreClick}  className={'news__readmore ' + (visible ? 'none': '')}>Подробнее</a>
				{/* для большо текста: не показывай текст, если visible === false */}
				<p className={'news__bigText ' + (visible ? '': 'none')}>{data.bigText}</p>
			</div>
		);
	}
};

Article.propTypes = {
	data: React.PropTypes.shape({
		author: React.PropTypes.string.isRequired,
		text: React.PropTypes.string.isRequired,
		bigText: React.PropTypes.string.isRequired
	})
}

class News extends React.Component {
	constructor(props) {
		super(props);
		this.state = {counter: 0};
		this.clickRead = this.clickRead.bind(this);
	}
	clickRead(e) {
		e.preventDefault();
		this.setState({counter: ++this.state.counter});
	}
	render() {
		var data = this.props.data;
		var newsTemplate;
		var counter = this.state.counter;
		//var data=[];
		if (data.length > 0) {
			newsTemplate = data.map(function(item, index) {
				return (
					<div key={index}>
						<Article data={item} />
					</div>
				)
			})
		} else {
			newsTemplate = <p>К сожалению новостей нет</p>
		}
		//console.log(newsTemplate);
		return (
			<div className="news">
				{newsTemplate}
				<strong onClick={this.clickRead} className={'news__count ' + (data.length > 0 ? '':'none') }>Всего новостей: {data.length}</strong>
				<strong>Total count: {counter}</strong>
			</div>
		);
	}
};

News.propTypes = {
	data: React.PropTypes.array.isRequired
}

class Blog extends React.Component {
	render() {
		return (
			<div className="blog">
				Will be our blog
			</div>
		);
	}
};

class TestInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {myValue: ''};
		this.changeInput = this.changeInput.bind(this);
		this.alertClick = this.alertClick.bind(this);
	}
	changeInput(e) {
		e.preventDefault();
		this.setState({myValue: e.target.value});
	}
	alertClick(e) {
		e.preventDefault();
		alert(this.state.myValue);
	}
	render() {
		return (
			<div className="input">
				<input className='test-input' value={this.state.myValue} onChange={this.changeInput} placeholder='введите значение' />
				<button onClick={this.alertClick}>AAAA</button>
			</div>
		);
	}
};


class App extends React.Component {
	render() {
		return (
			<div className="app">
				<h3>Новости</h3>
				<News data={my_news} />
				And blog:
				<Blog />
				<TestInput />
			</div>
		);
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);