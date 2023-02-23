import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class A053_SWEA1247_최적경로 {
	static int customerCnt;
	static int result;
	static boolean[] visited;
	static Coordinate[] coordinateArr;
	static Coordinate home, company;

	static class Coordinate {
		int row;
		int col;

		public Coordinate(int row, int col) {
			super();
			this.row = row;
			this.col = col;
		}
	}

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;
		int tc = Integer.parseInt(br.readLine());

		for (int i = 1; i <= tc; i++) {
			customerCnt = Integer.parseInt(br.readLine());
			visited = new boolean[customerCnt];
			result = Integer.MAX_VALUE;
			
			st = new StringTokenizer(br.readLine());
			coordinateArr = new Coordinate[customerCnt];

			for (int j = 0; j < (customerCnt + 2); j++) {
				Coordinate newCoor = new Coordinate(Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken()));
				if (j == 0) {
					home = newCoor;
				} else if (j == 1) {
					company = newCoor;
				} else {
					coordinateArr[j - 2] = newCoor;
					visited[j-2]=false;
				}
			}
			
			dfs(0, 0, -1);
			sb.append('#').append(i).append(' ').append(result);
			if(i != tc) sb.append('\n');
		}
		System.out.println(sb.toString());

	}

	public static void dfs(int cnt, int dist, int prevIdx) {
		if (cnt == customerCnt) {
			int curDist = Math.abs(company.col - coordinateArr[prevIdx].col)
					+ Math.abs(company.row - coordinateArr[prevIdx].row);
			result = Math.min(dist + curDist, result);
			return;
		}

		for (int i = 0; i < customerCnt; i++) {
			if (visited[i])
				continue;
			int curDist = Math.abs(coordinateArr[i].col - (prevIdx == -1 ? home.col : coordinateArr[prevIdx].col))
					+ Math.abs(coordinateArr[i].row - (prevIdx == -1 ? home.row : coordinateArr[prevIdx].row));
			
			if(dist+curDist >= result) continue;
			visited[i]=true;
			dfs(cnt + 1, dist + curDist, i);
			visited[i]=false;
		}
	}

}
