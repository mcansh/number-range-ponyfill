function range(
  start: number,
  end: number = start,
  step = 1,
  offset = 0
): number[] | undefined {
  // return early if start of end are not numbers
  if (Number.isNaN(start) || Number.isNaN(end)) return undefined;
  // if only passed a single arg, rerun function with it as the 'end'
  if (arguments.length === 1) return range(0, start);

  // calculate the length of the desired array
  const length = (Math.abs(end - start) + offset * 2) / step + 1;
  // determine if we need to count up or down
  const direction = start < end ? 1 : -1;
  const startingPoint = start - direction * offset;
  const stepSize = direction * step;

  return Array(length)
    .fill(null)
    .map((_, index) => startingPoint + stepSize * index);
}

const take = (array: any[], count: number) => array.slice(0, count);

export { range, take };
