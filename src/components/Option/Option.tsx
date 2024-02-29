import { useEffect, useState } from 'react';
import './option.css';
import { useAppDispatch } from '../../redux/reduxHooks';
import { editAnimation } from '../../redux/animationThunk';

interface OptionProps {
  text: string;
  minValue: string;
  maxValue: string;
  step: string;
  value: string;
  item: any;
}

export const Option = ({ text, minValue, maxValue, step, value, item }:OptionProps) => {

  const dispatch = useAppDispatch();

  const [itemValue, setItemValue] = useState(value);

  useEffect(() => {
    let data = { value: itemValue, id: item.id };
    dispatch(editAnimation(data));
  }, [itemValue]);

  return (
    <div className='option'>
      <p className='option__text'>{text}</p>
      <input
        className='option__input slider-progress'
        type='range'
        min={minValue}
        max={maxValue}
        step={step}
        value={itemValue}
        onChange={(e) => setItemValue(e.target.value)}
      />
      {text === 'Opacity' ? (
        <p className='option__value'>{itemValue}%</p>
      ) : text === 'Speed' || text === 'Delay' ? (
        <p className='option__value'>{itemValue}s</p>
      ) : (
        <p className='option__value'>{itemValue}</p>
      )}
    </div>
  );
};
