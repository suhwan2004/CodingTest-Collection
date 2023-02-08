//필요한 패키지 import
import java.io.*;
import java.util.*;
/*
 * 12:40 ~ 12:44, 14:00 ~ 14:13
 * 
 * Input : 표의 크기 N(int), 합을 구해야 하는 횟수(M), 표(int[][]), M만큼 출발지, 도착지의 좌표(int[4])
 * Output : M만큼 주어진 좌표들의 각 구간합을 구해서 출력.
 * Constraints : 1 ≤ N ≤ 1024, 1 ≤ M ≤ 100,000, 1<= board[i][j] <= 1000
 * Edge case : x
 * 
 * Time : O(MN) => 사용자 입력횟수 * (최악의 끝 Y - 시작X)
 * Space : O(N^2) => 각 행별 누적합을 넣었던 sumArr
 * ALGO : for
 * DS : Array, String
 */
public class Boj11660 {
	static int[][] board; //표를 넣기 위한 정수형 이차원 배열
	static int[][] sumArr; // 표의 누적합을 넣기 위한 정수형 이차원 배열
	static int N, M; // 입력받을 N, M
	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder(); //결과를 저장할 StringBuilder 인스턴스 생성
		
		// N과 M을 입력받음.
		String[] input = br.readLine().split(" "); //입력값 받기. 및 문자열 배열로 만듬.
		N = Integer.parseInt(input[0]);
		M = Integer.parseInt(input[1]);
		
		//위에서 받은 N을 통해 board, sumArr를 생성
		board = new int[N][N];
		sumArr = new int[N][N];
		//두번째 입력값들을 통해 표를 완성시키며, sumArr도 같이 완성시키기
		for(int i = 0; i < N; i++) {
			String[] arr = br.readLine().split(" ");
			int curSum = 0;
			for(int j = 0; j < N; j++) {
				int curVal = Integer.parseInt(arr[j]);
				board[i][j]= curVal;
				sumArr[i][j] = curVal + curSum;
				curSum += curVal;
			}
		}
		
		//M 만큼 들어오는 시작 좌표와 끝 좌표를 보기 위해 M만큼 for loop 돌기.
		for(int i = 0; i < M; i++) {
			//각 턴 별, 시작 끝 좌표 구하기.
			String[] curInput = br.readLine().split(" ");
			int curTurnSum = 0; // 현재 구간합을 저장할 변수
			
			// 시작, 끝 좌표를 저장하기.
			int sY = Integer.parseInt(curInput[0]);
			int sX = Integer.parseInt(curInput[1]);
			int eY = Integer.parseInt(curInput[2]);
			int eX = Integer.parseInt(curInput[3]);
			
			//만약, 시작, 끝 좌표가 아예 동일하다면 바로 반환
			//동일하지 않다면, 사전에 완성한 curSum을 통해 curTurnSum에 구간합을 넣어줌.
			if(sY == eY && sX == eX) sb.append(board[sY-1][sX-1]);
			else {
				
				//시작 좌표의 Y부터 ~ 끝 좌표의 Y까지 for loop
				for(int j = sY-1; j <= eY-1; j++) {
					//현재 Y에서 끝 X의 누적합 - 시작X-1 좌표의 누적합을 해서 curTurnSum에 넣어줌.
					curTurnSum += sumArr[j][eX-1] - (sX-2 < 0 ? 0 : sumArr[j][sX-2]);
				}
				sb.append(curTurnSum);
			}
			sb.append("\n"); // sb에 다음줄로 넘겨주는 개행문자를 넣어줌.
		}
		System.out.println(sb); //sb 출력
	}
}
