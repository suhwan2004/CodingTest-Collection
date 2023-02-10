import java.io.*;

/*
 * 12:00 ~ 12:37
 * Input : 재료의 종류(int), 종류만큼 들어오는 신, 쓴 재료(int [])
 * Output : 가장 신 맛과 쓴 맛의 차이가 덜할 때의 그 차이(int)
 * Contraints : 
 *   - 신맛은 곱하고, 쓴맛은 더한다.
 *   - N(1 ≤ N ≤ 10)
 *   - 신맛과 쓴맛은 모두 1,000,000,000보다 작은 양의 정수
 * Edge case : x
 * 
 * Time : O(2^N)
 * Space : O(2^N)
 * ALGO : dfs, recursion, for
 * DS : array, String
 */

public class A018_BJ2961_도영이가만든맛있는음식 {
	static int min = Integer.MAX_VALUE; //신, 쓴 재료들의 가장 적은 차이
	static int[][] stuffs; // [신, 쓴] 쌍의 재료를 담는 이차원배열
	static boolean[] isSelected; // 각 쌍의 재료set을 음식에 넣었는지 안 넣었는지를 저장하는 배열
	
	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
		
		//재료의 갯수 입력
		int stuffCount = Integer.parseInt(br.readLine());
		stuffs = new int[stuffCount][2]; //재료의 갯수만큼 이차원 배열의 열의 길이를 지정하고 생성
		isSelected = new boolean[stuffCount]; // 재료의 갯수만큼 생성해줌.
		
		//재료의 갯수만큼 입력을 받아서 stuffs 이차원 배열에 [신, 쓴] 쌍의 재료를 넣어준다.
		for(int i = 0; i < stuffCount; i++) {
			String[] input = br.readLine().split(" ");
			stuffs[i][0] = Integer.parseInt(input[0]);
			stuffs[i][1] = Integer.parseInt(input[1]);
		}
		
		//모든 재료를 넣고, 넣지 않는 경우의 결과를 구하기 시작한다.
		// 매개변수는 카운트 용도인 cnt와 현재, isSelected의 몇번째 인덱스인지 보는 loc을 넣는다.
		recursion(0, 0);
		
		// 결과를 출력함.
		System.out.println(min);
	}
	
	public static void recursion(int cnt, int loc) {
		// N만큼 조합을 짰다면, 확인하기
		if(cnt == isSelected.length) {
			int curT1 = 0; // 신맛을 합친 변수
			int curT2 = 0; // 쓴맛을 합친 변수
			boolean flag = false; //한 번이라도 재료를 사용했는지 판단하는 변수(신맛, 쓴맛은 0으로 받아질 수 있기 때문)
			for(int i = 0; i < isSelected.length; i++) {
				//i번째 재료를 사용했다면
				if(isSelected[i]) {
					flag = true; // 재료사용 확인. true를 넣기
					if(curT1 == 0) curT1 = stuffs[i][0]; // 신맛의 경우 곱하기 때문에 초기값 0과 곱해지면 오류가 날 수 있음. 해당 처리
					else curT1 *= stuffs[i][0];
					curT2 += stuffs[i][1]; // 쓴맛은 더하기
				}
			}
			if (flag) min = Math.min(min, Math.abs(curT1 - curT2)); // 단 한번이라도 재료를 썼다면 min 갱신 시도하기.
			return;
		}
		// loc번째 재료를 사용한 경우로 부분수열 만들기
		isSelected[loc] = true;
		recursion(cnt + 1, loc+1);
		
		// loc번째 재료를 사용하지 않은 경우로 부분수열 만들기
		isSelected[loc] = false;
		recursion(cnt + 1, loc+1);
	}

}
