//필요한 패키지 import
import java.util.*;
import java.io.*;

public class Boj17406 {
	static int N, M, K; //보드판의 가로, 세로, 문제 케이스의 갯수
	static int[][] board; // 실제 문제에서 사용되는 이차원 배열 보드판
	static int[][] copyBoard; // 배열 회전 시, 사용할 보드판을 카피할 이차원 배열
	static int[][] problems; // 입력받은 문제 케이스들을 저장할 이차원 배열
	static boolean[] isSelected; // permutation 시, 이미 사용된 index인지 확인하기 위한 체킹용 배열
	static int[] numbers; // 문제 케이스의 순서를 의미하는 순열을 저장하기 위한 배열
	static int totalMin; // 결론적으로 구한 가장 작은 가로줄 값을 저장할 변수
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); //입력을 위해 BufferedReader 인스턴스를 생성함.
		
		String[] input = br.readLine().split(" "); //N,M,K를 배열로 받음
		N = Integer.parseInt(input[0]); // 보드판의 가로길이
		M = Integer.parseInt(input[1]); // 보드판의 세로길이
		K = Integer.parseInt(input[2]); //문제 케이스의 갯수
		totalMin = Integer.MAX_VALUE; // 최종적으로 가장 작은 가로줄 값을 담을 변수 생성
		
		board = new int[N][M]; // 위에서 입력받은 N과 M을 통해, 보드판 이차원 배열 생성
		problems = new int[K][3]; // 위에서 입력받은 K를 통해 문제 케이스를 저장할 problems 이차원 배열 생성
		
		
		// 보드판을 입력받은 대로 채워줌.
		for(int r = 0; r < N; r++) {
			StringTokenizer st = new StringTokenizer(br.readLine()); // StringTokenizer를 통해 한 row의 columns들을 다 입력으로 가져옴.
			for(int c = 0; c < M; c++) {
				board[r][c] = Integer.parseInt(st.nextToken()); //위에서 가져온 값들을 통해 board판을 채움.
			}
		}
		
		//입력받은 문제 케이스를 problems 배열에 저장함.
		for(int i = 0; i < K; i++) {
			//problems[i] = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
			StringTokenizer st = new StringTokenizer(br.readLine());
			problems[i][0] = Integer.parseInt(st.nextToken())-1;
			problems[i][1] = Integer.parseInt(st.nextToken())-1;
			problems[i][2] = Integer.parseInt(st.nextToken());
		}
		//isSelected 순열 생성을 위한 isSelected 배열을 생성함.
		isSelected = new boolean[K+1];
		//문제 케이스의 순서를 저장할 numbers 배열 생성
		numbers = new int[K];
		// 문제 케이스에 대한 순열 생성 및 배열 회전을 위한 permutation 메서드 실행.
		permutation(0);
		
		//최종적으로 구한 가장 작은 가로줄 값을 반환
		System.out.println(totalMin);
	}
	
	public static void permutation(int cnt) {
		//원하는 차수까지 조합이 생성됬다면?
		if(cnt == K) {
			
			//기존 board배열을 복사해서 copyBoard 생성.
			copyBoard = new int[N][M];
			for(int r = 0; r < N; r++) {
				for(int c = 0; c < M; c++) {
					copyBoard[r][c] = board[r][c];
				}
			}
			
			//copyBoard를 numbers에 담긴 problems를 가져와서 각 curRotate를 참고하여 회전들을 진행함.
			for(int curRotate : numbers) {
				rotateBoard(curRotate);
			}
			//배열 회전 완료. 이후, 만들어진 보드의 최저 가로줄을 totalMin과 비교.
			totalMin = Math.min(totalMin, getMinVal());
			return;
		}
		//사전에 지정했던 문제 케이스들의 수만큼 loop를 돌음.
		for(int i = 1; i <= K; i++) {
			if(isSelected[i]) continue; // 사용한 숫자라 다음으로 넘김.
			numbers[cnt]=i-1; //현재 보는 i-1 케이스를 사용함.
			isSelected[i]=true; //사용한 표시 넣어주기.
			permutation(cnt+1); //다음 차례에 진행할 케이스를 정하기 위해 cnt를 하나 올려주고 다음 재귀 진행.
			isSelected[i]=false; // 다 보고난 이후에는, 안 쓴 상태로 만들기 위해 false 해주기.
		}
	}
	
	//배열을 시계방향으로 1회전
	public static void rotateBoard(int curRotate) {
		//각 시작, 끝 x,y 좌표를 기존에 저장했던 problems를 통해서 구함.
		int startR = problems[curRotate][0]-problems[curRotate][2]; // 가장 윗 칸의 시작 row
		int startC = problems[curRotate][1]-problems[curRotate][2]; // 가장 윗 칸의 시작 column
		int endR = problems[curRotate][0]+problems[curRotate][2]; // 가장 아랫 칸의 시작 row
		int endC = problems[curRotate][1]+problems[curRotate][2]; // 가장 아랫 칸의 시작 column
		
		//배열 회전
		while(startR < endR && startC < endC) {
			int curR = startR; //현재 위치한 row
			int curC = startC; //현재 위치한 column
			int prev, cur; // 이전 값을 저장할 prev 와 cur을 생성
			prev = copyBoard[curR+1][curC]; // prev를 사전에 생성해두고 시작.
			
			// 맨 윗 가로줄을 시계방향으로 1칸 회전
			for(int i = startC; i < endC; i++) {
				cur = copyBoard[startR][i]; // 현재 값을 cur에 저장.
				copyBoard[startR][i] = prev; // 기존에 저장했던 prev를 현재 보는 좌표에 넣어줌.
				prev = cur; // prev에는 다시, 현재 값이었던 cur을 넣어줌.
			}
			
			//맨 오른쪽 세로줄을 시계방향으로 1칸 회전
			for(int i = startR; i < endR; i++) {
				cur = copyBoard[i][endC]; // 현재 값을 cur에 저장.
				copyBoard[i][endC] = prev; // 기존에 저장했던 prev를 현재 보는 좌표에 넣어줌.
				prev = cur; // prev에는 다시, 현재 값이었던 cur을 넣어줌.
			}
			
			//맨 아래 가로줄을 시계방향으로 1칸 회전
			for(int i = endC; i > startC; i--) {
				cur = copyBoard[endR][i]; // 현재 값을 cur에 저장.
				copyBoard[endR][i] = prev; // 기존에 저장했던 prev를 현재 보는 좌표에 넣어줌.
				prev = cur; // prev에는 다시, 현재 값이었던 cur을 넣어줌.
			}
			
			//맨 왼쪽 세로을 시계방향으로 1칸 회전
			for(int i = endR; i > startR; i--) {
				cur = copyBoard[i][startC]; // 현재 값을 cur에 저장.
				copyBoard[i][startC] = prev; // 기존에 저장했던 prev를 현재 보는 좌표에 넣어줌.
				prev = cur; // prev에는 다시, 현재 값이었던 cur을 넣어줌.
			}
			
			// 현재 보는 테두리가 끝났기 때문에 배열의 더 1칸 안쪽으로 출발지, 시작지를 갱신함.
			startR++;
			startC++;
			endR--;
			endC--;
		}
	}
	
	// 현재, 회전을 끝낸 보드판의 가장 작은 가로줄 sum 값을 구하는 메서드
	public static int getMinVal() {
		int curCaseMin = Integer.MAX_VALUE; //현재 보드에서 가장 작은 가로줄 sum 값을 저장할 변수
		
		// 보드판을 2중 for문을 통해 완전히 돌음.
		for(int r = 0; r < N; r++) { 
			int curSum = 0; // 현재, 가로줄을 더한 총 값
			for(int c = 0; c < M; c++) {
				curSum += copyBoard[r][c]; //가로줄에 속해있는 한 요소의 값을 더함.
			}
			curCaseMin = Math.min(curCaseMin, curSum); // curCaseMin을 curSum을 통해 갱신 시도 및 갱신함.
		}
		return curCaseMin; // 위의 과정을 통해 구한 현재, 보드판에서 가장 작은 가로줄 sum 값을 반환
	}

}
