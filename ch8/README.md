# 기능 이동 (Moving Features)

keyword: 응집도(Cohesion) - 서로 밀접하게 연관있는 속성(data)과 행동(method)이 (module, class, function 등으로)함께 뭉쳐있는 정도
-> 모듈화가 얼마나 잘 되어있냐. 모듈성(modularity)
Cons:

- 프로그램의 어딘가를 수정하려 할 때 해당 기능과 깊이 관련된 작은 일부만 이해해도 가능하게 해주는 능력. (즉, 이해하기 쉽고 재사용도 높고 유지보수하기 쉽겠군)
- 다른 클래스/모듈의 변화에 크게 영향을 받지 않음.

이렇게 하려면

- 모듈/클래스 하나당 한가지의 책임을 가지도록 하자.
  -> 어떻게? 서로 연관있는 것끼리 묶자. 그렇게 되어있지 않다면 이동시키자! 해서 이 챕터는 <기능 이동>임.

1. 함수 옮기기(Move function)
2. 필드 옮기기(Move Field)
3. 문장을 함수로 옮기기(Move Statements into Function)
4. 문장을 호출한 곳으로 옮기기(Move Statements to Callers)
5. 인라인 코드를 함수 호출로 바꾸기(Replace Inline Code with Function Call)
6. 문장 슬라이스하기(Slide Statements)
7. 반복문 쪼개기(Split Loop)
8. 반복문을 파이프라인으로 바꾸기(Replace Loop with Pipeline)
9. 죽은 코드 제거하기(Remove Dead Code)
