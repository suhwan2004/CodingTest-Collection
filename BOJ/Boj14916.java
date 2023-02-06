import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Boj14916 {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int money = Integer.parseInt(br.readLine());
		int coin = 0;
		
        if(money == 1 || money == 3) System.out.println(-1);
        else{
        	if((money%5)%2 != 0) {
			    coin += Math.floor(money/5) - 1 + (money%5 + 5)/2;
		    }else{
			    coin += Math.floor(money/5) + (money%5)/2;
		    }
            System.out.println(coin);
        }
	}

}
