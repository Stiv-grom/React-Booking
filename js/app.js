var my_news = [
	{
		author: 'Саша Печкин',
		text: 'В четверг, четвертого числа...'
	},
	{
		author: 'Просто Вася',
		text: 'Считаю, что $ должен стоить 35 рублей!'
	},
	{
		author: 'Гость',
		text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
	},
	{
		author: 'Newly',
		text: 'added'
	}
];

class Article extends React.Component {
	render() {
		var data = this.props.data;
		var articleTemplate;

		return (
			<div className="article">
				<p className="news__author{index}">{data.author}:</p>
				<p className="news__text">{data.text}</p>
			</div>
		);
	}
};

class News extends React.Component {
	render() {
		var data = this.props.data;
		var newsTemplate;
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
		console.log(newsTemplate);
		return (
			<div className="news">
				{newsTemplate}
				<strong className={'news__count ' + (data.length > 0 ? '':'none') }>Всего новостей: {data.length}</strong>
			</div>
		);
	}
};

class Blog extends React.Component {
	render() {
		return (
			<div className="blog">
				Will be our blog
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
			</div>
		);
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);