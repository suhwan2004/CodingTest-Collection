import java.util.*;
import java.io.*;
/*
 * 16:41 ~ 5:35
 */
public class Boj1074 {
	static int N, r, c, cnt;
	public static void main(String[] args) throws IOException{
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		StringBuilder sb = new StringBuilder();
		
		N = Integer.parseInt(st.nextToken());
		r = Integer.parseInt(st.nextToken());
		c = Integer.parseInt(st.nextToken());
		cnt = 0;
		
		help(0,0,0);
		sb.append(cnt);
		System.out.println(sb);
	}
	public static boolean help(int cR, int cC, int dep) {
		//더 이상 쪼갤 필요가 없는 경우(2x2 정사각형을 만들만큼 쪼갬)
		if(N-dep == 1) {
			// l,u
			if(cR == r && cC == c) return true;
			cnt++;
			// r,u
			if(cR == r && (cC+1) == c) return true;
			cnt++;
			// l,d
			if((cR+1) == r && cC == c) return true;
			cnt++;
			// r,d
			if((cR+1) == r && (cC+1) == c) return true;
			cnt++;
			return false;
		}
		
		
		//더 쪼개야 하는 경우.
		
		/*
		 * 더 보러가야 할 때, 조건이 있음.
		 * 지금 보러가는 곳 내부에 해당 좌표가 들어있다는 확신이 있어야됨. 아니라면 그냥 그 내부의 좌표만큼의 값을 더하는게 맞음.
		 */
		int	middle = (int) Math.pow(2, N-dep)/2;
		// 좌상단에서 쪼개짐
		
		if(r>=cR+middle||c>=cC+middle) {
			cnt += middle*middle;
		}else if(help(cR, cC, dep+1)) return true;
		
		//우 상단에서 쪼개짐
		if(r>=cR+middle || c<cC+middle) {
			cnt += middle*middle;
		}else if(help(cR, cC+middle, dep+1)) return true;
			
		//좌 하단에서 쪼개짐
		if(r<cR+middle || c>=cC+middle) {
			cnt += middle*middle;
		}else if(help(cR+middle, cC, dep+1)) return true;
			
		//우 하단에서 쪼개짐
		if(r<cR+middle || c<cC+middle) {
			cnt += middle*middle;
		}else if(help(cR+middle, cC+middle, dep+1)) return true;
		
		return false;
	}
}
