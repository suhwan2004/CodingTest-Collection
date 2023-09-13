import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Collections;
import java.util.StringTokenizer;

public class Boj1205 {
      public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int newScore = Integer.parseInt(st.nextToken());
        int P = Integer.parseInt(st.nextToken());

        if (N == 0) {
            System.out.println(P > 0 ? 1 : -1);
            br.close();
            return;
        }

        Integer[] scoreArr = new Integer[N+1];

        st = new StringTokenizer(br.readLine());
        for(int i = 0; i < N; i++){
            scoreArr[i] = Integer.parseInt(st.nextToken());
        }
        scoreArr[N] = newScore;
        Arrays.sort(scoreArr, Collections.reverseOrder());

        int rank = 0;
        int cnt = 0;
        int totalCnt = 0;

        for(int i = 0; i < N+1; i++){
            totalCnt++;
            if(i == 0){
                rank = 1;
                cnt = 1;
            }else if(scoreArr[i].equals(scoreArr[i-1])){
                cnt++;
            }else{
                if(scoreArr[i-1].equals(newScore)){
                    totalCnt--;
                    break;
                }else{
                    rank += cnt;
                    cnt = 1;
                }
            }
        }

        System.out.println(totalCnt > P ? -1 : rank);
        br.close();
    }
}
