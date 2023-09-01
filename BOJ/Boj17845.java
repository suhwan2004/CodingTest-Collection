import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Boj17845{

  static int N, K;
  static int[] arr;
  static StringBuilder sb;
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine());
    sb = new StringBuilder();
    N = Integer.parseInt(st.nextToken());
    K = Integer.parseInt(st.nextToken());
    arr = new int[N];

    st = new StringTokenizer(br.readLine());
    
    for(int i = 0; i < N; i++){
      arr[i] = Integer.parseInt(st.nextToken());
    }

    Arrays.sort(arr);
    
    dfs(-1, new ArrayList<Integer>());
    System.out.println(sb.toString());
    br.close();
  }

  static void dfs(int prev, ArrayList<Integer> list){
    if(K == list.size()){
      for(int i = 0; i < K; i++){
        sb.append(list.get(i)).append(' ');
      }
      sb.deleteCharAt(sb.length()-1);
      sb.append('\n');
      return;
    }

    for(int i = prev+1; i < N; i++){
        list.add(arr[i]);
        dfs(i, list);
        list.remove(list.size()-1);
    }
  }
  
}