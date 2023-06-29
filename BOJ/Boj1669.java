import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Boj1669 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int a = Integer.parseInt(st.nextToken());
        int b = Integer.parseInt(st.nextToken());
        int diff = b-a;
        int n = 0;
        if(diff == 0){
            System.out.println(0);
            br.close();
            return;
        }

        while(n*n < diff){
            n++;
        }

        if(n*n > diff) n--;
        int result = (2*n) - 1;
        diff -= n*n;

        while(diff != 0){
            diff -= Math.min(diff, n);
            result++; //1일 증가
        }

        System.out.println(result);
        br.close();

    }
}
