const Promotions = ({ promotions }) => {
  // Placeholder content
  if (!promotions || promotions.length === 0) {
    return <p>No current promotions.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Promotions</h2>
      {promotions.map((promo, index) => (
        <div key={index} className="mb-4 p-4 border rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">{promo.title}</h3>
          <p>{promo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Promotions;
