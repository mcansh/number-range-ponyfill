function* range(start: number, end?: number | undefined, step: number = 1) {
  // if only passed a single arg, start at zero
  if (!end) {
    end = start;
    start = 0;
  }

  // calculate the length of the desired array
  const length = end - start + 1;

  // determine if we need to count up or down
  const direction = start < end ? 1 : -1;
  const startingPoint = start - direction;
  const stepSize = direction * step;

  const array = Array(length)
    .fill(null)
    .map((_, index) => startingPoint + stepSize * index);

  console.log(array);

  let index = 0;
  while (index < array.length) {
    yield index++;
  }
}

export { range };
