//io 패키지 임포트
import java.io.*;

/* 
 * 2023.02.07 11:58 ~ 12 14
 * 
 * Input : 자연수 N과 M
 * Output : 모든 수열 출력
 * Constraints : 1 <= M <= N <= 8
 * Edge Case : x
 * 
 * Time : O(N!) => 최악의 경우 N과 M이 동일하면 발생 
 * Space : O(N! * M * 2) => 시간복잡도만큼 생성이 되며, 안에 들어가는 각 수열은 M * 2의 사이즈를 가짐
 * ALGO : reculsion, for
 * DS : array, string
 * 
 * 
 */
public class Boj15649 {
	static int[] numbers; // 순열을 담는 배열
	static boolean[] isSelectedNumber; // 1~N까지의 숫자를 사용했는지 확인하는 배열
	static StringBuilder sb = new StringBuilder(); // 순열들을 저장하기 위해 StringBuilder 사용
	static int N, M; // 입력값 N과 M. N은 1~N까지 사용 가능한 숫자, M은 순열의 길이
	
	public static void main(String[] args) throws IOException {
		
		// BufferedReader 인스턴스 생성 및, 입력값을 받아 N과 M에 저장하고, 나머지 static 배열들 생성.
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] input = br.readLine().split(" ");
		N = Integer.parseInt(input[0]);
		M = Integer.parseInt(input[1]);
		
		numbers = new int[M];
		isSelectedNumber = new boolean[N+1];
		
		// 순열 생성 시작. cnt는 0부터 시작함.
		permutation(0);
		
		// StringBuilder에 저장된 순열들을 반환
		System.out.println(sb);
	}
	
	// 순열을 구하기 위한 메서드
	public static void permutation(int cnt) { // cnt를 통해 현재, 몇변째 수를 수열에 채우는지 알 수 있음.
		if(cnt == M) { // 수열을 완성했을 꼉우
			 // 수열이 담겨있는 numbers의 길이만큼 돌며, 각 요소를 StringBuilder에 저장.
			for(int i = 0; i < numbers.length; i++) {
				sb.append(numbers[i]);
				if(i != numbers.length-1) sb.append(" ");
			}
			sb.append("\n");
			return; //현재 재귀를 종료.
		}
		
		// 수열을 아직 완성하지 못했을 경우, for을 돌며 N까지의 수 중에 아직 사용하지 않은 수로 순열을 만듬.
		for(int i = 1; i <= N; i++) {
			if(isSelectedNumber[i] == true) continue; //이미 사용한 수이기에 continue로 넘김.
			//사용하지 않은 수를 발견. numbers에 저장하고, isSelectNumber에 해당 수를 사용중임을 true를 넣어 표시.
			numbers[cnt]=i;
			isSelectedNumber[i] = true;
			
			//다음 차수로 이동.
			permutation(cnt+1);
			
			//순열이 하나완성되서 재귀가 끝나서 돌아옴. 위에서 저장했던 수를 빼기 위해서 isSelectedNumber[i]에 false 삽입.
			isSelectedNumber[i] = false;
		}
	}
}
