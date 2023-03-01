import { nanoid } from 'nanoid'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

import 'react-circular-progressbar/dist/styles.css'

export default function Cards(props) {
    if (props != undefined || props.length != 0) {
        var mediaType = props.data[0].media_type
    }

    function roundTwoDecimals(num) {
        return Math.round((num + Number.EPSILON)*100)/100
    }

    function percentage(num) {
        return Math.round(Math.round((num + Number.EPSILON)*100)/10)
    }

    const base_url = props.config.base_url
    const backdrop_size = props.config.backdrop_sizes[0]
    const profile_size = props.config.profile_sizes[1]
    const cardsMap = props.data.map(obj => {
        return (
            <div className="card" key={nanoid()}>
                {
                    mediaType==="person"
                    ?
                    <img className="card-img" src={`${base_url + profile_size + obj.profile_path}`} />
                    :
                    <img className="card-img" src={`${base_url + backdrop_size + obj.backdrop_path}`} />
                }
                {
                    mediaType==="person"
                    ?
                    <div className="info-person">
                        <div className="info-person-name">{obj.name}</div>
                        <div className="info-person-text">
                            <span className="info-person-type">
                                Known For:
                            </span>
                            {" " + obj.known_for_department}
                        </div>
                        <div className="info-person-text">
                            <span className="info-person-type">
                                Popularity
                            </span>
                            {" " + obj.popularity}
                        </div>
                    </div>
                    :
                    <div className="info-grid">    
                        <div className="card-rating">
                            <CircularProgressbar
                                strokeWidth={12}
                                styles={buildStyles({textSize: "22px"})}
                                value={percentage(obj.vote_average)}
                                text={`${percentage(obj.vote_average)}%`}
                            />
                        </div>
                        <div className="card-title">
                            {
                                mediaType==="movie"
                                ?
                                <p className="card-info-text">{obj.title}</p>
                                :
                                <p className="card-info-text">{obj.name}</p>
                            }
                        </div>
                        <div className="card-info">
                            <p className="card-info-text">
                                <span className="card-info-text-type">Release Date:</span>
                                {
                                    mediaType==="movie"
                                    ?
                                    " " + new Date(obj.release_date).toDateString()
                                    :
                                    " " + new Date(obj.first_air_date).toDateString()
                                }
                            </p>
                            <p className="card-info-text">
                                <span className="card-info-text-type">Popularity:</span>
                                {" " + roundTwoDecimals(obj.popularity)}
                            </p>
                        </div>
                    </div>
                }
            </div>
        )
    })
    
    return (
        <div className="block">
            {
                mediaType==="movie" ? <h2 className="block-title">Top Movies Today</h2>
                : mediaType==="tv" ? <h2 className="block-title">Top Shows Today</h2>
                : <h2 className="block-title">Top People Today</h2>
            }
            <div className="block-list">
                {cardsMap}
            </div>
        </div>
    )
}