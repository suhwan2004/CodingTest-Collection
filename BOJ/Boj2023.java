import java.io.*;

/*
 * 걸린시간 : 2시간
 * Input : 신비한 소수의 최대 자릿수 (int)
 * Output : 신비한 소수
 * Constraints : 1 <= 자릿수 <= 8
 * Edge case : x
 * 
 * Time : O(10^8) 이나, 제곱근을 활용했기에 실동작시간은 더 작음.
 * Space : O(10^8)
 * ALGO : DFS, for
 * DS : String
 */
public class Boj2023 {
	static int degree; //입력받을 자릿
	static StringBuilder sb = new StringBuilder();
	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		degree = Integer.parseInt(br.readLine()); //자릿수를 입력받고 넣었음.

		dfs("", 0); //dfs 시작
		System.out.println(sb); //소수들을 넣어둔 StringBuilder인스턴스 출력
	}
	
	public static void dfs(String s, int cnt) {
		if(cnt == degree) { //정해진 자릿수까지 도달했다면 이건 소수가 맞다.
			sb.append(s).append("\n"); // 소수를 StringBuilder에 넣어줌.
			return;
		}
		
		for(int i = 1 ;i <= 9; i++) { //한 자릿수에는 1~9까지 들어올 수 있기에 확인해봄.
			if(isPrimeNumber(Integer.parseInt(s+i))) { // 지금 조합한 숫자가 소수인지 보고 소수라면 다음 dfs로 이동.
				dfs(s+i, cnt+1);
			}
		}
	}
	
	public static boolean isPrimeNumber(int num) {
		if(num == 1) return false; // 1은 무조건 소수가 아님.
		int sqrt = (int)Math.sqrt(num); // 지금 볼 num의 제곱근 까지만 봐도 소수를 판단할 수 있음
		for(int i = 2; i <= sqrt; i++) {
			if(num%i == 0) return false; //딱 맞아 떨어지면 소수가 아님.
		}
		
		return true; // 소수이기에 true 반환
	}
}
