import { CommonClassProps, Photo } from "../types";

interface PreviewGaleryProps extends CommonClassProps {
    activePhotoIndex: number;
    photos: Photo[];
}

export const PreviewGalery: React.FC<PreviewGaleryProps> = ({
    activePhotoIndex,
    photos,
}) => (
    <div>Preview galery</div>
)