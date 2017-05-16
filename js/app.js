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

class News extends React.Component {
	render() {
		var data = this.props.data;
		var newsTemplate;
		data = [];
		if (data && data.length > 0) {
			newsTemplate = data.map(function(item, index) {
				return (
					<div key={index}>
						<p className="news__author{index}">{item.author}:</p>
						<p className="news__text">{item.text}</p>
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
				<strong>Всего новостей: {data.length}</strong>
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
				Всем привет, я компонент App! Я умею отображать новости.
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