/**
 *
 * Refactor point
 * for문에 대한 시간복잡도 공포.
 * 그래서 한 for문 안에 로직을 한번에 다 집어넣으려고함
 * 그래서 잃는 가독성의 비용이 더 크다.
 * 왜? for문을 두개로쪼갠다고 O(2n) 어짜피 O(n)이다.
 *
 * 성능 최적화라는건, 하지마라 일단 하지마라. 그리고 정말 필요하다면 성능 측정 후 도입해라.
 */
export function reportYoungestAgeAndTotalSalary(people) {
  return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;

  function youngestAge() {
    return Math.min(...people.map((p) => p.age));
  }

  function totalSalary() {
    return people.reduce((total, p) => (total += p.salary), 0);
  }
}
