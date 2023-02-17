
import java.io.*;

public class Boj2839 { // class import
    public static void main(String[] args) throws Exception { // main start
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); // 입력받을 BufferedReader 객체 생성
        StringBuilder sb = new StringBuilder(); // 출력할 결과 담은 StringBuilder 객체 생성
        int N = Integer.parseInt(br.readLine()); // 배달해야하는 설탕 무게 입력받기
        int result = N / 5; // 배달해야하는 설탕을 봉지에 몇 봉지 담을 수 있는지 계산
        int yh = N % 5; // 배달해야하는 설탕 무게를 5kg 봉지로 담았을 때 남아있는 설탕 무게 계산
        while (result != -1) { // 5kg 봉지를 기준으로 음수가 되지 않을동안 설탕을 봉지에 나눠담는 반복 진행
            if (yh % 3 == 0) { // 남아있는 설탕 무게가 3으로 나뉘어떨어질 때
                result += (yh / 3); // result에 3으로 나눈 값 만큼 더하기
                break; // 더이상 남아있는 설탕이 없기에 반복문 종료
            } else if (yh >= N) { // 남아있는 설탕이 처음에 입력받은 무게보다 크거나 같을때
                result = -1; // 설탕을 나누어 담을 수 없는 경우이므로 result에 -1을 넣어주기
            } else { // 남아있는 설탕을 3으로 나눌 수 없을 때
                result--; // result에 담겨있던 5kg 봉지를 하나 빼고
                yh += 5; // 남아있는 설탕 무게에 5kg 추가
            }
        }
        sb.append(result); // 반복문이 종료됐을 때 result 결과를 StringBuilder에 담기
        System.out.println(sb); // 결과 출력하기
        br.close();
    }
}
