class Range {
  public constructor(start: number, end?: number, step = 1, offset = 0) {
    this.start = start;
    this.end = end;
    this.step = step;
    this.offset = offset;
    this.range = this.makeRange();
  }

  private start: number;
  private end: number | undefined;
  private step: number;
  private offset: number;
  public range: number[];

  public take(count: number) {
    return this.range.slice(0, count);
  }

  private makeRange() {
    // if only passed a single arg, rerun function with it as the 'end'
    if (!this.end) {
      this.end = this.start;
      this.start = 0;
    }
    // return early if start or end are not numbers
    if (isNaN(this.start) || isNaN(this.end)) return [];
    // calculate the length of the desired array
    const length =
      (Math.abs(this.end - this.start) + this.offset * 2) / this.step + 1;
    // determine if we need to count up or down
    const direction = this.start < this.end ? 1 : -1;
    const startingPoint = this.start - direction * this.offset;
    const stepSize = direction * this.step;

    return Array(length)
      .fill(null)
      .map((_, index) => startingPoint + stepSize * index);
  }
}

export { Range };
