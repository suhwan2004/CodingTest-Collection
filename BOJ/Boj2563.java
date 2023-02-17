//필요한 package import
import java.io.*;

/*
 * 1:00 ~ 1:18
 */
public class Boj2563 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); //입력을 위한 BufferedReader 인스턴스 생성
		int result = 0; // 결과값을 저장할 변수 생성
		int caseCount = Integer.parseInt(br.readLine()); // 사각형좌표의 횟수를 저장할 변수
		int[][] board = new int[101][101]; //보드판을 위한 이차원 배열 생성
		
		//caseCount의 수만큼 반복문을 돌음. => 각 좌표에 들어있는 10x10 짜리 사각형을 board에 넣어주기 위함.
		for(int i = 0; i < caseCount; i++) {
			String[] curPos = br.readLine().split(" "); //현재 좌표를 string 배열로 받음
			int curC = Integer.parseInt(curPos[0]); //현재 좌표중 Column
			int curR = Integer.parseInt(curPos[1]); //현재 좌표중 Row
			
			//Column과 Row의 각각 10씩 더한 수치(10x10 정사각형)을 돌며 안에 1을 넣음으로써 현재 사각형의 범위 안에 있다는 것을 표시
			for(int r = curR; r < curR+10; r++) {
				for(int c = curC; c < curC+10; c++) {
					board[r][c] = 1;
				}
			}
		}
		
		//다 끝나면, 다시 한번 board를 돌면서 1이 있는 부분을 발견하면 result에 1이 더해짐.
		for(int r = 0; r < 101; r++) {
			for(int c = 0; c < 101; c++) {
				result += board[r][c];
			}
		}
		System.out.println(result); // board 내에 모든 검은 사각형의 면적을 넣은 result를 출력
	}

}
