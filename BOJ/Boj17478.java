import java.util.Scanner;

public class Boj17478 {
	static int N;
    static final String FIRST_SENTENCE = "어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.\n";
    static final String STR1 = "\"재귀함수가 뭔가요?\"\n";
    static final String STR2 = "\"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.\n";
    static final String STR3 = "마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.\n";
    static final String STR4 = "그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어.\"\n";

    static String[] arr= {STR1, STR2, STR3, STR4};
    static final String ANS = "\"재귀함수는 자기 자신을 호출하는 함수라네\"\n";
    static final String FINAL_STRING = "라고 답변하였지.\n";
    
    private static void reculsive(int dep) {
    	String line = "";
    	for(int i = 0; i < dep; i++) {
    		line += "____";
    	}
    	
    	if(dep == N) {
    		System.out.print(line + arr[0]);
    		System.out.print(line + ANS);
    		System.out.print(line + FINAL_STRING);
    		return;
    	}
    	for(int i = 0; i < arr.length; i++) {
    		System.out.print(line + arr[i]);
    	}
    	reculsive(dep+1);
    	System.out.print(line + FINAL_STRING);
    	
    }
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		System.out.print(FIRST_SENTENCE);
		reculsive(0);
		
	}

}
