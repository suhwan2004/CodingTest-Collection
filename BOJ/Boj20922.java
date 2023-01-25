import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.HashMap;
import java.util.StringTokenizer;

/*
https://www.acmicpc.net/problem/20922

Time : O(2N) => O(N)
Space : O(N)
ALGO : for, two pointer
DS : String, Array

Solution
1. 입력받은 array를 l, r를 기준으로 순회한다. 순회를 하면서 map에 지금 만난 숫자를 저장한다.
    - 만약, k개를 넘기도록 한 숫자를 만났다면 l pointer를 움직여서 k개에서 줄어들 때 까지 움직여야 함.
2. 결론적으로, 가장 많이 나온 길이 maxLen을 출력해준다.
*/

public class Boj21921 {

	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer stk = new StringTokenizer(br.readLine()," ");
		int N = Integer.parseInt(stk.nextToken());
        int K = Integer.parseInt(stk.nextToken());
        
        String[] rs = br.readLine().split(" ");
        int[] arr = Arrays.stream(rs).mapToInt(Integer::parseInt).toArray();
        int l = 0, r = 0,maxLen = 0;
        
        HashMap<Integer, Integer> map = new HashMap<>();
        
        
        while(r < N){
            if(map.getOrDefault(arr[r], 0)+1 > K){
                while(l <= r){
                    if(map.getOrDefault(arr[r], 0)+1 > K) {
                        if(map.getOrDefault(arr[l], 0) == 1) map.remove(arr[l++]);
                        else map.put(arr[l], map.getOrDefault(arr[l++], 0)-1);   
                    }
                    else break;
                }
            }else {
            	maxLen = Math.max(maxLen, r-l+1);
            }
            map.put(arr[r], map.getOrDefault(arr[r], 0) + 1);
            r++;
        }
        
        System.out.println(maxLen);
    }
}
