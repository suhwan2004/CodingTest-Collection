import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashSet;

public class Boj2960 {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] input = br.readLine().split(" ");
		HashSet<Integer> set = new HashSet<>();
		int N = Integer.parseInt(input[0]);
		int K = Integer.parseInt(input[1]);
		int count = 0;
		int result = 0;
		int start = 2;
		
		while(count < K) {
			int cur = 1;
			while(start * cur <= N) {
				int curVal = start * cur;
				if(set.contains(curVal)) cur++;
				else {
					set.add(curVal);
					count++;
					cur++;
				}
				if(count == K) {
					result = curVal;
					break;
				}
			}
			if(count == K) break;
			else {
				start++;
			}
		}
		System.out.println(result);
	}

}
