/*
https://www.acmicpc.net/problem/25501

Input : 테스트 케이스의 개수 : int T, T개 만큼의 문자열 : String S
Output : isPalindrome 함수의 반환값과 recursion 함수의 호출 횟수
Constraints
- 1 <= T <= 1000
- 1 <= |S| <= 1000
Edge case : x

Time : O(N * 1/2N) => O(N^2) => 갯수 * 문자열 재귀
Space : O(N) => 콜스택, 입력받는 문자열
DS : array, string
ALGO : recursion 
*/

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import java.io.*;
public class Boj25501{
    public static int[] recursion(String s, int l, int r, int cnt){
        int[] arr = new int[2];
    	if(l >= r) {
    		arr[0] = 1;
    		arr[1] = cnt;
    		return arr;
    	}
        else if(s.charAt(l) != s.charAt(r)) {
        	arr[0] = 0;
        	arr[1] = cnt;
        	return arr;
        };
        
        return recursion(s, l+1, r-1, cnt+1);
    }
    public static int[] isPalindrome(String s){
        return recursion(s, 0, s.length()-1, 1);
    }
    public static void main(String[] args) throws IOException{
    	BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    	int input = Integer.parseInt(br.readLine());
        
        for(int i = 0; i < input; i++){
            String str = br.readLine();
            int[] result = isPalindrome(str);
            System.out.println(result[0] + " " + result[1]);
        }
    }
}