import { Photo } from "./types";
import style from "./index.module.scss";
import { useState } from "react";
import { MainPhoto } from "./MainPhoto";
import { PreviewGalery } from "./PreviewGalery";
import { Navigation } from "./Navigation";

interface ArtGaleryProps {
  photos: Photo[];
}

export const ArtGalery: React.FC<ArtGaleryProps> = ({ photos }) => {
  if (!photos.length) {
    return null;
  }

  const [indexActivePhoto, setIndexActivePhoto] = useState(0);
  const activePhoto = photos[indexActivePhoto];
  const prevPhoto = photos[indexActivePhoto - 1];
  const nextPhoto = photos[indexActivePhoto + 1];

  return (
    <div className={style.artGalery}>
      <div className={style.artGaleryContainer}>
        <MainPhoto 
        prevPhoto={prevPhoto}
        activePhoto={activePhoto}
        nextPhoto={nextPhoto}
        />
        <Navigation 
        className={style.artGaleryNavigation}
        disabledPrev={!prevPhoto}
        disabledNext={!nextPhoto}
        onPrevClick = {() => {
          setIndexActivePhoto(indexActivePhoto - 1);
        }}
        onNextClick = {() => {
          setIndexActivePhoto(indexActivePhoto + 1);
        }}
        />
      </div>
      <PreviewGalery 
      activePhotoIndex={indexActivePhoto}
      photos={photos}
      className={style.artGaleryPreviewList}/>
    </div>
  );
};
