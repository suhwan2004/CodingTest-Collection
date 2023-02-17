import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Boj3040 {
    
    static int[] nineArr=new int[9];//아홉명의 난쟁이를 받아온다.
    static int[] sevenArr; //일곱명의 난쟁이를 뽑는다.
    static StringBuilder sb=new StringBuilder();//결과 출력 저장 문자열
    
    public static void main(String[] args) throws NumberFormatException, IOException {
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));//입력 받아오기
        
        
        for(int i=0;i<9;i++) { //9명 난쟁이의 숫자를 
            nineArr[i]=Integer.parseInt(br.readLine());//받아온다.
        }
        
        sevenArr=new int[7];//일곱명의 난쟁이 초기화
        
        combination(0,0);//조합으로 합이 100이 되는 경우 찾기
        
        System.out.println(sb);//결과 출력
    }
    
    static void combination(int cnt, int start) { //내가 몇개를 뽑는지 cnt, 몇번째 index까지 뽑았는지 start로 받아오기
        
        if(sb.length()!=0) return; //이미 결과가 뽑혔다면 아래를 수행할 필요 없다.
        
        if(cnt==7) { //일곱명을 다 뽑았다면
            int sum=0; //합을 구할 변수
            for(int j=0;j<7;j++) {
                sum+=sevenArr[j]; //뽑은 일곱명 난쟁이의 숫자 더하기
            }
            if(sum==100) {//합이 100이라면
                for(int j=0;j<7;j++) {
                    sb.append(sevenArr[j]).append('\n'); //결과문자열을 넣어준다.
                }
                return;
            }
            return;//끝내기
            
        }
        for(int i=start; i<9 ;i++) { //난쟁이 9명에 대해서. start_index부터 조합 시도. i는 index!!
            sevenArr[cnt]=nineArr[i];//일곱명의 난쟁이에 내가 뽑은 아홉명의 난쟁이 중 한 명 넣기
            combination(cnt+1, i+1); //한 명을 뽑았으므로 cnt+1. 다음 숫자부터 조합하므로 i+1로 start를 넘겨주기
        }
    }

}
