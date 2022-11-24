import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './components/Card';
import { drawcards } from './store/generalStore';

function App() {
  const cards = useSelector((state) => state.generalStore.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchCards() {
      const resp1 = await fetch(
        'https://www.deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,KD,QC,JH,AS,KD,QC,JH,9S,9S'
      );
      const { deck_id } = await resp1.json();
      const resp2 = await fetch(
        `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=10`
      );
      const { cards } = await resp2.json();
      dispatch(drawcards(cards));
    }
    fetchCards();
  }, []);
  return (
    <div className='container'>
      {cards.map((x, i) => (
        <Card key={i} img={x.image} code={x.code} ind={i} />
      ))}
    </div>
  );
}

export default App;
