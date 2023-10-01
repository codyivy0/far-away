
export default function Stats({ list }) {
    if (!list.length)
      return (
        <p className="stats">
          <em>Start adding some items to your packing list</em>
        </p>
      );

    const numPacked = list.filter((item) => item.packed).length;
    const percentage = Math.floor((numPacked / list.length) * 100);
    
    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You got everything! Ready to go!"
            : `💼 You have ${list.length} items on your list, and you already packed ${numPacked} (${percentage}%) 💼`}
        </em>
      </footer>
    );
  }