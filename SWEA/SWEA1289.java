
import java.util.Scanner;

public class SWEA1289 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int T;
		T = sc.nextInt();
		sc.nextLine();

		for (int test_case = 1; test_case <= T; test_case++) {
			String[] currentInput = sc.nextLine().split("");
			int[] arr = new int[currentInput.length];
			for (int i = 0; i < arr.length; i++) {
				arr[i] = Integer.parseInt(currentInput[i]);
			}
			int[] target = new int[arr.length];
			int p = 0;
			int cnt = 0;
			while (p != arr.length) {
				if (arr[p] != target[p]) {
					changeValOfArray(p, target);
					cnt++;
				}
				p++;
			}

			System.out.println("#" + test_case + " " + cnt);
		}
	}

	private static void changeValOfArray(int start, int[] arr) {
		int focusVal = arr[start] == 1 ? 0 : 1;
		for (int i = start; i < arr.length; i++) {
			arr[i] = focusVal;
		}
	}

}
