# 상속 다루기(Dealing with Inheritance)

## 상속을 하는 이유
코드의 재사용을 위해


## 상속의 문제점
- 딱 하나만 상속이 가능함 (물론 다중 상속이 허용되는 프로그래밍이 있지만 대부분 하나.)
- 불필요한 기능도 상속될 수 있음. 
- 상속을 잘 못 쓰면 족보가 꼬일 수 있음. 
- 수정이 어렵다. A라는 클래스를 B, C가 상속되었을 때, A가 수정되면 그 자식 class에 다 영향이 감. 

그래서 상속 대신 코드를 재사용성을 높이는 **확장(composition)**을 활용하는 것이 더 좋다!



## 리팩터링 기법들 
1. 메서드 올리기 (Pull up method)
2. 필드 올리기 (Pull up field)
3. 생성자 본문 올리기 (Pull up constructor body)
4. 매서드 내리기 (Push down method)
5. 필드 내리기 (Push down field) 
6. 타입 코드를 서브 클래스로 바꾸기 (Replace Type Code with subclass)
7. 서브 클래스 제거하기 (Remove subclass)
8. 슈퍼 클래스 추출하기 (Extract superclass)
9. 계층 합치기 (Collapse Hierarchy)
10. 서브 클래스를 위임으로 바꾸기 (Replace subclass with delegate)
11. 슈퍼 클래스를 위임으로 바꾸기 (Replace superclass with delegate)