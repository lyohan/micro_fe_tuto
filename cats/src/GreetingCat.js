import { useParams } from 'react-router-dom'

function GreetingCat() {
  const { greeting } = useParams();
  const greetingCatUrl = `https://cataas.com/cat/says/${greeting}`;

  return (
    <div>
      <header>
        <h3>Greet me</h3>
        {!greeting ? (
          <div>Needs a greeting</div>
        ) : (
          <div>
            <img src={greetingCatUrl} width="400px" alt="Cat" />
          </div>
        )}
      </header>
    </div>
  );
}

export default GreetingCat
