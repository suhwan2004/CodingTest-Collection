import java.io.*;
import java.util.*;

public class Boj1260 {
	static int N, M, V;
	static ArrayList<ArrayList<Integer>> graph;
	static Set<Integer> visited;
	static boolean dfsFlag = false;
	static boolean bfsFlag = false;
	static StringBuilder sb;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		sb = new StringBuilder();
		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		V = Integer.parseInt(st.nextToken());

		graph = new ArrayList<ArrayList<Integer>>();

		// 그래프 생성
		for (int i = 0; i <= N; i++) {
			ArrayList<Integer> list = new ArrayList<Integer>();
			graph.add(list);
		}
		for (int i = 0; i < M; i++) {
			st = new StringTokenizer(br.readLine());

			int a = Integer.parseInt(st.nextToken());
			int b = Integer.parseInt(st.nextToken());
			graph.get(a).add(b);
			graph.get(b).add(a);
		}

		for (int i = 0; i < graph.size(); i++) {
			graph.get(i).sort((o1, o2) -> o1 - o2);
		}

		// dfs
		visited = new HashSet<Integer>();
		visited.add(V);
		dfs(V);
		sb.deleteCharAt(sb.length()-1);
		sb.append('\n');
		// bfs
		visited = new HashSet<Integer>();
		Queue<Integer> queue = new LinkedList<Integer>();
		queue.add(V);
		visited.add(V);
		bfs(V, queue);

		System.out.println(sb);
	}

	public static void dfs(int curNode) {
		sb.append(curNode).append(' ');
		for (int nextNode : graph.get(curNode)) {
			if (visited.contains(nextNode))
				continue;
			visited.add(nextNode);
			dfs(nextNode);
		}
	}

	public static void bfs(int curNode, Queue<Integer> queue) {
		while (queue.size() > 0) {
			int node = queue.poll();
			sb.append(node).append(" ");
			for (int connNode : graph.get(node)) {
				if (!visited.contains(connNode)) {
					queue.add(connNode);
					visited.add(connNode);
				}
			}
		}
		sb.deleteCharAt(sb.length() - 1);
	}
}
