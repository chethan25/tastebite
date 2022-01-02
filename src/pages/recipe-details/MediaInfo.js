import './media-info.css';

const MediaInfo = ({ mealDetails }) => {
  let videoId;
  if (mealDetails.strYoutube === null) {
    videoId = null;
  } else if (typeof mealDetails.strYoutube !== 'undefined') {
    videoId = mealDetails.strYoutube.slice(32);
  }

  return (
    <section id="media-info">
      <h2 className="media-info-title">Media</h2>
      {!videoId ? (
        <p className="no-video">Video Unavailable</p>
      ) : (
        <div className="media-info-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube video"
          />
        </div>
      )}
    </section>
  );
};

export default MediaInfo;
