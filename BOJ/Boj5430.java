import java.io.*;
import java.util.*;

public class Boj5430 {
  public static void main(String[] args) throws IOException{
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int N = Integer.parseInt(br.readLine());
    StringBuilder sb = new StringBuilder();
    for(int i = 0 ; i < N; i++){
      String[] pArr = br.readLine().split("");
      int arrLen = Integer.parseInt(br.readLine());
      Deque<Integer> deque = new LinkedList<>();
      String[] inputStrArr = br.readLine().substring(1, arrLen-1).split(",");
      
      System.out.println(inputStrArr.length + "," + arrLen);
      for(int j = 0; j <arrLen; j++){
        deque.add(Integer.parseInt(inputStrArr[j]));
      }

      int direction = 0;

      for(int j = 0; j < pArr.length; j++){
        if(pArr[j] == "R"){
          direction = (direction+1)%2;
          continue;
        }

        if(deque.size() == 0){
          sb.append("error").append('\n');
          break;
        }
 
        if(direction == 0) deque.poll();
        else deque.pop();
      }

      sb.append(deque.toString());
    }
    sb.deleteCharAt(sb.length()-1);
    System.out.println(sb);
    br.close();
  }
}
