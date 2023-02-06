import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Boj1343 {

	public static void main(String[] args) throws IOException{
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] arr = br.readLine().split((""));
		if(arr.length == 1) {
			System.out.println(-1);
			return;
		}
		
		int l = 0, r = 0;
		boolean flag = true;
		while(arr.length > r) {
			if(arr[r].equals("X")) {
				r++;
			}
			else if(arr[r].equals(".") && l == r) {
				l++;
				r++;
			}
			else if(arr[r].equals(".") && l != r) {
				int curDistance = r - l;
				if(curDistance %4 %2 != 0) {
					flag = false;
					break;
				}else {
					int val4 = curDistance/4;
					int val2 = curDistance%4/2;
					for(int i = 0; i < val4; i++) {
						arr[l++]="A";
						arr[l++]="A";
						arr[l++]="A";
						arr[l++]="A";
					}
					
					for(int i = 0; i < val2; i++) {
						arr[l++]="B";
						arr[l++]="B";
					}
				}
				
				while(arr.length > r && arr[r].equals("X")) {
					l++;
					r++;
				}
			}
		}
		
		
		if(!flag) System.out.println(-1);
		else {
			if(l != r) {
				int curDistance = r - l;
				if(curDistance %4 %2 != 0) {
					flag = false;
				}else {
					int val4 = curDistance/4;
					int val2 = curDistance%4/2;
					for(int i = 0; i < val4; i++) {
						arr[l++]="A";
						arr[l++]="A";
						arr[l++]="A";
						arr[l++]="A";
					}
					
					for(int i = 0; i < val2; i++) {
						arr[l++]="B";
						arr[l++]="B";
					}
				}
			}
			
			boolean anotherHas = false;
			for(int i = 0; i < arr.length; i++) {
				if(!arr[i].equals(".")) anotherHas = true;
			}
			if(!anotherHas || !flag) System.out.println(-1);
			else {
				for(String cur : arr) {
					System.out.print(cur);
				}
			}
		}
		
	}

}
