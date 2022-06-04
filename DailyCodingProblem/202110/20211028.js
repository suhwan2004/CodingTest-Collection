/*
Conway's Game of Life takes place on an infinite two-dimensional board of square cells. Each cell is either dead or alive, and at each tick, the following rules apply:

Any live cell with less than two live neighbours dies.
Any live cell with two or three live neighbours remains living.
Any live cell with more than three live neighbours dies.
Any dead cell with exactly three live neighbours becomes a live cell.
A cell neighbours another cell if it is horizontally, vertically, or diagonally adjacent.

Implement Conway's Game of Life. It should be able to be initialized with a starting list of live cell coordinates and the number of steps it should run for. Once initialized, it should print out the board state at each step. Since it's an infinite board, print out only the relevant coordinates, i.e. from the top-leftmost live cell to bottom-rightmost live cell.

You can represent a live cell with an asterisk (*) and a dead cell with a dot (.).

translation

Conway의 Game of Life는 정사각형 셀의 무한한 2차원 보드에서 진행됩니다.
각 셀은 죽거나 살아 있으며 각 틱에서 다음 규칙이 적용됩니다.
1. 살아있는 이웃이 2개 미만인 살아있는 세포는 죽습니다.
2. 두세 개의 살아있는 이웃이 있는 살아있는 세포는 살아 있습니다.
3. 살아있는 이웃이 3개 이상 있는 살아있는 세포는 죽습니다. 정확히 3개의 살아있는 이웃이 있는 죽은 세포는 살아있는 세포가 됩니다. 가로, 세로 또는 대각선으로 인접한 셀은 다른 셀과 인접합니다. 

Conway의 Game of Life를 구현하십시오. 라이브 셀 좌표의 시작 목록과 실행해야 하는 단계 수로 초기화할 수 있어야 합니다.
초기화되면 각 단계에서 보드 상태를 인쇄해야 합니다. 무한 보드이기 때문에 가장 왼쪽 상단 라이브 셀에서 
가장 오른쪽 하단 라이브 셀까지 관련 좌표만 인쇄합니다. 별표(*)로 살아있는 세포를 나타내고 점(.)으로 
죽은 세포를 나타낼 수 있습니다.
*/
