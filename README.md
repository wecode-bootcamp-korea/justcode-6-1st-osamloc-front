# Osamloc Project

- 국내 대표 차(Tea) 브랜드 '[오설록](https://www.osulloc.com/kr/ko)'을 모티브로 한 프로젝트입니다.
- 사이트 선정 이유
  -  처음 프로젝트인 만큼 그동안 배운 지식을 활용하여 e-커머스에 crud 기반으로 직접 기능들을 구현해보고 적용해볼 수 있는 사이트를 선정

![오설록](https://user-images.githubusercontent.com/108418225/190359024-709b2df0-3249-4708-8e2f-7d6bcb38c07a.png)

  
  
## 1. 개발 기간 및 인원

- __개발 기간__  : 2022.08.29 ~ 2022.09.08(11일)

- __프론트엔드__ : 유상호, 김정연, 이동호, 이유나  

- __백엔드__ : 김교은, 박지은  

- __[프론트엔드 GitHub](https://github.com/wecode-bootcamp-korea/justcode-6-1st-osamloc-front)__ 
- __[백엔드 github 링크](https://github.com/wecode-bootcamp-korea/justcode-6-1st-osamloc-back)__

- __[팀 노션](https://www.notion.so/wecode/93b4fdf1dd4b49dd9b2fe71f7b85d8d0)__

  
  
## 2. 데이터 모델링

:paperclip:  [dbdiogram 링크](https://dbdiagram.io/d/631550500911f91ba5332730)   

![디비](https://user-images.githubusercontent.com/108418225/190328843-2bbf8125-2c98-43a3-a3d0-f31fd9613631.png)

    
## 3. 시연 영상

:paperclip: 유튜브 링크 - https://www.youtube.com/watch?v=jhNUPFSqefA (약 5분)
    

## 4. 적용 기술 및 구현 기능

### 4-1. 적용 기술(수정 필요)
+ front-end : JavaScript, react.js
+ Back-end : JavaScript, Node.js, Express, Bcrypt, JWT
+ Database : MySQL 
+ HTTP : Postman, live share  
+ Common : Slack, Zep, Notion, Git&Github


### 4-2. 구현 기능

>프론트엔드

- 유상호
 - - 제품 상세페이지
    - 제품별 댓글
        - 로그인 했을때만 댓글 추가가능
        - 내가 쓴 댓글만 삭제, 수정 가능
    - 상단 오른쪽 제품 갯수, 추가상품
        - 장바구니 클릭시 상품 갯수 포함 api 전달
        - 장바구니에 이미 존재하는 상품일 때 갯수만 추가
- 제품 리스트 UI
    - 상위 필터 api
        - 리뷰많은순, 판매순, 신상품순, 높은 가격순, 낮은 가격순
    - 하위 필터 api
        - 전체, 잎차, 피라미드, 티백, 파우더
    - pagination
        - 요청받아오는 상품 갯수에 따라 구현
        
- 김정연
   - main ui / 기능 구현 
   - main api 연동 
   - header 

- 이동호
  - cart
    - filter
    - modal
    - checkbox
  - payment
    - filter
    - modal
    - 정규식 검증
    - 주소 api 연동
    - 결제 api 연동
    
- 이유나
  - 로그인/ 회원가입 ui 기능 구현 
  - 로그인/ 회원 가입 api 연동
  - footer 

>백엔드

- 김교은  
  - 카테고리 API  
  - 상품 리스트 API  
  - 상품 정렬 API  
  - 장바구니 / 결제 API  

- 박지은
  - 회원가입 / 로그인 API 
  - 상품 상세 페이지 API   
  - 리뷰 API
 
  
  
## 5. API Docs

:paperclip: [회원가입 / 로그인 / 상품 상세 페이지 / 리뷰 API](https://documenter.getpostman.com/view/22723173/VUxVrQLd)  
:paperclip: [카테고리 / 상품 필터, 정렬 / 상품 리스트 API](https://documenter.getpostman.com/view/22723465/VUxXKNsa)  
:paperclip: [장바구니 / 결제 API](https://documenter.getpostman.com/view/22723465/VVBQX98b)

---

## Reference

- 이 프로젝트는 [오설록](https://www.osulloc.com/kr/ko) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
