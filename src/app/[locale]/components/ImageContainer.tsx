import React from 'react';
type Dim = 'img-sm' | 'img-md' | 'img-lg';
interface ImageContainerProps {
  children: React.ReactNode;
  isContain?: boolean; 
  dim?: Dim;
  key?: number | string
  classNames?: string; // Making classNames optional
}

const ImageContainer: React.FC<ImageContainerProps> = ({ children, key="", isContain=false, dim, classNames = '' }) => {
  return <div key={key} className={`${dim ? dim : ""} ${isContain ? "object-contain" : "object-cover"} ${classNames}`}>{children}</div>;
};

export default ImageContainer;