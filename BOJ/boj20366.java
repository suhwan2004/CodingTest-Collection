import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

/*
 * Input : int N(4 <= N <= 600), int array(각 눈덩이의 지름,1 <= H <= 10^9)
 * Output : 두 눈사람의 최소인 키 차이 
 * C : 위에 나와있음.
 * E : x
 * 
 * 문제 풀이
 * 
 * 1. 투포인터의 경우 정렬을 해야됨. 정렬시킨다. 3 4 5 5 9 
 * 2. f, s로 눈사람 1의 기준점을 잡는다.
 * 3. f, s를 제외한 조합으로 눈사람1과 차이가 가장 낮은 눈사람 1을 만든다.
 * 
 * 시간 초과 원인
 * - 내부에 넣은 while 제어를 못했음.
 * - f와 s, l과 r을 더해야 됬는데 뺐음.
 * - 눈사람의 갭에 따라 l 과 r을 제어해야 했는데 눈사람2의 크기가 양수인지 음수인지로 제어했음.
 *
 * Time : O(NLogN + N^3)
 * Space : O(N)
 * ALGO : two pointer, for
 * DS : Array
 *
 */
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class boj20366 {
	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int N = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
		int array[] = new int[N];
		for (int i = 0; i < N; i++)
			array[i] = Integer.parseInt(st.nextToken());
		Arrays.sort(array);
		
		int min = Integer.MAX_VALUE;
		for(int f = 0; f < N; f++) {
			for(int s = f+1; s < N; s++) {
				int l = 0, r = array.length-1;
				int snowman1 = array[s] + array[f];
				while(l < r) {
					if(l == f || l == s) {
						l++;
						continue;
					}
					if(r == f || r == s) {
						r--;
						continue;
					}
					int snowman2 = array[r] + array[l];
					min = Math.min(min, Math.abs(snowman1 - snowman2));
					if(snowman1 > snowman2) l++;
					else if(snowman1 < snowman2) r--;
					else {
						System.out.println(0);
						return;
					}
				}
			}
		}
		System.out.println(min);
	}

}


