function CreateCategory(category) {
  return (
    <div
      data-testid={`${category.name}-container`}
      className="items-container gap-5 slide-in"
    >
      {category.array.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default CreateCategory;