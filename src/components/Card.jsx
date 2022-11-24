import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setOpen } from '../store/generalStore';

function Card({ img, code, ind }) {
  const [backside, setBackside] = useState(true);
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  const opened = useSelector((state) => state.generalStore.opened);
  const guested = useSelector((state) => state.generalStore.guested);

  function handleClick() {
    dispatch(setOpen({ code, ind }));
  }

  useEffect(() => {
    setBackside(true);
    if (opened.some((x) => x.code === code && x.ind === ind)) {
      setBackside(false);
    }
    if (guested.some((x) => x.code === code && x.ind === ind)) {
      setBackside(false);
      setDone(true);
    }
  }, [opened, guested]);

  return (
    <div className={`card ${done && 'done'}`} onClick={handleClick}>
      <div className='front-side' style={{ transform: backside && 'rotateY(180deg)' }}>
        <img src={img} alt='' />
      </div>
      <div className='back-side' style={{ transform: backside && 'rotateY(360deg)' }}>
        <img
          src={'https://i.pinimg.com/originals/94/84/2f/94842fe2799aa892adfa23e12257daf9.jpg'}
          alt=''
        />
      </div>
    </div>
  );
}

export default Card;
