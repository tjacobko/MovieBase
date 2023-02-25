import { nanoid } from 'nanoid'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

import '../index.css'
import 'react-circular-progressbar/dist/styles.css'

export default function ShowCards(props) {
    function roundTwoDecimals(num) {
        return Math.round((num + Number.EPSILON)*100)/100
    }

    function percentage(num) {
        return Math.round(Math.round((num + Number.EPSILON)*100)/10)
    }

    const base_url = props.config.base_url
    const size = props.config.backdrop_sizes[0]
    const showMap = props.shows.map(show => {
        return (
            <div className="movieCard" key={nanoid()}>
                <img className="movieCard-img" src={`${base_url + size + show.backdrop_path}`} />
                <div className="info-grid">    
                    <div className="movieCard-rating">
                        <CircularProgressbar
                            strokeWidth={12}
                            styles={buildStyles({textSize: "22px"})}
                            value={percentage(show.vote_average)}
                            text={`${percentage(show.vote_average)}%`}
                        />
                    </div>
                    <div className="movieCard-title">
                        <p className="movieCard-info-text">{show.name}</p>
                    </div>
                    <div className="movieCard-info">
                        <p className="movieCard-info-text">
                            <span className="movieCard-info-text-type">Release Date:</span>
                            {" " + new Date(show.release_date).toDateString()}
                        </p>
                        <p className="movieCard-info-text">
                            <span className="movieCard-info-text-type">Popularity:</span>
                            {" " + roundTwoDecimals(show.popularity)}
                        </p>
                    </div>
                </div>
            </div>
        )
    })
    
    return (
        <div className="block">
            <h2 className="block-title">Top Shows Today</h2>
            <div className="block-list">
                {showMap}
            </div>
        </div>
    )
}