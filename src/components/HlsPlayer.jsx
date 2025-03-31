import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const HLSPlayer = ({ src, autoPlay = true, muted = true, loop = true, controls = false, className = '' }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    let hls;
    
    const initPlayer = () => {
      const video = videoRef.current;
      
      if (video) {
        if (Hls.isSupported()) {
          hls = new Hls({
            enableWorker: true,
            lowLatencyMode: true,
          });
          
          hls.loadSource(src);
          hls.attachMedia(video);
          
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            if (autoPlay) {
              video.play().catch(error => {
                console.error('Error attempting to play:', error);
              });
            }
          });
          
          hls.on(Hls.Events.ERROR, (event, data) => {
            console.error('HLS Error:', data);
            console.error('Error details:', data.details);
            if (data.response) console.error('Error response:', data.response);
            
            if (data.fatal) {
              switch (data.type) {
                case Hls.ErrorTypes.NETWORK_ERROR:
                  console.log('Network error, trying to recover...');
                  hls.startLoad();
                  break;
                case Hls.ErrorTypes.MEDIA_ERROR:
                  console.log('Media error, trying to recover...');
                  hls.recoverMediaError();
                  break;
                default:
                  console.error('Fatal error, destroying HLS instance:', data);
                  hls.destroy();
                  break;
              }
            }
          });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          // For Safari, which has native HLS support
          video.src = src;
          
          if (autoPlay) {
            video.play().catch(error => {
              console.error('Error attempting to play:', error);
            });
          }
        } else {
          console.error('HLS is not supported in this browser');
        }
      }
    };

    initPlayer();

    // Cleanup function to destroy HLS instance when component unmounts
    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src, autoPlay]);

  return (
    <video
      ref={videoRef}
      className={`w-full h-full object-cover ${className}`}
      playsInline
      muted={muted}
      loop={loop}
      controls={controls}
    />
  );
};

export default HLSPlayer;