import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
	static defaultProps = {
		country: 'in',
		pageSize: 8,
		category: 'general',
		apiKey: '8b783583d107415c8a6fdc488fffd822',

	}
	static propTypes = {
		country: PropTypes.string,
		pageSize: PropTypes.number,
		category: PropTypes.string,
	}
	capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			loading: false,
			page: 1,
			totalResults: 0
		}
		document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMania`;
	}
	async updateNews() {
		this.props.setProgress(10);
		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json()
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
		})
		this.props.setProgress(100);
	}
	async componentDidMount() {
		this.updateNews();
	}

	//handlePrevClick = async () => {
	//	this.setState({ page: this.state.page - 1 });
	//	this.updateNews();
	//}

	//handleNextClick = async () => {
	//	this.setState({ page: this.state.page + 1 });
	//	this.updateNews();
	//}

	fetchMoreData = async () => {
		this.setState({ page: this.state.page + 1 })
		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		//this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json()
		this.setState({
			articles: this.state.articles.concat(parsedData.articles),
			totalResults: parsedData.totalResults,
			//loading: false,
		})
	};

	render() {
		return (
			<>
				{/*<div className='container my-3 mx-5'>*/}
				<h1 className='text-info fw-bold my-5 pt-5 text-center'>NewsMania - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>

				{/*<div className="container d-flex justify-content-between">
					<button type="button" disabled={this.state.page <= 1} className="btn btn-info" onClick={this.handlePrevClick}>&larr; Previous</button>
					<button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-info" onClick={this.handleNextClick}>Next &rarr;</button>
				</div>*/}

				{this.state.loading && < Loader />}
				<InfiniteScroll
					dataLength={this.state.articles.length}
					next={this.fetchMoreData}
					hasMore={this.state.articles.length !== this.state.totalResults}
					loader={<Loader />}
				>
					<div className="container">
						<div className="row justify-content-between my-3">
							{this.state.articles.map((element) => {
								return <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={element.url}>
									< NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt ? element.publishedAt : ""} source={element.source.name ? element.source.name : "Unknown source"} />
								</div>
							})}
						</div>
					</div>
				</InfiniteScroll>
				{/*</div >*/}
			</>
		)
	}
}

export default News
