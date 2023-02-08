//필요한 패키지 import
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;

/*
 * 14:20 ~ 17:01
 * Input : 10번 반복, 하나는 현재 번호, 하나는 100*100의 게임판 내부에 값 삽입
 * Output : 사다리를 타서 목적지에 도착할 수 있는 출발좌표
 * C : 
 * - 한 막대에서 출발한 가로선이 다른 막대를 가로질러서 연속하여 이어지는 경우는 없다.
 * - board.length == 100 , board[0].length == 100
 * 
 * Time : O(10*N*3^N) => O(N*3^N) , N은 board의 길이
 * Space : O(3^N) => call stack!
 * ALGO : for, dfs
 * DS : 2d array, array
 * 
 * 시간 초과 원인
 * - input과 로직의 차이때문에 많이 방황한 것 같습니다.
 * 	- bufferedReader, stringTokenizer -> scanner -> bufferedReader의 과정이 있었습니다...
 */
public class SWEA1210 {
	static int[][] direction = { { 0, 1 }, { 0, -1 }, { 1, 0 } };
	static HashSet<String> set = new HashSet<String>();
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		for (int test_case = 1; test_case <= 10; test_case++) {
			int curTurn = Integer.parseInt(br.readLine()); // 현재 턴을 입력
			int[][] board = new int[100][100]; // 100 * 100 사다리판 생성
			
			//입력을 통한 사다리판에 값 삽입
			for(int i = 0; i < 100; i++) {
				String[] arr = br.readLine().split(" ");
				for (int j = 0; j < 100; j++) {
					board[i][j] = Integer.parseInt(arr[j]);
				}
			}
			
			//board[0][c] 를 톨면서 사다리를 시작할 수 있는 1인 부분을 찾음. 찾는데 성공하면 dfs를 그 좌표로 시작
			for (int c = 0; c < board[0].length; c++) {
				if (board[0][c] == 1) {
					//사다리를 탔을 때, 목적지로 제대로 도착한 경우
					if (dfs(board, 0, c)) {
						System.out.printf("#%d %d", test_case, c);
						System.out.println();
					}
				}
				//set 재사용을 위한 clear
				set.clear();
			}
		}
	}

	//사다리 타기를 하기 위한 dfs function
	public static boolean dfs(int[][] board, int row, int col) {
		// 도착지 도착성공
		if (board[row][col] == 2) {
			//true를 반환
			return true;
		}
		// 더 가야할 경우, 좌, 우, 아래를 봐서 갈 수 있는 곳을 이동. 아래보다는 좌,우가 우선순위임.
		for (int[] curDir : direction) {
			int newRow = curDir[0] + row;
			int newCol = curDir[1] + col;
			// 지금 보는 경로가 게임 판 내에 존재하며, 사다리 또는 도착지이며, set에 기록된 곳이 아니라면 이동가능.
			if (newRow >= 0 && newRow < board.length && newCol >= 0 && newCol < board[0].length
					&& board[newRow][newCol] != 0 && !set.contains(Integer.toString(newRow)+","+Integer.toString(newCol))) {
				//방문지를 set에 저장하고, 다음 위치로 이동
				set.add(Integer.toString(newRow)+","+Integer.toString(newCol));
				return dfs(board, newRow, newCol);
			}
		}
		//경로를 찾지 못한 것이기에 false
		return false;
	}
}
