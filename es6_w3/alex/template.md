# Template (Literal) - 문자열 처리를 위한 템플릿

* 형식 : '문자열', '문자열 ${expresion} 문자열', tag '문자열 ${expression} 문자열'
* 복수의 expression사이의 문자열은 배열로 표시 ( text[0], text[1],....) 
* String.raw - 표현식은 변환하지만 특수문자와 문자열로 인식
* 주의 : '는 backquote.
* 예시 :
* - let one =1, two = 2;
  - console.log("sum", '1+2는 ${one + two}이다');
* - console.log('line1 \n line2');
* - let one =1, two =2;
  - function tagfunc(text, value)
  - {
  - console.log("1:", text[0]);
  - console.log("2:", value);
  - }
  - tagfunc `1+2=${one + two}`;