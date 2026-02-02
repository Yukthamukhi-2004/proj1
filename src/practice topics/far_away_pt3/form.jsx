export default function Form({ onAddItems }) {
  const [quantity, setQuantity] = useState(1);
  const [descriptions, setDescriptions] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!descriptions) return;
    const newItem = { descriptions, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescriptions("");
    setQuantity("1");
  }

  return (
    <form onSubmit={handleSubmit}>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* Array.from->creates a array wich accepts 2 arguments, length:20= which creates the length of array, 
        for 2nd argument , _ is ment for current element which initially undefined but alot the slot,i to decide range from 0 to 19 */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="items"
        value={descriptions}
        onChange={(e) => setDescriptions(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
