import java.io.*;
import java.util.*;

public class Boj1987 {
	static int pR = 0, pC = 0;
	static int R, C;
	static char[][] board;
	static int[][] visited;
	static Set<Character> set;
	static int maxMove = Integer.MIN_VALUE;
	static int[][] directions = {{0,1}, {1,0}, {-1,0}, {0,-1}};
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		R = Integer.parseInt(st.nextToken());
		C = Integer.parseInt(st.nextToken());
		board = new char[R][C];
		visited = new int[R][C];
		
		for(int i = 0; i < R; i++) {
			String input = br.readLine();
			for(int j = 0; j < C; j++) {
				board[i][j] = input.charAt(j);
			}
		}
		set = new HashSet<>();
		
		set.add(board[pR][pC]);
		dfs(pR, pC, 1);
		System.out.println(maxMove);
	}
	
	
	public static void dfs(int curR, int curC, int cnt) {
		visited[curR][curC] = cnt;
		for(int[] dir: directions) {
			int newR = curR + dir[0];
			int newC = curC + dir[1];
			
			if(newR>=0 && newR<R && newC>=0 && newC<C && !set.contains(board[newR][newC])) {
				if(visited[newR][newC] != 0 || cnt+1 > visited[newR][newC]) {
					set.add(board[newR][newC]);
					dfs(newR, newC, cnt+1);
					set.remove(board[newR][newC]);
				}
			}
		}
		maxMove = Math.max(cnt,maxMove);
	}
}