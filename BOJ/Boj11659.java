//필요한 패키지 import
import java.io.*;
import java.util.*;

/*
 * 11:45 ~ 12:30
 * 
 * Input : N은 들어올 숫자배열의 수(int), M은 구해야 하는 문제 수(int), 숫자 배열(int arr), M만큼 각 줄 별 시작지, 도착지(int, int)
 * Output : 각 문제별 구간의 합 출력
 * Constraints : 
 * 1 ≤ N ≤ 100,000
   1 ≤ M ≤ 100,000
   1 ≤ i ≤ j ≤ N
   수는 1000보다 작거나 같은 자연수이다.
   Edge case : x
   
   Time : O(N)
   Space :O(N)
   ALGO : for
   DS : array, string
 */

public class Boj11659 {
	static int N, M; // 숫자 배열의 수, 구해야 하는 문제 수
	static int[] arr; // 숫자 배열
	static int[] sumArr; // 숫자 배열의 인덱스 별로 누적합을 저장할 정수형 배열
	
	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder(); //결과를 저장할 StringBuilder 인스턴스 생성
		
		//N과 M을 입력받음.
		String[] input1 = br.readLine().split(" ");
		N = Integer.parseInt(input1[0]);
		M = Integer.parseInt(input1[1]);
		
		//N개의 수인 arr를 입력받음.
		String[] input2 = br.readLine().split(" ");
		arr = new int[input2.length]; 
		sumArr = new int[input2.length]; //arr을 생성함과 동시에, 같은 길이의 sumArr도 생성
		for(int i = 0; i < input2.length; i++) {
			arr[i] = Integer.parseInt(input2[i]); //입력받은 숫자배열을 넣어줌
			sumArr[i] += (i == 0 ? 0 : sumArr[i-1]) + arr[i]; // 현재 i(ndex)까지의 누적된 합을 넣음.
		}
		
		//문제 목록을 입력받음과 동시에 구간합 구하기.
		for(int i = 0; i < M; i++) {
			// 현재 문제를 입력받음. 출발지 s와 도착지 e를 구함.
			String[] curInput = br.readLine().split(" ");
			int s = Integer.parseInt(curInput[0]);
			int e = Integer.parseInt(curInput[1]);
			
			//출발지와 도착지가 같다면, 그냥 출발지의 값으로 치면 됨.
			//만약, 다르다면 도착지 까지의 누적합 - 출발지까지의 누적합을 하면 구간합을 구할 수 있음.
			if(s == e) sb.append(arr[s-1]).append("\n");
			else sb.append(sumArr[e-1] - (s-2 < 0 ? 0 : sumArr[s-2])).append("\n");
		}
		System.out.println(sb); // StringBuilder 인스턴스에 저장한 구간합 반환
	}
}
