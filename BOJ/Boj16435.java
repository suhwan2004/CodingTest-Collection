import java.util.*;
import java.io.*;

public class Boj16435 {

	public static void main(String[] args) throws Exception{ //main 메서드
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); //입력을 받기위한 BufferedReader
        StringTokenizer st = new StringTokenizer(br.readLine()); //입력받은 문자열을 공백을 기점으로 자름
        StringBuilder sb = new StringBuilder(); // 결과를 모아서 출력하기위한 StringBuilder
        int n = Integer.parseInt(st.nextToken()); //입력받은 값을 과일의 개수인 n에 저장
        int l = Integer.parseInt(st.nextToken()); //입력받은 값을 스네이크버드의 길이인 l에 저장
        int[] fruits = new int[n]; //열매의 개수만큼 fruits 배열 선언
        st = new StringTokenizer(br.readLine()); //문자열을 공백을 기점으로 자름
        for(int i=0; i<n; i++) { //fruits배열에 값을 넣기위한 for문
            fruits[i] = Integer.parseInt(st.nextToken()); //입력받은 값을 fruits 배열에 넣음
        }
        Arrays.sort(fruits); //fruits배열을 오름차순으로 정렬
        for(int value : fruits) { //fruits배열에서 값을 하나씩 꺼내서
            if(value<=l) { //값이 현재의 몸길이와 같거나 작다면
                l++; //몸 길이 +1
            }
            else { //그렇지 않다면
                break; //반복문 종료
            }
        }
        sb.append(l); //sb에 최종 몸길이 append
        System.out.println(sb); //최종 결과값 출력 
    }

}
