// 문제에서 필요한 패키지 import
import java.util.*;
import java.io.*;

public class Boj1158 {
	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); //입력을 위한 BufferedReader 인스턴스 생성
		int[] input = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray(); //입력받은 문자열을 정수형 배열로 변환
		StringBuilder sb = new StringBuilder(); // StringBuilder 인스턴스 생성

		ArrayList<Integer> list = new ArrayList<>(); // 결과를 저장할 ArrayList 생성
		LinkedList<Integer> linkedList = new LinkedList<>(); // 원형으로 둘러앉아있는 것을 가정하기 위한 linkedList 생성

		int dist = 1; //이동 거리
		int idx = 0; //현재 위치
		
		//linkedList에 첫번째부터 마지막 사람까지 다 넣어줌.
		for(int i = 1; i <= input[0]; i++) {
			linkedList.add(i);
		}
		
		//linkedList는 요세푸스가 진행될 수록 사람이 줄 것이고 결국 사람의 수는 0이 되기 때문에 0이 될때까지 로직실행.
		while(linkedList.size() != 0) {
			// dist가 k와 동일한 경우, 거리를 성공적으로 이동한 것임.
			if(dist == input[1]) {
				list.add(linkedList.get(idx)); //list에 결과 저장.
				linkedList.remove(idx); // 게임에서 사람을 빼기
				dist = 1; //이동거리를 다시 초기화
				if(idx >= linkedList.size()) idx = 0; //만약, 삭제 이후, 길이를 넘기는 인덱스를 본다면 0으로 이동
			}
			else {
				//거리를 덜 벌렸다면 더 이동.
				idx= (idx >= linkedList.size()-1) ? 0 : idx+1 ;
				dist++;
			}
		}
		
		sb.append("<");
		for(int i = 0; i < list.size(); i++) {
			sb.append(list.get(i)).append(i == list.size()-1 ? ">" : ", ");
		}
		//StringBuilder 인스턴스를 출력하여 결과를 보여줌.
		System.out.println(sb);
	}
}
