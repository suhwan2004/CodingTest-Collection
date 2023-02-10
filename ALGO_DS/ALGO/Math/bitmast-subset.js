// import java.io.*;
// public class 김수환 {

// 	public static void main(String[] args) throws IOException {
// 		// TODO Auto-generated method stub
// 		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
// 		StringBuilder sb = new StringBuilder();
// 		int len = Integer.parseInt(br.readLine());
// 		String[] input = br.readLine().split(" ");

// 		for (int i = 0; i < (1 << len); i++) {
// 			for (int j = 0; j < len; j++) {
// 				sb.append((i & (1 << j)) != 0 ? input[j] : "X").append("\t");
// 			}
// 			sb.append("\n");
// 		}

// 		System.out.println(sb);
// 	}
// }

function bitmastSubset(len) {
  const input = new Array(len).fill(0);
  const res = [];
  for (let i = 0; i < 1 << len; i++) {
    let str = "";
    for (let j = 0; j < len; j++) {
      str += (i & (1 << j)) != 0 ? input[j] : "X";
    }
    res.push(str);
  }
  console.log(res);
}

bitmastSubset(3);
