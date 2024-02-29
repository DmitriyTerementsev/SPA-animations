import { useEffect, useState } from 'react';
import './menu.css';
import { ReactComponent as Arrow } from '../../assets/svg/arrow.svg';
import { Option } from '../Option/Option';
import { useAppSelector } from '../../redux/reduxHooks';

interface MenuProps {
  easingValue: string;
  setEasingValue: (e: any) => void;
  repeatValue: boolean;
  setRepeatValue: (x: boolean) => void;
}

const Menu = ({
  easingValue,
  setEasingValue,
  repeatValue,
  setRepeatValue,
}: MenuProps) => {
  //get data from redux (data for inputs[range])
  const data = useAppSelector((item: any) => {
    return item.animation.animation;
  });
  //initial state
  const [options, setOptions] = useState([]);

  //effect for state
  useEffect(() => {
    if (localStorage.getItem('data') !== null) {
      setOptions(JSON.parse(localStorage.getItem('data') || '{}'));
    } else {
      setOptions(data);
    }
  }, [data]);

  //effect for style of inputs (!temporary solution!)
  useEffect(() => {
    for (let e of Array.from(
      document.querySelectorAll(
        'input[type="range"].slider-progress'
      ) as unknown as HTMLCollectionOf<HTMLInputElement>
    )) {
      e.style.setProperty('--value', e.value);
      e.style.setProperty('--min', e.min === '' ? '-100' : e.min);
      e.style.setProperty('--max', e.max === '' ? '100' : e.max);
      e.addEventListener('input', () =>
        e.style.setProperty('--value', e.value)
      );
    }
  });

  return (
    <section className='menu'>
      <div className='menu__container'>
        {options?.map((item: any) => (
          <Option
            key={item.text}
            text={item.text}
            minValue={item.minValue}
            maxValue={item.maxValue}
            step={item.step}
            value={item.value}
            item={item}
          />
        ))}
        <div className='option'>
          <p className='option__text'>Easing</p>
          <div className='select'>
            <select
              className='select'
              onChange={(e) => setEasingValue(e.target.value)}
              defaultValue={easingValue}
            >
              <option value={'ease'}>Ease</option>
              <option value={'linear'}>Linear</option>
              <option value={'ease-in'}>Ease-in</option>
              <option value={'ease-out'}>Ease-out</option>
              <option value={'ease-in-out'}>Ease-in-out</option>
            </select>
            <Arrow />
          </div>
        </div>
        <div className='option'>
          <p className='option__text'>Replay</p>
          <div className='search__toggle'>
            <input
              className='search__checkbox'
              type='checkbox'
              checked={repeatValue}
              onChange={() =>
                repeatValue ? setRepeatValue(false) : setRepeatValue(true)
              }
            ></input>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
