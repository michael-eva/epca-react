import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

const isHlsSource = (src) => src.endsWith('.m3u8');

const HLSPlayer = ({
  src,
  autoPlay = true,
  muted = true,
  loop = true,
  controls = false,
  className = '',
  poster = '',
}) => {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      if (autoPlay) {
        video.play().catch((error) => {
          console.error('Error attempting to play:', error);
        });
      }
    };

    const handleVideoError = () => {
      console.error('Video failed to load:', src);
      setHasError(true);
    };

    video.addEventListener('error', handleVideoError);

    if (isHlsSource(src)) {
      if (Hls.isSupported()) {
        const hls = new Hls({ enableWorker: true });
        hlsRef.current = hls;

        hls.loadSource(src);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, playVideo);

        hls.on(Hls.Events.ERROR, (_event, data) => {
          if (data.fatal) {
            console.error('HLS fatal error:', data);
            setHasError(true);
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                hls.startLoad();
                break;
              case Hls.ErrorTypes.MEDIA_ERROR:
                hls.recoverMediaError();
                break;
              default:
                hls.destroy();
                hlsRef.current = null;
                break;
            }
          }
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
        playVideo();
      } else {
        console.error('HLS is not supported in this browser');
        setHasError(true);
      }
    } else {
      video.src = src;
      playVideo();
    }

    return () => {
      video.removeEventListener('error', handleVideoError);
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [src, autoPlay]);

  if (hasError && poster) {
    return (
      <img
        src={poster}
        alt=""
        className={`w-full h-full object-cover ${className}`}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className={`w-full h-full object-cover ${className}`}
      playsInline
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      controls={controls}
      poster={poster}
      preload="auto"
    />
  );
};

export default HLSPlayer;
