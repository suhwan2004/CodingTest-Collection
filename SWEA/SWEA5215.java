package 김수환;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class SWEA5215 { // class
    static int N;  // 음식 수
    static StringBuilder sb = new StringBuilder();
    static BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
    static StringTokenizer st;
    static int L; // 최대 칼로리
    static Node[] arr; // 음식들 저장
    static int answer; // 정답
    public static void main(String[] args) throws IOException { // Main
        int tc = Integer.parseInt(bf.readLine()); // 테스트 케이스 수
        for(int test_case = 1; test_case<=tc;test_case++){ // 1~테스트 케이스까지
            answer = 0; // 정답
            st = new StringTokenizer(bf.readLine()); // 한줄 입력 받음
            N = Integer.parseInt(st.nextToken()); // 음식 제료 수
            L = Integer.parseInt(st.nextToken()); // 칼로리 최대 크기
            arr = new Node[N]; // 음식 저장하는 배열
            for(int i=0;i<N;i++) { // 음식 갯수 만큼 돌면서
                st = new StringTokenizer(bf.readLine()); // 음식 정보 받고
                arr[i] = new Node(Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken())); // 음식 정보 저장한다.
            }
            dfs(0,0,0); // 빽트레킹 시작
            sb.append('#').append(test_case).append(' ').append(answer).append("\n"); // 정답 입력
        }
        System.out.println(sb); // 정답 출력
    }
    // 현재 노드랑, 칼로리
    static void dfs(int cur,int K,int S){ // 빽트래킹 시작
        if(K > L) return; // 만약에 칼로리가 넘으면 return
        answer = Math.max(answer,S); // 만들수 있는 칼로리의 최대값
        if(cur >= N) return; // 만약에 인덱스가 넘어가면 return
        dfs(cur+1,K+arr[cur].k,S+arr[cur].s); // 현재 제료 선택
        dfs(cur+1,K,S); // 현재 재료 선택 안함
    }
    static class Node{ // 재료 저장하는 배열
        int s; // 재료 점수
        int k; // 재료 칼로리
        public Node(int s, int k) { // 생성자.
            this.s = s;
            this.k = k;
        }
    }
}
