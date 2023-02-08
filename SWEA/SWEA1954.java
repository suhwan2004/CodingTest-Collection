import java.util.*;
import java.io.*;
/*
 * 14:14 ~ 14 : 35
 * 
 * Input : test case 갯수(int), test case 갯수만큼 들어오는 달팽이 이차원배열의 한 변 길이(int)
 * Ouput : 각 테스트 케이스별 달팽이의 모습을 출력
 * Constraints : (1 ≤ N ≤ 10)
 * Edge case : x
 * 
 * Time : O(MN^2) => M은 테스트 케이스의 횟수, N은 한 변의 최악의 길이
 * Space : O(N^2) => 달팽이 이차원 배열 생성.
 * ALGO : for
 * DS : Array, String
 */
public class SWEA1954 {
	//dy, dx는 하나의 쌍임. 위, 오른쪽, 아래, 왼쪽 순.
	static int[] dy = { 1, 0, -1, 0 };
	static int[] dx = { 0, 1, 0, -1 };
	public static void main(String args[]) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder(); //출력을 저장할 StringBuilder 인스턴스 생성
		int T = Integer.parseInt(br.readLine()); // 테스트 케이스 횟수를 입력을 받음.
		
		// 테스트 케이스 횟수만큼 for loop를 돌음
		for (int test_case = 1; test_case <= T; test_case++) {
			int num = 1; // 달팽이를 돌면서 하나씩 늘어나는 숫자
			int x = 0, y = 0, dir = 0; //현재 좌표와 방향을 저장하는 변수들
			int n = Integer.parseInt(br.readLine()); //달팽이 이차원 배열의 한 변의 길이
			int map[][] = new int[n][n]; // n을 통한 달팽이 이차원 배열 생성
			
			// 이차원 배열의 모든 칸을 다 볼 때까지 반복
			while (num <= (n * n)) {
				map[x][y] = num++; // 하나씩 증가시키기 이제 상하좌우로 이동 먼저 오른쪽에서 왼쪽으로
				
				//우선, 현재 지정된 dir으로 이동. 위에서 만들었던, dy, dx가 움직이는 기준점임.
				x += dx[dir];
				y += dy[dir];
				
				// 만약, 이동한 곳이 이차원 배열의 범위 밖이거나, 이미 갔었던 곳이라면?
				if (x > n - 1 || x < 0 || y > n - 1 || y < 0 || map[x][y] != 0) {
					//위에서 한번 움직였던 것을 철회시켜 주기.
					x -= dx[dir];
					y -= dy[dir];
					
					//다음 방향으로 바꾸기
					dir = (dir + 1) % 4;
					
					//정상적으로 바뀐 dir를 통해 이동을 실시함.
					x += dx[dir];
					y += dy[dir];
				}
			}
			
			//달팽이 배열이 완성되었기 때문에 출력을 준비함.
			//먼저 sb에 테스트 케이스의 순서를 넣어줌.
			sb.append("#").append(test_case).append("\n");
			
			//달팽이 이차원 배열을 다 보면서 sb에 넣어줌.
			for (int i = 0; i < n; i++) {
				for (int j = 0; j < n; j++) {
					sb.append(map[i][j]);
					if (j != n - 1)
						sb.append(" ");
				}
				// 한 가로줄마다 개행문자 삽입
				sb.append("\n");
			}
		}
		
		//완성된 sb를 출력
		System.out.println(sb);
	}
}