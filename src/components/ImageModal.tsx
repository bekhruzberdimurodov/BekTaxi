
import React from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  alt: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc, alt }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative max-w-4xl max-h-[90vh] m-4">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <X className="h-6 w-6 text-gray-700" />
        </button>
        <img
          src={imageSrc}
          alt={alt}
          className="max-w-full max-h-full rounded-2xl shadow-2xl animate-scale-in"
        />
      </div>
      <div 
        className="absolute inset-0 -z-10"
        onClick={onClose}
      />
    </div>
  );
};

export default ImageModal;
