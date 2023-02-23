import java.io.*;

public class Boj1992 {
	static StringBuilder sb;
	static int[][] board;
	static int N;
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		sb = new StringBuilder();
		N = Integer.parseInt(br.readLine());
		board = new int[N][N];
		boolean is1 = false;
		boolean is0 = false;
		
		for(int i = 0; i < N; i++) {
			String[] arr = br.readLine().split("");
			for(int j = 0; j < N; j++) {
				board[i][j] = Integer.parseInt(arr[j]);
				if(board[i][j] == 1) is1 = true;
				else if(board[i][j] == 0) is0 = true;
			}
		}
		
		
		if(is1&&!is0) {
			System.out.println(1);
			return;
		}else if(is0&&!is1) {
			System.out.println(0);
			return;
		}	
		sb.append("(");
		help(0,0,N/2);
		sb.append(")");
		System.out.println(sb);
	}

	public static void help(int r, int c, int curN) {
		int LU = checkBoard(r,c,r+curN,c+curN);
		int RU = checkBoard(r,c+curN,r+curN,c+(curN*2));
		int LD = checkBoard(r+curN, c, r+(curN*2), c+curN);
		int RD = checkBoard(r+curN, c+curN, r+(curN*2) , c+(curN*2));
		
		if(LU == 0 || LU == 1) {
			sb.append(LU);
		}else if(LU == 2) {
			sb.append("(");
			help(r,c, (int)Math.floor(curN/2));
			sb.append(")");
		}
		
		if(RU == 0 || RU == 1) {
			sb.append(RU);
		}else if(RU == 2) {
			sb.append("(");
			help(r,c+curN, (int)Math.floor(curN/2));
			sb.append(")");
		}
		
		if(LD == 0 || LD == 1) {
			sb.append(LD);
		}else if(LD == 2) {
			sb.append("(");
			help(r+curN,c, (int)Math.floor(curN/2));
			sb.append(")");
		}
		
		if(RD == 0 || RD == 1) {
			sb.append(RD);
		}else if(RD == 2) {
			sb.append("(");
			help(r+curN,c+curN, (int)Math.floor(curN/2));
			sb.append(")");
		}
	}
	
	public static int checkBoard(int r, int c, int curRN, int curCN) {
		boolean is0 = false;
		boolean is1 = false;
		for(int i = r; i < curRN; i++) {
			for(int j = c; j <curCN; j++) {
				if(board[i][j] == 0) is0 = true;
				else if(board[i][j] == 1) is1 = true;
			}
		}
		
		if(is0&&is1) return 2;
		else if(is1) return 1;
		else return 0;
	}
}
