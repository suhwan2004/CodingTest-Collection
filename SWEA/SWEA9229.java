//필요한 패키지 import
import java.io.*;
import java.util.*;

public class SWEA9229 {
	static int[] snacks; // 입력받은 과자를 저장할 배열
	static int limitedWeight; //입력받을 최대 무게를 저장할 변수
	static int maxWeight; // 로직을 진행하며 갱신될 최대 무게
	public static void main(String[] args) throws IOException{
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); // 입력을 받기 위핸 BufferedReader 인스턴스 생성
		StringBuilder sb = new StringBuilder(); // 결과값 저장을 위한 StringBuilder 인스턴스 생성
		
		int totalTestCase = Integer.parseInt(br.readLine()); // 모든테스트 케이스 횟수를 저장함.
		
		//위에서 입력받은 테스트 케이스 횟수만큼 loop가 돌아감.
		for(int test_case = 1; test_case <= totalTestCase; test_case++) {
			String[] input = br.readLine().split(" "); // 입력받은 문자열을 배열로 쪼갬.
			int totalSnack = Integer.parseInt(input[0]); //현재 입력받을 과자들의 총 갯수
			limitedWeight = Integer.parseInt(input[1]); //현재 입력받을 과자들을 동시에 2개 들 때, 무게 제한이 얼마인지
			maxWeight = -1; // 현재 최대 무게. default를 -1을 뒀기에 하나의 케이스라도 존재하지 않는다면 -1 반환
			snacks = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray(); //과자들의 무게 정보가 담긴 정수형 배열
			dfs(0, 0, -1); // dsf시작.
			sb.append("#").append(test_case).append(" ").append(maxWeight).append("\n"); // dfs이후, 얻은 최고 무게를 sb에 저장.
		}
		
		System.out.println(sb); // 각 케이스별 저장한 무게들을 출력
	}
	
	// sum은 현재 담은 과자의 총 무게. cnt는 현재 집은 과자의 수, prev는 그 전에 과자를 집었던 인덱스
	public static void dfs(int sum, int cnt, int prev) {
		if(sum > limitedWeight) return; //무게가 초과했다면 더 볼 필요 없음.현재 재귀 종료
		if(cnt == 2) { //과자를 두개 집었다면 maxWeight 갱신 및 현재 재귀 종료
			maxWeight = Math.max(maxWeight, sum); 
			return;
		}
		
		//위의 조건문을 거치지 않을 시, 과자를 더 집어야 하기에 prev보다 1 더한 인덱스부터 끝까지 돌면서 과자를 집어봄.
		for(int i = prev+1; i < snacks.length; i++) {
			dfs(sum + snacks[i], cnt+1, i); //다음 재귀로 이동.
		}
	}
}
