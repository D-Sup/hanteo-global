# 다단계 폼 관리 앱 구현 과제

## 📌 과제 개요

이 과제는 다단계 입력 폼을 구현하는 것입니다. 사용자는 여러 단계를 거쳐 정보를 입력하며, 입력된 정보는 뒤로 가기, 새로고침 시에도 유지되어야 합니다. 또한, 사용자의 진행 상태를 알 수 있도록 프로그레스 바를 포함해야 합니다.

## 🛠️ 구현 방식 및 기술 스택

- React 19
- 과제 시작 시 `feat: 과제 시작` 커밋 후 48시간 이내 구현 완료
- 개인 브랜치명은 `본인이름-multi-step-form` 형식으로 생성 (예: `junwoo-multi-step-form`)
- Git 브랜치 전략은 선택 사항이며, 각 기능 단위로 커밋하는 것을 권장 (지키면 추후 취업에 도움이 될 수 있지 않을까??)
  <details>
     <summary>🌿 Git 브랜치 전략 예시</summary>

  ```
  # 1. 프로젝트 브랜치 생성
  git checkout -b 본인이름-multi-step-form

  # 2. 작업 단위별 브랜치 생성 및 커밋
  git checkout -b feat/input-name   # 1단계: 이름 입력 구현
  git commit -m "feat: 이름 입력 폼 추가"
  git checkout 본인이름-multi-step-form
  git merge feat/input-name

  git checkout -b feat/select-gender   # 2단계: 성별 선택 구현
  git commit -m "feat: 성별 선택 폼 추가"
  git checkout 본인이름-multi-step-form
  git merge feat/select-gender

  git checkout -b feat/select-job   # 3단계: 직군 선택 구현
  git commit -m "feat: 직군 선택 폼 추가"
  git checkout 본인이름-multi-step-form
  git merge feat/select-job

  git checkout -b feat/select-hobby   # 4단계: 취미 선택 구현
  git commit -m "feat: 취미 선택 폼 추가"
  git checkout 본인이름-multi-step-form
  git merge feat/select-hobby

  git checkout -b feat/summary-input   # 5단계: 간단 소개 입력 구현
  git commit -m "feat: 간단 소개 입력 폼 추가"
  git checkout 본인이름-multi-step-form
  git merge feat/summary-input

  # 3. 병합이 완료되면 원격 저장소에 푸시
  git push origin 본인이름-multi-step-form
  ```

  </details>

- 상태 관리 라이브러리 자유 선택 (Recoil, Redux, Context API, Zustand 등)
- 스타일링 자유 (MUI, Tailwind, Styled-components 등)
- ESLint, Prettier 설정은 본인이 희망하는 방식으로 구성

## ✅ 필수 구현 사항

### 1. 상태 관리

- 새로고침 후에도 입력한 값이 유지될 것
- 뒤로 가기를 해도 이전 단계의 값이 보존될 것
- 상태 관리 라이브러리는 자유롭게 선택 가능
- 선택한 상태 관리 방식에 대한 설명을 README에 포함

### 2. UI 요소 및 기능

- 프로그레스 바: 진행 상태를 나타낼 것
- 버튼 활성화/비활성화 처리: 각 단계에서 필수 입력값이 없으면 다음 버튼이 비활성화되어야 함
- 입력값 검증: 필수 입력값이 없으면 다음 단계로 이동할 수 없도록 처리 (모달 또는 버튼 비활성화 방식 선택 가능)

### 3. 단계별 폼 구성

**1단계: 메인 화면**

- 첫화면 에서는 작성하기 버튼만 활성화
- ![1](https://github.com/user-attachments/assets/f728559f-18b8-4ebb-b87b-6b153fdd3be8)

**2단계: 이름 입력**

- 사용자가 이름을 입력
- ![2](https://github.com/user-attachments/assets/1c13b028-4603-4869-a362-f630508127cc)

**3단계: 성별 선택**

- 남자 / 여자 선택 (라디오 버튼)
- ![3](https://github.com/user-attachments/assets/f41eaa33-b704-473d-bc7b-860910a0c39a)

**4단계: 직군 선택**

- FE, BE 등 드롭다운으로 선택
- ![4](https://github.com/user-attachments/assets/2e370f57-57d0-4d55-b471-930b30490f3e)

**5단계: 취미 선택**

- 체크박스를 이용하여 3개 선택 가능
- 마지막 항목을 '기타'로 설정하여 직접 입력 가능
- ![5](https://github.com/user-attachments/assets/767e47b9-5e41-4659-bdf8-c9e194599245)

**6단계: 간단 소개 입력**

- textarea 입력
- 실시간 글자 수 체크(100자 이내)
- ![6](https://github.com/user-attachments/assets/3e92c917-473c-4a09-a5d2-8d4abe4b3845)

**7단계: 최종 제출**

- 모든 단계 완료 후 확인하기 제출 버튼 활성화
- ![7](https://github.com/user-attachments/assets/0fda9f43-f3f9-4fb2-9a29-5562b5586ac7)

## 📄 README 포함 내용

- 프로젝트 배포 링크
- 상태 관리 방식 및 이유 설명

## 🎯 평가 기준

- 상태 관리 방식의 적절성
- 코드 구조 및 재사용성
