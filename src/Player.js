import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

let songslist = ["In the Middle", "99 Problems", "Lose Yourself"];
export class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSelected: false, songPlaying: "" };
  }

  handleClick = e => {
    console.log(e);
  };

  render() {
    const element = <FontAwesomeIcon icon={faPlay} />;

    return (
      <div>
        <h1>Music Player</h1>
        <br />
        <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />

        <br />
        <br />
        <h2>Songs List</h2>
        <br />

        <ListGroup as="ul">
          {songslist.map((songs, key) => (
            <div>
              <ListGroup.Item
                as="li"
                key={"song key - " + songs}
                onClick={() => {
                  this.handleClick(songs);
                }}
              >
                <span style={{ paddingRight: 20 }}>{element}</span>{" "}
                <span>{songs}</span>
              </ListGroup.Item>
            </div>
          ))}
        </ListGroup>
      </div>
    );
  }
}
