import java.io.*;
import java.util.*;

public class Boj4963 {
    static int r = 0, c = 0;
    static int[][] board;
    static int[][] directions = {{0,1}, {1,0}, {-1,0}, {0,-1}, {1,1}, {1,-1}, {-1,1}, {-1,-1}};

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        StringTokenizer st;
        while(true){
            st = new StringTokenizer(br.readLine());
            int cnt = 0;
            c = Integer.parseInt(st.nextToken());
            r = Integer.parseInt(st.nextToken());

            if(r == 0 && c == 0) break;
            board = new int[r][c];
            for(int i = 0; i < r; i++){
                st = new StringTokenizer(br.readLine());
                for(int j = 0; j < c; j++){
                    board[i][j] = Integer.parseInt(st.nextToken());
                }
            }

            for(int i = 0; i < r; i++){
                for(int j = 0; j < c; j++){
                    if(board[i][j] == 1) {
                        dfs(i,j);
                        cnt++;
                    }
                }
            }
            sb.append(cnt).append('\n');
        }

        System.out.print(sb.toString());
        br.close();
    }


    static void dfs(int curR, int curC){
        for(int[] direction : directions){
            int newR = curR + direction[0];
            int newC = curC + direction[1];

            if(0 > newR || 0 > newC || newR >= r || newC >= c || board[newR][newC] == 0) continue;

            board[newR][newC] = 0;
            dfs(newR,newC);
        }
    }

}
