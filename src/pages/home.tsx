import { Boll } from '../components/boll';
import { useNumberStore } from '../store/number-store';

const bolaoNumbers = [
  [5, 12, 23, 34, 48, 56],
  [7, 19, 28, 33, 45, 54],
  [3, 19, 25, 37, 49, 58],
  [10, 18, 27, 32, 41, 50],
  [9, 15, 20, 43, 52, 57],
  [3, 5, 23, 34, 37, 58],
  [7, 11, 12, 31, 38, 49],
  [6, 12, 20, 24, 47, 58],
  [18, 29, 36, 38, 47, 51],
  [9, 20, 24, 32, 44, 50],
  [6, 7, 11, 27, 53, 58],
  [3, 9, 22, 28, 32, 51],
  [5, 13, 14, 36, 47, 48],
  [1, 13, 35, 41, 48, 55],
  [11, 26, 32, 49, 50, 53],
  [2, 8, 22, 24, 41, 50],
];

function Home() {
  return (
    <div>
      <AllNumbers />
      <div className="flex justify-center items-center flex-col">
        <p className="my-4">Apostas</p>
        <div className="flex flex-col gap-2">
          {bolaoNumbers.map((numbers, index) => (
            <LineBolls key={index} numbers={numbers} />
          ))}
        </div>
      </div>
    </div>
  );
}

const AllNumbers = () => {
  const allNumbers = Array.from({ length: 60 }, (_, i) => i + 1);

  const {
    numbers: sortedNumbers,
    updateNumber,
    clearNumbers,
  } = useNumberStore();

  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <p className="">Selecione os numbers sorteados:</p>
        <button
          type="button"
          className="text-gray-800 underline rounded hover:text-gray-600 active:no-no-underline"
          onClick={clearNumbers}
        >
          Limpar
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {allNumbers.map((number) => (
          <Boll
            key={number}
            number={number}
            sortedNumbers={sortedNumbers}
            updateNumber={updateNumber}
          />
        ))}
      </div>
    </div>
  );
};

const LineBolls = ({ numbers }: { numbers: number[] }) => {
  const { numbers: sortedNumbers } = useNumberStore();

  return (
    <div className="flex gap-2">
      {numbers.map((number) => (
        <Boll key={number} number={number} sortedNumbers={sortedNumbers} />
      ))}
    </div>
  );
};

export default Home;
