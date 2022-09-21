/**
 * 함수 옮기기(Move function) - 순수 함수 내에서의 함수 옮기기.
 * Refactoring point
 *  함수 내 중첩 함수들이 존재. 이걸로 모듈화 , 캡슐화 할 수 있음.
 *  이 때 중첩함수들이 정말 trackSummary에서 사용하는 data와 밀접하게 연관이 있나? 를 봐야함.
 *  보니까, 중첩함수에서 distance, radians 함수는 trackSummary에서 직접 쓰이지도 않고, 연관성이 떨어짐. 굳이 중첩함수로 존재해야할 이유가 없음.
 */
export function trackSummary(points) {
  const totalTime = calculateTime();
  const totalDistance = calculateDistance();
  const pace = totalTime / 60 / totalDistance;
  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace,
  };

  function calculateDistance() {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      result += distance(points[i - 1], points[i]);
    }
    return result;
  }

  function distance(p1, p2) {
    // 포뮬라: http://www.movable-type.co.uk/scripts/latlong.html
    const EARTH_RADIUS = 3959; // in miles
    const dLat = radians(p2.lat) - radians(p1.lat);
    const dLon = radians(p2.lon) - radians(p1.lon);
    const a =
      Math.pow(Math.sin(dLat / 2), 2) +
      Math.cos(radians(p2.lat)) *
        Math.cos(radians(p1.lat)) *
        Math.pow(Math.sin(dLon / 2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS * c;
  }

  function radians(degrees) {
    return (degrees * Math.PI) / 180;
  }

  function calculateTime() {
    return 10000;
  }
}

const newYork = {
  lat: 40.73061,
  lon: -73.935242,
};

const tokyo = {
  lat: 35.652832,
  lon: 139.839478,
};

const summary = trackSummary([newYork, tokyo]);
console.log(summary);
