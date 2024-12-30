import React, { useState } from "react";


function VideoBox() {
  const [videoSrc, setVideoSrc] = useState("");

  const openModal = () => {
    setVideoSrc("https://www.youtube.com/embed/Kl5B6MBAntI");
  };

  const closeModal = () => {
    setVideoSrc(""); // Reset the video source
  };

  return (
    <>
      <div className="video-box">
        {/* Trigger Button */}
        <button
          type="button"
          className=" video-one__btn"
          data-bs-toggle="modal"
          data-bs-target="#videoModal"
          onClick={openModal}
        >
          <i className="fa fa-play"></i>
        </button>
      </div>

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="videoModal"
        tabIndex="-1"
        aria-labelledby="videoModalLabel"
        aria-hidden="true"
        onClick={closeModal}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="videoModalLabel">
                Watch Video
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">
              {/* YouTube Video Embed */}
              {videoSrc && (
                <div className="ratio ratio-16x9">
                  <iframe
                    src={videoSrc}
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoBox;
