package 김수환;

//필요한 패키지 import
import java.io.*;
import java.util.*;


public class SWEA1228 {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); //입력을 위한 BufferedReader 인스턴스 생성
		StringBuilder sb = new StringBuilder(); // StringBuilder 인스턴스 생성
		
		for (int test_case = 1; test_case <= 10; ++test_case) { // 문제에서 제시한대로 10회의 테스트 케이스가 들어올 것임. 그렇기에 10회만큼 for문을 돌림.
			int len = Integer.parseInt(br.readLine()); //현재 받을 배열의 길이.
			int[] input = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray(); //문자열을 숫자 배열로 바꿔줌.
			LinkedList<Integer> linkedList = new LinkedList<>(); // 암호문을 담을 linkedList 생성
			
			// linked list에 암호문들을 저장.
			for(int i = 0; i < input.length; i++) {
				linkedList.add(input[i]);
			}
			
			
			int orderLen = Integer.parseInt(br.readLine()); //암호 명령문의 길이를 받음.
			String[] arr = br.readLine().split(" "); // 암호 명령문을 string 배열로 받음.
			
			ArrayList<ArrayList<Integer>> list = new ArrayList<ArrayList<Integer>>(); // 이중 ArrayList를 생성.
			
			int p = 0; //현재 인덱스를 나타내는 p 변수 생성
			while(p < arr.length) { //암호 명령문의 길이만큼 p를 옮겨다니면서 반복문을 돌릴 것임을 명시
				if(arr[p].equals("I")) { //만약 명령문의 시작인 I를 만났다면?
					int startPos = Integer.parseInt(arr[++p]); // 명령을 시작할 위치
					int count = Integer.parseInt(arr[++p]); // 넣을 암호문 개수
									
					for(int j = p+1; j < p+count+1; j++) {
						linkedList.add(startPos++, Integer.parseInt(arr[j])); //linkedList에 start위치로부터 count갯수만큼의 암호문을 넣어줌.
					}
					p += count+1; // 이번 명령문은 끝났기에 포인터는 다음으로 넘겨주기.
				}else {
					p++; //암호문이 아니였다면 그냥 다음 p로 이동.
				}
			};
			
			//StringBuilder 인스턴스에 현재 만든 암호문을 담음.
			sb.append("#").append(test_case).append(" ");
			for(int i = 0; i < 10; i++) { //문제에서 제시한 대로 10개의 암호문만 담음.
				sb.append(linkedList.get(i)).append(i == 9 ? "\n" : " ");
			}
		}
		System.out.println(sb); //StringBuilder 인스턴스 출력을 통해 현재 만든 최종 암호문을 보여줌.
	}
}
