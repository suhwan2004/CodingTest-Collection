import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

class MyInfo{
    int r;
    int c;
    boolean havingSword;
    int cost;

    public MyInfo(int r, int c, boolean havingSword, int cost) {
        this.r = r;
        this.c = c;
        this.havingSword = havingSword;
        this.cost = cost;
    }
}
public class Boj17864 {
    static int[][] directions = {{0,1},{1,0},{-1,0},{0,-1}};
    static int N, M, time;
    static int[][] board;
    static boolean[][][] visited;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        time = Integer.parseInt(st.nextToken());
        board = new int[N][M];
        visited = new boolean[N][M][2];

        for(int i = 0; i < N; i++){
            st = new StringTokenizer(br.readLine());
            for(int j = 0; j < M; j++){
                board[i][j] = Integer.parseInt(st.nextToken());
            }
        }
        int answer = bfs();
        System.out.println(answer == -1 ? "Fail" : answer);
        br.close();
    }
    static int bfs(){
        Queue<MyInfo> q = new LinkedList<>();
        visited[0][0][0] = true;
        q.add(new MyInfo(0,0,false,0));
        while(!q.isEmpty()){
            MyInfo curInfo = q.poll();
            if(curInfo.cost > time) break;
            if(curInfo.r == N-1 && curInfo.c == M-1) return curInfo.cost;

            for(int[] direction : directions){
                int curR = curInfo.r + direction[0];
                int curC = curInfo.c + direction[1];

                if(curR<0||curR>=N||curC<0||curC>=M)continue;

                if(!curInfo.havingSword && !visited[curR][curC][0] && (board[curR][curC] == 0 || board[curR][curC] == 2)){
                    q.add(new MyInfo(curR, curC,board[curR][curC] != 0, curInfo.cost+1));
                    visited[curR][curC][0] = true;
                }else if(curInfo.havingSword && !visited[curR][curC][1]){
                    q.add(new MyInfo(curR, curC, true,curInfo.cost + 1));
                    visited[curR][curC][1] = true;
                }
            }
        }
        return -1;
    }
}
