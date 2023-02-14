//필요한 패키지 import
import java.io.*;
import java.util.*;

public class Boj16926{
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); //입력받을 BufferedReader 라이브러리 생성
		StringBuilder sb = new StringBuilder(); // 결과를 저장할 StringBuilder 인스턴스 생성
		
		String[] input = br.readLine().split(" "); //입력받음
		int row = Integer.parseInt(input[0]); // 열의 길이
		int col = Integer.parseInt(input[1]); //행의 길이
		int R = Integer.parseInt(input[2]); // 이동해야 되는 횟수
		int[][] board = new int[row][col]; // 열과 행을 통해 이차원 배열을 만듬
		
		
		//열의 길이만큼 가로 한 줄씩 입력을 받음. 그렇기에, 길이만큼 반복문 시작
		for(int i = 0; i < row; i++) {
			String[] curInput = br.readLine().split(" "); // 행 에 들어갈 요소들
			for(int j = 0; j < curInput.length; j++) {
				board[i][j] = Integer.parseInt(curInput[j]); // 각 요소들을 숫자로 바꿔서 넣어줌.
			}
		}
		
		/*
		 * 홀수라면 가운데, 짝수라면, 뒤쪽에 가까운 가운데로 둔다.
		 */
		int dep = 0;
		while(2*dep<col&&2*dep<row) {
			LinkedList<Integer> list = new LinkedList<>();
			//list에 현재, 한 바퀴를 돈 것을 저장함.
			// 윗변 돌리기
			for(int i = col - dep - 1; i >= dep; i--) {
				list.addFirst(board[dep][i]);
			}
			// 왼쪽변 돌리기
			for(int i = dep; i < row - dep; i++) {
				if(i==dep) continue;
				list.addFirst(board[i][dep]);
				
			}
			// 아랫변 돌리기
			for (int i = dep; i < col - dep; i++) {
				if(i==dep) continue;
				list.addFirst(board[row-dep-1][i]);
			}
			// 오른쪽변 돌리기
			for(int i = row-dep-1; i >=dep; i-- ) {
				if(i==row-dep-1||i == dep) continue;
				list.addFirst(board[i][col-dep-1]);
			}
			
			//list가 존재하지 않는다면 그냥 멈추기
			if(list.size() == 0) break;
			int curR = R % list.size(); //R이 과도하게 높다면 %연산자를 사용해서 정제해줌
			
			int startP = (list.size()-1 + curR)%list.size(); // linked list 중 시작 위치 지정
			int count = 0; //list의 사이즈만큼 돌기위해 count 추가
			
			// 윗변 돌린 것을 실제 이차원 배열에 적용
			for(int i = col - dep - 1; i >= dep; i--) {
				board[dep][i] = list.get(startP);
				startP = startP-1 < 0 ? list.size()-1 : startP-1;
				count++;
			}
			// 왼쪽변 돌린 것을 실제 이차원 배열에 적용
			for(int i = dep; i < row - dep; i++) {
				if(i==dep) continue;
				board[i][dep] = list.get(startP);
				startP = startP-1 < 0 ? list.size()-1 : startP-1;
				count++;
			}
			// 아랫변 돌린 것을 실제 이차원 배열에 적용
			for (int i = dep; i < col - dep; i++) {
				if(i==dep) continue;
				board[row-dep-1][i] = list.get(startP);
				startP = startP-1 < 0 ? list.size()-1 : startP-1;
				count++;
			}
			// 오른쪽변 돌린 것을 실제 이차원 배열에 적용
			for(int i = row-dep-1; i >=dep; i-- ) {
				if(i==row-dep-1||i == dep) continue;
				board[i][col-dep-1] = list.get(startP);
				startP = startP-1 < 0 ? list.size()-1 : startP-1;
				count++;
			}
			dep++;
		}
		
		//다 돌린 배열을 sb에 저장
		for(int i = 0; i < row; i++) {
			for(int j = 0; j < col; j++) {
				sb.append(board[i][j]);
				if(j < col-1) sb.append(" ");
			}
			sb.append("\n");
		}
		System.out.println(sb); //sb 출력
	}
}
