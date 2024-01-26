import castPath from "./utils/castPath";
import isArguments from "./utils/isArguments";
import isIndex from "./utils/isIndex";
import isLength from "./utils/isLength";
import toKey from "./utils/toKey";

const hasOwnProperty = Object.prototype.hasOwnProperty;

function hasPath(
  object: { [key: string]: any } | string,
  path: string[] | string
): boolean {
  path = castPath(path, object);

  let index = -1;
  let { length } = path;
  let result = false;
  let key: string | symbol | undefined = undefined;

  while (++index < length) {
    key = toKey(path[index]);
    if (!(result = object != null && hasOwnProperty.call(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index !== length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return (
    !!length &&
    isLength(length) &&
    isIndex(key, length) &&
    (Array.isArray(object) || isArguments(object))
  );
}

export default hasPath;
