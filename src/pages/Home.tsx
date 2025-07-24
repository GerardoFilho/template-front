import Button from "../components/Buttons";
import { useCounterStore } from "../store/useCounterStore";

const Home = () => {
  const { count, increment } = useCounterStore();

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Página Inicial</h1>
      <p className="text-lg mb-2">Contador: {count}</p>
      <Button onClick={increment}>Incrementar</Button>
    </div>
  );
};

export default Home;
