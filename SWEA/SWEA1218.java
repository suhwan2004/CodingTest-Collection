// 필요한 패키지 import
import java.io.*;
import java.util.*;
/*
 * 12:18 ~ 12:33
 * Input : 10개의 테스트케이스 별,길이(int)와 괄호들이 담긴 문자열(string)
 * Output : 문자열에 담긴 괄호들이 서로 온전한 쌍으로 다 맞아 떨어지는지를 1과 0으로 구분하여 각테스트 케이스별 출력
 * Contraints : 주지 않음.
 * Edge case : x
 * 
 * Time : O(N)
 * Spce : O(N)
 * ALGO : for
 * DS : Stack
 */
public class A022_SWEA1218_괄호짝짓기_Stack활용 {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		//BufferedReader와 StringBuilder 인스턴스 생성.
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		
		//문제에서 제시한 대로 10회만큼 각 테스트케이스를 확인
		for(int test_case = 1; test_case <= 10; test_case++) {
			int len = Integer.parseInt(br.readLine()); //문자열의 길이
			String[] input = br.readLine().split(""); //문자열을 문자열 배열로 만들어줌.
			Stack<String> stack = new Stack<>(); //문제에서 사용될 스택을 생성
			for(String cur : input) { // 입력받은 문자열 배열들을 다 확인
				
				//닫힌 괄호가 들어오는 경우는 해당 괄호의 쌍이 stack에 마지막에 존재하는지 확인.
				// - 만약, 존재한다면 stack에 마지막을 pop해주고 다음차례로 감.
				// - 만약, 쌍이 맞지 않다면 이 케이스는 틀린 케이스라 판단하고 바로 종료
				//여는 괄호가 들어왔을 시에 push만 진행해주면 됨.
				if(cur.equals(")")) {
					if(stack.peek().equals("(")) stack.pop();
					else break;
				}else if(cur.equals(">")) {
					if(stack.peek().equals("<")) stack.pop();
					else break;
				}else if(cur.equals("}")) {
					if(stack.peek().equals("{")) stack.pop();
					else break;
				}else if(cur.equals("]")) {
					if(stack.peek().equals("[")) stack.pop();
					else break;
				}else {
					stack.push(cur);
				}
			}
			//이번 케이스의 결과를 StringBuilder 인스턴스에 저장.
			sb.append("#").append(test_case).append(" ").append(stack.size() == 0 ? 1 : 0).append("\n");
		}
		//StringBuilder 인스턴스를 출력
		System.out.println(sb);
	}
}


public class A023_SWEA1218_괄호짝짓기_배열활용 {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		
		//문제에서 제시한 대로 10회만큼 각 테스트케이스를 확인
		for(int test_case = 1; test_case <= 10; test_case++) {
			int len = Integer.parseInt(br.readLine()); //문자열의 길이
			String[] input = br.readLine().split(""); //문자열을 문자열 배열로 만들어줌.
			String[] arr = new String[len]; //문제에서 사용될 스택을 생성
			int pointer = -1; //현재, arr의 어디를 보고있는지를 저장할 pointer 변수
			for(String cur : input) { // 입력받은 문자열 배열들을 다 확인
				
				//닫힌 괄호가 들어오는 경우는 해당 괄호의 쌍이 arr에 마지막에 존재하는지 확인.
				// - 만약, 존재한다면 pointer를 하나 빼주고 다음차례로 감.
				// - 만약, 쌍이 맞지 않다면 이 케이스는 틀린 케이스라 판단하고 바로 종료
				//여는 괄호가 들어왔을 시에 현재 cur을 pointer를 하나 더 한 위치에 넣어주고 다음으로 진행해주면 됨.
				if(cur.equals(")")) {
					if(arr[pointer].equals("(")) pointer--;
					else break;
				}else if(cur.equals(">")) {
					if(arr[pointer].equals("<")) pointer--;
					else break;
				}else if(cur.equals("}")) {
					if(arr[pointer].equals("{")) pointer--;
					else break;
				}else if(cur.equals("]")) {
					if(arr[pointer].equals("[")) pointer--;
					else break;
				}else {
					arr[++pointer] = cur;
				}
			}
			//이번 케이스의 결과를 StringBuilder 인스턴스에 저장.
			sb.append("#").append(test_case).append(" ").append(pointer == -1 ? 1 : 0).append("\n");
		}
		//StringBuilder 인스턴스를 출력
		System.out.println(sb);
	}
}
