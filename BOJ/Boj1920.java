import java.util.*;
import java.io.*;
public class Boj1920 {
    public static void main(String[] args) throws NumberFormatException, IOException{
        Set<Integer> set = new HashSet<Integer>();
        StringBuilder sb = new StringBuilder();
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        while(st.hasMoreTokens()){
            set.add(Integer.parseInt(st.nextToken()));
        }

        int m = Integer.parseInt(br.readLine());
        st = new StringTokenizer(br.readLine());
        while(st.hasMoreTokens()){
            int curNum = Integer.parseInt(st.nextToken());
            sb.append(set.contains(curNum) ? 1 : 0).append('\n');
        }
        sb.deleteCharAt(sb.length()-1);
        System.out.println(sb);
        br.close();
    }
}