const a = { name: "test" };
const b = 12;

let foo;

if (a.name === "test") {
  foo = () => 0;
} else {
  foo = () => ({
    bar: {
      foo: 1,
      bar: 2,
    },
  });
}
