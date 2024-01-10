import Card from "../layouts/card";
function CardLoader(params) {
  const cards = [];
  let data;

  data = params.invoiceState;


  function renderCards() {
   
      for (let i = 0; i < data?.length; i++) {
        if (data?.length > 0) {
          cards.push(
            <Card color={params.color ? params.color : null} data={data[i]} />
          );
        }
      }
    }
  
  renderCards();

  return (
    <div className="cards_container">
      {cards.map((card) => {
        return card;
      })}
    </div>
  );
}

export default CardLoader;
