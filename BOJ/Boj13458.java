import java.io.*;
import java.util.StringTokenizer;
public class Boj13458 {
  static int N, B, C;
  static int[] nArr;
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st;
    int maxPerson = Integer.MIN_VALUE;
    N = Integer.parseInt(br.readLine());
    nArr = new int[N];
    st = new StringTokenizer(br.readLine());
    for(int i = 0; i < N; i++){
      nArr[i] = Integer.parseInt(st.nextToken());
    }

    st = new StringTokenizer(br.readLine());

    B = Integer.parseInt(st.nextToken());
    C = Integer.parseInt(st.nextToken());

    for(int i = 0; i < N; i++){
      maxPerson = Math.max(maxPerson, nArr[i]);
    }

    if(maxPerson <= B){
      System.out.println(N);
    }else{
      int totalPerson = 0;
      for(int i = 0; i < N; i++){
        int curVal = nArr[i];
        if(nArr[i] <= B) {
          totalPerson++;
          continue;
        }else{
          curVal -= B;
          totalPerson += 1 + (int) (curVal/C) + (curVal%C == 0 ? 0 : 1);
        }
      }
      System.out.println(totalPerson);
    }
  }
}
