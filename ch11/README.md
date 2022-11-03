# API 리팩터링 

좋은 모듈/클래스는 내부 구현사항은 캡슐화 되어있어야 한다.    
그래서 내부 구현이 어떻든 외부에서 사용할 때는 공개된 api들을 사용하면 됨. 즉, 외부에서 사용할 필요가 있는 동작들만 api로 제공.    



아무리 내부에서 사용할 로직들의 구현을 잘 해두었어도, 외부에서 사용할 우리의 api의 함수나 매개변수 사용시 '냄새가 난다'면 api 리팩터링이 필요하다.    
따라서 외부에서 사용할 필요가 있는 api는 이해하기 쉽고, 사용하기 쉽게 만들어야 한다.   
그렇게 만드는 것의 핵심은 
- 하나의 api는 하나의 일만 하고, 그 목적이 잘 드러나는 이름으로 짓기!
- 단순 조회와 수정하는 동작을 명확하게 분리하는 것!
- 헷갈리는 방식 지양 (복잡한 매개변수들)

## 목차
1. 질의 함수와 변경 함수 분리하기 (Separate Query from Modifier)
2. 함수 매개변수화 하기 (Parameterize Function)
3. 플래그 인수 제거하기 (Remove Flag Argument)
4. 객체 통째로 넘기기 (Preserve Whole Object)
5. 매개변수를 질의 함수로 바꾸기 (Replace Parameter with Query)
6. 질의 함수를 매개변수로 바꾸기 (Replace Query with Parameter)
7. 세터 제거하기 (Remove Setting Method)
8. 생성자를 팩터리 함수로 바꾸기 (Replace Constructor with Factory Function)
9. 함수를 명령으로 바꾸기 (Replace Function with Command)
10. 명령을 함수로 바꾸기 (Replace Command with Function)
11. 수정된 값 반환하기 (Return Modified Value)
12. 오류 코드를 예외로 바꾸기 (Replace Error Code with Exception)
13. 예외를 사전확인으로 바꾸기 (Replace Exception with Precheck)
