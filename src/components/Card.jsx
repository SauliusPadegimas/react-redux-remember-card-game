import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setOpen } from '../store/generalStore';

function Card({ img, code, ind }) {
  const [revealCard, setRevealCard] = useState(false);
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  const opened = useSelector((state) => state.generalStore.opened);
  const guested = useSelector((state) => state.generalStore.guested);

  function handleClick() {
    dispatch(setOpen({ code, ind }));
  }

  useEffect(() => {
    setRevealCard(false);
    if (opened.some((x) => x.code === code && x.ind === ind)) {
      setRevealCard(true);
    }
    if (guested.some((x) => x.code === code && x.ind === ind)) {
      setRevealCard(true);
      setDone(true);
    }
  }, [opened, guested]);

  return (
    <div className={`card ${done && 'done'}`} onClick={handleClick}>
      <div className='face-side' style={{ transform: revealCard && 'rotateY(360deg)' }}>
        <img src={img} alt='' />
      </div>
      <div className='cover-side' style={{ transform: revealCard && 'rotateY(180deg)' }}>
        <img
          src={'https://i.pinimg.com/originals/94/84/2f/94842fe2799aa892adfa23e12257daf9.jpg'}
          alt=''
        />
      </div>
    </div>
  );
}

export default Card;
