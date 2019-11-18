import React, {Component} from 'react';
import axios from 'axios';

export default class CreateMovie extends Component {

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

    onChangeMovieTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeMovieOverview(e) {
        this.setState({
            overview: e.target.value
        });
    }

    onChangeMovieReleaseDate(e) {
        this.setState({
            releaseDate: e.target.value
        });
    }

    onChangeMovieVoteAverage(e) {
        this.setState({
            voteAverage: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
            console.log(`Form Submitted:`);
            console.log(`Movie Title: ${this.state.title}`);
            console.log(`Movie Overview: ${this.state.overview}`);
            console.log(`Movie Release Date: ${this.state.releaseDate}`);
            console.log(`Movie Vote Average: ${this.state.voteAverage}`);
//on submit logic

const newMovie = {
    title: this.state.title,
    overview: this.state.overview,
    releaseDate: this.state.releaseDate,
    voteAverage: this.state.voteAverage
}

axios.post('localhost:4000/movie', newMovie)
    .then(res => console.log(res.data));

        this.setState({
            title: String,
            overview: String,
            releaseDate: String,
            voteAverage: Number
        })
    }


    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Movie</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.title}
                               onChange={this.onChangeMovieTitle}/>
                    </div>
                    <div className="form-group">
                        <label>Overview: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.overview}
                               onChange={this.onChangeMovieOverview}/>
                    </div>
                    <div className="form-group">
                        <label>Release Date: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.releaseDate}
                               onChange={this.onChangeMovieReleaseDate}/>
                    </div>
                    <div className="form-group">
                        <label>Vote Average: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.voteAverage}
                               onChange={this.onChangeMovieVoteAverage}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Movie" className="btn btn-primary"/>
                    </div> 
                </form>
            </div>
        )
    }
}