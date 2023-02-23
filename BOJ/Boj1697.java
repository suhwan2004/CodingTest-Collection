import java.io.*;
import java.util.*;

public class Boj1697 {
	static int start, end;
	static int minTime = Integer.MAX_VALUE;
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		start = Integer.parseInt(st.nextToken());
		end = Integer.parseInt(st.nextToken());
		
		if(start >= end) {
			System.out.println(start - end);
			return;
		}

		int[] arr = new int[200001];
		Queue<int[]> queue = new LinkedList<int[]>();
		queue.add(new int[] {start , 0});
		arr[start]=-1;
		
		while(arr[end] == 0 && queue.size() > 0) {
			int[] curInfo = queue.poll();
			int curLoc = curInfo[0];
			int time = curInfo[1];
			
			if(curLoc+1>= 0&&curLoc+1<arr.length&&arr[curLoc+1]==0) {
				queue.add(new int[] {curLoc+1, time+1});
				arr[curLoc+1] = time+1;
			}
			if(curLoc-1>= 0&&curLoc-1<arr.length&&arr[curLoc-1]==0) {
				queue.add(new int[] {curLoc-1, time+1});
				arr[curLoc-1] = time+1;
			}
			if(curLoc*2>=0&&curLoc*2<arr.length&&arr[curLoc*2]==0) {
				queue.add(new int[] {curLoc*2, time+1});
				arr[curLoc*2] = time+1;
			}
		}
		System.out.println(arr[end]);
	}
}