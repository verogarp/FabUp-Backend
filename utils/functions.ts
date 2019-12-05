export function getID() {
  return Math.random()
    .toString(36)
    .substring(7);
}
