### 프로그래밍에서 가장 중요한 것?

- 변수
- 함수
  - 함수, 특정한 일을 수행하는 코드의 집합
  - 길고 복잡하고 복합적인 책임을 가진 함수?
    - 무슨 일을 하는 함수인지 알기 어렵고
    - 함수의 특정 부분이 재사용이 어려움.
- 모듈

여기서
변수, 함수는 low level -> low level refactoring
비슷한 책임과 역할이 있는 것들을 묶은 개념인 모듈은 high level -> high level refactoring

# Low level refactoring

## 1. 함수 추출하기 (Extract Function)

- 어떤 일을 하는 코드인지 파악하고
- 독립적인 함수로 추출한다.
- 목적에 맞는 이름으로 함수명을 짖는다.

## 2. 함수 인라인하기 (Inline Function)

## 3. 변수 추출하기 (Extract Variable)

## 4. 변수 인라인하기 (Inline Variable)

## 5. 함수 선언 바꾸기 (Change Function Declaration)

## 7. 변수 이름바꾸기 (Rename Variable)

## 8. 매개변수 객체 만들기 (Introduce Parameter Object)

## 10. 여러 함수를 변환 함수로 묶기 (Combine Functions into Transform)

## 11. 단계 쪼개기 (Split Phase)

# High level refactoring

## 캡슐화

내부 구현 사항을 숨기고, 외부에서 필요한 사항들만 공개한다.

## 6. 변수 캡슐화하기 (Encapsulate Variable)

## 7. 여러 함수를 클래스로 묶기 (Combine Functions into Class)
