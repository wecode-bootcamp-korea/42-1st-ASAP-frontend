![gifit_1676864537616](https://user-images.githubusercontent.com/118322531/220034380-35c7a79a-532b-4e23-838f-0d306f1a2ad6.gif)


## ASAP 프로젝트 소개

- 프리미엄 코스메틱 브랜드 Aesop 클론 프로젝트
- 개발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은 모두 백앤드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.


### 개발 인원 및 기간

- 개발기간 : 2023/2/4 ~ 2012/2/17
- 개발 인원 : 프론트엔드 3명, 백엔드 2명
  FE - 김한솔, 이수민, 김수현(Project Manager)
  BE - 장주성(Product Manager), 최원경

- [백엔드 github 링크](https://github.com/wecode-bootcamp-korea/42-1st-ASAP-backend.git)

### 프로젝트 선정이유

- 브랜드 전략에 맞게 사이트가 잘 구성되어있으며 디자인이 아름답고 세련됨

### 데모 영상

[![ASAP 페이지 데모영상](https://youtu.be/oADqkrk6GPM)


## 적용 기술 및 구현 기능

### 적용 기술

- FE : Javascript. reactJS, react-router-dom, SASS

- BE : Javascript, Node.js, Express.js, jwt, Bcrypt, My SQL

### 구현 기능

#### 공통
![gifit_1676864712472](https://user-images.githubusercontent.com/118322531/220034503-0c0428bf-086c-4903-83c3-3e10ba4d27e0.gif)
![gifit_1676864780078](https://user-images.githubusercontent.com/118322531/220034507-9f61d432-85fe-489a-bef2-ec2bb653d277.gif)
![gifit_1676864889380](https://user-images.githubusercontent.com/118322531/220034508-eb47420e-675a-4200-be1e-e0262926e646.gif)

- 일반 회원가입 / 로그인
- 입력 값 유효성 검사
- 메뉴 네비게이션 바 (클릭 시 전체화면으로 구현)
- UseContext로 데이터 전역에서 사용
- 카트 개수 현황 조회
- 푸터 그리드로 구현
- 전체적으로 모두 백엔드에서 받은 데이터로 구현
  

#### 메인페이지

![gifit_1676864604674](https://user-images.githubusercontent.com/118322531/220034542-24cf3f1a-4972-418e-870b-7164b1070254.gif)
![gifit_1676864834148](https://user-images.githubusercontent.com/118322531/220034545-078ad687-1b94-4cb2-abb6-19ac9a2c92a9.gif)

- 추천 상품 영상 삽입
- 추천 상품 캐러셀

#### 제품 리스트 페이지
![gifit_1676864916426](https://user-images.githubusercontent.com/118322531/220034591-f44481d7-3f95-4c4f-b16a-7b4a7abd397b.gif)
![gifit_1676864949265](https://user-images.githubusercontent.com/118322531/220034595-6c853853-cdcc-447c-b714-bd218a7fd240.gif)
![gifit_1676864993628](https://user-images.githubusercontent.com/118322531/220034597-589ce902-963e-4a78-99ce-2c65ba26f64c.gif)
![gifit_1676865100392](https://user-images.githubusercontent.com/118322531/220034598-102c1be0-d91d-4cf0-86c9-5bd9de1bb061.gif)
![gifit_1676865138025](https://user-images.githubusercontent.com/118322531/220034601-6dc07a0f-01eb-41e5-9ae8-001496381435.gif)

- 백엔드에서 받은 상품 데이터 대로 출력
- 카테고리 전체보기 / 상세 카테고리 페이지 2개 레이아웃으로 구현
- 필터 기능으로 원하는 제품만 열람 가능
- 페이지 로딩 지연 시 버튼에 로딩 컴포넌트 구현
- 옵션 별로 라디오 버튼 생성
- 옵션 선택 후 버튼 클릭 시해당 값 백엔드로 전송

#### 상세 제품 페이지
![gifit_1676865190816](https://user-images.githubusercontent.com/118322531/220034630-ad54bf99-680a-4412-a9fe-7867a4c96094.gif)

- 옵션 별로 라디오 버튼 생성
- 옵션 선택 후 버튼 클릭 시 해당 값 백엔드로 전송
- 애니메이션 적용한 캐러셀 구현

#### 결제 페이지
![gifit_1676865260649](https://user-images.githubusercontent.com/118322531/220034693-5b9b79a5-6833-45cd-a19d-8d0f37f831cd.gif)
![gifit_1676865323524](https://user-images.githubusercontent.com/118322531/220034719-acd8119d-e244-4d47-8b49-5ac303ca1bef.gif)

- 마운트 애니메이션 적용
- 입력 창 애니메이션 적용
- 카트에 담은 제품 및 가격, 총합 , 개수 확인 가능
- 인풋 값 대로 백엔드에 데이터 전송

## Reference

- 이 프로젝트는 [Aesop](https://www.aesop.com/kr/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
  접기
