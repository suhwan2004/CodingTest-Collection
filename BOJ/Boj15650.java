//필요한 패키지 import
import java.io.*;

/*
 * 11:15 ~ 11:40
 * 
 * Input : 최대로 쓸 수 있는 수인 N(int), 수열의 최대길이인 M(int)
 * Output : 줃복없는 수열을 오름차순으로 출력
 * Contraints : (1 ≤ M ≤ N ≤ 8)
 * edge case : N과 M이 같다면 바로 출력물을 반환
 * 
 * Time : O(N^M)
 * Space : O(N^M), call stack
 * ALGO : reculsion, for
 * DS : Array, String
 */
public class Boj15650 {
	static int N, M;
	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] input = br.readLine().split(" "); //입력값 받기
		N = Integer.parseInt(input[0]);
		M = Integer.parseInt(input[1]);
		
		//edge case : N과 M이 같은 경우 그대로 1~N까지의 수 출력
		if(N == M) {
			for(int i = 1; i <= N; i++) {
				System.out.printf("%d ", i);
			}
			return;
		}
		
		//재귀 시작
		reculsion(new int[M], 0, 0);
	}
	public static void reculsion(int[] result, int prevVal, int dep) {
		// prevVal보다 dep이 아래에서 반복문을 돌려도 원하는 조합을 구할 수 없기에 바로 반환.
		if(dep!= M && prevVal<dep) return;
		
		//완성 시켰을 때,result 배열을 출력
		if(dep == M) {
			for(int i = 0; i < result.length; i++) {
				if(i == result.length-1) System.out.println(result[i]);
				else System.out.printf("%d ", result[i]);
			}
			return;
		}
		
		//그 전에 사용됬던 숫자보다 +1하여 반복문을 돌림. 다음 차수로 이동.
		for(int i = prevVal+1; i <= N; i++) {
			result[dep] = i;
			reculsion(result, i, dep+1);
		}
	}

}
