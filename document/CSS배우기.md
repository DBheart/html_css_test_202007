CSS
1. 의미, 정의
2. 선택자
3. 스타일링
4. 헷갈리는 컨셉
5. CSS의 꽃: Flex box

---
CSS : cascading Style Sheet
 - cascading : 위에서 아래로 떨어지는 한장에 떨어지는 문서
    - 세부정의가 없으면 기본정의를 쓰는것. 제일 기본은 브라우져
    - Author style(내가 정한 스타일) -> User Style(브라우저 설정) -> Browser
    - `!important` : cascading의 연결고리를 강제로 끊는 것, 왠만해서는 쓰지말것.
        -> 근데 또 많이 씀. 내가 제일 먼저야! 라고 할때 씀
         
CSS는 레이블링이 잘되어있을때 적용이 쉽다. 

## 선택자(selectors)
1. Universal : *
2. type : Tag
3. ID : #id
4. Class : .class
5. state : `:`
6. Attribute : `[]`

좀더 가까운 셀렉터가 선택된다.

margin : 박스외부와의 간격
border : 박스의 경계
padding : 박스와 컨텐츠간의 간격
    - 왜 padding만을 주었는데 박스가 커지는 것인가?
* 각각의 3개내부의 속성값은 한줄로 쓸수 있다.    

* 각 속성값은 CSS 레퍼런스를 확인하자.

* 셀렉터는 해보지 않으면 잘 늘지를 않는다. 게임으로 배우는 곳이 있다.
** https://flukeout.github.io/
> 총 30문제이므로, 30분에서 1시간이면 다 풀수 있을것이다. 

## postion과 display

Block-level의 대표주자 : div
inline-level의 대표주자: span
    - inline은 컨텐츠 자체를 꾸며주는 것이라서 내용이 없으면 안 보인다.
    - 즉 인라인으로 할려면 내용이 있어야 한다.

span : 안에 내용이 있어야 화면에 보인다.

block와 inline의 설정값은 css로 바꿀수 있다. 그것이 display이다.

inline-block : 한줄에 여러개를 표시할수 있지만 컨텐츠에 상관없이 보인다.
block : 한줄에 하나

### position
postion은 기본값으로 static를 가지고 있다. 이것은 자신의 자리에 움직이지 않는것이다.
> 지정안해도 static값으 가진다는 말~

    - relative : 원래 있어야할 자리에서 이동하는 것
    - absoulte : 자기 부모의 자리에서 이동(내가 담겨있는 상자안에서), 내아이템과 가장 가까운 것에서 이동
    - fixed : 윈도우(페이지) 에서 이동
    - sticky : 원래있던자리를 계속 유지한다. static과 다른점은 스크롤해도 이동하지 않는다는 것이다.
    
* 이제는 jQuery나 Bootstrap을 이용하지 않아도된다. 브라우저 자체에서도 지원하는게 많으므로...
* 호환성여부는 꼭 봐야한다. MDN에서도 확인이 가능하다.
그외에 [`can i you`](https://caniuse.com/)를 보면 된다.
> 엣지와 인터넷 익스플로어에서 안될때가 있다.
>> PostCSS를 쓰면 호환되게 변경해주므로 상관이 없다.

## Flex Box 
css의 꽃, 반응형을 만드는 최신기술

기존에는 Postion의 float와 Table로 반응형을 만들고는 했다. 하지만 이제는 Flex box가 있다.

* float : 이미지가 있을때, 그 이미지를 감싸서 텍스트가 나오는 것
    - left면 이미지가 왼쪽, center이면 이미지가 가운데, right면 이미지가 오른쪽
    - 예전에는 float를 통해서 box자체를 조정했는데, 이제는 그럴 필요가 없어졌다.
    - 이제는 텍스트와 이미지 배치일때만 쓰면된다.

flext 박스의 속성
1. container
    - display, flex-direction, flex-wrap, flex-flow, justify-content, align-items, align-content
    
2. item
    - order, flex-grow, flex-shrink, flex, align-self
3. 중심축, 반대축 : 중심축을 살펴야한다. 가로축과 세로축이 있다. 가로축을 지정하 나머지가 반대편이 된다.

* div.container>div.item.item${$}*10

* %, vh(비포하이, 부모의 area에 상관없이 높이를 지정하는 것), vw도 있겠지?

컬러툴이라는 사이트에가서 색상을 볼수 있다.
(color tool: https://material.io/resources/color/#!/?view.left=0&view.right=0)
> 어 메테리얼 UI거네?

display: flex 로 지정하면 플랙스로 지정도니다.
flex-direction : row
flex-wrap: nowrap;

flex-flow : 위 2개를 한꺼번에 할수 있는것

### item의 속성값

flex-grow :아이템이 커졌을때 얼마나 커질지 지정
flex-shrink :아이템이 작아졌을때때 얼마나 작아질 지정 
flex-basis 
align-self 

---

졸려서 안들린다... 안들어와, flex만 다시 보자.
mdn에서 flex box를 볼수 있다.

* [a complete Guid to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
    - 이곳을 보고 플렉스박스를 익히자. 개념을 이해해야한다.
    
flexbox를 익히는 게임 : flexbox froggy
- 24개의 게임