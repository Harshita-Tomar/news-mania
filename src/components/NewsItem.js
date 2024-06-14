import React, { Component } from 'react'

export class NewsItem extends Component {

	render() {
		let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
		return (
			<>
				<div className="my-3">
					<div className="card" style={{ height: "29rem" }}>
						<div className="position-absolute d-flex justify-content-end right-0">
							<span className=" badge rounded-pill bg-info"  >{source}
							</span>
						</div>
						<img src={imageUrl ? imageUrl : "https://www.livemint.com/lm-img/img/2023/05/18/600x338/asus_gaming_laptops_1684382334219_1684382342976.webp"} className="card-img-top" alt="..." style={{ height: "160px" }} />
						<div className="card-body">
							<h5 className="card-title text-info">{title}...</h5>
							<p className="card-text fw-light text-body-muted">{description}...</p>
							<p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()} </small></p>
							<a href={newsUrl} target="_blank" className="btn btn-sm btn-outline-info float-end">more details</a>
						</div>
					</div>
				</div >
			</>
		)
	}
}

export default NewsItem
