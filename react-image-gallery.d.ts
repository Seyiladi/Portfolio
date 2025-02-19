declare module 'react-image-gallery' {
    import { Component } from 'react';
  
    interface ImageGalleryItem {
      original: string;
      thumbnail?: string;
      originalAlt?: string;
      thumbnailAlt?: string;
      originalTitle?: string;
      thumbnailTitle?: string;
      description?: string;
      srcSet?: string;
      sizes?: string;
      renderItem?: () => React.ReactNode;
      renderThumbInner?: () => React.ReactNode;
    }
  
    interface ImageGalleryProps {
      items: ImageGalleryItem[];
      showThumbnails?: boolean;
      showFullscreenButton?: boolean;
      showPlayButton?: boolean;
      startIndex?: number;
      showBullets?: boolean;
      infinite?: boolean;
      showNav?: boolean;
      isRTL?: boolean;
      slideDuration?: number;
      slideInterval?: number;
      slideOnThumbnailOver?: boolean;
      thumbnailPosition?: 'top' | 'right' | 'bottom' | 'left';
      showIndex?: boolean;
      lazyLoad?: boolean;
      onSlide?: (currentIndex: number) => void;
      onScreenChange?: (isFullscreen: boolean) => void;
      onPause?: (currentIndex: number) => void;
      onPlay?: (currentIndex: number) => void;
      onClick?: (event: React.MouseEvent) => void;
      onImageLoad?: (event: React.SyntheticEvent) => void;
      onThumbnailClick?: (event: React.MouseEvent) => void;
      renderCustomControls?: () => React.ReactNode;
      renderLeftNav?: (onClick: () => void, disabled: boolean) => React.ReactNode;
      renderRightNav?: (onClick: () => void, disabled: boolean) => React.ReactNode;
      renderPlayPauseButton?: (onClick: () => void, isPlaying: boolean) => React.ReactNode;
      renderFullscreenButton?: (onClick: () => void, isFullscreen: boolean) => React.ReactNode;
      additionalClass?: string;
      useTranslate3D?: boolean;
      disableArrowKeys?: boolean;
    }
  
    export default class ImageGallery extends Component<ImageGalleryProps> {}
  }
  