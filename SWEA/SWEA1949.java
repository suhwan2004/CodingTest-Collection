import java.io.*;
import java.util.*;

/*
 * 15:42 ~ 16:42
 */
public class SWEA1949 {
	static int[][] directions = { { 0, 1 }, { 1, 0 }, { -1, 0 }, { 0, -1 } };
	static int N, K;
	static boolean Kflag;
	static int[][] board;
	static Set<String> visited;
	static int maxPath;
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		int T = Integer.parseInt(br.readLine());

		for (int test_case = 1; test_case <= T; test_case++) {
			String[] arr = br.readLine().split(" ");
			N = Integer.parseInt(arr[0]);
			K = Integer.parseInt(arr[1]);
			board = new int[N][N];
			Kflag = true;
			visited = new HashSet<>();
			
			Set<String> set = new HashSet<>();
			int max = Integer.MIN_VALUE;
			maxPath = Integer.MIN_VALUE;
			
			for (int i = 0; i < N; i++) {
				String[] inputCol = br.readLine().split(" ");
				for (int j = 0; j < inputCol.length; j++) {
					board[i][j] = Integer.parseInt(inputCol[j]);
					max = Math.max(max, board[i][j]);
				}
			}

			// 현재, max값을 가진 좌표들을 set에 담음.
			for (int i = 0; i < N; i++) {
				for (int j = 0; j < N; j++) {
					if (board[i][j] == max) {
						set.add(Integer.toString(i) + "," + Integer.toString(j));
					}
				}
			}
			
			Iterator iter = set.iterator();
			while (iter.hasNext()) {
				String[] txtArr = ((String) iter.next()).split(",");
				dfs(Integer.parseInt(txtArr[0]), Integer.parseInt(txtArr[1]), 1);
			}
			sb.append("#").append(test_case).append(" ").append(maxPath).append("\n");
		}
		System.out.println(sb);
	}

	public static void dfs(int r, int c, int distance) {
		for(int[] direction : directions) {
			int newR = r + direction[0];
			int newC = c + direction[1];
			String posStr = Integer.toString(r)+","+Integer.toString(c);
			String newPosStr = Integer.toString(newR) + "," + Integer.toString(newC);
			
			if(newR >= 0 && newR < N && newC >= 0 && newC < N && !visited.contains(newPosStr)) {
				//현재 높이보다 작은 경우와 크거나 같은 경우를 나눈다.
				if(board[r][c] > board[newR][newC]) {
					visited.add(posStr);
					dfs(newR, newC,distance+1);
					visited.remove(posStr);
				}
				else {
					//한번 높이를 무를 기회가 있고, 최대 공사길이인 K만큼 뺐을 때, 허용 기준을 충족한다면
					if(Kflag && board[r][c] > (board[newR][newC] - K)) {
						int originalVal = board[newR][newC];
						board[newR][newC] = board[r][c]-1;
						visited.add(posStr);
						Kflag = false;
						dfs(newR, newC, distance+1);
						board[newR][newC] = originalVal;
						Kflag = true;
						visited.remove(posStr);
					}
				}
			}
		}
		maxPath = Math.max(maxPath, distance);
	}
}
