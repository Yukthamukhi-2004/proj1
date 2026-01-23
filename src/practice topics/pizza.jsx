//pizza Restaurant
import { Card } from "primereact/card";
import { Chip } from "primereact/chip";

function App() {
  const pizzas = [
    {
      name: "Paneer Tikka",
      ingredients: "paneer, tandoori sauce, mozzarella cheese",
      price: 150,
    },
    {
      name: "Corn & Cheese",
      ingredients: "sweetcorn, pizza sauce, mozzarella cheese",
      price: 125,
    },
  ];

  const getIngredientsChips = (ingredients) =>
    ingredients
      .split(",")
      .map((ing) => (
        <Chip key={ing.trim()} label={ing.trim()} className="mr-2 mb-2" />
      ));

  return (
    <div className="p-4 grid">
      {pizzas.map((pizza, index) => (
        <Card
          key={index}
          title={pizza.name}
          subTitle="Freshly baked"
          className="w-full lg:w-30rem surface-card shadow-4 hover:shadow-6 transition-duration-200"
        >
          <div className="flex flex-column gap-3">
            <div className="text-center p-3 bg-primary-alpha-10 border-round">
              <i className="col-12 md:col-6 lg:col-4" />
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {getIngredientsChips(pizza.ingredients)}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default App;
