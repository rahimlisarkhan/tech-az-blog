const NewsPageVideoContent = (props) => {

  return (
    <div className="video-content">
      {props.video && (
        <iframe
          src={`https://www.youtube.com/embed/${props.video.split('/').reverse()[0]}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default NewsPageVideoContent;
