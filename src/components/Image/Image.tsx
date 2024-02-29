import './image.css';
import image from '../../assets/images/image.png';

interface ImageProps {
  isSelectImage: boolean;
  setIsSelectImage: (x: boolean) => void;
  styles: any;
  selectedItem: boolean;
  setSelectedItem: (x: boolean) => void;
  isActivePreview: boolean;
  setIsSelectButton: (x: boolean) => void;
  setIsSelectDescription: (x: boolean) => void;
  setIsSelectTitle: (x: boolean) => void;
}

const Image = ({
  isSelectImage,
  setIsSelectImage,
  styles,
  selectedItem,
  setSelectedItem,
  isActivePreview,
  setIsSelectButton,
  setIsSelectDescription,
  setIsSelectTitle,
}: ImageProps) => {
  //console.log(styles);
  return (
    <>
      <img
        className='image'
        src={image}
        alt='img'
        onClick={() =>
          isSelectImage
            ? (setSelectedItem(false), setIsSelectImage(false))
            : (setIsSelectButton(false),
              setIsSelectDescription(false),
              setIsSelectTitle(false),
              setIsSelectImage(true),
              setSelectedItem(true))
        }
        style={isSelectImage && isActivePreview ? styles : null}
      />
      {isSelectImage && !isActivePreview && (
        <img
          className={isSelectImage && `image selected`}
          src={image}
          alt='img'
          onClick={() =>
            isSelectImage
              ? (setSelectedItem(false), setIsSelectImage(false))
              : (setIsSelectButton(false),
                setIsSelectDescription(false),
                setIsSelectTitle(false),
                setIsSelectImage(true),
                setSelectedItem(true))
          }
          style={isSelectImage ? styles : null}
        />
      )}
    </>
  );
};

export default Image;
