import React from 'react';

interface ImageContainerProps {
  children: React.ReactNode;
  classNames?: string; // Making classNames optional
}

const ImageContainer: React.FC<ImageContainerProps> = ({ children, classNames = '' }) => {
  return <div className={`img-container ${classNames}`}>{children}</div>;
};

export default ImageContainer;