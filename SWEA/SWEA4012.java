package 김수환;

import java.util.*;
import java.io.*;

public class SWEA4012 {
	static int[] A;
	static int[] B;
	static int[][] board;
	static int len;
	static int result;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		int tc = Integer.parseInt(br.readLine());

		for (int test_case = 0; test_case < tc; test_case++) {
			len = Integer.parseInt(br.readLine());
			board = new int[len][len];
			A = new int[len/2];
			B = new int[len/2];
			result = Integer.MAX_VALUE;
			for (int r = 0; r < len; r++) {
				StringTokenizer st = new StringTokenizer(br.readLine());
				for (int c = 0; c < len; c++) {
					board[r][c] = Integer.parseInt(st.nextToken());
				}
			}
			
			dfs(0,0,0);
			sb.append('#').append(test_case).append(' ').append(result).append('\n');
		}
		System.out.println(sb);
	}
	
	public static int getScore() {
		int getMin = Integer.MAX_VALUE;
		for(int i = 0; i < len/2; i++) {
			for(int j = i+1; j < len/2; j++) {
				int A1 = A[i];
				int A2 = A[j];
				
				int B1 = B[i];
				int B2 = B[j];
				int aTotal = board[A1][A2] + board[A2][A1];
				int bTotal = board[B1][B2] + board[B2][B1];
				
				getMin = Math.min(getMin, Math.abs(bTotal-aTotal));
			}
		}
		return getMin;
	}
	public static void dfs(int cur, int Acount, int Bcount) {
		if(cur == len) {
			//A와 B의 조합을 구해서 가장 작은 차이를 구한다
			result = Math.min(result, getScore());
			return;
		}
		
		//A에 추가해주는 경우
		if(Acount+1<=len/2) {
			A[Acount]=cur;
			dfs(cur+1, Acount+1, Bcount);
		}
		//B에 추가해주는 경우
		if(Bcount+1<=len/2) {
			B[Bcount]=cur;
			dfs(cur+1, Acount, Bcount+1);
		}
	}

}
