import Text from '../Text/Text';
import Image from '../Image/Image';
import { useEffect } from 'react';

interface LayoutProps {
  isSelectTitle: boolean;
  isSelectButton: boolean;
  isSelectDescription: boolean;
  isSelectImage: boolean;
  setIsSelectButton: (x: boolean) => void;
  setIsSelectDescription: (x: boolean) => void;
  setIsSelectImage: (x: boolean) => void;
  setIsSelectTitle: (x: boolean) => void;
  styles: any;
  selectedItem: boolean;
  setSelectedItem: (x: boolean) => void;
  isActivePreview: boolean;
}

const Layout = ({
  isSelectTitle,
  isSelectButton,
  isSelectDescription,
  isSelectImage,
  setIsSelectButton,
  setIsSelectDescription,
  setIsSelectImage,
  setIsSelectTitle,
  styles,
  selectedItem,
  setSelectedItem,
  isActivePreview,
}: LayoutProps) => {
  useEffect(() => {
    const onClick = (e: any) =>
      e.target.className === `layout`
        ? (setIsSelectButton(false),
          setIsSelectDescription(false),
          setIsSelectImage(false),
          setIsSelectTitle(false),
          setSelectedItem(false))
        : null;
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  });

  return (
    <section className='layout'>
      <Text
        isSelectTitle={isSelectTitle}
        isSelectButton={isSelectButton}
        isSelectDescription={isSelectDescription}
        setIsSelectButton={setIsSelectButton}
        setIsSelectDescription={setIsSelectDescription}
        setIsSelectTitle={setIsSelectTitle}
        styles={styles}
        setIsSelectImage={setIsSelectImage}
        isActivePreview={isActivePreview}
        setSelectedItem={setSelectedItem}
      />
      <Image
        isSelectImage={isSelectImage}
        setIsSelectImage={setIsSelectImage}
        styles={styles}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        isActivePreview={isActivePreview}
        setIsSelectButton={setIsSelectButton}
        setIsSelectDescription={setIsSelectDescription}
        setIsSelectTitle={setIsSelectTitle}
      />
    </section>
  );
};

export default Layout;
