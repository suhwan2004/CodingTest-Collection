import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Boj1940 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int M = Integer.parseInt(br.readLine());
        int[] arr = new int[N];
        int l = 0, r = arr.length-1;
        int total = 0;

        StringTokenizer st = new StringTokenizer(br.readLine());

        for(int i = 0; i < N; i++){
            arr[i] = Integer.parseInt(st.nextToken());
        }

        //edge case
        if(N == 1){
            System.out.println(0);
            return;
        }

        Arrays.sort(arr);

        while(l < r){
            int sum = arr[l] + arr[r];
            if(sum == M){
                total++;
                r--;
                l++;
            }else if(sum > M) r--;
            else l++;
        }

        System.out.println(total);
    }
}
