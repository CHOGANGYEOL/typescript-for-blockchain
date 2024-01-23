interface SStorage<T> {
  [key: string]: T;
}
interface LocalStorageAPI<T> {
  length: { (): void };
  key: { (idx: number): string };
  getItem: { (key: string): T };
  setItem: { (key: string, value: T): void };
  removeItem: { (key: string): void };
  clear: { (): void };
}

class LocalStorage<T> implements LocalStorageAPI<T> {
  private storage: SStorage<T> = {};
  private keys: string[] = [];
  // storage의 길이를 반환합니다.
  length() {
    return this.keys.length;
  }
  // n번째 저장소에 있는 키의 이름을 반환합니다.
  key(idx: number) {
    return this.keys[idx];
  }
  // 키 이름을 전달하면 해당 키의 값이 반환됩니다.
  getItem(key: string) {
    return this.storage[key];
  }
  // 키 이름과 값을 전달하면 해당 키를 저장소에 추가하거나 해당 키의 값이 이미 있는 경우 업데이트합니다.
  setItem(key: string, value: T) {
    this.storage[key] = value;
    const newKeys = Object.keys(this.storage);
    this.keys = newKeys;
  }
  // 키 이름을 전달하면 해당 키가 저장소에서 제거됩니다.
  removeItem(key: string) {
    delete this.storage[key];
  }
  // 호출하면 모든 키가 저장소에서 비워집니다.
  clear() {
    this.storage = {};
    this.keys = [];
  }
}

const newLocalStorage = new LocalStorage<string>();
// setItem
newLocalStorage.setItem("test", "testValue");
newLocalStorage.setItem("test2", "test2Value");
newLocalStorage.setItem("test3", "test3Value");
// length
// console.log(newLocalStorage.length())
// key
// console.log(newLocalStorage.key(1))
// getItem
// console.log(newLocalStorage.getItem("test2"))
// setItem(update)
newLocalStorage.setItem("test2", "test2ValueUpdate");
// console.log(newLocalStorage.getItem("test2"))
// removeItem
newLocalStorage.removeItem("test2");
// console.log(newLocalStorage.getItem("test2"))
// clear
newLocalStorage.clear();
// console.log(newLocalStorage.length())

interface Coords {
  readonly accuracy: number;
  readonly altitude: number | null;
  readonly altitudeAccuracy: number | null;
  readonly heading: number | null;
  readonly latitude: number;
  readonly longitude: number;
  readonly speed: number | null;
}

interface Position {
  readonly coords: Coords;
  readonly timestamp: number;
}

interface PositionCallback {
  (position: Position): void;
}

interface GeolocationPositionError {
  readonly code: number;
  readonly message: string;
  readonly PERMISSION_DENIED: 1;
  readonly POSITION_UNAVAILABLE: 2;
  readonly TIMEOUT: 3;
}

interface PositionErrorCallback {
  (positionError: GeolocationPositionError): void;
}

interface PositionOptions {
  enableHighAccuracy?: boolean;
  maximumAge?: number;
  timeout?: number;
}

interface GeolocationAPI {
  getCurrentPosition: {
    (successCallback: PositionCallback): void;
    (
      successCallback: PositionCallback,
      errorCallback: PositionErrorCallback | null
    ): void;
    (
      successCallback: PositionCallback,
      errorCallback: PositionErrorCallback | null,
      options: PositionOptions
    ): void;
  };
  watchPosition: {
    (successCallback: PositionCallback): number;
    (
      successCallback: PositionCallback,
      errorCallback: PositionErrorCallback | null
    ): number;
    (
      successCallback: PositionCallback,
      errorCallback: PositionErrorCallback | null,
      options: PositionOptions
    ): number;
  };
  clearWatch: { (watchId: number): void };
}

class CGeolocation implements GeolocationAPI {
  private position: Position = {
    coords: {
      accuracy: 0,
      altitude: 0,
      altitudeAccuracy: null,
      heading: null,
      latitude: 0,
      longitude: 0,
      speed: null,
    },
    timestamp: 0,
  };
  // 장치의 현재 위치를 확인하고 데이터와 함께 GeolocationPosition 개체를 반환합니다.
  getCurrentPosition(
    successCallback: PositionCallback,
    errorCallback?: PositionErrorCallback | null,
    options?: PositionOptions
  ) {
    if (successCallback) console.log(successCallback);
    if (errorCallback) console.log(errorCallback);
    if (options) console.log(options);
  }
  // 장치 위치가 변경될 때마다 호출할 새로 설정된 콜백 함수를 나타내는 긴 값을 반환합니다.
  watchPosition(
    successCallback: PositionCallback,
    errorCallback?: PositionErrorCallback | null,
    options?: PositionOptions
  ) {
    if (successCallback) console.log(successCallback);
    if (errorCallback) console.log(errorCallback);
    if (options) console.log(options);
    return 0;
  }
  // watchPosition()을 사용하여 이전에 설치된 특정 핸들러를 제거합니다.
  clearWatch(whtchId: number) {
    console.log(whtchId);
  }
}

const geolocation = new CGeolocation();
// 오버로딩
geolocation.getCurrentPosition(test);
geolocation.getCurrentPosition(test, test);
geolocation.getCurrentPosition(test, test, {});

function test() {}
