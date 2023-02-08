import java.io.*;

public class Boj2798 {
	static int N, M;
	static int minDiff = Integer.MAX_VALUE;
	static int minVal = 0;
	static int[] cards;
	static boolean[] isSelected;
	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] input = br.readLine().split(" ");
		N = Integer.parseInt(input[0]);
		M = Integer.parseInt(input[1]);
		
		isSelected = new boolean[N];
		cards = new int[N];
		String[] cardsStringArr = br.readLine().split(" ");
		for(int i = 0; i < cardsStringArr.length; i++) {
			cards[i] = Integer.parseInt(cardsStringArr[i]);
		}
		
		blackJac(0, 0);
		System.out.println(minVal);
		
	}
	
	public static void blackJac(int dep, int curSum) {
		if(dep == 3) {
			if( M >= curSum && minDiff > (M - curSum)) {
				minDiff = M - curSum;
				minVal = curSum;
			}
			return;
		}
		
		for(int i = 0; i < cards.length; i++ ) {
			if(isSelected[i]) continue;
			
			isSelected[i] = true;
			blackJac(dep+1, curSum + cards[i]);
			isSelected[i] = false;
		}
	}

}
