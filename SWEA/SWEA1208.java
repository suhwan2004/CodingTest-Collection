//문제에서 사용할 io 패키지 임포트
import java.io.BufferedReader;
import java.io.InputStreamReader;

/*
 * 13:59 ~ 14:09
 * Input : 10번 반복되어 주어지며, dump 가능횟수(int), 100개의 칸에 들어가는 값들이 띄어쓰기를 기준으로 주어짐.(int[])
 * Output : 각 턴 별, 가장 높은 칸과 가장 낮은 칸의 차이를 출력
 * Constraints : 
 *   - 가로길이 == 100 => N
 *   - 1 <= 상자의 높이 <= 100  => N
 *   - 1 <= dump의 횟수 <= 1000 => M
 * Edge Case : x
 * 
 * Time : O(10 (1000 * 100) + 100) ) =>  O(10(NM + N)) => O(NM)
 * Space : O(N) => 실제 상자의 집합인 board가 소비
 * ALGO : for
 * DS : Array, String
 */
class SWEA1208
{
	public static void main(String args[]) throws Exception
	{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		for(int test_case = 1; test_case <= 10; test_case++)
		{
			int dumpCount =Integer.parseInt(br.readLine()); //덤프가 가능한 횟수 받기
			String[] arr = br.readLine().split(" "); // 상자들을 입력받음. 문자열 배열로 임시 변환
			int[] board = new int[arr.length]; // 실제 상자들을 저장할 정수 배열
			
			// 문자열 배열을 정수형 배열로 변환하여 저장.
			for(int i = 0; i < arr.length; i++) { 
				board[i] = Integer.parseInt(arr[i]);
			}
			
			int minIdx = 0; // 평탄화를 할 가장 높이가 낮은 인덱스
			int maxIdx = 0; // 평탄화를 제공할 가장 높은 인덱스
			
			//dump할 수 있는 횟수만큼 for loop 진행
			for(int dump = 0; dump < dumpCount; dump++) {
				
				//평탄화 작업 전, minIdx, maxIdx 구하기
				for(int i = 0; i < arr.length; i++) {
					 if(board[minIdx] > board[i]) minIdx = i;
					 if(board[maxIdx] < board[i]) maxIdx = i;
				}
				
				//만약, 평탄화 작업을 할 것들의 높이 차이가 0 ~ 1이면 더 해도 의미가 없음. 현재 턴 종료
				int currentGap = board[maxIdx] - board[minIdx];
				if(currentGap == 0 || currentGap == 1) break;
				
				//평탄화 작업 실시
				board[minIdx]++;
				board[maxIdx]--;
			}
			//다 끝난 이후, 마지막으로 minIdx, maxIdx를 구함.(마지막 minIdx 또는 maxIdx가 동일한 길이를 가지고 있던게 있을 수 있음.)
			for(int i = 0; i < arr.length; i++) {
				 if(board[minIdx] > board[i]) minIdx = i;
				 if(board[maxIdx] < board[i]) maxIdx = i;
			}
			//서로의 높이 차이를 출력함.
			System.out.println("#"+test_case+" "+(board[maxIdx]-board[minIdx]));
		}
	}
}