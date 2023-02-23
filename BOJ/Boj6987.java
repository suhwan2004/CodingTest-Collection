import java.io.*;
import java.util.*;

class Team {
	int win;
	int mid;
	int lose;

	public Team(int win, int mid, int lose) {
		this.win = win;
		this.mid = mid;
		this.lose = lose;
	}

	@Override
	public String toString() {
		return "Team [win=" + win + ", mid=" + mid + ", lose=" + lose + "]";
	}
}

public class Boj6987 {
	static Team[] gameBoard;
	static int[][] gameResult;
	static int[][] caseArr;
	static int cnt = 0;

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;

		caseArr = new int[][] { { 0, 1 }, { 0, 2 }, { 0, 3 }, { 0, 4 }, { 0, 5 }, { 1, 2 }, { 1, 3 }, { 1, 4 },
			{ 1, 5 }, { 2, 3 }, { 2, 4 }, { 2, 5 }, { 3, 4 }, { 3, 5 }, { 4, 5 }, };
			
		for (int i = 0; i < 4; i++) {
			st = new StringTokenizer(br.readLine());
			gameBoard = new Team[6];
			int teamCnt = 0;
			
			for (int j = 0; j < gameBoard.length * 3; j += 3) {
				Team curTeam = new Team(Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken()),
						Integer.parseInt(st.nextToken()));
				gameBoard[teamCnt++] = curTeam;
			}
			
			boolean flag = true;
			gameResult = new int[6][3];
			
			for (int j = 0; j < gameBoard.length; j++) {
				if (gameBoard[j].lose + gameBoard[j].mid + gameBoard[j].win != 5) {
					flag = false;
					break;
				}
			}
			
			if (!flag) {
				sb.append(0);
			} else {
				sb.append(dfs(i, 0) ? 1 : 0);
			}
			if (i < gameBoard.length)
				sb.append(" ");
		}


		System.out.println(sb);
		br.close();
	}

	public static boolean dfs(int boardIdx, int idx) {
		if (caseArr.length == idx) {
			for (int i = 0; i < gameBoard.length; i++) {
				Team curTeam = gameBoard[i];
				if (curTeam.win != gameResult[i][0] || curTeam.mid != gameResult[i][1]
						|| curTeam.lose != gameResult[i][2]) {
					return false;
				}
			}
			return true;
		};

		// A가 B를 이김
		gameResult[caseArr[idx][0]][0]++;
		gameResult[caseArr[idx][1]][2]++;
		if (dfs(boardIdx, idx + 1))
			return true;
		gameResult[caseArr[idx][0]][0]--;
		gameResult[caseArr[idx][1]][2]--;

		// A랑 B가 무승부임
		gameResult[caseArr[idx][0]][1]++;
		gameResult[caseArr[idx][1]][1]++;
		if (dfs(boardIdx, idx + 1))
			return true;
		gameResult[caseArr[idx][0]][1]--;
		gameResult[caseArr[idx][1]][1]--;

		// A가 B에게 짐
		gameResult[caseArr[idx][0]][2]++;
		gameResult[caseArr[idx][1]][0]++;
		if (dfs(boardIdx, idx + 1))
			return true;
		gameResult[caseArr[idx][0]][2]--;
		gameResult[caseArr[idx][1]][0]--;

		// 다 못찾았다면 false 반환
		return false;
	}
}