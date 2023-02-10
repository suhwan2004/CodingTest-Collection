package 김수환;

//필요한 패키지 import
import java.util.*;
import java.io.*;

/*
 * 14:04 ~ 14:36
 * 
 * Input : Dna 문자열의 길이, 만들어야 하는 비밀번호의 길이, DNA 문자열, ACGT별 필수적으로 필요한 갯수
 * Output : 최종적으로 만들 수 있는 문자열
 * Contraints : (1 ≤ |P| ≤ |S| ≤ 1,000,000) => S는 DNA문자열 길이, P는 부분문자열 길이
 * Edge case : x
 * 
 * Time : O(S)
 * Space : O(S), map은 key가 무조건 4로 constant임. DnaArr가 공간복잡도를 씀.
 * ALGO : Two pointer, for
 * DS : Array, HashMap
 * 
 */
public class A019_BJ12891_DNA비밀번호 {
	static String[] DnaArr; //Dna 문자열을 저장할 배열
	static Map<String, Integer> map; //필수로 들어가야할, ACGT의 갯수를 넣을 hashmap
	static int totalCount = 0; // 만들어질 수 있는 문자열 갯수
	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] inputCount = br.readLine().split(" "); // Dna 길이와 비밀번호 길이를 받음.
		int DnaLen = Integer.parseInt(inputCount[0]);
		DnaArr = new String[DnaLen]; //Dna 문자열 길이만큼 DnaArr를 생성

		int passwordLen = Integer.parseInt(inputCount[1]); // password 길이 받음.

		DnaArr = br.readLine().split(""); // Dna문자열에 실제 문자열 넣기
		map = new HashMap<>(); // map 인스턴스 생성
		Map<String, Integer> curPassword = new HashMap<>(); // 현재 저장된 비밀번호를 저장할 curPassword 생성

		//필요한 각 문자열의 갯수를 입력받고, map에 넣어줌.
		String[] neededDnaCount = br.readLine().split((" "));
		map.put("A", Integer.parseInt(neededDnaCount[0]));
		map.put("C", Integer.parseInt(neededDnaCount[1]));
		map.put("G", Integer.parseInt(neededDnaCount[2]));
		map.put("T", Integer.parseInt(neededDnaCount[3]));

		//two pointer 로직 시, 필요한 l, r 포인터
		int l = 0, r = -1;

		//while의 동작조건은 r 포인터가 DnaArr의 index를 초과하지 않는 것임!
		while (r < DnaLen) {
			//현재 만든 비밀번호가 만들어야할 비밀번호의 길이와 동일하다면?
			if (r - l + 1 == passwordLen) {
				// 현재 문제에서 요했던 각 문자열 별 갯수를 만족시키는지, 만족시키면 totalCount를 하나 더해줌.
				if (map.getOrDefault("A", 0) <= curPassword.getOrDefault("A", 0) && map.getOrDefault("C", 0) <= curPassword.getOrDefault("C", 0)
						&& map.getOrDefault("G", 0) <= curPassword.getOrDefault("G", 0) && map.getOrDefault("T", 0) <= curPassword.getOrDefault("T", 0)) {
					totalCount++;
				}
				
				//l을 하나를 앞으로 땡겨서 다음 케이스를 봐야됨.
				curPassword.put(DnaArr[l], curPassword.get(DnaArr[l])-1);
				l++;
			}else if (r - l + 1 < passwordLen) {
				// 문자열이 덜 완성되었다면 r 포인터를 더 이동해야함.
				r++;
				if(r >= DnaLen) {
					//r이 끝까지 닿았다면 break;
					r--;
					break;
				}
				curPassword.put(DnaArr[r], curPassword.getOrDefault(DnaArr[r], 0) + 1);
				continue;
			}
		}
		
		//while 종료 이후, 안 본 조합이 하나 생길 수 있으니 추가 조사.
		if (r - l + 1 == passwordLen && map.getOrDefault("A", 0) <= curPassword.getOrDefault("A", 0) && map.getOrDefault("C", 0) <= curPassword.getOrDefault("C", 0)
				&& map.getOrDefault("G", 0) <= curPassword.getOrDefault("G", 0) && map.getOrDefault("T", 0) <= curPassword.getOrDefault("T", 0)) {
			totalCount++;
		}
		
		//구한 totalCount 출력
		System.out.println(totalCount);
	}
}
