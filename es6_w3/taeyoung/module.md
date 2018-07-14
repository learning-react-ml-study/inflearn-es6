## Module의 사전적 정의
> 기준 치수, 구성 단위, 구성 부분, 특정 학과의 학습 단위

## Module의 개념
크고 복잡한 프로그램의 로직 및 함수를 파일단위로 나눠 작성하는것

## Module의 사용 이유
* 자주 사용되는 코드를 별도의 파일로 만들어서 필요할 때마다 재활용할 수 있다.
* 코드를 개선하면 이를 사용하고 있는 모든 애플리케이션의 동작이 개선된다.
* 코드 수정 시에 필요한 로직을 빠르게 찾을 수 있다.
* 필요한 로직만을 로드해서 메모리의 낭비를 줄일 수 있다.
* 한번 다운로드된 모듈은 웹브라우저에 의해서 저장되기 때문에 동일한 로직을 로드 할 때 시간과 네트워크 트래픽을 절약 할 수 있다. (브라우저에서만 해당)

## Module Example

### Introduction & Default usage
기본 사용방법

~~~javascript
//main.js
import {log} from './module_1.js';
import log_default from './module_2.js';
log('text'); // module_1.js의 log 함수 호출하여 사용
log_default('text'); //

//module_1.js
function log(data) {
    console.log(data);
}

//module_2.js
function default log_default(data) {
    console.log(data);
}
~~~

~~~javascript
//main.js
import log, { getTime, Logger } from './module_3.js';

log(`getTime is ${getTime()}`);

const logger = new Logger();
log(`${logger.getLectures()}`);

//module_3.js
export default function log(data) {
    console.log(data);
}

//module_4.js
export const getTime = () => {
    return Date.now();
}

//module_5.js
export class Logger {
    constructor(props) {
        this.lectures = ['java', 'iOS'];
    }

    getLectures() {
        return this.lectures;
    }

    getCurrentHour() {
        return (new Date).getHours();
    }
}
~~~