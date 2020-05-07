export function getNested(obj, ...args) {
  return args.reduce((obj, level) => obj && obj[level], obj);
}
