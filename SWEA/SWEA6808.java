import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.StringTokenizer;

public class SWEA6808 {
    static int[] first,second;
    static int sum, ans_loss, ans_win;
    static boolean[] isSelected, check;

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        BufferedWriter bt = new BufferedWriter(new OutputStreamWriter(System.out));
        StringBuilder sb = new StringBuilder();
        int T = Integer.parseInt(st.nextToken());

        isSelected = new boolean[9];

        for(int test_case = 1 ; test_case <= T ; test_case++){
            ans_loss = 0;
            ans_win = 0;
            st = new StringTokenizer(br.readLine());

            first = new int[9];
            second = new int[9];
            check = new boolean[19];

            for(int i = 0 ; i < 9; i++){
                first[i] = Integer.parseInt(st.nextToken());
                check[first[i]] = true;
            }
            int cnt = 0;
            for(int i = 1 ; i < 19; i++){
                if(!check[i]) {
                    second[cnt++] = i;
                }
            }
            dfs(0,0,0);
            sb.append("#").append(test_case).append(" ").append(ans_win).append(" ")
                    .append(ans_loss).append("\n");
        }
        bt.write(sb.toString());
        bt.close();
    }
    public static void dfs(int cnt, int f_score, int s_score) {
        if(cnt == 9) {
            if(f_score > s_score)
                ans_win++;
            else if(s_score > f_score)
                ans_loss++;
            return;
        }
        for(int i = 0; i < 9; ++i) {
            if(isSelected[i]) continue; //이미 선택된 경우 continue
            isSelected[i] = true; // 선택한 요소의 index를 true로 변경

            if(first[cnt] > second[i])
                dfs(cnt+1, f_score + first[cnt] + second[i], s_score);
            else
                dfs(cnt+1, f_score, s_score + first[cnt] + second[i]);
            isSelected[i] = false;
        }
    }
}