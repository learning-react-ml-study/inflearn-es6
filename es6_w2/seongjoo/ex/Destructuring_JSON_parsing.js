let news = [
    {
        "title":"society",
        "imgurl":"https://s.pstatic.net/static/newsstand/2018/0701/article_img/9110/210506_001.jpg",
        "newslist":[
            "태풍 '쁘라삐룬'-장마전선 맞물려 비 피해 속출(종합)",
            "셋째 아내가 11세 소녀?…41세 남성 결혼에 말레이 '시끌'",
            "'삼성 뒷돈·시신탈취' 핵심인물 영장 잇단 기각…수사차질 우려",
            "'수문 5개 열어 방류하는 팔당댐'",
            "가게 내놓고 '알바 구함'···강진 여고생 사건 용의자 왜?"
        ]
    },
    {
        "title":"science",
        "imgurl":"https://imgnews.pstatic.net/image/origin/214/2018/07/01/853275.jpg",
        "newslist":[
            " [한국 이동통신 30년]36시간 걸리던 영화 다운, 1초만에...데이터속도 13만배 빨라졌다",
            "스마트폰과 다르게.. AI스피커엔 왜 '화면'이 없을까",
            "[표지로 읽는 과학] 한국, 日-中 빠진 '우리만의 리그'에서 아시아 과학 허브 한자리 차지?",
            "[아하! 우주] 중성자별의 실제 크기는 도시와 비슷해 (연구)",
            "피 한 방울로 암 진단하는 시대 열겠다"
        ]
    }
];

/*
let [,science] = news;
let {title, newslist} = science;
console.log(title, newlist);
*/

let [,{title,newslist}] = news;
console.log(newslist);
