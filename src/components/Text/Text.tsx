import './text.css';

interface TextProps {
  isSelectTitle: boolean;
  isSelectButton: boolean;
  isSelectDescription: boolean;
  setIsSelectButton: (x: boolean) => void;
  setIsSelectDescription: (x: boolean) => void;
  setIsSelectTitle: (x: boolean) => void;
  styles: any;
  setIsSelectImage: (x: boolean) => void;
  isActivePreview: boolean;
  setSelectedItem: (x: boolean) => void;
}

const Text = ({
  isSelectTitle,
  isSelectButton,
  isSelectDescription,
  setIsSelectButton,
  setIsSelectDescription,
  setIsSelectTitle,
  styles,
  setIsSelectImage,
  isActivePreview,
  setSelectedItem,
}: TextProps) => {
  return (
    <div className='container'>
      <h1
        style={isSelectTitle && isActivePreview ? styles : null}
        className={isSelectTitle ? `title` : `title`}
        onClick={() =>
          isSelectTitle
            ? (setIsSelectTitle(false), setSelectedItem(false))
            : (setIsSelectButton(false),
              setIsSelectDescription(false),
              setIsSelectTitle(true),
              setIsSelectImage(false),
              setSelectedItem(true))
        }
      >
        Animation Settings
      </h1>
      {isSelectTitle && !isActivePreview && (
        <h1
          style={isSelectTitle ? styles : null}
          className={isSelectTitle && `title selected`}
          onClick={() =>
            isSelectTitle
              ? (setIsSelectTitle(false), setSelectedItem(false))
              : (setIsSelectButton(false),
                setIsSelectDescription(false),
                setIsSelectTitle(true),
                setIsSelectImage(false),
                setSelectedItem(true))
          }
        >
          Animation Settings
        </h1>
      )}
      <p
        style={isSelectDescription && isActivePreview ? styles : null}
        className={`description`}
        onClick={() =>
          isSelectDescription
            ? (setIsSelectDescription(false), setSelectedItem(false))
            : (setIsSelectButton(false),
              setIsSelectDescription(true),
              setIsSelectTitle(false),
              setIsSelectImage(false),
              setSelectedItem(true))
        }
      >
        The user should have the option to select any element on the page and
        set up its animation using the controls in the right panel. A dotted
        line will show the element's position and state before the animation
        begins, giving the user a clear idea of how the animation will appear.
        The preview button on the top panel will open the result in a new tab.
      </p>
      {isSelectDescription && !isActivePreview && (
        <p
          style={isSelectDescription ? styles : null}
          className={isSelectDescription && `description selected`}
          onClick={() =>
            isSelectDescription
              ? (setIsSelectDescription(false), setSelectedItem(false))
              : (setIsSelectButton(false),
                setIsSelectDescription(true),
                setIsSelectTitle(false),
                setIsSelectImage(false),
                setSelectedItem(true))
          }
        >
          The user should have the option to select any element on the page and
          set up its animation using the controls in the right panel. A dotted
          line will show the element's position and state before the animation
          begins, giving the user a clear idea of how the animation will appear.
          The preview button on the top panel will open the result in a new tab.
        </p>
      )}
      <button
        style={isSelectButton && isActivePreview ? styles : null}
        className='button'
        onClick={() =>
          isSelectButton
            ? (setIsSelectButton(false), setSelectedItem(false))
            : (setIsSelectButton(true),
              setIsSelectDescription(false),
              setIsSelectTitle(false),
              setIsSelectImage(false),
              setSelectedItem(true))
        }
      >
        Button
      </button>
      {isSelectButton && !isActivePreview && (
        <button
          style={isSelectButton ? styles : null}
          className='button selected'
          onClick={() =>
            isSelectButton
              ? (setIsSelectButton(false), setSelectedItem(false))
              : (setIsSelectButton(true),
                setIsSelectDescription(false),
                setIsSelectTitle(false),
                setIsSelectImage(false),
                setSelectedItem(true))
          }
        >
          Button
        </button>
      )}
    </div>
  );
};

export default Text;
