//필요한 패키지 받기
import java.io.*;
import java.util.*;


public class Boj2493 {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); // 입력을 위한 BufferedReader 인스턴스 생성
		int len = Integer.parseInt(br.readLine()); // 입력받을 정수배열의 길이 입력받
		int[] input = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray(); //입력받은 문자열을 정수배열로 변환함.
		StringBuilder sb = new StringBuilder(); // 출력할 값을 저장할 StringBuilder 인스턴스 생성
		Stack<int[]> stack = new Stack<>(); // 탑을 저장하여 문제를 해결하기위해, Stack 생성

		//모든 탑을 다 보면서 비교가 되야 하기 되기 때문에 input의 길이만큼 돔.
		for (int i = 0; i < input.length; i++) {
			while (!stack.isEmpty()) {
				//만약, stack에 뭔가 존재하는 상태라면, 스택에 저장되어 있는 탑의 높이와 현재, i번째 탑의 높이를 비교함.
				if (stack.peek()[1] >= input[i]) { //현재 저장되어 있는 것이 크거나 같다면 i번째 탑은 해당 탑에 막힐 것임. 그러니 sb에 저장하고 stack내에 다른 탑을 더 볼 필요 없음.
					sb.append(stack.peek()[0]).append(" ");
					break;
				}
				else stack.pop(); // 만일,i번째 탑이 더 크다면 stack에 남아있는 가치가 없는 작은 탑이기에 pop
			}
			//만약, stack이 비어있는 상태였다면
			if (stack.isEmpty()) {
				sb.append("0").append(" "); //비교할 탑이 없기에 sb에 0으로 표시
			}
			stack.push(new int[] { i+1, input[i] }); //stack에 현재 i번째 탑을 넣음.
		}
	}
}
