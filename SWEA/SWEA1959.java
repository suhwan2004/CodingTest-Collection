import java.util.*;
import java.util.Scanner;
import java.io.FileInputStream;
 
class SWEA1959
{
    static int findMaxValue(int [] maxArr, int [] minArr){
        int curMaxVal = Integer.MIN_VALUE;
        for(int i = 0; i < maxArr.length - minArr.length + 1; i++){
            int curSum = 0;
            for(int j = 0; j < minArr.length; j++){
                curSum += maxArr[i+j] * minArr[j];
            }
            curMaxVal = Math.max(curSum, curMaxVal);
        }
        return curMaxVal;
    }
    public static void main(String args[]) throws Exception
    {

        Scanner sc = new Scanner(System.in);
        int T;
        T=sc.nextInt();

         
        for(int test_case = 1; test_case <= T; test_case++)
        {
            int maxVal = Integer.MIN_VALUE;

            int[] arr1 = new int[sc.nextInt()]; 
            int[] arr2 = new int[sc.nextInt()];
            
            for(int i = 0; i < arr1.length; i++) arr1[i] = sc.nextInt();
            for(int i = 0; i < arr2.length; i++) arr2[i] = sc.nextInt();
            
            maxVal = Math.max(arr1.length >= arr2.length ? findMaxValue(arr1, arr2) : findMaxValue(arr2, arr1), maxVal);
            System.out.println("#"+test_case+" " + maxVal);
        }
    }
}