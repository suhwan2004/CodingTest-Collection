//필요한 패키지 import
import java.util.*;
import java.io.*;

public class SWEA1233 {
	public static void main(String[] args) throws IOException{
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); //입력받을 BufferedReader 라이브러리 생성
		StringBuilder sb = new StringBuilder(); // 결과를 저장할 StringBuilder 인스턴스 생성

		for(int test_case = 1; test_case <= 10; test_case++) {
			int totalNodeLen = Integer.parseInt(br.readLine()); // 모든 노드의 길이를 입력받음.
			boolean flag = true; //현재 트리가 잘 사칙연산이 되는지 저장할 플래그
			for(int i = 0; i < totalNodeLen; i++) { 
				String[] s = br.readLine().split(" "); //노드를 입력받음
				// 리프노드의 s의 길이는 2이며, 뒤에는 값이 나옴. 해당 값이 특수문자라면 flag는 false가 됨.
				if(s.length == 2 && (s[1].equals("+") || s[1].equals("-") || s[1].equals("*") || s[1].equals("/"))) {
					flag = false;
				}
			}
			//flag한 결과를 저장함.
			sb.append("#").append(test_case).append(" ").append(flag ? 1 : 0).append("\n");
		}
		System.out.println(sb); //결과값 반환
	}
}
