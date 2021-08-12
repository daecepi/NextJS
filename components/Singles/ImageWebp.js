import { React } from 'react';

const ImageWebpElement = ({ baseUrl, baseExtention, optimizationUrl, altText, classes, styles }) => {

  return (
    <picture>
      <source type={`image/webp`} srcset={optimizationUrl} alt={ altText }  />
      {/*<source type={`image/${baseExtention}`} srcset={baseUrl} alt={ altText }  />*/}
      <img className={ classes } style={styles} src={baseUrl}  alt={ altText } />
    </picture>
  );
};

export default ImageWebpElement