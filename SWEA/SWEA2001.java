package 김수환;

import java.io.*;

/*
 * 18:57 ~ 19:21
 * Input : 테스트 케이스 횟수, 보드판의 너비, 한번에 잡을 수 있는 판의 너비, 보드판에 들어가는 내용
 * Output : 한번에 가장 많이 잡을 수 있는 파리 수
 * Contraints : 
 * 1. N 은 5 이상 15 이하이다.
   2. M은 2 이상 N 이하이다.
   3. 각 영역의 파리 갯수는 30 이하 이다.
   Edge case : x
   
   Time : O(N^2 * M^2) => 판의 넓이 * 한번에 파리를 잡는 면적의 넓이
   Space : O(N^2) => 판의 넓이
   ALGO : for
   DS : Array
 */
public class A021_SWEA2001_파리퇴치_과제3 {
	static int N, M; // 판의 너비, 파리잡는 영역의 너비
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		int T = Integer.parseInt(br.readLine()); //테스트 케이스의 갯수를 받음.
		
		for(int test_case = 1; test_case <= T; test_case++) { //갯수 받은 만큼 
			String[] input = br.readLine().split(" "); //N 과 M을 동시에 받고 밑줄에서 각각 할당
			N = Integer.parseInt(input[0]); 
			M = Integer.parseInt(input[1]);
			int[][] board = new int[N][N]; // N*N 만큼의 보드판 생성
			
			// 입력값들을 받아 보드판에 채워넣기
			for(int i = 0; i < N; i++) {
				String[] inputCol = br.readLine().split(" ");
				for(int j = 0; j < inputCol.length; j++) {
					board[i][j] = Integer.parseInt(inputCol[j]);
				}
			}
			
			//최대로 파리를 잡는 값
			int max = Integer.MIN_VALUE;
			//파리잡는 영역을 고려하여, N-M 면적만큼 돈다.
			for(int r = 0; r <= N-M; r++) {
				for(int c=0; c <= N-M; c++) {
					//그와 동시에, 각 board[r][c]를 기준으로 파리잡는 영역을 본다.
					int sum = 0;
					for(int i= r; i < r+M; i++) {
						for(int j = c; j < c+M; j++) {
							//sum에 지금 잡은 파리양을 더해준다.
							sum += board[i][j];
						}
					}
					max = Math.max(max, sum); // 이번 파리 잡는영역에서 잡은 파리를 max와 비교해서 최댓값을 갱신해준다.
				}
			}
			
			sb.append("#").append(test_case).append(" ").append(max).append("\n"); // Stringbuilder 인스턴스에 구한 최댓값을 넣어준다.
		}
		System.out.println(sb); // StringBuilder를 통해 한번에 출력해준다.
	}
}
