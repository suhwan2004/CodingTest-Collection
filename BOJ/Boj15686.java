//필요한 패키지 import
import java.util.*;
import java.io.*;

public class Boj15686 {
	static int N, M; // 입력받은 이차원 배열(도시)의 변의 길이, 남겨놓은 치킨 집의 갯수
	static int[][] board; // 도시를 저장할 이차원 배열
	static int[][] homeArr; // 도시 중, 집의 좌표를 저장할 이차원 배열
	static int[][] chickArr; // 도시 중, 치킨집의 좌표를 저장할 이차원 배열
	static List<int[]> chickCombination; // 치킨 집들의 조합을 저장하는 ArrayList
	static int[] numbers; //현재, 조합 진행 중 담긴 치킨 집을 저장하는 배열
	static int chickCnt; //실제 치킨집의 갯수
	static int homeCnt; //실제 집의 갯수
	static int result = Integer.MAX_VALUE; // 가장 효율적인 치킨거리의 값

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); // 입력을 위한 BufferedReader 인스턴스 생성
		StringTokenizer st = new StringTokenizer(br.readLine()); //StringToken에 현재, N M을 받은 값을 저장.
		StringBuilder sb = new StringBuilder(); //출력 값을 넣을 StringBuilder 인스턴스 생성
		N = Integer.parseInt(st.nextToken()); //st안에 들어있는 N을 넣기
		M = Integer.parseInt(st.nextToken()); //st안에 들어있는 M을 넣기

		board = new int[N][N]; // N*N만큼의 넓이로 board 생성
		homeArr = new int[2 * N][2]; // 최대 2*N만큼 존재하도록 homeArr 생성
		chickArr = new int[13][2]; // 최대 13만큼 존재하도록 chickArr 생성
		chickCombination = new ArrayList<int[]>(); // chickCombination 생성
		numbers = new int[M]; // 살려둘 치킨집 갯수만큼 존재하도록 numbers 생성
		homeCnt = 0; // homeCnt를 0으로 초기화
		chickCnt = 0; // chickCnt를 0으로 초기화

		//N * N만큼 이중 for loop를 돌며, board에 실제, 도시를 세팅해줌.
		for (int i = 0; i < N; i++) {
			st = new StringTokenizer(br.readLine()); // i번째 row에 들어가는 column들을 st로 받아줌.
			for (int j = 0; j < N; j++) {
				board[i][j] = Integer.parseInt(st.nextToken()); // st에 담긴 column을 board[i][j]에 넣어줌.
				if (board[i][j] == 1) {
					// 집을 찾은 경우, homeArr에 저장함.
					homeArr[homeCnt++] = new int[] { i, j };
				} else if (board[i][j] == 2) {
					// 치킨집을 찾은 경우, chickArr에 저장함.
					chickArr[chickCnt++] = new int[] { i, j };
				}
			}
		}
		
		//전체 치킨집 중 M개만큼의 치킨집의 조합을 구함.
		combination(0, 0);

		//구한 조합별로, 가장 효율적인 치킨거리들의 합값을 구하고, 현재 result와 현재 조합을 통해 구한 치킨거리들의 합값을 비교해서 result갱신
		for (int[] curChick : chickCombination) {
			result = Math.min(result, getChickDistance(curChick));
		}
		
		//최종적으로 구한 result를 sb에 추가.
		sb.append(result);
		//위에서 넣은 sb를 출력
		System.out.println(sb);
		
		//사용한 BufferedReader 닫기
		br.close();
	}

	//현재, 조합에 따른 치킨거리의 합을 구하는 메소드
	public static int getChickDistance(int[] curChick) {
		int[] sumArr = new int[homeCnt]; // 현재, 조합에서 나온 집별 최소 치킨거리를 저장하는 배열 생성
		int distanceSum = 0; //현재, 치킨 거리의 합을 저장하는 변수
		for (int i = 0; i < curChick.length; i++) {
			for (int j = 0; j < homeCnt; j++) {
				int curChickRow = chickArr[curChick[i]][0]; //현재 보는 치킨집의 row
				int curChickCol = chickArr[curChick[i]][1]; //현재 보는 치킨집의 column
				int curHomeRow = homeArr[j][0]; // 현재 보는 집의 row
				int curHomeCol = homeArr[j][1]; // 현재 보는 집의 column
				
				//현재 보는 집과 치킨집 사이의 거리를 구함.
				int curDistance = Math.abs(curChickRow - curHomeRow) + Math.abs(curChickCol - curHomeCol);
				
				//만약, i가 0이라면 sumArr에는 어떠한 거리도 들어있지 않기 때문에 최초값으로 구한 거리를 비교없이 넣어주도록 함.
				//만약, i가 0이 아니라면 기존에 구한 sumArr[j]와 비교해서 더 작은 값으로 sumArr[j]를 갱신해줌.
				sumArr[j] = i == 0 ? curDistance : Math.min(sumArr[j], curDistance);
			}
		}
		
		//sumArr에 들어있는 각 집별 최소 치킨거리를 다 합해줌.
		for(int curSum : sumArr) {
			distanceSum += curSum;
		}
		
		//완성된 distanceSum을 반환해줌.
		return distanceSum;
	}

	//조합을 구하는 메서드
	public static void combination(int prevVal, int dep) {
		
		//원하는 조합 하나를 완성했다면
		if (dep == M) {
			//조합을 담을 새로운 배열 생성
			int[] newArr = new int[numbers.length];
			//배열의 길이만큼 for loop를 돌음.
			for (int i = 0; i < numbers.length; i++) {
				//새 배열의 i번째에 지금 만든 조합의 i번째 값을 넣어줌.
				newArr[i] = numbers[i];
			}
			// 조합이 담긴 newArr를 모든 조합을 넣는 chickCombination에 추가해줌.
			chickCombination.add(newArr);
			return;
		}

		// 실제 치킨집의 갯수만큼 for loop를 돌되, 기존에 봤던 인덱스보다는 1 더 앞으로 시작함.
		for (int i = prevVal; i < chickCnt; i++) {
			// 하나의 조합 케이스를 추가하고, 다음 재귀로 넘어감.
			numbers[dep] = i;
			combination(i + 1, dep + 1);
		}
	}

}
