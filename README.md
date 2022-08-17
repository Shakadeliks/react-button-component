# React Button Component

A functional button component that cycles through an array of colors and changes its background color upon being clicked.

Click the Stackblitz link below to see the component in action.

[Stackblitz](https://stackblitz.com/edit/react-rictpo?file=src/App.js)

```
export default function ColorBtn({ colors }) {
  const [currentColorIdx, setColorIdx] = useState(0);

  const nextColor = () =>
    setColorIdx((idx) => (idx === colors.length - 1 ? 0 : idx + 1));

  return (
    <button
      style={{ backgroundColor: colors[currentColorIdx] }}
      onClick={nextColor}
    >
      Change Color
    </button>
  );
}
```
