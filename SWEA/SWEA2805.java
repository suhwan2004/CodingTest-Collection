//필요한 패키지 import
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/*
 * 17:20 ~ 17:41
 * Input : 테스트 케이스의 갯수(int),  갯수만큼 반복으로 받는 것은 농장의 변 크기(int), 농장의 각 땅별 이익(int[크기][크기])
 * Output : 테스트 케이스 별로, 농장 이익(int)
 * C : 
 * - 농장의 크기 N은 1 이상 49 이하의 홀수이다. (1 ≤ N ≤ 49)
 * - 농작물의 가치는 0~5이다.
 * Edge case : 농장의 크기가 1이라면 바로 내부 요소를 출력시킴
 * 
 * Time : O(T * N^2) => T : 테스트 케이스의 갯수, N : 농장의 한 변
 * Space : O(N^2) => board판.
 * ALGO : for
 * DS : Array, String
 */
public class A012_SWEA2805_농작물수확하기 {
	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		//테스트 케이스의 갯수를 받음
		int totalCase = Integer.parseInt(br.readLine());
		
		//테스트 케이스의 갯수만큼 반복하기
		for(int test_case = 1; test_case <= totalCase; test_case++) {
			int farmSize = Integer.parseInt(br.readLine()); //농장의 크기 받음
			int[][] farm = new int[farmSize][farmSize]; //받은 크기만큼의 농장(2차원배열) 생성
			int totalBenefit = 0; // 추후, 출력할 합산이익 변수 생성
			
			//edge case 1 : 만약, 농장의 크기가 1이라면 바로 출력
			if(farmSize == 1) {
				System.out.printf("#%d %d",test_case, Integer.parseInt(br.readLine()));
				System.out.println();
				continue;
			}
			
			// farm에 입력값을 채워넣기
			for(int i = 0; i < farm.length; i++) {
				String[] arr = br.readLine().split("");
				for(int j = 0; j < farm.length; j++) {
					farm[i][j] = Integer.parseInt(arr[j]);
				}
			}
			
			//가로길이 내에서 가운데를 중점으로 잡은 lCol, rCol 변수 생성
			int lCol = (int) Math.floor(farm.length/2);
			int rCol = (int) Math.floor(farm.length/2);
			for(int i = 0; i <= (int) Math.floor(farm.length/2); i++) {
				//i가 0이라면, 쌩 가운데이기 때문에 좌우 구분없이 하나만 이익 계산에 넣기
				if(i == 0) {
					totalBenefit += getBenefit(farm, lCol, i);
					continue;
				}
				// i가 1 이상이라면, 좌, 우로 갈라나눠져서 이익 계산
				totalBenefit += getBenefit(farm, --lCol, i) + getBenefit(farm,++rCol,i);
			}
			// 지금 케이스에서, 합산한 결과 출력
			System.out.printf("#%d %d",test_case, totalBenefit);
			System.out.println();
		}
	}
	
	// 지금 col 위치에서 세로로 내려가면서 이익을 계산함.
	// dist는 위의 i값인데, 이 dist만큼 위 아래로 이익을 세지 않고 다음 row로 이동함.
	public static int getBenefit(int[][] farm, int col, int dist) {
		int curBenefit = 0;
		for(int i = 0; i < farm[0].length; i++) {
			if(i <= dist-1 || i >= farm[0].length-dist) {
				continue;
			}
			curBenefit +=farm[i][col];
		}
		return curBenefit;
	}

}
