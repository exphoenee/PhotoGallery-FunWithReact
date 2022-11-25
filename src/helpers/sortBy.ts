interface Item<T = any> {
  [key: string]: T;
}
type ValueGetter<T = any> = (item: T) => string | number;
type SortingOrder = "asc" | "desc";

export default function sortBy<T extends Item>(
  array: T[],
  key: ValueGetter<T>,
  order: SortingOrder = "asc"
) {
  const modifier: number = order === "asc" ? 1 : -1;
  return [...array].sort((a, b) =>
    key(a) > key(b) ? 1 * modifier : -1 * modifier
  );
}
