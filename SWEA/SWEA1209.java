import java.util.*;
import java.lang.*;
import java.util.Scanner;
import java.io.FileInputStream;


class SWEA1209
{
	public static void main(String args[]) throws Exception
	{
		Scanner sc = new Scanner(System.in);
		
		for(int test_case = 1; test_case <= 10; test_case++)
		{
			int curNum = sc.nextInt();
            int[][] board = new int[100][100];
            int totalMax = Integer.MIN_VALUE;
            int maxColSum = Integer.MIN_VALUE;
            int maxRowSum = Integer.MIN_VALUE;
            
            //게임판 생성.
            for(int i = 0; i < 100; i++){
            	for(int j = 0; j < 100; j++){
                	board[i][j] = sc.nextInt();
                }
            }
            
            //행 중 최댓값.
            for(int i = 0; i < 100; i++){
            	int curSum = 0;
                for(int j = 0; j < 100; j++){
            		curSum += board[i][j];
                }
                maxColSum = Math.max(curSum, maxColSum);
            }
            
            //열 중 최댓값.
            for(int i = 0; i < 100; i++){
            	int curSum = 0;
                for(int j = 0; j < 100; j++){
            		curSum += board[j][i];
                }
                maxRowSum = Math.max(curSum, maxRowSum);
            }
            
            //대각선 중 최댓값.
            
            //우하강 대각선
            int curRCrossSum = 0;
            for(int i = 0; i < 100; i++){ 
           		curRCrossSum += board[i][i];
            }

            
            //좌하강 대각선
            int curLCrossSum = 0;
            for(int i = 99; i >= 0; i--){
            	curLCrossSum += board[i][i];
            }
            totalMax = Math.max(Math.max(Math.max(Math.max(maxColSum, maxRowSum), curRCrossSum), curLCrossSum), totalMax);
            System.out.println("#"+test_case + " " + totalMax);            
		}
	}
}