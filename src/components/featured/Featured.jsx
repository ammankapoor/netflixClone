import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horro">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://c0.wallpaperflare.com/preview/134/815/708/fantasy-fire-smoke-building.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://www.pinclipart.com/picdir/big/11-116881_beautifully-idea-movie-ticket-svg-transparent-library-movie.png"
          alt=""
        />
        <span className="desc">
          Fast & Furious is a media franchise centered on a series of action
          films that are largely concerned with illegal street racing, heists,
          spies and family. The franchise also includes short films, a
          television series, live shows, video games and theme park attractions.
          It is distributed by Universal Pictures
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
