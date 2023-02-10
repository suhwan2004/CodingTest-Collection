package 김수환;

//필요한 패키지 import
import java.io.*;
import java.util.*;

/*
 * 14:00 ~ 14:29
 * Input : 10개가 주어지며 케이스의 번호(int), 암호들(int[])를 준다.
 * Output : 각 10개의 케이스별로 암호
 * Constraints: 
 *  주어지는 각 수는 integer 범위를 넘지 않는다.
 *  마지막 암호 배열은 모두 한 자리 수로 구성되어 있다.
 * Edge case : x
 * 
 * Time : O(N), N은 integer의 최대 범위일 것으로 예상함.
 * Space : O(8) => O(1), 8개의 정수를 가진 암호문은 고정적임
 * ALGO : for
 * DS : deque, string, array
 */
public class A024_SWEA1225_암호생성기_ArrayDeque활용 {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder(); //각 케이스에 대한 답을 저장할 StringBuilder 인스턴스
		
		//문제에서 준 듯이 10회의 테스트 케이스만 체크함.
		for(int test_case = 1; test_case <= 10; test_case++) {
			int cur = Integer.parseInt(br.readLine()); // 현재, 테스트 케이스의 번호
			String[] input = br.readLine().split(" "); // 문자열 형태로 입력받은 8자리 미완성 암호를 문자열 배열로 변경
			Deque<Integer> deque = new ArrayDeque<>(); // 미완성 암호를 넣을 ArrayDeque 생성
			int count = 1; // 1~5의 사이클 유지를 위한 count 변수 추가
			for(int i = 0; i < input.length; i++) { // deque에 미완성 암호들을 int형으로 바꾸고 삽입
				int curNum = Integer.parseInt(input[i]);
				deque.add(curNum);
			}
			
			//암호들 중 하나라도 0이될 때까지 계속 반복해서 사이클을 도는 반복문
			while(true) {
				int curFirstVal = deque.pollFirst(); //현재, deque의 첫번째에서 빼온 값
				if(count == 6) count = 1; // 현재, count가 6이면 사이클이 전에 끝난 것이므로 1로 바꿔줌.
				curFirstVal -= count++; // 가져온 첫째 값을 count만큼 빼줌.
				if(curFirstVal <= 0) {  // 현재, curFirstVal이 0이거나 작다면 끝난 것임.
					deque.addLast(0); // 마이너스일 수도 있으니 0으로 바꿔서 넣어주고
					break; // 반복문 종료
				}
				deque.addLast(curFirstVal); //음수 또는 0이 아니라면 아직 끝난 것이 아니니, 맨 뒤에 값을 넣어주고 다음 차례로 이동
			}
			
			Iterator iter = deque.iterator(); //deque 내의 값을 빼내기 위해 deque.iterator 생성
			sb.append("#").append(test_case).append(" ");
			while(iter.hasNext())
				sb.append(iter.next()).append(" "); //iterator을 활용해서 Stringbuilder 인스턴스에 현재 케이스의 암호를 넣어줌.
			
			sb.append("\n"); // 다 넣었다면 줄바꿈문자 입력
		}
		System.out.println(sb); // 완성된 StringBuilder 인스턴스 출력
	}
}
