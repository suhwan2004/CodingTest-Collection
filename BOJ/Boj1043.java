import java.io.*;
import java.util.*;

public class Boj1043 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        Queue<Integer> q = new LinkedList<>();
        st = new StringTokenizer(br.readLine());
        ArrayList<int[]> arrList = new ArrayList<>();
        HashSet<Integer> visited = new HashSet<>();

        int num = Integer.parseInt(st.nextToken());
        for(int i = 0; i < num; i++){
            int curVal = Integer.parseInt(st.nextToken());
            q.add(curVal);
            visited.add(curVal);
        }

        for(int i = 0; i < M; i++){
            st = new StringTokenizer(br.readLine());
            int len = Integer.parseInt(st.nextToken());
            int[] arr = new int[len];
            for(int j = 0; j < len; j++){
                arr[j] = Integer.parseInt(st.nextToken());
            }
            arrList.add(arr);
        }

        while(!q.isEmpty() && !arrList.isEmpty()){
            int curVal = q.poll();

            for(int i = 0; i < arrList.size(); i++){
                int[] curArr = arrList.get(i);
                boolean flag = true;
                for(int j = 0; j < curArr.length; j++){
                    if(visited.contains(curArr[j])){
                        flag = false;
                        break;
                    }
                }
                if(flag) continue;
                for(int j = 0; j < curArr.length; j++){
                    if(!visited.contains(curArr[j])){
                        visited.add(curArr[j]);
                        q.add(curArr[j]);
                    }
                }
                arrList.remove(i--);
            }
        }

        System.out.println(arrList.size());
        br.close();
    }
}
