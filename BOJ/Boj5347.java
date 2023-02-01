import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Boj5347 {

	public static void main(String[] args) throws NumberFormatException, IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int caseLen = Integer.parseInt(br.readLine());
		
		for(int i = 0; i < caseLen; i++) {
			String[] arr = br.readLine().split(" ");
			int a = Integer.parseInt(arr[0]);
			int b = Integer.parseInt(arr[1]);
			int aC = 1, bC = 1;
			int aRes = a, bRes = b;
			
			while(aRes != bRes) {
				if(aRes < bRes) aRes = a*(++aC);
				else if(aRes > bRes) bRes = b*(++bC);
				else break;
			}
			System.out.println(aRes);
		}
	}

}
