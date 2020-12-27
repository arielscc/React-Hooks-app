/**
 * @ Este componente presenta un error en la renderización del video
 *    este no se muestra en pantalla
 **/
import React from 'react';

const MediaPlayer = () => {
  return (
    <div>
      <video width="1000" title="video de planeta" controls>
        <source src="video/planeta.mp4" type="mp4" />
      </video>

      <video src="/video/planeta.mp4" controls></video>

      <button>play</button>
    </div>
  );
};

export default MediaPlayer;
