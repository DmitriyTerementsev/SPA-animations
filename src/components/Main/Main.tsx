import './main.css';
import Layout from '../Layout/Layout';
import Menu from '../Menu/Menu';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/reduxHooks';

interface MainProps {
  isActivePreview: boolean;
  setSelectedItem: (x: boolean) => void;
  selectedItem: boolean;
  setIsActivePreview: (x: boolean) => void;
}

const Main = ({
  isActivePreview,
  setSelectedItem,
  selectedItem,
}: MainProps) => {
  //get data from redux (data for inputs[range])
  const data = useAppSelector((item: any) => {
    return item.animation.animation;
  });

  //menu items states
  const [xValue, setXValue] = useState('');
  const [yValue, setYValue] = useState('');
  const [opacityValue, setOpacityValue] = useState('');
  const [scaleValue, setScaleValue] = useState('');
  const [blurValue, setBlurValue] = useState('');
  const [speedValue, setSpeedValue] = useState('');
  const [delayValue, setDelayValue] = useState('');
  const [easingValue, setEasingValue] = useState('ease');
  const [repeatValue, setRepeatValue] = useState(false);
  //states of selected items on layout
  const [isSelectTitle, setIsSelectTitle] = useState(false);
  const [isSelectDescription, setIsSelectDescription] = useState(false);
  const [isSelectButton, setIsSelectButton] = useState(false);
  const [isSelectImage, setIsSelectImage] = useState(false);
  //state for animation style
  const [styles, setStyles] = useState({});
  // //initial
  // const initial = {
  //   transform: `translateX(0px) translateY(0px) scale(1)`,
  //   opacity: `100%`,
  //   filter: `blur(0px)`,
  //   transition: `all 0s ease 0s`,
  //   animationIterationCount: `unset`,
  // };
  //effect for live change animation of copy object
  useEffect(() => {
    setStyles({
      transform: `translateX(${xValue}px) translateY(${yValue}px) scale(${scaleValue})`,
      opacity: `${opacityValue}%`,
      filter: `blur(${blurValue}px)`,
      transition: `all ${speedValue}s ${easingValue} ${delayValue}s`,
    });
    localStorage.setItem('data', JSON.stringify(data));
  }, [
    xValue,
    yValue,
    scaleValue,
    opacityValue,
    blurValue,
    speedValue,
    delayValue,
    easingValue,
    data,
  ]);

  //effect for states of inputs
  useEffect(() => {
    setXValue(data[0].value);
    setYValue(data[1].value);
    setOpacityValue(data[2].value);
    setScaleValue(data[3].value);
    setBlurValue(data[4].value);
    setSpeedValue(data[5].value);
    setDelayValue(data[6].value);
  }, [data]);

  return (
    <main className='main'>
      <Layout
        isSelectTitle={isSelectTitle}
        isSelectButton={isSelectButton}
        isSelectDescription={isSelectDescription}
        isSelectImage={isSelectImage}
        setIsSelectButton={setIsSelectButton}
        setIsSelectDescription={setIsSelectDescription}
        setIsSelectImage={setIsSelectImage}
        setIsSelectTitle={setIsSelectTitle}
        setSelectedItem={setSelectedItem}
        styles={styles}
        isActivePreview={isActivePreview}
        selectedItem={selectedItem}
      />
      <Menu
        easingValue={easingValue}
        setEasingValue={setEasingValue}
        repeatValue={repeatValue}
        setRepeatValue={setRepeatValue}
      />
    </main>
  );
};

export default Main;
