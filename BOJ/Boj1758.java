import java.io.*;
import java.util.*;


public class Boj1758 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int[] arr = new int[N];
        for(int i = 0; i < N; i++){
            arr[i] = Integer.parseInt(br.readLine());
        }

        Arrays.sort(arr);

        long sum = 0;
        for(int i = arr.length-1; i >= 0; i--){
            int curVal = arr[i] - (arr.length-1-i);
            if(curVal <= 0) break;
            sum += curVal;
        }

        System.out.println(sum);
        br.close();
    }
}
