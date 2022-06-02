# 강의보기

---
# html에서 스크립트 포함방법
- 자바스크립트는 순서대로 읽는다.
- 스크립트는 먼저 실행한것이 먼저 실행된다.

* defer을 쓰는게 제일 좋다.

1. head안에 넣는다.
    - 제일 일반적인 방법
    - 하지만 스크립트가 크면 스크립트 받기전까지 html 렌더링이 멈춘다는 것이다. 
    - 그래서 html화면 보는게 느릴수 있다.(요즘은 브라우저가 빨라서 안그럴수도 있지만?)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="main.js"></script>
</head>
<body>

</body>
</html>
```

2. body의 제일 끝에 넣는다.
    - 한때 많이들 사용한 방법이었다. 하지만.. 효율은 잘모르던것이다.
    - 장점 html 렌더링이 빠르다.
    - 단점 : 스크립트를 다 받기 전까지는 자바스크립트에 있는 동적인 요소를 사용하지 못한다.
        - 오류는 안나올것 같다.  
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    
</head>
<body>
    <div>내용들</div>
    <script src="main.js"></script>
</body>
</html>
```

3. async 사용
    - 스크립트 파일이 있으면 받는것과 html 렌더링을 동시에 진행한다.
    - 스크립트를 받으면 html렌더링을 멈추고 스크립트를 실행한다.
    - 장점 : 2번보다 다운로드 동시에 받는다.
    - 단점 : html 렌더링이 덜된상태에서 자바스크립트를 실행하기 때문에 오류가 발생할 수가 있다.
        - 중간에 자바스크립트가 실행되면 html 렌더링을 계속 멈추게 된다.
        - 다건의 스크립트를 받을때 먼저 다운로드 받는것이 먼저 실행되기때문에 순서가 안맞아서 오류가 발생할수도 있다.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script asyn src="main.js"></script>
</head>
<body>
    <div>내용들</div>
    
</body>
</html>
```

4. defer 사용
    - async와 같이 같이 다운로드받지만 실행은 html렌더링한다음에 자바스크립트를 실행하게 된다.
    - 다건의 스크립트를 받을때는 먼저 선언한것이 먼저 실행된다.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script defer src="main.js"></script>
</head>
<body>
    <div>내용들</div>
</body>
</html>
```