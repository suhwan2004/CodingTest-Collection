import java.io.*;
import java.util.*;

public class A054_SWEA1873_상호의배틀필드 {
	static int h, w;
	static char[][] board;
	static char[] command;
	// R,L,D,U
	static int[][] direction = { { 0, 1 }, { 0, -1 }, { 1, 0 }, { -1, 0 } };
	static int curDir = 0;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;

		//테스트 케이스의 횟수를 받자.
		int tc = Integer.parseInt(br.readLine());
		
		//테스트 케이스의 횟수만큼 돌아보자.
		for (int i = 1; i <= tc; i++) {
			st = new StringTokenizer(br.readLine());
			//보드판의 높이, 길이를 받자.
			h = Integer.parseInt(st.nextToken());
			w = Integer.parseInt(st.nextToken());
			
			board = new char[h][w];
			int curR = 0;
			int curC = 0;

			// 게임판 초기화
			for (int j = 0; j < h; j++) {
				String input = br.readLine();
				for (int k = 0; k < input.length(); k++) {

					// 시작지점을 발견했는지 체킹
					char curChar = input.charAt(k);
					if (curChar == '<' || curChar == '>' || curChar == '^' || curChar == 'v') {
						curR = j;
						curC = k;
						switch(curChar) {
						case '>':
							curDir = 0;
							break;
						case '<':
							curDir=1;
							break;
						case 'v':
							curDir=2;
							break;
						case '^':
							curDir=3;
							break;
						}
					}
					board[j][k] = curChar;
				}
			}

			// 명령 초기화
			int commandCnt = Integer.parseInt(br.readLine());
			String input = br.readLine();
			command = new char[commandCnt];

			for (int j = 0; j < commandCnt; j++) {
				command[j] = input.charAt(j);
			}

			for (int j = 0; j < command.length; j++) {
				//탱크 머릿 방향 전환
				boolean flag = true;
				switch (command[j]) {
				case 'U':
					curDir = 3;
					board[curR][curC] = '^';
					break;
				case 'D':
					curDir = 2;
					board[curR][curC] = 'v';
					break;
				case 'L':
					curDir = 1;
					board[curR][curC] = '<';
					break;
				case 'R':
					curDir = 0;
					board[curR][curC] = '>';
					break;
				default:
					flag = false;
					break;
				}
				
				
				//flag가 true라면 이동이고, false라면 폭탄발사임.
				if(flag) {
					int newR = curR + direction[curDir][0];
					int newC = curC + direction[curDir][1];
					
					//갈 수 있을 경우만 가야됨.
					if(newR>=0&&newR<h&&newC>=0&&newC<w&&board[newR][newC]=='.') {
						board[newR][newC] = board[curR][curC];
						board[curR][curC] = '.';
						curR=newR;
						curC=newC;
					}
				}else {
					playS(curR+direction[curDir][0], curC+direction[curDir][1]);
				}
			}
			sb.append("#").append(i).append(" ");
			for(int j = 0; j <h; j++) {
				for(int k = 0; k < board[j].length; k++) {
					sb.append(board[j][k]);
				}
				if(j != h-1) sb.append('\n');
			}
			if(i != tc)sb.append('\n');
		}
		System.out.println(sb.toString());
		br.close();
	}

	public static void playS(int r, int c) {
		if(r>=0&&r<h&&c>=0&&c<w) { //경기장 내에서만 총알이 날라갈 수 있음.
			switch(board[r][c]) {
			// 철벽을 만남. 아무 성과없이 되돌아가기.끝!
			case '#':
				return;
			case '.': // 평지를 만남. 계속 날아가보자
			case '-': // 물을 만남. 계속 날아가보자
				playS(r+direction[curDir][0], c+direction[curDir][1]);
				return;
			case '*': //벽돌을 만남. 부시고, 평지를 만들어주자.끝!
				board[r][c] = '.';
				return;
			}
		}
	}

}
