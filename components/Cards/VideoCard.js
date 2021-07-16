import Image from 'next/image';
import ReactPlayer from 'react-player';

const VideoCard = () => {
    return (
      <div>
        <div className="w-full max-w-3xl h-72 player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://prosperworks.wistia.com/medias/tihe7k9xsl"
            width="100%"
            height="100%"
            config={{
              wistia: {
                playerId: "tihe7k9xsl",
                options: {
                  controlsVisibleOnLoad: false,
                  playbar: true,
                  fullscreenButton: true,
                  fitStrategy: "contain",
                  popover: true,
                  videoFoam: false,
                },
              },
            }}
          />
        </div>
      </div>
    );
}

export default VideoCard;