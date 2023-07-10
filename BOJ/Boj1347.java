import java.io.*;

public class Boj1347 {
    static int curDir = 0;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int N = Integer.parseInt(br.readLine());
        String[] arr = br.readLine().split("");
        char[][] board = new char[101][101];

        //가장 작은 row, 가장 큰 row, 가장 작은 col, 가장 큰 col
        int minRow = 102;
        int maxRow = -1;
        int minCol = 102;
        int maxCol = -1;

        //방향은 남,서,동,북
        int[][] directions = {{1,0},{0,-1},{0,1},{-1,0}};
        //현재 나의 위치
        int r = 50, c = 50;
        board[r][c] = '.';
        for(int i = 0; i < N; i++){
            switch(arr[i]){
                case "F":
                    //현재 바라보는 방향으로 이동한다.
                    r += directions[curDir][0];
                    c += directions[curDir][1];
                    board[r][c] = '.';
                    break;
                case "R":
                    //현재 방향에서 우측으로 방향을 꺾는다.
                    turnRight();
                    break;
                case "L":
                    //현재 방향에서 좌측으로 방향을 꺾는다.
                    turnLeft();
                    break;
                default:
                    break;
            }
        }

        for(int i = 0; i < board.length; i++){
            for(int j = 0; j < board[0].length; j++){
                if(board[i][j] == '.'){
                    minRow = Math.min(minRow, i);
                    maxRow = Math.max(maxRow, i);
                    minCol = Math.min(minCol, j);
                    maxCol = Math.max(maxCol, j);
                }
            }
        }

        for(int i = minRow; i <= maxRow; i++){
            for(int j = minCol; j <= maxCol; j++){
                sb.append(board[i][j] == '.' ? '.' : '#');
            }
            sb.append('\n');
        }

        System.out.println(sb.toString());
        br.close();
    }

    static void turnRight(){
        switch(curDir){
            case 0:
                curDir = 1;
                break;
            case 1:
                curDir = 3;
                break;
            case 2:
                curDir = 0;
                break;
            case 3:
                curDir = 2;
                break;
            default:
                break;
        }
    }

    static void turnLeft(){
        switch(curDir){
            case 0:
                curDir = 2;
                break;
            case 1:
                curDir = 0;
                break;
            case 2:
                curDir = 3;
                break;
            case 3:
                curDir = 1;
                break;
            default:
                break;
        }
    }
}
