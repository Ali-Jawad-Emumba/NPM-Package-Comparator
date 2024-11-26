export const formatCount = (val: number) => {
    const formatWithSuffix = (divisor: number, suffix: string) =>
      `${Math.round(val / divisor)}${suffix}${val > divisor ? "+" : ""}`;

    if (val >= 1000000000) {
      return formatWithSuffix(1000000000, "B");
    } else if (val >= 1000000) {
      return formatWithSuffix(1000000, "M");
    } else if (val >= 1000) {
      return formatWithSuffix(1000, "K");
    } else if (val % 1 !== 0) return val?.toFixed(2);
    else {
      return val;
    }
  };