import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Movie = props => (
    <tr>
        <td>{props.movie.title}</td>
        <td>{props.movie.overview}</td>
        <td>{props.movie.releaseDate}</td>
        <td>{props.movie.voteAverage}</td>
        <td>
            <Link to={"/movie/"+props.movie._id}>Edit</Link>
        </td>
    </tr>
)

export default class MoviesList extends Component {

    constructor(props) {
        super(props);
        this.state = { movies: []};
    }

    componentDidMount() {
        axios.get('https://json-api-amt.herokuapp.com/movie')
            .then(response => {
                this.setState({movies: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

movieList() {
    return this.state.movies.map(function(currentMovie, index) {
        return <Movie movie={currentMovie} key={index}/>
    })
}

     render() {
         return (
            <div>
                <h3>Movies List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Overview</th>
                            <th>Release Date</th>
                            <th>Vote Average</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.movieList() }
                    </tbody>
                </table>
            </div>
         )
     }
};

// https://json-api-amt.herokuapp.com/movie