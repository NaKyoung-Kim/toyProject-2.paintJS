# VanillaJS_toyProject-2.paintJS

바닐라 js로 그림판 만들기


https://a419802.github.io/VanillaJS_toyProject-2.paintJS/


![thumbnail](./thumbnail.png)


1. 화면 상단 우측에 위치한 버튼으로 모드 변경이 가능합니다.
   기본모드(라이트 모드)/다크모드
   <button class = "dayOrNight" />


2. 화면 중앙에 위치한 캔버스 위에서
   마우스 클릭 후 드래그하면 그림을 그릴 수 있습니다.


3. 화면 가장 아래에서 PAINT 또는 FILL 작업을 진행할 색상을 선택할 수 있습니다.


4. 화면 가장 아래, 색상 선택 버튼의 가장 오른쪽 버튼은 colorPicker 기능을 가지고 있습니다.

   버튼 클릭 후 원하는 색상을 고르고, 컬러피커 창의 오른쪽 하단부에 있는 Save 버튼을 클릭합니다.
   그 후, 컬러피커 창의 바깥부분을 클릭해 창을 끄고, 캔버스 위에 선택한 색상을 사용할 수 있습니다.
   
   colorPicker 창 안의 Save 버튼을 누르지 않고 캔버스에 그리려고 하면, 이전의 색이 화면에 출력되니 꼭 Save를 누른 후 진행해주세요.

   - ColorPicker는 Simonwep 님의 pickr를 이용하여 구현되었습니다.
     https://github.com/Simonwep/pickr


5. 화면 중앙, 캔버스 바로 아래에 위치한 버튼을 좌우로 드래그하면 선의 굵기를 조절할 수 있습니다.
   왼쪽으로 움직이면 선이 얇아지고, 오른쪽으로 움직이면 굵어집니다.
   <input type="range" />


6. FILL 버튼을 누른 후 캔버스를 클릭하면
   캔버스 전체가 현재 선택되어 있는 색으로 채워집니다.


7. SAVE 버튼을 누르면 현재까지 작업한 결과물이 사용자의 컴퓨터에 png 파일로 다운로드됩니다.


8. CLEAR 버튼을 통해 그림판을 초기화 할 수 있습니다.


9. 캔버스 위에서 마우스 우클릭은 제한되어 있습니다.
