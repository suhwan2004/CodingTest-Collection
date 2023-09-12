import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Boj14620 {
  static int min = Integer.MAX_VALUE;
    static int[][] board;
    static boolean[][] visited;
    static int N;
    
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());
        StringTokenizer st;
        board = new int[N][N];
        visited = new boolean[N][N];

        for(int i = 0; i < N; i++){
            st = new StringTokenizer(br.readLine());
            for(int j = 0; j < N; j++){
                board[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        dfs(0, 0);
        System.out.println(min);
        br.close();
    }

    static void dfs(int cnt, int sum){
        if(cnt == 3){
            min = Math.min(min, sum);
            return;
        }

        for(int i = 1; i < N-1; i++){
            for(int j = 1; j < N-1; j++){
                if(checkValidArea(i,j)){
                    markVisited(i,j,true);
                    dfs(cnt + 1, sum + getCost(i,j));
                    markVisited(i,j,false);
                }
            }
        }
    };

    static boolean checkValidArea(int r, int c){
        return !visited[r][c] && !visited[r-1][c] && !visited[r+1][c] && !visited[r][c-1] && !visited[r][c+1];
    }

    static void markVisited(int i , int j, boolean val){
        visited[i][j] = val;
        visited[i-1][j] = val;
        visited[i+1][j] = val;
        visited[i][j-1] = val;
        visited[i][j+1] = val;
    }
    static int getCost(int r, int c){
        return board[r][c] + board[r-1][c] + board[r+1][c] + board[r][c-1] + board[r][c+1];
    };
}
