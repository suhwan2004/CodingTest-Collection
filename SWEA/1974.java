import java.util.*;
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
            int[][] board = new int[9][9];
            int result = 1;
            for(int i = 0; i < 9; i++){
                for(int j = 0; j < 9; j++){
                    board[i][j] = sc.nextInt();
                }
            }
             
            //행 확인
            for(int i = 0; i < 9; i++){
                HashSet<Integer> set1 = new HashSet<>();
                for(int j = 0; j < 9; j++){
                    if(set1.contains(board[i][j])){
                        result = 0;
                        break;
                    }
                    set1.add(board[i][j]);
                }
                if(result == 0) break;
            }
            if(result == 0){
                System.out.println("#"+test_case + " " + result);
                continue;
            }
            //열 확인
            for(int i = 0; i < 9; i++){
                HashSet<Integer> set2 = new HashSet<>();
                for(int j = 0; j < 9; j++){
                    if(set2.contains(board[j][i])){
                        result = 0;
                        break;
                    }
                    set2.add(board[j][i]);
                }
                if(result == 0) break;
            }
            if(result == 0){
                System.out.println("#"+test_case + " " + result);
                continue;
            }
             
                        
            for(int i = 0; i <= 6; i += 3){
                for(int j = 0; j <= 6; j += 3){
                    HashSet<Integer> set3 = new HashSet<>();
                    for(int k = 0; k < 3; k++){
                        for(int l = 0; l < 3; l++){
                            if(set3.contains(board[i+k][j+l])){
                                result = 0;
                                break;
                            }
                            set3.add(board[i+k][j+l]);
                        }
                        if(result == 0) break;
                    }
                    if(result == 0) break;
                }
                if(result == 0) break;
            }
            System.out.println("#"+test_case + " " + result);
        }
    }
}