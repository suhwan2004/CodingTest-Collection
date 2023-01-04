import java.util.Scanner;
import java.io.FileInputStream;

class Solution
{
	public static void main(String args[]) throws Exception
	{
		
		Scanner sc = new Scanner(System.in);
		int T;
		T=sc.nextInt();

		for(int test_case = 1; test_case <= T; test_case++)
		{
			int width = sc.nextInt();
            int[][] board = new int[width][width];
            int[][] board90 = new int[width][width];
            int[][] board180 = new int[width][width];
            int[][] board270 = new int[width][width];
            
            //기준이 되는 보드판 생성
            for(int i = 0; i < width; i++){
            	for(int j = 0; j < width; j++){
            		board[i][j] = sc.nextInt();
                }
            }
           
            for(int count = 0; count < 3; count++){
                int[][] curBoard = new int[width][width];
            	for(int i = 0; i < width; i++){
                	for(int j = 0; j < width; j++){
                    	curBoard[i][j] = board[board.length - j - 1][i];
                    }
                }
               	board = curBoard;
				switch(count){
                    case 0:
                        board90 = curBoard;
                        break;
                    case 1:
                        board180 = curBoard;
                        break;
                    case 2:
                        board270 = curBoard;
                        break;
                    default:
                        break;
                }
            }
            System.out.println("#"+test_case);

            for(int j = 0; j < width; j++){
                for(int k = 0; k < width; k++){
                	System.out.print(board90[j][k]);
                }
                System.out.print(" ");
                for(int k = 0; k < width; k++){
                	System.out.print(board180[j][k]);
                }
                System.out.print(" ");
                for(int k = 0; k < width; k++){
                	System.out.print(board270[j][k]);
                }
                System.out.println();
            }
        }
	}
}