import React, {Component} from 'react';
import axios from 'axios';

export default class EditMovie extends Component {

constructor(props) {
    super(props);

    this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
    this.onChangeMovieOverview = this.onChangeMovieOverview.bind(this);
    this.onChangeMovieReleaseDate = this.onChangeMovieReleaseDate.bind(this);
    this.onChangeMovieVoteAverage = this.onChangeMovieVoteAverage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        title: String,
        overview: String,
        releaseDate: String,
        voteAverage: Number
    }
}

componentDidMount() {
    axios.get('http://json-api-amt.herokuapp.com/movie'+this.props.match.params.id)
        .then(response => {
            this.setState({
                title: response.data.title,
                overview: response.data.overview,
                releaseDate: response.data.releaseDate,
                voteAverage: response.data.voteAverage
            })
        })
        .catch(function(error) {
            console.log(error)
        })
}

onChangeMovieTitle(e) {
    this.setState({
        title: e.target.value,
    });
}

onChangeMovieOverview(e) {
    this.setState({
        overview: e.target.value,
    });
}

onChangeMovieReleaseDate(e) {
    this.setState({
        releaseDate: e.target.value,
    });
}

onChangeMovieVoteAverage(e) {
    this.setState({
        voteAverage: e.target.value,
    });
}

onSubmit(e) {
    e.preventDefault();
    const obj = {
        title: this.state.title,
        overview: this.state.overview,
        releaseDate: this.state.releaseDate,
        voteAverage: this.state.voteAverage
    };
    axios.post('http://json-api-amt.herokuapp.com/movie/update/'+this.props.match.params.id, obj) //change the routes in API. Make more simple/right
        .then(res => console.log(res.data))

        this.props.history.push('/');
}

    render() {
        return (
            <div>
                <h3>Update Movie</h3>
                <form onSubmit="{this.onSubmit}">
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.title}
                               onChange={this.onChangeMovieTitle} />
                        <label>overview: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.overview}
                               onChange={this.onChangeMovieOverview} />
                        <label>Release Date: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.releaseDate}
                               onChange={this.onChangeMovieReleaseDate} />
                        <label>Vote Average: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.voteAverage}
                               onChange={this.onChangeVoteAverage} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </div> 
                </form>
            </div>
        )
    }
};