//필요한 패키지 import
import java.io.*;
import java.util.*;

/*
 * 14:41 ~ 14:54
 * Input : 카드의 갯수(int)
 * Output : 최종적으로 남은 카드의 인덱스(int)
 * Contraints : 
 * 	- N(1 ≤ N ≤ 500,000)
 * Edge case : 
 * 	- 카드의 갯수가 한 개라면 바로 1을 출력 후, 함수를 종료한다.
 * 
 * Time : O(N), N = 카드의 갯수
 * Space : O(N)
 * ALGO : for
 * DS : Deque, array, string
 * 
 */
public class Boj2164 {
	public static void main(String[] args) throws IOException{
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int cardLen = Integer.parseInt(br.readLine()); // 카드의 갯수 받기
		
		//Edge case : 카드의 갯수가 한 개라면 바로 1을 출력 후, 함수를 종료한다.
		if(cardLen == 1) { 
			System.out.println(1);
			return;
		}
		
		// 카드를 저장할 ArrayDeque 인스턴스 생성
		Deque<Integer> deque = new ArrayDeque<>();
		for(int i = 1; i <= cardLen; i++) {
			deque.add(i); //카드를 deque에 넣음.
		}
		
		//최종적으로 한 개의 카드가 남을 때까지 무한 반복하는 반복문
		while(true) {
			//맨 위에 카드를 버린다.(pollFirst)
			deque.pollFirst();
			if(deque.size() == 1) break; // 만약, 카드를 버렸을 때, 남은 카드가 한개라면 바로 반복문 종료
			
			//다음 맨 위의 카드를 꺼내서 뒤로 넣는다. (pollFirst and addLast)
			int curVal = deque.pollFirst(); // 현재, 위에서 꺼낸 카드
			deque.addLast(curVal); // 꺼낸 카드를 아래에 넣음.
			if(deque.size() == 1) break;
		}
		System.out.println(deque.pollFirst()); // 가장 마지막에 남는 것을 출력한다.
	}

}
