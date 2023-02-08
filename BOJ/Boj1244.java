// 필요한 패키지 import
import java.io.*;

/*
 * 20:55 ~ 21:32
 * Input : switch 갯수, switch 배열, 학생 수, 학생 수 만큼 (성별, 가진 스위치)
 * Output : 학생들의 성별에 따른 스위치 변환 이후의 결과 스위치들
 * Constraints:
 *   - switchs.length <= 100, switchs is integer
 *   - students.length <= 100, students is integer
 *   - 켜져있으면 1, 꺼져있으면 0이며 두 개로만 이뤄져 있음.
 *   - 1은 남학생, 2는 여학생.
 *   - 남학생은 가진 스위치를 기준으로 배수로 움직이며 스위치를 전환함.
 *   - 여학생은 가진 스위치를 기준으로 양 옆으로 전파하며 대칭쌍이 같으면 전환함. 다르면 거기서 멈춤.
 * Edge case : x
 * 
 * Time : O(N^2) => 학생의 수 * 스위치의 길이
 * Space : O(N)=> 스위치의 길이
 * ALGO : for, while
 * DS : Array
 */

public class Boj1244 {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		// 스위치의 갯수 받기, 그에 맞는 정수형 배열 생성 후에 배열에 스위치들 넣어주기.
		int[] switchs = new int[Integer.parseInt(br.readLine())];
		String[] inputArr = br.readLine().split(" ");
		for (int i = 0; i < switchs.length; i++) {
			switchs[i] = Integer.parseInt(inputArr[i]);
		}
		
		// 현재 총 학생 수를 입력받음.
		int totalStudent = Integer.parseInt(br.readLine());
		
		// 학생 별로 동작을 해야되기 때문에, 학생의 수만큼 for Loop 진행.
		for (int i = 0; i < totalStudent; i++) {
			String[] curStudentArr = br.readLine().split(" "); //입력받은 학생 정보 => "성 스위치의위치"를 배열로 변환.
			int gender = Integer.parseInt(curStudentArr[0]); // 위의 배열에서 성을 빼냄.
			int personSwitch = Integer.parseInt(curStudentArr[1]); //위의 배열에서 스위치 위치를 빼냄.

			//성별로 로직을 분리.
			switch (gender) {
			case 1: //남성일 경우
				int manSwitchPos = personSwitch;
				int cnt = 1;
				while (manSwitchPos - 1 < switchs.length) {
					switchs[manSwitchPos - 1] = switchs[manSwitchPos - 1] == 1 ? 0 : 1;
					manSwitchPos = (personSwitch * ++cnt);
				}
				break;
			case 2: //여성일 경우
				//변경할 대칭점인 좌 우를 변수로 선언
				int curL = personSwitch - 1, curR = personSwitch - 1;
				//curL이나, curR이 정해진 인덱스 위치를 넘기거나, 둘의 요소값이 다르다면 더 이상 while을 돌 필요 없음.
				while (curL >= 0 && curR <= switchs.length - 1 && switchs[curL] == switchs[curR]) {
					if (curL == personSwitch - 1) {
						switchs[curL] = switchs[curL] == 0 ? 1 : 0; //맨 처음경우, 가운데이기 때문에 바꾸는건 한번만 해주면 됨.
					} else {
						// curL, curR에 있는 요소들을 reverse해줌.
						switchs[curL] = switchs[curL] == 0 ? 1 : 0;
						switchs[curR] = switchs[curR] == 0 ? 1 : 0;
					}
					//다음 대칭점으로 이동
					curL--;
					curR++;
				}
				break;
			default:
				break;
			}
		}
		// 문제의 요구사항대로, 20개씩 끊어서 출력
		for(int i = 0; i < switchs.length; i++) {
			if((i+1)%20 != 0 || i+1 == 1) System.out.printf("%d ",switchs[i]);	
			else System.out.println(switchs[i]);
		}

	}

}
